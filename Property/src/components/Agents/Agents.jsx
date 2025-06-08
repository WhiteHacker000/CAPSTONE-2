import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import { topAgents } from '../../data/agents';
import './Agents.css';

function Agents() {
  // State for agents and filtering
  const [agents, setAgents] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [specialty, setSpecialty] = useState('Any Specialty');
  const [verificationLevel, setVerificationLevel] = useState('Any Level');
  const [responseTime, setResponseTime] = useState('Any');
  const [sortBy, setSortBy] = useState('Engagement Score');
  
  const location = useLocation();
  
  // Get search query from URL on component mount
  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const searchQuery = queryParams.get('search');
    
    if (searchQuery) {
      setSearchTerm(searchQuery);
    }
  }, [location.search]);

  // Filter agents based on search and filters
  useEffect(() => {
    let filteredAgents = [...topAgents];
    
    // Apply search term filter
    if (searchTerm) {
      const term = searchTerm.toLowerCase();
      filteredAgents = filteredAgents.filter(agent => 
        agent.name.toLowerCase().includes(term) || 
        agent.title.toLowerCase().includes(term) ||
        agent.company.toLowerCase().includes(term)
      );
    }
    
    // Apply specialty filter
    if (specialty !== 'Any Specialty') {
      filteredAgents = filteredAgents.filter(agent => 
        agent.specialty === specialty
      );
    }
    
    // Apply verification filter
    if (verificationLevel !== 'Any Level') {
      const level = verificationLevel.toLowerCase();
      filteredAgents = filteredAgents.filter(agent => 
        agent.badge.toLowerCase() === level
      );
    }
    
    // Sort agents
    if (sortBy === 'Engagement Score') {
      filteredAgents.sort((a, b) => b.engagement - a.engagement);
    } else if (sortBy === 'Most Listings') {
      filteredAgents.sort((a, b) => b.listings - a.listings);
    } else if (sortBy === 'Name A-Z') {
      filteredAgents.sort((a, b) => a.name.localeCompare(b.name));
    }
    
    setAgents(filteredAgents);
  }, [searchTerm, specialty, verificationLevel, responseTime, sortBy]);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    // The filtering happens automatically through the useEffect
  };

  return (
    <div className="agents-page">
      <div className="agents-container">
        <h1 className="agents-title">Find Verified Agents</h1>
        
        {/* Search Bar */}
        <div className="search-container">
          <form onSubmit={handleSearchSubmit}>
            <input 
              type="text" 
              placeholder="Search by agent name, specialty, or location"
              className="search-input"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              aria-label="Search agents"
            />
          </form>
        </div>
        
        {/* Filters */}
        <div className="filters-container">
          <div className="filter-group">
            <label htmlFor="specialty">Specialty</label>
            <select 
              id="specialty"
              value={specialty} 
              onChange={(e) => setSpecialty(e.target.value)}
            >
              <option>Any Specialty</option>
              <option>Residential</option>
              <option>Commercial</option>
              <option>Luxury</option>
              <option>Investment</option>
              <option>First-Time Buyer</option>
            </select>
          </div>
          
          <div className="filter-group">
            <label htmlFor="verification">Verification Level</label>
            <select 
              id="verification"
              value={verificationLevel} 
              onChange={(e) => setVerificationLevel(e.target.value)}
            >
              <option>Any Level</option>
              <option>Premium</option>
              <option>Enhanced</option>
              <option>Basic</option>
            </select>
          </div>
          
          <div className="filter-group">
            <label htmlFor="response-time">Response Time</label>
            <select 
              id="response-time"
              value={responseTime} 
              onChange={(e) => setResponseTime(e.target.value)}
            >
              <option>Any</option>
              <option>Within 1 hour</option>
              <option>Within 3 hours</option>
              <option>Within 24 hours</option>
            </select>
          </div>
        </div>
        
        {/* Results Header */}
        <div className="results-header">
          <p>Showing {agents.length} agents</p>
          <div className="sort-container">
            <span>Sort by:</span>
            <select 
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="sort-select"
              aria-label="Sort agents"
            >
              <option>Engagement Score</option>
              <option>Most Listings</option>
              <option>Name A-Z</option>
            </select>
          </div>
        </div>
        
        {/* Agent Cards */}
        {agents.length === 0 ? (
          <div className="no-results">
            <p>No agents found matching your criteria. Try adjusting your filters.</p>
          </div>
        ) : (
          <div className="agent-grid">
            {agents.map(agent => (
              <div className="agent-card" key={agent.id}>
                <div className="agent-header">
                  <div className="agent-initials" style={{ backgroundColor: agent.bgColor || '#1a2b50' }}>
                    {agent.initials}
                  </div>
                  <div className="agent-info">
                    <h3 className="agent-name">{agent.name}</h3>
                    <div className={`badge ${agent.badge.toLowerCase()}`}>{agent.badge}</div>
                  </div>
                </div>
                
                <div className="agent-role">{agent.title}</div>
                <div className="agent-company">{agent.company}</div>
                
                <div className="agent-stats">
                  <div className="engagement-score">
                    <span className="score">{agent.engagement}</span>
                    <span className="label">Engagement</span>
                  </div>
                  <div className="listing-count">
                    <span className="count">{agent.listings}</span>
                    <span className="label">Active listings</span>
                  </div>
                </div>
                
                <div className="agent-actions">
                  <button className="message-btn">
                    <FaEnvelope /> Message
                  </button>
                  <button className="call-btn">
                    <FaPhoneAlt /> Call
                  </button>
                </div>
                
                <a href="#" className="profile-link">View Full Profile</a>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Agents;