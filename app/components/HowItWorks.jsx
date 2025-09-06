import React from 'react';
import { QrCode, UserCheck, Tag, ArrowRight, Zap, Shield, Globe, Users, BookOpen } from 'lucide-react';

const HowItWorks = () => {
    return (
        <section className="relative py-24 bg-gradient-to-br from-slate-50 via-blue-50/50 to-white overflow-hidden">
            {/* Subtle background pattern */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.05),transparent_50%)] pointer-events-none"></div>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(14,165,233,0.05),transparent_50%)] pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-20">
                    <div className="inline-flex items-center px-4 py-2 bg-blue-100/80 backdrop-blur-sm rounded-full mb-6">
                        <Zap className="w-4 h-4 text-blue-600 mr-2" />
                        <span className="text-blue-700 font-medium text-sm">How It Works</span>
                    </div>
                    <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                        Three Simple Steps to
                        <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">
                            Digital Networking
                        </span>
                    </h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Experience seamless contact sharing in seconds, not minutes
                    </p>
                </div>

                {/* Process Steps */}
                <div className="relative">
                    
                    <div className="hidden lg:block absolute top-32 left-1/2 w-full max-w-4xl transform -translate-x-1/2">
                        <svg width="100%" height="120" viewBox="0 0 800 120" className="overflow-visible">
                            <defs>
                                <linearGradient id="flowGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                    <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.6" />
                                    <stop offset="50%" stopColor="#06b6d4" stopOpacity="0.8" />
                                    <stop offset="100%" stopColor="#6366f1" stopOpacity="0.6" />
                                </linearGradient>
                            </defs>
                            <path
                                d="M 50 60 Q 200 20, 350 60 T 750 60"
                                stroke="url(#flowGradient)"
                                strokeWidth="3"
                                fill="none"
                                strokeDasharray="8,4"
                                className="animate-pulse"
                            />
                        </svg>
                    </div>

                    <div className="grid lg:grid-cols-3 gap-12 lg:gap-8 relative z-10">
                        {/* Step 1 */}
                        <div className="group text-center">
                            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100/50 group-hover:shadow-xl transition-all duration-300">
                                {/* Icon container inside the card */}
                                <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-3xl flex items-center justify-center mx-auto shadow-2xl group-hover:shadow-blue-500/25 transition-all duration-500 mb-6">
                                    <QrCode className="w-10 h-10 text-white" />
                                </div>

                                <div className="mb-4">
                                    <div className="text-blue-600 text-sm font-semibold uppercase tracking-wider mb-2">
                                        Quick Access
                                    </div>
                                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                                        Scan QR & Login
                                    </h3>
                                </div>

                                <p className="text-gray-600 leading-relaxed mb-6">
                                    Simply scan the QR code with your phone camera or tap your NFC-enabled device. Instantly access the contact profile with secure login authentication.
                                </p>

                                <div className="flex items-center justify-center p-3 bg-blue-50 rounded-xl">
                                    <Shield className="w-4 h-4 text-blue-600 mr-2" />
                                    <span className="text-blue-700 text-sm font-medium">
                                        No app downloads required
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* Step 2 */}
                        <div className="group text-center">
                            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100/50 group-hover:shadow-xl transition-all duration-300">
                                {/* Icon container inside the card */}
                                <div className="w-20 h-20 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-3xl flex items-center justify-center mx-auto shadow-2xl group-hover:shadow-cyan-500/25 transition-all duration-500 mb-6">
                                    <UserCheck className="w-10 h-10 text-white" />
                                </div>

                                <div className="mb-4">
                                    <div className="text-cyan-600 text-sm font-semibold uppercase tracking-wider mb-2">
                                        Full Profile View
                                    </div>
                                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                                        Contact Details Appear
                                    </h3>
                                </div>

                                <p className="text-gray-600 leading-relaxed mb-6">
                                    Complete contact information appears instantly with professional details, social links, and business information in a beautiful, organized layout.
                                </p>

                                <div className="flex items-center justify-center p-3 bg-cyan-50 rounded-xl">
                                    <Globe className="w-4 h-4 text-cyan-600 mr-2" />
                                    <span className="text-cyan-700 text-sm font-medium">
                                        View everything in seconds
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* Step 3 */}
                        <div className="group text-center">
                            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100/50 group-hover:shadow-xl transition-all duration-300">
                                {/* Icon container inside the card */}
                                <div className="w-20 h-20 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-3xl flex items-center justify-center mx-auto shadow-2xl group-hover:shadow-indigo-500/25 transition-all duration-500 mb-6">
                                    <Tag className="w-10 h-10 text-white" />
                                </div>

                                <div className="mb-4">
                                    <div className="text-indigo-600 text-sm font-semibold uppercase tracking-wider mb-2">
                                        Smart Organization
                                    </div>
                                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                                        Add Tags & Notes
                                    </h3>
                                </div>

                                <p className="text-gray-600 leading-relaxed mb-6">
                                    Instantly add custom tags, notes, and location data for easy retrieval. Create your own organizational system with powerful search capabilities.
                                </p>

                                <div className="flex items-center justify-center p-3 bg-indigo-50 rounded-xl">
                                    <Tag className="w-4 h-4 text-indigo-600 mr-2" />
                                    <span className="text-indigo-700 text-sm font-medium">
                                        Unlimited custom tags
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            
        

        {/* Bottom Stats */ }
    <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
        <div className="text-center group cursor-pointer">
            <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <QrCode className="w-8 h-8 text-blue-600" />
            </div>
            <div className="text-3xl font-bold text-gray-900 mb-1">3sec</div>
            <div className="text-gray-600 text-sm">Average Scan Time</div>
        </div>

        <div className="text-center group cursor-pointer">
            <div className="w-16 h-16 bg-cyan-100 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Users className="w-8 h-8 text-cyan-600" />
            </div>
            <div className="text-3xl font-bold text-gray-900 mb-1">100%</div>
            <div className="text-gray-600 text-sm">Contact Accuracy</div>
        </div>

        <div className="text-center group cursor-pointer">
            <div className="w-16 h-16 bg-indigo-100 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Tag className="w-8 h-8 text-indigo-600" />
            </div>
            <div className="text-3xl font-bold text-gray-900 mb-1">∞</div>
            <div className="text-gray-600 text-sm">Custom Tags</div>
        </div>

        <div className="text-center group cursor-pointer">
            <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <BookOpen className="w-8 h-8 text-purple-600" />
            </div>
            <div className="text-3xl font-bold text-gray-900 mb-1">24/7</div>
            <div className="text-gray-600 text-sm">Cloud Access</div>
        </div>
    </div>

    {/* Bottom CTA */ }
    <div className="mt-20 text-center">
        <div className="inline-flex items-center group cursor-pointer">
            <div className="bg-gradient-to-r from-blue-600 via-cyan-600 to-indigo-600 text-white px-8 py-4 rounded-2xl font-semibold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 group-hover:scale-105">
                <span className="mr-3">See It In Action</span>
                <ArrowRight className="inline w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </div>
        </div>
        <p className="text-gray-500 text-sm mt-4">Join thousands who've revolutionized their networking</p>
    </div>
      </div >
    </section >
  );
};

export default HowItWorks;