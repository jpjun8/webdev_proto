import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import ServicesDesign from "./pages/ServicesDesign";
import ServicesDevelopment from "./pages/ServicesDevelopment";
import ServicesMarketing from "./pages/ServicesMarketing";
import Navbar from "./components/Navbar";

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
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services/design" element={<ServicesDesign />} />
        <Route path="/services/development" element={<ServicesDevelopment />} />
        <Route path="/services/marketing" element={<ServicesMarketing />} />
      </Routes>
    </Router>
  );
}

export default App;
