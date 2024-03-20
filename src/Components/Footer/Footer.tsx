/* eslint-disable import/no-extraneous-dependencies */
// import frameworks and libraries
import React from 'react';

// import UI Components
import LinkedinIcon from '@rsuite/icons/legacy/Linkedin';
import { FaGithub } from 'react-icons/fa';

// import custom Components

// import stylesheets
import './Footer.scss';

function Footer() {
  return (
    <div className="footer-container">
      <div className="separator v-m" />
      <div className="copyright-container">
        <p className="copyright-content">© NC6 | Tous droits réservés</p>
      </div>
      <div className="social-container">
        <a href="https://www.linkedin.com/in/no%C3%ABllie-chatain-six/" className="social-content" title="To: LinkedIn profile">
          <LinkedinIcon />
          <div className="separator v-s" />
          <span>LinkedIn</span>
        </a>
        <div className="separator v-l" />
        <a href="https://github.com/NollyBrown6" className="social-content" title="To: Github profile">
          <FaGithub />
          <div className="separator v-s" />
          <span>Github</span>
        </a>
        <div className="separator v-m" />
      </div>
    </div>
  );
}

export default Footer;
