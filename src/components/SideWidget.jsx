import React from 'react';
import styles from './SideWidget.module.css';

const SideWidget = () => {
  return (
    <div className={styles.sideWidget}>
      <div className={styles.scrollIndicator}>
        <span>SCROLL</span>
        <div className={styles.scrollLine}></div>
      </div>
      <div className={styles.prebuiltBadge}>
        <span>56+ PRE-BUILT SITES</span>
      </div>
      <div className={styles.envatoBadge}>
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/>
        </svg>
      </div>
    </div>
  );
};

export default SideWidget;
