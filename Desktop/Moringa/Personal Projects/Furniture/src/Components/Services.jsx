import React from 'react';

const Services = () => {
  return (
    <section className="p-8 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-600 text-white rounded-lg shadow-xl">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        <div className="w-full md:w-1/2 mb-6 md:mb-0">
          <img
            src="https://i.pinimg.com/736x/f9/72/ec/f972ec4c7c312f1254b842d91057b1bc.jpg"
            alt="Furniture Design"
            className="w-full h-80 object-cover rounded-lg shadow-2xl transform hover:scale-105 transition-all duration-300"
          />
        </div>

        <div className="w-full md:w-1/2 pl-6">
          <h2 className="text-4xl font-extrabold mb-6 text-center md:text-left">Our Services</h2>
          <ul className="list-disc pl-6 space-y-4 text-lg">
            <li className="hover:text-yellow-300 cursor-pointer transition-all duration-200">Custom Furniture Design</li>
            <li className="hover:text-yellow-300 cursor-pointer transition-all duration-200">Interior Design Consultation</li>
            <li className="hover:text-yellow-300 cursor-pointer transition-all duration-200">Renovation & Restoration</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Services;
