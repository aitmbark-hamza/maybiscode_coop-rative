import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styles from './ServicesSection.module.css';

gsap.registerPlugin(ScrollTrigger);

const ServicesSection = () => {
  const sectionRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const services = [
    { 
      title: "Web Development", 
      content: "Custom-built, performant web solutions tailored to your brand's needs. From landing pages to full-scale applications." 
    },
    { 
      title: "Design", 
      content: "Creative direction, wireframes, and visual concepts from early ideas to clear design specs that align brand, UX, and development." 
    },
    { 
      title: "UI/UX Design", 
      content: "Aesthetic and functional interfaces that captivate users and drive engagement through thoughtful design." 
    },
    { 
      title: "Professional Photography", 
      content: "High-end product and brand photography that elevates your visual identity and tells your story." 
    },
    { 
      title: "Digital Marketing", 
      content: "Data-driven social media strategies and growth campaigns that connect your brand with the right audience." 
    }
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
            { opacity: 0, y: 30 },
            { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
          );
        },
        onLeave: () => {
          gsap.to(sectionRef.current, { opacity: 0, y: -20, duration: 0.6 });
        },
        onEnterBack: () => {
          gsap.fromTo(sectionRef.current,
            { opacity: 0, y: 30 },
            { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
          );
        },
        onLeaveBack: () => {
          gsap.to(sectionRef.current, { opacity: 0, y: 20, duration: 0.6 });
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className={styles.services} id="services">
      <div className={styles.servicesContainer}>
        <div className={styles.servicesHeader}>
          <span className={styles.sectionLabel}>WHAT WE DO</span>
          <h2>Our Services</h2>
          
        </div>
        <div className={styles.accordion}>
          {services.map((service, index) => (
            <div 
              key={index}
              className={`${styles.accordionItem} ${activeIndex === index ? styles.active : ''}`}
              onClick={() => setActiveIndex(index)}
            >
              <div className={styles.accordionHeader}>
                <h3>{service.title}</h3>
                <span className={styles.accordionIcon}>{activeIndex === index ? '-' : '+'}</span>
              </div>
              <div className={styles.accordionContent}>
                <p>{service.content}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
