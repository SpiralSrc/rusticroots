import React from "react";
import Image from "next/image";
import { GrClose } from "react-icons/gr";

const Modal = ({ selectedImg, setSelectedImg }: any) => {
  if (!selectedImg) {
    return <></>;
  }
  return (
    <>
      {selectedImg && (
        <div
          onClick={() => setSelectedImg(null)}
          className="fixed w-screen h-screen top-0 left-0 bg-black/80 z-50 flex justify-center items-center"
        >
          <GrClose
            size={50}
            className="absolute top-4 right-6 cursor-pointer select-none z-[2] p-3 rounded-full transition-all duration-700 ease-in-out hover:shadow-lg hover:backdrop-blur-md hover:bg-orange-400/20"
          />
          <div
            onClick={(e) => e.stopPropagation()}
            className="top-[45%] left-[45%] flex justify-center self-center"
          >
            <div className="w-[280px] h-[340px] xxs:w-[320px] xxs:h-[400px] lg:w-[400px] lg:h-[500px] relative">
              <Image
                src={selectedImg.image}
                alt="image"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
