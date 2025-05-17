import React from "react";
import "./Header.css";
import logoImage from "../../assets/logo.png";

const Header = () => {
  return (
    <header className="header">
      <div className="logo-container">
        {/* <img src={logoImage} alt="Daizy Designs Logo" className="logo" /> */}
        <h1 className="logo-text">Daizy Designs</h1>
      </div>
      <div className="header-right">
        <button className="smart-actions-btn">
          <span className="action-icon">✨</span>
          Smart Actions
        </button>
        <div className="notification-container">
          <span className="notification-icon">🔔</span>
          <span className="notification-badge">15</span>
        </div>
        <div className="user-profile">
          <span className="user-name">Siddhart Singh</span>
          <button className="more-options-btn">⋮</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
