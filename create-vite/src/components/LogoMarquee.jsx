import React from 'react';
import styles from '../App.module.css';

const LogoMarquee = () => {
  return (
    <div className={styles.logoMarquee}>
      <div className={styles.marqueeTrack}>
        <span className={styles.logoItem}>Walmart</span>
        <span className={styles.logoItem}>logitech</span>
        <span className={styles.logoItem}>monday</span>
        <span className={styles.logoItem}>Google</span>
        <span className={styles.logoItem}>PayPal</span>
        <span className={styles.logoItem}>Walmart</span>
        <span className={styles.logoItem}>logitech</span>
        <span className={styles.logoItem}>monday</span>
        <span className={styles.logoItem}>Google</span>
        <span className={styles.logoItem}>PayPal</span>
      </div>
    </div>
  );
};

export default LogoMarquee;
