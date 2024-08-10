import React from "react";
import HeroSection from "../../components/common/HeroSection";
import Blog3 from "../../assets/blog/blog1.png";

import Footer from "../../components/common/Footer";
import RecentBlogs from "../../components/blog/RecentBlogs";
import BlogContent from "../../components/blog/BlogContent";
import Subscribe from "../../components/blog/Subscribe";

const Blog = () => {
  return (
    <div>
      <div className="px-4 lg:px-16 py-8 ">
        <HeroSection image={Blog3}>
          <div className=" h-full">
            <div className=" h-full w-full mt-16 text-white">
              {/* left */}
              <div className="w-[700px] mt-[100px]">
                <p className="font-montserratAlternates text-3xl uppercase font-bold">
                  Top 10 Must-Do Activities in Texas for an Unforgettable
                  Adventure
                </p>
              </div>
            </div>
          </div>
        </HeroSection>
        {/* top blog*/}
        <BlogContent />
        {/* recent blogs*/}
        <RecentBlogs />
        {/* subscribe*/}
        <Subscribe />
      </div>
      {/* footer */}
      <Footer />
    </div>
  );
};

export default Blog;
