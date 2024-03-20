// import frameworks and libraries
import React from 'react';

// import UI Components
// eslint-disable-next-line import/no-extraneous-dependencies

// import custom Components

// import stylesheets
import './Header.scss';

function Header() {
  return (
    <div className="header-container">
      <div className="separator v-m" />
      <div className="title-container">
        <h1 className="title-text">
          /NC6 /
        </h1>
      </div>
      <nav className="navbar-container">
        <a href="/about">
          <button className="button" type="button">À propos</button>
        </a>
        <a href="experience">
          <button className="button" type="button">Formation</button>
        </a>
        <a href="/projects">
          <button className="button" type="button">Projets</button>
        </a>
        <a href="/sandbox">
          <button className="button" type="button">Sandbox</button>
        </a>
        <a href="/contact">
          <button className="button" type="button">Contact</button>
        </a>
      </nav>
    </div>
  );
}

export default Header;
