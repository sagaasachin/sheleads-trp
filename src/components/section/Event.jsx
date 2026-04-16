import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import { Lightbulb, Calendar } from "lucide-react";
import ev1 from "../../assets/events/ev1.png";
import ev2 from "../../assets/events/ev2.png";
import ev3 from "../../assets/events/ev3.jpg";
import ev4 from "../../assets/events/ev4.jpg";
import ev5 from "../../assets/events/ev5.jpg";
import ev6 from "../../assets/events/ev6.jpg";
import ev7 from "../../assets/events/start.jpg";
import StudentEvent from "./StudentEvent";

const Event = () => {
    useEffect(() => {
        AOS.init({
            duration: 900,
            once: false,
            mirror: true,
        });
    }, []);

    const eventsData = [
        {
            year: "2024",
            color: "from-purple-600 to-pink-500",
            icon: <Lightbulb size={18} />,
            title:
                "Introducing Pathways for Women Students and Faculty to engage in Professional Activities",
            introduction:
                "Empowerment Cell (WEC) of SRM TRP Engineering College organized an enlightening session to guide women students and faculty towards academic and professional growth.",
            image: ev1,
            resourcePerson: {
                name: "Dr. G. Vairavel",
                role:
                    "Dean Academics and Educational Initiatives, SRM Group of Institutions",
            },
            highlights: [
                "Leadership and professional exposure",
                "Encouraged active participation",
                "Focused on confidence development",
            ],
        },
        {
            year: "2025",
            color: "from-blue-500 to-cyan-500",
            icon: <Calendar size={18} />,
            title: "E-Portfolio Development Session",
            introduction:
                "An expert session on E-Portfolio Development was conducted on October 30, 2025...",
            image: ev2,
            resourcePerson: {
                name: "Dr. G. Vairavel",
                role:
                    "Dean Academics and Educational Initiatives, SRM Group of Institutions, Chennai – Ramapuram & Trichy",
            },
            highlights: [
                "Explained importance of e-portfolio as a personal branding tool",
                "Guided students to showcase skills and achievements effectively",
                "Provided structure for industry-ready portfolios",
                "Focused on career readiness and digital presentation",
            ],
            portfolios: [
                { name: "Sivaranjani S", link: "https://sites.google.com/view/sivaranjani-s/home" },
                { name: "Faizun Nisha", link: "https://sites.google.com/trp.srmtrichy.edu.in/faizunnisha/home" },
                { name: "Margret Stenila", link: "https://sites.google.com/trp.srmtrichy.edu.in/margret-stenila/home" },
                { name: "Nikita", link: "https://sites.google.com/view/nikitha-portfolio?usp=sharing" },
            ],
        },
        {
            year: "2025",
            color: "from-green-500 to-emerald-600",
            icon: <Lightbulb size={18} />,

            title: "International Leadership Forum on Women Creating a Sustainable Future",

            introduction:
                "The International Leadership Forum on Women: Creating a Sustainable Future was organised by the Office of International Affairs and the Women Empowerment Cell of SRM TRP Engineering College, in association with the Taipei Economic and Cultural Center, Chennai. The forum highlighted the growing importance of women as leaders and decision-makers and emphasized that empowering women is key to building resilient societies, inclusive economies, and future-ready communities.",

            image: ev3, // 🔁 add your image import

            resourcePerson: {
                name: "Mr. Stephen S.C. Hsu",
                role:
                    "Chief Guest along with Ms. Jayalatha Martin, Dr. Usha Nandini Maniram, and Dr. Nithya Selvakumar",
            },

            highlights: [
                "Focused on women leadership and sustainable development",
                "Emphasized international collaboration and gender equality",
                "Speakers shared real-life leadership journeys and experiences",
                "Encouraged students to build confidence and embrace challenges",
                "Highlighted the importance of women in creating a sustainable future",
            ],
        }, {
            year: "2026",
            color: "from-pink-500 to-purple-600",
            icon: <Lightbulb size={18} />,

            title: "She Builds, She Leads: Women in Tech",

            introduction:
                "The Women Empowerment Cell of SRM TRP Engineering College, in association with the Alumni Cell and SheLeads@TRP, organized a special talk titled “She Builds, She Leads: Women in Tech” on 23rd February 2026. The session aimed to motivate students, especially young women, to explore opportunities in the technology industry and understand the importance of leadership and skill development for a successful career.",

            image: ev4, // 🔁 add your image import

            resourcePerson: {
                name: "Ms. P. Harivarsha",
                role:
                    "SRM TRP Alumna | Anna University Rank Holder | SAP CPI Developer at Accenture",
            },

            highlights: [
                "Shared inspiring journey from student to software professional at Accenture",
                "Emphasized importance of determination and continuous learning",
                "Introduced SAP CPI and enterprise-level integration concepts",
                "Explained real-time corporate work culture and teamwork",
                "Interactive Q&A on placements, internships, certifications, and IT skills",
            ],
        },
        {
            year: "2026",
            color: "from-yellow-500 to-pink-500",
            icon: <Lightbulb size={18} />,

            title: "WOMEN INNOVATORS CONCLAVE – 2026",

            introduction:
                "The Women Empowerment Cell of SRM TRP Engineering College, in association with SheLeads@TRP, organized the Women Innovators Conclave 2026 on 2nd March 2026 with the theme “Empowered Women | Future-Ready Leaders”. The event aimed to inspire young women to become confident leaders, innovative thinkers, and future entrepreneurs through an engaging platform of learning and interaction.",

            image: ev5, // 🔁 add your image

            resourcePerson: {
                name: "Mrs. D. Manimegalai",
                role:
                    "Head – Campus Life | Psychotherapist & Psychologist, SRM Trichy Campus",
            },

            highlights: [
                "Active participation from UG and PG girl students across all years",
                "Encouraged technical discussions and creative activities",
                "Focused on leadership development and innovation",
                "Promoted entrepreneurial thinking among students",
                "Created a positive environment for confidence and personal growth",
            ],
        },
        {
            year: "2026",
            color: "from-yellow-500 to-pink-500",
            icon: <Lightbulb size={18} />,

            title: "WOMEN INNOVATORS CONCLAVE – 2026",

            introduction:
                "The Women Empowerment Cell of SRM TRP Engineering College, in association with SheLeads@TRP, successfully organized the Women Innovators Conclave 2026 on 2nd March 2026 at the 5th Floor Seminar Hall. With the theme “Empowered Women | Future-Ready Leaders,” the conclave aimed to inspire and empower students to become confident leaders, innovative thinkers, and future entrepreneurs.",

            image: ev6,
            resourcePerson: {
                name: "",
                role:
                    "",
            }, // 🔁 add image

            highlights: [
                "Enthusiastic participation from UG and PG girl students across all years",
                "Provided a platform for creativity and innovation",
                "Focused on leadership development and confidence building",
                "Encouraged entrepreneurial thinking among participants",
                "Promoted knowledge sharing through engaging activities and competitions",
            ],
        },
        {
            year: "2026",
            color: "from-indigo-500 to-purple-600",
            icon: <Lightbulb size={18} />, // 💡 innovation/startup fits perfectly

            title: "Strategic Conclave on Innovation, Entrepreneurship and Start-up Development",

            introduction:
                "SheLeads@TRP organized a Strategic Conclave on Innovation, Entrepreneurship and Start-up Development on 6th March 2026 to motivate students to explore entrepreneurship and innovation. The conclave emphasized the importance of developing an entrepreneurial mindset and transforming creative ideas into practical and impactful ventures, while creating awareness about start-up culture and its role in economic growth and technological progress.",

            image: ev7, // 🔁 add your image

            resourcePerson: {
                name: "Ms. Thendral Rajendran",
                role:
                    "Entrepreneur | Industry Leader | Expert in Innovation, Start-up Development & Leadership Mentoring",
            },

            highlights: [
                "Explained importance of identifying real-world problems for innovation",
                "Encouraged students to think critically and develop scalable ideas",
                "Highlighted that innovation extends beyond technology",
                "Promoted entrepreneurial mindset and start-up awareness",
                "Inspired students to transform ideas into impactful ventures",
            ],
        },
    ];

    return (
        <section 
        className="bg-white py-28 px-6 font-[Poppins]">
            
            {/* TITLE */}
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold text-center mb-20 md:mb-28 bg-gradient-to-r from-purple-900 via-pink-600 to-purple-800 text-transparent bg-clip-text">
                Events
            </h1>

            <div className="relative max-w-7xl mx-auto">

                {/* CENTER LINE (desktop only) */}
                <div className="hidden md:block absolute left-1/2 top-0 w-[4px] h-full bg-gray-200 -translate-x-1/2"></div>

                {eventsData.map((event, index) => {
                    const isLeft = index % 2 === 0;

                    return (
                        <div key={index} className="mb-20 md:mb-32 flex flex-col md:flex-row items-center">

                            {isLeft ? (
                                <>
                                    {/* TEXT */}
                                    <div className="w-full md:w-1/2 md:pr-16 text-left md:text-right" data-aos="fade-right">

                                        <p className="text-base md:text-lg font-semibold text-gray-400 mb-2">
                                            {event.year}
                                        </p>

                                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold mb-4 bg-gradient-to-r from-purple-800 to-pink-600 text-transparent bg-clip-text break-words">
                                            {event.title}
                                        </h2>

                                        {/* INTRO */}
                                        <div className="mb-4">
                                            <h3 className="text-base md:text-lg font-semibold text-gray-800">
                                                Introduction
                                            </h3>
                                            <p className="text-gray-600 text-base md:text-lg leading-relaxed break-words">
                                                {event.introduction || "Content will be updated soon..."}
                                            </p>
                                        </div>

                                        {/* HIGHLIGHTS */}
                                        {event.highlights.length > 0 && (
                                            <div>
                                                <h3 className="text-base md:text-lg font-semibold text-gray-800">
                                                    Highlights
                                                </h3>
                                                <ul className="mt-2 space-y-2 text-gray-700 text-sm md:text-base">
                                                    {event.highlights.map((item, i) => (
                                                        <li key={i}>• {item}</li>
                                                    ))}
                                                </ul>
                                            </div>
                                        )}

                                        {/* PORTFOLIOS */}
                                        {event.portfolios && (
                                            <div className="mt-6">
                                                <h3 className="text-base md:text-lg font-semibold text-gray-800">
                                                    Our Students
                                                </h3>
                                                <ul className="mt-2 space-y-2">
                                                    {event.portfolios.map((p, i) => (
                                                        <li key={i}>
                                                            <a
                                                                href={p.link}
                                                                target="_blank"
                                                                rel="noopener noreferrer"
                                                                className="text-pink-600 font-medium hover:text-purple-700 hover:underline break-words"
                                                            >
                                                                {i + 1}. {p.name}
                                                            </a>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        )}
                                    </div>

                                    {/* NODE */}
                                    <div className={`hidden md:flex w-10 h-10 rounded-full items-center justify-center bg-gradient-to-r ${event.color} text-white shadow-lg z-10`}>
                                        {event.icon}
                                    </div>

                                    {/* IMAGE + RESOURCE */}
                                    <div className="w-full md:w-1/2 md:pl-16 mt-6 md:mt-0 flex flex-col items-center md:block relative" data-aos="fade-left">

                                        <div className="hidden md:block absolute left-0 top-1/2 w-16 h-[2px] bg-gray-300"></div>

                                        <img
                                            src={event.image}
                                            className="w-full max-w-[300px] sm:max-w-[340px] md:max-w-[420px] rounded-xl shadow-lg"
                                        />

                                        {/* RESOURCE */}
                                        {event.resourcePerson.name && (
                                            <div className="mt-4 w-full max-w-[320px] text-center md:text-left break-words">
                                                <h4 className="text-lg md:text-xl font-bold text-pink-600 break-words">
                                                    {event.resourcePerson.name}
                                                </h4>
                                                <p className="text-gray-600 text-sm leading-relaxed break-words">
                                                    {event.resourcePerson.role}
                                                </p>
                                            </div>
                                        )}
                                    </div>
                                </>
                            ) : (
                                <>
                                    {/* IMAGE */}
                                    <div className="w-full md:w-1/2 md:pr-16 flex flex-col items-center md:block relative" data-aos="fade-right">

                                        <div className="hidden md:block absolute right-0 top-1/2 w-16 h-[2px] bg-gray-300"></div>

                                        <img
                                            src={event.image}
                                            className="w-full max-w-[300px] sm:max-w-[340px] md:max-w-[420px] rounded-xl shadow-lg"
                                        />

                                        {event.resourcePerson.name && (
                                            <div className="mt-4 w-full max-w-[320px] text-center md:text-right break-words">
                                                <h4 className="text-lg md:text-xl font-bold text-pink-600 break-words">
                                                    {event.resourcePerson.name}
                                                </h4>
                                                <p className="text-gray-600 text-sm leading-relaxed break-words">
                                                    {event.resourcePerson.role}
                                                </p>
                                            </div>
                                        )}
                                    </div>

                                    {/* NODE */}
                                    <div className={`hidden md:flex w-10 h-10 rounded-full items-center justify-center bg-gradient-to-r ${event.color} text-white shadow-lg z-10`}>
                                        {event.icon}
                                    </div>

                                    {/* TEXT */}
                                    <div className="w-full md:w-1/2 md:pl-16 text-left" data-aos="fade-left">

                                        <p className="text-base md:text-lg font-semibold text-gray-400 mb-2">
                                            {event.year}
                                        </p>

                                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold mb-4 bg-gradient-to-r from-purple-800 to-pink-600 text-transparent bg-clip-text break-words">
                                            {event.title}
                                        </h2>

                                        <div className="mb-4">
                                            <h3 className="text-base md:text-lg font-semibold text-gray-800">
                                                Introduction
                                            </h3>
                                            <p className="text-gray-600 text-base md:text-lg leading-relaxed break-words">
                                                {event.introduction || "Content will be updated soon..."}
                                            </p>
                                        </div>

                                        {event.highlights.length > 0 && (
                                            <div>
                                                <h3 className="text-base md:text-lg font-semibold text-gray-800">
                                                    Highlights
                                                </h3>
                                                <ul className="mt-2 space-y-2 text-gray-700 text-sm md:text-base">
                                                    {event.highlights.map((item, i) => (
                                                        <li key={i}>• {item}</li>
                                                    ))}
                                                </ul>
                                            </div>
                                        )}

                                        {event.portfolios && (
                                            <div className="mt-6">
                                                <h3 className="text-base md:text-lg font-semibold text-gray-800">
                                                    Our Students
                                                </h3>
                                                <ul className="mt-2 space-y-2">
                                                    {event.portfolios.map((p, i) => (
                                                        <li key={i}>
                                                            <a
                                                                href={p.link}
                                                                target="_blank"
                                                                rel="noopener noreferrer"
                                                                className="text-pink-600 font-medium hover:text-purple-700 hover:underline break-words"
                                                            >
                                                                {i + 1}. {p.name}
                                                            </a>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        )}
                                    </div>
                                </>
                            )}
                        </div>
                    );
                })}
            </div>
            <div>
                <StudentEvent/>
            </div>
        </section>
    );
};

export default Event;