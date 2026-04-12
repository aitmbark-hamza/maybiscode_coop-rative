import React from 'react';
import styles from '../App.module.css';

const LogoMarquee = () => {
  return (
    <div className={styles.logoMarquee}>
      <div className={styles.marqueeTrack}>
        <span className={styles.logoItem}>Design</span>
        <span className={styles.logoItem}>Development</span>
        <span className={styles.logoItem}>Marketing</span>
        <span className={styles.logoItem}>Consulting</span>
        <span className={styles.logoItem}>Support</span>
        <span className={styles.logoItem}>Design</span>
        <span className={styles.logoItem}>Development</span>
        <span className={styles.logoItem}>Marketing</span>
        <span className={styles.logoItem}>Consulting</span>
        <span className={styles.logoItem}>PayPal</span>
      </div>
    </div>
  );
};

export default LogoMarquee;
