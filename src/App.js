import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Pages
import Home from "./pages/Home";
import Solution from "./pages/Solution";
import Recruiting from "./pages/Recruiting";
import Inquiry from "./pages/Inquiry";
import AD from "./pages/AD";
import Reference from "./pages/Reference";

// Components
import Navbar from "./components/Navbar";
import BackToTopButton from "./components/BackToTopButton";

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
    <Router basename={process.env.PUBLIC_URL}>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ad" element={<AD />} />
        <Route path="/solution" element={<Solution />} />
        <Route path="/reference" element={<Reference />} />
        <Route path="/recruiting" element={<Recruiting />} />
        <Route path="/inquiry" element={<Inquiry />} />
      </Routes>
      <BackToTopButton />
    </Router>
  );
}

export default App;
