import React from "react";
import { ArrowUpRight } from "lucide-react";

import project1 from "../assets/work1.jpg";
import project2 from "../assets/work2.jpg";
import project3 from "../assets/work3.jpg";
import project4 from "../assets/work4.jpg";
import project5 from "../assets/work5.jpg";
import project6 from "../assets/work6.jpg";
import project7 from "../assets/work7.jpg";
import project8 from "../assets/work8.jpg";
import project9 from "../assets/work9.jpg";
import project10 from "../assets/work10.jpg";

export default function AtSquareUp() {
  const projects = [
    {
      category: "E-Commerce Platform for Fashion Hub",
      title: "Chic Boutique",
      description:
        "We developed a visually stunning and user-friendly e-commerce platform for Chic Boutique, a renowned fashion retailer. The platform featured seamless product browsing, secure payment integration, and personalized recommendations, resulting in increased online sales and customer satisfaction.",
      image: project1,
    },
    {
      category: "Mobile App for Food Delivery Service",
      title: "HungryBites",
      description:
        "HungryBites approached us to create a mobile app that streamlined their food delivery service. The app included features like real-time order tracking, easy menu customization, and secure payment options, resulting in improved customer convenience and operational efficiency.",
      image: project2,
    },
    {
      category: "Booking and Reservation System for Event Management",
      title: "EventMasters",
      description:
        "EventMasters required a comprehensive booking and reservation system for their event management services. We designed a user-friendly platform that allowed seamless event registration, ticketing, and attendee management, resulting in streamlined processes and enhanced customer experiences.",
      image: project3,
    },
    {
      category: "Custom Software for Workflow Automation",
      title: "ProTech Solutions",
      description:
        "HungryBites approached us to create a mobile app that streamlined their food delivery service. The app included features like real-time order tracking, easy menu customization, and secure payment options, resulting in improved customer convenience and operational efficiency.",
      image: project4,
    },
    {
      category: "Real Estate Property Listing Website",
      title: "UrbanHomes",
      description:
        "Dream Homes Realty wanted an intuitive web portal for showcasing their property listings. We created a visually appealing platform with advanced search filters, virtual tours, and a user-friendly interface, enabling potential buyers to find their dream homes easily.",
      image: project5,
    },
    {
      category: "Mobile App for Fitness Tracking",
      title: "FitLife Tracker",
      description:
        "FitLife Tracker approached us to develop a mobile app that tracked fitness activities and provided personalized workout plans. The app included features such as activity tracking, progress monitoring, and social sharing, empowering users to lead healthier lifestyles.",
      image: project6,
    },
    {
      category: "Custom Software for Supply Chain Management",
      title: "Global Logistics Solutions",
      description:
        "Global Logistics Solutions required a custom software solution to streamline their supply chain operations. We developed a scalable system that optimized inventory management, automated order processing, and enhanced logistics tracking, resulting in improved efficiency and reduced costs.",
      image: project7,
    },
    {
      category: "Educational Platform for Online Learning",
      title: "EduConnect",
      description:
        "EduConnect sought an educational platform to facilitate online learning. We developed an interactive platform with virtual classrooms, multimedia content, and student progress tracking, providing a seamless and engaging learning experience for students of all ages.",
      image: project8,
    },
    {
      category: "Mobile App for Travel Planning",
      title: "WanderWise",
      description:
        "WanderWise wanted a mobile app that simplified travel planning and discovery. We developed an app with features like personalized itineraries, destination guides, and integrated booking options, making it easier for travelers to explore new destinations.",
      image: project9,
    },
    {
      category: "Web Application for Customer Relationship Management",
      title: "ConnectCRM",
      description:
        "ConnectCRM needed a web application to manage their customer relationships effectively. We developed a feature-rich CRM platform with lead management, communication tracking, and data analytics, enabling businesses to nurture customer relationships and drive growth.",
      image: project10,
    },
  ];

  return (
    <section className="bg-brand text-white py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-left mb-8">
          <h2 className="text-2xl md:text-3xl font-semibold mb-2">
            At SquareUp
          </h2>
          <p className="text-gray-400 max-w-2xl text-xs md:text-sm leading-relaxed">
            We’ve successfully worked with a diverse range of clients and
            delivered exceptional digital products across industries. <br />
            Here are some examples of our remarkable works:
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-5">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-[#121212] border border-gray-800 rounded-xl overflow-hidden hover:border-lime-400 transition-all duration-300"
            >
              {/* Category above image */}
              <div className="p-3">
                <p className="text-sm text-gray-500 mb-2">{project.category}</p>
              </div>

              {/* Image */}
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-40 object-cover"
              />

              {/* Text content */}
              <div className="p-4">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-base font-semibold">{project.title}</h3>
                  <ArrowUpRight className="w-4 h-4 text-lime-400 hover:text-lime-300 transition-transform duration-300 transform hover:translate-x-1 hover:-translate-y-1" />
                </div>
                <p className="text-gray-400 text-xs leading-relaxed">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
