// components/ProjectsSection.js
"use client";
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Navbar from "@/src/components/Navbar/Navbar";
import Footer from "@/src/components/Footer/Footer";

// Currency symbols mapping
const currencySymbols = {
  USD: '$',
  EURO: '€',
  Rupees: '₹',
  Pound: '£',
};

// Conversion rates from USD to other currencies
const conversionRates = {
  USD: 1,
  EURO: 0.85,
  Rupees: 75,
  Pound: 0.76,
};

// Project data array with prices in USD
const projects = [
  { title: 'Bulk Text / Whatsapp / Email Marketing', priceRangeUSD: '100 – 500', imageSrc: '/bulk.jpg' },
  { title: 'Website Design', priceRangeUSD: '1000 – 10000', imageSrc: '/Aura.png' },
  { title: 'Virus / Spyware Removal', priceRangeUSD: '50 – 150', imageSrc: '/virus.jpg' },
  { title: 'Business Systems Networking & Integration', priceRangeUSD: '100 – 300', imageSrc: '/b.avif' },
  { title: 'Communication Lines', priceRangeUSD: '100 – 500', imageSrc: '/link.avif' },
  { title: 'Computer and Server Networking', priceRangeUSD: '100 – 300', imageSrc: '/server.avif' },
  { title: 'Daily PC Computer Maintenance/Repair', priceRangeUSD: '50 – 150', imageSrc: '/repair.avif' },
  { title: 'Data Back-up Services', priceRangeUSD: '100 – 500', imageSrc: '/backup.avif' },
  { title: 'Disaster Recovery Planning', priceRangeUSD: '1000 – 5000', imageSrc: '/d.avif' },
  { title: 'Help Desk Support', priceRangeUSD: '50 – 150', imageSrc: '/s.avif' },
  { title: 'IT Consultations', priceRangeUSD: '100 – 300', imageSrc: '/it.avif' },
  { title: 'Microsoft Exchange Set-up/Support', priceRangeUSD: '500 – 2000', imageSrc: '/mi.avif' },
  { title: 'Network Monitoring and Reports', priceRangeUSD: '500 – 2000', imageSrc: '/net.avif' },
  { title: 'Network Security Solutions', priceRangeUSD: '1000 – 10000', imageSrc: '/n.avif' },
  { title: 'On-site and Remote Support', priceRangeUSD: '50 – 150', imageSrc: '/on.avif' },
  { title: 'PC Support', priceRangeUSD: '50 – 150', imageSrc: '/pc.avif' },
  { title: 'Phone Support - iPhone/Android', priceRangeUSD: '50 – 150', imageSrc: '/phone.avif' },
  { title: 'Phone Systems (Allworx)', priceRangeUSD: '1000 – 5000', imageSrc: '/all.avif' },
  { title: 'Product Purchasing Advice', priceRangeUSD: '0', imageSrc: '/pp.avif' }, // Free
  { title: 'Project Installation Services', priceRangeUSD: '100 – 300', imageSrc: '/pr.jpg' },
  { title: 'Office 365 Conversions', priceRangeUSD: '500 – 2000', imageSrc: '/of.avif' },
  { title: 'Technology Planning', priceRangeUSD: '100 – 300', imageSrc: '/tech.avif' },
  { title: 'Third Party Software Installation & Support', priceRangeUSD: '50 – 150', imageSrc: '/in.avif' },
];

export default function ProjectsSection() {
  const [selectedCurrency, setSelectedCurrency] = useState('USD'); // Initial currency set to USD

  // Function to handle currency selection change
  const handleCurrencyChange = (event) => {
    setSelectedCurrency(event.target.value);
  };

  // Function to convert a single price in USD to the selected currency
  const convertPrice = (priceUSD) => {
    return (priceUSD * conversionRates[selectedCurrency]).toFixed(2);
  };

  // Function to convert a price range string from USD to the selected currency
  const convertPriceRange = (priceRangeUSD) => {
    const [minPrice, maxPrice] = priceRangeUSD.split(' – ').map(price => parseFloat(price.replace(',', '')));
    const minConverted = convertPrice(minPrice);
    const maxConverted = maxPrice ? convertPrice(maxPrice) : null;
    return maxConverted ? `${minConverted} – ${maxConverted}` : minConverted;
  };

  return (
    <>
      <Navbar />
      <div className="py-8 px-8 bg-gray-100 text-center">
        {/* Currency Dropdown */}
        <div className="flex justify-end mb-4 mt-20">
          <label htmlFor="currency" className="text-gray-700 font-semibold mr-2">Select Currency:</label>
          <select
            id="currency"
            value={selectedCurrency}
            onChange={handleCurrencyChange}
            className="p-2 rounded border-gray-300"
          >
            <option value="USD">USD</option>
            <option value="EURO">EURO</option>
            <option value="Rupees">Rupees</option>
            <option value="Pound">Pound</option>
          </select>
        </div>

        <h2 className="mt-10 text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
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
                <p className="text-lg text-gray-500">
                  {currencySymbols[selectedCurrency]} {convertPriceRange(project.priceRangeUSD)}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}
