"use client";
import React, { useState } from 'react';
import { Check, X } from 'lucide-react';

type Plan = 'free' | 'premium' | null;

const freeFeatures = [
  "Organize contacts",
  "Add notes and tags", 
  "Basic search and filter",
  "Connect with WhatsApp",
  "End-to-end encryption",
  "Smart Profiles auto-update",
  "Basic social links",
  "Manual timeline tracking",
  "Voice notes storage",
  "Quick group creation"
];

const premiumFeatures = [
  "AI-powered reminders",
  "Automatic follow-ups",
  "Automatic contact clustering", 
  "Team collaboration",
  "Advanced integrations (Slack, PayPal, etc.)",
  "AI transcription voice → text",
  "Duplicate contact detection",
  "Timezone-based reminders",
  "CRM import/export",
  "Dynamic auto-updating cards"
];

const Pricing = () => {
  const [hoveredPlan, setHoveredPlan] = useState<Plan>(null);

  return (
    <section className="py-16 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 min-h-screen flex items-center">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Choose the plan that fits your networking needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">

          {/* Free Plan */}
          <div
            className={`relative bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300 transform ${
              hoveredPlan === 'free'
                ? 'scale-105 shadow-2xl'
                : 'hover:scale-[1.02] hover:shadow-xl'
            }`}
            style={{
              background:
                'linear-gradient(white, white) padding-box, linear-gradient(135deg, #3b82f6, #1d4ed8, #1e40af) border-box',
              border: '2px solid transparent',
              borderRadius: '1rem'
            }}
            onMouseEnter={() => setHoveredPlan('free')}
            onMouseLeave={() => setHoveredPlan(null)}
          >
            <div className="p-8">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Free Plan</h3>
                <p className="text-gray-600 mb-4">Perfect for getting started</p>
                <div className="mb-6">
                  <span className="text-5xl font-bold text-blue-600">$0</span>
                  <span className="text-gray-500 ml-1">/month</span>
                </div>
              </div>

              <ul className="space-y-3 mb-8">
                {freeFeatures.map((feature, index) => (
                  <li key={index} className="flex items-center text-gray-700 group">
                    <div className="flex-shrink-0 w-5 h-5 bg-green-100 rounded-full flex items-center justify-center mr-3 group-hover:bg-green-200 transition-colors duration-200">
                      <Check className="w-3 h-3 text-green-600" />
                    </div>
                    <span className="text-sm group-hover:text-gray-900 transition-colors duration-200">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="px-8 pb-8">
              <button
                className={`w-full py-4 px-6 rounded-xl font-semibold transition-all duration-300 transform relative overflow-hidden group ${
                  hoveredPlan === 'free'
                    ? 'bg-blue-600 text-white shadow-lg -translate-y-0.5'
                    : 'bg-blue-600 text-white hover:bg-blue-700 hover:shadow-xl -translate-y-0'
                }`}
              >
                <span className="relative z-10">Get Started for Free</span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </button>
            </div>
          </div>

          {/* Premium Plan */}
          <div
            className={`relative rounded-2xl shadow-lg overflow-hidden transition-all duration-300 transform ${
              hoveredPlan === 'premium'
                ? 'scale-105 shadow-2xl'
                : 'hover:scale-[1.02] hover:shadow-xl'
            }`}
            style={{
              background:
                'linear-gradient(135deg, #3b82f6, #1e40af) padding-box, linear-gradient(135deg, #ffffff, #f8fafc, #e2e8f0) border-box',
              border: '2px solid transparent',
              borderRadius: '1rem',
              color: 'white'
            }}
            onMouseEnter={() => setHoveredPlan('premium')}
            onMouseLeave={() => setHoveredPlan(null)}
          >
            {/* Popular Badge */}
            <div className="absolute top-0 right-6 -translate-y-1/2">
              <div className="bg-yellow-400 text-yellow-900 px-4 py-1 rounded-full text-sm font-semibold shadow-md">
                Most Popular
              </div>
            </div>

            <div className="p-8">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold mb-2">Premium Plan</h3>
                <p className="text-blue-100 mb-4">For power networkers and teams</p>
                <div className="mb-6">
                  <span className="text-5xl font-bold">$9.99</span>
                  <span className="text-blue-200 ml-1">/month</span>
                </div>
              </div>

              <ul className="space-y-3 mb-6">
                {premiumFeatures.map((feature, index) => (
                  <li key={index} className="flex items-center group">
                    <div className="flex-shrink-0 w-5 h-5 bg-green-400/20 rounded-full flex items-center justify-center mr-3 group-hover:bg-green-400/30 transition-all duration-200">
                      <Check className="w-3 h-3 text-green-300" />
                    </div>
                    <span className="text-sm text-blue-50 group-hover:text-white transition-colors duration-200">
                      {feature}
                    </span>
                  </li>
                ))}

                {/* No Ads Feature */}
                <li className="flex items-center group pt-2 border-t border-blue-400/30">
                  <div className="flex-shrink-0 w-5 h-5 bg-red-400/20 rounded-full flex items-center justify-center mr-3 group-hover:bg-red-400/30 transition-all duration-200">
                    <X className="w-3 h-3 text-red-300" />
                  </div>
                  <span className="text-sm text-blue-50 line-through group-hover:text-white transition-colors duration-200">
                    Ads
                  </span>
                </li>
              </ul>

              <div className="px-0 pb-0">
                <button
                  className={`w-full py-4 px-6 rounded-xl font-semibold transition-all duration-300 transform relative overflow-hidden group ${
                    hoveredPlan === 'premium'
                      ? 'bg-white text-blue-600 shadow-lg -translate-y-0.5'
                      : 'bg-white text-blue-600 hover:bg-blue-50 hover:shadow-xl -translate-y-0'
                  }`}
                >
                  <span className="relative z-10">Go Premium</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-indigo-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Info */}
        <div className="text-center mt-12">
          <p className="text-gray-600 text-sm">
            All plans include 24/7 customer support • No setup fees • Cancel anytime
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;

