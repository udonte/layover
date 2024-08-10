import React from "react";
import v1 from "../../assets/home/v1.png";
import v2 from "../../assets/home/v2.png";
import v3 from "../../assets/home/v3.png";
import v4 from "../../assets/home/v4.png";
import arrowtr from "../../assets/home/arrowtr.svg";

const CruiseSection = () => {
  return (
    <div className="mt-[100px]">
      {/* top */}
      <div className="flex items-center justify-between">
        <div>
          <p className="text-layover-blue font-extrabold">
            Craft Your Perfect Getaway
          </p>
          <p className="font-montserratAlternates text-3xl font-bold">
            Amazing Cruises For You
          </p>
        </div>

        <div>
          <button className="bg-layover-blue hover:bg-layover-blue/90 text-white rounded-md text-xs py-2 px-8 ">
            See all
          </button>
        </div>
      </div>
      {/* content */}
      <div className="h-[800px] w-full mt-8 px-4 flex items-start gap-8">
        {/* left image */}
        <div className="h-full w-[430px] rounded-3xl overflow-hidden relative hover:text-3xl transition-all shadow-sm">
          <img src={v1} alt="v1" className="w-full h-full object-cover" />
          <div className="absolute z-10 bottom-[50px] left-[50px] text-white flex items-center w-[80%] justify-between ">
            <div>
              <p className="font-bold text-2xl">Virgin Island</p>
              <p>California, USA</p>
            </div>
            <div className="bg-[#BBDFF9] bg-opacity-[42%] p-2 border-1 border-gray-300 rounded-full cursor-pointer">
              <img src={arrowtr} alt="topright" />
            </div>
          </div>
        </div>
        {/* right images */}
        <div className="flex flex-col flex-1 h-full gap-8">
          {/* up */}
          <div className="flex gap-8 h-1/2">
            <div className="h-full w-1/2 rounded-3xl overflow-hidden relative  hover:text-3xl transition-all shadow-sm">
              <img src={v2} alt="v2" className="w-full h-full object-cover" />
              {/* description */}
              <div className="absolute z-10 bottom-[50px] left-[50px] text-white flex items-center w-[80%] justify-between ">
                <div>
                  <p className="font-bold text-2xl">Virgin Island</p>
                  <p>California, USA</p>
                </div>
                <div className="bg-[#BBDFF9] bg-opacity-[42%] p-2 border-1 border-gray-300 rounded-full cursor-pointer">
                  <img src={arrowtr} alt="topright" />
                </div>
              </div>
            </div>
            <div className="h-full w-1/2 rounded-3xl overflow-hidden relative  hover:text-3xl transition-all shadow-sm">
              <img src={v3} alt="v3" className="w-full h-full object-cover" />
              {/* description */}
              <div className="absolute z-10 bottom-[50px] left-[50px] text-white flex items-center w-[80%] justify-between ">
                <div>
                  <p className="font-bold text-2xl">Virgin Island</p>
                  <p>California, USA</p>
                </div>
                <div className="bg-[#BBDFF9] bg-opacity-[42%] p-2 border-1 border-gray-300 rounded-full cursor-pointer">
                  <img src={arrowtr} alt="topright" />
                </div>
              </div>
            </div>
          </div>
          {/* down */}
          <div className="h-1/2 w-full rounded-3xl overflow-hidden relative  hover:text-3xl transition-all shadow-md">
            <img src={v4} alt="v4" className="w-full h-full object-cover" />
            {/* description */}
            <div className="absolute z-10 bottom-[50px] left-[50px] text-white flex items-center w-[80%] justify-between ">
              <div>
                <p className="font-bold text-2xl">Virgin Island</p>
                <p>California, USA</p>
              </div>
              <div className="bg-[#BBDFF9] bg-opacity-[42%] p-2 border-1 border-gray-300 rounded-full cursor-pointer">
                <img src={arrowtr} alt="topright" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CruiseSection;
