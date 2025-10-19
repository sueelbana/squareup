import React, { useState } from "react";
import { Check } from "lucide-react";

export default function Form() {
  const [budget, setBudget] = useState(3000);
  const [selectedReasons, setSelectedReasons] = useState([]);

  const toggleReason = (reason) => {
    setSelectedReasons((prev) =>
      prev.includes(reason)
        ? prev.filter((item) => item !== reason)
        : [...prev, reason]
    );
  };

  return (
    <section className="bg-brand text-white py-12 px-6 flex justify-center">
      <form className="w-full max-w-3xl space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-gray-300 mb-2">Full Name</label>
            <input
              type="text"
              placeholder="Type here"
              className="w-full bg-[#1a1a1a] text-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-[rgba(216,255,153,1)]"
            />
          </div>
          <div>
            <label className="block text-gray-300 mb-2">Email</label>
            <input
              type="email"
              placeholder="Type here"
              className="w-full bg-[#1a1a1a] text-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-[rgba(216,255,153,1)]"
            />
          </div>
        </div>

        <div className="bg-[#1a1a1a] p-5 rounded-lg">
          <p className="text-gray-300 mb-3">Why are you contacting us?</p>
          <div className="grid grid-cols-2 gap-3">
            {["Web Design", "Collaboration", "Mobile App Design", "Others"].map(
              (reason) => {
                const isSelected = selectedReasons.includes(reason);
                return (
                  <div
                    key={reason}
                    className="flex items-center space-x-2 cursor-pointer"
                    onClick={() => toggleReason(reason)}
                  >
                    <div
                      className={`w-5 h-5 flex items-center justify-center rounded-sm border ${
                        isSelected
                          ? "bg-[rgba(158,255,0,1)] border-[rgba(216,255,153,1)]"
                          : "border-gray-400 bg-transparent"
                      } transition-all duration-200`}
                    >
                      {isSelected && (
                        <Check className="w-4 h-4 text-black font-bold" />
                      )}
                    </div>
                    <span className="text-gray-300 text-sm">{reason}</span>
                  </div>
                );
              }
            )}
          </div>
        </div>

        <div className="bg-[#1a1a1a] p-5 rounded-lg">
          <p className="text-gray-300 mb-3">Your Budget</p>
          <p className="text-gray-500 text-sm mb-2">
            Slide to indicate your budget range
          </p>
          <input
            type="range"
            min="1000"
            max="5000"
            step="100"
            value={budget}
            onChange={(e) => setBudget(e.target.value)}
            className="w-full accent-[rgba(158,255,0,1)]"
          />
          <div className="flex justify-between text-gray-400 text-sm mt-1">
            <span>$1000</span>
            <span>${budget}</span>
            <span>$5000</span>
          </div>
        </div>

        <div>
          <label className="block text-gray-300 mb-2">Your Message</label>
          <textarea
            rows="4"
            placeholder="Type here"
            className="w-full bg-[#1a1a1a] text-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-[rgba(216,255,153,1)]"
          ></textarea>
        </div>

        <div className="flex justify-center">
          <button
            type="submit"
            className="bg-[rgba(158,255,0,1)] text-black px-8 py-3 rounded-md font-semibold hover:bg-lime-200 transition-all"
          >
            Submit
          </button>
        </div>
      </form>
    </section>
  );
}
