import React from "react";
import processBg from "../assets/process.jpg";
import Categories from "../components/Categories";
import ContactForm from "../components/ContactForm";

export default function ProcessPage() {
  return (
    <div className="min-h-screen bg-brand text-white flex flex-col items-center">
      <section className="w-full flex flex-col justify-center items-center text-center mt-2 relative">
        <div className="relative w-[95%] sm:w-[90%] lg:w-[85%] rounded-2xl overflow-hidden shadow-lg">
          <img
            src={processBg}
            alt="Our Work"
            className="w-full h-[160px] sm:h-[200px] md:h-[240px] lg:h-[260px] object-cover"
          />
        </div>
      </section>

      <div className="w-full mt-10">
        <Categories />
      </div>
      <div className="w-full mt-10">
        <ContactForm />
      </div>
    </div>
  );
}
