import React from 'react';
import Hero from '../Components/Hero';
import About from '../Components/About';
import Gallery from '../Components/Gallery';
import Services from '../Components/Services';
import Footer from '../Components/Footer';
import RandomImage from '../Components/RandomImage';

const Home = () => {
  return (
    <div>
       <RandomImage />
       <About />
       <Hero />
      <Gallery />
      <Services />
      <Footer />
    </div>
  );
};

export default Home;
