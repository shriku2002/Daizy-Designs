import React from 'react';
import './LeadsTable.css';
import LeadsTableRow from './LeadsTableRow';
import { leadsData } from '../../data/leadsData';

const LeadsTable = () => {
  return (
    <div className="leads-table-container">
      <table className="leads-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Client Name</th>
            <th>Status</th>
            <th>Phone</th>
            <th>Follow Up</th>
            <th>Created Date</th>
            <th>Project Name</th>
            <th>Assigned To</th>
            <th>Budget</th>
            <th>Last Update</th>
          </tr>
        </thead>
        <tbody>
          {leadsData.map(lead => (
            <LeadsTableRow 
              key={lead.id}
              lead={lead}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default LeadsTable;