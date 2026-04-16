import { Link } from "react-router-dom";
import she2 from "../../assets/she3.png";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Hero = () => {

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,      // 🔥 animate multiple times
      mirror: true,     // 🔥 animate on scroll UP also
      easing: "ease-in-out",
      offset: 80,
    });

    AOS.refresh(); // 🔥 important
  }, []);

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-purple-50 via-white to-pink-50 overflow-hidden">

      <div className="max-w-7xl mx-auto px-6 pt-32 grid md:grid-cols-2 items-center gap-12">

        {/* 🔥 LEFT CONTENT */}
        <div className="z-10 text-center md:text-left">

          {/* 🔥 HEADING */}
          <h1
            data-aos="fade-up"
            className="text-5xl sm:text-6xl md:text-7xl font-extrabold leading-tight tracking-tight"
          >
            <span className="bg-gradient-to-r from-purple-800 via-pink-600 to-purple-700 text-transparent bg-clip-text">
              SheLeads
            </span>
            <br />
            <span className="text-gray-900 tracking-wider">@TRP</span>
          </h1>

          {/* 🔥 QUOTE */}
          <div
            data-aos="fade-right"
            data-aos-delay="200"
            className="mt-10 max-w-xl mx-auto md:mx-0 relative"
          >

            {/* LEFT QUOTE */}
            <span className="absolute -top-8 left-0 text-7xl text-pink-300 font-serif">
              “
            </span>

            {/* TEXT */}
            <p className="text-xl md:text-2xl font-semibold text-purple-900 leading-relaxed px-8 text-center md:text-left">
              Empowering women through leadership, innovation, and shaping a future of excellence.
            </p>

            {/* RIGHT QUOTE */}
            <span className="absolute -bottom-8 right-0 text-7xl text-pink-300 font-serif">
              ”
            </span>

          </div>

          {/* 🔥 BUTTON */}
          <div
            data-aos="zoom-in"
            data-aos-delay="400"
            className="mt-10 flex justify-center md:justify-start"
          >
            <button
              onClick={() => {
                const section = document.getElementById("contact");
                if (section) {
                  section.scrollIntoView({ behavior: "smooth" });
                }
              }}
              className="px-8 py-3 rounded-full font-semibold text-white bg-gradient-to-r from-purple-700 to-pink-500 shadow-lg hover:shadow-pink-300/40 hover:scale-105 transition duration-300"
            >
              Join the Community
            </button>
          </div>

        </div>

        {/* 🔥 RIGHT IMAGE */}
        <div
          data-aos="fade-left"
          className="relative flex justify-center md:justify-end"
        >

          <div className="relative">

            <img
              src={she2}
              alt="She Leads"
              className="
                w-[85%] sm:w-[75%] md:w-[100%]
                max-h-[420px] md:max-h-[650px]
                object-contain
                drop-shadow-[0_30px_80px_rgba(236,72,153,0.5)]
              "
            />

            {/* 🌟 SHINE EFFECT */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
              <div
                className="
                  absolute top-0 left-[-150%] h-full w-[25%]
                  bg-gradient-to-r from-transparent via-white/60 to-transparent
                  skew-x-[-20deg]
                  animate-[shine_3s_infinite]
                "
              />
            </div>

          </div>

        </div>

      </div>

    </section>
  );
};

export default Hero;