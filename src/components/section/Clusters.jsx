import { useEffect, useState, useRef } from "react";
import {
  Laptop,
  FileText,
  Rocket,
  Briefcase,
  Crown,
  Users,
  HeartPulse,
  Palette,
  Globe,
  Link as LinkIcon,
  Target,
  Sparkles,
  TrendingUp,
  Lightbulb,
} from "lucide-react";

// 🔥 COUNT ONLY WHEN VISIBLE
const useCountUp = (end, start, duration = 1500) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;

    let startTimestamp = null;

    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;

      const progress = Math.min((timestamp - startTimestamp) / duration, 1);

      setCount(Math.floor(progress * end));

      if (progress < 1) {
        requestAnimationFrame(step);
      }
    };

    requestAnimationFrame(step);
  }, [end, duration, start]);

  return count;
};

const clusters = [
  { title: "Technical & Innovation", icon: <Laptop />, desc: "Projects, hackathons & emerging tech." },
  { title: "Research & Publication", icon: <FileText />, desc: "Research writing & publications." },
  { title: "Entrepreneurship & Startup", icon: <Rocket />, desc: "Startup mindset & innovation." },
  { title: "Professional Development", icon: <Briefcase />, desc: "Career & industry readiness." },
  { title: "Leadership & Empowerment", icon: <Crown />, desc: "Confidence & leadership skills." },
  { title: "Social Outreach", icon: <Users />, desc: "Community & social impact." },
  { title: "Health & Wellness", icon: <HeartPulse />, desc: "Mental & physical well-being." },
  { title: "Cultural & Creative", icon: <Palette />, desc: "Creativity & expression." },
  { title: "Global Exposure", icon: <Globe />, desc: "International opportunities." },
  { title: "Alumni & Network", icon: <LinkIcon />, desc: "Mentorship & connections." },
];

const Clusters = () => {
  const sectionRef = useRef(null);
  const [startCount, setStartCount] = useState(false);

  // 🔥 INTERSECTION OBSERVER
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStartCount(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const participants = useCountUp(1153, startCount);
  const clusterCount = useCountUp(10, startCount);

  return (
    <section
      id="clusters"
      ref={sectionRef}
      className="bg-gradient-to-br from-purple-50 via-white to-pink-50 py-24 px-6 font-[Poppins]"
    >

      {/* TITLE */}
      <div  className="text-center mb-12">
        <h1 className="text-4xl md:text-6xl font-extrabold bg-gradient-to-r from-purple-900 via-pink-600 to-purple-800 text-transparent bg-clip-text">
          Cluster Framework
        </h1>

        <p className="mt-4 text-gray-600 text-lg md:text-xl max-w-2xl mx-auto">
          A structured ecosystem designed to nurture women into confident leaders,
          skilled professionals, and impactful contributors to society.
        </p>
      </div>

      {/* FLOW TEXT */}
      <div className="text-center mb-16">
        <p className="text-purple-700 font-medium text-sm tracking-wide">
          Skill → Innovation → Leadership → Impact
        </p>
      </div>

      {/* GRID */}
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-7xl mx-auto mb-20">
        {clusters.map((cluster, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-2xl shadow-md hover:shadow-2xl transition duration-300 group hover:-translate-y-1"
          >
            <div className="w-12 h-12 flex items-center justify-center rounded-full bg-gradient-to-r from-purple-600 to-pink-500 text-white mb-4 group-hover:scale-110 transition">
              {cluster.icon}
            </div>

            <h3 className="font-bold text-lg mb-2 text-gray-800">
              {cluster.title}
            </h3>

            <p className="text-sm text-gray-600 leading-relaxed">
              {cluster.desc}
            </p>
          </div>
        ))}
      </div>

      {/* STATS */}
      <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center mb-20">

        <div className="bg-white p-6 rounded-xl shadow">
          <h2 className="text-3xl font-bold text-purple-700">
            {participants.toLocaleString()}+
          </h2>
          <p className="text-gray-600 text-sm">Participants</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <h2 className="text-3xl font-bold text-pink-600">
            {clusterCount}
          </h2>
          <p className="text-gray-600 text-sm">Clusters</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <h2 className="text-3xl font-bold text-purple-700">100%</h2>
          <p className="text-gray-600 text-sm">Growth Focus</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <h2 className="text-3xl font-bold text-pink-600">∞</h2>
          <p className="text-gray-600 text-sm">Opportunities</p>
        </div>
      </div>

      {/* OBJECTIVES */}
      <div className="max-w-5xl mx-auto mb-16">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-purple-800 flex items-center gap-2">
          <Target /> Objectives
        </h2>

        <ul className="space-y-3 text-gray-700">
          <li className="flex items-start gap-2"><Sparkles size={16}/> Structured academic & professional growth</li>
          <li className="flex items-start gap-2"><Sparkles size={16}/> Encourage leadership & initiative</li>
          <li className="flex items-start gap-2"><Sparkles size={16}/> Promote innovation & interdisciplinary learning</li>
          <li className="flex items-start gap-2"><Sparkles size={16}/> Align activities with institutional goals</li>
          <li className="flex items-start gap-2"><Sparkles size={16}/> Build confidence & competence</li>
        </ul>
      </div>

      {/* OUTCOMES */}
      <div className="max-w-5xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-pink-600 flex items-center gap-2">
          <TrendingUp /> Outcomes
        </h2>

        <ul className="space-y-3 text-gray-700">
          <li className="flex items-start gap-2"><Lightbulb size={16}/> Improved leadership & confidence</li>
          <li className="flex items-start gap-2"><Lightbulb size={16}/> Higher student participation</li>
          <li className="flex items-start gap-2"><Lightbulb size={16}/> Exposure to research & industry</li>
          <li className="flex items-start gap-2"><Lightbulb size={16}/> Strong social responsibility mindset</li>
          <li className="flex items-start gap-2"><Lightbulb size={16}/> Continuous learning environment</li>
        </ul>
      </div>

    </section>
  );
};

export default Clusters;