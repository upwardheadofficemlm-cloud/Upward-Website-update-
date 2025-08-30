import React from 'react';
import EditableText from './cms/EditableText';
import EditableImage from './cms/EditableImage';
import EditableButton from './cms/EditableButton';
import EditableStatBlock from './cms/EditableStatBlock';
import EditableSection from './cms/EditableSection';
import { CheckCircle, Award, Users, Globe, Plus } from 'lucide-react';
import { useCMS } from '../contexts/CMSContext';

const About = () => {
  const { isAdmin, isEditing } = useCMS();
  const [achievements, setAchievements] = React.useState([
    { id: 'about-achievement-1', icon: Users, number: '500+', label: 'Clients Served', color: 'text-[#004FED]' },
    { id: 'about-achievement-2', icon: Award, number: '15+', label: 'Industry Awards', color: 'text-[#0066FF]' },
    { id: 'about-achievement-3', icon: Globe, number: '10+', label: 'Countries Served', color: 'text-[#004FED]' },
    { id: 'about-achievement-4', icon: CheckCircle, number: '3000+', label: 'Ad Campaigns', color: 'text-[#0066FF]' }
  ]);

  const values = [
    {
      title: 'Innovation First',
      description: 'We stay ahead of marketing trends and embrace cutting-edge technologies to deliver exceptional results.'
    },
    {
      title: 'Local Expertise',
      description: 'Deep understanding of the Myanmar market combined with international best practices.'
    },
    {
      title: 'Results Driven',
      description: 'Every strategy is designed with measurable outcomes and ROI in mind.'
    },
    {
      title: 'Client Partnership',
      description: 'We build long-term relationships based on trust, transparency, and mutual success.'
    }
  ];

  return (
    <section id="about" className="py-32 bg-gradient-to-b from-gray-50 to-white dark:from-gray-800 dark:to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-24">
          <h2 className="text-5xl md:text-7xl font-black text-gray-900 dark:text-gray-100 mb-6">
            <EditableText
              id="about-title-about"
              defaultContent="About"
              className="inline"
              tag="span"
            /> <span className="bg-gradient-to-r from-[#004FED] to-[#0066FF] bg-clip-text text-transparent">
              <EditableText
                id="about-title-upward"
                defaultContent="Upward"
                className="inline"
                tag="span"
              />
            </span>
          </h2>
          <EditableText
            id="about-description"
            defaultContent="Mawlamyine's premier marketing agency since 2021, transforming businesses through innovative strategies and proven results."
            className="text-2xl text-gray-600 dark:text-gray-400 max-w-4xl mx-auto font-light leading-relaxed"
            tag="p"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-32">
          {/* Content */}
          <div>
            <EditableText
              id="about-main-title"
              defaultContent="Your Growth Partner"
              className="text-4xl md:text-5xl font-bold text-gray-900 mb-8"
              tag="h3"
            />
            <EditableText
              id="about-main-description-1"
              defaultContent="Founded in 2021 in Mawlamyine, we've grown from a creative studio to Myanmar's trusted marketing partner. We combine local insights with global excellence to deliver campaigns that drive real results."
              className="text-xl text-gray-600 mb-8 leading-relaxed"
              tag="p"
            />

            <div className="flex flex-col sm:flex-row space-y-6 sm:space-y-0 sm:space-x-8">
              <EditableButton
                id="about-cta-primary"
                defaultText="Learn More About Us"
                defaultUrl="/about"
                defaultType="internal"
                className="bg-gradient-to-r from-[#004FED] to-[#0066FF] text-white px-8 py-4 rounded-xl text-lg font-bold hover:shadow-xl hover:shadow-[#004FED]/30 transform hover:-translate-y-2 transition-all duration-400"
              />
              <EditableButton
                id="about-cta-secondary"
                defaultText="Meet Our Team"
                defaultUrl="/team"
                defaultType="internal"
                className="border-2 border-[#004FED] text-[#004FED] px-8 py-4 rounded-xl text-lg font-bold hover:bg-[#004FED] hover:text-white transition-all duration-400"
              />
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="aspect-w-4 aspect-h-5 rounded-3xl overflow-hidden shadow-2xl">
              <EditableImage
                id="about-main-image"
                defaultSrc="https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Team collaboration"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Floating Card */}
            <div className="absolute -bottom-10 -left-10 bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-2xl border border-gray-100 dark:border-gray-700">
              <div className="flex items-center space-x-6">
                <div className="w-16 h-16 bg-gradient-to-r from-[#004FED] to-[#0066FF] rounded-xl flex items-center justify-center">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <div>
                  <EditableText
                    id="about-award-title"
                    defaultContent="Award Winner"
                    className="font-bold text-gray-900 dark:text-gray-100 text-lg"
                    tag="div"
                  />
                  <EditableText
                    id="about-award-subtitle"
                    defaultContent="Myanmar Marketing Awards 2023"
                    className="text-gray-600 dark:text-gray-400"
                    tag="div"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Achievements */}
        <EditableSection
          id="about-achievements-section"
          className="grid grid-cols-2 md:grid-cols-4 gap-12"
          canAddItems={true}
          onAddItem={() => {
            const newAchievement = {
              id: `about-achievement-${Date.now()}`,
              icon: Award,
              number: '100+',
              label: 'New Achievement',
              color: 'text-[#004FED]'
            };
            setAchievements([...achievements, newAchievement]);
          }}
        >
          {achievements.map((achievement, index) => (
            <EditableStatBlock
              key={achievement.id}
              id={achievement.id}
              number={achievement.number}
              label={achievement.label}
              icon={achievement.icon}
              className="group cursor-pointer"
              numberClassName="text-3xl md:text-4xl font-black text-gray-900 mb-3"
              labelClassName="text-gray-600 font-semibold text-lg"
              onDelete={() => {
                if (achievements.length > 1 && window.confirm('Are you sure you want to remove this achievement?')) {
                  setAchievements(achievements.filter(a => a.id !== achievement.id));
                }
              }}
              onDuplicate={() => {
                const newAchievement = {
                  ...achievement,
                  id: `about-achievement-${Date.now()}`,
                  label: `${achievement.label} Copy`
                };
                setAchievements([...achievements, newAchievement]);
              }}
            />
          ))}
          
          {/* Add Achievement Card */}
          {isAdmin && isEditing && (
            <div 
              onClick={() => {
                const newAchievement = {
                  id: `about-achievement-${Date.now()}`,
                  icon: Award,
                  number: '100+',
                  label: 'New Achievement',
                  color: 'text-[#004FED]'
                };
                setAchievements([...achievements, newAchievement]);
              }}
              className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-md rounded-2xl p-8 shadow-lg border-2 border-dashed border-gray-300 dark:border-gray-600 hover:border-[#004FED] hover:bg-[#004FED]/5 dark:hover:bg-[#004FED]/10 transition-all duration-300 cursor-pointer flex items-center justify-center min-h-[150px]"
            >
              <div className="text-center">
                <Plus className="w-12 h-12 text-gray-400 dark:text-gray-500 hover:text-[#004FED] mx-auto mb-4" />
                <span className="text-gray-500 dark:text-gray-400 font-medium">Add Achievement</span>
              </div>
            </div>
          )}
        </EditableSection>
      </div>
    </section>
  );
};

export default About;