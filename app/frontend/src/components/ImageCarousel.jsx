import React, { useRef, useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./ImageCarousel.css";

const ImageCarousel = ({ images }) => {
  const [hovered, setHovered] = useState(false);

  const carouselRef = useRef(null);

  const imageStyle = {
    maxHeight: "8rem", // Set your desired max-height
    width: "auto",
    height: "auto",
  };

  return (
    <div
      class="image-carousel"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Carousel
        ref={carouselRef}
        showThumbs={false} // Hide thumbnail previews
        showStatus={false} // Hide status bar
        infiniteLoop={true} // Loop through images indefinitely
        useKeyboardArrows={true} // Enable keyboard arrow navigation
        showIndicators={hovered}
      >
        {images.map((image, index) => (
          <div key={index}>
            <img src={image} alt={`${index}`} style={imageStyle} />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default ImageCarousel;
