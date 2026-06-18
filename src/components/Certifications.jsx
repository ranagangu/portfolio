import React from 'react';

export default function Certifications({ certifications }) {
  return (
    <section id="certifications" className="section-padding">
      <div className="container">
        <div className="section-title-wrap section-title-center" data-aos="fade-up">
          <span className="section-subtitle">CREDENTIALS</span>
          <h2 className="section-title">Certifications</h2>
          <div className="section-title-bar"></div>
        </div>
        <div className="row g-4">
          {certifications.map((cert, idx) => (
            <div className="col-md-6 col-lg-4" key={idx} data-aos="fade-up" data-aos-delay={(idx + 1) * 100}>
              <div className="glass-panel cert-card">
                <div className="cert-icon"><i className={cert.iconClass}></i></div>
                <div>
                  <h3 className="cert-title">{cert.title}</h3>
                  <p className="cert-issuer">{cert.issuer}</p>
                  <span className="cert-date">{cert.date}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
