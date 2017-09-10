import React from 'react';
import {NavLink} from 'react-router-dom';

import LogoutLink from './LogoutLink'

const Navbar = (props) => {
  return <nav>
      <NavLink to="/"
      exact
      className="nav-link"
      >Home</NavLink>

      <NavLink to="/signup"
      exact
      className="nav-link"
      >Signup</NavLink>

      <NavLink to="/login"
      className="nav-link"
      >Login</NavLink>

      <LogoutLink />
    </nav>

}

export default Navbar;
