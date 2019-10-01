import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/navbar.css';

const Navbar = () => (
  <nav className="navbar">
    <NavLink
      exact
      activeClassName="navbar__link--active"
      className="navbar__link"
      to="/"
    >
      Home
    </NavLink>
    <NavLink
      activeClassName="navbar__link--active"
      className="navbar__link"
      to="/news"
    >
      News
    </NavLink>
    <NavLink
      activeClassName="navbar__link--active"
      className="navbar__link"
      to="/profile"
    >
      Profile
    </NavLink>
  </nav>
);

export default Navbar;