// import frameworks and libraries
import React from 'react';
import { Outlet } from 'react-router-dom';

// import UI Components

// import custom Components
import Header from './Components/Header/Header.tsx';
import Footer from './Components/Footer/Footer.tsx';

// import stylesheets
import './App.css';

function App() {
  return (
    <div className="app-container">
      <div className="header">
        <Header />
      </div>
      <div className="body">
        <Outlet />
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
}

export default App;
