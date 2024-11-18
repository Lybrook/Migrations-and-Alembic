import React from 'react';

const Gallery = () => {
  return (
    <section className="p-8 bg-gray-100">
      <h2 className="text-3xl font-bold mb-4">Our Work</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <img src="/assets/images/furniture1.jpg" alt="Furniture 1" className="w-full h-64 object-cover rounded-lg" />
        <img src="/assets/images/furniture2.jpg" alt="Furniture 2" className="w-full h-64 object-cover rounded-lg" />
        <img src="/assets/images/interior1.jpg" alt="Interior Design 1" className="w-full h-64 object-cover rounded-lg" />
      </div>
    </section>
  );
};

export default Gallery;
