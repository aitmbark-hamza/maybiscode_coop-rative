import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styles from './TeamSection.module.css';

gsap.registerPlugin(ScrollTrigger);

const TeamSection = () => {
  const sectionRef = useRef(null);
  const teamRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Staggered reveal animation as you scroll down
      gsap.fromTo(
        teamRef.current,
        { 
          opacity: 0, 
          y: 60 
        },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          stagger: 0.2,
          ease: "power4.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse"
          }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const team = [
    { name: "Matthew Taylor", role: "Writer", image: "hbiba.png", social: "facebook" },
    { name: "Btissam Baissar", role: "Developer", image: "ibtissam.png", social: "facebook" },
    { name: "Herman Miller", role: "Designer", image: "mona.png", social: "facebook" },
    { name: "Samira Moukrim", role: "Developer", image: "samira.png", social: "facebook" }
  ];

  return (
    <section ref={sectionRef} className={styles.team}>
      <div className={styles.teamGrid}>
        {team.map((member, index) => (
          <div 
            key={index}
            ref={el => teamRef.current[index] = el}
            className={styles.teamMember}
          >
            <div className={styles.memberImageWrapper}>
              <img src={member.image} alt={member.name} className={styles.memberImage} />
              <div className={styles.socialOverlay}>
                <div className={styles.iconCircle}>
                  <i className="fab fa-facebook-f">f</i>
                </div>
              </div>
            </div>
            <div className={styles.memberInfo}>
              <h4 className={styles.name}>{member.name}</h4>
              <span className={styles.role}>{member.role}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TeamSection;