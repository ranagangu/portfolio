import React, { useState } from 'react';

export default function Projects({ projects }) {
  const [filter, setFilter] = useState('all');

  const filterCategories = [
    { key: 'all', label: 'All Projects' },
    { key: 'ai-ml', label: 'AI & ML' },
    { key: 'data-science', label: 'Data Science' },
    { key: 'python-web', label: 'Python & Web' }
  ];

  const filteredProjects = projects.filter(proj => {
    if (filter === 'all') return true;
    return proj.categories.includes(filter);
  });

  return (
    <section id="projects" className="section-padding">
      <div className="container">
        <div className="section-title-wrap section-title-center" data-aos="fade-up">
          <span className="section-subtitle">CREATIONS</span>
          <h2 className="section-title">My Projects</h2>
          <div className="section-title-bar"></div>
        </div>
        
        {/* Filter Button Group */}
        <div className="filter-btn-group" data-aos="fade-up" data-aos-delay="100">
          {filterCategories.map((cat, idx) => (
            <button 
              key={idx}
              className={`filter-btn ${filter === cat.key ? 'active' : ''}`}
              onClick={() => setFilter(cat.key)}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Project Cards Grid */}
        <div className="row g-4 justify-content-center">
          {filteredProjects.map((proj, idx) => (
            <div 
              className="col-md-6 col-lg-4 project-card-col grid-item-fade" 
              key={idx}
              data-aos="fade-up"
              data-aos-delay={(idx + 1) * 100}
            >
              <div className="glass-panel project-card">
                <div className="project-img-wrapper">
                  <img src={`/assets/images/${proj.imageName}`} alt={proj.title} className="project-img" loading="lazy" />
                  <div className="project-img-overlay"></div>
                </div>
                <div className="project-body">
                  <h3 className="project-title">{proj.title}</h3>
                  <p className="project-desc">{proj.desc}</p>
                  <div className="project-tech-list">
                    {proj.techStack.map((tech, tIdx) => (
                      <span className="tech-badge" key={tIdx}>{tech}</span>
                    ))}
                  </div>
                  <div className="project-links">
                    <a href={proj.githubUrl} target="_blank" rel="noopener noreferrer" className="project-btn"><i className="fa-brands fa-github"></i> Code</a>
                    <a href={proj.demoUrl} className="project-btn project-btn-primary"><i className="fa-solid fa-arrow-up-right-from-square"></i> Demo</a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
