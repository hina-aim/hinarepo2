import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Hero = () => {
  return (
    <section className="bg-blue-500 text-white py-20">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between">
        <div className="md:w-1/2 md:mr-6 text-center md:text-left mb-8 md:mb-0">
          <h1 className="text-4xl lg:text-5xl font-bold leading-tight">
            Smarter Business Networking with <span className="text-blue-900 font-extrabold">ContApp</span>
          </h1>
          <p className="mt-4 text-lg">
            Organize, remember, and grow your network with ease. Your contacts, supercharged.
          </p>
          <Link href="#">
            <button className="mt-8 bg-white text-blue-600 font-bold py-3 px-6 rounded-lg shadow-lg 
                             hover:bg-blue-600 hover:text-white hover:scale-105 hover:shadow-xl 
                             transition-all duration-300 transform">
              Download Now
            </button>
          </Link>
        </div>
        <div className="md:w-1/2 flex justify-center">
          {/* App Screenshot Placeholder */}
          <div className="bg-white rounded-xl shadow-xl p-4 flex items-center justify-center">
            <Image
              src="/contapp logo.jpg"
              alt="CONTAPP App Mockup"
              width={450}  // Reduced size
              height={350} // Reduced size
              className="rounded-lg shadow-md"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;