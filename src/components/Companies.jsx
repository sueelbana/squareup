import React from "react";
import zapier from "../assets/zapier.jpg";
import spotify from "../assets/spotify.jpg";
import zoom from "../assets/zoom.jpg";
import slack from "../assets/slack.jpg";
import amazon from "../assets/amazon.jpg";
import adobe from "../assets/adobe.jpg";

const Companies = () => {
  const logos = [
    { src: zapier, alt: "Zapier" },
    { src: spotify, alt: "Spotify" },
    { src: zoom, alt: "Zoom" },
    { src: slack, alt: "Slack" },
    { src: amazon, alt: "Amazon" },
    { src: adobe, alt: "Adobe" },
  ];

  return (
    <section className="bg-brand text-gray-300 text-center py-12 px-4 sm:px-6 md:px-10">
      {/* Title inside rounded container */}
      <div className="inline-block bg-[#111111] border border-gray-700 text-gray-400 text-xs sm:text-sm md:text-base px-4 sm:px-6 py-2 rounded-full mb-10">
        Trusted by 250+ Companies
      </div>

      {/* Logos Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-8 sm:gap-10 md:gap-12 items-center justify-items-center max-w-6xl mx-auto">
        {logos.map((logo) => (
          <img
            key={logo.alt}
            src={logo.src}
            alt={logo.alt}
            className="w-20 sm:w-24 md:w-28 lg:w-32 object-contain opacity-80 hover:opacity-100 transition duration-300"
          />
        ))}
      </div>
    </section>
  );
};

export default Companies;
