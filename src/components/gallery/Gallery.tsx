import { salonGallery } from "@/lib/imgData";
import Image from "next/image";
import React from "react";

const Gallery = () => {
  return (
    <div className="columns-1 md:columns-2 xl:columns-3 gap-4">
      {salonGallery.map((item, id) => (
        <div
          key={id}
          className="rounded-xl overflow-hidden mb-5 transition-all ease-in-out duration-700 hover:scale-105 hover:shadow-xl mx-2 xs:mx-0"
        >
          <Image
            width={310}
            height={380}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            src={item.image}
            alt="client image"
            className="object-cover rounded-xl"
          />
        </div>
      ))}
    </div>
  );
};

export default Gallery;