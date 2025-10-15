import React, { useState } from "react";
import faqHeading from "../assets/faqheading.jpg";

const faqs = [
  {
    id: 1,
    question: "What services does SquareUp provide?",
    answer:
      "SquareUp offers a range of services including design, engineering, and project management. We specialize in user experience design, web development, mobile app development, custom software development, branding, and identity.",
  },
  {
    id: 2,
    question: "How can SquareUp help my business?",
    answer:
      "We help businesses enhance their digital presence by building scalable, user-friendly platforms that drive engagement and performance.",
  },
  {
    id: 3,
    question: "What industries does SquareUp work with?",
    answer:
      "We work with a wide range of industries including tech, hospitality, e-commerce, healthcare, and real estate.",
  },
  {
    id: 4,
    question: "How long does it take to complete a project with SquareUp?",
    answer:
      "Project timelines depend on the complexity and requirements, but we ensure efficient delivery without compromising quality.",
  },
  {
    id: 5,
    question:
      "Do you offer ongoing support and maintenance after the project is completed?",
    answer:
      "Yes, we offer continuous support and maintenance to keep your platforms updated, secure, and optimized.",
  },
  {
    id: 6,
    question: "Can you work with existing design or development frameworks?",
    answer:
      "Absolutely. We can integrate seamlessly with your existing tools, frameworks, and design systems.",
  },
  {
    id: 7,
    question: "How involved will I be in the project development process?",
    answer:
      "We believe in collaboration. You’ll be involved in every step—from concept to final delivery—to ensure your vision is achieved.",
  },
  {
    id: 8,
    question: "Can you help with website or app maintenance and updates?",
    answer:
      "Yes, we provide regular updates and maintenance packages to keep your product performing at its best.",
  },
];

export default function FAQSection() {
  const [openId, setOpenId] = useState(1);

  const leftFaqs = faqs.slice(0, 4);
  const rightFaqs = faqs.slice(4);

  const renderFaqBox = (faq) => (
    <div
      key={faq.id}
      className="p-5 sm:p-6 border border-neutral-700 bg-brand transition-all duration-300 cursor-pointer hover:border-green-400 rounded-2xl mb-6"
      onClick={() => setOpenId(openId === faq.id ? null : faq.id)}
    >
      <div className="flex justify-between items-start">
        <div className="flex items-start sm:items-center gap-4">
          {/* Rounded Number Box */}
          <div
            className={`w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center rounded-md text-sm sm:text-base font-semibold flex-shrink-0 ${
              openId === faq.id
                ? "bg-[rgba(216,255,153,0.2)] text-[rgba(216,255,153,1)] border border-[rgba(216,255,153,1)]"
                : "bg-neutral-700 text-white border border-neutral-600"
            }`}
          >
            {faq.id.toString().padStart(2, "0")}
          </div>

          {/* Question Text */}
          <p
            className={`font-semibold text-base sm:text-lg leading-snug ${
              openId === faq.id
                ? "text-[rgba(216,255,153,1)]"
                : "text-white"
            }`}
          >
            {faq.question}
          </p>
        </div>

        {/* Expand/Collapse Icon */}
        <span
          className={`text-lg sm:text-xl font-bold ${
            openId === faq.id
              ? "text-[rgba(216,255,153,1)]"
              : "text-gray-400"
          }`}
        >
          {openId === faq.id ? "×" : "+"}
        </span>
      </div>

      {/* Answer */}
      {openId === faq.id && (
        <p className="text-gray-400 mt-3 sm:mt-4 text-sm sm:text-base leading-relaxed">
          {faq.answer}
        </p>
      )}
    </div>
  );

  return (
    <section className="bg-brand text-white py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
      {/* Header Image */}
      <div className="text-center max-w-4xl mx-auto mb-10 sm:mb-16">
        <img
          src={faqHeading}
          alt="Frequently Asked Questions"
          className="mx-auto w-full max-w-3xl h-auto rounded-lg object-cover"
        />
      </div>

      {/* Two-column FAQ layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 max-w-6xl mx-auto">
        <div>{leftFaqs.map(renderFaqBox)}</div>
        <div>{rightFaqs.map(renderFaqBox)}</div>
      </div>
    </section>
  );
}
