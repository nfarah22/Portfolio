import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

function Footer() {
  return (
    <footer className="text-center">
      <div className="text-center p-3" style={{ backgroundColor: 'black', color: 'white' }}>
        © 2023 Najah Farah
        <div>
          <a href="https://github.com/nfarah22" className="social-icon" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faGithub} size="2x" />
          </a>
          <a href="https://www.linkedin.com/in/najah-farah-684624248/" className="social-icon" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faLinkedin} size="2x" />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

