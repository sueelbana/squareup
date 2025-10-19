import React from "react";
import aboutImage from "../assets/about-bg.jpg";

export default function AboutSquareUp() {
  return (
    <section className="bg-brand text-white py-16 px-6 flex flex-col md:flex-row items-center justify-center max-w-7xl mx-auto gap-24 md:gap-32">
      <div className="md:w-1/2 text-center md:text-left flex flex-col justify-center items-center md:items-start">
        <h2 className="text-3xl md:text-4xl font-semibold font-barlow mb-4">About SquareUp</h2>
        <p className="text-gray-400 text-sm md:text-sm leading-relaxed max-w-md">
          SquareUp is a digital product agency that is passionate about crafting
          exceptional digital experiences. We specialize in design, engineering,
          and project management, helping businesses thrive in the digital
          landscape. At SquareUp, we follow a structured and collaborative
          process to ensure the successful delivery of exceptional digital
          products. Our process combines industry best practices, creative
          thinking, and a client-centric approach.
        </p>
      </div>

      <div className="md:w-1/2 flex justify-center">
        <div className="relative w-[260px] h-[260px] md:w-[300px] md:h-[300px] rounded-2xl overflow-hidden shadow-lg">
          <img
            src={aboutImage}
            alt="About SquareUp"
            className="w-full h-full object-cover rounded-2xl"
          />
        </div>
      </div>
    </section>
  );
}
