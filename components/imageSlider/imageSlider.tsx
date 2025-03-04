"use client";

import Image, { StaticImageData } from "next/image";
import { useState } from "react";
import { motion } from "motion/react";

type ImageSliderProps = {
  images: StaticImageData[];
};

const ImageSlider: React.FC<ImageSliderProps> = ({ images }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleDotClick = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <div className="relative">
      <motion.div
        className="flex items-center justify-center"
        key={activeIndex} // Ensures re-mounting on index change
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -50 }}
        transition={{ duration: 0.5 }}
      >
        <div className="w-[800px] h-[400px] relative overflow-hidden rounded-lg">
          <Image
            src={images[activeIndex]}
            alt="slider-image"
            fill
            className="object-cover"
          />
        </div>
      </motion.div>
      <div className="flex items-center justify-center gap-2 mt-2">
        {images.map((_, index) => (
          <div
            key={index}
            onClick={() => handleDotClick(index)}
            className={`w-2 h-2 rounded-full cursor-pointer ${
              index === activeIndex ? "bg-primary" : "bg-lightgreen"
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
