"use client";

import React, { useState } from "react";
import GalleryList from "./GalleryList";
import Modal from "./Modal";

export default function GalleryPage() {
  const [selectedImg, setSelectedImg] = useState(null);

  return (
    <div className="w-screen flex">
      <div className="max-w-6xl m-auto flex rounded-xl border border-orange-400/30 px-4 py-10">
        <GalleryList setSelectedImg={setSelectedImg} />
      </div>
      <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} />
    </div>
  );
}
