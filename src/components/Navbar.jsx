// src/components/Navbar.js
import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-blue-600 p-4">
      <ul className="flex space-x-4">
        <li>
          <Link to="/" className="text-white">
            Home
          </Link>
        </li>
        <li>
          <Link to="/about-us" className="text-white">
            About Us
          </Link>
        </li>
        <li>
          <Link to="/vacations" className="text-white">
            Vacations
          </Link>
        </li>
        <li>
          <Link to="/cruises" className="text-white">
            Cruises
          </Link>
        </li>
        <li>
          <Link to="/blogs" className="text-white">
            Blogs
          </Link>
        </li>
        <li>
          <Link to="/contact" className="text-white">
            Contact
          </Link>
        </li>
        <li>
          <Link to="/faqs" className="text-white">
            FAQs
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
