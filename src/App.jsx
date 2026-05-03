import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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

// Import pages
import Projects from './pages/Projects';

// Home page component
const HomePage = () => (
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
);

function App() {
  return (
    <Router>
      <div className={styles.app}>
        <Navigation />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App
