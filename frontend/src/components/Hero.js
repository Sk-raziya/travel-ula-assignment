import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Discover the Magic of Maasai Mara</h1>
        <p>Experience the wild like never before. Book your adventure today!</p>
        <a href="#booking" className="cta-button">Reserve Your Spot</a>
      </div>
    </section>
  );
};

export default Hero;