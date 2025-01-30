// Import React and CSS
import React, { useState } from 'react';
import './App.css';

function App() {
  // State to toggle between developer and company
  const [isDeveloper, setIsDeveloper] = useState(true);

  // Form input states
  const [formData, setFormData] = useState({
    fullName: '',
    companyName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
    companyAddress: ''
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert('Passwords do not match!');
    } else {
      alert('Form Submitted Successfully!');
      console.log(formData);
    }
  };

  return (
    <div className="app">
      <div className="header">
        <h1>Talent Bridge</h1>
      </div>
      <div className="form-container">
        <h2>Sign Up Now!</h2>
        <div className="toggle-buttons">
          <button
            className={isDeveloper ? 'active' : ''}
            onClick={() => setIsDeveloper(true)}
          >
            Developer
          </button>
          <button
            className={!isDeveloper ? 'active' : ''}
            onClick={() => setIsDeveloper(false)}
          >
            Company
          </button>
        </div>

        <form onSubmit={handleSubmit}>
          {isDeveloper ? (
            <div className="form-group">
              <label>Full Name</label>
              <input
                type="text"
                name="fullName"
                placeholder="Enter Your Full Name"
                value={formData.fullName}
                onChange={handleChange}
              />
            </div>
          ) : (
            <div className="form-group">
              <label>Company Name</label>
              <input
                type="text"
                name="companyName"
                placeholder="Enter Your Company Name"
                value={formData.companyName}
                onChange={handleChange}
              />
            </div>
          )}
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              name="email"
              placeholder="Enter Your Email Address"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label>Phone Number</label>
            <input
              type="text"
              name="phone"
              placeholder="Enter Your Phone Number"
              value={formData.phone}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              name="password"
              placeholder="Enter Your Password"
              value={formData.password}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label>Confirm Password</label>
            <input
              type="password"
              name="confirmPassword"
              placeholder="Re-Enter Your Password"
              value={formData.confirmPassword}
              onChange={handleChange}
            />
          </div>
          {!isDeveloper && (
            <div className="form-group">
              <label>Company Address</label>
              <input
                type="text"
                name="companyAddress"
                placeholder="Enter Your Company Address"
                value={formData.companyAddress}
                onChange={handleChange}
              />
            </div>
          )}
          <button type="submit" className="submit-button">Sign Up</button>
        </form>
        <p className="switch-link">
          Already have an Account? <a href="#">Log In</a>
        </p>
      </div>
    </div>
  );
}

export default App;
