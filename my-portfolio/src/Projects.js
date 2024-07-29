import React from 'react';
import hireMeImage from './hireme.png';
import youtubeSaverImage from './youtubesaver.png';

function Projects() {
  return (
    <section id="projects" className="projects-container">
      <h2 className="projects-title">Projects</h2>
      
      {/* YouTube Saver */}
      <div className="project project-layout-left">
        <div className="project-content">
          <h4 className="project-title">YouTubeSaver</h4>
          <p className="project-text">
            A platform allowing users to explore, post, delete, watch,<br />
             and rate YouTube videos, making it an<br />
            interactive and engaging experience.
          </p>
          <div className="tech-tags">
            <span className="tech-tag">PERN Stack</span>
            <span className="tech-tag">AWS</span>
            <span className="tech-tag">GitHub Actions</span>
          </div>
        </div>
        <div className="project-image">
          <a href="https://full-stack-project-assessment-1.onrender.com/" target="_blank" rel="noopener noreferrer">
            <img src={youtubeSaverImage} alt="YouTubeSaver" />
          </a>
        </div>
      </div>

      {/* HireMe */}
      <div className="project project-layout-right">
        <div className="project-image">
          <a href="https://cyf-glasgow-06-final-project-team-4.netlify.app/" target="_blank" rel="noopener noreferrer">
            <img src={hireMeImage} alt="HireMe" />
          </a>
        </div>
        <div className="project-content">
          <h4 className="project-title">HireMe</h4>
          <p className="project-text">
            HireMe is a platform that simplifies job hunting for CYF graduates<br />
             and empowers employers to find fresh talent easily, all<br />
             while supporting effective mentorship for CYF volunteers.
          </p>
          <div className="tech-tags">
            <span className="tech-tag">PERN Stack</span>
            <span className="tech-tag">GitHub API</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;

