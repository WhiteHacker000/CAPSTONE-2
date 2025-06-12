import React, { useState } from 'react';
import { FaCheck, FaTrash, FaRegBell, FaFilter } from 'react-icons/fa';
import { useNotification } from '../../contexts/NotificationContext';
import './Notification.css';

function Notification() {
  const { notifications, unreadCount, markAsRead, markAllAsRead, deleteNotification } = useNotification();

  const [filter, setFilter] = useState('all');
  
  const filteredNotifications = filter === 'all' 
    ? notifications 
    : filter === 'unread' 
      ? notifications.filter(notif => !notif.read)
      : notifications.filter(notif => notif.type === filter);
  
  return (
    <div className="notifications-page">
      <div className="notifications-header">
        <div className="container">
          <h1>Notifications</h1>
          <p>Stay updated with your properties, transactions, and more</p>
        </div>
      </div>
      
      <div className="notifications-container">
        <div className="notifications-controls">
          <div className="notifications-stats">
            <div className="notification-counter">
              <FaRegBell />
              <span>{unreadCount} unread notifications</span>
            </div>
          </div>
          
          <div className="notifications-actions">
            <button className="mark-all-btn" onClick={markAllAsRead}>
              Mark All as Read
            </button>
            
            <div className="filter-dropdown">
              <button className="filter-btn">
                <FaFilter />
                <span>Filter</span>
              </button>
              <div className="filter-menu">
                <button 
                  className={filter === 'all' ? 'active' : ''}
                  onClick={() => setFilter('all')}
                >
                  All Notifications
                </button>
                <button 
                  className={filter === 'unread' ? 'active' : ''}
                  onClick={() => setFilter('unread')}
                >
                  Unread
                </button>
                <button 
                  className={filter === 'property' ? 'active' : ''}
                  onClick={() => setFilter('property')}
                >
                  Properties
                </button>
                <button 
                  className={filter === 'transaction' ? 'active' : ''}
                  onClick={() => setFilter('transaction')}
                >
                  Transactions
                </button>
                <button 
                  className={filter === 'alert' ? 'active' : ''}
                  onClick={() => setFilter('alert')}
                >
                  Alerts
                </button>
                <button 
                  className={filter === 'system' ? 'active' : ''}
                  onClick={() => setFilter('system')}
                >
                  System
                </button>
              </div>
            </div>
          </div>
        </div>
        
        <div className="notifications-list">
          {filteredNotifications.length === 0 ? (
            <div className="no-notifications">
              <div className="empty-icon">🔔</div>
              <h3>No notifications</h3>
              <p>You're all caught up! We'll notify you when there's something new.</p>
            </div>
          ) : (
            filteredNotifications.map(notification => (
              <div 
                key={notification.id} 
                className={`notification-item ${notification.read ? 'read' : 'unread'}`}
              >
                <div className={`notification-icon ${notification.type}`}>
                  {notification.icon}
                </div>
                
                <div className="notification-content">
                  <div className="notification-header">
                    <h3>{notification.title}</h3>
                    <span className="notification-time">{notification.time}</span>
                  </div>
                  <p className="notification-message">{notification.message}</p>
                </div>
                
                <div className="notification-actions">
                  {!notification.read && (
                    <button 
                      className="mark-read-btn"
                      onClick={() => markAsRead(notification.id)}
                      title="Mark as read"
                    >
                      <FaCheck />
                    </button>
                  )}
                  <button 
                    className="delete-btn"
                    onClick={() => deleteNotification(notification.id)}
                    title="Delete notification"
                  >
                    <FaTrash />
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}

export default Notification;