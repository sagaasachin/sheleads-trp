import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// 🔥 LANDING SECTIONS
import Hero from "./components/section/Hero";
import About from "./components/section/About";
import Event from "./components/section/Event";
import Team from "./components/section/Team";
import Clusters from "./components/section/Clusters";
import Contact from "./components/section/Contact";

// 🔥 FULL PAGES
import Gallery from "./components/section/Gallery";
import AchievementCard from "./components/section/AchievementCard";

// 🔥 SCROLL TO TOP COMPONENT
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // change to "auto" if you want instant
    });
  }, [pathname]);

  return null;
}

// 🔥 HOME PAGE (SCROLL PAGE)
function HomePage() {
  return (
    <div className="pt-20">
      <section id="home"><Hero /></section>
      <section id="about"><About /></section>
      <section id="events"><Event /></section>
      <section id="clusters"><Clusters /></section>
      <section id="team"><Team /></section>
      <section id="contact"><Contact /></section>
    </div>
  );
}

// 🔥 MAIN APP
function App() {
  return (
    <>
      <Navbar />

      {/* ✅ FIX: Ensures every route opens from top */}
      <ScrollToTop />

      <Routes>
        {/* 🔥 Landing Page */}
        <Route path="/" element={<HomePage />} />

        {/* 🔥 Separate Pages */}
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/achievements" element={<AchievementCard />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;