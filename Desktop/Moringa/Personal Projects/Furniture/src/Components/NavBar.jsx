import React from 'react';

const NavBar = () => {
  return (
    <nav className="p-6 bg-black text-gray-200 shadow-lg">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
        <ul className="flex flex-col md:flex-row items-center md:space-x-12 space-y-4 md:space-y-0">
          <li>
            <a
              href="/"
              className="uppercase font-light text-lg tracking-wider transition duration-300 transform hover:text-yellow-500 hover:scale-110"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="/about"
              className="uppercase font-light text-lg tracking-wider transition duration-300 transform hover:text-yellow-500 hover:scale-110"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="/gallery"
              className="uppercase font-light text-lg tracking-wider transition duration-300 transform hover:text-yellow-500 hover:scale-110"
            >
              Gallery
            </a>
          </li>
        </ul>

        <div className="text-center">
          <div className="text-5xl font-extrabold text-yellow-500">KF</div>
          <p className="text-lg italic font-medium text-yellow-200">Kosala's Furniture</p>
          <p className="text-sm italic text-gray-400">Custom Furniture</p>
        </div>

        <ul className="flex flex-col md:flex-row items-center md:space-x-12 space-y-4 md:space-y-0">
          <li>
            <a
              href="/services"
              className="uppercase font-light text-lg tracking-wider transition duration-300 transform hover:text-yellow-500 hover:scale-110"
            >
              Services
            </a>
          </li>
          <li>
            <a
              href="/contact"
              className="uppercase font-light text-lg tracking-wider transition duration-300 transform hover:text-yellow-500 hover:scale-110"
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
