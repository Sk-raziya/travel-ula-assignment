import React from 'react';
import './Testimonial.css';

const Testimonials = () => {
  return (
    <section id="testimonials" className="testimonials">
      <h2>What Our Travelers Say</h2>
      <div className="testimonial-cards">
        <div className="card">
          <p>"An unforgettable experience! The safaris were breathtaking."</p>
          <p>- Jane Doe</p>
        </div>
        <div className="card">
          <p>"The Maasai cultural visit was the highlight of our trip."</p>
          <p>- John Smith</p>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;