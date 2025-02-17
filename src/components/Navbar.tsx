import React from 'react';
import styles from "../css/Navbar.module.css";

const Navbar: React.FC = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>TEST 123</div>
      <ul className={styles.navLinks}>
        <li><a href="#home" className={styles.navItem}>Home</a></li>
        <li><a href="#about" className={styles.navItem}>About</a></li>
        <li><a href="#services" className={styles.navItem}>Services</a></li>
        <li><a href="#contact" className={styles.navItem}>Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
