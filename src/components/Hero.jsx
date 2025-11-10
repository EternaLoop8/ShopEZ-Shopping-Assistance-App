import React, { useState, useEffect, useRef } from "react";
import carousel_1 from "../assets/carousel_1.jpg";
import carousel_2 from "../assets/carousel_2.jpg";
import carousel_3 from "../assets/carousel_3.jpg";
import carousel_4 from "../assets/carousel_4.jpg";
import carousel_5 from "../assets/carousel_5.jpg";

const Carousel = () => {
  const originalImages = [carousel_1, carousel_2, carousel_3, carousel_4, carousel_5];
  // Clone first and last images for smooth looping
  const images = [originalImages[originalImages.length - 1], ...originalImages, originalImages[0]];

  const [index, setIndex] = useState(1);
  const [transition, setTransition] = useState(true);
  const timeoutRef = useRef(null);

  const nextSlide = () => {
    setIndex((prev) => prev + 1);
  };

  const prevSlide = () => {
    setIndex((prev) => prev - 1);
  };

  useEffect(() => {
    timeoutRef.current = setInterval(nextSlide, 4000);
    return () => clearInterval(timeoutRef.current);
  }, []);

  useEffect(() => {
    if (index === images.length - 1) {
      // reached the end clone → jump to real first
      setTimeout(() => {
        setTransition(false);
        setIndex(1);
      }, 700); // same as transition duration
    } else if (index === 0) {
      // reached the first clone → jump to real last
      setTimeout(() => {
        setTransition(false);
        setIndex(images.length - 2);
      }, 700);
    } else {
      setTransition(true);
    }
  }, [index]);

  return (
    <div className="relative w-full overflow-hidden bg-[#EAEDED]">
      {/* Slides */}
      <div
        className={`flex ${transition ? "transition-transform duration-700 ease-in-out" : ""}`}
        style={{
          transform: `translateX(-${index * 100}%)`,
        }}
      >
        {images.map((img, i) => (
          <div key={i} className="relative w-full flex-shrink-0">
            <img
              src={img}
              alt={`Slide ${i}`}
              className="w-full h-[4=500px] object-cover select-none"
              draggable="false"
            />
            {/* Ambient gradient */}
            <div className="absolute bottom-0 w-full h-40 bg-gradient-to-t from-[#EAEDED] to-transparent pointer-events-none" />
          </div>
        ))}
      </div>

      {/* Arrows */}
      <button
        onClick={prevSlide}
        className="absolute top-1/3 left-4 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white p-2 rounded-full z-20"
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
        </svg>
      </button>

      <button
        onClick={nextSlide}
        className="absolute top-1/3 right-4 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white p-2 rounded-full z-20"
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
        </svg>
      </button>

      {/* Dots */}
      <div className="absolute bottom-40 left-1/2 -translate-x-1/2 flex gap-2 z-20">
        {originalImages.map((_, i) => (
          <span
            key={i}
            onClick={() => setIndex(i + 1)} // because of clone offset
            className={`w-3 h-3 rounded-full cursor-pointer ${
              index === i + 1 ? "bg-white" : "bg-gray-400/70"
            }`}
          ></span>
        ))}
      </div>

      {/* Bottom fade for product overlap */}
      <div className="absolute bottom-0 w-full h-32 bg-gradient-to-t from-[#EAEDED] to-transparent z-10" />
    </div>
  );
};

export default Carousel;