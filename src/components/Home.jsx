// Home.js
import React from 'react';
import './Home.css'; // Importing the CSS file for styling

function Home() {
  return (
    <div className="home-container">
      <header className="header">
        <h1>TalentBridge</h1>
        <p>Your one-stop destination for finding professional matches</p>
      </header>
      <main className="main-content">
        <section className="intro">
          <h2>About Us</h2>
          <p>We help you find the perfect job, candidate or project partner you are looking for.</p>
        </section>
        <section className="features">
          <h2>Features</h2>
          <ul>
            <li>Look for job openings</li>
            <li>Find partners for projects and hackathons</li>
            <li>See candidates interested in working for you</li>
          </ul>
        </section>
      </main>
      <footer className="footer">
        <p>&copy; TalentBridge</p>
      </footer>
    </div>
  );
}

export default Home;
