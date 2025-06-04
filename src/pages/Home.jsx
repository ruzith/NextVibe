import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Services />
    </>
  );
};

export default Home;
