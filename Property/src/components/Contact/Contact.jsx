
import React from 'react';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import './Contact.css';

function Contact() {
  return (
    <div className="contact-page">

      
      <div className="contact-container">
        <h1 className="contact-title">Contact Us</h1>
        <p className="contact-subtitle">Have questions about PropConnect? We're here to help!</p>
        
        <div className="contact-content">
          <div className="contact-form-section">
            <h2 className="form-title">Send Us a Message</h2>
            
            <form className="contact-form">
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Your Name</label>
                  <input type="text" id="name" name="name" className="form-control" />
                </div>
                
                <div className="form-group">
                  <label htmlFor="email">Email Address</label>
                  <input type="email" id="email" name="email" className="form-control" />
                </div>
              </div>
              
              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input type="text" id="subject" name="subject" className="form-control" />
              </div>
              
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" rows="6" className="form-control"></textarea>
              </div>
              
              <button type="submit" className="send-message-btn">Send Message</button>
            </form>
          </div>
          
          <div className="contact-info-section">
            <h2 className="info-title">Contact Information</h2>
            
            <div className="contact-info-item">
              <div className="info-icon">📧</div>
              <div className="info-content">
                <h3>Email Us</h3>
                <p>info@propconnect.com</p>
              </div>
            </div>
            
            <div className="contact-info-item">
              <div className="info-icon">📞</div>
              <div className="info-content">
                <h3>Call Us</h3>
                <p>+1 (800) 123-4567</p>
              </div>
            </div>
            
            <div className="contact-info-item">
              <div className="info-icon">📍</div>
              <div className="info-content">
                <h3>Visit Us</h3>
                <p>123 PropConnect Avenue</p>
                <p>San Francisco, CA 94107</p>
                <p>United States</p>
              </div>
            </div>
            
            <div className="office-hours">
              <h2 className="hours-title">Office Hours</h2>
              <div className="hours-row">
                <span className="day">Monday - Friday:</span>
                <span className="hours">9:00 AM - 6:00 PM</span>
              </div>
              <div className="hours-row">
                <span className="day">Saturday:</span>
                <span className="hours">10:00 AM - 4:00 PM</span>
              </div>
              <div className="hours-row">
                <span className="day">Sunday:</span>
                <span className="hours">Closed</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      

    </div>
  );
}

export default Contact;
