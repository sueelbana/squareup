import React from "react";

const logos = ["zapier", "spotify", "zoom", "slack", "amazon", "adobe"];

export default function Companies() {
  return (
    <section className="bg-black text-gray-400 text-center py-10 px-6">
      <p className="mb-6 text-sm">Trusted by 250+ Companies</p>
      <div className="flex flex-wrap justify-center items-center gap-8">
        {logos.map((logo) => (
          <img
            key={logo}
            src={`https://dummyimage.com/100x40/fff/000&text=${logo}`}
            alt={logo}
            className="opacity-70 hover:opacity-100 transition w-20 md:w-24"
          />
        ))}
      </div>
    </section>
  );
}
