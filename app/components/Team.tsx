import React from 'react';
import Image from 'next/image';
import { 
  FaLinkedin, 
  FaTwitter, 
  FaGithub, 
  FaLightbulb, 
  FaRocket, 
  FaUsers,
  FaCode,
  FaPalette,
  FaChartLine,
  FaMobileAlt
} from 'react-icons/fa';

const teamMembers = [
  {
    name: 'Hina Aimen',
    title: 'Co-founder & CEO',
    bio: 'Former product lead at Google with 10+ years in tech entrepreneurship. Passionate about solving real-world problems through innovation.',
    image: '/images/girl1.png', // Using girl1.png for Hina
    skills: ['Product Strategy', 'Business Development', 'Leadership'],
    social: { linkedin: '#', twitter: '#' }
  },
  {
    name: 'Sumair Ali',
    title: 'Co-founder & CTO',
    bio: 'Ex-Microsoft engineer with expertise in AI and cloud computing. Leads our technical vision and architecture.',
    image: '/images/boy1.png', // Using boy1.png for Sumair
    skills: ['Artificial Intelligence', 'Cloud Architecture', 'DevOps'],
    social: { linkedin: '#', github: '#' }
  },
  {
    name: 'M Usman',
    title: 'Head of Design',
    bio: 'Award-winning designer with background at Apple and Airbnb. Creates intuitive and beautiful user experiences.',
    image: '/images/boy2.png', // Using boy2.png for Usman
    skills: ['UX/UI Design', 'Product Design', 'Design Systems'],
    social: { linkedin: '#', dribbble: '#' }
  },
  {
    name: 'M Hamza',
    title: 'Lead Developer',
    bio: 'Full-stack developer specializing in React and Node.js. Builds scalable and performant applications.',
    image: '/images/boy3.png', // Using boy3.png for Hamza
    skills: ['React/Next.js', 'Node.js', 'Database Design'],
    social: { linkedin: '#', github: '#' }
  },
  {
    name: 'Saad',
    title: 'Marketing Director',
    bio: 'Growth marketing expert who previously scaled two startups from 0 to 1M users. Focuses on community building.',
    image: '/images/boy 4.png', // Using boy4.png for Saad
    skills: ['Growth Marketing', 'Content Strategy', 'Community Building'],
    social: { linkedin: '#', twitter: '#' }
  },
  {
    name: 'Bilal Ahmed',
    title: 'Mobile Lead',
    bio: 'iOS and Android specialist with 8 years of mobile development experience. Ensures seamless cross-platform performance.',
    image: '/images/boy 5.png', // Using boy5.png for Bilal
    skills: ['iOS Development', 'Android Development', 'Flutter'],
    social: { linkedin: '#', github: '#' }
  }
];

const Team = () => {
  return (
    <section className="bg-gradient-to-br from-blue-50 via-white to-indigo-50 py-20">
      <div className="container mx-auto px-6 max-w-7xl">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
            Meet Our <span className="text-blue-600">Dream Team</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Passionate innovators dedicated to transforming how you manage contacts and relationships
          </p>
          
          {/* Stats Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 max-w-2xl mx-auto">
            <div className="text-center p-4 bg-white rounded-xl shadow-sm border border-blue-100">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <FaUsers className="text-blue-600 text-xl" />
              </div>
              <div className="text-2xl font-bold text-gray-900">6+</div>
              <div className="text-sm text-gray-600">Team Members</div>
            </div>
            <div className="text-center p-4 bg-white rounded-xl shadow-sm border border-blue-100">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <FaRocket className="text-blue-600 text-xl" />
              </div>
              <div className="text-2xl font-bold text-gray-900">1 Year+</div>
              <div className="text-sm text-gray-600">Years Experience</div>
            </div>
            <div className="text-center p-4 bg-white rounded-xl shadow-sm border border-blue-100">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <FaLightbulb className="text-blue-600 text-xl" />
              </div>
              <div className="text-2xl font-bold text-gray-900">3+</div>
              <div className="text-sm text-gray-600">Products Built</div>
            </div>
            <div className="text-center p-4 bg-white rounded-xl shadow-sm border border-blue-100">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <FaChartLine className="text-blue-600 text-xl" />
              </div>
              <div className="text-2xl font-bold text-gray-900">10+</div>
              <div className="text-sm text-gray-600">Users Served</div>
            </div>
          </div>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border border-gray-100 group"
            >
              {/* Image Section */}
              <div className="relative mb-6">
                <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-r from-blue-400 to-indigo-600 p-1 group-hover:from-blue-500 group-hover:to-indigo-700 transition-all duration-300">
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={128}
                    height={128}
                    className="rounded-full object-cover w-full h-full border-4 border-white"
                  />
                </div>
                {/* Social Links */}
                <div className="flex justify-center mt-4 space-x-3">
                  {member.social.linkedin && (
                    <a href={member.social.linkedin} className="bg-blue-100 text-blue-600 p-2 rounded-full hover:bg-blue-600 hover:text-white transition-colors duration-300">
                      <FaLinkedin size={16} />
                    </a>
                  )}
                  {member.social.twitter && (
                    <a href={member.social.twitter} className="bg-blue-100 text-blue-600 p-2 rounded-full hover:bg-blue-600 hover:text-white transition-colors duration-300">
                      <FaTwitter size={16} />
                    </a>
                  )}
                  {member.social.github && (
                    <a href={member.social.github} className="bg-blue-100 text-blue-600 p-2 rounded-full hover:bg-blue-600 hover:text-white transition-colors duration-300">
                      <FaGithub size={16} />
                    </a>
                  )}
                </div>
              </div>
              
              {/* Info Section */}
              <div className="text-center">
                <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                <p className="text-blue-600 font-semibold mb-3">{member.title}</p>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">{member.bio}</p>
                
                {/* Skills */}
                <div className="mt-4 pt-4 border-t border-gray-100">
                  <h4 className="text-sm font-semibold text-gray-800 mb-2">Key Skills</h4>
                  <div className="flex flex-wrap justify-center gap-2">
                    {member.skills.map((skill, skillIndex) => (
                      <span 
                        key={skillIndex} 
                        className="bg-blue-50 text-blue-700 text-xs px-3 py-1 rounded-full font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 bg-gradient-to-r from-blue-600 to-indigo-700 rounded-2xl p-8 text-white">
          <h3 className="text-2xl font-bold mb-4">Join Our Mission</h3>
          <p className="mb-6 max-w-2xl mx-auto opacity-90">
            We're always looking for talented individuals who are passionate about transforming how people connect and communicate.
          </p>
          <button className="bg-white text-blue-600 font-semibold px-6 py-3 rounded-lg hover:bg-blue-50 transition-colors duration-300">
            View Open Positions
          </button>
        </div>
      </div>
    </section>
  );
};

export default Team;