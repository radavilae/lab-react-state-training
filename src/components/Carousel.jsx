import React, { useState } from "react";

function Carousel({ images }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleLeftClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleRightClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div style={{ textAlign: "center" }}>
      <img
        src={images[currentIndex]}
        alt="carousel"
        style={{ width: "200px", height: "200px", objectFit: "cover" }}
      />
      <div>
        <button onClick={handleLeftClick}>Left</button>
        <button onClick={handleRightClick}>Right</button>
      </div>
    </div>
  );
}

export default Carousel;
