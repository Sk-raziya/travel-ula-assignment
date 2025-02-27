import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Highlights from './components/Highlights';
import Itinerary from './components/Itinerary';
import Testimonials from './components/Testimonials';
import BookingWidget from './components/BookingWidget';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Highlights />
      <Itinerary />
      <Testimonials />
      <BookingWidget />
      <Footer />
    </div>
  );
}

export default App;