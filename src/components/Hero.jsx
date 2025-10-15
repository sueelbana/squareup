import React from "react";
import heroBg from "../assets/hero.jpg";

export default function Hero() {
  return (
    <section
      className="relative text-white text-center px-4 sm:px-6 md:px-10 py-24 sm:py-28 md:py-36 min-h-[80vh] md:min-h-[100vh] flex flex-col justify-center"
      style={{
        backgroundImage: `url(${heroBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content Container */}
      <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center">
        {/* Heading */}
        <h1 className="text-2xl sm:text-3xl md:text-5xl font-barlow font-bold mb-10 leading-snug">
          A Digital Product Studio <br className="hidden sm:block" /> that will
          Work
        </h1>

        {/* Buttons Group (For...) */}
        <div className="flex flex-wrap justify-center items-center gap-2 sm:gap-3 mb-10 bg-black/40 backdrop-blur-sm border border-gray-800 px-4 sm:px-6 py-3 sm:py-4 rounded-xl max-w-[90%] sm:max-w-2xl">
          <span className="text-gray-400 text-sm sm:text-base">For</span>

          {[
            "Startups",
            "Enterprise leaders",
            "Media & Publishers",
            "Social Good",
          ].map((item, index, arr) => (
            <React.Fragment key={item}>
              <button className="bg-[#1f1f1f] text-gray-300 px-3 sm:px-4 py-1.5 sm:py-2 rounded-md text-sm sm:text-base hover:bg-lime-500 hover:text-black transition">
                {item}
              </button>

              {/* Commas & "and" */}
              {index < arr.length - 2 && (
                <span className="text-gray-500 text-sm sm:text-base">,</span>
              )}
              {index === arr.length - 2 && (
                <span className="text-gray-500 text-sm sm:text-base">and</span>
              )}
            </React.Fragment>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:space-x-4">
          <button className="w-full sm:w-auto bg-[#1A1A1A] border border-gray-700 px-5 py-2.5 rounded-md text-sm sm:text-base hover:bg-gray-700 transition">
            Our Works
          </button>
          <button className="w-full sm:w-auto bg-lime-400 text-black font-semibold px-5 py-2.5 rounded-md text-sm sm:text-base hover:bg-lime-300 transition">
            Contact Us
          </button>
        </div>
      </div>
    </section>
  );
}
