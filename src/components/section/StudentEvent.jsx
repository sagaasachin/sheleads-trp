import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import {
  Lightbulb,
  Mic,
  Brain,
  Palette,
  Feather,
  Scale,
  Utensils,
} from "lucide-react";

// 🔥 IMPORT IMAGES
import cp1 from "../../assets/events/cp1.jpg";
import cp2 from "../../assets/events/cp2.jpg";

import eh1 from "../../assets/events/eh1.jpg";
import eh2 from "../../assets/events/eh2.jpg";
import tech1 from "../../assets/events/tech1.jpg"
import tech2 from "../../assets/events/tech2.jpg"
import tech3 from "../../assets/events/tech3.jpg"

import nf1 from "../../assets/events/nf1.jpg";
import nf2 from "../../assets/events/nf2.jpg";

import it1 from "../../assets/events/it1.jpg";
import it2 from "../../assets/events/it2.jpg";

import kef1 from "../../assets/events/kef1.jpg";
import kef2 from "../../assets/events/kef2.jpg";

import ld1 from "../../assets/events/ld1.jpg";
import ld2 from "../../assets/events/ld2.jpg";
import Clusters from "./Clusters";

const StudentEvent = () => {
  useEffect(() => {
    AOS.init({
      duration: 900,
      once: false,
      mirror: true,
    });
  }, []);

  const studentEvents = [
    {
      title: "TechTalks – Ideas & Startups",
      icon: <Lightbulb />,
      introduction:
        "The TechTalks (Ideas/Startups) session was conducted to encourage students to explore recent developments in technology and share innovative ideas that could solve real-world problems. Participants delivered well-prepared presentations on emerging trends, demonstrating strong research ability, analytical thinking, and creativity. The session helped students enhance their communication and presentation skills while also building confidence in expressing technical concepts clearly. Overall, the event inspired students to think beyond academics and develop an entrepreneurial mindset by connecting technology with practical applications. ",
      images: [tech1, tech2, tech3],
    },

    {
      title: "Inspire Talk",
      icon: <Mic />,
      introduction:
        "The Inspire Talk session was designed to motivate students through leadership-based discussions and confidence-building activities. The highlight of the event was the “I Am” speaking activity, where participants spoke on a given topic within one minute, improving their quick thinking and spontaneous speaking skills. Students actively participated with enthusiasm, showcasing confidence and originality in their ideas. The session created a positive environment that encouraged self-expression, innovation, and a strong mindset towards leadership. Overall, it was an uplifting event that motivated students to believe in their potential and communicate fearlessly. ",
      images: [it1, it2],
    },

    {
      title: "Knowledge Forum",
      icon: <Brain />,
      introduction:
        "The Knowledge Exchange Forum served as an interactive platform where students shared their thoughts, opinions, and experiences on topics related to education, technology, and personal development. The session encouraged discussion-based learning and promoted teamwork, collaboration, and active participation. Students gained confidence in expressing their viewpoints while improving their communication clarity and reasoning skills. It also helped participants broaden their understanding by learning from diverse perspectives shared by others. Overall, the forum was intellectually engaging and supported the conclave theme by strengthening awareness, critical thinking, and knowledge-sharing culture. ",
      images: [kef1, kef2],
    },

    {
      title: "Logo Design Competition",
      icon: <Palette />,
      introduction:
        "The Logo Design Contest was conducted to encourage creativity, innovation, and design-thinking skills among students. Participants designed unique and meaningful logos that reflected the theme of the conclave, showcasing their ability to convert ideas into visual representation. The contest provided a platform for students to express their imagination through symbols, colors, and modern design elements while maintaining relevance to women empowerment and leadership. It also helped participants improve their digital creativity, artistic skills, and attention to detail. Students demonstrated strong originality and visual communication, and the contest motivated them to think critically while designing logos that were both attractive and impactful. Overall, the event successfully highlighted students’ creative potential and enhanced their confidence in presenting their design work.",
      images: [ld1, ld2],
    },

    {
      title: "Henna Art",
      icon: <Feather />,
      introduction:
        "The Elegance in Henna competition was a vibrant and culturally enriching event that showcased the artistic creativity and dedication of the participants through beautiful mehendi designs. Students demonstrated excellent detailing, neatness, and precision while creating intricate patterns that reflected both traditional and modern styles. The event encouraged patience, focus, and creativity, as participants worked within a limited time while maintaining high-quality design work. The henna designs displayed strong symmetry, clean finishing, and unique artistic ideas, making the competition visually appealing and enjoyable for everyone. Overall, the event successfully highlighted cultural elegance and provided students with a platform to express their talent confidently while enhancing their time management and artistic skills. ",
      images: [eh1, eh2],
    },

    {
      title: "Clash of Perspectives",
      icon: <Scale />,
      introduction:
        "The Clash of Perspective debate competition was an intellectually engaging event that encouraged students to express their views confidently on the topic “Who faces more emotional pressure in society: Men or Women?” Participants presented strong and logical arguments, showcasing their ability to think critically and communicate effectively. The rebuttal rounds added excitement to the session, as students demonstrated quick thinking, presence of mind, and the skill to defend their viewpoints with clarity. The event also highlighted teamwork, coordination, and balanced participation among team members. Through this discussion-based competition, students gained deeper awareness of social realities and learned to respect different perspectives. Overall, the event was highly enriching and successfully improved public speaking, reasoning ability, and confidence in expressing opinions. ",
      images: [cp1, cp2],
    },

    {
      title: "Nutri-No Flame",
      icon: <Utensils />,
      introduction:
        "The Nutri-No Flame event was an engaging and creative activity where participants prepared healthy and nutritious dishes without using fire. This unique competition promoted awareness about balanced food habits while encouraging students to explore innovative ways of making nutritious meals. Participants showcased impressive creativity through their dish selection, ingredient combinations, and attractive presentation. The event also enhanced skills such as plating, time management, and teamwork, as students worked efficiently within the given time. It created a positive learning environment where students understood the importance of healthy lifestyle choices along with confidence and collaboration. Overall, the event was both informative and enjoyable, highlighting the participants’ creativity, coordination, and awareness of nutrition. ",
      images: [nf1, nf2],
    },
  ];

  return (
  <section className="bg-gradient-to-br from-purple-50 via-white to-pink-50 py-16 sm:py-20 md:py-24 px-4 sm:px-6 font-[Poppins]">

    {/* TITLE */}
    <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold text-center mb-14 sm:mb-16 md:mb-20 bg-gradient-to-r from-purple-900 via-pink-600 to-purple-800 text-transparent bg-clip-text">
      Student Events
    </h1>

    {/* TIMELINE */}
    <div className="max-w-5xl mx-auto relative">

      {/* LINE */}
      <div className="absolute left-4 sm:left-5 top-0 w-[2px] sm:w-[3px] h-full bg-gray-200"></div>

      {studentEvents.map((event, index) => (
        <div
          key={index}
          data-aos="fade-up"
          className="relative pl-12 sm:pl-14 md:pl-16 mb-12 sm:mb-14 md:mb-16"
        >

          {/* ICON */}
          <div className="absolute left-0 top-1 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-gradient-to-r from-purple-600 to-pink-500 flex items-center justify-center text-white shadow-lg">
            {event.icon}
          </div>

          {/* CARD */}
          <div className="bg-white rounded-2xl shadow-lg sm:shadow-xl p-4 sm:p-5 md:p-6 hover:shadow-2xl transition duration-300">

            {/* TITLE */}
            <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-2 sm:mb-3 text-gray-800 leading-snug">
              {event.title}
            </h2>

            {/* INTRO */}
            <p className="text-gray-600 mb-3 sm:mb-4 leading-relaxed text-sm sm:text-base md:text-lg">
              {event.introduction}
            </p>

            {/* IMAGES */}
            {event.images && (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4">
                {event.images.map((img, i) => (
                  <img
                    key={i}
                    src={img}
                    alt="event"
                    className="rounded-xl object-cover h-44 sm:h-40 md:h-44 lg:h-48 w-full hover:scale-105 transition duration-300"
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  </section>
);

};

export default StudentEvent;