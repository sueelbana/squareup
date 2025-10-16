import React from "react";
import servicesBg from "../assets/service.jpg";

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-brand text-white flex flex-col items-center">
      {/* Hero Section */}
      <section className="w-full flex flex-col justify-center items-center text-center mt-2 relative">
        <div className="relative w-[98%] md:w-[90%] lg:w-[85%] rounded-2xl overflow-hidden shadow-lg">
          {/* Centered Image */}
          <img
            src={servicesBg}
            alt="Our Services"
            className="w-full h-[220px] md:h-[260px] object-cover"
          />
        </div>
      </section>
    </div>
  );
}
