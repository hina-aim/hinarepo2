"use client";
import React, { useState } from 'react';
import { Check, X, Star, Zap, Crown, Shield, Users, Calendar, Clock, Bell, Brain, Link as LinkIcon, Gift, Rocket, Sparkles } from 'lucide-react';

type Plan = 'free' | 'premium' | 'monthly' | null;

const freeFeatures = [
  { text: "Organize contacts", icon: Users },
  { text: "Add notes and tags", icon: Brain },
  { text: "Basic search and filter", icon: Shield },
  { text: "Connect with WhatsApp", icon: Zap },
  { text: "End-to-end encryption", icon: Shield },
  { text: "Smart Profiles auto-update", icon: LinkIcon },
  { text: "Basic social links", icon: LinkIcon },
  { text: "Manual timeline tracking", icon: Clock },
  { text: "Voice notes storage", icon: Bell },
  { text: "Quick group creation", icon: Users }
];

const premiumFeatures = [
  { text: "AI-powered reminders", icon: Brain },
  { text: "Automatic follow-ups", icon: Calendar },
  { text: "Automatic contact clustering", icon: Users },
  { text: "Team collaboration", icon: Users },
  { text: "Advanced integrations (Slack, PayPal, etc.)", icon: Zap },
  { text: "AI transcription voice → text", icon: Brain },
  { text: "Duplicate contact detection", icon: Shield },
  { text: "Timezone-based reminders", icon: Clock },
  { text: "CRM import/export", icon: Users },
  { text: "Dynamic auto-updating cards", icon: LinkIcon }
];

const monthlyFeatures = [
  { text: "All Premium features", icon: Crown },
  { text: "Priority customer support", icon: Users },
  { text: "Custom branding", icon: Sparkles },
  { text: "Advanced analytics", icon: Calendar },
  { text: "API access", icon: Zap },
  { text: "Dedicated account manager", icon: Gift },
  { text: "White-label solution", icon: Shield },
  { text: "Custom integration development", icon: Rocket },
  { text: "SLA guarantee", icon: Check },
  { text: "Training sessions", icon: Brain }
];

const Pricing = () => {
  const [selectedPlan, setSelectedPlan] = useState<Plan>(null);

  return (
    <section className="py-16 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 min-h-screen flex items-center">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-blue-100 rounded-full mb-6">
            <Crown className="w-4 h-4 text-blue-600 mr-2" />
            <span className="text-blue-700 font-medium text-sm">Pricing Plans</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Choose Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Networking Power</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Start free, upgrade when you're ready. No hidden fees, no surprises.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {/* Free Plan */}
          <div
            className="relative bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200 flex flex-col h-full"
            onClick={() => setSelectedPlan('free')}
          >
            <div className="p-6 flex-1">
              {/* Plan Header */}
              <div className="text-center mb-6">
                <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <Star className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-1">Free Plan</h3>
                <p className="text-gray-600 text-sm mb-3">Perfect for individuals</p>
                <div className="mb-4">
                  <span className="text-4xl font-bold text-blue-600">$0</span>
                  <span className="text-gray-500 ml-1 text-sm">/month</span>
                </div>
                <div className="bg-blue-50 text-blue-700 px-3 py-1 rounded-md text-xs font-medium">
                  Forever free
                </div>
              </div>

              {/* Features List */}
              <ul className="space-y-3 mb-6">
                {freeFeatures.map((feature, index) => {
                  const IconComponent = feature.icon;
                  return (
                    <li key={index} className="flex items-start text-gray-700">
                      <div className="flex-shrink-0 w-5 h-5 bg-green-100 rounded-full flex items-center justify-center mr-2 mt-0.5">
                        <Check className="w-3 h-3 text-green-600" />
                      </div>
                      <div className="flex items-center">
                        <IconComponent className="w-3 h-3 text-blue-500 mr-1 flex-shrink-0" />
                        <span className="text-xs">
                          {feature.text}
                        </span>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>

            {/* CTA Button */}
            <div className="p-6 pt-0">
              <button
                className={`w-full py-3 px-4 rounded-lg font-semibold text-sm transition-colors duration-300 ${
                  selectedPlan === 'free'
                    ? 'bg-blue-600 text-white ring-2 ring-blue-100'
                    : 'bg-blue-600 text-white hover:bg-blue-700'
                }`}
              >
                Get Started for Free
              </button>
            </div>
          </div>

          {/* Premium Plan */}
          <div
            className="relative rounded-2xl shadow-lg overflow-hidden flex flex-col h-full"
            style={{
              background: 'linear-gradient(135deg, #3b82f6, #1e40af, #3730a3)',
            }}
            onClick={() => setSelectedPlan('premium')}
          >
            {/* Popular Badge */}
            <div className="absolute top-4 right-4">
              <div className="bg-yellow-400 text-yellow-900 px-3 py-1 rounded-full text-xs font-semibold shadow-md flex items-center">
                <Crown className="w-3 h-3 mr-1" />
                Popular
              </div>
            </div>

            <div className="p-6 flex-1">
              {/* Plan Header */}
              <div className="text-center mb-6">
                <div className="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <Crown className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-1">Premium Plan</h3>
                <p className="text-blue-100 text-sm mb-3">For power users</p>
                <div className="mb-4">
                  <span className="text-4xl font-bold text-white">$9.99</span>
                  <span className="text-blue-200 ml-1 text-sm">/month</span>
                </div>
                <div className="bg-white/20 text-white px-3 py-1 rounded-md text-xs font-medium">
                  Save 20% annually
                </div>
              </div>

              {/* Features List */}
              <ul className="space-y-3 mb-6">
                {premiumFeatures.map((feature, index) => {
                  const IconComponent = feature.icon;
                  return (
                    <li key={index} className="flex items-start">
                      <div className="flex-shrink-0 w-5 h-5 bg-green-400/30 rounded-full flex items-center justify-center mr-2 mt-0.5">
                        <Check className="w-3 h-3 text-green-300" />
                      </div>
                      <div className="flex items-center">
                        <IconComponent className="w-3 h-3 text-blue-200 mr-1 flex-shrink-0" />
                        <span className="text-xs text-blue-50">
                          {feature.text}
                        </span>
                      </div>
                    </li>
                  );
                })}

                {/* No Ads Feature */}
                <li className="flex items-start pt-3 border-t border-blue-400/30">
                  <div className="flex-shrink-0 w-5 h-5 bg-red-400/30 rounded-full flex items-center justify-center mr-2 mt-0.5">
                    <X className="w-3 h-3 text-red-300" />
                  </div>
                  <span className="text-xs text-blue-50 line-through">
                    No Ads
                  </span>
                </li>
              </ul>
            </div>

            {/* CTA Button */}
            <div className="p-6 pt-0">
              <button
                className={`w-full py-3 px-4 rounded-lg font-semibold text-sm transition-colors duration-300 ${
                  selectedPlan === 'premium'
                    ? 'bg-white text-blue-600 ring-2 ring-blue-200/50'
                    : 'bg-white text-blue-600 hover:bg-blue-50'
                }`}
              >
                Start Premium Trial
              </button>
            </div>
          </div>

          {/* Monthly Plan */}
          <div
            className="relative bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200 flex flex-col h-full"
            onClick={() => setSelectedPlan('monthly')}
          >
            <div className="p-6 flex-1">
              {/* Plan Header */}
              <div className="text-center mb-6">
                <div className="w-14 h-14 bg-purple-100 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <Rocket className="w-6 h-6 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-1">Business Plan</h3>
                <p className="text-gray-600 text-sm mb-3">For teams & businesses</p>
                <div className="mb-4">
                  <span className="text-4xl font-bold text-purple-600">$99</span>
                  <span className="text-gray-500 ml-1 text-sm">/month</span>
                </div>
                <div className="bg-purple-50 text-purple-700 px-3 py-1 rounded-md text-xs font-medium">
                  Enterprise grade
                </div>
              </div>

              {/* Features List */}
              <ul className="space-y-3 mb-6">
                {monthlyFeatures.map((feature, index) => {
                  const IconComponent = feature.icon;
                  return (
                    <li key={index} className="flex items-start text-gray-700">
                      <div className="flex-shrink-0 w-5 h-5 bg-green-100 rounded-full flex items-center justify-center mr-2 mt-0.5">
                        <Check className="w-3 h-3 text-green-600" />
                      </div>
                      <div className="flex items-center">
                        <IconComponent className="w-3 h-3 text-purple-500 mr-1 flex-shrink-0" />
                        <span className="text-xs">
                          {feature.text}
                        </span>
                      </div>
                    </li>
                  );
                })}

                {/* No Ads Feature */}
                <li className="flex items-start pt-3 border-t border-gray-200">
                  <div className="flex-shrink-0 w-5 h-5 bg-red-100 rounded-full flex items-center justify-center mr-2 mt-0.5">
                    <X className="w-3 h-3 text-red-600" />
                  </div>
                  <span className="text-xs text-gray-600 line-through">
                    No Ads
                  </span>
                </li>
              </ul>
            </div>

            {/* CTA Button */}
            <div className="p-6 pt-0">
              <button
                className={`w-full py-3 px-4 rounded-lg font-semibold text-sm transition-colors duration-300 ${
                  selectedPlan === 'monthly'
                    ? 'bg-purple-600 text-white ring-2 ring-purple-100'
                    : 'bg-purple-600 text-white hover:bg-purple-700'
                }`}
              >
                Contact Sales
              </button>
            </div>
          </div>
        </div>

        {/* Additional Info & Comparison */}
        <div className="max-w-4xl mx-auto mt-16">
          <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
            <h3 className="text-xl font-bold text-center text-gray-900 mb-6">
              Still not sure which plan is right for you?
            </h3>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div className="p-4">
                <Shield className="w-6 h-6 text-blue-600 mx-auto mb-2" />
                <h4 className="font-semibold text-gray-900 mb-1 text-sm">Free Forever</h4>
                <p className="text-gray-600 text-xs">No credit card required</p>
              </div>
              <div className="p-4">
                <Calendar className="w-6 h-6 text-blue-600 mx-auto mb-2" />
                <h4 className="font-semibold text-gray-900 mb-1 text-sm">14-Day Trial</h4>
                <p className="text-gray-600 text-xs">Try Premium risk-free</p>
              </div>
              <div className="p-4">
                <Users className="w-6 h-6 text-blue-600 mx-auto mb-2" />
                <h4 className="font-semibold text-gray-900 mb-1 text-sm">Team Discounts</h4>
                <p className="text-gray-600 text-xs">Special pricing for teams</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;