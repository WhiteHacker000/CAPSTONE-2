import React from 'react';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <span className="logo-icon">PrC</span>
        <span className="logo-text">PropConnect</span>
      </div>
      <ul className="nav-links">
        <li>Home</li>
        <li>Listings</li>
        <li>Agents</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <div className="nav-actions">
        <input type="text" placeholder="Search" className="search-bar" />
        <div className="notification-icon">
          <span className="dot"></span>
        </div>
        <button className="sign-in">Sign In</button>
        <button className="sign-up">Sign Up</button>
      </div>
    </nav>
  );
}

export default Navbar;