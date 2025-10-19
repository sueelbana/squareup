import React from "react";

import uxResearchIcon from "../assets/uxResearch.jpg";
import wireframeIcon from "../assets/wireframe.jpg";
import prototypingIcon from "../assets/prototyping.jpg";
import uiDesignIcon from "../assets/uiDesign.jpg";
import interfaceDesignIcon from "../assets/interfaceDesign.jpg";
import illustrationIcon from "../assets/illustration.jpg";
import typographyIcon from "../assets/typography.jpg";
import responsiveIcon from "../assets/responsive.jpg";
import logoDesignIcon from "../assets/logoDesign.jpg";
import brandStrategyIcon from "../assets/brandStrategy.jpg";
import guidelinesIcon from "../assets/guidelines.jpg";
import marketingIcon from "../assets/marketing.jpg";

export default function DesignServices() {
  const sections = [
    {
      title: "User Experience (UX) Design",
      items: [
        { icon: uxResearchIcon, text: "User Research and Persona Development" },
        { icon: wireframeIcon, text: "Information Architecture and Wireframing" },
        { icon: prototypingIcon, text: "Interactive Prototyping and User Testing" },
        { icon: uiDesignIcon, text: "UI Design and Visual Branding" },
      ],
    },
    {
      title: "User Interface (UI) Design",
      items: [
        { icon: interfaceDesignIcon, text: "Intuitive and Visually Appealing Interface Design" },
        { icon: illustrationIcon, text: "Custom Iconography and Illustration" },
        { icon: typographyIcon, text: "Typography and Color Palette Selection" },
        { icon: responsiveIcon, text: "Responsive Design for Various Devices" },
      ],
    },
    {
      title: "Branding and Identity",
      items: [
        { icon: logoDesignIcon, text: "Logo Design and Visual Identity Development" },
        { icon: brandStrategyIcon, text: "Brand Strategy and Positioning" },
        { icon: guidelinesIcon, text: "Brand Guidelines and Style Guides" },
        { icon: marketingIcon, text: "Marketing Collateral Design (Brochures, Business Cards, etc.)" },
      ],
    },
  ];

  return (
    <section className="bg-brand text-white py-20 px-6">
      <div className="max-w-5xl mx-auto mb-12 text-left">
        <h2 className="text-3xl font-semibold mb-4">Design</h2>
        <p className="text-gray-400 text-sm md:text-base leading-relaxed">
          At Squarup, our design team is passionate about creating stunning, user-centric designs that captivate your audience and elevate your brand. 
          We believe that great design is not just about aesthetics; it’s about creating seamless and intuitive user experiences.
        </p>
        <button className="mt-6 bg-[#1A1A1A] hover:bg-[#222222] text-gray-300 text-sm py-2 px-4 rounded-md border border-gray-700 transition">
          Our design services include:
        </button>
      </div>

      <div className="space-y-12 max-w-6xl mx-auto">
        {sections.map((section, idx) => (
          <div key={idx}>
            <h3 className="text-xl font-semibold mb-6">{section.title}</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {section.items.map((item, index) => (
                <div
                  key={index}
                  className="bg-[#121212] border border-gray-800 p-6 rounded-md hover:scale-[1.02] transition-transform"
                >
                  <div className="w-14 h-14 flex items-center justify-center mb-4">
                    <img
                      src={item.icon}
                      alt={item.text}
                      className="w-12 h-12 object-contain"
                    />
                  </div>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
