import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';

export default function Hero({ personalInfo }) {
  const typedEl = useRef(null);

  useEffect(() => {
    const typed = new Typed(typedEl.current, {
      strings: ['AI Trainer', 'Data Scientist', 'Python Developer', 'Corporate Consultant'],
      typeSpeed: 60,
      backSpeed: 40,
      backDelay: 2000,
      loop: true,
      cursorChar: '|'
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <section id="home" className="hero-section">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-7 text-start" data-aos="fade-right">
            <span className="hero-subtitle">{personalInfo.subtitle}</span>
            <h1 className="hero-title mt-2">Hi, I'm <br /><span className="hero-gradient-text">{personalInfo.name}</span></h1>
            <div className="hero-typing mb-4">
              I am a <span ref={typedEl}></span>
            </div>
            <p className="hero-desc mb-5">{personalInfo.intro}</p>
            <div className="hero-buttons d-flex flex-wrap gap-3 mb-5">
              <a href="#projects" className="btn-gradient">View Projects <i className="fa-solid fa-arrow-right"></i></a>
              <a href={personalInfo.resumeUrl} download className="btn-glass">Download Resume <i className="fa-solid fa-download"></i></a>
              <a href="#contact" className="btn-glass">Contact Me <i className="fa-solid fa-paper-plane"></i></a>
            </div>
            <div className="hero-socials d-flex gap-3">
              <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="social-btn" aria-label="LinkedIn"><i className="fa-brands fa-linkedin-in"></i></a>
              <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="social-btn" aria-label="GitHub"><i className="fa-brands fa-github"></i></a>
            </div>
          </div>
          <div className="col-lg-5 text-center mt-5 mt-lg-0" data-aos="fade-left">
            <div className="hero-glow-ring">
              <div className="hero-glow-inner">
                {/* SVG Illustration Avatar */}
                <svg className="hero-avatar" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                  <rect width="100%" height="100%" fill="#121829" />
                  <line x1="10" y1="0" x2="10" y2="100" stroke="rgba(0, 242, 254, 0.15)" strokeWidth="0.5" />
                  <line x1="30" y1="0" x2="30" y2="100" stroke="rgba(0, 242, 254, 0.15)" strokeWidth="0.5" />
                  <line x1="50" y1="0" x2="50" y2="100" stroke="rgba(0, 242, 254, 0.15)" strokeWidth="0.5" />
                  <line x1="70" y1="0" x2="70" y2="100" stroke="rgba(0, 242, 254, 0.15)" strokeWidth="0.5" />
                  <line x1="90" y1="0" x2="90" y2="100" stroke="rgba(0, 242, 254, 0.15)" strokeWidth="0.5" />
                  
                  <circle cx="30" cy="40" r="1.5" fill="#8a2be2" />
                  <circle cx="70" cy="30" r="2.5" fill="#00f2fe" />
                  <path d="M 30 40 L 50 65 L 70 30" fill="none" stroke="rgba(0, 242, 254, 0.3)" strokeWidth="1" />
                  
                  <path d="M50,32 A10,10 0 0,0 50,52 A10,10 0 0,0 50,32" fill="#00f2fe" opacity="0.8" />
                  <path d="M25,85 C25,70 35,60 50,60 C65,60 75,70 75,85 Z" fill="#8a2be2" opacity="0.8" />
                  
                  <path d="M35,80 L65,80 L68,85 L32,85 Z" fill="#f8fafc" />
                  <rect x="38" y="72" width="24" height="8" rx="1" fill="#00f2fe" opacity="0.3" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
