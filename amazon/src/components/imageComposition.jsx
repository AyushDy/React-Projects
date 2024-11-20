import React, { useState } from "react";

const ImageComposition = ({ data }) => {
    const images = [
        "https://via.placeholder.com/800x400?text=Image+1",
        "https://via.placeholder.com/800x400?text=Image+2",
        "https://via.placeholder.com/800x400?text=Image+3",
        "https://via.placeholder.com/800x400?text=Image+4",
        "https://via.placeholder.com/800x400?text=Image+5",
        "https://via.placeholder.com/800x400?text=Image+6", 
      ]
  const [selectedImage, setSelectedImage] = useState(images[0]);

  
  return (
    <div className="image-composition-container max-w-screen-lg mx-auto p-4">
      {/* Large Image Display */}
      <div className="large-image-container w-full h-[500px] mb-4">
        <img
          src={selectedImage}
          alt="Selected"
          className="w-full h-full object-cover rounded-md shadow-lg"
        />
      </div>

      {/* Thumbnails */}
      <div className="thumbnails-container flex gap-4 overflow-x-auto">
        {images.map((img, index) => (
          <div
            key={index}
            className={`thumbnail w-20 h-20 rounded-md cursor-pointer ${
              selectedImage === img ? "border-4 border-blue-500" : "border"
            }`}
            onMouseEnter={() => setSelectedImage(img)}
          >
            <img
              src={img}
              alt={`Thumbnail ${index + 1}`}
              className="w-full h-full object-cover rounded-md"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageComposition;
