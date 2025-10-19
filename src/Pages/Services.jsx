import React from "react";
import servicesBg from "../assets/service.jpg";
import DesignServices from "../components/DesignServices";
import EngineeringServices from "../components/EngineeringServices";
import ProjectManagementServices from "../components/ProjectManagementServices";
import StartProject from "../components/StartProject";

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-brand text-white flex flex-col items-center">
      <section className="w-full flex flex-col justify-center items-center text-center mt-2 relative">
        <div className="relative w-[95%] sm:w-[90%] lg:w-[85%] rounded-2xl overflow-hidden shadow-lg">
          <img
            src={servicesBg}
            alt="Our Services"
            className="w-full h-[160px] sm:h-[200px] md:h-[240px] lg:h-[260px] object-cover"
          />
        </div>
      </section>

      <div className="w-full mt-12">
        <DesignServices />
        <EngineeringServices />
        <ProjectManagementServices />
        <StartProject />
      </div>
    </div>
  );
}
