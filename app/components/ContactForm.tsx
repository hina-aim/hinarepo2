"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import {
  FaWhatsapp,
  FaLinkedinIn,
  FaFacebookF,
  FaInstagram,
  FaLightbulb,
  FaRocket,
  FaComments,
  FaHandshake
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
    <section className="bg-gradient-to-br from-blue-50 via-white to-cyan-50 py-16">
      <div className="container mx-auto px-6 max-w-6xl">
        {/* Motivational Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Let's Build Something <span className="text-blue-600">Amazing</span> Together
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-10">
            Your ideas matter to us. Whether you have questions, suggestions, or just want to chat about
            revolutionizing contact management - we're all ears!
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            <div className="bg-white p-6 rounded-xl shadow-md border border-blue-100 text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaLightbulb className="text-blue-600 text-2xl" />
              </div>
              <h3 className="font-bold text-lg mb-2 text-black">Share Your Ideas</h3>
              <p className="text-gray-600">Got a feature request? We'd love to hear it!</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md border border-blue-100 text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaRocket className="text-blue-600 text-2xl" />
              </div>
              <h3 className="font-bold text-lg mb-2 text-black">Get Support</h3>
              <p className="text-gray-600">Our team is ready to help you succeed</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md border border-blue-100 text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaComments className="text-blue-600 text-2xl" />
              </div>
              <h3 className="font-bold text-lg mb-2 text-black">Start a Conversation</h3>
              <p className="text-gray-600">Let's discuss how CONTAPP can transform your workflow</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md border border-blue-100 text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaHandshake className="text-blue-600 text-2xl" />
              </div>
              <h3 className="font-bold text-lg mb-2 text-black">Partnerships</h3>
              <p className="text-gray-600">Interested in collaborating? Let's talk!</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 items-start">
          {/* Motivational Text Section */}
          <div className="lg:w-1/2">
            <div className="bg-white p-8 rounded-xl shadow-lg border border-blue-100 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Why Reach Out to Us?</h2>
              <p className="text-gray-700 mb-4">
                At CONTAPP, we believe that the best products are built through collaboration with our users.
                Your feedback shapes our roadmap and helps us create a contact management solution that
                truly meets your needs.
              </p>

              <div className="space-y-4 mt-6">
                <div className="flex items-start">
                  <div className="bg-blue-100 p-2 rounded-full mr-4">
                    <span className="text-blue-600 font-bold">✓</span>
                  </div>
                  <p className="text-gray-700">
                    <strong>Quick Responses:</strong> We typically reply within 24 hours
                  </p>
                </div>

                <div className="flex items-start">
                  <div className="bg-blue-100 p-2 rounded-full mr-4">
                    <span className="text-blue-600 font-bold">✓</span>
                  </div>
                  <p className="text-gray-700">
                    <strong>Expert Advice:</strong> Get personalized recommendations for your use case
                  </p>
                </div>

                <div className="flex items-start">
                  <div className="bg-blue-100 p-2 rounded-full mr-4">
                    <span className="text-blue-600 font-bold">✓</span>
                  </div>
                  <p className="text-gray-700">
                    <strong>No Sales Pressure:</strong> We're here to help, not to hard-sell
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 p-6 rounded-xl border border-blue-200">
              <h3 className="text-xl font-bold text-blue-800 mb-3">What Happens After You Message Us?</h3>
              <ol className="list-decimal pl-5 space-y-2 text-gray-700">
                <li>You'll receive a confirmation email immediately</li>
                <li>Our team reviews your message and routes it to the right expert</li>
                <li>We'll contact you with a thoughtful response or additional questions</li>
                <li>If needed, we'll schedule a call to dive deeper into your needs</li>
              </ol>
            </div>
          </div>

          {/* Contact Form Section */}
          <div className="lg:w-1/2 w-full">
            <div className="bg-white p-6 md:p-8 rounded-xl shadow-2xl border-4 border-blue-500 sticky top-8">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-extrabold text-blue-700 leading-tight mb-2">
                  Ready to Revolutionize Your Contacts?
                </h2>
                <p className="text-md text-gray-600">
                  Drop us a line and let's start the conversation!
                </p>
                <div className="w-24 h-1 bg-blue-500 mx-auto mt-4 rounded-full"></div>
              </div>

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
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-3 focus:ring-blue-300 transition-all duration-300 shadow-sm text-black" // Added text-black here
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
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-3 focus:ring-blue-300 transition-all duration-300 shadow-sm text-black" // Added text-black here
                    required
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-gray-800 font-bold mb-2">Your Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us what's on your mind..."
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-3 focus:ring-blue-300 transition-all duration-300 shadow-sm text-black" // Added text-black here
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

              <div className="mt-10 text-center border-t border-gray-200 pt-6">
                <h3 className="text-xl font-bold text-gray-800 mb-5">Connect with us on Social Media</h3>
                <div className="flex justify-center flex-wrap gap-5">
                  <Link href="#" aria-label="facebook" className="text-blue-900 hover:text-blue-500 transform hover:scale-110 transition-all duration-300">
                    <FaFacebookF size={30} />
                  </Link>
                  <Link href="#" aria-label="whatsapp" className="text-green-600 hover:text-green-500 transform hover:scale-110 transition-all duration-300">
                    <FaWhatsapp size={30} />
                  </Link>
                  <Link href="#" aria-label="instagram" className="text-pink-600 hover:text-pink-500 transform hover:scale-110 transition-all duration-300">
                    <FaInstagram size={30} />
                  </Link>
                  <Link href="#" aria-label="linkedin" className="text-blue-700 hover:text-blue-500 transform hover:scale-110 transition-all duration-300">
                    <FaLinkedinIn size={30} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;