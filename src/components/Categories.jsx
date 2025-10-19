import React from "react";

const steps = [
  {
    number: "01",
    title: "Discovery",
    description:
      "We begin by thoroughly understanding your goals, business needs, market audience, and challenges. This stage ensures our strategy and design are built on a solid foundation.",
  },
  {
    number: "02",
    title: "Planning and Strategy",
    description:
      "Based on the gathered information, we create a comprehensive project plan and timeline. We define key deliverables, milestones, and align our strategy with your objectives.",
  },
  {
    number: "03",
    title: "Design",
    description:
      "Our design team crafts visually stunning and user-friendly digital experiences that align with your brand identity. We focus on usability, aesthetics, and seamless interaction.",
  },
  {
    number: "04",
    title: "Development",
    description:
      "Once the design is approved, our developers bring it to life using the latest technologies. We ensure performance, scalability, and maintainability throughout the build.",
  },
  {
    number: "05",
    title: "Testing and Quality Assurance",
    description:
      "We conduct rigorous testing to ensure the digital solution functions flawlessly across all devices and platforms. Our QA team validates every feature and interaction meticulously.",
  },
  {
    number: "06",
    title: "Deployment and Launch",
    description:
      "After final approval, we handle deployment with precision. We ensure everything runs smoothly in the live environment and support your team during the launch phase.",
  },
  {
    number: "07",
    title: "Post-Launch Support",
    description:
      "Our relationship doesn’t end after launch. We provide ongoing support, maintenance, and performance monitoring to ensure long-term success.",
  },
  {
    number: "08",
    title: "Continuous Improvement",
    description:
      "We analyze performance data, gather feedback, and continuously refine your digital product. Our goal is to help your brand grow and adapt to evolving market needs.",
  },
];

export default function Categories() {
  return (
    <div className="min-h-screen bg-brand text-white py-16 px-4 max-w-6xl mx-auto">
      <div className="text-left mb-8">
        <h2 className="text-2xl md:text-3xl font-semibold mb-2">At SquareUp</h2>

        <p className="text-gray-400 max-w-2xl text-xs md:text-sm leading-relaxed">
          We’ve successfully worked with a diverse range of clients and
          delivered exceptional digital products across industries.
        </p>

        <div className="bg-gray-800 rounded-lg p-3 mt-4 inline-block">
          <p className="text-gray-300 text-xs md:text-sm leading-relaxed m-0">
            Here’s an overview of our typical process:
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
        {steps.map((step) => (
          <div
            key={step.number}
            className="bg-brand rounded-xl p-6 text-left border border-neutral-800 hover:border-[rgba(216,255,153,1)] transition-all duration-300"
          >
            <div className="flex items-center space-x-4 mb-2">
              <h3
                className="text-6xl font-bold"
                style={{ color: "rgba(216, 255, 153, 1)" }}
              >
                {step.number}
              </h3>
              <h4 className="text-md text-gray-400">{step.title}</h4>
            </div>

            <p className="text-gray-400 text-sm leading-relaxed">
              {step.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
