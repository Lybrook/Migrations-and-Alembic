import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <ul className="flex justify-central ">
      <li>
  <Link 
    to="/" 
    className="text-gray-700 hover:text-gray-900 font-semibold text-lg transition duration-300 ease-in-out transform hover:scale-105">
    Home
  </Link>
</li>
<li>
  <Link 
    to="/about" 
    className="text-gray-700 hover:text-gray-900 font-semibold text-lg transition duration-300 ease-in-out transform hover:scale-105">
    About
  </Link>
</li>
<li>
  <Link 
    to="/gallery" 
    className="text-gray-700 hover:text-gray-900 font-semibold text-lg transition duration-300 ease-in-out transform hover:scale-105">
    Gallery
  </Link>
</li>
<li>
  <Link 
    to="/services" 
    className="text-gray-700 hover:text-gray-900 font-semibold text-lg transition duration-300 ease-in-out transform hover:scale-105">
    Services
  </Link>
</li>

      </ul>
    </nav>
  );
};

export default Navbar;
