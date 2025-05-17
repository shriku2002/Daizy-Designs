import React from 'react';
import './LeadsTableRow.css';
import StatusBadge from '../UI/StatusBadge';
import UserAvatar from '../UI/UserAvatar';
import FollowUpButton from '../UI/FollowUpButton';

const LeadsTableRow = ({ lead }) => {
  return (
    <tr>
      <td>{lead.id}</td>
      <td>{lead.clientName}</td>
      <td>
        <StatusBadge status={lead.status} />
      </td>
      <td>{lead.phone}</td>
      <td>
        <FollowUpButton />
      </td>
      <td>
        <div className="date-info">
          <div>{lead.createdDate}</div>
          <div className="time-info">{lead.createdTime}</div>
        </div>
      </td>
      <td>{lead.projectName}</td>
      <td>
        <UserAvatar initials={lead.assignedTo} />
      </td>
      <td>{lead.budget}</td>
      <td>
        <div className="update-info">
          <div>{lead.updateTag}</div>
          <div className="update-details">{lead.updateDetails}</div>
        </div>
      </td>
    </tr>
  );
};

export default LeadsTableRow;