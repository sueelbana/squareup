import React, { useState } from "react";
import logo from "../assets/logo.jpg";
import contactBg from "../assets/container-bg.jpg";

export default function ContactForm() {
  const [budget, setBudget] = useState(10000);

  return (
    <section className="bg-brand text-white flex flex-col items-center py-20">
      <div
        className="relative w-full max-w-5xl rounded-2xl overflow-hidden mb-16"
        style={{
          backgroundImage: `url(${contactBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>

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

      <form className="w-full max-w-4xl bg-[#0f0f0f] border border-gray-800 rounded-2xl p-8 space-y-8">
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="block text-gray-400 mb-2">Full Name</label>
            <input
              type="text"
              placeholder="Type here"
              className="w-full bg-[#1a1a1a] text-white px-4 py-3 rounded-md border border-gray-700 focus:outline-none focus:border-lime-400"
            />
          </div>
          <div>
            <label className="block text-gray-400 mb-2">Email</label>
            <input
              type="email"
              placeholder="Type here"
              className="w-full bg-[#1a1a1a] text-white px-4 py-3 rounded-md border border-gray-700 focus:outline-none focus:border-lime-400"
            />
          </div>
        </div>

        <div>
          <label className="block text-gray-400 mb-2">
            Why are you contacting us?
          </label>
          <div className="grid md:grid-cols-2 gap-4">
            {["Web Design", "Collaboration", "Mobile App Design", "Others"].map(
              (item) => (
                <label
                  key={item}
                  className="flex items-center space-x-2 bg-[#1a1a1a] border border-gray-700 px-4 py-3 rounded-md cursor-pointer hover:border-lime-400 transition"
                >
                  <input
                    type="checkbox"
                    className="accent-lime-400 w-4 h-4"
                  />
                  <span className="text-sm text-gray-300">{item}</span>
                </label>
              )
            )}
          </div>
        </div>

        <div>
          <label className="block text-gray-400 mb-4">Your Budget</label>
          <div className="bg-[#1a1a1a] border border-gray-700 p-6 rounded-md">
            <p className="text-sm text-gray-400 mb-4">
              Slide to select your budget range
            </p>
            <input
              type="range"
              min="1000"
              max="50000"
              step="500"
              value={budget}
              onChange={(e) => setBudget(Number(e.target.value))}
              className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-lime-400"
              style={{
                background: `linear-gradient(to right, #9EFF00 ${(budget / 50000) * 100}%, #333 ${(budget / 50000) * 100}%)`,
              }}
            />
            <div className="flex justify-between text-sm text-gray-400 mt-2">
              <span>$1000</span>
              <span>${budget}</span>
              <span>$50000</span>
            </div>
          </div>
        </div>

        <div>
          <label className="block text-gray-400 mb-2">Your Message</label>
          <textarea
            rows="4"
            placeholder="Type here"
            className="w-full bg-[#1a1a1a] text-white px-4 py-3 rounded-md border border-gray-700 focus:outline-none focus:border-lime-400"
          ></textarea>
        </div>

        <div className="text-center">
          <button
            type="submit"
            className="bg-button text-black font-semibold px-8 py-3 rounded-md hover:bg-lime-400 transition"
          >
            Submit
          </button>
        </div>
      </form>
    </section>
  );
}
