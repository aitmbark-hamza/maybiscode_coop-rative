import React from 'react';
import styles from './App.module.css';

// Import all components
import Navigation from './components/Navigation';
import HeroSection from './components/HeroSection';
import LogoMarquee from './components/LogoMarquee';
import AboutSection from './components/AboutSection';
import StatsSection from './components/StatsSection';
import MarqueeText from './components/MarqueeText';
import ProjectsSection from './components/ProjectsSection';
import ServicesSection from './components/ServicesSection';
import CounterStats from './components/CounterStats';
import TeamSection from './components/TeamSection';
import TestimonialsSection from './components/TestimonialsSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className={styles.app}>
      <Navigation />
      <main>
        <HeroSection />
        <LogoMarquee />
        <AboutSection />
        <StatsSection />
        <MarqueeText />
        <ProjectsSection />
        <ServicesSection />
        <CounterStats />
        <TeamSection />
        <TestimonialsSection />
      </main>
      <Footer />
    
    </div>
  );
}

export default App
