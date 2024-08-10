import React, { useState } from "react";
import couple from "../../assets/aboutus/couple.png";
import { IoMail } from "react-icons/io5";
import { HiLocationMarker } from "react-icons/hi";
import Button from "../common/Button";
import CustomInput from "../common/CustomInput";
import { FaMobileAlt } from "react-icons/fa";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  // Handle input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    console.log(name, value);
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e);
    console.log("submitted");
  };

  return (
    <div className="">
      <div className="flex flex-col md:flex-row items-start w-full md:w-[700px] lg:w-[1000px] md:h-[700px] shadow-2xl rounded-3xl overflow-hidden ">
        <div className="p-8 flex-1 md:-w-[60%] h-full bg-white">
          <p className="text-[32px] font-bold font-montserratAlternates mb-4">
            Contact Us
          </p>
          <form className=" w-full" onSubmit={handleSubmit}>
            <div className="flex items-center gap-4 w-full mb-8">
              <div className="w-full">
                <CustomInput
                  name={"firstName"}
                  type={"text"}
                  placeholder={"First Name"}
                  value={formData.firstName}
                  handleInputChange={handleInputChange}
                />
              </div>
              <div className="w-full">
                <CustomInput
                  name={"lastName"}
                  type={"text"}
                  placeholder={"Last Name"}
                  value={formData.lastName}
                  handleInputChange={handleInputChange}
                />
              </div>
            </div>
            <div className="w-full mb-8">
              <CustomInput
                name={"email"}
                type={"email"}
                placeholder={"Email Adress"}
                value={formData.email}
                handleInputChange={handleInputChange}
              />
            </div>
            <div className="w-full mb-8">
              <CustomInput
                name={"message"}
                type={"textarea"}
                placeholder={"Message"}
                value={formData.message}
                handleInputChange={handleInputChange}
              />
            </div>
            <div className="w-1/2">
              <Button
                className="bg-layover-blue text-white hover:bg-layover-blue/95 rounded-3xl"
                type="submit"
                fullWidth={true}
              >
                Submit
              </Button>
            </div>
          </form>
        </div>

        <div className="p-8 bg-[#247DE1] w-full md:w-[40%] h-full text-white ">
          <p className="text-[32px] font-semibold font-montserratAlternates mb-10">
            Contact Info
          </p>

          <div className="space-y-6 md:space-y-12 text-xl md:text-sm lg:text-xl">
            <div className="flex items-center gap-6">
              <FaMobileAlt size={27} />
              <p>+1 (407) 900-3681</p>
            </div>
            <div className="flex items-center gap-6">
              <IoMail size={27} />
              <p>LayoverHq@gmail.com</p>
            </div>
            <div className="flex items-center gap-6">
              <HiLocationMarker size={27} />
              <p>Atlanta Georgia, USA</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
