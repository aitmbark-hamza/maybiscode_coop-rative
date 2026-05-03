import React, { useState, useEffect } from 'react';
import styles from './Projects.module.css';
import { Link } from 'react-router-dom';

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const projects = [
    { id: 1, title: "Google Business Optimization", category: "Google Business", image: "coogle my business.jpeg", description: "Strategic local visibility maximization through advanced profile architecture.", tags: ["SEO", "Local", "Growth"] },
    { id: 2, title: "Corporate Web Experience", category: "Web", image: "site wep.jpeg", description: "A high-performance digital ecosystem built for modern corporate needs.", tags: ["React", "Performance", "UI/UX"] },
    { id: 3, title: "Social Media Identity", category: "Social Media", image: "social media desing.jpeg", description: "Comprehensive social strategy focused on content creation and brand storytelling.", tags: ["Social", "Content", "Brand"] },
    { id: 4, title: "Next-Gen E-Commerce", category: "Web", image: "site wep.jpeg", description: "Bespoke shopping experience with seamless conversion funnels.", tags: ["Commerce", "Conversion", "UX"] },
    { id: 5, title: "Brand Vision Design", category: "Social Media", image: "social media desing.jpeg", description: "Complete visual identity system for a forward-thinking digital brand.", tags: ["Branding", "Identity", "Logo"] },
    { id: 6, title: "Local Search Architecture", category: "Google Business", image: "coogle my business.jpeg", description: "Advanced geographical indexing strategy to dominate local search results.", tags: ["SEO", "Analytics", "Mapping"] }
  ];

  const categories = ["All", "Web", "Google Business", "Social Media"];

  const filteredProjects = selectedCategory === "All" 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  return (
    <div className={styles.projectsPage}>
      <div className={styles.container}>
        {/* Header Section */}
        <header className={styles.header}>
          <Link to="/" className={styles.backBtn}>
            <span className={styles.arrow}>←</span> Back to Studio
          </Link>
          <h1 className={styles.pageTitle}>Selected <span className={styles.goldText}>Works</span></h1>
          <p className={styles.pageDescription}>
            A curated showcase of our latest digital interventions and brand evolutions.
          </p>
        </header>

        {/* Filter Bar */}
        <nav className={styles.filterBar}>
          {categories.map(category => (
            <button
              key={category}
              className={`${styles.filterBtn} ${selectedCategory === category ? styles.active : ''}`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
              {selectedCategory === category && <div className={styles.dot} />}
            </button>
          ))}
        </nav>

        {/* Grid */}
        <main className={styles.projectsGrid}>
          {filteredProjects.map(project => (
            <article key={project.id} className={styles.projectCard}>
              <div className={styles.imageContainer}>
                <img src={project.image} alt={project.title} className={styles.mainImage} />
                <div className={styles.cardOverlay}>
                  <span className={styles.viewLabel}>View Project</span>
                </div>
              </div>
              
              <div className={styles.cardContent}>
                <div className={styles.cardTop}>
                  <span className={styles.categoryLabel}>{project.category}</span>
                  <div className={styles.divider}></div>
                </div>
                <h3 className={styles.projectTitle}>{project.title}</h3>
                <p className={styles.projectDesc}>{project.description}</p>
                <div className={styles.tagList}>
                  {project.tags.map((tag, i) => (
                    <span key={i} className={styles.tag}>#{tag}</span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </main>
      </div>
    </div>
  );
};

export default Projects;