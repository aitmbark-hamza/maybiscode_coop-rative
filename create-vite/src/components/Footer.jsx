import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer} id="contact">
      <div className={styles.footerContainer}>
        {/* Top Section */}
        <div className={styles.footerTop}>
          <div className={styles.leftColumn}>
            <h2 className={styles.headline}>Let’s make something <br/>great work together.</h2>
            <div className={styles.contactWrapper}>
              <div className={styles.contactBox}>
                <span className={styles.label}>CALL OUR OFFICE</span>
                <p className={styles.info}>+1 234 567 8910</p>
              </div>
              <div className={styles.contactBox}>
                <span className={styles.label}>SEND A MESSAGE</span>
                <p className={styles.info}>info@domain.com</p>
              </div>
            </div>
          </div>

          <div className={styles.rightColumns}>
            <div className={styles.linkGroup}>
              <h4 className={styles.groupTitle}>COMPANY</h4>
              <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#agency">Agency</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#portfolio">Portfolio</a></li>
                <li><a href="#contact">Contact</a></li>
              </ul>
            </div>
            <div className={styles.linkGroup}>
              <h4 className={styles.groupTitle}>FOLLOW US</h4>
              <ul>
                <li><a href="#">Pinterest</a></li>
                <li><a href="#">Twitter</a></li>
                <li><a href="#">Dribbble</a></li>
                <li><a href="#">Instagram</a></li>
                <li><a href="#">Behance</a></li>
              </ul>
            </div>
            <div className={styles.logoContainer}>
              <span className={styles.logoText}>Branding</span>
              <svg className={styles.logoIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M22 2L11 13M22 2L15 22L11 13M11 13L2 9L22 2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className={styles.footerBottom}>
          <p className={styles.legalText}>
            This site is protected by reCAPTCHA and the Google <a>privacy policy</a> and <a>terms of service</a> apply. 
            You must not use this website if you disagree with any of these website standard terms and conditions.
          </p>
          <p className={styles.copyright}>
            © 2026 Crafto is Powered by <a href="#">ThemeZaa</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;