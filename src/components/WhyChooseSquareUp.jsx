import React from "react";
import whyChooseImage from "../assets/whychoose.jpg";
import expertiseIcon from "../assets/expertise.jpg";
import clientIcon from "../assets/client.jpg";
import resultsIcon from "../assets/colab.jpg";
import partnershipIcon from "../assets/results.jpg";

export default function WhyChooseSquareUp() {
  const features = [
    {
      icon: expertiseIcon,
      title: "Expertise",
      description:
        "Our team consists of highly skilled professionals who have a deep understanding of the digital landscape. We stay updated with the latest industry trends and best practices to deliver cutting-edge solutions.",
    },
    {
      icon: clientIcon,
      title: "Client-Centric Approach",
      description:
        "We prioritize our clients and their unique needs. We listen to your ideas, challenges, and goals, and tailor our services to meet your specific requirements. Your success is our success.",
    },
    {
      icon: resultsIcon,
      title: "Results-Driven Solutions",
      description:
        "Our primary focus is on delivering results. We combine creativity and technical expertise to create digital products that drive business growth, enhance user experiences, and provide a competitive advantage.",
    },
    {
      icon: partnershipIcon,
      title: "Collaborative Partnership",
      description:
        "We value long-term relationships with our clients. We see ourselves as your digital partner — providing ongoing support, maintenance, and updates to ensure your digital products continue to thrive.",
    },
  ];

  return (
    <section className="bg-brand text-gray-200 py-16 sm:py-20 px-4 sm:px-8 lg:px-16">
      <div className="max-w-6xl mx-auto text-center">
        {/* Responsive header image */}
        <div className="flex justify-center mb-10 sm:mb-16">
          <img
            src={whyChooseImage}
            alt="Why Choose SquareUp"
            className="w-full max-w-5xl h-auto object-cover rounded-lg"
          />
        </div>

        {/* Features grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 sm:gap-10">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-brand border border-neutral-700 hover:border-green-400 p-6 sm:p-8 rounded-2xl text-left hover:bg-[#161616] transition duration-300"
            >
              <div className="mb-5 sm:mb-6 flex items-center justify-start">
                <img
                  src={feature.icon}
                  alt={`${feature.title} Icon`}
                  className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 object-contain"
                />
              </div>
              <h3 className="text-xl sm:text-2xl font-semibold mb-3 text-white">
                {feature.title}
              </h3>
              <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
