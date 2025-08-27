import React from 'react';
import { FaUserCircle, FaTag, FaEnvelope, FaLock, FaBrain, FaShareAlt } from 'react-icons/fa';

const features = [
  {
    icon: <FaUserCircle />,
    title: 'Smart Profiles',
    description: 'Keep your contacts always updated with auto-sync and shareable cards.',
  },
  {
    icon: <FaTag />,
    title: 'Context & Memory',
    description: 'Never forget why you saved a contact — add notes, tags, and voice memos.',
  },
  {
    icon: <FaEnvelope />,
    title: 'Smart Organization',
    description: 'Filter, group, and manage contacts effortlessly.',
  },
  {
    icon: <FaLock />,
    title: 'Security',
    description: 'Your data is safe with end-to-end encryption.',
  },
  {
    icon: <FaBrain />,
    title: 'AI Features',
    description: 'Get AI-powered reminders, follow-ups, and automatic clustering.',
  },
  {
    icon: <FaShareAlt />,
    title: 'Collaboration',
    description: 'Share contact books with your team and work smarter.',
  },
];

const Features = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-50 to-indigo-100">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-extrabold text-blue-800 mb-2">Features that help you grow</h2>
        <p className="text-gray-600 text-lg mb-10 max-w-2xl mx-auto">
          From simple organization to smart networking, we've got you covered with a suite of powerful tools.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300
                         transform hover:-translate-y-2 border-t-4 border-blue-500"
            >
              <div className="text-blue-500 text-5xl mb-4 flex justify-center 
                          transition-transform duration-300 group-hover:scale-110 group-hover:text-blue-600">
                {feature.icon}
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-2">{feature.title}</h3>
              <p className="text-gray-600 text-md">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;