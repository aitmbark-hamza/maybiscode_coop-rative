import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styles from './HeroSection.module.css';

gsap.registerPlugin(ScrollTrigger);

const HeroSection = () => {
  const heroRef = useRef(null);
  const textRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Initial animation on load
      gsap.fromTo(textRef.current, 
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
      );
      
      gsap.fromTo(imageRef.current,
        { opacity: 0, scale: 1.1 },
        { opacity: 1, scale: 1, duration: 1.2, ease: "power3.out", delay: 0.3 }
      );

      // Scroll animations
      ScrollTrigger.create({
        trigger: heroRef.current,
        start: "top bottom",
        end: "bottom top",
        onEnter: () => {
          gsap.to(textRef.current, { opacity: 1, y: 0, duration: 0.8 });
          gsap.to(imageRef.current, { opacity: 1, scale: 1, duration: 1 });
        },
        onLeave: () => {
          gsap.to(textRef.current, { opacity: 0, y: -30, duration: 0.6 });
          gsap.to(imageRef.current, { opacity: 0, scale: 0.9, duration: 0.8 });
        },
        onEnterBack: () => {
          gsap.to(textRef.current, { opacity: 1, y: 0, duration: 0.8 });
          gsap.to(imageRef.current, { opacity: 1, scale: 1, duration: 1 });
        },
        onLeaveBack: () => {
          gsap.to(textRef.current, { opacity: 0, y: 50, duration: 0.6 });
          gsap.to(imageRef.current, { opacity: 0, scale: 1.1, duration: 0.8 });
        }
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={heroRef} className={styles.hero} id="home">
      <div className={styles.heroContent}>
        <div className={styles.sideText}>
          <span>ADVANCED BRANDING SOLUTIONS</span>
        </div>
        <div ref={textRef} className={styles.heroText}>
          <h1>Provide branding solutions to grow your business.</h1>
          <p>Creating products with a strong identity. We provide brilliant ideas and adding the world called success brand.</p>
          <button className={styles.ctaBtn}>
            Let's talk - Send a message
          </button>
          <div className={styles.slideIndicator}>
            <span>01</span>
            <div className={styles.indicatorLine}>
              <div className={styles.indicatorProgress}></div>
            </div>
            <span>03</span>
          </div>
        </div>
        <div ref={imageRef} className={styles.heroImage}>
          <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80" alt="Team collaboration" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
