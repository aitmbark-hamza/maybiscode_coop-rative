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
      // Logic to check if screen is mobile for smoother triggers
      const isMobile = window.innerWidth < 768;

      gsap.fromTo(
        teamRef.current,
        { 
          opacity: 0, 
          y: isMobile ? 40 : 60 // Less movement on mobile feels cleaner
        },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          stagger: isMobile ? 0.1 : 0.2, // Faster stagger on mobile
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            // Trigger earlier on mobile so the user sees the animation mid-scroll
            start: isMobile ? "top 90%" : "top 80%", 
            toggleActions: "play none none reverse"
          }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const team = [
    { name: "Yassmina Hammouch", role: "Developer", image: "/src/assets/images/Yassmina Hammouch.png" },
    { name: "Samira Moukrim", role: "Developer", image: "/src/assets/images/samira.png" },
    { name: "Nnoha Anissi", role: "Developer", image: "/src/assets/images/hbiba.png" },
    { name: "Ibtissam Baissar", role: "Designer", image: "/src/assets/images/ibtissam.png" },
    { name: "Mouna Hammouch", role: "Developer", image: "/src/assets/images/mouna.png" },
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
                  <span className={styles.fbIcon}>f</span>
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