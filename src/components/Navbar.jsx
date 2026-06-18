import React, { useState, useEffect } from 'react';

export default function Navbar({ theme, toggleTheme }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar navbar-expand-lg navbar-dark fixed-top navbar-glass ${scrolled ? 'scrolled' : ''}`} id="navbar-main">
      <div className="container">
        <a className="navbar-brand navbar-brand-custom" href="#home">Debpriya G.</a>
        <button className="navbar-toggler border-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto align-items-lg-center navbar-collapse-custom">
            <li className="nav-item">
              <a className="nav-link nav-link-custom active" href="#home">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link nav-link-custom" href="#about">About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link nav-link-custom" href="#skills">Skills</a>
            </li>
            <li className="nav-item">
              <a className="nav-link nav-link-custom" href="#projects">Projects</a>
            </li>
            <li className="nav-item">
              <a className="nav-link nav-link-custom" href="#experience">Experience</a>
            </li>
            <li className="nav-item">
              <a className="nav-link nav-link-custom" href="#certifications">Certifications</a>
            </li>
            <li className="nav-item">
              <a className="nav-link nav-link-custom" href="#contact">Contact</a>
            </li>
            <li className="nav-item ms-lg-3 mt-3 mt-lg-0">
              <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle Theme">
                <i className={`fa-solid ${theme === 'light' ? 'fa-moon' : 'fa-sun'}`}></i>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
