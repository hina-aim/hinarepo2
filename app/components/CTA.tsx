import React from 'react';
import Link from 'next/link';

const CTA = () => {
  return (
    <section className="bg-blue-500 text-white py-20 text-center">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-4">
          Ready to supercharge your network?
        </h2>
        <p className="text-lg mb-8">
          Download CONTAPP today and start building smarter connections.
        </p>
        <Link href="#">
          <button className="bg-white text-blue-600 font-bold py-3 px-8 rounded-lg shadow-lg 
                             hover:bg-blue-600 hover:text-white hover:scale-105 hover:shadow-xl 
                             transition-all duration-300 transform">
            Download Now
          </button>
        </Link>
      </div>
    </section>
  );
};

export default CTA;