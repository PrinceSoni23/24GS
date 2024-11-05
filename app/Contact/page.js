"use client";

import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import Navbar from "@/src/components/Navbar/Navbar";
import Footer from "@/src/components/Footer/Footer";
import { motion } from 'framer-motion'; // Import motion from framer-motion

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_km1nwps",
        "template_gbdykxs",
        form.current,
        "akqlqQ0V20q2JrMhZ"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Message sent successfully!");
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
          alert("Failed to send message. Please try again.");
        }
      );
  };

  return (
    <>
      <Navbar />
      <div className="flex justify-center items-center min-h-screen bg-gray-50 p-4 sm:p-6">
        <div className="container mx-auto flex flex-col lg:flex-row justify-center items-center mt-24 space-y-6 lg:space-y-0 lg:space-x-12 max-w-5xl">

          {/* Left Section with Image */}
          <div className="flex justify-center lg:flex-1 w-full lg:w-auto mb-6 mt-16 lg:mb-0">
            <img
              src="https://wonderful-kowalevski-8c905c.netlify.app/static/media/contact.ea900458.svg"
              alt="Contact Illustration"
              className="w-4/5 max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl object-cover"
            />
          </div>

          {/* Form Section */}
          <motion.div
            className="bg-white p-6 sm:p-8 md:p-10 rounded-lg shadow-lg w-full lg:w-1/2"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 text-center mb-2">Contact Us</h2>
            <div className="border-b-4 border-purple-500 w-12 sm:w-16 mx-auto mb-6"></div>

            <form ref={form} onSubmit={sendEmail} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Name Field */}
                <input
                  type="text"
                  name="user_name"
                  placeholder="Your Name"
                  className="border border-gray-300 rounded-lg p-3 shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-400 w-full"
                  required
                />

                {/* Email Field */}
                <input
                  type="email"
                  name="user_email"
                  placeholder="Your Email"
                  className="border border-gray-300 rounded-lg p-3 shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-400 w-full"
                  required
                />
              </div>

              {/* Message Field */}
              <textarea
                name="message"
                placeholder="Your Message..."
                className="border border-gray-300 rounded-lg p-3 shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-400 w-full"
                rows="5"
                required
              ></textarea>

              {/* Submit Button */}
              <div className="text-center">
                <button
                  type="submit"
                  className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-6 rounded-full shadow-lg transform hover:scale-105 transition-transform duration-200"
                >
                  Send
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
