import React from "react";
import logo from "../assets/logo.jpg";
import contactBg from "../assets/container-bg.jpg";

export default function StartProject() {
  return (
    <section className="bg-brand text-white flex flex-col items-center py-20">
      {/* Top Hero Section */}
      <div
        className="relative w-full max-w-5xl rounded-2xl overflow-hidden mb-16"
        style={{
          backgroundImage: `url(${contactBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* Content */}
        <div className="relative z-10 text-center py-20 px-6">
          <img src={logo} alt="Logo" className="w-16 mx-auto mb-4" />
          <h2 className="text-2xl md:text-3xl font-barlow font-semibold mb-4">
            Thank you for your interest in SquareUp.
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto mb-6">
            We would love to hear from you and discuss how we can help design
            your digital future. Please fill in the details below so we can get
            back to you shortly.
          </p>
          <button className="bg-button text-black font-semibold px-6 py-2 rounded-md hover:bg-lime-400 transition">
            Start Project
          </button>
        </div>
      </div>
    </section>
  );
}
