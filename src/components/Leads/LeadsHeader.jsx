import React from 'react';
import './LeadsHeader.css';

const LeadsHeader = () => {
  return (
    <div className="leads-header">
      <div className="leads-title-container">
        <h2 className="leads-title">Leads<span className="leads-count">+</span></h2>
        <button className="add-lead-btn">+</button>
      </div>
      <div className="leads-actions">
        <div className="search-filter">
          <div className="search-input-container">
            <input type="text" placeholder="Search" className="leads-search" />
            <span className="search-icon">🔍</span>
            <button className="clear-search">×</button>
          </div>
        </div>
        <div className="filter-options">
          <div className="filter-dropdown">
            <span className="filter-text">Created</span>
            <span className="filter-count">+13</span>
            <span className="dropdown-arrow">▼</span>
          </div>
          <button className="filter-btn" title="Filter">
            <span className="filter-icon">⚡</span>
          </button>
          <div className="view-options">
            <button className="view-btn active" title="List View">
              <span className="view-icon">☰</span>
            </button>
            <button className="view-btn" title="Grid View">
              <span className="view-icon">◫</span>
            </button>
          </div>
          <button className="more-options-btn">⋮</button>
        </div>
      </div>
    </div>
  );
};

export default LeadsHeader;