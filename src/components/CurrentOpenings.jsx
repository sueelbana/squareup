import React from "react";

// ✅ Import icons from assets
import uiIcon from "../assets/1.jpg";
import uxIcon from "../assets/2.jpg";
import designIcon from "../assets/3.jpg";
import frontendIcon from "../assets/4.jpg";
import backendIcon from "../assets/5.jpg";
import fullstackIcon from "../assets/6.jpg";
import businessIcon from "../assets/7.jpg";
import projectIcon from "../assets/8.jpg";
import hrIcon from "../assets/9.jpg";
import qaIcon from "../assets/10.jpg";
import trainerIcon from "../assets/11.jpg";
import manualIcon from "../assets/12.jpg";

export default function CurrentOpenings() {
  const jobCategories = [
    {
      title: "Design Job Openings",
      jobs: [
        {
          icon: uiIcon,
          title: "UI Designer",
          description:
            "Collaborate with cross-functional teams to craft visually appealing and user-friendly interfaces that elevate the user experience.",
        },
        {
          icon: uxIcon,
          title: "UX Designer",
          description:
            "Design seamless and engaging user journeys by researching user needs and translating insights into intuitive digital experiences.",
        },
        {
          icon: designIcon,
          title: "Design Head",
          description:
            "Lead the design team, oversee creative direction, and ensure design consistency across all digital products and marketing materials.",
        },
      ],
    },
    {
      title: "Development Job Openings",
      jobs: [
        {
          icon: frontendIcon,
          title: "Front-End Developer",
          description:
            "Build high-quality, responsive web interfaces using React and modern front-end tools to deliver exceptional user experiences.",
        },
        {
          icon: backendIcon,
          title: "Back-End Developer",
          description:
            "Develop and maintain scalable server-side applications, ensuring data integrity and optimized performance across systems.",
        },
        {
          icon: fullstackIcon,
          title: "Full-Stack Developer",
          description:
            "Handle both front-end and back-end development to deliver fully integrated web solutions aligned with client requirements.",
        },
      ],
    },
    {
      title: "Management Job Openings",
      jobs: [
        {
          icon: businessIcon,
          title: "Business Manager",
          description:
            "Oversee client relations, manage business operations, and ensure the successful delivery of strategic initiatives.",
        },
        {
          icon: projectIcon,
          title: "Project Manager",
          description:
            "Coordinate projects across teams, manage timelines, and deliver projects within scope, budget, and quality standards.",
        },
        {
          icon: hrIcon,
          title: "HR Manager",
          description:
            "Lead recruitment, performance management, and organizational culture initiatives to support company growth.",
        },
      ],
    },
    {
      title: "QA Job Openings",
      jobs: [
        {
          icon: qaIcon,
          title: "QA Tester",
          description:
            "Perform manual and automated testing to ensure product quality and reliability before release.",
        },
        {
          icon: trainerIcon,
          title: "QA Trainer",
          description:
            "Develop QA training programs to educate and upskill testing teams on best practices and tools.",
        },
        {
          icon: manualIcon,
          title: "Manual Tester",
          description:
            "Execute detailed test cases, identify bugs, and collaborate with developers to improve product quality.",
        },
      ],
    },
  ];

  return (
    <section className="w-full bg-[#0f0f0f] text-white py-16 px-6 md:px-12">
      {/* Header */}
      <div className="max-w-6xl mx-auto mb-10">
        <h2 className="text-3xl font-semibold mb-3">Current Openings</h2>
        <p className="text-gray-400 text-sm md:text-base max-w-2xl">
          Explore exciting career opportunities across multiple domains. We’re
          looking for creative minds and problem solvers who can help us shape
          the future of digital innovation.
        </p>
      </div>

      {/* Job Sections */}
      <div className="max-w-6xl mx-auto flex flex-col gap-10">
        {jobCategories.map((category, index) => (
          <div key={index}>
            <h3 className="text-xl mb-5 text-gray-400">{category.title}</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {category.jobs.map((job, idx) => (
                <div
                  key={idx}
                  className="bg-brand border border-gray-800 p-6 rounded-lg flex flex-col items-start hover:border-[rgba(216,255,153,1)] transition"
                >
                  <img
                    src={job.icon}
                    alt={job.title}
                    className="w-12 h-12 mb-4 object-contain"
                  />
                  <h4 className="text-lg font-semibold mb-2">{job.title}</h4>
                  <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                    {job.description}
                  </p>
                  <button className="bg-[#1a1a1a] border border-gray-700 w-full flex justify-center mt-auto text-gray-300 text-sm px-4 py-2 rounded-md hover:bg-[rgba(216,255,153,1)] hover:text-black transition">
                    Apply Now
                  </button>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
