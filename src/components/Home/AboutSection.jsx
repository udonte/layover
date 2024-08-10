import React from "react";

import luggage from "../../assets/home/luggage.png";
import park from "../../assets/home/park.png";
import lake from "../../assets/home/lake.png";

const AboutSection = () => {
  return (
    <div className="px-4 mt-[100px]">
      <div className="flex items-center justify-between gap-8">
        {/* left */}
        <div className="w-1/2 flex items-end relative">
          <div className="h-[440px] w-[270px] overflow-hidden rounded-[95px]">
            <img
              src={luggage}
              alt="luggage"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="h-[332px] w-[200px] overflow-hidden rounded-[95px] border-[12px] border-white absolute z-10 left-[250px]">
            <img src={park} alt="park" className="w-full h-full object-cover" />
          </div>
          <div className="h-[311px] w-[180px] overflow-hidden rounded-[95px] border-[12px] border-white absolute z-20 left-[380px] bottom-[150px]">
            <img src={lake} alt="lake" className="w-full h-full object-cover" />
          </div>
        </div>
        {/* right */}
        <div className="flex flex-col gap-4 w-1/2">
          <div className="flex flex-col gap-1">
            <p className="font-bold text-layover-blue">About</p>
            <p className="font-montserratAlternates text-3xl font-bold">
              Plan your perfect trip
            </p>
          </div>
          <div className="w-[660px] text-layover-gray-500">
            <p>
              Are you looking for an adventurous travel, or just carrying your
              work alongside you while you travel and explore new places, then
              your perfect trip is one with us, Layover Hq helps you search
              flights & places, book your most convenient hotels/places at your
              comfort while we help you discover the world. Welcome to a new
              dispensation.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-8 text-layover-gray-500">
            <div>
              <p className="font-extrabold text-layover-blue text-2xl">150+</p>
              <p>Flight Destinations</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
