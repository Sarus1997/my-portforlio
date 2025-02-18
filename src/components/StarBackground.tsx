/* eslint-disable react-hooks/exhaustive-deps */
'use client';

import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import "../scss/star_background.scss";

interface StarLayer extends THREE.Points {
  opacities: number[];
  twinkleSpeed: number[];
}

const StarBackground: React.FC = () => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mountRef.current) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(10, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 2;

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      powerPreference: 'high-performance'
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000);
    mountRef.current.appendChild(renderer.domElement);

    const createCircleTexture = () => {
      const canvas = document.createElement('canvas');
      canvas.width = 32;
      canvas.height = 32;
      const ctx = canvas.getContext('2d');
      if (!ctx) return null;

      const gradient = ctx.createRadialGradient(16, 16, 0, 16, 16, 16);
      gradient.addColorStop(0, 'rgba(255, 255, 255, 1)');
      gradient.addColorStop(0.5, 'rgba(255, 255, 255, 0.5)');
      gradient.addColorStop(1, 'rgba(255, 255, 255, 0.3)');
      ctx.fillStyle = gradient;
      ctx.beginPath();
      ctx.arc(16, 16, 16, 0, Math.PI * 2);
      ctx.fill();
      return new THREE.CanvasTexture(canvas);
    };

    const starTexture = createCircleTexture();

    const createStarLayer = (count: number, size: number, color: number, distance: number): StarLayer => {
      const geometry = new THREE.BufferGeometry();
      const vertices: number[] = [];
      const opacities: number[] = [];
      const twinkleSpeed: number[] = [];

      for (let i = 0; i < count; i++) {
        const theta = Math.random() * Math.PI * 2;
        const phi = Math.random() * Math.PI;
        const r = Math.random() * distance;
        vertices.push(
          r * Math.sin(phi) * Math.cos(theta),
          r * Math.sin(phi) * Math.sin(theta),
          r * Math.cos(phi)
        );
        opacities.push(Math.random() * 0.5 + 0.2);
        twinkleSpeed.push(Math.random() * 0.02 + 0.01);
      }

      geometry.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3));
      const material = new THREE.PointsMaterial({
        color,
        size,
        transparent: true,
        opacity: 0.8,
        blending: THREE.AdditiveBlending,
        map: starTexture || undefined,
        alphaMap: starTexture || undefined,
        alphaTest: 0.001,
        depthWrite: false,
      });

      const points = new THREE.Points(geometry, material) as unknown as StarLayer;
      points.opacities = opacities;
      points.twinkleSpeed = twinkleSpeed;
      return points;
    };

    const starLayers = [
      createStarLayer(500, 0.015, 0xff69b4, 1.5),
      createStarLayer(300, 0.012, 0x4169e1, 1.2),
      createStarLayer(200, 0.014, 0x9400d3, 1.0),
      createStarLayer(150, 0.016, 0xffffff, 0.8),
    ];

    starLayers.forEach(layer => scene.add(layer));

    let time = 0;
    const animate = () => {
      requestAnimationFrame(animate);
      time += 0.0005;

      starLayers.forEach((layer, layerIndex) => {
        layer.rotation.x = Math.sin(time * (layerIndex + 1) * 0.5) * 0.2;
        layer.rotation.y = Math.cos(time * (layerIndex + 1) * 0.3) * 0.2;
        layer.rotation.z = Math.sin(time * (layerIndex + 1) * 0.4) * 0.1;

        if (!layer.geometry.attributes.color) {
          const colors = new Float32Array(layer.geometry.attributes.position.array.length);
          layer.geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
          (layer.material as THREE.PointsMaterial).vertexColors = true;
        }

        const colors = layer.geometry.attributes.color.array as Float32Array;
        const baseColor = new THREE.Color((layer.material as THREE.PointsMaterial).color);

        for (let i = 0; i < layer.opacities.length; i++) {
          layer.opacities[i] += layer.twinkleSpeed[i];
          const opacity = Math.sin(layer.opacities[i]) * 0.3 + 0.5;
          const colorIndex = i * 3;
          colors[colorIndex] = baseColor.r * opacity;
          colors[colorIndex + 1] = baseColor.g * opacity;
          colors[colorIndex + 2] = baseColor.b * opacity;
        }

        layer.geometry.attributes.color.needsUpdate = true;
      });

      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    };

    window.addEventListener('resize', handleResize);

    return () => {
      mountRef.current?.removeChild(renderer.domElement);
      window.removeEventListener('resize', handleResize);

      starLayers.forEach(layer => {
        layer.geometry.dispose();
        (layer.material as THREE.PointsMaterial).dispose();
      });

      starTexture?.dispose();
    };
  }, []);

  return <div ref={mountRef} className="custom_class" />;
};

export default StarBackground;
