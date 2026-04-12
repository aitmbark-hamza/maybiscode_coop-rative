import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styles from './AboutSection.module.css';

gsap.registerPlugin(ScrollTrigger);

const AboutSection = () => {
  const sectionRef = useRef(null);
  const imagesRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Enhanced scroll animations
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top 80%",
        end: "bottom 20%",
        onEnter: () => {
          gsap.fromTo(imagesRef.current,
            { opacity: 0, x: -50 },
            { opacity: 1, x: 0, duration: 1, ease: "power3.out" }
          );
          gsap.fromTo(contentRef.current,
            { opacity: 0, x: 50 },
            { opacity: 1, x: 0, duration: 1, delay: 0.2, ease: "power3.out" }
          );
        },
        onLeave: () => {
          gsap.to(imagesRef.current, { opacity: 0, x: -30, duration: 0.6 });
          gsap.to(contentRef.current, { opacity: 0, x: 30, duration: 0.6 });
        },
        onEnterBack: () => {
          gsap.fromTo(imagesRef.current,
            { opacity: 0, x: -50 },
            { opacity: 1, x: 0, duration: 1, ease: "power3.out" }
          );
          gsap.fromTo(contentRef.current,
            { opacity: 0, x: 50 },
            { opacity: 1, x: 0, duration: 1, delay: 0.2, ease: "power3.out" }
          );
        },
        onLeaveBack: () => {
          gsap.to(imagesRef.current, { opacity: 0, x: 30, duration: 0.6 });
          gsap.to(contentRef.current, { opacity: 0, x: -30, duration: 0.6 });
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
            <img src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=400&q=80" alt="Team high five" />
            <img src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=400&q=80" alt="Working professional" />
            <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80" alt="Professional portrait" />
          </div>
        </div>
        <div ref={contentRef} className={styles.aboutContent}>
          <span className={styles.sectionLabel}>ABOUT MAYBISCODE COOPERATIVE</span>
          <h2>Digital Excellence, Crafted with Vision</h2>
          <p>A women-led collective delivering exceptional web development, design, photography, and digital marketing solutions. Creating products with a strong identity and delivering customized campaigns to help your audience make positive moves.</p>
          <div className={styles.aboutButtons}>
            <button className={styles.exploreBtn}>Explore details</button>
            <button className={styles.moreBtn}>More services</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
