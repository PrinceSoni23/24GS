// components/ProjectsSection.js
"use client";
import React from 'react';
import { motion } from 'framer-motion';
import Navbar from "@/src/components/Navbar/Navbar";
import Footer from "@/src/components/Footer/Footer";

const projects = [
  {
    title: 'Bulk Text / Whatsapp / Email Marketing',
    category: 'Price Depends On Quantity',
    imageSrc: '/bulk.jpg', // replace with actual image path or import
  },
  {
    title: 'Website Design',
    category: '1,000 – 10,000+ depending on the complexity of the website',
    imageSrc: '/Aura.png', // replace with actual image path or import
  },
  {
    title: 'Virus / Spyware Removal',
    category: '50 – 150 per hour',
    imageSrc: '/virus.jpg', // replace with actual image path or import
  },

  {
    title: 'Business Systems Networking & Integration',
    category: '100 – 300 per hour for consulting and implementation.',
    imageSrc: '/b.avif', // replace with actual image path or import
  },

  {
    title: 'Communication Lines',
    category: '100 – 500 per line installation, plus monthly fees',
    imageSrc: '/link.avif', // replace with actual image path or import
  },

  {
    title: 'Computer and Server Networking',
    category: '100 – 300 per hour for consulting and implementation.',
    imageSrc: '/server.avif', // replace with actual image path or import
  },

  {
    title: 'Daily PC Computer Maintenance/Repair',
    category: '50 – 150 per hour.',
    imageSrc: '/repair.avif', // replace with actual image path or import
  },

  {
    title: 'Data Back-up Services',
    category: '100 – 500 per month depending on storage and frequency.',
    imageSrc: '/backup.avif', // replace with actual image path or import
  },

  {
    title: 'Disaster Recovery Planning',
    category: '1,000 – 5,000 for initial planning, plus ongoing maintenance.',
    imageSrc: '/d.avif', // replace with actual image path or import
  },

  {
    title: 'Help Desk Support',
    category: ' 50 – 150 per hour.',
    imageSrc: '/s.avif', // replace with actual image path or import
  },

  {
    title: 'IT Consultations',
    category: '100 – 300 per hour.',
    imageSrc: '/it.avif', // replace with actual image path or import
  },

  {
    title: 'Microsoft Exchange Set-up/Support',
    category: ' 500 – 2,000+ per month depending on the number of users.',
    imageSrc: '/mi.avif', // replace with actual image path or import
  },

  {
    title: 'Network Monitoring and Reports',
    category: '500 – 2,000+ per month depending on the size of the network.',
    imageSrc: '/net.avif', // replace with actual image path or import
  },

  {
    title: 'Network Security Solutions',
    category: ' 1,000 – 10,000+ per month depending on complexity.',
    imageSrc: '/n.avif', // replace with actual image path or import
  },

  {
    title: 'On-site and Remote Support',
    category: '50 – 150 per hour.',
    imageSrc: '/on.avif', // replace with actual image path or import
  },

  {
    title: 'PC Support',
    category: ' 50 – 150 per hour.',
    imageSrc: '/pc.avif', // replace with actual image path or import
  },

  {
    title: 'Phone Support- iPhone/Android',
    category: '50 – 150 per hour.',
    imageSrc: '/phone.avif', // replace with actual image path or import
  },

  {
    title: 'Phone Systems (Allworx)',
    category: ' 1,000 – 5,000+ for installation, plus ongoing maintenance.',
    imageSrc: '/all.avif', // replace with actual image path or import
  },

  {
    title: 'Product Purchasing Advice',
    category: 'Typically included in consulting fees.',
    imageSrc: '/pp.avif', // replace with actual image path or import
  },

  {
    title: 'Project Installation Services',
    category: '100 – 300 per hour.',
    imageSrc: '/pr.jpg', // replace with actual image path or import
  },

  {
    title: 'Office 365 Conversions',
    category: '500 – 2,000+ depending on the number of users.',
    imageSrc: '/of.avif', // replace with actual image path or import
  },

  {
    title: 'Technology Planning',
    category: '100 – 300 per hour.',
    imageSrc: '/tech.avif', // replace with actual image path or import
  },

  {
    title: 'Third Party Software Installation & Support',
    category: '50 – 150 per hour.',
    imageSrc: '/in.avif', // replace with actual image path or import
  },
];

export default function ProjectsSection() {
  return (
    <>
    <Navbar/>
    <div className="py-16 px-8 bg-gray-100 text-center">
      <h2 className="mt-14 text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
      <p className="text-lg text-gray-500 mb-12">
        We are ready to scale up your business with our great work result.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="  rounded-xl shadow-lg cursor-pointer transition-transform transform hover:scale-105 hover:shadow-2xl"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="bg-gradient-to-r from-purple-400 to-indigo-400 rounded-t-xl overflow-hidden">
              <img
                src={project.imageSrc}
                alt={`${project.title} screenshot`}
                className="w-full h-64 object-cover"
              />
            </div>
            <div className="p-6 bg-white rounded-b-xl">
              <h3 className="text-2xl font-semibold text-gray-900 mb-2">{project.title}</h3>
              <p className="text-lg text-gray-500">{project.category}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
    <Footer/>
    </>
  );
}
