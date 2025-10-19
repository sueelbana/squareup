import React from "react";
import contactBg from "../assets/contact.jpg";
import MailIcon from "../assets/mail.jpg";
import PhoneIcon from "../assets/phone.jpg";
import MapIcon from "../assets/map.jpg";
import Form from "../components/Form";
import OperatingSocial from "../components/OperatingSocial";
import FAQSection from "../components/FAQSection";
import SquareUpAgency from "../components/SquareUpAgency";

export default function ContactUs() {
  return (
    <div className="min-h-screen bg-brand text-white flex flex-col items-center">
      <section className="w-full flex flex-col justify-center items-center text-center mt-2 relative">
        <div className="relative w-[98%] md:w-[90%] lg:w-[85%] rounded-2xl overflow-hidden shadow-lg">
          <img
            src={contactBg}
            alt="Contact"
          className="mx-auto w-[98%] sm:w-full h-[160px] sm:h-[200px] md:h-[240px] lg:h-[260px] rounded-lg object-cover"
          />
        </div>
      </section>

      <div className="w-full flex flex-col md:flex-row bg-brand justify-center items-center gap-6 py-10 px-4 bg-[#111111]">
        <div className="flex items-center bg-[#1a1a1a] px-6 py-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
          <div className="p-3 flex items-center justify-center">
            <img
              src={MailIcon}
              alt="Email"
              className="w-8 h-8 object-contain"
            />
          </div>
          <span className="ml-4 text-gray-300 text-base md:text-lg">
            hello@squareup.com
          </span>
        </div>

        <div className="flex items-center bg-[#1a1a1a] px-6 py-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
          <div className="p-3 flex items-center justify-center">
            <img
              src={PhoneIcon}
              alt="Phone"
              className="w-8 h-8 object-contain"
            />
          </div>
          <span className="ml-4 text-gray-300 text-base md:text-lg">
            +91 91813 23 2309
          </span>
        </div>

        <div className="flex items-center bg-[#1a1a1a] px-6 py-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
          <div className="p-3 flex items-center justify-center">
            <img
              src={MapIcon}
              alt="Location"
              className="w-8 h-8 object-contain"
            />
          </div>
          <span className="ml-4 text-gray-300 text-base md:text-lg">
            Get Location
          </span>
        </div>
      </div>

      <div className="w-full border-t border-gray-800">
        <Form />
        <OperatingSocial />
        <FAQSection />
        <SquareUpAgency />
      </div>
    </div>
  );
}
