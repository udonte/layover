import React, { useState, useEffect, useRef } from "react";
import { VscChevronLeft, VscChevronRight } from "react-icons/vsc";
import { motion, AnimatePresence } from "framer-motion";
import testimonial1 from "../../assets/home/testimonial1.png";
import testimonial2 from "../../assets/home/testimonial2.png";
import testimonial3 from "../../assets/home/testimonial3.png";
import testimonial4 from "../../assets/home/testimonial4.png";
import testimonial5 from "../../assets/home/testimonial5.png";
import background from "../../assets/home/testimonialBackground.png";

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const thumbnailRef = useRef(null);

  const testimonials = [
    {
      quote:
        "“A real sense of community, nurtured” Really appreciate the help and support from the staff during my trips. Very helpful and always available when needed.",
      name: "Alice Mark",
      image: testimonial1,
    },
    {
      quote:
        "“Fantastic service and support” The team was incredibly helpful and responsive. They went above and beyond to ensure we had a great experience.",
      name: "John Doe",
      image: testimonial2,
    },
    {
      quote:
        "“Exceptional quality and attention to detail” Every aspect of the service was top-notch, from start to finish. Highly recommend!",
      name: "George Smith",
      image: testimonial3,
    },
    {
      quote:
        "“Exceptional quality and attention to detail” Every aspect of the service was top-notch, from start to finish. Highly recommend!",
      name: "Charles Popo",
      image: testimonial4,
    },
    {
      quote:
        "“Exceptional quality and attention to detail” Every aspect of the service was top-notch, from start to finish. Highly recommend!",
      name: "Luke Garner",
      image: testimonial5,
    },
    // Add more testimonials as needed
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const handleThumbnailScroll = (index) => {
    if (thumbnailRef.current) {
      const thumbnailWidth =
        thumbnailRef.current.scrollWidth / testimonials.length;
      thumbnailRef.current.scrollTo({
        left: thumbnailWidth * index,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    handleThumbnailScroll(currentIndex);
  }, [currentIndex]);

  return (
    <div
      className="relative w-full h-auto md:h-screen bg-cover bg-center flex flex-col items-center justify-center mt-10 md:mt-[100px] text-white"
      style={{ backgroundImage: `url(${background})` }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black opacity-60"></div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8 p-4 w-full max-w-screen-xl mx-auto">
        <div
          className="text-4xl md:text-[140px] text-white cursor-pointer hover:text-[#D7BDBD]"
          onClick={prevTestimonial}
        >
          <VscChevronLeft />
        </div>

        {/* Testimonial Content */}
        <div className="flex flex-col justify-start gap-6 p-8 rounded-lg w-full text-center ">
          {/* 
          bg-white bg-opacity-10 backdrop-blur
          */}
          <div className="space-y-2">
            <p className="font-bold text-xl">Testimonials</p>
            <p className="text-2xl md:text-4xl font-montserratAlternates font-bold">
              What they say about us
            </p>
          </div>
          <div className="text-yellow-500 text-3xl">★★★★★</div>
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
            >
              <div className="mt-4">
                <p className="text-lg md:text-xl">
                  {testimonials[currentIndex].quote}
                </p>
              </div>
              <p className="text-2xl font-semibold mt-4">
                {testimonials[currentIndex].name}
              </p>
            </motion.div>
          </AnimatePresence>
          <div className="flex flex-col justify-start gap-8 mt-8">
            <div
              ref={thumbnailRef}
              className="flex items-center justify-center gap-8 overflow-x-scroll"
              style={{
                scrollBehavior: "smooth",
                scrollbarWidth: "none" /* For Firefox */,
                WebkitScrollbarWidth: "none" /* For WebKit-based browsers */,
              }}
            >
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className={`relative overflow-hidden rounded-full cursor-pointer ${
                    currentIndex === index
                      ? "w-[60px] h-[60px] md:w-[100px] md:h-[100px]"
                      : "w-[40px] h-[40px] md:w-[80px] md:h-[80px] opacity-50"
                  }`}
                  onClick={() => setCurrentIndex(index)}
                >
                  <img
                    src={testimonial.image}
                    alt={`testimonial ${index}`}
                    className="w-full h-full object-cover"
                  />
                  {currentIndex !== index && (
                    <div className="absolute inset-0 bg-black opacity-40"></div>
                  )}
                </div>
              ))}
            </div>
            <div className="flex items-center justify-center gap-4 mt-4">
              {testimonials.map((_, index) => (
                <div
                  key={index}
                  className={`w-[10px] h-[10px] rounded-full ${
                    currentIndex === index ? "bg-blue-500" : "bg-gray-300"
                  }`}
                ></div>
              ))}
            </div>
          </div>
        </div>

        <div
          className="text-4xl md:text-[140px] text-white cursor-pointer hover:text-[#D7BDBD]"
          onClick={nextTestimonial}
        >
          <VscChevronRight />
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
