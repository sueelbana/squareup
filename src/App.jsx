import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Hero from "./components/Hero";
import Companies from "./components/Companies";
import Services from "./components/Services"; // 👈 this is your new Services page
import WhyChooseSquareUp from "./components/WhyChooseSquareUp";
import ClientTestimonials from "./components/ClientTestimonials";
import FAQSection from "./components/FAQSection";
import ContactForm from "./components/ContactForm";

// Import the new Services page from pages folder if it's there:
import ServicesPage from "./Pages/Services"; 
import WorkPage from "./Pages/Work";
import ProcessPage from "./Pages/Process";

function App() {
  return (
    <Router>
      <Routes>
        {/* Shared Layout (Navbar + Footer) */}
        <Route element={<Layout />}>
          {/* Home page */}
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

          {/* ✅ New standalone Services page route */}
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/work" element={<WorkPage />} />
          <Route path="/process" element={<ProcessPage />} />

        </Route>
      </Routes>
    </Router>
  );
}

export default App;
