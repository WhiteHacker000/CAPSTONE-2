import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import PropertyCard from '../Cards/PropertyCard/PropertyCard';
import { featuredProperties } from '../../data/properties';
import './PropertyListing.css';

function PropertyListing() {
  const [properties, setProperties] = useState(featuredProperties || []);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [sortOption, setSortOption] = useState('default');

  // Filter state
  const [filters, setFilters] = useState({
    priceRange: 'Any Price',
    bedrooms: 'Any',
    propertyType: 'Any',
    verification: 'Any'
  });
  
  const location = useLocation();
  const searchQuery = new URLSearchParams(location.search).get('search');
  
  useEffect(() => {
    // In a real app, you would fetch properties from an API
    // For now, we'll use the local data and filter based on search query
    let filteredProperties = [...featuredProperties];
    
    if (searchQuery) {
      filteredProperties = filteredProperties.filter(property => 
        property.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        property.location.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
    
    // Apply any additional filters here
    
    setProperties(filteredProperties);
    setLoading(false);
  }, [searchQuery, filters]);
  
  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSearch = (e) => {
    e.preventDefault();
    // Implementation for search functionality
  };

  const handleFavorite = (id) => {
    // Implementation for favorite toggle
  };

  return (
    <div className="property-listing-page">
      <h1>Property Listings</h1>
      
      {/* Search and Filters Section */}
      <div className="search-form">
        <div className="search-container">
          <input
            type="text"
            className="search-input"
            placeholder="Search by location, property type, or features"
          />
        </div>
        
        <div className="filters-container">
          <div className="filter-group">
            <label style={{color:"#1a2b50"}}>Price Range</label>
            <select 
              name="priceRange" 
              value={filters.priceRange} 
              onChange={handleFilterChange}
            >
              <option>Any Price</option>
              <option>$100,000 - $300,000</option>
              <option>$300,000 - $500,000</option>
              <option>$500,000 - $1,000,000</option>
              <option>$1,000,000+</option>
            </select>
          </div>
          
          <div className="filter-group">
            <label style={{color:"#1a2b50"}}>Bedrooms</label>
            <select 
              name="bedrooms" 
              value={filters.bedrooms} 
              onChange={handleFilterChange}
            >
              <option>Any</option>
              <option>1+</option>
              <option>2+</option>
              <option>3+</option>
              <option>4+</option>
              <option>5+</option>
            </select>
          </div>
          
          <div className="filter-group">
            <label style={{color:"#1a2b50"}}>Property Type</label>
            <select 
              name="propertyType" 
              value={filters.propertyType} 
              onChange={handleFilterChange}
            >
              <option>Any</option>
              <option>House</option>
              <option>Apartment</option>
              <option>Condo</option>
              <option>Villa</option>
              <option>Cottage</option>
            </select>
          </div>
          
          <div className="filter-group">
            <label style={{color:"#1a2b50"}}>Verification</label>
            <select 
              name="verification" 
              value={filters.verification} 
              onChange={handleFilterChange}
            >
              <option>Any</option>
              <option>Verified</option>
              <option>Unverified</option>
            </select>
          </div>
          
          <button type="submit" className="search-button">
            Search
          </button>
        </div>
      </div>
      
      {/* Results Header */}
      <div className="results-header">
        <p>Showing {properties.length} properties</p>
        <select 
          className="sort-select"
          value={sortOption}
          onChange={(e) => setSortOption(e.target.value)}
        >
          <option value="default">Default Sorting</option>
          <option value="price-asc">Price: Low to High</option>
          <option value="price-desc">Price: High to Low</option>
          <option value="newest">Newest First</option>
        </select>
      </div>
      
      {/* Property Grid */}
      <div className="property-grid">
        {properties.map(property => (
          <Link 
            to={`/properties/${property.id}`} 
            key={property.id} 
            className="property-card"
            data-status={property.status || "For Sale"} // Add this attribute
          >
            <div className="property-image-container">
              <span className={`property-badge ${property.badge.toLowerCase()}`}>{property.badge}</span>
              <button 
                className="favorite-button"
                onClick={(e) => {
                  e.preventDefault();
                  handleFavorite(property.id);
                }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                  <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"/>
                </svg>
              </button>
              <img src={property.image} alt={property.title} />
            </div>
            
            <div className="property-content">
              <h3 className="property-title">{property.title}</h3>
              <div className="property-price">{property.price}</div>
              <div className="property-location">
                <span className="location-icon">📍</span>
                {property.location}
              </div>
              
              <div className="property-specs">
                <span>
                  <span className="spec-icon">🛏️</span>
                  {property.beds || property.details?.beds?.split(' ')[0] || '2'} Beds
                </span>
                <span>
                  <span className="spec-icon">🚿</span>
                  {property.baths || property.details?.baths?.split(' ')[0] || '2'} Baths
                </span>
                <span>
                  <span className="spec-icon">📏</span>
                  {property.area || property.details?.area?.split(' ')[0] || '1,200'} ft²
                </span>
              </div>
              
              <p className="view-count">
                <span className="view-icon">👁️</span>
                {Math.floor(Math.random() * 300) + 100} views
              </p>
            </div>
          </Link>
        ))}
      </div>
      
      {/* Pagination */}
      <div className="pagination">
        <button className={currentPage === 1 ? 'active' : ''} onClick={() => setCurrentPage(1)}>1</button>
        <button className={currentPage === 2 ? 'active' : ''} onClick={() => setCurrentPage(2)}>2</button>
        <button className={currentPage === 3 ? 'active' : ''} onClick={() => setCurrentPage(3)}>3</button>
        <button className="next-btn" onClick={() => setCurrentPage(prev => prev + 1)}>
          Next →
        </button>
      </div>
    </div>
  );
}

export default PropertyListing;