import React from "react";
import Navbar from "../Navbar";

const HeroSection = ({ image, children }) => {
  return (
    <div
      className="relative h-screen bg-cover bg-center rounded-3xl overflow-hidden"
      style={{ backgroundImage: `url(${image})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-[32%]"></div>

      <Navbar />
      <div className="relative px-6 lg:px-12 py-4 h-[90%]  text-white z-10">
        {children}
      </div>
    </div>
  );
};

export default HeroSection;
