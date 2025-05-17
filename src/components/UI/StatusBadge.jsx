import React from 'react';
import './StatusBadge.css';

const StatusBadge = ({ status }) => {
  const getStatusClass = () => {
    switch (status.toLowerCase()) {
      case 'created':
        return 'status-created';
      case 'estimate shared':
        return 'status-estimate';
      case 'visit planned':
        return 'status-visit';
      case 'assigned':
        return 'status-assigned';
      default:
        return 'status-default';
    }
  };

  return (
    <div className={`status-badge ${getStatusClass()}`}>
      <select className="status-select" defaultValue={status}>
        <option value={status}>{status}</option>
      </select>
    </div>
  );
};

export default StatusBadge;