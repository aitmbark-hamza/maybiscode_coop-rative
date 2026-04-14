import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MoveLeft, MoveRight } from 'lucide-react'; // Using lucide-react for arrows
import styles from './TestimonialsSection.module.css';
import LogoMarquee from '../LogoMarquee/LogoMarquee';

gsap.registerPlugin(ScrollTrigger);

const TestimonialsSection = () => {
  const sectionRef = useRef(null);
  const textRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    { 
      text: "There are design companies and then there are user experience. Simply the great designs and best theme for fast loading website.", 
      author: "JACOB KALLING" 
    },
    { 
      text: "Absolutely amazing theme and awesome design with possibilities. It's so very easy to use and to customize everything.", 
      author: "ALEXANDER HARAD" 
    }
  ];

  // 1. Animation for Text Change
  useEffect(() => {
    gsap.fromTo(textRef.current, 
      { opacity: 0, x: 20 }, 
      { opacity: 1, x: 0, duration: 0.5, ease: "power2.out" }
    );
  }, [currentIndex]);

  // 2. Auto-change every 1.5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 1500);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  // 3. Entrance Animation
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".animate-in", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
        y: 50,
        opacity: 0,
        duration: 1,
        stagger: 0.2
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  // Helper to highlight "experience"
  const formatText = (text) => {
    return text.split('experience').map((part, i, arr) => (
      <React.Fragment key={i}>
        {part}
        {i < arr.length - 1 && <span className={styles.highlight}>experience.</span>}
      </React.Fragment>
    ));
  };

  return (
    <section ref={sectionRef} className={styles.testimonials}>
      <div className={styles.testimonialsContainer}>
        
        {/* Left Side */}
        <div className={`${styles.testimonialsHeader} animate-in`}>
          <h2 className={styles.title}>We are trusted <br /> by our clients</h2>
          <div className={styles.testimonialNav}>
            <button 
              className={styles.navBtn} 
              onClick={() => setCurrentIndex(prev => prev === 0 ? testimonials.length - 1 : prev - 1)}
            >
              <MoveLeft size={20} />
            </button>
            <button 
              className={styles.navBtn} 
              onClick={() => setCurrentIndex(prev => (prev + 1) % testimonials.length)}
            >
              <MoveRight size={20} />
            </button>
          </div>
        </div>

        {/* Right Side */}
        <div className={`${styles.testimonialContent} animate-in`} ref={textRef}>
          <p className={styles.testimonialText}>
            {formatText(testimonials[currentIndex].text)}
          </p>
          <span className={styles.testimonialAuthor}>
            <span className={styles.atSymbol}>@</span>
            {testimonials[currentIndex].author}
          </span>
        </div>
      </div>

      <div className={styles.marqueeWrapper}>
        <LogoMarquee />
      </div>
    </section>
  );
};

export default TestimonialsSection;