import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../components/Navbar/Navbar';

const MainLayout = () => {
  return (
    <>
      <Navbar>
        <Outlet />
      </Navbar>
    </>
  );
};

export default MainLayout;
