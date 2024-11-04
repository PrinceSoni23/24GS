// components/ProjectsSection.js
import React from 'react';
import { motion } from 'framer-motion';

const projects = [
  {
    title: 'Bulk Text / Whatsapp / Email Marketing',
    category: 'Depends on Quantity',
    imageSrc: '/bulk.jpg', // replace with actual image path or import
  },
  {
    title: 'Website Design',
    category: '1,000 – 10,000+',
    imageSrc: '/Aura.png', // replace with actual image path or import
  },
  {
    title: 'Virus / Spyware Removal',
    category: 'Mobile Apps',
    imageSrc: '/virus.png', // replace with actual image path or import
  },

  {
    title: 'Business Systems Networking & Integration',
    category: 'Mobile Apps',
    imageSrc: '/b.avif', // replace with actual image path or import
  },

  {
    title: 'Communication Lines',
    category: 'Mobile Apps',
    imageSrc: '/link.avif', // replace with actual image path or import
  },

  {
    title: 'Computer and Server Networking',
    category: 'Mobile Apps',
    imageSrc: '/server.avif', // replace with actual image path or import
  },

  {
    title: 'Daily PC Computer Maintenance/Repair',
    category: 'Mobile Apps',
    imageSrc: '/repair.avif', // replace with actual image path or import
  },

  {
    title: 'Data Back-up Services',
    category: 'Mobile Apps',
    imageSrc: '/backup.avif', // replace with actual image path or import
  },

  {
    title: 'Disaster Recovery Planning',
    category: 'Mobile Apps',
    imageSrc: '/d.avif', // replace with actual image path or import
  },

  {
    title: 'Help Desk Support',
    category: 'Mobile Apps',
    imageSrc: '/s.avif', // replace with actual image path or import
  },

  {
    title: 'IT Consultations',
    category: 'Mobile Apps',
    imageSrc: '/it.avif', // replace with actual image path or import
  },

  {
    title: 'Microsoft Exchange Set-up/Support',
    category: 'Mobile Apps',
    imageSrc: '/mi.avif', // replace with actual image path or import
  },

  {
    title: 'Network Monitoring and Reports',
    category: 'Mobile Apps',
    imageSrc: '/net.avif', // replace with actual image path or import
  },

  {
    title: 'Network Security Solutions',
    category: 'Mobile Apps',
    imageSrc: '/n.avif', // replace with actual image path or import
  },

  {
    title: 'On-site and Remote Support',
    category: 'Mobile Apps',
    imageSrc: '/on.avif', // replace with actual image path or import
  },

  {
    title: 'PC Support',
    category: 'Mobile Apps',
    imageSrc: '/pc.avif', // replace with actual image path or import
  },

  {
    title: 'Phone Support- iPhone/Android',
    category: 'Mobile Apps',
    imageSrc: '/phone.avif', // replace with actual image path or import
  },

  {
    title: 'Phone Systems (Allworx)',
    category: 'Mobile Apps',
    imageSrc: '/all.avif', // replace with actual image path or import
  },

  {
    title: 'Product Purchasing Advice',
    category: 'Mobile Apps',
    imageSrc: '/pp.avif', // replace with actual image path or import
  },

  {
    title: 'Project Installation Services',
    category: 'Mobile Apps',
    imageSrc: '/pr.jpg', // replace with actual image path or import
  },

  {
    title: 'Office 365 Conversions',
    category: 'Mobile Apps',
    imageSrc: '/of.avif', // replace with actual image path or import
  },

  {
    title: 'Technology Planning',
    category: 'Mobile Apps',
    imageSrc: '/tech.avif', // replace with actual image path or import
  },

  {
    title: 'Third Party Software Installation & Support',
    category: 'Mobile Apps',
    imageSrc: '/in.avif', // replace with actual image path or import
  },
];

export default function ProjectsSection() {
  return (
    <div className="py-16 px-8 bg-gray-100 text-center">
      <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
      <p className="text-lg text-gray-500 mb-12">
        We are ready to scale up your business with our great work result.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="rounded-xl shadow-lg cursor-pointer transition-transform transform hover:scale-105 hover:shadow-2xl"
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
  );
}
