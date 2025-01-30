// src/components/JobCard.jsx
import React from 'react';

const JobCard = ({ job, onAccept, onReject }) => {
  return (
    <div>
      <h3>{job.title}</h3>
      <p>{job.description}</p>
      <p>{job.requirements}</p>
      <button onClick={() => onAccept(job.id)}>Accept</button>
      <button onClick={() => onReject(job.id)}>Reject</button>
    </div>
  );
};

export default JobCard;
