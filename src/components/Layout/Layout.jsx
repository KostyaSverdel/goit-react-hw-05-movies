import { React, Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from '../Header/Header';

const Layout = () => {
  return (
    <>
      <Suspense>
        <Header />
        <Outlet />
      </Suspense>
    </>
  );
};

export default Layout;
