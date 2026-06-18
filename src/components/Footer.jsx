import React from 'react';

export default function Footer({ personalInfo }) {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="footer text-center">
      <div className="container">
        <span className="footer-logo">{personalInfo.name}</span>
        <div className="d-flex justify-content-center gap-3 mb-4">
          <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="social-btn"><i className="fa-brands fa-linkedin-in"></i></a>
          <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="social-btn"><i className="fa-brands fa-github"></i></a>
        </div>
        <p className="footer-text mb-0">&copy; {currentYear} {personalInfo.name}. All rights reserved.</p>
      </div>
    </footer>
  );
}
