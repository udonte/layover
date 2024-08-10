import React from "react";
import GoldMay from "../../assets/aboutus/GoldMay.png";

const AboutFounder = () => {
  return (
    <div className="px-0 md:px-4 mt-[100px]">
      <div className="flex flex-col md:flex-row  items-center gap-8">
        <div className="w-full md:w-[500px] h-[450px] rounded-2xl overflow-hidden">
          <img
            src={GoldMay}
            alt="goldmay"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex-1">
          <p className="text-[32px] font-bold font-montserratAlternates mb-4 text-center md:text-left">
            About The Founder & CEO
          </p>
          <div className="space-y-4">
            <p>
              Since 2020, Layover Hq. has been focused on bringing our customers
              the best in esteem and quality travel game plans. We are
              enthusiastic about movement and sharing the world’s marvels on the
              relaxation travel side, and giving corporate explorers hello there
              contact administrations to encourage their business travel needs.
            </p>
            <p>
              We’re a worker-claimed travel organization secured by our
              qualities, trustworthiness, and commitment to client benefit. Our
              honor-winning organization reliably positions as a standout
              amongst other offices in the nation (Travel Weekly, Business
              Travel Weekly), and is the best individual from the renowned
              Signature Travel Network, an overall association enabling us to
              give our clients unmatched advantages.
            </p>
            <p>
              Since 2018, our solid organizational culture and enthusiasm for
              our calling have brought about our being named every year as one
              of the “Best Places To Work” in Accra Ghana. Our administration is
              dynamic on different tourism warning sheets and panels for
              movement associations. Fulfilled workers lead to fulfilled
              clients. We know the development and accomplishment of our
              organization relies on satisfying our customer’s needs each day.
              That is additionally our guarantee.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutFounder;
