import React from "react";

import headingImg from "../assets/heading.jpg";
import client1 from "../assets/c1.jpg";
import client2 from "../assets/c2.jpg";
import client3 from "../assets/c3.jpg";
import client4 from "../assets/c4.jpg";
import client5 from "../assets/c5.jpg";
import client6 from "../assets/c6.jpg";

const testimonials = [
  {
    name: "John Smith",
    role: "CEO of DigiCreators",
    text: "SquareUp has been instrumental in transforming our online presence.",
    subtext:
      "Their team impressed us with innovative ideas and a deep understanding of a visually engaging and user-friendly concept. Our website now looks stunning and functional.",
    image: client1,
    link: "#",
  },
  {
    name: "Sarah Johnson",
    role: "Founder of HungryBites",
    text: "Working with SquareUp was a breeze.",
    subtext:
      "Their team understood our vision and brought it to life seamlessly. We couldn’t have asked for a smoother process — creative, professional, and efficient.",
    image: client2,
    link: "#",
  },
  {
    name: "Mark Thompson",
    role: "CEO of EventMaster",
    text: "SquareUp developed a comprehensive booking system for our events.",
    subtext:
      "The platform made event management effortless. We appreciate their attention to detail and the robust features they implemented.",
    image: client3,
    link: "#",
  },
  {
    name: "Laura Adams",
    role: "CEO of ProTech Solutions",
    text: "ProTech Solutions turned to SquareUp to automate our workflow.",
    subtext:
      "The system they built is reliable, scalable, and efficient. Their professionalism and commitment to results were exceptional.",
    image: client4,
    link: "#",
  },
  {
    name: "Michael Anderson",
    role: "CEO of RealEstatePro",
    text: "SquareUp designed a captivating web portal for our listings.",
    subtext:
      "The new site showcases our properties beautifully while improving navigation and usability. It’s exactly what we envisioned.",
    image: client5,
    link: "#",
  },
  {
    name: "Emily Turner",
    role: "CEO of FitLife Tracker",
    text: "FitLife Tracker wanted a mobile app that tracked fitness activities.",
    subtext:
      "SquareUp exceeded our expectations by delivering a sleek, intuitive, and powerful app that users love. We’re extremely satisfied.",
    image: client6,
    link: "#",
  },
];

export default function ClientTestimonials() {
  return (
    <section className="bg-brand text-white py-16 sm:py-20 px-4 sm:px-6 md:px-10">
      {/* Header */}
      <div className="text-center max-w-5xl mx-auto mb-10 sm:mb-14">
        <img
          src={headingImg}
          alt="What our Clients say About us"
          className="mx-auto w-full max-w-4xl h-auto object-contain"
        />
      </div>

      {/* Testimonials Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-7xl mx-auto">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="bg-[#101010] border border-neutral-700 p-6 sm:p-8 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300"
          >
            {/* Main text with your color */}
            <p className="font-medium mb-3 text-[rgba(216,255,153,1)] text-base sm:text-lg leading-snug">
              {testimonial.text}
            </p>

            {/* Subtext */}
            <p className="text-gray-400 mb-6 text-sm sm:text-base leading-relaxed">
              {testimonial.subtext}
            </p>

            {/* Footer */}
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
              <div className="flex items-center gap-3">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 sm:w-14 sm:h-14 rounded-md object-cover border border-gray-600"
                />
                <div>
                  <p className="font-semibold text-white text-sm sm:text-base">
                    {testimonial.name}
                  </p>
                  <p className="text-xs sm:text-sm text-gray-400">
                    {testimonial.role}
                  </p>
                </div>
              </div>

              <a
                href={testimonial.link}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto text-center px-4 py-2 border border-gray-500 rounded-lg text-sm text-gray-300 hover:bg-lime-500 hover:text-black transition-all duration-300"
              >
                Open Website
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
