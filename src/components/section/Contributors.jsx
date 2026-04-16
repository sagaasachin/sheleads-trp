import img1 from "../../assets/images/sa1.png";
import img2 from "../../assets/images/sa2.jpg";
import img3 from "../../assets/images/ssa3.png";
import img4 from "../../assets/images/sa4.png";
import img5 from "../../assets/images/sa5.png";

import mag from "../../assets/images/mag.jpg";
import Gallery from "./Gallery";

const images = [img1, img2, img3, img4, img5];

const Contributors = () => {

  const openMagazine = () => {
    window.open(
      "https://drive.google.com/file/d/1r0Si9AnxfEH1KQPvyOy2huoNW_2URc_-/view",
      "_blank"
    );
  };

  return (
    <>
      {/* ================= CONTRIBUTORS ================= */}
      <section className="py-20 bg-gradient-to-r from-[#f5f3ff] via-white to-[#fdf2f8]">

        {/* Heading */}
        <h1 className="text-4xl md:text-5xl font-heading font-extrabold text-center tracking-widest uppercase mb-12 bg-gradient-to-r from-purple-800 to-pink-600 text-transparent bg-clip-text">
          Outstanding Contributors
        </h1>

        {/* 🧱 BLACK BOARD */}
        <div className="relative max-w-6xl mx-auto bg-gray-900 rounded-xl p-12 shadow-2xl border border-gray-800">

          {/* 🧵 Connection Lines */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-30">
            <line x1="20%" y1="20%" x2="50%" y2="40%" stroke="#a78bfa" strokeWidth="1.5" />
            <line x1="50%" y1="40%" x2="80%" y2="20%" stroke="#a78bfa" strokeWidth="1.5" />
          </svg>

          {/* Grid */}
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-12 relative z-10">
            {images.map((img, index) => (
              <div
                key={index}
                className={`relative bg-white p-2 shadow-xl rounded-md transform 
                ${index % 2 === 0 ? "rotate-[-4deg]" : "rotate-[4deg]"} 
                hover:rotate-0 hover:scale-105 transition duration-300`}
              >

                {/* 📌 Pin */}
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-4 h-4 bg-red-500 rounded-full shadow-md border-2 border-white"></div>

                {/* Image */}
                <img
                  src={img}
                  alt="notice"
                  className="w-full h-60 object-cover rounded"
                />

              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ================= PREMIUM MAGAZINE ================= */}
      <section className="py-24 bg-gradient-to-r from-[#fdf2f8] via-white to-[#f5f3ff]">

        {/* Heading */}
        <h1 className="text-4xl md:text-5xl font-heading font-extrabold text-center tracking-widest uppercase mb-16 bg-gradient-to-r from-pink-600 to-purple-800 text-transparent bg-clip-text">
          SheLeads Magazine
        </h1>

        <div className="max-w-5xl mx-auto px-6 flex justify-center">

          <div
            onClick={openMagazine}
            className="relative group cursor-pointer"
          >

            {/* Card */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl transform transition duration-500 group-hover:rotate-1 group-hover:scale-105">

              {/* Glow Border */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-pink-500 via-purple-500 to-pink-500 opacity-20 blur-xl group-hover:opacity-40 transition"></div>

              {/* Image */}
              <img
                src={mag}
                alt="magazine"
                className="relative w-[320px] md:w-[380px] h-[450px] object-cover rounded-2xl"
              />

              {/* Shine Effect */}
              <div className="absolute inset-0 overflow-hidden rounded-2xl">
                <div className="absolute top-0 left-[-120%] h-full w-[30%] bg-gradient-to-r from-transparent via-white/40 to-transparent group-hover:animate-shine"></div>
              </div>

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent rounded-2xl"></div>

              {/* Text */}
              <div className="absolute bottom-6 left-6 right-6">
                <p className="text-white text-sm bg-black/50 backdrop-blur-md px-3 py-2 rounded-lg inline-block">
                  Click to Explore Magazine
                </p>
              </div>

            </div>

          </div>

        </div>
      </section>
    </>
  );
};

export default Contributors;