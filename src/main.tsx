import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';

// import stylesheets
import '../public/style/reset.scss';
import '../public/style/index.scss';
// eslint-disable-next-line import/no-extraneous-dependencies
import 'rsuite/dist/rsuite.min.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
