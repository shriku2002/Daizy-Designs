import React from 'react';
import './UserAvatar.css';

const UserAvatar = ({ initials }) => {
  // Get initials from the string (e.g., "VR", "S M", etc.)
  const getInitials = () => {
    if (!initials) return '';
    
    // If initials already contain spaces, just return as is
    if (initials.includes(' ')) {
      return initials;
    }
    
    // For format like "VR", return as is
    if (initials.length <= 2) {
      return initials;
    }
    
    // For longer strings, extract first letters
    return initials.split(' ').map(part => part[0]).join('');
  };

  // Generate a consistent background color based on initials
  const getAvatarColor = () => {
    if (!initials) return '#ccc';
    
    // Simple hash function for consistent colors
    const hash = initials.split('').reduce((acc, char) => {
      return char.charCodeAt(0) + ((acc << 5) - acc);
    }, 0);
    
    // Generate HSL color with consistent saturation and lightness
    const h = Math.abs(hash % 360);
    return `hsl(${h}, 70%, 80%)`;
  };

  return (
    <div 
      className="user-avatar" 
      style={{ backgroundColor: getAvatarColor() }}
    >
      {getInitials()}
    </div>
  );
};

export default UserAvatar;