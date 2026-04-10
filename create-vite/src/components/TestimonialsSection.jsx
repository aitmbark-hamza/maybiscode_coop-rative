import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styles from './TestimonialsSection.module.css';
import LogoMarquee from './LogoMarquee';

gsap.registerPlugin(ScrollTrigger);

const TestimonialsSection = () => {
  const sectionRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    { text: "Absolutely amazing theme and awesome design with possibilities. It's so very easy to use and to customize everything.", author: "ALEXANDER HARAD" },
    { text: "There are design companies and then there are user experience. Simply the great designs and best theme for fast loading website.", author: "JACOB KALLING" }
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Enhanced scroll animations
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top 80%",
        end: "bottom 20%",
        onEnter: () => {
          gsap.fromTo(sectionRef.current,
            { opacity: 0, y: 50 },
            { opacity: 1, y: 0, duration: 1.2, ease: "power3.out" }
          );
        },
        onLeave: () => {
          gsap.to(sectionRef.current, { opacity: 0, y: -30, duration: 0.8 });
        },
        onEnterBack: () => {
          gsap.fromTo(sectionRef.current,
            { opacity: 0, y: 50 },
            { opacity: 1, y: 0, duration: 1.2, ease: "power3.out" }
          );
        },
        onLeaveBack: () => {
          gsap.to(sectionRef.current, { opacity: 0, y: 30, duration: 0.8 });
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className={styles.testimonials}>
      <div className={styles.testimonialsContainer}>
        <div className={styles.testimonialsHeader}>
          <h2>We are trusted by our clients</h2>
          <div className={styles.testimonialNav}>
            <button onClick={() => setCurrentIndex(prev => prev === 0 ? testimonials.length - 1 : prev - 1)}>?</button>
            <button onClick={() => setCurrentIndex(prev => (prev + 1) % testimonials.length)}>?</button>
          </div>
        </div>
        <div className={styles.testimonialContent}>
          <p className={styles.testimonialText}>{testimonials[currentIndex].text}</p>
          <span className={styles.testimonialAuthor}>@{testimonials[currentIndex].author}</span>
        </div>
      </div>
      <LogoMarquee />
    </section>
  );
};

export default TestimonialsSection;
