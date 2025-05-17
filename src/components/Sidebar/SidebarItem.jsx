import React from 'react';
import './SidebarItem.css';

const SidebarItem = ({ name, icon, active, collapsed }) => {
  return (
    <div className={`sidebar-item ${active ? 'active' : ''}`}>
      <span className="sidebar-icon">{icon}</span>
      {!collapsed && <span className="sidebar-text">{name}</span>}
    </div>
  );
};

export default SidebarItem;