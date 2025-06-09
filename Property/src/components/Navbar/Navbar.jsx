import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaBell, FaUserCircle } from 'react-icons/fa';
import './Navbar.css';

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  
  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Check if link is active
  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <nav className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}>
      <div className="navbar-container">
        <Link to="/" className="logo">
          <div className="logo-icon">TC</div>
          <span className="logo-text">TrustChain</span>
        </Link>
        
        <div className={`nav-menu ${mobileMenuOpen ? 'active' : ''}`}>
          <ul className="nav-links">
            <li>
              <Link to="/" className={isActive('/') ? 'active' : ''}>
                Home
                {isActive('/') && <span className="nav-indicator"></span>}
              </Link>
            </li>
            <li>
              <Link to="/properties" className={isActive('/properties') ? 'active' : ''}>
                Listings
                {isActive('/properties') && <span className="nav-indicator"></span>}
              </Link>
            </li>
            <li>
              <Link to="/agents" className={isActive('/agents') ? 'active' : ''}>
                Agents
                {isActive('/agents') && <span className="nav-indicator"></span>}
              </Link>
            </li>
            <li>
              <Link to="/about" className={isActive('/about') ? 'active' : ''}>
                About
                {isActive('/about') && <span className="nav-indicator"></span>}
              </Link>
            </li>
            <li>
              <Link to="/contact" className={isActive('/contact') ? 'active' : ''}>
                Contact
                {isActive('/contact') && <span className="nav-indicator"></span>}
              </Link>
            </li>
          </ul>
        </div>
        
        <div className="nav-actions">
          <div className="notification-container">
            <Link to="/notifications">
              <FaBell className="notification-icon" />
              <span className="notification-badge">3</span>
            </Link>
          </div>
          
          <div className="auth-buttons">
            <button className="sign-in">Sign In</button>
            <button className="sign-up">Sign Up</button>
          </div>
        </div>
        
        <div 
          className={`hamburger ${mobileMenuOpen ? 'active' : ''}`}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;