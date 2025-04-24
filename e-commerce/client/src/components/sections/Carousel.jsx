import React from "react";
import Slider from "react-slick"; 

const Carousel = () => {
  const images = [
    "/caraousel/image-0.jpg",
    "/caraousel/image-1.jpg",
    "/caraousel/image-2.jpg",
    "/caraousel/image-3.jpg",
  ];

  const settings = {
    infinite: true,           
    slidesToShow: 1,           
    slidesToScroll: 1,         
    autoplay: true,            
    autoplaySpeed: 3000,       
    arrows: false,              
    pauseOnHover: true,      
    cssEase: "ease-in-out",     
  };


  return (
    <div className="mt-10 w-3/4 mb-0 ml-20 ">
      <Slider {...settings}>
        {images.map((src, idx) => (
          <div key={idx} >
            <img
              src={src}
              alt={`Slide ${idx}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};


export default Carousel;
