import React from 'react';
import { useRoutes } from 'react-router';
import MainLayout from '../layouts/MainLayout';
import Home from '../pages/Home';
import Profile from '../pages/Profile';

const Router = () => {
  return useRoutes([
    {
      path: '/',
      element: <MainLayout />,
      children: [
        { path: '/', element: <Home /> },
        { path: '/profile', element: <Profile /> },
      ],
    },
  ]);
};

export default Router;
