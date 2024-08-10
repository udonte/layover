import React from "react";
import blog1 from "../../assets/home/blog1.png";
import blog2 from "../../assets/home/blog2.png";
import blog3 from "../../assets/home/blog3.png";

const mockBlogs = [
  {
    id: 1,
    date: "13 March 2023",
    title: "Train Or Bus Journey? Which one suits?",
    description:
      "The choice between a train or bus journey depends on various factors such as the distance of the journey, the time available, the cost, and personal preferences.",
    image: blog1,
  },
  {
    id: 2,
    date: "15 April 2023",
    title: "Exploring the Hidden Gems of Europe",
    description:
      "Discover the less-traveled paths and hidden gems of Europe that offer unique experiences away from the usual tourist spots.",
    image: blog2,
  },
  {
    id: 3,
    date: "20 May 2023",
    title: "Tips for a Perfect Beach Vacation",
    description:
      "Plan the perfect beach vacation with these tips on choosing the best destinations, packing essentials, and making the most of your time in the sun.",
    image: blog3,
  },
  // Add more mock blogs as needed
];

const Blog = () => {
  return (
    <div className="mt-10 md:mt-[100px] px-4 md:px-0">
      {/* top */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between">
        <div className="mb-4 md:mb-0">
          <p className="text-layover-blue font-extrabold">
            Set Sail on Unforgettable Adventures
          </p>
          <p className="font-montserratAlternates text-2xl md:text-3xl font-bold">
            Recent Blog Stories
          </p>
        </div>

        <div>
          <button className="border-[1px] border-layover-blue hover:bg-blue-50 text-layover-blue rounded-md text-xs py-2 px-4 md:px-8">
            See all
          </button>
        </div>
      </div>
      {/* content */}
      <div className="mt-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {mockBlogs.map((blog) => (
            <div key={blog.id}>
              <div className="w-full md:w-[435px] h-[300px] md:h-[390px] overflow-hidden rounded-3xl mb-8">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="flex flex-col justify-start gap-4 md:gap-8">
                <p className="text-[#999999] font-manrope text-xs font-bold">
                  {blog.date}
                </p>
                <p className="font-bold text-xl md:text-2xl font-montserrat">
                  {blog.title}
                </p>
                <p className="text-[#666666] font-montserrat">
                  {blog.description}
                </p>
                <p className="underline text-layover-blue font-bold font-montserrat">
                  Read More...
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
