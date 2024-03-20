// import frameworks and libraries
import React from 'react';

// import UI Components

// import custom Components
import Header from './Components/Header/Header.tsx';
import Footer from './Components/Footer/Footer.tsx';
import HomeContent from './Components/HomeContent/HomeContent.tsx';

// import stylesheets
import './App.css';

function App() {
  return (
    <div className="app-container">
      <div className="header">
        <Header />
      </div>
      <div className="body">
        <HomeContent />
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
}

export default App;
