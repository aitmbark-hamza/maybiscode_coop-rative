import React from 'react';
import styles from './MarqueeText.module.css';

const MarqueeText = () => {
  return (
    <div className={styles.marqueeSection}>
      <div className={styles.marqueeTextTrack}>
        <span>Solutions - Provide branding solutions - Provide branding solutions - Provide branding solutions - </span>
        <span>Solutions - Provide branding solutions - Provide branding solutions - Provide branding solutions - </span>
      </div>
    </div>
  );
};

export default MarqueeText;
