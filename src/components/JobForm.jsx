// src/components/JobForm.jsx
import React, { useState } from 'react';

const JobForm = ({ onSubmit }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [requirements, setRequirements] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ title, description, requirements });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Job Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        placeholder="Job Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <textarea
        placeholder="Requirements"
        value={requirements}
        onChange={(e) => setRequirements(e.target.value)}
      />
      <button type="submit">Post Job</button>
    </form>
  );
};

export default JobForm;
