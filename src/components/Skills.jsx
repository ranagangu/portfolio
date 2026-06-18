import React, { useState, useEffect, useRef } from 'react';

function SkillItem({ name, percent }) {
  const [visible, setVisible] = useState(false);
  const barRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setVisible(true);
        observer.unobserve(entry.target);
      }
    }, { threshold: 0.1 });

    if (barRef.current) {
      observer.observe(barRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div className="skill-item" ref={barRef}>
      <div className="skill-info">
        <span className="skill-name">{name}</span>
        <span className="skill-percentage">{percent}</span>
      </div>
      <div className="skill-progress-bg">
        <div 
          className="skill-progress-fill" 
          style={{ width: visible ? percent : '0%' }}
        ></div>
      </div>
    </div>
  );
}

export default function Skills({ skills }) {
  return (
    <section id="skills" className="section-padding">
      <div className="container">
        <div className="section-title-wrap section-title-center" data-aos="fade-up">
          <span className="section-subtitle">PROFICIENCY</span>
          <h2 className="section-title">Technical Skills</h2>
          <div className="section-title-bar"></div>
        </div>
        <div className="row g-4">
          {skills.map((cat, idx) => (
            <div className="col-md-6 col-lg-3" key={idx} data-aos="fade-up" data-aos-delay={(idx + 1) * 100}>
              <div className="skill-category-card">
                <div className="skill-cat-icon"><i className={cat.iconClass}></i></div>
                <h3 className="h5 mb-4">{cat.category}</h3>
                <div className="skill-list">
                  {cat.list.map((skill, sIdx) => (
                    <SkillItem key={sIdx} name={skill.name} percent={skill.percent} />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
