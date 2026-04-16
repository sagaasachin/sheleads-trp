import { useState } from "react";

// 🔥 MAIN GALLERY IMAGES
import img1 from "../../assets/gallery/aci1.png";
import img2 from "../../assets/gallery/aci2.png";
import img3 from "../../assets/gallery/aci3.png";
import img4 from "../../assets/gallery/aci4.png";
import img5 from "../../assets/gallery/aci5.png";
import img6 from "../../assets/gallery/aci6.png";
import img7 from "../../assets/gallery/aci7.png";
import img8 from "../../assets/gallery/aci8.png";
import img9 from "../../assets/gallery/aci9.png";

// 🔥 OTHER IMAGES
import ac1 from "../../assets/images/ac1.png";
import ac2 from "../../assets/images/ac2.png";
import ac3 from "../../assets/images/ac3.png";

import bs1 from "../../assets/images/bs1.png";
import bs2 from "../../assets/images/bs2.png";
import bs3 from "../../assets/images/bs3.png";
import bs4 from "../../assets/images/bs4.png";
import bs5 from "../../assets/images/bs5.png";
import bs6 from "../../assets/images/bs6.png";
import bs7 from "../../assets/images/bs7.png";
import bs8 from "../../assets/images/bs8.png";

import c1 from "../../assets/images/c1.png";
import c2 from "../../assets/images/c2.png";
import c3 from "../../assets/images/c3.png";

import e1 from "../../assets/images/e1.png";
import e2 from "../../assets/images/e2.png";
import e3 from "../../assets/images/e3.png";
import e4 from "../../assets/images/e4.png";
import e5 from "../../assets/images/e5.png";

import w1 from "../../assets/images/w1.png";
import w2 from "../../assets/images/w2.png";
import w5 from "../../assets/images/w5.jpg";

// 🔥 ALL IMAGES
const allImages = [
  img1, img2, img3, img4, img5, img6, img7, img8, img9,
  ac1, ac2, ac3,
  bs1, bs2, bs3, bs4, bs5, bs6, bs7, bs8,
  c1, c2, c3,
  e1, e2, e3, e4, e5,
  w1, w2, w5
];

// 🔥 SPLIT INTO ROWS
const row1 = allImages.filter((_, i) => i % 2 === 0);
const row2 = allImages.filter((_, i) => i % 2 !== 0);

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <section className="relative py-16 sm:py-20 md:py-24 bg-gray-100 overflow-hidden px-4 sm:px-6">

      {/* TITLE */}
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-center tracking-widest uppercase mb-10 sm:mb-12 bg-gradient-to-r from-purple-800 to-pink-600 text-transparent bg-clip-text">
        Photo Gallery
      </h1>

      {/* 🔥 ROW 1 */}
      <div className="relative overflow-hidden mb-8 sm:mb-10">
        <div className="flex w-max animate-scroll-left">
          {[...row1, ...row1].map((img, index) => (
            <img
              key={index}
              src={img}
              alt="gallery"
              onClick={() => setSelectedImage(img)}
              className="w-64 h-40 sm:w-80 sm:h-52 md:w-96 md:h-60 object-cover rounded-xl sm:rounded-2xl shadow-lg mx-2 sm:mx-4 cursor-pointer hover:scale-105 transition duration-300"
            />
          ))}
        </div>
      </div>

      {/* 🔥 ROW 2 */}
      <div className="relative overflow-hidden">
        <div className="flex w-max animate-scroll-right">
          {[...row2, ...row2].map((img, index) => (
            <img
              key={index}
              src={img}
              alt="gallery"
              onClick={() => setSelectedImage(img)}
              className="w-64 h-40 sm:w-80 sm:h-52 md:w-96 md:h-60 object-cover rounded-xl sm:rounded-2xl shadow-lg mx-2 sm:mx-4 cursor-pointer hover:scale-105 transition duration-300"
            />
          ))}
        </div>
      </div>

      {/* 🔥 MODAL (CENTERED + CONTROLLED SIZE) */}
      {selectedImage && (
        <div className="absolute top-20 left-0 w-full h-[110vh] flex items-center justify-center z-50">

          {/* BACKDROP */}
          <div
            className="absolute inset-0 bg-black/40 backdrop-blur-sm"
            onClick={() => setSelectedImage(null)}
          ></div>

          {/* CENTER BOX */}
          <div className="relative z-10 w-[100%] max-w-[500px] aspect-square bg-white p-4 rounded-2xl shadow-2xl flex items-center justify-center">

            <img
              src={selectedImage}
              alt="preview"
              className="max-w-full max-h-full object-contain rounded-xl"
            />

            {/* CLOSE BUTTON */}
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-3 -right-3 bg-black text-white w-8 h-8 rounded-full flex items-center justify-center text-sm"
            >
              ✖
            </button>

          </div>
        </div>
      )}

    </section>
  );
};

export default Gallery;