import React from 'react';
import Image from 'next/image';

const teamMembers = [
  {
    name: 'Jane Doe',
    title: 'Co-founder & CEO',
    bio: 'Leads the team with a vision to revolutionize business networking.',
    image: '/images/placeholder.svg',
  },
  {
    name: 'John Smith',
    title: 'Co-founder & CTO',
    bio: 'Drives product innovation and leads the development team.',
    image: '/images/placeholder.svg',
  },
  {
    name: 'Sarah Lee',
    title: 'Head of Marketing',
    bio: 'Spreads the word about CONTAPP and builds our community.',
    image: '/images/placeholder.svg',
  },
];

const Team = () => {
  return (
    <section className="bg-gradient-to-r from-blue-50 to-indigo-100 py-20">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-extrabold text-blue-800 mb-2">Our Team</h2>
        <p className="text-gray-600 text-lg mb-12">Meet the passionate people behind CONTAPP.</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
            >
              <div className="flex justify-center mb-4 transform transition-transform duration-300 hover:scale-105">
                <Image
                  src={member.image}
                  alt={member.name}
                  width={160}
                  height={160}
                  className="rounded-full object-cover w-40 h-40 border-4 border-blue-500 hover:border-blue-600 transition-colors duration-300"
                />
              </div>
              <h3 className="text-2xl font-bold text-gray-800">{member.name}</h3>
              <p className="text-blue-600 font-semibold">{member.title}</p>
              <p className="mt-2 text-gray-600 text-sm">{member.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;