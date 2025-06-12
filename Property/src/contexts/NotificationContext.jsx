import React, { createContext, useContext, useState, useEffect } from 'react';

const NotificationContext = createContext();

export function useNotification() {
  return useContext(NotificationContext);
}

export function NotificationProvider({ children }) {
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

  const unreadCount = notifications.filter(notif => !notif.read).length;
  const totalCount = notifications.length;

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

  const addNotification = (newNotification) => {
    setNotifications(prev => [...prev, {...newNotification, id: prev.length + 1, read: false, time: 'just now' }]);
  };

  const value = {
    notifications,
    unreadCount,
    totalCount,
    markAsRead,
    markAllAsRead,
    deleteNotification,
    addNotification
  };

  return (
    <NotificationContext.Provider value={value}>
      {children}
    </NotificationContext.Provider>
  );
} 