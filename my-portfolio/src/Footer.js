import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';



function Footer() {
  return (
    <footer className="bg-light text-center text-lg-start">
      <div className="text-center p-3">
        © 2023 Najah Farah
        <div>
          <a href="https://github.com/nfarah22" className="me-3" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faGithub} size="lg" />
          </a>
          <a href="https://www.linkedin.com/in/najah-farah-684624248/" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faLinkedin} size="lg" />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
