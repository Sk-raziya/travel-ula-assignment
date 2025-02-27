import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">Travel Ula</div>
      <nav>
        <ul>
          <li><a href="#highlights">Highlights</a></li>
          <li><a href="#itinerary">Itinerary</a></li>
          <li><a href="#testimonials">Testimonials</a></li>
          <li><a href="#booking">Book Now</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;