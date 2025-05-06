import React from 'react';


function PropertyCard({ property }) {
  const { title, price, location, image, badge, details } = property;
  
  return (
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
  );
}

export default PropertyCard;