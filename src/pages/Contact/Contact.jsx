import React from "react";
import HeroSection from "../../components/common/HeroSection";
import ContactHero from "../../assets/ContactUs/ContactHero.png";

import Footer from "../../components/common/Footer";
import ContactForm from "../../components/contact/ContactForm";

const Contact = () => {
  return (
    <div>
      <div className="px-4 lg:px-16 py-8 relative">
        <HeroSection image={ContactHero}>
          <div className=" h-full">
            <div className=" h-full w-full mt-16 text-white">
              {/* left */}
              <div className="w-[700px] mt-[100px]">
                <p className="font-montserratAlternates text-[45px] font-bold ">
                  Get in Touch to Contact Us For More Enquiries
                </p>
                {/* <p className="font-montserrat w-full  md:w-[650px] text-2xl">
                  Travel the way you wish to go with us at Layover HQ helping
                  you discover, live and travel at your own pace.
                </p> */}
              </div>
            </div>
          </div>
        </HeroSection>
        {/* contact Form */}
        <div className=" px-0 md:px-4 mt-[100px] min-h-[600px] flex items-center justify-center">
          <div className="md:absolute md:top-[30%] z-10">
            <ContactForm />
          </div>
        </div>
      </div>
      {/* footer */}
      <Footer />
    </div>
  );
};

export default Contact;
