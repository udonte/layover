import React from "react";
import layoverlogo from "../../assets/home/layover.svg";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaPinterest,
  FaTiktok,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { HiOutlineArrowRight } from "react-icons/hi";

const Footer = () => {
  return (
    <div>
      <div className="bg-layover-black text-white mt-10 md:mt-[100px] p-8 md:p-16 pb-24">
        <div className="flex flex-col md:gap-8 lg:flex-row items-start ">
          {/* LAYOVER LOGO */}
          <div className="flex flex-col items-start justify-start gap-8 mb-8 md:mb-0 md:mr-16">
            <img src={layoverlogo} alt="layover" />
            <div className="flex items-center gap-4 text-2xl">
              <FaFacebook className="cursor-pointer" />
              <FaTwitter className="cursor-pointer" />
              <FaYoutube className="cursor-pointer" />
              <FaPinterest className="cursor-pointer" />
              <FaLinkedin className="cursor-pointer" />
              <FaTiktok className="cursor-pointer" />
              <FaInstagram className="cursor-pointer" />
            </div>
          </div>

          {/* PAGES */}
          <div className="flex flex-col lg:flex-row items-start gap-8 md:gap-16 lg:gap-64 w-full">
            <div>
              <p className="font-bold mb-4">Quick Links</p>
              <div className="space-y-2">
                <p className="cursor-pointer">Home</p>
                <p className="cursor-pointer">Cruises</p>
                <p className="cursor-pointer">Vacations</p>
              </div>
            </div>
            <div>
              <p className="font-bold mb-4">Insights</p>
              <div className="space-y-2">
                <p className="cursor-pointer">Contact Us</p>
                <p className="cursor-pointer">About Us</p>
                <p className="cursor-pointer">FAQs</p>
              </div>
            </div>
            <div>
              <p className="font-bold mb-4">Newsletters</p>
              <div className="space-y-2">
                <p>Stay Updated with our Latest News</p>
                <div className="flex items-start gap-1">
                  <input
                    type="text"
                    placeholder="Your email"
                    className="bg-layover-black outline-none focus:outline-none border-[1px] border-gray-500 px-2 py-1.5 rounded-md text-xs"
                  />
                  <button className="bg-layover-blue hover:bg-layover-blue/90 text-white rounded-md text-xs py-2 px-4">
                    <HiOutlineArrowRight />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
