import React from 'react';


function TestimonialCard({ testimonial, isActive, onPrev, onNext }) {
  const { text, author } = testimonial;
  
  return (
    <div className={`testimonial-card ${isActive ? 'active' : ''}`}>
      <div className="quote-icon">❝</div>
      <p className="testimonial-text">"{text}"</p>
      <div className="testimonial-author">
        <div className="author-avatar">{author.initial}</div>
        <div className="author-info">
          <h3>{author.name}</h3>
          <p>{author.title}</p>
        </div>
      </div>
      <div className="testimonial-nav">
        <button className="nav-btn prev" onClick={onPrev}>←</button>
        <button className="nav-btn next" onClick={onNext}>→</button>
      </div>
    </div>
  );
}

export default TestimonialCard;