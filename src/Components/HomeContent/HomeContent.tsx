// import frameworks and libraries
import React from 'react';
import { NavLink } from 'react-router-dom';

// import UI Components

// import custom Components
import ComputerAnimation from './ComputerAnimation/ComputerAnimation.tsx';

// import stylesheets
import './HomeContent.scss';

function HomeContent() {
  return (
    <div className="hero-container">
      <div className="content-container">
        <div className="card-container">
          <div className="hero-title-container">
            <h2 className="hero-title">
              Noëllie Chatain Six
            </h2>
          </div>
          <div className="separator h-s" />
          <div className="hero-subtitle-container">
            <p className="hero-subtitle">
              I am a junior developer
            </p>
          </div>
          <div className="separator h-m" />
          <div className="btns-container">
            <NavLink to="/about">
              <button className="button" type="button">À propos</button>
            </NavLink>
            <div className="separator v-m" />
            <NavLink to="/Contact">
              <button className="button" type="button">Contact</button>
            </NavLink>
          </div>
        </div>
      </div>
      <div className="animation-container">
        <ComputerAnimation />
      </div>
    </div>

  );
}

export default HomeContent;
