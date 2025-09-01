"use client";
import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const QA = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleQuestion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "What is CONTAPP?",
      answer: "CONTAPP is a next-generation contact management app that transforms your phonebook into a smart, contextual, and collaborative business tool. It helps you organize calls, remember contact history, manage relationships, and improve networking efficiency."
    },
    {
      question: "Who is CONTAPP designed for?",
      answer: "CONTAPP is built for business fellows, entrepreneurs, consultants, and teams who frequently manage client, vendor, and networking relationships. It's ideal for professionals who need more than just a basic phonebook."
    },
    {
      question: "How is CONTAPP different from the default phonebook apps?",
      answer: "Unlike standard contact apps, CONTAPP provides: • Context (tags, notes, timelines) • AI-powered reminders • Voice-to-text transcription • Collaboration features • Integrations with tools like WhatsApp, LinkedIn, and Google Calendar"
    },
    {
      question: "What features are included in the Free Plan?",
      answer: "The Free Plan offers: • Smart profile cards with photo & designation • Tags, notes, and call/message timelines • Voice note storage (audio only) • Contact filters by tags • Shared contact books (up to 3 team members) • Basic communication hub (calls, SMS, WhatsApp, email)"
    },
    {
      question: "What extra benefits do I get with the Premium Plan?",
      answer: "Premium ($9/month or $99/year) unlocks: • AI transcription of voice notes • AI-generated call notes and nudges • Contact clustering (Clients, Vendors, Family, Work) • Smart timezone reminders & follow-ups • Unlimited shared contact books • CRM import/export • Advanced integrations (Slack, Telegram, LinkedIn, Payments) • Auto-updated dynamic 'Add Me' card"
    },
    {
      question: "Can I collaborate with my team?",
      answer: "Yes. With CONTAPP, you can share contact books with your colleagues. Free users can share with up to 3 team members, while Premium allows unlimited collaboration with notes, tasks, and CRM syncing."
    },
    {
      question: "Does CONTAPP integrate with my existing tools?",
      answer: "Absolutely. CONTAPP integrates with: • WhatsApp • Telegram • Slack • LinkedIn • Google Calendar • Payment platforms like PayPal, JazzCash, and EasyPaisa"
    },
    {
      question: "How does CONTAPP ensure data security?",
      answer: "Your contacts, notes, and transcriptions are protected with end-to-end encryption. CONTAPP prioritizes business privacy and ensures that only you and your team have access to your data."
    },
    {
      question: "Will CONTAPP slow down if I have thousands of contacts?",
      answer: "No. CONTAPP is optimized for performance and can handle more than 10,000 contacts with fast search and organization."
    },
    {
      question: "Can I access CONTAPP offline?",
      answer: "Yes. You can access your stored contacts and notes offline. AI features and cloud-based syncing will require an internet connection."
    },
    {
      question: "Can CONTAPP replace a CRM?",
      answer: "While not a full-scale enterprise CRM, CONTAPP offers lightweight CRM-like features such as notes, tasks, reminders, and team sharing. It's a cost-effective and simpler alternative for small businesses and SMEs."
    },
    {
      question: "What devices support CONTAPP?",
      answer: "CONTAPP will be available on iOS and Android smartphones. Future versions will expand to web and desktop platforms."
    },
    {
      question: "What is the 'Add Me' card?",
      answer: "The 'Add Me' card is your digital business card. Free users get a static link, while Premium users get a dynamic version that auto-updates whenever they change their profile details."
    },
    {
      question: "How do AI-powered reminders work?",
      answer: "CONTAPP's AI nudges you with smart reminders, such as: • Suggesting follow-ups if you haven't spoken to a client recently • Reminding you to call someone based on their local timezone • Syncing birthdays and events from your Google Calendar"
    },
    {
      question: "Is there a free trial for Premium?",
      answer: "Yes. New users can try CONTAPP Premium free for 14 days before deciding to upgrade."
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600">
            Everything you need to know about CONTAPP
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
              <button
                className="flex justify-between items-center w-full p-6 text-left bg-white hover:bg-blue-50 transition-colors duration-200"
                onClick={() => toggleQuestion(index)}
              >
                <span className="text-lg font-semibold text-gray-900">{faq.question}</span>
                {activeIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-blue-600 flex-shrink-0" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-blue-600 flex-shrink-0" />
                )}
              </button>
              
              {activeIndex === index && (
                <div className="p-6 bg-white border-t border-gray-100">
                  <div className="text-gray-700 leading-relaxed">
                    {faq.answer.split('•').map((point, i) => (
                      i === 0 ? (
                        <p key={i} className="mb-3">{point}</p>
                      ) : (
                        point.trim() && (
                          <div key={i} className="flex items-start mb-2">
                            <span className="text-blue-600 mr-2 mt-1">•</span>
                            <span>{point.trim()}</span>
                          </div>
                        )
                      )
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-6">
            Still have questions? We're here to help!
          </p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-xl transition-colors duration-300">
            Contact Support
          </button>
        </div>
      </div>
    </section>
  );
};

export default QA;