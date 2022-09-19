import React from 'react';
import { useRoutes } from 'react-router';
import MainLayout from '../layouts/MainLayout';
import Home from '../pages/Home';

const Router = () => {
  return useRoutes([
    {
      path: '/',
      element: <MainLayout />,
      children: [{ path: '/', element: <Home /> }],
    },
  ]);
};

export default Router;
