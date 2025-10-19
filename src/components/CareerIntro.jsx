import React from "react";

export default function CareerIntro() {
  const features = [
    {
      title: "Innovative and Impactful Projects",
      description:
        "At SquareUp, you'll have the opportunity to work on exciting and impactful projects that shape the digital landscape. From designing intuitive user interfaces to developing robust software solutions, you'll be part of a team that creates products that make a difference.",
    },
    {
      title: "Supportive Environment",
      description:
        "At SquareUp, you'll have the opportunity to work on exciting and impactful projects that shape the digital landscape. From designing intuitive user interfaces to developing robust software solutions, you'll be part of a team that creates products that make a difference.",
    },
    {
      title: "Continuous Learning and Growth",
      description:
        "We believe in investing in our team’s growth and development. We provide opportunities for continuous learning through workshops, mentorship, training programs, and skill-building sessions. You’ll always have the chance to stay agile and stay up-to-date with the latest trends and technologies.",
    },
    {
      title: "Challenging and Rewarding Work",
      description:
        "Our projects are challenging, but the rewards are even greater. We tackle complex problems, make a real impact, and see your ideas come to life.",
    },
  ];

  return (
    <section className="bg-[#0f0f0f] text-white py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-left mb-12">
          <h2 className="text-2xl md:text-3xl font-semibold mb-3">
            Welcome to SquareUp, where talent meets opportunity!
          </h2>
          <p className="text-gray-400 text-sm md:text-base max-w-3xl mb-6 leading-relaxed">
            At SquareUp, we believe that the success of our agency lies in the
            talent, passion, and dedication of our team members. We’re a digital
            product agency that thrives on innovation, creativity, and
            collaboration. If you’re ready to make a difference and contribute
            to cutting-edge projects, we invite you to explore career
            opportunities with us.
          </p>
          <button className="bg-[#1a1a1a] text-white border border-gray-700 px-5 py-2 rounded-md hover:bg-lime-400 hover:text-black transition font-medium">
            Why Work at SquareUp?
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-[#121212] border border-gray-800 rounded-xl p-6 hover:border-lime-400 transition-all duration-300"
            >
              <h3 className="text-[rgba(216,255,153,1)] text-lg font-barlow mb-3">
                {feature.title}
              </h3>

              <p className="text-gray-400 text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
