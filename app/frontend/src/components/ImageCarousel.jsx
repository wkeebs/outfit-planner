import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"

import img1 from "../images/hat1.jpg";
import img2 from "../images/hat2.jpg";
import img3 from "../images/hat3.jpg";


const ImageCarousel = () => {
  const images = [
    img1, img2, img3
  ];

  return (
    <div className="carousel-container">
      <Carousel>
        {images.map((image, index) => (
          <div key={index + 1}>
            <img src={image} alt={`${index + 1}`} />
          </div>
        ))}
      </Carousel>
    </div>
  );
};


export default ImageCarousel;
