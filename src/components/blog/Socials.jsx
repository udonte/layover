import React from "react";
import { FaFacebook, FaTwitter } from "react-icons/fa";
import { IoShareSocialOutline } from "react-icons/io5";
import { MdBarChart } from "react-icons/md";

const Socials = () => {
  return (
    <div className="flex flex-row md:flex-col gap-8">
      <div className="flex flex-row md:flex-col items-center gap-1">
        <MdBarChart />
        <p>views</p>
        <p>
          <span>1.6</span>K
        </p>
      </div>
      <div className="flex flex-row md:flex-col items-center gap-1">
        <IoShareSocialOutline />
        <p>shares</p>
        <p>
          <span>993</span>K
        </p>
      </div>
      <div className="flex flex-row md:flex-col items-center gap-4 md:gap-1">
        <div className="flex flex-row md:flex-col items-center gap-1">
          <FaFacebook className="cursor-pointer" />
          <p>125</p>
        </div>
        <div className="flex flex-row md:flex-col items-center gap-1">
          <FaTwitter className="cursor-pointer" />
          <p>425</p>
        </div>
      </div>
    </div>
  );
};

export default Socials;
