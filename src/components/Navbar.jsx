import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav>
    <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/register">Register</Link></li>
      <li><Link to="/vote">Vote</Link></li>
      <li><Link to="/results">Results</Link></li>
      <li><Link to="/contact">Contact Us</Link></li>
      <li><Link to ="/about">About</Link></li>
    </ul>
  

  </nav>
);

export default Navbar;
