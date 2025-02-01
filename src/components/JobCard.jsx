import React, { useState, useRef } from 'react';
import './JobCard.css';

const JobCard = ({ job }) => {
  const [swiped, setSwiped] = useState(false);
  const cardRef = useRef(null);

  const handleSwipe = (direction) => {
    if (cardRef.current) {
      cardRef.current.classList.add('swipe');

      setTimeout(() => {
        setSwiped(true);

        const action = direction === 'right' ? 'interested' : 'not_interested';

        fetch('/api/jobs', { // Replace with your actual API endpoint
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ jobId: job.id, action: action }),
        })
          .then(response => {
            if (!response.ok) {
              return response.json().then(err => {throw new Error(err.message || response.statusText)});
            }
            return response.json();
          })
          .then(data => {
            console.log(`Job ${action}:`, data);
          })
          .catch(error => {
            console.error(`Error ${action} job:`, error);
            setSwiped(false);
            alert(`Failed to ${action} job: ${error.message}`);
          });
      }, 300);
    }
  };

  const handleTouchStart = (e) => {
    if (cardRef.current) {
      cardRef.current.startX = e.touches[0].clientX;
    }
  };

  const handleTouchMove = (e) => {
    if (cardRef.current && cardRef.current.startX) {
      const diffX = e.touches[0].clientX - cardRef.current.startX;
      cardRef.current.style.transform = `translateX(${diffX}px)`;
    }
  };

  const handleTouchEnd = (e) => {
    if (cardRef.current && cardRef.current.startX) {
      const diffX = e.changedTouches[0].clientX - cardRef.current.startX;
      cardRef.current.style.transform = 'translateX(0)';

      if (Math.abs(diffX) > 50) {
        handleSwipe(diffX > 0 ? 'right' : 'left');
      }
      cardRef.current.startX = null;
    }
  };

  if (swiped) {
    return null;
  }

  return (
    <div
      className="job-card"
      ref={cardRef}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <h3>{job.title}</h3>
      <p>
        <strong>Salary:</strong> {job.salary}
      </p>
      <p>
        <strong>Location:</strong> {job.location}
      </p>
      <p className="description">
        <strong>Description:</strong> {job.description}
      </p>
      <p>
        <strong>Requirements:</strong> {job.requirements}
      </p>

      <div className="swipe-buttons">
        <button onClick={() => handleSwipe('left')} className="swipe-button left-swipe">
          <span role="img" aria-label="Not Interested">
            ⬅️
          </span>
        </button>
        <button onClick={() => handleSwipe('right')} className="swipe-button right-swipe">
          <span role="img" aria-label="Interested">
            ➡️
          </span>
        </button>
      </div>
    </div>
  );
};

const JobList = () => {
  const jobs = [
    {
      id: 1,
      title: 'Software Engineer',
      salary: '$80,000 - $100,000', // Example salary format
      location: 'New York, NY',
      description: 'Develop web applications using React and Node.js.',
      requirements: '3+ years experience, React, Node.js, JavaScript',
    },
    {
      id: 2,
      title: 'Data Scientist',
      salary: '$90,000 - $120,000',
      location: 'San Francisco, CA',
      description: 'Analyze data and build machine learning models using Python.',
      requirements: '2+ years experience, Python, SQL, Machine Learning',
    },
    // ... more jobs
  ];

  return (
    <div className="job-list-container">
      <h1>Job Suggestions</h1>
      <div className="job-list">
        {jobs.map((job) => (
          <JobCard key={job.id} job={job} />
        ))}
      </div>
    </div>
  );
};

export default JobList;

