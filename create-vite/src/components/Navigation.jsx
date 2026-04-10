import React from 'react';
import styles from './Navigation.module.css';

const Navigation = () => {
  const handleScroll = (e, targetId) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <img src="/logo.png" alt="Maybiscode Cooperative" className={styles.logoImage} />
      </div>
      <ul className={styles.navLinks}>
        <li><a href="#home" onClick={(e) => handleScroll(e, 'home')}>Home</a></li>
        <li><a href="#agency" onClick={(e) => handleScroll(e, 'agency')}>Agency</a></li>
        <li><a href="#services" onClick={(e) => handleScroll(e, 'services')}>Services</a></li>
        <li><a href="#portfolio" onClick={(e) => handleScroll(e, 'portfolio')}>Portfolio</a></li>
        <li><a href="#contact" onClick={(e) => handleScroll(e, 'contact')}>Contact</a></li>
      </ul>
      <button className={styles.messageBtn}>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <rect x="3" y="4" width="18" height="18" rx="2" ry="2" strokeWidth="2"/>
          <line x1="16" y1="2" x2="16" y2="6" strokeWidth="2"/>
          <line x1="8" y1="2" x2="8" y2="6" strokeWidth="2"/>
          <line x1="3" y1="10" x2="21" y2="10" strokeWidth="2"/>
        </svg>
        Send a message
      </button>
    </nav>
  );
};

export default Navigation;
