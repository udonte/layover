import React, { useState } from "react";
import { Link } from "react-router-dom";
import layoverlogo from "../assets/home/layover.svg";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import { RxHamburgerMenu } from "react-icons/rx";

const Menu = () => (
  <>
    <li className="">
      <Link to="/about-us" className="text-white hover:text-blue-300">
        About Us
      </Link>
    </li>
    <li>
      <Link to="/vacations" className="text-white hover:text-blue-300">
        Vacations
      </Link>
    </li>
    <li>
      <Link to="/cruises" className="text-white hover:text-blue-300">
        Cruises
      </Link>
    </li>
    <li>
      <Link to="/blogs" className="text-white hover:text-blue-300">
        Blogs
      </Link>
    </li>
    <li>
      <Link to="/contact" className="text-white hover:text-blue-300">
        Contact
      </Link>
    </li>
    <li>
      <Link to="/faqs" className="text-white hover:text-blue-300">
        FAQs
      </Link>
    </li>
  </>
);

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <nav className="px-6 md:px-12 pt-12 font-karla text-2xl w-full text-white relative z-20">
      <div className="flex items-center justify-between">
        <div className="flex items-center w-full">
          <Link to="/" className="text-white  mr-auto">
            <img src={layoverlogo} alt="layover" className="h-10" />
          </Link>
          {/* Desktop menu items */}
          <ul className="hidden md:flex items-center space-x-8 ">
            <Menu />
          </ul>
        </div>
        {/* Mobile menu toggle */}
        <div className="md:hidden">
          {toggleMenu ? (
            <RiCloseLine
              className="cursor-pointer"
              color="#fff "
              size={27}
              onClick={() => setToggleMenu(false)}
            />
          ) : (
            <RxHamburgerMenu
              className="cursor-pointer"
              color="#fff"
              size={27}
              onClick={() => setToggleMenu(true)}
            />
          )}
        </div>
      </div>
      {/* Mobile menu */}
      {toggleMenu && (
        <div className="md:hidden absolute top-[100px] right-[30px] w-[200px] rounded-lg px-6 py-4">
          <ul className="flex flex-col items-start space-y-4">
            <Menu />
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
