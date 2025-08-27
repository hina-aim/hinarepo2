"use client";
import React, { useState } from 'react';
import {
  FaWhatsapp,
  FaLinkedinIn,
  FaFacebookF,
  FaInstagram,
  
} from "react-icons/fa";

const CustomFooter = () => {
  return (
    <footer className="mt-14 bg-blue-900 text-white py-10">
      <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-20">
        <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-6">
          {/* Brand Section */}
          <div>
            <h4 className="text-xl font-bold underline underline-offset-4">CONTAPP.com</h4>
            <p className="text-sm mt-1">Smarter Business Networking with CONTAPP</p>
            <div className="mt-4 text-sm">
              <p>Contact: visitcontapp.com</p>
              <p>Phone: +447733003930</p>
              <p className="mt-2">205 Lavender Hill, London SW11 5TB, United Kingdom</p>
            </div>
          </div>

          {/* Social Section */}
          <div>
            <h5 className="font-semibold mb-4 uppercase tracking-wide">Social Networks</h5>
            <div className="flex gap-4 items-center">
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="facebook"
                className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-blue-900 hover:scale-110 hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300"
              >
                <FaFacebookF />
              </a>

              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="whatsapp"
                className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-green-600 hover:scale-110 hover:shadow-lg hover:shadow-green-500/50 transition-all duration-300"
              >
                <FaWhatsapp />
              </a>

              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="instagram"
                className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-pink-600 hover:scale-110 hover:shadow-lg hover:shadow-pink-500/50 transition-all duration-300"
              >
                <FaInstagram />
              </a>

              <a
                href="#/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="linkedin"
                className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-blue-700 hover:scale-110 hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300"
              >
                <FaLinkedinIn />
              </a>
            </div>
          </div>

          {/* Browse Section */}
          <div>
            <h5 className="font-semibold mb-4 uppercase tracking-wide">Browse</h5>
            <p>Making Contacts Easier</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default CustomFooter;