
import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { featuredProperties } from '../../data/properties';
import './Property_Detail.css';

function Property_Detail() {
  const { id } = useParams();
  const [property, setProperty] = useState(null);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    // In a real app, you'd fetch from API using the ID
    // For now, we'll use the local data
    const propertyData = featuredProperties.find(p => p.id === parseInt(id));
    
    if (propertyData) {
      setProperty(propertyData);
    }
    setLoading(false);
  }, [id]);

  if (loading) {
    return <div className="loading-container">Loading property details...</div>;
  }

  if (!property) {
    return (
      <div className="not-found-container">
        <h2>Property not found</h2>
        <p>The property you're looking for doesn't exist or has been removed.</p>
        <Link to="/properties" className="back-button">Browse Properties</Link>
      </div>
    );
  }

  return (
    <div className="property-detail-page">
      <div className="property-header">
        <div className="property-header-content">
          <div className="badge-container">
            <span className={`property-badge ${property.badge.toLowerCase()}`}>{property.badge}</span>
            <span className="property-status">For Sale</span>
          </div>
          
          <h1 className="property-title">{property.title}</h1>
          <p className="property-location">{property.location}</p>
          
          <div className="property-price-container">
            <h2 className="property-price">{property.price}</h2>
            <div className="property-actions">
              <button className="action-button favorite"><span>❤</span> Save</button>
              <button className="action-button share"><span>↗</span> Share</button>
            </div>
          </div>
        </div>
      </div>
      
      <div className="property-content">
        <div className="gallery-section">
          <div className="main-image">
            <img src={property.image} alt={property.title} />
          </div>
          <div className="thumbnail-row">
            <img src={property.image} alt={property.title} className="thumbnail active" />
            {/* You would typically have more images here */}
          </div>
        </div>
        
        <div className="property-details-grid">
          <div className="detail-item">
            <span className="detail-icon">🛏️</span>
            <span className="detail-label">Bedrooms</span>
            <span className="detail-value">{property.details.beds.split(' ')[0]}</span>
          </div>
          <div className="detail-item">
            <span className="detail-icon">🚿</span>
            <span className="detail-label">Bathrooms</span>
            <span className="detail-value">{property.details.baths.split(' ')[0]}</span>
          </div>
          <div className="detail-item">
            <span className="detail-icon">📏</span>
            <span className="detail-label">Square Feet</span>
            <span className="detail-value">{property.details.area.split(' ')[0]}</span>
          </div>
          <div className="detail-item">
            <span className="detail-icon">📅</span>
            <span className="detail-label">Year Built</span>
            <span className="detail-value">2019</span>
          </div>
        </div>
        
        <div className="property-description">
          <h2>Description</h2>
          <p>This beautiful {property.title.toLowerCase()} is located in the heart of downtown with stunning city views. Featuring high-end finishes, stainless steel appliances, and an open floor plan perfect for entertaining. The building offers a fitness center, rooftop pool, and 24/7 concierge service.</p>
        </div>
        
        <div className="property-features">
          <h2>Features</h2>
          <ul className="features-list">
            <li>Central Air Conditioning</li>
            <li>In-Unit Washer & Dryer</li>
            <li>Hardwood Flooring</li>
            <li>Walk-in Closets</li>
            <li>Stainless Steel Appliances</li>
            <li>High Ceilings</li>
            <li>24/7 Security</li>
            <li>Fitness Center Access</li>
          </ul>
        </div>
        
        <div className="contact-agent">
          <h2>Contact Listing Agent</h2>
          <div className="agent-card">
            <div className="agent-info">
              <div className="agent-avatar">MR</div>
              <div className="agent-details">
                <h3>Michael Rodriguez</h3>
                <p>Senior Real Estate Agent</p>
                <p>PropConnect Realty</p>
              </div>
            </div>
            <div className="agent-actions">
              <button className="contact-button primary">Message</button>
              <button className="contact-button secondary">Call</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Property_Detail;
