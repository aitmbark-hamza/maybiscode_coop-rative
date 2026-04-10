import React, { useState, useEffect, useRef } from 'react';
import styles from './ProjectsSection.module.css';

const projects = [
  {
    id: 1,
    number: '01',
    category: 'BRANDING AND',
    categoryHighlight: 'DESIGN',
    title: 'Whiteline\nface\nbeauty.',
    description: 'Creating products with a strong identity. Provide brilliant ideas and adding the world called success brand. We deliver customized marketing campaign to use your audience to make a positive move.',
    image: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=800&h=1000&fit=crop',
    link: '/projects/whiteline'
  },
  {
    id: 2,
    number: '02',
    category: 'WEB DEVELOPMENT AND',
    categoryHighlight: 'DESIGN',
    title: 'Rebounce\nforce riders.',
    description: 'We specialize in developing products with a distinct and compelling identity. Our team excels generating brilliant ideas that propel brands to success. Through customized marketing campaigns.',
    image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&h=1000&fit=crop',
    link: '/projects/rebounce'
  },
  {
    id: 3,
    number: '03',
    category: 'BRANDING AND',
    categoryHighlight: 'DESIGN',
    title: 'Decorator\nhard carpet.',
    description: 'Creating products with a strong identity. Provide brilliant ideas and adding the world called success brand. We deliver customized marketing campaign to use your audience to make a positive move.',
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=1000&fit=crop',
    link: '/projects/decorator'
  },
];

const ProjectShowcaseScroll = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRefs = useRef([]);

  useEffect(() => {
    const observers = [];

    sectionRefs.current.forEach((ref, index) => {
      if (!ref) return;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting && entry.intersectionRatio > 0.5) {
              setActiveIndex(index);
            }
          });
        },
        {
          threshold: [0.5],
          rootMargin: '-20% 0px -20% 0px'
        }
      );

      observer.observe(ref);
      observers.push(observer);
    });

    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, []);

  return (
    <div className={styles.wrapper}>
      <div className={styles.stickyImage}>
        <div className={styles.imageWrapper}>
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`${styles.imageSlide} ${
                index === activeIndex ? styles.active : ''
              } ${index < activeIndex ? styles.slideUp : ''}`}
            >
              <img src={project.image} alt={project.title} />
            </div>
          ))}
        </div>
        
        <div className={styles.verticalLabel}>
          <span>LATEST PROJECTS</span>
        </div>

        <div className={styles.progressBar}>
          <div 
            className={styles.progressFill}
            style={{ height: `${((activeIndex + 1) / projects.length) * 100}%` }}
          />
        </div>
      </div>

      <div className={styles.scrollContent}>
        {projects.map((project, index) => (
          <div
            key={project.id}
            ref={(el) => (sectionRefs.current[index] = el)}
            className={styles.projectSection}
          >
            <div className={styles.bgNumber}>
              <span className={index === activeIndex ? styles.active : ''}>
                {project.number}
              </span>
            </div>

            <div className={styles.content}>
              <div className={styles.category}>
                <span className={styles.line}></span>
                <span className={styles.categoryText}>
                  {project.category}{' '}
                  <span className={styles.highlight}>
                    {project.categoryHighlight}
                  </span>
                </span>
              </div>

              <h2 className={`${styles.title} ${index === activeIndex ? styles.animate : ''}`}>
                {project.title.split('\n').map((line, i) => (
                  <span 
                    key={i} 
                    className={styles.titleLine}
                    style={{ animationDelay: `${0.1 + i * 0.1}s` }}
                  >
                    {line}
                  </span>
                ))}
              </h2>

              <p className={`${styles.description} ${index === activeIndex ? styles.animate : ''}`}>
                {project.description}
              </p>

              <a 
                href={project.link} 
                className={`${styles.ctaLink} ${index === activeIndex ? styles.animate : ''}`}
              >
                <span>Explore project</span>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </a>
            </div>

            <div className={styles.sectionIndicator}>
              <span className={styles.current}>{String(index + 1).padStart(2, '0')}</span>
              <span className={styles.divider}>/</span>
              <span className={styles.total}>{String(projects.length).padStart(2, '0')}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectShowcaseScroll;