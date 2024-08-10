import React, { useState } from "react";
import { BsPlus } from "react-icons/bs";
import { HiMinusSmall } from "react-icons/hi2";
import mockData from "../../MockData/MockData";

const FaqContainer = () => {
  const [activeFaq, setActiveFaq] = useState(null);

  const handleToggle = (id) => {
    setActiveFaq((prev) => (prev === id ? null : id));
  };

  return (
    <div className="px-0 lg:px-16 mt-[100px]">
      <div>
        <p className="text-[32px] font-bold font-montserratAlternates my-10 text-center">
          FREQUENTLY ASKED <span className="text-layover-blue">QUESTIONS</span>
        </p>

        <div className="space-y-8">
          {mockData.faqs.map((faq, index) => (
            <div key={faq.id} className="mb-4">
              <div className="flex items-start border-2 border-layover-black rounded-lg">
                <div className="flex-1 flex items-start gap-4 lg:gap-16 px-4 lg:px-12 py-4 min-h-[85px]">
                  <p className="text-lg lg:text-2xl">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <div className="flex flex-col">
                    <p className="text-lg lg:text-2xl">{faq.question}</p>
                    {activeFaq === faq.id && (
                      <div className="my-12 font-light leading-loose text-sm lg:text-lg">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                </div>
                <div
                  className="bg-layover-blue flex items-center justify-center text-white rounded-r-lg cursor-pointer w-[40px] h-[35px]  md:w-[90px] md:h-[85px] hover:bg-layover-blue/95"
                  onClick={() => handleToggle(faq.id)}
                >
                  {activeFaq === faq.id ? (
                    <HiMinusSmall size={40} />
                  ) : (
                    <BsPlus size={40} />
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FaqContainer;
