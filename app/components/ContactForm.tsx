"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import {
  FaWhatsapp,
  FaLinkedinIn,
  FaFacebookF,
  FaInstagram,
} from "react-icons/fa";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };


  return (
    <section className="bg-gray-50 flex items-center justify-center py-12"> {/* Removed min-h-screen */}
      <div className="container mx-auto px-6 max-w-2xl"> {/* Made form shorter in length */}
        <div className="bg-white p-6 md:p-8 rounded-xl shadow-2xl border-4 border-blue-500"> {/* Made form shorter in height */}

          {/* New Enthusiastic Heading and Line */}
          <div className="text-center mb-8">
            <h2 className="text-3xl font-extrabold text-blue-700 leading-tight mb-2">
              Ready to Revolutionize Your Contacts?
            </h2>
            <p className="text-md text-gray-600">
              Drop us a line and let's start the conversation!
            </p>
            <div className="w-24 h-1 bg-blue-500 mx-auto mt-4 rounded-full"></div>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-gray-800 font-bold mb-2">Your Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-3 focus:ring-blue-300 transition-all duration-300 shadow-sm" // Made height shorter
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-gray-800 font-bold mb-2">Your Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-3 focus:ring-blue-300 transition-all duration-300 shadow-sm" // Made height shorter
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-gray-800 font-bold mb-2">Your Message</label>
              <textarea
                id="message"
                name="message"
                rows={4} // Made height shorter
                value={formData.message}
                onChange={handleChange}
                placeholder="Write your message here..."
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-3 focus:ring-blue-300 transition-all duration-300 shadow-sm" // Made height shorter
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-blue-700 transition-all duration-300 shadow-md hover:shadow-lg focus:outline-none focus:ring-3 focus:ring-blue-300"
            >
              Send Message
            </button>
          </form>

          {/* Social Media Links - Last 4 apps removed */}
          <div className="mt-10 text-center border-t border-gray-200 pt-6">
            <h3 className="text-xl font-bold text-gray-800 mb-5">Connect with us on Social Media</h3>
            <div className="flex justify-center flex-wrap gap-5">
              {/* Facebook Icon */}
              <Link href="#" aria-label="facebook" className="text-blue-900 hover:text-blue-500 transform hover:scale-110 transition-all duration-300">
                <FaFacebookF size={30} />
              </Link>
              {/* WhatsApp Icon */}
              <Link href="#" aria-label="whatsapp" className="text-green-600 hover:text-green-500 transform hover:scale-110 transition-all duration-300">
                <FaWhatsapp size={30} />
              </Link>
              {/* Instagram Icon */}
              <Link href="#" aria-label="instagram" className="text-pink-600 hover:text-pink-500 transform hover:scale-110 transition-all duration-300">
                <FaInstagram size={30} />
              </Link>
              {/* LinkedIn Icon */}
              <Link href="#" aria-label="linkedin" className="text-blue-700 hover:text-blue-500 transform hover:scale-110 transition-all duration-300">
                <FaLinkedinIn size={30} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;