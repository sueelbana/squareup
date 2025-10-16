import React from "react";
import servicesBg from "../assets/service.jpg";
import DesignServices from "../components/DesignServices";
import EngineeringServices from "../components/EngineeringServices";
import ProjectManagementServices from "../components/ProjectManagementServices";
import StartProject from "../components/StartProject"; // ✅ Imported new component

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-brand text-white flex flex-col items-center">
      {/* Hero Section */}
      <section className="w-full flex flex-col justify-center items-center text-center mt-2 relative">
        <div className="relative w-[98%] md:w-[90%] lg:w-[85%] rounded-2xl overflow-hidden shadow-lg">
          {/* Centered Image */}
          <img
            src={servicesBg}
            alt="Our Services"
            className="w-full h-[220px] md:h-[260px] object-cover"
          />
        </div>
      </section>

      {/* Design Services Section */}
      <div className="w-full mt-12">
        <DesignServices />
      </div>

      {/* Engineering Services Section */}
      <div className="w-full mt-12">
        <EngineeringServices />
      </div>

      {/* Project Management Services Section */}
      <div className="w-full mt-12">
        <ProjectManagementServices />
      </div>

      {/* Start Project Section */}
      <div className="w-full mt-12 mb-20">
        <StartProject />
      </div>
    </div>
  );
}
