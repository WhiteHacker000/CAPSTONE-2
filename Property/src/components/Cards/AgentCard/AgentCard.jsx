import React from 'react';


function AgentCard({ agent }) {
  const { name, initials, title, company, badge, engagement, listings } = agent;
  
  return (
    <div className="agent-card">
      <div className="agent-avatar">{initials}</div>
      <h3>{name}</h3>
      <p>{title}</p>
      <p className={`badge ${badge}`}>{badge}</p>
      <p>{company}</p>
      <div className="engagement">
        <span>{engagement} Engagement</span>
        <span>{listings} Active listings</span>
      </div>
      <div className="agent-actions">
        <button>Message</button>
        <button>Call</button>
      </div>
      <a href="#">View Full Profile</a>
    </div>
  );
}

export default AgentCard;