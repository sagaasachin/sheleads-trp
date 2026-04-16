import team1 from '../../assets/images/team2.jpg';
import team2 from '../../assets/images/team2.jpg';
import team3 from '../../assets/images/team3.jpg';
import team4 from '../../assets/images/team4.jpg';
import team5 from '../../assets/staff/s4.jpg';
import team6 from '../../assets/images/team5.jpg';

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const teamData = [
  {
    name: "Mrs. T. Suganya",
    role: "Assistant Professor",
    dept: "SheLeads@TRP Chief-Coordinator",
    image: team2,
  },
  {
    name: "Dr. P. Shymala Anto Mary",
    role: "Associate Professor",
    dept: "SheLeads@TRP Member - S&H",
    image: team3,
  },
  {
    name: "Mrs. K. Priyadharshini",
    role: "Assistant Professor",
    dept: "SheLeads@TRP Member - ECE",
    image: team4,
  },
  {
    name: "Mrs. S. Saraswathi",
    role: "Assistant Professor",
    dept: "SheLeads@TRP Member - AI&DS",
    image: team5,
  },
  {
    name: "Dr. S. Pitchaikani",
    role: "Assistant Professor",
    dept: "SheLeads@TRP Member - CIVIL",
    image: team6,
  },
];

const Team = () => {

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,        // 🔥 animate every time
      mirror: true,       // 🔥 animate on scroll up & down
      offset: 100,
      delay: 50,
      easing: "ease-in-out",
    });

    AOS.refresh(); // 🔥 ensure re-trigger
  }, []);

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-purple-50">

      {/* 🔥 GUIDING HANDS MESSAGE */}
      <div 
        className="max-w-4xl mx-auto text-center mb-24 px-6"
        data-aos="fade-up"
      >
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-wider uppercase mb-6 bg-gradient-to-r from-purple-800 via-pink-600 to-purple-700 text-transparent bg-clip-text">
          Guiding Hands
        </h1>

        <p className="text-lg md:text-xl text-gray-600 italic leading-relaxed max-w-2xl mx-auto">
          “Behind every successful initiative is a team of mentors who inspire,
          guide, and empower the next generation to lead with confidence.”
        </p>

        <div className="mt-8 w-24 h-1 bg-gradient-to-r from-pink-500 to-purple-600 mx-auto rounded-full"></div>
      </div>

      {/* 🔥 TEAM GRID */}
      <div className="max-w-6xl mx-auto px-6 grid gap-12 sm:grid-cols-2 md:grid-cols-3">

        {teamData.map((member, index) => (
          <div
            key={index}
            data-aos="zoom-in-up"                 // 🔥 smoother animation
            data-aos-delay={index * 150}         // 🔥 stagger effect
            className="group relative rounded-3xl overflow-hidden bg-white/80 backdrop-blur-lg shadow-lg hover:shadow-2xl hover:shadow-pink-200/40 transition-all duration-500 hover:-translate-y-2 hover:scale-[1.03]"
          >

            {/* Glow Effect */}
            <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-pink-400/20 via-purple-400/20 to-indigo-400/20 blur-2xl"></div>

            {/* TOP BAR */}
            <div className="h-36 bg-gradient-to-br from-pink-500 via-purple-600 to-indigo-700"></div>

            {/* IMAGE */}
            <div className="absolute top-12 left-1/2 -translate-x-1/2">
              <div className="bg-white p-1 rounded-full shadow-xl group-hover:shadow-pink-400/40 transition duration-500">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-36 h-36 object-cover rounded-full border-4 border-pink-500 group-hover:scale-110 transition duration-500"
                />
              </div>
            </div>

            {/* CONTENT */}
            <div className="pt-28 pb-8 px-6 text-center relative z-10">

              <h3 className="text-lg font-semibold text-gray-800 group-hover:text-pink-600 transition duration-300">
                {member.name}
              </h3>

              {/* Divider */}
              <div className="w-10 h-[2px] bg-pink-400 mx-auto my-2 rounded"></div>

              <p className="text-gray-500 text-sm tracking-wide mt-2">
                {member.role}
              </p>

              <p className="text-pink-500 text-sm font-semibold mt-1">
                {member.dept}
              </p>

            </div>

          </div>
        ))}

      </div>

    </section>
  );
};

export default Team;