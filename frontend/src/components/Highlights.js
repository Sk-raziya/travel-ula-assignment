import React from 'react';
import './Highlight.css';

const Highlights = () => {
  return (
    <section id="highlights" className="highlights">
      <h2>Tour Highlights</h2>
      <div className="highlight-cards">
        <div className="card">
          <h3>Wildlife Safaris</h3>
          <p>Get up close with the Big Five and other exotic animals.</p>
        </div>
        <div className="card">
          <h3>Cultural Immersion</h3>
          <p>Interact with the Maasai people and learn about their traditions.</p>
        </div>
        <div className="card">
          <h3>Scenic Landscapes</h3>
          <p>Witness breathtaking sunsets and vast savannahs.</p>
        </div>
      </div>
    </section>
  );
};

export default Highlights;