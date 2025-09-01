"use client";

import Link from 'next/link';
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-blue-900 text-white shadow-lg">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo/Brand Name */}
        <Link href="/" className="text-2xl font-bold lg:text-3xl hover:text-blue-200 transition-colors duration-300">
          CONTAPP
        </Link>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex space-x-6 items-center">
          <Link
            href="/Planning"
            className="group relative text-sm font-semibold uppercase tracking-wide transition-colors duration-300 hover:text-white"
          >
            Planning
            <span className="absolute left-0 bottom-0 w-full h-0.5 bg-white transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
          </Link>
          <Link
            href="/about"
            className="group relative text-sm font-semibold uppercase tracking-wide transition-colors duration-300 hover:text-white"
          >
            About
            <span className="absolute left-0 bottom-0 w-full h-0.5 bg-white transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
          </Link>
          <Link
            href="/contact"
            className="group relative text-sm font-semibold uppercase tracking-wide transition-colors duration-300 hover:text-white"
          >
            Contact
            <span className="absolute left-0 bottom-0 w-full h-0.5 bg-white transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 rounded-md hover:bg-blue-800 transition-colors duration-300"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-blue-800">
          <div className="container mx-auto px-6 py-4 flex flex-col space-y-4">
            <Link
              href="/Planning"
              className="text-sm font-semibold uppercase tracking-wide py-2 px-4 hover:bg-blue-700 rounded-md transition-colors duration-300"
              onClick={() => setIsOpen(false)}
            >
              Planning
            </Link>
            <Link
              href="/about"
              className="text-sm font-semibold uppercase tracking-wide py-2 px-4 hover:bg-blue-700 rounded-md transition-colors duration-300"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
            <Link
              href="/contact"
              className="text-sm font-semibold uppercase tracking-wide py-2 px-4 hover:bg-blue-700 rounded-md transition-colors duration-300"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;