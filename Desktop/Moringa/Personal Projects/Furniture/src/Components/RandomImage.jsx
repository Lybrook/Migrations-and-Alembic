import React, { useState, useEffect } from 'react';

const RandomImage = () => {
  const images = [
    'https://i.pinimg.com/236x/1f/f4/7e/1ff47e64b44d01e67b23cba3cb51ba26.jpg',
    'https://i.pinimg.com/736x/b5/d6/df/b5d6df0d6df1f9d30c6b8b39b1aa374e.jpg',
    'https://i.pinimg.com/236x/9c/9a/92/9c9a92552cad7ab4dcc54cf5424c9650.jpg',
    'https://i.pinimg.com/736x/ee/e0/fe/eee0fe30ad5bdc3b5886ae1aa0db3b0a.jpg',
  ];

  const [currentImage, setCurrentImage] = useState(images[0]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * images.length);
      setCurrentIndex(randomIndex);
      setCurrentImage(images[randomIndex]);
    }, 3000);

    return () => clearInterval(interval);
  }, [images]);

  const handleDotClick = (index) => {
    setCurrentIndex(index); 
    setCurrentImage(images[index]);
  };

  return (
    <section className="p-8 bg-gray-100 h-screen flex flex-col justify-center items-center">
      <div className="flex justify-center items-center w-full h-full">
        <img
          src={currentImage}
          alt="Random display"
          className="w-full h-full object-cover rounded-lg shadow-lg"
        />
      </div>
      <div className="flex justify-center mt-4 space-x-2 absolute bottom-4">
        {images.map((_, index) => (
          <span
            key={index}
            className={`w-4 h-4 rounded-full cursor-pointer ${
              currentIndex === index ? 'bg-blue-500' : 'bg-gray-400'
            }`}
            onClick={() => handleDotClick(index)} 
          ></span>
        ))}
      </div>
    </section>
  );
};

export default RandomImage;
