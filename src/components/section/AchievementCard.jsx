import img1 from "../../assets/images/sa1.png";
import img2 from "../../assets/images/sa2.jpg";
import img3 from "../../assets/images/ssa3.png";
import img4 from "../../assets/images/sa4.png";
import img5 from "../../assets/images/sa5.png";

import leader1 from "../../assets/images/sa2.jpg";
import leader2 from "../../assets/images/sa2.jpg";

import Contributors from "./Contributors";

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import OverallGallery from "./OverallGallery";

const achievements = [
  {
    img: img1,
    title: "Winner",
    desc: "Badminton (Women) at University College of Engineering, Ariyalur",
  },
  {
    img: img2,
    title: "Runner Up",
    desc: "Anna University Zone-14 Chess (W) held at Sri Ramakrishna College of Engineering",
  },
  {
    img: img3,
    title: "Runner Up",
    desc: "Anna University Zone-14 Table Tennis (W) Second Place at SRM TRP Engineering College",
  },
  {
    img: img4,
    title: "Runner Up",
    desc: "National Level won the second place",
  },
  {
    img: img5,
    title: "2nd Runner Up",
    desc: "Anna University Zone 14 Ball Badminton(W) Third Place",
  },
];

const leaders = [
  {
    img: leader1,
    title: "Top Leader",
    name: "V Pooja",
  },
  {
    img: leader2,
    title: "Top Leader",
    name: "V. KrithiKaa Dhevee",
  },
];

const AchievementSection = () => {

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,        // 🔥 repeat animation
      mirror: true,       // 🔥 animate on scroll up & down
      offset: 100,
      delay: 50,
      easing: "ease-in-out",
    });

    AOS.refresh();
  }, []);

  return (
    <>
      <section className="pt-44 py-20 bg-gradient-to-br from-purple-900 via-pink-700 to-rose-500 min-h-screen">
        {/* ================= ACHIEVEMENTS ================= */}
        <h1
          data-aos="fade-up"
          className="text-4xl md:text-5xl font-bold text-center text-white mb-16 tracking-wider uppercase"
        >
          Student Achievers
        </h1>

        <div className="grid md:grid-cols-3 gap-12 px-6 max-w-6xl mx-auto mb-20">
          {achievements.map((item, index) => (
            <div
              key={index}
              data-aos="zoom-in-up"
              data-aos-delay={index * 150}
              className="flex justify-center"
            >
              
              <div className="relative bg-white p-4 rounded-xl shadow-2xl w-72 transform rotate-[-3deg] hover:rotate-0 hover:scale-105 transition duration-500">

                <img
                  src={item.img}
                  alt="achievement"
                  className="w-full h-72 object-cover rounded-lg"
                />

                <div className="absolute -left-4 top-6 bg-yellow-400 text-black px-3 py-1 text-xs font-bold rotate-[-10deg] shadow-md uppercase tracking-wide">
                  {item.title}
                </div>

                <p className="mt-4 text-sm text-gray-700">
                  {item.desc}
                </p>

              </div>
            </div>
          ))}
        </div>

        {/* ================= BEST LEADERS ================= */}
        <h1
          data-aos="fade-up"
          className="text-4xl md:text-5xl font-bold text-center text-white mb-16 tracking-wider uppercase"
        >
          Best Leaders
        </h1>

        <div className="grid md:grid-cols-2 gap-12 px-6 max-w-5xl mx-auto">
          {leaders.map((leader, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 200}
              className="relative rounded-xl overflow-hidden shadow-2xl group"
            >

              <img
                src={leader.img}
                alt={leader.name}
                className="w-full h-80 object-cover group-hover:scale-110 transition duration-500"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>

              <div className="absolute top-4 left-4 bg-pink-500 text-white px-3 py-1 text-xs font-bold rounded">
                {leader.title}
              </div>

              <div className="absolute bottom-4 left-4">
                <h2 className="text-lg font-semibold text-white">
                  {leader.name}
                </h2>
              </div>

            </div>
          ))}
        </div>

      </section>

      {/* 🔥 Contributors also animated */}
      <div data-aos="fade-up">
        <Contributors />
      </div>
      <div data-aos="fade-up">
        <OverallGallery/>
      </div>

    </>
  );
};

export default AchievementSection;