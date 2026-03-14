import React from 'react';
import './styles/main.scss';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import UrlShortener from './components/UrlShortener';
import Statistics from './components/Statistics';
import Boost from './components/Boost';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <UrlShortener />
      <Statistics />
      <Boost />
      <Footer />
    </div>
  );
}

export default App;
