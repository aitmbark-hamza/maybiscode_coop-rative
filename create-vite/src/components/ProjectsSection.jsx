import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styles from '../App.module.css';

gsap.registerPlugin(ScrollTrigger);

const ProjectsSection = () => {
  const sectionRef = useRef(null);
  const projectsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      projectsRef.current.forEach((project, index) => {
        gsap.fromTo(project,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            scrollTrigger: {
              trigger: project,
              start: "top 85%",
              toggleActions: "play none none reverse"
            }
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const projects = [
    {
      id: "01",
      category: "BRANDING AND DESIGN",
      title: "Whiteline face beauty.",
      image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=800&q=80",
      desc: "Creating products with a strong identity. Provide brilliant ideas and adding the world called success brand. We deliver customized marketing campaign to use your audience to make a positive move."
    },
    {
      id: "02",
      category: "WEB DEVELOPMENT AND DESIGN",
      title: "Rebounce force riders.",
      image: "https://images.unsplash.com/photo-1542401886-65d6c61db217?w=800&q=80",
      desc: "We specialize in developing products with a distinct and compelling identity. Our team excels generating brilliant ideas that propel brands to success. Through customized marketing campaigns."
    },
    {
      id: "03",
      category: "BRANDING AND DESIGN",
      title: "Decorator hard carpet.",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
      desc: "Creating products with a strong identity. Provide brilliant ideas and adding the world called success brand. We deliver customized marketing campaign to use your audience to make a positive move."
    }
  ];

  return (
    <section ref={sectionRef} className={styles.projects} id="portfolio">
      <div className={styles.sideLabel}>LATEST PROJECTS</div>
      {projects.map((project, index) => (
        <div 
          key={project.id}
          ref={el => projectsRef.current[index] = el}
          className={styles.projectItem}
        >
          <div className={styles.projectImage}>
            <img src={project.image} alt={project.title} />
            <span className={styles.projectNumber}>{project.id}</span>
          </div>
          <div className={styles.projectContent}>
            <span className={styles.projectCategory}>{project.category}</span>
            <h2>{project.title}</h2>
            <p>{project.desc}</p>
            <button className={styles.projectBtn}>
              Explore project <span>hover</span>
            </button>
          </div>
        </div>
      ))}
    </section>
  );
};

export default ProjectsSection;
