// components/ContactUs.js
"use client"
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Navbar from '@/src/components/Navbar/Navbar';
import Footer from '@/src/components/Footer/Footer';

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Replace this with your backend email submission code
    // Example: Send to a backend endpoint or use EmailJS
    const recipientEmail = "princesoni21332@gmail.com"; // Replace with your email address
    console.log(`Send email to ${recipientEmail} with form data:`, formData);

    // Reset form
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <>
    <Navbar/>
    <div className="flex justify-center items-center min-h-screen bg-gray-50 p-6">
      <div className="container mx-auto flex flex-col md:flex-row justify-center items-center space-y-6 md:space-y-0 md:space-x-12 max-w-5xl">
        
        {/* Left Section with Image */}
        <div className="hidden md:flex flex-1 justify-center">
          <img src="https://wonderful-kowalevski-8c905c.netlify.app/static/media/contact.ea900458.svg" alt="Contact Illustration" className="w-full max-w-md object-cover" />
        </div>
        
        {/* Form Section */}
        <motion.div
          className="bg-white p-10 rounded-lg shadow-lg w-full md:w-1/2"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-2">Get In Touch</h2>
          <div className="border-b-4 border-purple-500 w-16 mx-auto mb-6"></div>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Name Field */}
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                className="border border-gray-300 rounded-lg p-3 shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-400"
                required
              />

              {/* Email Field */}
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                className="border border-gray-300 rounded-lg p-3 shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-400"
                required
              />
            </div>

            {/* Subject Field */}
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              value={formData.subject}
              onChange={handleChange}
              className="border border-gray-300 rounded-lg p-3 shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-400 w-full"
              required
            />

            {/* Message Field */}
            <textarea
              name="message"
              placeholder="Your Message..."
              value={formData.message}
              onChange={handleChange}
              rows="5"
              className="border border-gray-300 rounded-lg p-3 shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-400 w-full"
              required
            ></textarea>

            {/* Submit Button */}
            <div className="text-center">
              <button
                type="submit"
                className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-6 rounded-full shadow-lg transform hover:scale-105 transition-transform duration-200"
              >
                Submit Now
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </div>
    <Footer/>
    </>
  );
}
