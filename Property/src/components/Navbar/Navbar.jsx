import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaBell, FaUserCircle } from 'react-icons/fa';
import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth';
import './Navbar.css';

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [userId, setUserId] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();
  const auth = getAuth();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Track auth state
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUserId(currentUser);
    });
    return () => unsubscribe();
  }, [auth]);

  // Handle logout
  const handleLogout = async () => {
    try {
      await signOut(auth);
      setUserId(null);
      navigate('/');
    } catch (error) {
      console.error('Logout failed:', error);
    }
  };

  // Check active link
  const isActive = (path) => location.pathname === path;

  return (
    <nav className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}>
      <div className="navbar-container">
        <Link to="/" className="logo">
          <div className="logo-icon">PC</div>
          <span className="logo-text">PropConnect</span>
        </Link>

        <div className={`nav-menu ${mobileMenuOpen ? 'active' : ''}`}>
          <ul className="nav-links">
            {['/', '/properties', '/agents', '/about', '/contact'].map((path, index) => {
              const names = ['Home', 'Listings', 'Agents', 'About', 'Contact'];
              return (
                <li key={path}>
                  <Link to={path} className={isActive(path) ? 'active' : ''}>
                    {names[index]}
                    {isActive(path) && <span className="nav-indicator"></span>}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>

        <div className="nav-actions">
          <div className="notification-container">
            <Link to="/notifications">
              <FaBell className="notification-icon" />
              <span className="notification-badge">3</span>
            </Link>
          </div>

          {userId ? (
            <div className="user-logged-in">
              <FaUserCircle className="user-icon" />
              <button className="logout-btn" onClick={handleLogout}>Logout</button>
            </div>
          ) : (
            <div className="auth-buttons">
              <Link to="/login">
                <button className="sign-in">Sign In</button>
              </Link>
              <Link to="/signup">
                <button className="sign-up">Sign Up</button>
              </Link>
            </div>
          )}
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