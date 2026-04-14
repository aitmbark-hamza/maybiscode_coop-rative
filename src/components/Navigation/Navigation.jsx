import React, { useState, useEffect } from 'react';
import styles from './Navigation.module.css';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Close menu when clicking a link
  const handleScroll = (e, targetId) => {
    e.preventDefault();
    setIsMenuOpen(false); // Close mobile menu
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMenuOpen]);

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <img src="/src/assets/images/logo.png" alt="Logo" className={styles.logoImage} />
      </div>

      {/* Hamburger Toggle Button */}
      <button 
        className={`${styles.menuToggle} ${isMenuOpen ? styles.open : ''}`} 
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        aria-label="Toggle Navigation"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      {/* Navigation Links */}
      <ul className={`${styles.navLinks} ${isMenuOpen ? styles.navActive : ''}`}>
        <li><a href="#home" onClick={(e) => handleScroll(e, 'home')}>Home</a></li>
        <li><a href="#agency" onClick={(e) => handleScroll(e, 'agency')}>Agency</a></li>
        <li><a href="#services" onClick={(e) => handleScroll(e, 'services')}>Services</a></li>
        <li><a href="#portfolio" onClick={(e) => handleScroll(e, 'portfolio')}>Portfolio</a></li>
        <li><a href="#contact" onClick={(e) => handleScroll(e, 'contact')}>Contact</a></li>
        
        {/* Mobile-only message button inside the menu */}
        <li className={styles.mobileOnly}>
          <button className={styles.messageBtnMobile}>Send a message</button>
        </li>
      </ul>

      {/* Desktop Message Button */}
      <button className={styles.messageBtn}>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <rect x="3" y="4" width="18" height="18" rx="2" ry="2" strokeWidth="2"/>
          <line x1="16" y1="2" x2="16" y2="6" strokeWidth="2"/>
          <line x1="8" y1="2" x2="8" y2="6" strokeWidth="2"/>
          <line x1="3" y1="10" x2="21" y2="10" strokeWidth="2"/>
        </svg>
        Send a message
      </button>

      {/* Overlay background when menu is open */}
      {isMenuOpen && <div className={styles.overlay} onClick={() => setIsMenuOpen(false)}></div>}
    </nav>
  );
};

export default Navigation;