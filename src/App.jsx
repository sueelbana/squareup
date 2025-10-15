import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Companies from "./components/Companies";
import Services from "./components/Services";
import WhyChooseSquareUp from "./components/WhyChooseSquareUp";
import ClientTestimonials from "./components/ClientTestimonials";
import FAQSection from "./components/FAQSection";

function App() {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <Hero />
      <Companies />
      <Services />
      <WhyChooseSquareUp />
      <ClientTestimonials />
      <FAQSection />
    </div>
  );
}

export default App;
