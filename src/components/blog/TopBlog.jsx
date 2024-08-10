import React from "react";
import blogTop from "../../assets/blog/blog-top.png";
import Button from "../common/Button";

const TopBlog = () => {
  return (
    <div className=" px-0 md:px-4 mt-[100px]">
      <div className="flex flex-col md:flex-row items-start gap-8">
        <div className="w-full md:w-[50%] h-[410px] rounded-2xl overflow-hidden">
          <img
            src={blogTop}
            alt="top blog"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="w-full md:w-[50%]">
          <p className="text-[32px] font-bold font-montserratAlternates mb-6 text-left">
            Top 10 Must-Do Activities in Texas for an Unforgettable Adventure
          </p>
          <div className="space-y-6">
            <p>
              Ready to sprinkle some Vacation magic across the globe? Texas, the
              city of dreams, awaits you with open arms and a plethora of
              experiences that will leave you spellbound. From its dazzling
              skyline to its rich cultural tapestry, Texas promises an adventure
              like no other. Let’s dive into the top things to do in Dubai that
              promise to make your journey unforgettableReady to sprinkle some
              Vacation magic across the globe? Texas, the city of dreams, awaits
              you with open arms and a plethora of experiences that will leave
              you spellbound.
            </p>
            <div className="w-full md:w-[50%]">
              <Button
                className="bg-layover-blue text-white hover:bg-layover-blue/95 rounded-3xl"
                type="submit"
                fullWidth={true}
              >
                Book Vacation Now
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBlog;
