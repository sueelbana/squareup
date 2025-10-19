import React from "react";

export default function OurStory() {
  const storySteps = [
    {
      number: "01",
      title: "Design",
      description:
        "Once upon a time, in a world driven by technology, a group of talented designers came together with a shared vision. Their mission was to design digital experiences that blended art with purpose. Guided by their creative instincts and empathy, they founded what would become SquareUp — a team dedicated to transforming ideas into stunning visuals and user-friendly interfaces that would leave a lasting impression.",
    },
    {
      number: "02",
      title: "Engineering",
      description:
        "Meanwhile, a team of brilliant engineers was busy crafting the backbone of digital innovation. With their expertise, they turned design concepts into reality through clean code and high-performing solutions. The engineering team’s drive for perfection and innovation brought SquareUp’s digital creations to life, ensuring everything ran smoothly and efficiently, while pushing the boundaries of what was possible.",
    },
    {
      number: "03",
      title: "Project Management",
      description:
        "In the midst of the creative and technical minds, a group of project managers recognized the need for structure and coordination. They became the glue that held the vision together, ensuring that timelines, goals, and client expectations were met with precision. Their seamless organization and dedication transformed complex projects into structured success stories, ensuring that every client received the results they deserved — on time, every time.",
    },
    {
      number: "04",
      title: "Collaboration",
      description:
        "At SquareUp, these three departments came together to form a cohesive and unstoppable force. Through close collaboration and respect for each other’s expertise, they created an environment that fostered creativity and innovation. Their teamwork became the cornerstone of every project, driving them to exceed client expectations and continuously deliver exceptional digital products.",
    },
    {
      number: "05",
      title: "Client-Centric Approach",
      description:
        "SquareUp’s success was not solely measured by their technical prowess or creativity, but by the satisfaction of their clients. They placed clients at the heart of everything they did — listening, understanding, and crafting tailored solutions that aligned with each client’s unique vision and goals. This commitment to partnership made SquareUp not just a service provider, but a trusted collaborator, guiding businesses toward sustainable growth.",
    },
    {
      number: "06",
      title: "Driving Success",
      description:
        "With each project, SquareUp’s reputation grew. Their portfolio expanded as more businesses trusted them to elevate their digital presence. What began as a small group of passionate individuals evolved into a global agency known for creativity, precision, and excellence. Every success story became a testament to SquareUp’s unwavering dedication to innovation, quality, and client commitment — helping the world move forward in the digital age.",
    },
  ];

  return (
    <section className="bg-brand text-white py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-left mb-10">
          <h2 className="text-3xl md:text-4xl font-semibold mb-6">
            Our Story
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {storySteps.map((step, index) => (
            <div
              key={index}
              className="bg-[#181818] p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-center space-x-4 mb-2">
                <h3
                  className="text-[rgba(216,255,153,1)] text-6xl font-bold"
                >
                  {step.number}
                </h3>
                <h4 className="text-xl text-[rgba(216,255,153,1)]">
                  {step.title}
                </h4>
              </div>

              <p className="text-gray-400 text-sm leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
