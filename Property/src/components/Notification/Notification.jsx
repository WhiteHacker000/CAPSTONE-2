import React, { useState } from 'react';
import { FaCheck, FaTrash, FaRegBell, FaFilter } from 'react-icons/fa';
import './Notifications.css';

function Notifications() {
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      type: 'property',
      title: 'New Property Verification',
      message: 'Your property at 123 Main St has been successfully verified.',
      time: '2 hours ago',
      read: false,
      icon: '🏠'
    },
    {
      id: 2,
      type: 'transaction',
      title: 'Transaction Update',
      message: 'Your offer for Mountain View Cottage has been accepted.',
      time: '1 day ago',
      read: false,
      icon: '📝'
    },
    {
      id: 3,
      type: 'alert',
      title: 'Price Drop Alert',
      message: 'A property on your watchlist has dropped in price by 5%.',
      time: '2 days ago',
      read: false,
      icon: '💰'
    },
    {
      id: 4,
      type: 'system',
      title: 'System Update',
      message: 'We\'ve updated our terms of service. Please review the changes.',
      time: '1 week ago',
      read: true,
      icon: '⚙️'
    },
    {
      id: 5,
      type: 'transaction',
      title: 'Document Signed',
      message: 'Closing documents for 456 Oak Ave have been signed by all parties.',
      time: '1 week ago',
      read: true,
      icon: '✍️'
    }
  ]);

  const [filter, setFilter] = useState('all');
  
  const markAsRead = (id) => {
    setNotifications(notifications.map(notif => 
      notif.id === id ? {...notif, read: true} : notif
    ));
  };
  
  const markAllAsRead = () => {
    setNotifications(notifications.map(notif => ({...notif, read: true})));
  };
  
  const deleteNotification = (id) => {
    setNotifications(notifications.filter(notif => notif.id !== id));
  };
  
  const filteredNotifications = filter === 'all' 
    ? notifications 
    : filter === 'unread' 
      ? notifications.filter(notif => !notif.read)
      : notifications.filter(notif => notif.type === filter);
  
  const unreadCount = notifications.filter(notif => !notif.read).length;

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

export default Notifications;