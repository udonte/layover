import React from "react";
import SubscribeBase from "../../assets/blog/Base.png";
import CustomInput from "../common/CustomInput";
import Button from "../common/Button";

const Subscribe = () => {
  return (
    <div className="mt-[100px]">
      <div
        className="h-[530px] bg-cover bg-center rounded-3xl overflow-hidden flex flex-col items-center justify-center"
        style={{ backgroundImage: `url(${SubscribeBase})` }}
      >
        <p className="font-montserratAlternates text-3xl font-bold text-white w-full md:w-[830px] text-center">
          Get our stories delivered From us to your inbox weekly.
        </p>
        <div className="flex flex-col md:flex-row items-center justify-center gap-1 mt-8 w-[600px] ">
          <div className="flex-1">
            <CustomInput
              type={"email"}
              placeholder={"Your Email"}
              name={"email"}
              className="w-full"
            />
          </div>
          <Button
            type="submit"
            size="lg"
            className="bg-transparent hover:bg-layover-blue/10 text-white rounded-md text-xs border-2 border-white"
          >
            Get Started
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
