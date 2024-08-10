import React from "react";
import HeroSection from "../../components/common/HeroSection";
import BlogHero from "../../assets/blog/BlogHero.png";

import Footer from "../../components/common/Footer";
import TopBlog from "../../components/blog/TopBlog";
import RecentBlogs from "../../components/blog/RecentBlogs";

const Blogs = () => {
  return (
    <div>
      <div className="px-4 lg:px-16 py-8 ">
        <HeroSection image={BlogHero}>
          <div className=" h-full">
            <div className=" h-full w-full mt-16 text-white">
              {/* left */}
              <div className="w-[700px] mt-[100px]">
                <p className="font-montserratAlternates text-[45px] font-bold ">
                  Blogs
                </p>
                <p className="font-montserrat w-full  md:w-[650px] text-2xl">
                  Travel the way you wish to go with us at Layover HQ helping
                  you discover, live and travel at your own pace.
                </p>
              </div>
            </div>
          </div>
        </HeroSection>
        {/* top blog*/}
        <TopBlog />
        {/* recent blogs*/}
        <RecentBlogs />
      </div>
      {/* footer */}
      <Footer />
    </div>
  );
};

export default Blogs;
