"use client";

import React, { useState } from "react";
import GalleryList from "./GalleryList";
import Modal from "./Modal";

export default function GalleryPage() {
  const [selectedImg, setSelectedImg] = useState(null);

  return (
    <div className="w-screen flex pb-10">
      <div className="max-w-6xl mx-2 xxs:m-auto flex rounded-xl border border-orange-400/30 px-2 py-10 mb-20">
        <GalleryList setSelectedImg={setSelectedImg} />
      </div>
      <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} />
    </div>
  );
}
