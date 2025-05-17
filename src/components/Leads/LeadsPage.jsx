import React from 'react';
import './LeadsPage.css';
import LeadsHeader from './LeadsHeader';
import LeadsTable from './LeadsTable';

const LeadsPage = () => {
  return (
    <div className="leads-page">
      <LeadsHeader />
      <LeadsTable />
    </div>
  );
};

export default LeadsPage;