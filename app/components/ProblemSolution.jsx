import React from 'react';
import { AlertTriangle, CheckCircle, Smartphone, Tag, MapPin, RefreshCw } from 'lucide-react';

const ProblemSolution = () => {
  return (
    <section className="relative py-16 lg:py-24 bg-gradient-to-br from-blue-50 via-white to-cyan-50 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-200/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-cyan-200/30 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 lg:mb-20">
          <div className="inline-flex items-center justify-center px-4 py-2 bg-blue-100 rounded-full mb-6">
            <span className="text-blue-700 font-medium text-sm">The Challenge & Our Solution</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Transforming Business
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">
              Networking Forever
            </span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Say goodbye to outdated business cards and hello to the future of professional networking
          </p>
        </div>

        {/* Problem/Solution Cards */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">
          {/* Problem Card */}
          <div className="group relative flex">
            <div className="absolute -inset-1 bg-gradient-to-r from-red-500/20 to-orange-500/20 rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-1000"></div>
            <div className="relative bg-white rounded-2xl p-8 lg:p-10 shadow-xl border border-gray-100 transition-all duration-500 flex flex-col w-full">
              {/* Problem Header */}
              <div className="flex items-center mb-6">
                <div className="flex-shrink-0 w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center">
                  <AlertTriangle className="w-6 h-6 text-red-600" />
                </div>
                <h3 className="ml-4 text-2xl lg:text-3xl font-bold text-gray-900">
                  The Problem
                </h3>
              </div>

              {/* Problem Points */}
              <div className="space-y-6 flex-grow">
                <div className="flex items-start group/item hover:bg-red-50/50 p-3 -m-3 rounded-xl transition-colors duration-300">
                  <div className="flex-shrink-0 w-8 h-8 bg-red-100 rounded-full flex items-center justify-center mt-1">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  </div>
                  <div className="ml-4">
                    <p className="text-gray-700 font-medium text-lg">
                      Physical business cards get lost, outdated, and are inefficient
                    </p>
                    <p className="text-gray-500 text-sm mt-1">
                      Traditional cards pile up and become clutter
                    </p>
                  </div>
                </div>

                <div className="flex items-start group/item hover:bg-red-50/50 p-3 -m-3 rounded-xl transition-colors duration-300">
                  <div className="flex-shrink-0 w-8 h-8 bg-red-100 rounded-full flex items-center justify-center mt-1">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  </div>
                  <div className="ml-4">
                    <p className="text-gray-700 font-medium text-lg">
                      Manual contact management is painful and disorganized
                    </p>
                    <p className="text-gray-500 text-sm mt-1">
                      Hours wasted typing contact information manually
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Solution Card */}
          <div className="group relative flex">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-1000"></div>
            <div className="relative bg-white rounded-2xl p-8 lg:p-10 shadow-xl border border-gray-100 transition-all duration-500 flex flex-col w-full">
              {/* Solution Header */}
              <div className="flex items-center mb-6">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                  <CheckCircle className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="ml-4 text-2xl lg:text-3xl font-bold text-gray-900">
                  Our Solution
                </h3>
              </div>

              {/* Solution Points */}
              <div className="space-y-6 flex-grow">
                <div className="flex items-start group/item hover:bg-blue-50/50 p-3 -m-3 rounded-xl transition-colors duration-300">
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mt-1">
                    <Smartphone className="w-4 h-4 text-blue-600" />
                  </div>
                  <div className="ml-4">
                    <p className="text-gray-700 font-medium text-lg">
                      Replace cards with instant digital scanning & sharing
                    </p>
                    <p className="text-gray-500 text-sm mt-1">
                      Quick QR codes and NFC technology for seamless exchange
                    </p>
                  </div>
                </div>

                <div className="flex items-start group/item hover:bg-blue-50/50 p-3 -m-3 rounded-xl transition-colors duration-300">
                  <div className="flex-shrink-0 w-8 h-8 bg-cyan-100 rounded-full flex items-center justify-center mt-1">
                    <Tag className="w-4 h-4 text-cyan-600" />
                  </div>
                  <div className="ml-4">
                    <p className="text-gray-700 font-medium text-lg">
                      Organize contacts using tags, notes, and location data
                    </p>
                    <p className="text-gray-500 text-sm mt-1">
                      Smart categorization and searchable contact database
                    </p>
                  </div>
                </div>

                <div className="flex items-start group/item hover:bg-blue-50/50 p-3 -m-3 rounded-xl transition-colors duration-300">
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mt-1">
                    <RefreshCw className="w-4 h-4 text-blue-600" />
                  </div>
                  <div className="ml-4">
                    <p className="text-gray-700 font-medium text-lg">
                      Access anytime, anywhere across devices
                    </p>
                    <p className="text-gray-500 text-sm mt-1">
                      Cloud sync keeps your network updated everywhere
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-2xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 cursor-pointer">
            <span className="mr-2">Experience the Future</span>
            <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center">
              <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSolution;