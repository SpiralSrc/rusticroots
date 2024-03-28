import GalleryPage from "@/components/gallery/GalleryPage";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Gallery",
};

export default function page() {
  return (
    <div className="w-screen pt-24">
      <div className="max-w-7xl xs:m-auto flex flex-col justify-center items-center backdrop-blur-sm mx-2">
        <h1 className="w-[70%] text-center text-5xl xl:text-6xl font-extrabold font-sacramento pt-10 pb-4 mb-10 ">
          Gallery
        </h1>

        <div className="w-[85%] m-auto pb-10 mb-10 border-b border-orange-400/30">
          <p className="italic text-center">
            We are very proud to showcase the images of our satisfied clients...
          </p>
        </div>
      </div>
      <GalleryPage />
    </div>
  );
}
