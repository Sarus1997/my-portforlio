"use client";

import React, { useState, useEffect } from 'react';
import "../scss/navbar.scss";

const Navbar: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
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

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
    document.body.style.overflow = !isSidebarOpen ? 'hidden' : 'auto';
  };

  return (
    <>
      <nav className={`navbar ${!isVisible ? 'navbar--hidden' : ''}`}>
        <div className="navbar__container">
          <div className="navbar__logo">
            TEST 123
          </div>
          <button
            className={`navbar__toggle ${isSidebarOpen ? 'active' : ''}`}
            onClick={toggleSidebar}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </nav>

      {/* Overlay */}
      <div
        className={`sidebar-overlay ${isSidebarOpen ? 'active' : ''}`}
        onClick={toggleSidebar}
      />

      {/* Sidebar */}
      <aside className={`sidebar ${isSidebarOpen ? 'active' : ''}`}>
        <div className="sidebar__content">
          <div className="sidebar__header">
            <div className="navbar__logo">TEST 123</div>
            <button
              className={`navbar__toggle active`}
              onClick={toggleSidebar}
              aria-label="Close menu"
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
          <ul className="sidebar__links">
            <li><a href="#home" onClick={toggleSidebar}>Home</a></li>
            <li><a href="#about" onClick={toggleSidebar}>About</a></li>
            <li><a href="#services" onClick={toggleSidebar}>Services</a></li>
            <li><a href="#contact" onClick={toggleSidebar}>Contact</a></li>
          </ul>
        </div>
      </aside>
    </>
  );
};

export default Navbar;