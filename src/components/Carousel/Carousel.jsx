import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import { img } from './img/data'; // Ensure img is an array of image URLs
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import classes from './Carousel.module.css';

const CarouselEffect = () => {
  return (
    <>
      <Carousel
        autoPlay={true} // Correct casing for autoplay
        infiniteLoop={true}
        showIndicators={false}
        showThumbs={false}
      >
        {img.map((imageItemLink, index) => (
          <div key={index}>
            <img src={imageItemLink} alt={`Slide ${index + 1}`} />
          </div>
        ))}
      </Carousel>
      <div className={classes.hero_img}></div>
    </>
  );
};

export default CarouselEffect;
