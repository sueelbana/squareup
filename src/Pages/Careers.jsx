import React from "react";
import CareerBg from "../assets/career.jpg";
import CareerIntro from "../components/CareerIntro";
import CurrentOpenings from "../components/CurrentOpenings";
import SquareUpAgency from "../components/SquareUpAgency";

export default function CareerPage() {
  return (
    <div className="min-h-screen bg-brand text-white flex flex-col items-center">
      <section className="w-full flex flex-col justify-center items-center text-center mt-2 relative">
        <div className="relative w-[95%] sm:w-[90%] lg:w-[85%] rounded-2xl overflow-hidden shadow-lg">
          <img
            src={CareerBg}
            alt="Career"
            className="w-full h-[160px] sm:h-[200px] md:h-[240px] lg:h-[260px] object-cover"
          />
        </div>
      </section>

      <CareerIntro />
      <CurrentOpenings />
      <SquareUpAgency />
    </div>
  );
}
