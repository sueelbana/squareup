import React from "react";
import AboutBg from "../assets/about.jpg";
import AboutSquareUp from "../components/AboutSquareUp"; 
import OurStory from "../components/OurStory";
import SquareUpAgency from "../components/SquareUpAgency";

export default function AboutUsPage() {
  return (
    <div className="min-h-screen bg-brand text-white flex flex-col items-center">
      {/* Hero Section */}
      <section className="w-full flex flex-col justify-center items-center text-center mt-2 relative">
        <div className="relative w-[98%] md:w-[90%] lg:w-[85%] rounded-2xl overflow-hidden shadow-lg">
          {/* Centered Image */}
          <img
            src={AboutBg}
            alt="About Us"
            className="w-full h-[200px] md:h-[240px] object-cover"
          />
        </div>
      </section>

      {/* About Section */}
      <AboutSquareUp />
      <OurStory />
      <SquareUpAgency />
    </div>
  );
}
