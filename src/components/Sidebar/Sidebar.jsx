import React from 'react';
import './Sidebar.css';
import SidebarItem from './SidebarItem';

const Sidebar = ({ collapsed, onToggle }) => {
  const menuItems = [
    { id: 1, name: 'Dashboard', icon: '📊', active: false },
    { id: 2, name: 'Leads', icon: '🔍', active: true },
    { id: 3, name: 'Projects', icon: '📁', active: false },
    { id: 4, name: 'Tasks', icon: '✓', active: false },
    { id: 5, name: 'Organizations', icon: '🏢', active: false },
    { id: 6, name: 'Finance', icon: '💰', active: false },
    { id: 7, name: 'Petty Expenses', icon: '💸', active: false },
    { id: 8, name: 'Payments', icon: '💳', active: false },
    { id: 9, name: 'Procurement', icon: '🛒', active: false },
    { id: 10, name: 'Material Request', icon: '📦', active: false },
    { id: 11, name: 'RFQ', icon: '📝', active: false },
    { id: 12, name: 'Purchase Order', icon: '🧾', active: false },
    { id: 13, name: 'Inventory', icon: '📋', active: false },
    { id: 14, name: 'Daizy Assistant', icon: '🤖', active: false },
    { id: 15, name: 'Inspirations', icon: '💡', active: false },
  ];

  return (
    <div className={`sidebar ${collapsed ? 'collapsed' : ''}`}>
      <div className="search-container">
        {!collapsed && <input type="text" placeholder="Search" className="search-input" />}
        <button className="collapse-btn" onClick={onToggle}>
          {collapsed ? '»' : '«'}
        </button>
      </div>
      <div className="sidebar-menu">
        {menuItems.map(item => (
          <SidebarItem 
            key={item.id}
            name={item.name}
            icon={item.icon}
            active={item.active}
            collapsed={collapsed}
          />
        ))}
      </div>
    </div>
  );
};

export default Sidebar;