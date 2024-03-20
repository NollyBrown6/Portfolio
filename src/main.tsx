import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import appRouter from './routes/router.tsx';

// import stylesheets
import '../public/style/reset.scss';
import '../public/style/index.scss';
// eslint-disable-next-line import/no-extraneous-dependencies
import 'rsuite/dist/rsuite.min.css';

const router = appRouter;

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
