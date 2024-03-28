"use client";

import React, { useEffect, useState } from "react";
import { salonImages } from "@/lib/imgData";
import Image from "next/image";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const SalonSlider = () => {
  const [activeImage, setActiveImage] = useState(0);

  const nextSlide = () => {
    activeImage === salonImages.length - 1
      ? setActiveImage(0)
      : setActiveImage(activeImage + 1);
  };

  const prevSlide = () => {
    activeImage === 0
      ? setActiveImage(salonImages.length - 1)
      : setActiveImage(activeImage - 1);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      nextSlide();
    }, 5000);
    return () => {
      clearTimeout(timer);
    };
  }, [activeImage]);

  return (
    <div className="w-full md:w-[90%] m-auto">
      <div className="w-full flex relative group rounded-xl overflow-hidden border border-orange-400/40">
        <FaChevronLeft
          onClick={prevSlide}
          size={50}
          className="absolute top-[45%] left-1 xs:left-6 cursor-pointer select-none z-[2] p-3 rounded-full transition-all duration-700 ease-in-out group-hover:shadow-xl group-hover:backdrop-blur-md group-hover:bg-orange-400/20"
        />
        {salonImages.map((img, id) => (
          <div
            key={id}
            className={`${
              id === activeImage
                ? "relative opacity-100 w-full h-72 xs:h-[350px] md:h-[400px] xl:h-[550px] object-cover transition-all duration-1000 ease-in-out"
                : "opacity-0"
            }`}
          >
            <Image
              src={img.img}
              alt="salon image"
              fill
              className="object-fill"
            />
          </div>
        ))}
        <FaChevronRight
          onClick={nextSlide}
          size={50}
          className="absolute top-[45%] right-1 xs:right-6 cursor-pointer select-none z-[2] p-3 transition-all duration-700 ease-in-out group-hover:shadow-xl group-hover:backdrop-blur-md group-hover:bg-orange-400/20 rounded-full"
        />
      </div>
    </div>
  );
};

export default SalonSlider;
