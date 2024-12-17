import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Pages
import Home from "./pages/Home";
import Solution from "./pages/Solution";
import Recruiting from "./pages/Recruiting";
import ServicesDesign from "./pages/ServicesDesign";
import ServicesDevelopment from "./pages/ServicesDevelopment";
import ServicesMarketing from "./pages/ServicesMarketing";
import Inquiry from "./pages/Inquiry";
import AD from "./pages/AD";

// Components
import Navbar from "./components/Navbar";
import BackToTopButton from "./components/BackToTopButton";
// import HorizontalMenu from "./components/HorizontalMenu";

import "aos/dist/aos.css"; //Import AOS styles
import AOS from "aos";

function App() {
  // Initialize AOS
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      easing: "ease-in-out", // Animation easing function
      once: true, // Run animation only once
    });
  }, []);

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ad" element={<AD />} />
        <Route path="/solution" element={<Solution />} />
        <Route path="/services/design" element={<ServicesDesign />} />
        <Route path="/services/development" element={<ServicesDevelopment />} />
        <Route path="/services/marketing" element={<ServicesMarketing />} />
        <Route path="/recruiting" element={<Recruiting />} />
        <Route path="/inquiry" element={<Inquiry />} />
      </Routes>
      <BackToTopButton />
    </Router>
  );
}

export default App;
