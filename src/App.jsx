import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

// Import Data
import { portfolioData } from './data/portfolioData';

// Import Components
import Navbar from './components/Navbar';
import CanvasParticles from './components/CanvasParticles';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('portfolio-theme') || 'dark';
  });

  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    // Initial AOS setup
    AOS.init({
      duration: 800,
      once: true,
      easing: 'ease-out-quad'
    });

    // Scroll-to-top show/hide monitor
    const handleScroll = () => {
      if (window.scrollY > 500) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Sync theme with HTML attribute & LocalStorage
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('portfolio-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'dark' ? 'light' : 'dark'));
  };

  const handleScrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <>
      {/* Interactive canvas background */}
      <CanvasParticles theme={theme} />

      {/* Floating abstract blobs */}
      <div className="bg-blobs-container">
        <div className="bg-blob blob-1"></div>
        <div className="bg-blob blob-2"></div>
        <div className="bg-blob blob-3"></div>
      </div>

      {/* Navigation header */}
      <Navbar theme={theme} toggleTheme={toggleTheme} />

      {/* Main Sections */}
      <Hero personalInfo={portfolioData.personalInfo} />
      <About about={portfolioData.about} education={portfolioData.education} />
      <Skills skills={portfolioData.skills} />
      <Projects projects={portfolioData.projects} />
      <Experience experience={portfolioData.experience} />
      <Certifications certifications={portfolioData.certifications} />
      
      {/* Resume CTA Section */}
      <section id="resume-download" className="section-padding text-center bg-secondary-glow">
        <div className="container">
          <div className="glass-panel py-5 px-4" data-aos="zoom-in">
            <h2 className="mb-3">Ready to Review my Credentials?</h2>
            <p className="text-secondary mb-5">
              Get a comprehensive look at my education, complete skill profile, and work history. Download the formal PDF format below.
            </p>
            <a href={portfolioData.personalInfo.resumeUrl} download className="btn-gradient px-5 py-3">
              <i className="fa-solid fa-file-pdf"></i> Download Official Resume
            </a>
          </div>
        </div>
      </section>

      <Contact personalInfo={portfolioData.personalInfo} />
      <Footer personalInfo={portfolioData.personalInfo} />

      {/* Scroll to top action */}
      <button 
        className={`scroll-to-top ${showScrollTop ? 'show' : ''}`} 
        onClick={handleScrollTop}
        aria-label="Scroll to top"
      >
        <i className="fa-solid fa-arrow-up"></i>
      </button>
    </>
  );
}
