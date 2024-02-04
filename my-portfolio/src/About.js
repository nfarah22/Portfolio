import React from 'react';
import najahImage from './najah.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5, faCss3Alt, faJsSquare, faReact, faAws, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faDatabase } from '@fortawesome/free-solid-svg-icons'; 


function About() {
  return (
    <section id="about" className="about-section">
      <div className="about-image">
        <img src={najahImage} alt="Najah" className="profile-pic"/>
      </div>
      <div className="about-content">
        <h1>Hi I'm Najah</h1>
        <p>Full-Stack Developer pivoting to DevOps, with practical experience in AWS and GitHub Actions through
           'YouTubeSaver'—an interactive platform for engaging with YouTube content.
           Collaboratively built 'HireMe' to streamline job hunting for CYF graduates. 
           Eager to deepen my expertise in cloud technologies and automation.</p>
      </div>
      <div className="tech-icons">
        <FontAwesomeIcon icon={faHtml5} size="2x" title="HTML5" />
        <FontAwesomeIcon icon={faCss3Alt} size="2x" title="CSS3" />
        <FontAwesomeIcon icon={faJsSquare} size="2x" title="JavaScript" />
        <FontAwesomeIcon icon={faReact} size="2x" title="React" />
        <FontAwesomeIcon icon={faDatabase} size="2x" title="PostgreSQL" />
        <FontAwesomeIcon icon={faAws} size="2x" title="AWS" />
        <FontAwesomeIcon icon={faGithub} size="2x" title="GitHub" />
      </div>
    </section>
  );
}

export default About;
