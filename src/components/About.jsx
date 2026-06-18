import React from 'react';

export default function About({ about, education }) {
  return (
    <section id="about" className="section-padding">
      <div className="container">
        <div className="section-title-wrap section-title-center" data-aos="fade-up">
          <span className="section-subtitle">DISCOVER</span>
          <h2 className="section-title">About Me</h2>
          <div className="section-title-bar"></div>
        </div>
        <div className="row g-4">
          <div className="col-lg-6" data-aos="fade-right">
            <div className="about-card glass-panel">
              <h3 className="mb-4">Who I Am</h3>
              <p className="text-secondary mb-4">{about.bioParagraph1}</p>
              <p className="text-secondary mb-5">{about.bioParagraph2}</p>
              <div className="row g-3">
                {about.stats.map((stat, idx) => (
                  <div className="col-sm-6" key={idx}>
                    <div className="stat-item">
                      <span className="stat-number">{stat.number}</span>
                      <span className="stat-label">{stat.label}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="col-lg-6" data-aos="fade-left">
            <div className="about-card glass-panel">
              <h3 className="mb-4">Education &amp; Background</h3>
              <div className="timeline-education">
                {education.map((edu, idx) => (
                  <div className="edu-item" key={idx}>
                    <span className="edu-year">{edu.period}</span>
                    <h4 className="edu-degree">{edu.degree}</h4>
                    <p className="edu-inst">{edu.institution}</p>
                  </div>
                ))}
              </div>
              <h3 className="mt-5 mb-4">Core Focus</h3>
              <p className="text-secondary">{about.coreFocus}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
