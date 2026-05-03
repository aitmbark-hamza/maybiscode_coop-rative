import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styles from './AboutSection.module.css';

gsap.registerPlugin(ScrollTrigger);

const AboutSection = () => {
  const sectionRef = useRef(null);
  const imagesRef = useRef(null);
  const [selectedImg, setSelectedImg] = useState(null); // State for the big image

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Entrance Animation
      gsap.from(imagesRef.current.querySelectorAll('img'), {
        y: 60,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
        }
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className={styles.about} id="agency">
      <div className={styles.aboutContainer}>
        <div ref={imagesRef} className={styles.aboutImages}>
          <div className={styles.imageStack}>
            <img 
              src="coogle my business.jpeg" 
              alt="Business" 
              onClick={() => setSelectedImg("coogle my business.jpeg")} 
            />
            <img 
              src="site wep.jpeg" 
              alt="Website" 
              onClick={() => setSelectedImg("site wep.jpeg")} 
            />
            <img 
              src="social media desing.jpeg" 
              alt="Design" 
              onClick={() => setSelectedImg("social media desing.jpeg")} 
            />
          </div>
        </div>

        <div className={styles.aboutContent}>
          <span className={styles.sectionLabel}>ABOUT MAYBISCODE</span>
          <h2>Digital Excellence, Crafted with Vision</h2>
          <p>A women-led collective delivering exceptional digital solutions.</p>
          <div className={styles.aboutButtons}>
            <button className={styles.exploreBtn}>Explore details</button>
          </div>
        </div>
      </div>

      {/* --- LIGHTBOX (The Big Image View) --- */}
      {selectedImg && (
        <div className={styles.lightbox} onClick={() => setSelectedImg(null)}>
          <span className={styles.closeBtn}>&times;</span>
          <img src={selectedImg} alt="Enlarged view" onClick={(e) => e.stopPropagation()} />
        </div>
      )}
    </section>
  );
};

export default AboutSection;