"use client";

import React, { useState, useEffect } from "react";
import styles from "../css/Navber.module.css";

const Navbar: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setIsVisible(false); // ซ่อน navbar เมื่อเลื่อนลง
      } else {
        setIsVisible(true); // แสดง navbar เมื่อเลื่อนขึ้น
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <nav className={`${styles.navbar} ${isVisible ? styles.show : styles.hide}`}>
      <div className={styles.container}>
        <div className={styles.logo}>TEST 123</div>
        <ul className={styles["nav-links"]}>
          <li><a href="#home" className="nav-item">Home</a></li>
          <li><a href="#about" className="nav-item">About</a></li>
          <li><a href="#services" className="nav-item">Services</a></li>
          <li><a href="#contact" className="nav-item">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
