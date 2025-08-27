import Link from 'next/link';
import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-blue-900 text-white shadow-lg"> {/* Changed background and text color */}
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo/Brand Name */}
        <Link href="/" className="text-2xl font-bold lg:text-3xl hover:text-blue-200 transition-colors duration-300">
          CONTAPP
        </Link>
        {/* Navigation Links */}
        <div className="flex space-x-6 items-center">
          <Link
            href="/features"
            className="group relative text-sm font-semibold uppercase tracking-wide transition-colors duration-300 hover:text-white"
          >
            Features
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
      </div>
    </nav>
  );
};

export default Navbar;