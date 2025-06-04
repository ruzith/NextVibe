import React from 'react';

const Services = () => {
  return (
    <section id="services" style={styles.services}>
      <h2>Our Services</h2>
      <div>
        <h3>Social Media Marketing</h3>
        <p>We craft powerful digital strategies...</p>
        <h3>Production</h3>
        <p>High-quality production services...</p>
        <h3>Creative Products</h3>
        <p>Creative digital goods and services...</p>
      </div>
    </section>
  );
};

const styles = {
  services: {
    padding: '100px 20px',
    background: '#1b1b1b',
    color: 'white',
    textAlign: 'center'
  }
};

export default Services;
