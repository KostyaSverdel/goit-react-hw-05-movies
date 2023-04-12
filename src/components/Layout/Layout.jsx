import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div className="nav-bar">
      <NavLink className="nav-link" to="/">
        Home
      </NavLink>
      <NavLink className="nav-link" to="/movies">
        Movies
      </NavLink>
      <Outlet />
    </div>
  );
};

export default Layout;
