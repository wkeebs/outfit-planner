import React from 'react';
import ImageCarousel from './ImageCarousel'; // Import your ImageCarousel component

// Import images for each category
import hat1 from '../images/hats/hat1.jpg';
import hat2 from '../images/hats/hat2.jpg';
import hat3 from '../images/hats/hat3.jpg';

import jacket1 from '../images/jackets/jacket1.jpg';
import jacket2 from '../images/jackets/jacket2.jpg';
import jacket3 from '../images/jackets/jacket3.jpg';

import shirt1 from '../images/shirts/shirt1.jpg';
import shirt2 from '../images/shirts/shirt2.jpg';
import shirt3 from '../images/shirts/shirt3.jpg';

import pants1 from '../images/pants/pants1.jpg';
import pants2 from '../images/pants/pants2.jpg';
import pants3 from '../images/pants/pants3.jpg';

import shoes1 from '../images/shoes/shoes1.jpg';
import shoes2 from '../images/shoes/shoes2.jpg';
import shoes3 from '../images/shoes/shoes3.jpg';

const Wardrobe = () => {
  const hatsImages = [hat1, hat2, hat3];
  const jacketsImages = [jacket1, jacket2, jacket3];
  const shirtsImages = [shirt1, shirt2, shirt3];
  const pantsImages = [pants1, pants2, pants3];
  const shoesImages = [shoes1, shoes2, shoes3];

  const categories = [
    { name: 'Hats', images: hatsImages },
    { name: 'Jackets', images: jacketsImages },
    { name: 'Shirts', images: shirtsImages },
    { name: 'Pants', images: pantsImages },
    { name: 'Shoes', images: shoesImages },
  ];

  return (
    <div className="bg-white p-4 border-1 rounded-2xl shadow-xl hover:shadow-2xl h-full">
      <h1 className="text-3xl font-semibold mb-6 text-center">Your Wardrobe</h1>
      <div className="flex-col">
        {/* Categories */}
        {categories.map((category, index) => (
          <div key={index} className="mb-1">
            {/* <h2 className="text-xl font-semibold mb-4">{category.name}</h2> */}
            <ImageCarousel images={category.images} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Wardrobe;
