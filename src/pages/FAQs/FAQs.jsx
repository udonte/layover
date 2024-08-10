import React from "react";
import HeroSection from "../../components/common/HeroSection";
import faqHero from "../../assets/faq/faqHero.png";
import couple from "../../assets/aboutus/couple.png";
import Footer from "../../components/common/Footer";
import FaqContainer from "../../components/faq/FaqContainer";

const FAQs = () => {
  return (
    <div>
      <div className="px-4 lg:px-16 py-8 ">
        <HeroSection image={faqHero}>
          <div className=" h-full">
            <div className=" h-full w-full mt-16 text-white">
              {/* left */}
              <div className="w-[700px] mt-[100px]">
                <p className="font-montserratAlternates text-[45px] font-bold ">
                  Frequently Asked Questions
                </p>
                <p className="font-montserrat w-full  md:w-[650px] text-2xl">
                  Travel the way you wish to go with us at Layover HQ helping
                  you discover, live and travel at your own pace.
                </p>
              </div>
            </div>
          </div>
        </HeroSection>
        {/* faq container */}
        <FaqContainer />
      </div>
      {/* footer */}
      <Footer />
    </div>
  );
};

export default FAQs;
