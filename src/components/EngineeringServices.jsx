import React from "react";
import icon1 from "../assets/eng1.jpg";
import icon2 from "../assets/eng2.jpg";
import icon3 from "../assets/eng3.jpg";
import icon4 from "../assets/eng4.jpg";
import icon5 from "../assets/eng5.jpg";
import icon6 from "../assets/eng6.jpg";
import icon7 from "../assets/eng7.jpg";
import icon8 from "../assets/eng8.jpg";
import icon9 from "../assets/eng9.jpg";
import icon10 from "../assets/eng10.jpg";
import icon11 from "../assets/eng11.jpg";
import icon12 from "../assets/eng12.jpg";

export default function EngineeringServices() {
  const sections = [
    {
      title: "Web Development",
      items: [
        { icon: icon1, text: "Front-End Development (HTML, CSS, JavaScript)" },
        { icon: icon2, text: "Back-End Development (PHP, Python, Ruby)" },
        { icon: icon3, text: "Content Management System (CMS) Development (WordPress, Drupal)" },
        { icon: icon4, text: "E-Commerce Platform Development (Magento, Shopify)" },
      ],
    },
    {
      title: "Mobile App Development",
      items: [
        { icon: icon5, text: "Native iOS and Android App Development" },
        { icon: icon6, text: "Cross-Platform App Development (React Native, Flutter)" },
        { icon: icon7, text: "App Prototyping and UI/UX Design Integration" },
        { icon: icon8, text: "App Testing, Deployment, and Maintenance" },
      ],
    },
    {
      title: "Custom Software Development",
      items: [
        { icon: icon9, text: "Enterprise Software Development" },
        { icon: icon10, text: "Custom Web Application Development" },
        { icon: icon11, text: "Integration with Third-Party APIs and Systems" },
        { icon: icon12, text: "Legacy System Modernization and Migration" },
      ],
    },
  ];

  return (
    <section className="bg-brand text-white py-16 px-6">
      {/* Header */}
      <div className="max-w-5xl mx-auto mb-12">
        <h2 className="text-2xl font-semibold mb-2">Engineering</h2>
        <p className="text-gray-400 text-sm mb-6">
          Our engineering team combines technical expertise with a passion for innovation to build robust and scalable digital solutions. 
          We leverage the latest technologies and best practices to deliver high-performance applications tailored to your specific needs.
        </p>
        <button className="bg-[#1A1A1A] hover:bg-[#222222] border border-gray-700 text-sm text-gray-300 px-4 py-2 rounded-md transition">
          Our engineering services include:
        </button>
      </div>

      {/* Services Sections */}
      <div className="max-w-6xl mx-auto space-y-12">
        {sections.map((section, index) => (
          <div key={index}>
            <h3 className="text-lg font-semibold mb-6">{section.title}</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
              {section.items.map((item, i) => (
                <div
                  key={i}
                  className="bg-[#0E0E0E] border border-gray-800 rounded-md p-6 hover:scale-[1.02] transition-transform"
                >
                  <div className="w-12 h-12 flex items-center justify-center mb-4">
                    <img src={item.icon} alt="service icon" className="w-12 h-12 object-contain" />
                  </div>
                  <p className="text-gray-300 text-sm leading-relaxed">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
