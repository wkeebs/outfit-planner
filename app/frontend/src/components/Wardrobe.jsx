import React from 'react';
import ImageCarousel from './ImageCarousel'; // Import your ImageCarousel component

const Wardrobe = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-semibold mb-6">Your Wardrobe</h1>
      <div className="grid grid-cols-2 gap-6">
        {/* Left Side - Categories */}
        <div className="col-span-1">
          <h2 className="text-xl font-semibold mb-4">Categories</h2>
          <ul className="space-y-2">
            <li className="text-gray-600 hover:text-gray-900 cursor-pointer transition duration-300">
              Hats
            </li>
            <li className="text-gray-600 hover:text-gray-900 cursor-pointer transition duration-300">
              Jackets
            </li>
            <li className="text-gray-600 hover:text-gray-900 cursor-pointer transition duration-300">
              Shirts
            </li>
            <li className="text-gray-600 hover:text-gray-900 cursor-pointer transition duration-300">
              Pants
            </li>
            <li className="text-gray-600 hover:text-gray-900 cursor-pointer transition duration-300">
              Shoes
            </li>
          </ul>
        </div>

        {/* Right Side - Carousel */}
        <div className="col-span-1">
          <h2 className="text-xl font-semibold mb-4">Selected Category</h2>
          <ImageCarousel />
        </div>
      </div>
    </div>
  );
};

export default Wardrobe;
