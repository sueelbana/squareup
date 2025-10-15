import React from "react";

export default function Hero() {
  return (
    <section className="bg-brand text-white flex flex-col items-center justify-center text-center px-6 py-16">
      <h1 className="text-3xl md:text-5xl font-barlow font-bold mb-4">
        A Digital Product Studio <br /> that will Work
      </h1>

      <div className="flex flex-wrap justify-center gap-2 mb-8">
        {["Startups", "Enterprise leaders", "Media & Publishers", "Social Good"].map(
          (item) => (
            <button
              key={item}
              className="border border-gray-700 text-gray-300 px-4 py-2 rounded-full text-sm hover:bg-lime-500 hover:text-black transition"
            >
              {item}
            </button>
          )
        )}
      </div>

      <div className="flex space-x-4">
        <button className="bg-gray-800 border border-gray-700 px-5 py-2 rounded-md hover:bg-gray-700 transition">
          Our Works
        </button>
        <button className="bg-button text-black px-5 py-2 rounded-md font-semibold hover:bg-lime-400 transition">
          Contact Us
        </button>
      </div>
    </section>
  );
}
