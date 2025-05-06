import React from 'react';
import Navbar from './Navbar/Navbar';
import './Home.css';

function Home() {
  return (
    <div className="home">
      <Navbar />
      <header className="home-header">
        <h1>Building Trust in Real Estate Connections</h1>
        <p>
          PropConnect creates an ecosystem where verified identities, transparent
          communications, and engagement metrics build the foundation for every
          successful property transaction.
        </p>
        <div className="search-section">
          <div className="search-buttons">
            <button className="find-properties active">Find Properties</button>
            <button className="find-agents">Find Agents</button>
          </div>
          <div className="search-bar-container">
            <input
              type="text"
              placeholder="Enter location, zipcode, or address"
              className="search-input"
            />
            <button className="search-button">Search</button>
          </div>
        </div>
        <p className="popular-searches">
          Popular searches: <span>New York</span> <span>Los Angeles</span>{' '}
          <span>Chicago</span> <span>Miami</span>
        </p>
      </header>
      
      <section className="featured-properties">
        <h2>Featured Verified Properties</h2>
        <p>Explore our selection of premium verified properties</p>
        <div className="property-cards">
          <div className="property-card">
            <div className="property-badge">Premium</div>
            <img
              src="https://via.placeholder.com/300x200"
              alt="Modern Downtown Apartment"
            />
            <h3>Modern Downtown Apartment</h3>
            <p className="price">$425,000</p>
            <p className="location">123 Main St, New York, NY</p>
            <div className="property-details">
              <span>2 Beds</span>
              <span>2 Baths</span>
              <span>1,200 ft²</span>
            </div>
          </div>
          <div className="property-card">
            <div className="property-badge">Enhanced</div>
            <img
              src="https://via.placeholder.com/300x200"
              alt="Suburban Family Home"
            />
            <h3>Suburban Family Home</h3>
            <p className="price">$675,000</p>
            <p className="location">456 Oak St, Los Angeles, CA</p>
            <div className="property-details">
              <span>4 Beds</span>
              <span>3 Baths</span>
              <span>2,400 ft²</span>
            </div>
          </div>
          <div className="property-card">
            <div className="property-badge">Basic</div>
            <img
              src="https://via.placeholder.com/300x200"
              alt="Mountain View Cottage"
            />
            <h3>Mountain View Cottage</h3>
            <p className="price">$320,000</p>
            <p className="location">789 Pine Rd, Denver, CO</p>
            <div className="property-details">
              <span>3 Beds</span>
              <span>2 Baths</span>
              <span>1,800 ft²</span>
            </div>
          </div>
          <div className="property-card">
            <div className="property-badge">Premium</div>
            <img
              src="https://via.placeholder.com/300x200"
              alt="Waterfront Luxury Villa"
            />
            <h3>Waterfront Luxury Villa</h3>
            <p className="price">$1,250,000</p>
            <p className="location">101 Harbor Dr, Miami, FL</p>
            <div className="property-details">
              <span>5 Beds</span>
              <span>4 Baths</span>
              <span>3,600 ft²</span>
            </div>
          </div>
        </div>
        <button className="view-all-button">View All Properties</button>
      </section>
    </div>
  );
}

export default Home;