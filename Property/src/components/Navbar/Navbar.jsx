import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaBell, FaUserCircle } from 'react-icons/fa';
import { useNotification } from '../../contexts/NotificationContext';
import './Navbar.css';

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { unreadCount, totalCount } = useNotification();
  
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
          <div className="logo-icon">PC</div>
          <span className="logo-text">PropConnect</span>
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
              <FaBell className={`notification-icon ${unreadCount === 0 && totalCount === 0 ? 'notification-icon-read' : ''}`} />
              {unreadCount > 0 && <span className="notification-badge">{unreadCount}</span>}
            </Link>
          </div>
          
          <div className="auth-buttons">
            <Link to="/signin">
              <button className="sign-in">Sign In</button>
            </Link>
            <Link to="/signup">
              <button className="sign-up">Sign Up</button>
            </Link>
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