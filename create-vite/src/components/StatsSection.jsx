import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styles from '../App.module.css';

gsap.registerPlugin(ScrollTrigger);

const StatsSection = () => {
  const sectionRef = useRef(null);
  const statsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      statsRef.current.forEach((stat, index) => {
        gsap.fromTo(stat,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            delay: index * 0.2,
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 85%",
              toggleActions: "play none none reverse"
            }
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const stats = [
    { number: "1336+", title: "Over 1336+ success worldwide projects.", desc: "We create compelling web designs, which are the right-fit for your target groups." },
    { number: "756+", title: "Over 756+ happy clients and counting.", desc: "We create compelling web designs, which are the right-fit for your target groups." },
    { number: "11+", title: "Our presence in over 11+ countries.", desc: "We create compelling web designs, which are the right-fit for your target groups." }
  ];

  return (
    <section ref={sectionRef} className={styles.stats}>
      <div className={styles.statsContainer}>
        {stats.map((stat, index) => (
          <div 
            key={index} 
            ref={el => statsRef.current[index] = el}
            className={styles.statItem}
          >
            <div className={styles.statDot}></div>
            <h3>{stat.title}</h3>
            <p>{stat.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default StatsSection;
