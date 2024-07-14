import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home/Home";
import AboutUs from "./pages/AboutUs/AboutUs";
import Vacations from "./pages/Vacations/Vacations";
import Cruises from "./pages/Cruises/Cruises";
import Blogs from "./pages/Blogs/Blogs";
import Contact from "./pages/Contact/Contact";
import FAQs from "./pages/FAQs/FAQs";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/vacations" element={<Vacations />} />
        <Route path="/cruises" element={<Cruises />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/faqs" element={<FAQs />} />
      </Routes>
    </Router>
  );
}

export default App;
