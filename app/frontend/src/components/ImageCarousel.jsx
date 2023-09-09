import React from 'react';
import {Carousel} from 'react-responsive-carousel'

const ImageCarousel = () => {
  const images = [
    'app/frontend/src/components/images/hat1.jpg',
    'app/frontend/src/components/images/hat1.jpg',
    'app/frontend/src/components/images/hat1.jpg',
    // Add more image URLs here
  ];

  return (
    <div className="carousel-container">
      <Carousel>
        {images.map((image, index) => (
          <div key={index}>
            <img src={image} alt={`Image ${index}`} />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default ImageCarousel;
