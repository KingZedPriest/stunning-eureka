"use client";
import { useState } from "react";
//Import the Testimonial Card
import Card from "./TestimonialCard";
export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const slides = [
    { id: 1, color: "bg-red-500" },
    { id: 2, color: "bg-green-500" },
    { id: 3, color: "bg-purple-500" },
    { id: 4, color: "bg-gray-500" },
    // Add more slides as needed
  ];

  const handleButtonClick = () => {
    const nextIndex = (activeIndex + 1) % slides.length;
    setActiveIndex(nextIndex);
  };

  return (
    <main className="px-4 pb-[8rem] sm:px-10 md:px-12 lg:px-14">
      <h1 className="text-center text-lg font-bold sm:text-xl md:text-2xl lg:text-3xl">
        What Our Customers Are Saying.
      </h1>
      <div className="relative overflow-hidden w-full h-80">
        <button
          onClick={handleButtonClick}
          className="absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2 transform"
        >
          Click Me
        </button>
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${activeIndex * 100}%)` }}
        >
          {slides.map((slide) => (
            <div key={slide.id} className={`h-80 min-w-full ${slide.color}`}>
              {/* Content for each slide */}
              <p className="text-center text-white">Slide {slide.id}</p>
            </div>
          ))}
        </div>        
      </div>
    </main>
  );
}


