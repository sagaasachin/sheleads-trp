import { Link, useNavigate, useLocation } from "react-router-dom";
import { FaWhatsapp, FaInstagram, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // 🔥 SCROLL FUNCTION
  const handleScroll = (id) => {
    const scroll = () => {
      const section = document.getElementById(id);
      if (section) {
        const top =
          section.getBoundingClientRect().top +
          window.pageYOffset -
          80;

        window.scrollTo({
          top,
          behavior: "smooth",
        });
      }
    };

    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(scroll, 400);
    } else {
      scroll();
    }
  };

  return (
    <footer className="bg-gradient-to-r from-purple-900 via-pink-600 to-purple-800 text-white pt-16 pb-10 px-6 font-[Poppins]">

      <div className="max-w-7xl mx-auto">

        {/* 🔥 TOP */}
        <div className="grid md:grid-cols-3 gap-12 items-center text-center md:text-left">

          {/* LOGO */}
          <div>
            <h2 className="text-3xl font-bold tracking-wide">
              SheLeads@TRP
            </h2>
            <p className="text-sm mt-3 text-white/80 leading-relaxed max-w-xs mx-auto md:mx-0">
              Empowering women through leadership, innovation, and growth.
            </p>
          </div>

          {/* 🔥 QUICK LINKS (MATCH NAVBAR) */}
          <div>
            <h3 className="text-xl font-semibold mb-4 tracking-wide">
              Quick Links
            </h3>

            <ul className="space-y-3 text-white/90 text-base">

              <li>
                <button onClick={() => handleScroll("home")} className="hover:text-white transition">
                  Home
                </button>
              </li>

              <li>
                <button onClick={() => handleScroll("events")} className="hover:text-white transition">
                  Events
                </button>
              </li>

              <li>
                <button onClick={() => handleScroll("clusters")} className="hover:text-white transition">
                  Clusters
                </button>
              </li>

              <li>
                <Link to="/achievements" className="hover:text-white transition">
                  Wall Of Fame
                </Link>
              </li>

              <li>
                <button onClick={() => handleScroll("contact")} className="hover:text-white transition">
                  Join the Community
                </button>
              </li>

            </ul>
          </div>

          {/* 🔥 SOCIAL */}
          <div>
            <h3 className="text-xl font-semibold mb-6 tracking-wide">
              Connect With Us
            </h3>

            <div className="flex justify-center md:justify-start gap-6">

              <a href="#" className="group">
                <FaWhatsapp className="text-3xl md:text-4xl group-hover:scale-125 transition duration-300" />
              </a>

              <a href="#" className="group">
                <FaInstagram className="text-3xl md:text-4xl group-hover:scale-125 transition duration-300" />
              </a>

              <a href="mailto:example@gmail.com" className="group">
                <FaEnvelope className="text-3xl md:text-4xl group-hover:scale-125 transition duration-300" />
              </a>

              <a href="#" className="group">
                <FaLinkedin className="text-3xl md:text-4xl group-hover:scale-125 transition duration-300" />
              </a>

            </div>
          </div>

        </div>

        {/* 🔥 DIVIDER */}
        <div className="my-10 h-[1px] bg-white/20"></div>

        {/* 🔥 COPYRIGHT */}
        <div className="text-center text-sm md:text-base text-white/80 tracking-wide">
          © {new Date().getFullYear()} <span className="font-semibold">SheLeads@TRP</span>. All Rights Reserved.
        </div>

      </div>

    </footer>
  );
};

export default Footer;