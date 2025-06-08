
import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-brand">
          <div className="footer-logo">
            <span className="logo-icon">TC</span>
            <span className="logo-text">PropConnect</span>
          </div>
          <p className="footer-description">
            Building trust in real estate through 
            verified identities, transparent 
            communications, and engagement 
            metrics.
          </p>
        </div>

        <div className="footer-links">
          <div className="footer-column">
            <h3>Platform</h3>
            <ul>
              <li><a href="#">Browse Listings</a></li>
              <li><a href="#">Find Agents</a></li>
              <li><a href="#">For Sellers</a></li>
              <li><a href="#">For Agents</a></li>
            </ul>
          </div>

          <div className="footer-column">
            <h3>Company</h3>
            <ul>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Our Team</a></li>
              <li><a href="#">Careers</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </div>

          <div className="footer-column">
            <h3>Resources</h3>
            <ul>
              <li><a href="#">Blog</a></li>
              <li><a href="#">Buyer Guides</a></li>
              <li><a href="#">FAQ</a></li>
              <li><a href="#">Privacy Policy</a></li>
            </ul>
          </div>
        </div>
      </div>
      
      <div className="footer-divider"></div>
      
      <div className="footer-copyright">
        &copy; 2025 PropConnect. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
