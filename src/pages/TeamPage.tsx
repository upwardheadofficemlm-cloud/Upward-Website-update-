import React from 'react';
import EditableText from '../components/cms/EditableText';
import EditableImage from '../components/cms/EditableImage';
import { Linkedin, Twitter, Mail, MapPin, Users, Award } from 'lucide-react';

const TeamPage = () => {
  const teamMembers = [
    {
      name: 'Thura Aung',
      position: 'Creative Director & Founder',
      image: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'Visionary leader with 8+ years in creative marketing and brand strategy. Passionate about transforming Myanmar\'s marketing landscape.',
      expertise: ['Brand Strategy', 'Creative Direction', 'Team Leadership', 'Client Relations'],
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
      bio: 'Digital marketing expert specializing in SEO, SEM, and social media strategies with proven track record of driving results.',
      expertise: ['SEO/SEM', 'Social Media', 'Analytics', 'Campaign Management'],
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
      bio: 'Full-stack developer creating beautiful and functional web experiences. Expert in modern web technologies and frameworks.',
      expertise: ['Web Development', 'UI/UX Design', 'E-commerce', 'Mobile Apps'],
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
      bio: 'Brand strategist with expertise in market research and consumer behavior. Helps brands connect authentically with their audience.',
      expertise: ['Brand Strategy', 'Market Research', 'Consumer Psychology', 'Brand Identity'],
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
      bio: 'Creative content producer specializing in video production and storytelling. Brings brands to life through compelling narratives.',
      expertise: ['Video Production', 'Photography', 'Storytelling', 'Content Strategy'],
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
      bio: 'Social media expert creating engaging content and building online communities. Masters the art of digital storytelling.',
      expertise: ['Social Media Strategy', 'Community Management', 'Influencer Marketing', 'Content Creation'],
      social: {
        linkedin: '#',
        twitter: '#',
        email: 'ayechan@upwardmm.com'
      },
      color: 'from-[#0099FF] to-[#004FED]'
    }
  ];

  const departments = [
    {
      name: 'Creative Department',
      members: 8,
      description: 'Brand identity, graphic design, and creative campaigns',
      icon: '🎨'
    },
    {
      name: 'Digital Marketing',
      members: 6,
      description: 'SEO, SEM, social media, and digital advertising',
      icon: '📱'
    },
    {
      name: 'Development Team',
      members: 4,
      description: 'Web development, mobile apps, and technical solutions',
      icon: '💻'
    },
    {
      name: 'Strategy & Analytics',
      members: 3,
      description: 'Market research, data analysis, and strategic planning',
      icon: '📊'
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-32 bg-gradient-to-br from-[#004FED]/5 via-white to-[#004FED]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <EditableText
            id="team-hero-title"
            defaultContent="Meet Our Team"
            className="text-5xl md:text-7xl font-black text-gray-900 mb-6"
            tag="h1"
          />
          <EditableText
            id="team-hero-description"
            defaultContent="Our diverse team of creative professionals, strategists, and digital experts work together to bring your vision to life."
            className="text-2xl text-gray-600 max-w-4xl mx-auto font-light leading-relaxed mb-12"
            tag="p"
          />
          <div className="flex items-center justify-center space-x-8">
            <div className="flex items-center space-x-3">
              <Users className="w-8 h-8 text-[#004FED]" />
              <span className="text-xl font-semibold text-gray-700">20+ Team Members</span>
            </div>
            <div className="flex items-center space-x-3">
              <MapPin className="w-8 h-8 text-[#0066FF]" />
              <span className="text-xl font-semibold text-gray-700">Mawlamyine, Myanmar</span>
            </div>
          </div>
        </div>
      </section>

      {/* Department Overview */}
      <section className="py-32 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <EditableText
              id="team-departments-title"
              defaultContent="Our Departments"
              className="text-4xl md:text-6xl font-black text-gray-900 mb-6"
              tag="h2"
            />
            <EditableText
              id="team-departments-description"
              defaultContent="Specialized teams working together to deliver exceptional results"
              className="text-xl text-gray-600 max-w-3xl mx-auto font-light"
              tag="p"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {departments.map((dept, index) => (
              <div key={index} className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 text-center">
                <div className="text-4xl mb-6">{dept.icon}</div>
                <EditableText
                  id={`department-name-${index}`}
                  defaultContent={dept.name}
                  className="text-xl font-bold text-gray-900 mb-4"
                  tag="h3"
                />
                <EditableText
                  id={`department-members-${index}`}
                  defaultContent={dept.members.toString()}
                  className="text-3xl font-black text-[#004FED] mb-4"
                  tag="div"
                />
                <EditableText
                  id={`department-description-${index}`}
                  defaultContent={dept.description}
                  className="text-gray-600 leading-relaxed"
                  tag="p"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Members */}
      <section className="py-32 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <EditableText
              id="team-leadership-title"
              defaultContent="Leadership Team"
              className="text-4xl md:text-6xl font-black text-gray-900 mb-6"
              tag="h2"
            />
            <EditableText
              id="team-leadership-description"
              defaultContent="Meet the passionate individuals driving our success"
              className="text-xl text-gray-600 max-w-3xl mx-auto font-light"
              tag="p"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="group bg-white rounded-3xl p-10 shadow-xl border border-gray-100 hover:shadow-2xl hover:shadow-[#004FED]/10 hover:-translate-y-4 transition-all duration-500 text-center"
              >
                {/* Image */}
                <div className="relative mb-8">
                  <div className="w-48 h-48 mx-auto rounded-full overflow-hidden shadow-xl group-hover:shadow-2xl transition-all duration-500">
                    <EditableImage
                      id={`team-member-image-${index}`}
                      defaultSrc={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                  </div>
                  <div className={`absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-10 h-10 bg-gradient-to-r ${member.color} rounded-full border-4 border-white shadow-lg`}></div>
                </div>

                {/* Content */}
                <EditableText
                  id={`team-member-name-${index}`}
                  defaultContent={member.name}
                  className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-[#004FED] transition-colors duration-300"
                  tag="h3"
                />
                <EditableText
                  id={`team-member-position-${index}`}
                  defaultContent={member.position}
                  className="text-[#004FED] font-bold mb-6 text-lg"
                  tag="div"
                />
                <EditableText
                  id={`team-member-bio-${index}`}
                  defaultContent={member.bio}
                  className="text-gray-600 leading-relaxed mb-8 text-lg"
                  tag="p"
                />

                {/* Expertise */}
                <div className="mb-8">
                  <h4 className="text-sm font-bold text-gray-900 mb-4 uppercase tracking-wide">Expertise</h4>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {member.expertise.map((skill, skillIndex) => (
                      <EditableText
                        key={skillIndex}
                        id={`team-member-skill-${index}-${skillIndex}`}
                        defaultContent={skill}
                        className="px-3 py-1 text-xs font-semibold bg-[#004FED]/10 text-[#004FED] rounded-full"
                        tag="span"
                      />
                    ))}
                  </div>
                </div>

                {/* Social Links */}
                <div className="flex items-center justify-center space-x-6">
                  <a
                    href={member.social.linkedin}
                    className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center hover:bg-[#004FED]/10 hover:text-[#004FED] transition-all duration-300 hover:scale-110"
                  >
                    <Linkedin className="w-6 h-6" />
                  </a>
                  <a
                    href={member.social.twitter}
                    className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center hover:bg-[#004FED]/10 hover:text-[#004FED] transition-all duration-300 hover:scale-110"
                  >
                    <Twitter className="w-6 h-6" />
                  </a>
                  <a
                    href={`mailto:${member.social.email}`}
                    className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center hover:bg-[#0066FF]/10 hover:text-[#0066FF] transition-all duration-300 hover:scale-110"
                  >
                    <Mail className="w-6 h-6" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Culture Section */}
      <section className="py-32 bg-gradient-to-r from-[#004FED] to-[#0066FF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <EditableText
              id="team-culture-title"
              defaultContent="Our Culture"
              className="text-4xl md:text-6xl font-bold text-white mb-6"
              tag="h2"
            />
            <EditableText
              id="team-culture-description"
              defaultContent="What makes Upward a great place to work"
              className="text-xl text-blue-100 max-w-3xl mx-auto font-light"
              tag="p"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="w-20 h-20 bg-white/20 backdrop-blur-md rounded-3xl flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl">🚀</span>
              </div>
              <EditableText
                id="team-culture-innovation-title"
                defaultContent="Innovation"
                className="text-2xl font-bold text-white mb-4"
                tag="h3"
              />
              <EditableText
                id="team-culture-innovation-description"
                defaultContent="We encourage creative thinking and embrace new technologies to stay ahead of the curve."
                className="text-blue-100 leading-relaxed"
                tag="p"
              />
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-white/20 backdrop-blur-md rounded-3xl flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl">🤝</span>
              </div>
              <EditableText
                id="team-culture-collaboration-title"
                defaultContent="Collaboration"
                className="text-2xl font-bold text-white mb-4"
                tag="h3"
              />
              <EditableText
                id="team-culture-collaboration-description"
                defaultContent="We believe in the power of teamwork and support each other to achieve common goals."
                className="text-blue-100 leading-relaxed"
                tag="p"
              />
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-white/20 backdrop-blur-md rounded-3xl flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl">📈</span>
              </div>
              <EditableText
                id="team-culture-growth-title"
                defaultContent="Growth"
                className="text-2xl font-bold text-white mb-4"
                tag="h3"
              />
              <EditableText
                id="team-culture-growth-description"
                defaultContent="We invest in our team's professional development and provide opportunities to learn and grow."
                className="text-blue-100 leading-relaxed"
                tag="p"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Join Team CTA */}
      <section className="py-32 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gradient-to-r from-[#004FED]/5 to-[#0066FF]/10 rounded-3xl p-12 md:p-16 border border-[#004FED]/10">
            <EditableText
              id="team-join-title"
              defaultContent="Join Our Growing Team"
              className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
              tag="h3"
            />
            <EditableText
              id="team-join-description"
              defaultContent="We're always looking for talented individuals who share our passion for creative marketing and innovation."
              className="text-2xl text-gray-600 mb-12 max-w-3xl mx-auto font-light"
              tag="p"
            />
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-6 sm:space-y-0 sm:space-x-8">
              <button className="bg-gradient-to-r from-[#004FED] to-[#0066FF] text-white px-12 py-6 rounded-2xl text-xl font-bold hover:shadow-2xl hover:shadow-[#004FED]/30 transform hover:-translate-y-2 transition-all duration-400">
                View Career Opportunities
              </button>
              <button className="flex items-center space-x-3 text-[#004FED] hover:text-[#0066FF] transition-colors duration-300">
                <Award className="w-6 h-6" />
                <span className="text-xl font-semibold">Learn About Our Benefits</span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TeamPage;