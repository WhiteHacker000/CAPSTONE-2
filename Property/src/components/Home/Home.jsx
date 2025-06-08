import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import PropertyCard from '../Cards/PropertyCard/PropertyCard';
import FeatureCard from '../Cards/FeatureCard/FeatureCard';
import AgentCard from '../Cards/AgentCard/AgentCard';
import TestimonialCard from '../Cards/TestimonialCard/TestimonialCard';
import { featuredProperties } from '../../data/properties';
import { trustFeatures } from '../../data/features';
import { topAgents } from '../../data/agents';
import { testimonials } from '../../data/testimonials';
import Promote from '../../assets/Homepics/Promote.png';
import Promise from '../../assets/Homepics/Promise.jpg';
import './Home.css';

function Home() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [searchType, setSearchType] = useState('properties'); // 'properties' or 'agents'
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const handlePrevious = () => {
    setCurrentTestimonial((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentTestimonial((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const goToTestimonial = (index) => {
    setCurrentTestimonial(index);
  };

  const handleSearchTypeChange = (type) => {
    setSearchType(type);
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearchSubmit = () => {
    if (searchTerm.trim()) {
      // Navigate to the appropriate page with search query
      navigate(`/${searchType}?search=${encodeURIComponent(searchTerm)}`);
    }
  };

  const handlePopularSearch = (term) => {
    setSearchTerm(term);
    navigate(`/${searchType}?search=${encodeURIComponent(term)}`);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearchSubmit();
    }
  };

  return (
    <div className="home">

      <header className="home-header" style={{
        background: `linear-gradient(rgba(26, 43, 80, 0.85), rgba(26, 43, 80, 0.9)), url(${Promise})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'scroll'
      }}>
        <h1>Building Trust in Real Estate Connections</h1>
        <p>
          PropConnect creates an ecosystem where verified identities, transparent
          communications, and engagement metrics build the foundation for every
          successful property transaction.
        </p>
        <div className="search-section">
          <div className="search-buttons">
            <button 
              className={`find-properties ${searchType === 'properties' ? 'active' : ''}`}
              onClick={() => handleSearchTypeChange('properties')}
            >
              Find Properties
            </button>
            <button 
              className={`find-agents ${searchType === 'agents' ? 'active' : ''}`}
              onClick={() => handleSearchTypeChange('agents')}
            >
              Find Agents
            </button>
          </div>
          <div className="search-bar-container">
            <input
              type="text"
              placeholder="Enter location, zipcode, or address"
              className="search-input"
              value={searchTerm}
              onChange={handleSearchChange}
              onKeyPress={handleKeyPress}
            />
            <button className="search-button" onClick={handleSearchSubmit}>Search</button>
          </div>
        </div>
        <p className="popular-searches">
          Popular searches: 
          <span onClick={() => handlePopularSearch('New York')}>New York</span> 
          <span onClick={() => handlePopularSearch('Los Angeles')}>Los Angeles</span> 
          <span onClick={() => handlePopularSearch('Chicago')}>Chicago</span> 
          <span onClick={() => handlePopularSearch('Miami')}>Miami</span>
        </p>
      </header>

      <section className="featured-properties">
        <h2>Featured Verified Properties</h2>
        <p>Explore our selection of premium verified properties</p>
        <div className="property-cards">
          {featuredProperties.map(property => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>
        <button className="view-all-button">View All Properties</button>
      </section>

      <section className="trust-features">
        <h2>Building Trust in Every Transaction</h2>
        <p>
          PropConnect's unique features are designed to enhance transparency,
          verify identities, and foster meaningful connections in the real
          estate market.
        </p>
        <div className="feature-cards">
          {trustFeatures.map(feature => (
            <FeatureCard key={feature.id} feature={feature} />
          ))}
        </div>
      </section>

      <section className="verified-agents">
        <h2>Meet Our Top Verified Agents</h2>
        <p>
          Connect with our most responsive and highly-rated real estate professionals.
        </p>
        <div className="agent-cards">
          {topAgents.map(agent => (
            <AgentCard key={agent.id} agent={agent} />
          ))}
        </div>
        <button className="view-all-button">View All Agents</button>
      </section>

      <section 
        className="testimonials" 
        style={{
          background: `linear-gradient(rgba(26, 43, 80, 0.9), rgba(26, 43, 80, 0.95)), url(${Promote})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <h2>What Our Users Say</h2>
        <p>
          Real experiences from real people who have built successful real estate connections through
          PropConnect
        </p>
        
        <div className="testimonial-slider">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard 
              key={testimonial.id}
              testimonial={testimonial}
              isActive={currentTestimonial === index}
              onPrev={handlePrevious}
              onNext={handleNext}
            />
          ))}
        </div>
        
        <div className="slider-dots">
          {testimonials.map((_, index) => (
            <button 
              key={index}
              className={`dot ${currentTestimonial === index ? 'active' : ''}`} 
              onClick={() => goToTestimonial(index)}
            ></button>
          ))}
        </div>
      </section>

    </div>
  );
}

export default Home;