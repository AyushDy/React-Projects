import React, { useEffect, useState, useRef } from "react";

const Carousel = () => {
  const images = [
    "https://images-eu.ssl-images-amazon.com/images/G/31/img22/Toys/GW/GW-Hero-PC_BBAug23_Soft-toys_with-Apay_Lifestyle_1x._CB597740150_.jpg",
    "https://images-eu.ssl-images-amazon.com/images/G/31/OHL/24/BAU/feb/PC_hero_1_2x_1._CB582889946_.jpg",
    "https://images-eu.ssl-images-amazon.com/images/G/31/img23/Softlines_JWL_SH_GW_Assets/2024/BAU_BTF/Nov/Unrec/Shoes/1/30003._CB542120021_.jpg",
    "https://images-eu.ssl-images-amazon.com/images/G/31/img18/HomeImprovement/harsmisc/2024/FDFO_-HI---HMD---GW-heros_3000X1200._CB541673610_.jpg",
    "https://images-eu.ssl-images-amazon.com/images/G/31/img24/Media/BAU/PC_Hero_2x-toys_1._CB582765723_.jpg",
    "https://images-eu.ssl-images-amazon.com/images/G/31/img23/GW/P42/Boult_3000x1200-PC._CB543542644_.jpg",
    "https://images-eu.ssl-images-amazon.com/images/G/31/img22/Wireless/devjyoti/GW/Uber/Nov/Nov_New_3000x1200._CB542180708_.jpg",
  ];

  const intervalTiming = 5000;
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  
  const intervalRef = useRef(null);

  const setSlides = () => {
    return images.map((_, index) => ({
      transform: `translateX(${(index - currentSlideIndex) * windowWidth}px)`,
      transition: "transform 0.2s ease-in-out",
    }));
  };

  const previousSlide = () => {
    setCurrentSlideIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const nextSlide = () => {
    setCurrentSlideIndex((prev) => (prev + 1) % images.length);
  };

  const startSlideInterval = () => {
    intervalRef.current = setInterval(nextSlide, intervalTiming);
  };

  const stopSlideInterval = () => {
    clearInterval(intervalRef.current);
  };

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    startSlideInterval();

    return () => {
      stopSlideInterval();
      window.removeEventListener("resize", handleResize);
    };
  }, [currentSlideIndex]);

  return (
    <div className="relative w-full">
      {/* Images Section */}
      <div className="carousel w-full h-[800px] absolute overflow-hidden">
        <div className="slides flex transition-transform duration-200">
          {images.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`Slide ${index + 1}`}
              style={setSlides()[index]}
              className="w-full object-cover absolute top-0 left-0 " // Absolute and double height
            />
          ))}
        </div>
      </div>

      {/* Buttons Section */}
      <div className="carousel-buttons bg-transparent relative w-full flex justify-between items-center z-10">
        <button
          className="prev h-80 w-14 bg-transparent text-black hover:border hover:border-[#007185] flex items-center justify-center rounded-md ml-4"
          onClick={() => {
            stopSlideInterval();
            previousSlide();
          }}
        >
          <span className="text-2xl">{"<"}</span>
        </button>
        <button
          className="next h-80 w-14 bg-transparent text-black hover:border hover:border-[#007185] flex items-center justify-center rounded-md mr-4"
          onClick={() => {
            stopSlideInterval();
            nextSlide();
          }}
        >
          <span className="text-2xl">{">"}</span>
        </button>
      </div>
    </div>
  );
};

export default Carousel;
