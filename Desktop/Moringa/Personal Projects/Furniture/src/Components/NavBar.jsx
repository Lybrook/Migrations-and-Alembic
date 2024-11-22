import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="p-6 shadow-2xl rounded-lg">
  <div className="container mx-auto flex justify-between items-center">
    <h1 className="text-5xl md:text-7xl font-light text-xl tracking-tight font-serif bg-clip-text bg-gradient-to-r from-gray-800 via-gray-900 to-black tracking-tight leading-tight font-sans antialiased transform hover:scale-105 transition duration-300">
      KOSALA'S FURNITURE
    </h1>
    
    
    <ul className="flex space-x-12">
      <li>
        <Link
          to="/"
          className="text-gray-800 font-light text-2xl tracking-wide font-serif uppercase transition duration-300 transform hover:text-yellow-500 hover:underline hover:scale-110"
        >
          Home
        </Link>
      </li>
      <li>
        <Link
          to="/about"
          className="text-gray-800 font-medium text-xl tracking-tight font-serif italic transition duration-300 transform hover:text-yellow-500 hover:underline hover:scale-110"
        >
          About
        </Link>
      </li>
      <li>
        <Link
          to="/gallery"
          className="text-gray-800 font-medium text-2xl tracking-wider font-sans transition duration-300 transform hover:text-yellow-500 hover:underline hover:scale-110"
        >
          Gallery
        </Link>
      </li>
      <li>
        <Link
          to="/services"
          className="text-gray-800 font-light text-xl tracking-tight font-serif transition duration-300 transform hover:text-yellow-500 hover:underline hover:scale-110"
        >
          Services
        </Link>
      </li>
    </ul>
  </div>
</nav>

  );
};

export default Navbar;
