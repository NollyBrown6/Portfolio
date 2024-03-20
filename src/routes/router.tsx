import React from 'react';
import { createBrowserRouter } from 'react-router-dom';

import App from '../App.tsx';
import HomeContent from '../Components/HomeContent/HomeContent.tsx';
import AboutContent from '../Components/AboutContent/AboutContent.tsx';
import ExperienceContent from '../Components/ExperienceContent/ExperienceContent.tsx';
import ProjectsContent from '../Components/ProjectsContent/ProjectsContent.tsx';
import SandboxContent from '../Components/SandboxContent/SandboxContent.tsx';
import ContactContent from '../Components/ContactContent/ContactContent.tsx';

const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <HomeContent />,
      },
      {
        path: '/about',
        element: <AboutContent />,
      },
      {
        path: '/experience',
        element: <ExperienceContent />,
      },
      {
        path: '/projects',
        element: <ProjectsContent />,
      },
      {
        path: '/sandbox',
        element: <SandboxContent />,
      },
      {
        path: '/contact',
        element: <ContactContent />,
      },
    ],
  },
]);

export default appRouter;
