import React from "react";
import galleryImg from "../../assets/GalleryImg.jpg";

const Gallery = () => {
  return (
    <section className="2xl:container mx-auto px-4 pt-12">
      <h1 className="text-3xl font-bold text-gray-800 text-center">Gallery</h1>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 py-12">
        {[...Array(4)].map((_, idx) => (
          <div
            key={idx}
            className="overflow-hidden rounded-lg shadow-md hover:scale-105 transition-transform duration-300"
          >
            <img
              src={galleryImg}
              alt={`Gallery ${idx + 1}`}
              className="w-full h-64 object-cover"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;
