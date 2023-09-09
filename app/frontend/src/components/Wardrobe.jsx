import ImageCarousel from "./ImageCarousel";

function Wardrobe() {
    return (
        <div>
          <h2>Hats</h2>
          <ImageCarousel images={['./images/hat1.jpg', './images/hat2.jpg', '../images/hat3.jpg']} />
    
          <h2>Jackets</h2>
          <ImageCarousel images={['./images/jacket1.jpg', './images/jacket2.jpg', '../images/jacket3.jpg']} />
    
          <h2>Shirts</h2>
          <ImageCarousel images={['./images/shirt1.jpg', './images/shirt2.jpg', '../images/shirt3.jpg']} />
    
          <h2>Pants</h2>
          <ImageCarousel images={['./images/pants1.jpg', './images/pants2.jpg', '../images/pants3.jpg']} />
    
          <h2>Shoes</h2>
          <ImageCarousel images={['./images/shoes1.jpg', './images/shoes2.jpg', '../images/shoes3.jpg']} />
        </div>
      );
}

export default Wardrobe;