import React from 'react';
import './BookWidget.css';

const BookingWidget = () => {
  return (
    <section id="booking" className="booking-widget">
      <h2>Ready for Your Adventure?</h2>
      <div className="widget">
        <p>Only 5 spots left! Reserve your spot now.</p>
        <button className="cta-button">Book Now</button>
      </div>
    </section>
  );
};

export default BookingWidget;