import React from 'react';
import EditableText from './cms/EditableText';
import EditableImage from './cms/EditableImage';
import EditableButton from './cms/EditableButton';
import { Linkedin, Twitter, Mail } from 'lucide-react';

const Team = () => {
  const teamMembers = [
    {
      name: 'Thura Aung',
      position: 'Creative Director & Founder',
      image: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'Visionary leader with 8+ years in creative marketing and brand strategy.',
      social: {
        linkedin: '#',
        twitter: '#',
        email: 'thura@upwardmm.com'
      },
      color: 'from-[#004FED] to-[#0066FF]'
    },
    {
      name: 'Khin Su Latt',
      position: 'Digital Marketing Manager',
      image: 'https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'Digital marketing expert specializing in SEO, SEM, and social media strategies.',
      social: {
        linkedin: '#',
        twitter: '#',
        email: 'khinsu@upwardmm.com'
      },
      color: 'from-[#0066FF] to-[#004FED]'
    },
    {
      name: 'Kyaw Min Thu',
      position: 'Senior Developer',
      image: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'Full-stack developer creating beautiful and functional web experiences.',
      social: {
        linkedin: '#',
        twitter: '#',
        email: 'kyawmin@upwardmm.com'
      },
      color: 'from-[#004FED] to-[#0080FF]'
    },
    {
      name: 'Mya Thandar',
      position: 'Brand Strategist',
      image: 'https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'Brand strategist with expertise in market research and consumer behavior.',
      social: {
        linkedin: '#',
        twitter: '#',
        email: 'mya@upwardmm.com'
      },
      color: 'from-[#0080FF] to-[#004FED]'
    },
    {
      name: 'Zaw Lin Htut',
      position: 'Content Creator',
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'Creative content producer specializing in video production and storytelling.',
      social: {
        linkedin: '#',
        twitter: '#',
        email: 'zawlin@upwardmm.com'
      },
      color: 'from-[#004FED] to-[#0099FF]'
    },
    {
      name: 'Aye Chan Moe',
      position: 'Social Media Specialist',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'Social media expert creating engaging content and building online communities.',
      social: {
        linkedin: '#',
        twitter: '#',
        email: 'ayechan@upwardmm.com'
      },
      color: 'from-[#0099FF] to-[#004FED]'
    }
  ];

  return (
    <section id="team" className="py-32 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-24">
          <h2 className="text-5xl md:text-7xl font-black text-gray-900 mb-6">
            <EditableText
              id="team-title-meet"
              defaultContent="Meet Our"
              className="inline"
              tag="span"
            /> <span className="bg-gradient-to-r from-[#004FED] to-[#0066FF] bg-clip-text text-transparent">
              <EditableText
                id="team-title-team"
                defaultContent="Team"
                className="inline"
                tag="span"
              />
            </span>
          </h2>
          <EditableText
            id="team-description"
            defaultContent="Meet the passionate professionals behind Upward's success stories."
            className="text-2xl text-gray-600 max-w-4xl mx-auto font-light leading-relaxed"
            tag="p"
          />
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-16">
          {teamMembers.slice(0, 3).map((member, index) => (
            <div
              key={index}
              className="group bg-white rounded-3xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl hover:shadow-[#004FED]/10 hover:-translate-y-4 transition-all duration-500 text-center"
            >
              {/* Image */}
              <div className="relative mb-8">
                <div className="w-32 h-32 mx-auto rounded-full overflow-hidden shadow-xl group-hover:shadow-2xl transition-all duration-500">
                  <EditableImage
                    id={`team-member-image-${index}`}
                    defaultSrc={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-125 transition-transform duration-700"
                  />
                </div>
                <div className={`absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-6 h-6 bg-gradient-to-r ${member.color} rounded-full border-4 border-white shadow-lg`}></div>
              </div>

              {/* Content */}
              <EditableText
                id={`team-member-name-${index}`}
                defaultContent={member.name}
                className="text-xl font-bold text-gray-900 mb-2 group-hover:text-[#004FED] transition-colors duration-300"
                tag="h3"
              />
              <EditableText
                id={`team-member-position-${index}`}
                defaultContent={member.position}
                className="text-[#004FED] font-bold mb-4"
                tag="div"
              />
              <EditableText
                id={`team-member-bio-${index}`}
                defaultContent={member.bio}
                className="text-gray-600 leading-relaxed mb-6"
                tag="p"
              />

              {/* Social Links */}
              <div className="flex items-center justify-center space-x-4">
                <a
                  href={member.social.linkedin}
                  className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-[#004FED]/10 hover:text-[#004FED] transition-all duration-300 hover:scale-110"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href={member.social.twitter}
                  className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-[#004FED]/10 hover:text-[#004FED] transition-all duration-300 hover:scale-110"
                >
                  <Twitter className="w-5 h-5" />
                </a>
                <a
                  href={`mailto:${member.social.email}`}
                  className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-[#0066FF]/10 hover:text-[#0066FF] transition-all duration-300 hover:scale-110"
                >
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* View All Team CTA */}
        <div className="text-center mt-24">
          <EditableButton
            id="team-view-all-button"
            defaultText="Meet Our Full Team"
            defaultUrl="/team"
            defaultType="internal"
            className="inline-flex items-center space-x-3 bg-gradient-to-r from-[#004FED] to-[#0066FF] text-white px-10 py-4 rounded-xl text-lg font-bold hover:shadow-xl hover:shadow-[#004FED]/30 transform hover:-translate-y-2 transition-all duration-400"
          />
        </div>
      </div>
    </section>
  );
};

export default Team;