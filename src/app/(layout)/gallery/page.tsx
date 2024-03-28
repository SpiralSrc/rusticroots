import Gallery from "@/components/gallery/Gallery";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Gallery",
};

export default function page() {
  return (
    <div className="w-[90%] m-auto flex flex-col justify-center items-center pb-20 mb-20 backdrop-blur-sm rounded-xl border border-orange-400/30">
      <h1 className="w-[70%] text-center text-5xl xl:text-6xl font-extrabold font-sacramento pt-10 pb-4 mb-10 ">
        Gallery
      </h1>

      <div className="w-[85%] m-auto pb-10 mb-20 border-b border-orange-400/30">
        <div className="w-[90%] mx-auto flex flex-col gap-4">
          <p className="italic text-center">
            We are very proud to showcase the images of our satisfied clients...
          </p>
        </div>
      </div>
      <Gallery />
    </div>
  );
}
