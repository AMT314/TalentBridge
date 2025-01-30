// src/pages/Dashboard.jsx
import React, { useState } from 'react';
import JobForm from '../components/JobForm';
import JobCard from '../components/JobCard';
import { mockJobs } from '../mockData';

const Dashboard = () => {
  const [jobs, setJobs] = useState(mockJobs);

  const handlePostJob = (job) => {
    setJobs([...jobs, { ...job, id: Date.now() }]);
  };

  const handleAccept = (jobId) => {
    // Handle accept logic
  };

  const handleReject = (jobId) => {
    setJobs(jobs.filter(job => job.id !== jobId));
  };

  return (
    <div>
      <h2>Dashboard</h2>
      <JobForm onSubmit={handlePostJob} />
      <div>
        {jobs.map(job => (
          <JobCard
            key={job.id}
            job={job}
            onAccept={handleAccept}
            onReject={handleReject}
          />
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
