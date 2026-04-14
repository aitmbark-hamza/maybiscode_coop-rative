import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styles from './CounterStats.module.css';

gsap.registerPlugin(ScrollTrigger);

const CounterStats = () => {
  const sectionRef = useRef(null);
  const countersRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      countersRef.current.forEach((counter, index) => {
        const target = parseInt(counter.dataset.target);
        gsap.fromTo(counter,
          { textContent: 0 },
          {
            textContent: target,
            duration: 2,
            ease: "power1.out",
            snap: { textContent: 1 },
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 80%",
              toggleActions: "play none none reverse"
            },
            onUpdate: function() {
              counter.textContent = Math.ceil(this.targets()[0].textContent) + "+";
            }
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const stats = [
    { label: "Days of experience.", value: 10, desc: "We have crafted beautiful and engaging web solutions." },
    { label: "Valuable happy clients.", value: 10, desc: "We have crafted beautiful and engaging web solutions." },
    { label: "Presence in countries.", value: 10, desc: "We have crafted beautiful and engaging web solutions." },
    { label: "Worldwide projects.", value: 10, desc: "We have crafted beautiful and engaging web solutions." }
  ];

  return (
    <section ref={sectionRef} className={styles.counterStats}>
      <div className={styles.counterGrid}>
        {stats.map((stat, index) => (
          <div key={index} className={styles.counterItem}>
            <span className={styles.counterLabel}>{stat.label}</span>
            <p className={styles.counterDesc}>{stat.desc}</p>
            <span 
              ref={el => countersRef.current[index] = el}
              data-target={stat.value}
              className={styles.counterNumber}
            >
              0+
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CounterStats;
