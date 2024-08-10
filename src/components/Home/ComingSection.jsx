import React from "react";
import appleButton from "../../assets/home/applestore.svg";
import playStoreButton from "../../assets/home/playstore.svg";
import layoverPhone from "../../assets/home/layoverPhone.png";
import planetrail from "../../assets/home/planetrail.png";
import airplane from "../../assets/home/airplane.png";

const ComingSection = () => {
  return (
    <div className="mt-[100px] w-full px-4 md:px-0">
      <div className="flex flex-col md:flex-row items-start gap-16 w-full">
        {/* left side */}
        <div className="w-full md:w-1/2 flex flex-col justify-start gap-2">
          <div className="flex flex-col gap-2">
            <p className="font-bold text-layover-blue">Coming Soon</p>
            <p className="font-montserratAlternates text-2xl md:text-3xl font-bold">
              Stay Tuned for the Layovering App!
            </p>
            <div className="text-layover-gray-500 mt-6 w-full md:w-[90%]">
              <p>
                Your ultimate travel companion is almost here. Soon, you'll be
                able to explore new destinations, book flights, find the best
                hotels, and plan exciting activities all from the palm of your
                hand. With real-time updates, personalized recommendations, and
                a seamless booking experience, the LayoverHq app will
                revolutionize the way you travel. From managing layovers to
                discovering hidden gems and exclusive offers, everything you
                need for a perfect journey will be just a tap away.
              </p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8 font-manrope mt-8 md:mt-16">
            <div className="flex items-center gap-2 border-[1px] border-[#1A66BC] rounded-xl px-4 py-2 md:px-6 md:py-2 cursor-pointer hover:bg-gray-50">
              <img src={appleButton} alt="apple" />
              <div className="">
                <p className="text-xs">Coming soon on</p>
                <p className="font-bold">Apple Store</p>
              </div>
            </div>
            <div className="flex items-center gap-2 border-[1px] border-[#1A66BC] rounded-xl px-4 py-2 md:px-6 md:py-2 cursor-pointer hover:bg-gray-50">
              <img src={playStoreButton} alt="playstore" />
              <div className="">
                <p className="text-xs">Coming soon on</p>
                <p className="font-bold">Play Store</p>
              </div>
            </div>
          </div>
          <div className="relative flex flex-col items-start justify-start gap-8 mt-8 md:mt-0">
            <img
              src={airplane}
              alt="airplane"
              className="absolute left-[200px] md:left-[400px] top-[100px] hidden md:block"
            />
            <img
              src={planetrail}
              alt="plane trail"
              className="absolute top-[200px] hidden md:block"
            />
          </div>
        </div>

        {/* right side */}
        <div className="w-full md:w-1/2 mt-8 md:mt-0">
          <div className="w-full">
            <img
              src={layoverPhone}
              alt="layover phone"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComingSection;
