import React from 'react';

export default function Experience({ experience }) {
  return (
    <section id="experience" className="section-padding">
      <div className="container">
        <div className="section-title-wrap section-title-center" data-aos="fade-up">
          <span className="section-subtitle">TIMELINE</span>
          <h2 className="section-title">My Journey</h2>
          <div className="section-title-bar"></div>
        </div>
        
        <div className="timeline-container">
          {experience.map((exp, idx) => (
            <div className="timeline-item" key={idx} data-aos="fade-up" data-aos-delay={(idx + 1) * 100}>
              <div className="timeline-badge"></div>
              <div className="glass-panel timeline-card">
                <span className="timeline-date">{exp.period}</span>
                <h3 className="timeline-title">{exp.role}</h3>
                <h4 className="timeline-subtitle">{exp.company}</h4>
                <ul className="timeline-points">
                  {exp.points.map((pt, pIdx) => (
                    <li key={pIdx}>{pt}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
