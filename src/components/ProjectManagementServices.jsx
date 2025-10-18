import React from "react";

import reqIcon from "../assets/req.jpg";
import roadmapIcon from "../assets/roadmap.jpg";
import resourceIcon from "../assets/resource.jpg";
import riskIcon from "../assets/risk.jpg";
import sprintIcon from "../assets/sprint.jpg";
import scrumIcon from "../assets/scrum.jpg";
import progressIcon from "../assets/progress.jpg";
import feedbackIcon from "../assets/feedback.jpg";
import testIcon from "../assets/test.jpg";
import usabilityIcon from "../assets/usability.jpg";
import performanceIcon from "../assets/performance.jpg";
import bugIcon from "../assets/bug.jpg";

export default function ProjectManagementServices() {
  const sections = [
    {
      title: "Project Planning and Scoping",
      items: [
        { icon: reqIcon, title: "Requirements Gathering and Analysis" },
        { icon: roadmapIcon, title: "Project Roadmap and Timeline Development" },
        { icon: resourceIcon, title: "Resource Allocation and Task Assignment" },
        { icon: riskIcon, title: "Risk Assessment and Mitigation Strategies" },
      ],
    },
    {
      title: "Agile Development",
      items: [
        { icon: sprintIcon, title: "Iterative Development and Sprints" },
        { icon: scrumIcon, title: "Scrum or Kanban Methodology Implementation" },
        { icon: progressIcon, title: "Regular Progress Updates and Demos" },
        { icon: feedbackIcon, title: "Continuous Improvement and Feedback Incorporation" },
      ],
    },
    {
      title: "Quality Assurance and Testing",
      items: [
        { icon: testIcon, title: "Test Planning and Execution" },
        { icon: usabilityIcon, title: "Functional and Usability Testing" },
        { icon: performanceIcon, title: "Performance and Security Testing" },
        { icon: bugIcon, title: "Bug Tracking and Issue Resolution" },
      ],
    },
  ];

  return (
    <section className="w-full px-6 md:px-16 py-12 bg-brand text-gray-100">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-10">
          <h2 className="text-3xl md:text-4xl font-semibold mb-3 text-white">
            Project Management
          </h2>
          <p className="text-gray-400 text-sm md:text-base max-w-3xl">
            Our experienced project management team ensures that your projects
            are delivered on time, within budget, and according to your
            specifications. We follow industry-standard methodologies and employ
            effective communication and collaboration tools to keep you informed
            throughout the development process.
          </p>
          <button className="mt-5 px-5 py-2 bg-gray-800 border border-gray-700 text-gray-200 text-sm rounded-md hover:bg-gray-700 transition">
            Our project management services include:
          </button>
        </div>

        {/* Service Sections */}
        {sections.map((section, index) => (
          <div key={index} className="mb-10">
            <h3 className="text-xl md:text-2xl font-semibold mb-6 text-white">
              {section.title}
            </h3>

            {/* ✅ Updated grid: 2 per row on small, 4 per row on large */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {section.items.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-brand border border-gray-800 rounded-xl p-6 flex flex-col items-start text-left hover:bg-gray-800/70 transition"
                >
                  <img
                    src={item.icon}
                    alt={item.title}
                    className="w-12 h-12 mb-4 object-contain"
                  />
                  <h4 className="text-gray-200 text-sm md:text-base font-medium">
                    {item.title}
                  </h4>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
