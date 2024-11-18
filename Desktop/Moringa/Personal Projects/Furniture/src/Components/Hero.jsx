import React from 'react';

const Hero = () => {
  return (
    <section className="bg-cover bg-center h-screen" style={{ backgroundImage: "url('/assets/images/hero.jpg')" }}>
      <div className="flex justify-center items-center h-full bg-black bg-opacity-50">
        <h1 className="text-white text-4xl font-bold">Crafting Beautiful Furniture and Interior Designs</h1>
      </div>
    </section>
  );
};

export default Hero;
