import React from 'react';
import { Link } from 'react-router-dom';
import './PropertyCard.css';


function PropertyCard({ property }) {
  const { id, title, price, location, image, badge, details } = property;
  
  return (
    <Link to={`/properties/${id}`} className="property-card-link">
      <div className="property-card">
        <div className="property-badge">{badge}</div>
        <img src={image} alt={title} />
        <h3>{title}</h3>
        <p className="price">{price}</p>
        <p className="location">{location}</p>
        <div className="property-details">
          <span>{details.beds}</span>
          <span>{details.baths}</span>
          <span>{details.area}</span>
        </div>
      </div>
    </Link>
  );
}

export default PropertyCard;