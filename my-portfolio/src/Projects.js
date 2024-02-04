import React from 'react';

function Projects() {
  return (
    <section id="projects" className="projects-container">
      <h2 className="projects-title">Projects</h2>
      <div className="project">
        <div className="project-image">
          <iframe 
            src="https://cyf-glasgow-06-final-project-team-4.netlify.app/" 
            title="CYF Glasgow Project" 
            style={{ border: 'none' }}
          ></iframe>
        </div>
        <div className="project-content">
          <h5 className="project-title">HireMe</h5>
          <p className="project-text">HireMe is a platform that simplifies job hunting for CYF graduates and empowers employers to find
           fresh talent easily, all while supporting effective mentorship for CYF volunteers.</p>
          <div className="tech-tags">
            <span className="tech-tag">PERN Stack</span>
            <span className="tech-tag">GitHub API</span>
          </div>
        </div>
      </div>
      <div className="project">
        <div className="project-content">
          <h5 className="project-title">YouTube Saver</h5>
          <p className="project-text">A platform allowing users to explore, post, delete, watch, 'Up Vote,' and 'Down Vote' YouTube videos,
           making it an interactive and engaging experience.</p>
          <div className="tech-tags">
          <span className="tech-tag">PERN Stack</span>
          </div>
        </div>
        <div className="project-image">
          <iframe 
            src="https://najahsproject.onrender.com" 
            title="Najah's Project" 
            style={{ border: 'none' }}
          ></iframe>
        </div>
      </div>
    </section>
  );
}

export default Projects;


