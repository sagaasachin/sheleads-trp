import { useState, useEffect } from "react";

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

import AOS from "aos";
import "aos/dist/aos.css";
import Gallery from "./Gallery";

const animations = [
  "fade-up",
  "zoom-in",
  "flip-left",
  "fade-right",
  "zoom-in-up",
];

const categories = [
  { title: "Event Photos", images: [e1, e2, e3, e4, e5], aos: "fade-right" },
  { title: "Workshops", images: [w1, w2], aos: "fade-left" },
  { title: "Celebrations", images: [c1, c2, c3], aos: "zoom-in" },
  { title: "Award Ceremonies", images: [ac1, ac2, ac3], aos: "fade-up" },
  {
    title: "Behind the Scenes",
    images: [bs1, bs2, bs3, bs4, bs5, bs6, bs7, bs8],
    aos: "fade-down",
  },
];

const OverallGallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      mirror: true,
      easing: "ease-in-out",
    });
    AOS.refresh();
  }, []);

  return (
    <>
      <section className="py-24 bg-gradient-to-br from-gray-100 via-white to-purple-100">

        {/* TITLE */}
        <h1
          data-aos="fade-down"
          className="text-4xl md:text-5xl font-extrabold text-center tracking-widest uppercase mb-24 bg-gradient-to-r from-purple-800 via-pink-600 to-purple-700 text-transparent bg-clip-text"
        >
          Overall Gallery
        </h1>

        <div className="max-w-6xl mx-auto px-6 space-y-24">

          {categories.map((category, catIndex) => (
            <div key={catIndex} data-aos={category.aos}>

              {/* CATEGORY TITLE */}
              <h2 className="text-2xl md:text-3xl font-bold text-center mb-10 bg-gradient-to-r from-purple-700 to-pink-500 text-transparent bg-clip-text tracking-wide">
                {category.title}
              </h2>

              {/* GRID */}
              <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10">

                {category.images.map((img, index) => (
                  <div
                    key={index}
                    data-aos={animations[index % animations.length]}
                    data-aos-delay={index * 100}
                    onClick={() => setSelectedImage(img)}
                    className="group cursor-pointer relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 bg-white/80 backdrop-blur-lg p-3"
                  >

                    <img
                      src={img}
                      alt="gallery"
                      className="w-full h-[280px] md:h-[320px] object-contain rounded-lg transition duration-500 group-hover:scale-105"
                    />

                    <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition duration-500 rounded-2xl"></div>

                    <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition duration-500">
                      <p className="text-sm font-semibold tracking-wide">
                        {category.title}
                      </p>
                    </div>

                  </div>
                ))}

              </div>

            </div>
          ))}

        </div>

        {/* 🔥 MODAL (97vh FIXED) */}
        {selectedImage && (
          <div className="fixed top-0 left-0 w-full h-[97vh] flex items-center justify-center z-[999]">

            {/* BACKDROP */}
            <div
              className="absolute inset-0 bg-black/40 backdrop-blur-sm"
              onClick={() => setSelectedImage(null)}
            ></div>

            {/* CARD */}
            <div className="relative z-10 bg-white p-4 rounded-2xl shadow-2xl max-h-[90vh] flex items-center justify-center">

              <img
                src={selectedImage}
                alt="preview"
                className="w-[250px] sm:w-[350px] md:w-[450px] h-[250px] sm:h-[350px] md:h-[450px] object-contain rounded-xl"
              />

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

      {/* 🔥 SCROLL GALLERY */}
      <Gallery />
    </>
  );
};

export default OverallGallery;