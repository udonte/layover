import React from "react";
import heroImage from "../../assets/home/heroImage.png";
import HeroSection from "../../components/common/HeroSection";
import plane from "../../assets/home/plane.png";
import AboutSection from "../../components/Home/AboutSection";
import CruiseSection from "../../components/Home/CruiseSection";
import ComingSection from "../../components/Home/ComingSection";
import AdventuresSection from "../../components/Home/AdventuresSection";
import Blog from "../../components/Home/Blog";
import Testimonials from "../../components/Home/Testimonials";
import Footer from "../../components/common/Footer";

const Home = () => {
  return (
    <div>
      <div className="px-4 lg:px-16 py-8">
        {/* Hero section */}
        <HeroSection image={heroImage}>
          <div className="flex flex-col h-full">
            {/* TOP */}
            <div className="flex items-start justify-between gap-8 h-full w-full mt-16 text-white">
              {/* left */}
              <div className="w-[700px] flex flex-col gap-8 justify-start">
                <p className="font-montserratAlternates text-[45px] font-bold ">
                  Embark on Unforgettable Journeys with LayoverHq
                </p>
                <p className="font-montserrat w-[650px] text-2xl">
                  Travel the way you wish to go with us at Layover HQ helping
                  you discover, live and travel at your own pace.
                </p>
              </div>
              {/* right */}
              <div className="w-1/2 flex items-center justify-end">
                <img src={plane} alt="plane" />
              </div>
            </div>

            {/* CARDS */}
            <div className="flex items-start gap-4 text-white font-nunito overflow-hidden">
              {/* card */}
              <div className="bg-[#BBDFF9] flex flex-col gap-3 bg-opacity-[42%] h-[190px] w-[360px] rounded-tl-2xl rounded-tr-2xl border-2 border-gray-500 px-8 pt-8">
                <p className="text-white  font-bold text-2xl">Vacations</p>
                <div className="border-t-[1px] border-gray-300 py-2 font-medium">
                  <p>Total 600+ destinations for your vacation.</p>
                </div>
              </div>
              <div className="bg-[#BBDFF9] flex flex-col gap-3 bg-opacity-[42%] h-[190px] w-[360px] rounded-tl-2xl rounded-tr-2xl border-2 border-gray-500 px-8 pt-8">
                <p className="text-white  font-bold text-2xl">Vacations</p>
                <div className="border-t-[1px] border-gray-300 py-2 font-medium">
                  <p>Total 600+ destinations for your vacation.</p>
                </div>
              </div>
              <div className="bg-[#BBDFF9] flex flex-col gap-3 bg-opacity-[42%] h-[190px] w-[360px] rounded-tl-2xl rounded-tr-2xl border-2 border-gray-500 px-8 pt-8">
                <p className="text-white  font-bold text-2xl">Vacations</p>
                <div className="border-t-[1px] border-gray-300 py-2 font-medium">
                  <p>Total 600+ destinations for your vacation.</p>
                </div>
              </div>
            </div>
          </div>
        </HeroSection>
        {/* About */}
        <AboutSection />
        {/* cruises */}
        <CruiseSection />
        {/* coming soon */}
        <ComingSection />
        {/* Adventure */}
        <AdventuresSection />
        {/* recent blogs */}
        <Blog />
      </div>
      {/* testimonial */}
      <Testimonials />
      {/* footer */}
      <Footer />
    </div>
  );
};

export default Home;
