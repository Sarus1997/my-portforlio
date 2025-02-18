"use client";

import React, { useState, useEffect } from 'react';
import '../scss/navbar.scss';

const Navbar: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={`navbar ${!isVisible ? 'navbar--hidden' : ''}`}>
      <div className="navbar__container">
        <div className="navbar__logo">
          TEST 123
        </div>

        <button
          className={`navbar__mobile-toggle ${isMenuOpen ? 'active' : ''}`}
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <ul className={`navbar__links ${isMenuOpen ? 'navbar__links--open' : ''}`}>
          <li><a href="#home" onClick={() => setIsMenuOpen(false)}>Home</a></li>
          <li><a href="#about" onClick={() => setIsMenuOpen(false)}>About</a></li>
          <li><a href="#services" onClick={() => setIsMenuOpen(false)}>Services</a></li>
          <li><a href="#contact" onClick={() => setIsMenuOpen(false)}>Contact</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;