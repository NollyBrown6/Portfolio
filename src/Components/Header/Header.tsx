// import frameworks and libraries
import React from 'react';
import { NavLink } from 'react-router-dom';

// import UI Components
// eslint-disable-next-line import/no-extraneous-dependencies

// import custom Components

// import stylesheets
import './Header.scss';
import LocaleToggler from './LocaleToggler/LocaleToggler.tsx';

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
        <NavLink to="/about">
          <button className="button" type="button">À propos</button>
        </NavLink>
        <NavLink to="experience">
          <button className="button" type="button">Formation</button>
        </NavLink>
        <NavLink to="/projects">
          <button className="button" type="button">Projets</button>
        </NavLink>
        <NavLink to="/sandbox">
          <button className="button" type="button">Sandbox</button>
        </NavLink>
        <NavLink to="/contact">
          <button className="button" type="button">Contact</button>
        </NavLink>
      </nav>
      <div className="locale-toggler-container">
        <LocaleToggler />
      </div>
    </div>
  );
}

export default Header;
