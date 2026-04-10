import React from 'react';
import styles from './Navigation.module.css';

const Navigation = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <span>Branding</span>
        <svg className={styles.logoIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
      <ul className={styles.navLinks}>
        <li><a href="#home">Home</a></li>
        <li><a href="#agency">Agency</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
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
