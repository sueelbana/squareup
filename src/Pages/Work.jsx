import React from "react";
import servicesBg from "../assets/work.jpg";
import AtSquareUp from "../components/AtSquareUp";
import StartProject from "../components/StartProject";

export default function WorkPage() {
  return (
    <div className="min-h-screen bg-brand text-white flex flex-col items-center">
      {/* Hero Section */}
      <section className="w-full flex flex-col justify-center items-center text-center mt-2 relative">
        <div className="relative w-[98%] md:w-[90%] lg:w-[85%] rounded-2xl overflow-hidden shadow-lg">
          {/* Centered Image */}
          <img
            src={servicesBg}
            alt="Our Work"
            className="w-full h-[220px] md:h-[260px] object-cover"
          />
        </div>
      </section>

      {/* Work Section */}
      <div className="w-full mt-12 mb-20">
        <AtSquareUp /> {/* ✅ Added here */}
      </div>
      {/* Start Project Section */}
      <div className="w-full mt-12 mb-20">
        <StartProject />
      </div>
    </div>
  );
}
