import Navbar from 'app/components/Navbar';
import CustomFooter from 'app/components/CustomFooter';
import Team from 'app/components/Team'; // <-- Add this line
import React from 'react';

const AboutPage = () => {
  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        <div className="container mx-auto px-6 py-12 text-center">
          <h1 className="text-4xl font-bold text-gray-800">About CONTAPP</h1>
          <p className="mt-4 text-lg text-gray-600">
            Helping businesses organize, remember, and grow smarter.
          </p>
        </div>
        <Team /> {/* <-- Add our Team component here */}
      </main>
      <CustomFooter />
    </>
  );
};

export default AboutPage;