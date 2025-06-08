import React from 'react';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import './About.css';
import MissionImage from '../../assets/Aboutpic/Mission.jpeg';

function About() {
  return (
    <div className="about-page">

      
      <div className="about-header">
        <div className="header-content">
          <h1>About PropConnect</h1>
          <p>We're revolutionizing the real estate industry by making trust the foundation of every transaction.</p>
        </div>
      </div>
      
      <div className="about-section">
        <div className="about-content-container">
          <div className="about-content">
            <h1 className="mission-title">Our Mission</h1>
            
            <p className="mission-text">
              PropConnect was founded with a clear mission: to transform how buyers, sellers, 
              and agents interact in the volatile property market. We believe that trust should be 
              at the core of every real estate connection.
            </p>
            
            <p className="mission-text">
              By prioritizing verified identities, transparent communications, and engagement 
              metrics, PropConnect creates an ecosystem where uncertainty is reduced and 
              genuine relationships flourish.
            </p>
            
            <div className="mission-points">
              <div className="mission-point">
                <div className="mission-icon shield">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
                    <path d="M12,1L3,5v6c0,5.55,3.84,10.74,9,12c5.16-1.26,9-6.45,9-12V5L12,1z"></path>
                  </svg>
                </div>
                <span>Building Trust Through Verification</span>
              </div>
              
              <div className="mission-point">
                <div className="mission-icon check">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
                    <path d="M12,2C6.48,2,2,6.48,2,12s4.48,10,10,10s10-4.48,10-10S17.52,2,12,2z M10,17l-5-5l1.41-1.41L10,14.17l7.59-7.59L19,8L10,17z"></path>
                  </svg>
                </div>
                <span>Promoting Accountability Among All Participants</span>
              </div>
            </div>
          </div>
          
          <div className="about-image">
            <img src={MissionImage} alt="Person holding documents representing trust in real estate" />
          </div>
        </div>
      </div>
      
      {/* Our Values Section */}
      <div className="values-section">
        <div className="values-container">
          <h1 className="values-title">Our Values</h1>
          
          <div className="values-grid">
            <div className="value-card">
              <h2>Transparency</h2>
              <p>We believe in full transparency in all aspects of real estate transactions, from communication metrics to property details.</p>
            </div>
            
            <div className="value-card">
              <h2>Trust</h2>
              <p>Building trust through verification, consistent engagement, and honest interactions is our foundation.</p>
            </div>
            
            <div className="value-card">
              <h2>Innovation</h2>
              <p>We're constantly innovating to provide tools that make real estate transactions more secure, transparent, and efficient.</p>
            </div>
            
            <div className="value-card">
              <h2>Accountability</h2>
              <p>We promote accountability among all users through transparent metrics and verification systems.</p>
            </div>
            
            <div className="value-card">
              <h2>Community</h2>
              <p>We foster a community of trusted real estate professionals and informed buyers and sellers.</p>
            </div>
            
            <div className="value-card">
              <h2>Security</h2>
              <p>Protecting user data and ensuring secure communications is paramount to our platform.</p>
            </div>
          </div>
        </div>
      </div>
      

    </div>
  );
}

export default About;