import React from "react";
import processBg from "../assets/process.jpg";
import Categories from "../components/Categories";
import ContactForm from "../components/ContactForm";

export default function ProcessPage() {
  return (
    <div className="min-h-screen bg-brand text-white flex flex-col items-center">
      {/* Hero Section */}
      <section className="w-full flex flex-col justify-center items-center text-center mt-2 relative">
        <div className="relative w-[98%] md:w-[90%] lg:w-[85%] rounded-2xl overflow-hidden shadow-lg">
          {/* Centered Image */}
          <img
            src={processBg}
            alt="Our Work"
            className="w-full h-[200px] md:h-[240px] object-cover"
          />
        </div>
      </section>

      {/* Process Section */}
      <div className="w-full mt-10">
        <Categories />
      </div>
          <div className="w-full mt-10">
        <ContactForm />
      </div>
    </div>
  );
}
