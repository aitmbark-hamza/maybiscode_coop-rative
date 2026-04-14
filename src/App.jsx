import React from 'react';
import styles from './App.module.css';

// Import all components
import Navigation from './components/Navigation/Navigation';
import HeroSection from './components/HeroSection/HeroSection';
import LogoMarquee from './components/LogoMarquee/LogoMarquee';
import AboutSection from './components/AboutSection/AboutSection';
import StatsSection from './components/StatsSection/StatsSection';
import MarqueeText from './components/MarqueeText/MarqueeText';
import ProjectsSection from './components/ProjectsSection/ProjectsSection';
import ServicesSection from './components/ServicesSection/ServicesSection';
import CounterStats from './components/CounterStats/CounterStats';
import TeamSection from './components/TeamSection/TeamSection';
import TestimonialsSection from './components/TestimonialsSection/TestimonialsSection';
import Footer from './components/Footer/Footer';

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
