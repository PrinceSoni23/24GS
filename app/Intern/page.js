"use client";

import React, { useState } from "react";
import Image from "next/image";
import Navbar from "@/src/components/Navbar/Navbar";
import Footer from "@/src/components/Footer/Footer";

const internData = {
  "GS-6250067p-538": {
    picture: "/p1.jpeg",
    name: "Prince Soni",
    email: "princesoni21332@gmail.com",
    "Internship-Duration": "4 Months (15th June – 15th October, 2024) ",
    role: "Full Stack Web Developer , AI-ML (Main Website)",
    project: "TripItToday Website (Property and Hotel Booking Website)", 
    LinkedIn: "https://linkedin.com/in/prince-soni-97163522b",
  },
  "GS-6250067i-539": {
    picture: "/Isha.jpeg",
    name: "Isha Gupta",
    email: "gisha0112@gmail.com",
    "Internship-Duration": "4 Months (15th June – 15th October, 2024) ",
    role: "Full Stack Web Developer , AI-ML (Main Website)",
    project: "TripItToday Website (Property and Hotel Booking Website)",
    LinkedIn: "https://linkedin.com/in/-isha-gupta",
  },
  "GS-6250067s-540": {
    picture: "/sapna.jpeg",
    name: "Sapna Kumari",
    email: "sapnakr120503@gmail.com",
    "Internship-Duration": "4 Months (15th June – 15th October, 2024) ",
    role: "Full Stack Web Developer (CRM Section)",
    project: "TripItToday Website (Property and Hotel Booking Website)",
    LinkedIn: "https://linkedin.com/in/sapna-kumari-a5a253240",
  },
  "GS-6250067g-541": {
    picture: "/GTM.jpg",
    name: "Gautam Arora",
    email: "gautamarora100303@gmail.com",
    "Internship-Duration": "4 Months (15th June – 15th October, 2024) ",
    role: "Full Stack Web Developer (Main Website , CRM Section)",
    project: "TripItToday Website (Property and Hotel Booking Website)",
    LinkedIn: "https://www.linkedin.com/in/gautamarora07",
  },
  "GS-6250067k-542": {
    picture: "/Kamal.jpeg",
    name: "Kamal Nayan Tripathi",
    email: "tripathikamalnayan3@gmail.com",
    "Internship-Duration": "4 Months (15th June – 15th October, 2024) ",
    role: "Backend Development Lead (Main Website , CRM Section)",
    project: "TripItToday Website (Property and Hotel Booking Website)",
    LinkedIn: "https://linkedin.com/in/kamal-nayan-t-864153227",
  },
  "GS-6250067n-543": {
    picture: "/Narayan.jpeg",
    name: "narayan Tripathi",
    email: "Tripathinarayan775@gmail.com",
   "Internship-Duration": "4 Months (15th June – 15th October, 2024) ",
    role: "Full Stack Web Developer (CRM Section)",
    project: "TripItToday Website (Property and Hotel Booking Website)",
    LinkedIn: "https://www.linkedin.com/in/narayan-tripathi-77837222a",
  },
  "GS-6250067Kr-536": {
    picture: "/Krishna.png",
    name: "Krishna Rajput",
    email: "krishnarajput1027@gmail.com",
   "Internship-Duration": "4 Months (12th April – 11th August, 2023) ",
    role: "Software Engineering Intern (Application Development)",
    project: "TripItToday Application (Property and Hotel Booking App)",
    LinkedIn: "linkedin.com/in/krishna-rajput-722491220",
  },
};

const InternProfile = () => {
  const [certNumber, setCertNumber] = useState("");
  const [intern, setIntern] = useState(null);
  const [error, setError] = useState("");

  const handleSearch = () => {
    if (internData[certNumber]) {
      setIntern(internData[certNumber]);
      setError("");
    } else {
      setIntern(null);
      setError("No intern found with this certificate number.");
    }
  };

  return (
    <>
    <Navbar/>
    <div
      className="min-h-screen flex flex-col items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: "url('/bb.jpg')" }}
    >
      {/* Conditional Rendering */}
      {!intern ? (
        // Search Box
        <div className="bg-white bg-opacity-90 p-6 rounded-lg shadow-md max-w-md w-full">
          <h1 className="text-xl font-bold mb-4 text-center text-gray-800">
            Intern Profile Lookup
          </h1>
          <input
            type="text"
            value={certNumber}
            onChange={(e) => setCertNumber(e.target.value)}
            placeholder="Enter Certificate Number"
            className="w-full p-3 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-4 focus:ring-blue-400 mb-4"
          />
          <button
            onClick={handleSearch}
            className="w-full bg-blue-500 text-white py-2 text-sm font-semibold rounded-lg hover:bg-blue-600 transition duration-300"
          >
            Search
          </button>
          {error && (
            <p className="text-red-600 text-center mt-4 text-sm">{error}</p>
          )}
        </div>
      ) : (
        // Result Card
        <div className="w-full max-w-xl mt-10">
          {/* Heading */}
          <h1 className="text-2xl font-bold bg-slate-50 text-gray-800 mb-4 text-center">
            Intern Details
          </h1>

          {/* Result Card */}
          <div className="flex bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-500 hover:scale-105">
            {/* Left: Vertical Image */}
            <div className="w-1/3">
              <Image
                src={intern.picture}
                alt={intern.name}
                width={150}
                height={200}
                className="object-cover h-full w-full"
              />
            </div>

            {/* Right: Details */}
            <div className="w-2/3 p-4">
              <h2 className="text-2xl font-semibold text-gray-800 mb-2">
                {intern.name}
              </h2>
              <p className="text-sm text-gray-600 mb-3">
                <strong>Email:</strong> {intern.email}
              </p>
              <p className="text-sm text-gray-800 mb-2">
                <strong>Role:</strong> {intern.role}
              </p>
              <p className="text-sm text-gray-800 mb-3">
                <strong>Internship-Duration:</strong> {intern["Internship-Duration"]}
              </p>
              <p className="text-sm text-gray-800">
                <strong>Project:</strong> {intern.project}
              </p>
              <p className="text-sm text-gray-800">
                <strong>LinkedIn:</strong> {intern.LinkedIn}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
    <Footer/>
    </>
  );
};

export default InternProfile;
