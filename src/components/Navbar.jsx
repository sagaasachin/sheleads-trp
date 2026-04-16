import { useState, useEffect, useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navRef = useRef(null);
  const navigate = useNavigate();
  const location = useLocation();

  // ✅ UPDATED LINKS (Gallery removed)
  const navLinks = [
    { name: "Home", type: "scroll", id: "home" },
    { name: "Events", type: "scroll", id: "events" },
    { name: "SheLeads Clusters", type: "scroll", id: "clusters" },
    { name: "Wall Of Fame", type: "route", path: "/achievements" },
    { name: "Join the Community", type: "scroll", id: "contact" },
  ];

  // 🔥 Navbar style on scroll
  useEffect(() => {
    const handleScrollEffect = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScrollEffect);
    return () => window.removeEventListener("scroll", handleScrollEffect);
  }, []);

  // 🔥 Scroll function
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    const navbarHeight = navRef.current?.offsetHeight || 0;

    if (section) {
      const top =
        section.getBoundingClientRect().top +
        window.pageYOffset -
        navbarHeight;

      window.scrollTo({
        top,
        behavior: "smooth",
      });
    }
  };

  // 🔥 Universal handler (FIXED)
  const handleClick = (link) => {
    setIsOpen(false);

    if (link.type === "scroll") {
      // If NOT on home → go to home first
      if (location.pathname !== "/") {
        navigate("/");

        setTimeout(() => {
          scrollToSection(link.id);
        }, 400); // wait for DOM
      } else {
        scrollToSection(link.id);
      }
    } else {
      navigate(link.path);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <nav
      ref={navRef}
      className={`w-full fixed top-0 left-0 z-50 transition-all duration-500 
      ${
        scrolled
          ? "bg-white shadow-md py-3"
          : "bg-gradient-to-r from-purple-900 via-pink-600 to-rose-500 py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">

        {/* 🔥 LOGO */}
        <button
          onClick={() => handleClick({ type: "scroll", id: "home" })}
          className={`text-xl md:text-2xl font-bold tracking-wide
          ${
            scrolled
              ? "bg-gradient-to-r from-purple-700 to-pink-500 text-transparent bg-clip-text"
              : "text-white"
          }`}
        >
          SheLeads@TRP
        </button>

        {/* 🔥 DESKTOP MENU */}
        <ul className="hidden md:flex space-x-8 font-medium">
          {navLinks.map((link, index) => (
            <li key={index}>
              <button
                onClick={() => handleClick(link)}
                className={`relative group ${
                  scrolled
                    ? "bg-gradient-to-r from-purple-700 to-pink-500 text-transparent bg-clip-text"
                    : "text-white"
                }`}
              >
                {link.name}
                <span className="absolute left-0 -bottom-1 w-0 h-[2px] group-hover:w-full transition-all duration-300 bg-white"></span>
              </button>
            </li>
          ))}
        </ul>

        {/* 🔥 MOBILE BUTTON */}
        <div className={`md:hidden ${scrolled ? "text-gray-800" : "text-white"}`}>
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* 🔥 MOBILE MENU */}
      {isOpen && (
        <div className={`md:hidden px-6 py-4 space-y-4 ${scrolled ? "bg-white" : "bg-purple-900 text-white"}`}>
          {navLinks.map((link, index) => (
            <button
              key={index}
              onClick={() => handleClick(link)}
              className="block w-full text-left"
            >
              {link.name}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;