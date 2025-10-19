import React from "react";
import servicesHeader from "../assets/servicesHeader.jpg";
import penToolIcon from "../assets/icon.jpg";
import puzzleIcon from "../assets/icon2.jpg";
import briefcaseIcon from "../assets/icon3.jpg";

export default function Services() {
  const services = [
    {
      icon: penToolIcon,
      title: "Design",
      description:
        "At Squarup, our design team is passionate about creating stunning, user-centric designs that captivate your audience and elevate your brand. We believe that great design is not just about aesthetics; it's about creating seamless and intuitive user experiences.",
    },
    {
      icon: puzzleIcon,
      title: "Engineering",
      description:
        "Our engineering team combines technical expertise with a passion for innovation to build robust and scalable digital solutions. We leverage the latest technologies and best practices to deliver high-performance applications tailored to your specific needs.",
    },
    {
      icon: briefcaseIcon,
      title: "Project Management",
      description:
        "Our experienced project management team ensures that your projects are delivered on time, within budget, and according to your specifications. We follow industry-standard methodologies and employ effective communication and collaboration tactics to keep you informed throughout the development process.",
    },
  ];

  return (
    <section className="bg-brand text-white py-16 sm:py-20 px-4 sm:px-8 lg:px-16">
      <div className="flex justify-center mb-12 sm:mb-16">
        <img
          src={servicesHeader}
          alt="Our Services Header"
          className="w-[95%] sm:w-[90%] lg:w-full max-w-6xl h-[160px] sm:h-[200px] md:h-[240px] lg:h-auto rounded-lg object-cover"
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-[#111] border border-gray-800 rounded-xl p-6 sm:p-8 flex flex-col justify-between text-left hover:scale-[1.02] transition-transform duration-300"
          >
            <div>
              <div className="w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center rounded-xl mb-6 sm:mb-8 bg-[#1a1a1a]">
                <img
                  src={service.icon}
                  alt={`${service.title} icon`}
                  className="w-10 h-10 sm:w-12 sm:h-12 object-contain"
                />
              </div>

              <h3 className="text-lg sm:text-xl font-semibold mb-3">
                {service.title}
              </h3>
              <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
                {service.description}
              </p>
            </div>

            <button className="mt-6 sm:mt-8 bg-[#1A1A1A] hover:bg-[#222222] text-gray-300 text-sm sm:text-base py-3 rounded-md border border-gray-700 transition">
              Learn More
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
