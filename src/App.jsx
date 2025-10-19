import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Hero from "./components/Hero";
import Companies from "./components/Companies";
import Services from "./components/Services";
import WhyChooseSquareUp from "./components/WhyChooseSquareUp";
import ClientTestimonials from "./components/ClientTestimonials";
import FAQSection from "./components/FAQSection";
import ContactForm from "./components/ContactForm";
import ServicesPage from "./Pages/Services";
import WorkPage from "./Pages/Work";
import ProcessPage from "./Pages/Process";
import AboutUsPage from "./Pages/AboutUs";
import CareerPage from "./Pages/Careers";
import ContactUs from "./Pages/ContactUs";

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <Companies />
                <Services />
                <WhyChooseSquareUp />
                <ClientTestimonials />
                <FAQSection />
                <ContactForm />
              </>
            }
          />

          <Route path="/services" element={<ServicesPage />} />
          <Route path="/work" element={<WorkPage />} />
          <Route path="/process" element={<ProcessPage />} />
          <Route path="/about" element={<AboutUsPage />} />
          <Route path="/careers" element={<CareerPage />} />
          <Route path="/contact" element={<ContactUs />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
