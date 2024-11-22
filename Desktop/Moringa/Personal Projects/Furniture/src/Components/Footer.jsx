import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-800 text-white py-4 text-center">
      <p>&copy; {currentYear} Kosala's Furniture. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
