import React from "react";
import { ArrowRight } from "lucide-react";
import logo from "../assets/logo2.jpg";

export default function SquareUpAgency() {
  return (
    <section className="bg-[#0f0f0f] text-white py-14 px-6 flex flex-col items-center">
      <div className="max-w-5xl w-full space-y-8">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row items-center md:items-center justify-center md:justify-start text-center md:text-left gap-6">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center justify-center w-16 h-16 mx-auto md:mx-0">
            <img
              src={logo}
              alt="SquareUp Logo"
              className="w-24 h-24 object-contain"
            />
          </div>

          {/* Text Content */}
          <div>
            <h2 className="text-xl md:text-2xl text-gray-400 mb-2">
              Today, SquareUp Continues to Thrive as a Leading Digital Product
              Agency.....
            </h2>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xl">
              Combining the power of design, engineering, and project management
              to create transformative digital experiences. They invite you to
              join them on their journey and discover how they can help bring
              your digital ideas to life.
            </p>
          </div>
        </div>

        {/* Bottom Call to Action */}
        <div className="bg-[#1a1a1a] rounded-xl p-4 flex flex-col md:flex-row items-center justify-between border border-gray-800">
          <div className="flex flex-col md:flex-row items-center gap-3 w-full md:mr-4">
            <span className="text-gray-400 text-sm whitespace-nowrap">
              Welcome to SquareUp
            </span>

            {/* Gray Box for the Sentence */}
            <div className="bg-[#2a2a2a] text-gray-300 text-sm px-4 py-2 rounded-md flex-1 text-center md:text-left">
              Where collaboration, Expertise, and Client-Centricity Intersect to
              Shape the Future of Digital Innovation.
            </div>
          </div>

          <button className="bg-[rgba(158,255,0,1)] text-black font-medium px-3.5 py-2 text-sm rounded-md hover:bg-lime-300 transition flex items-center gap-1 whitespace-nowrap mt-3 md:mt-0 md:ml-4">
            Start Project
          </button>
        </div>
      </div>
    </section>
  );
}
