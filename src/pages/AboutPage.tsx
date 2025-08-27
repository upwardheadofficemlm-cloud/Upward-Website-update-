import React from 'react';
import EditableText from '../components/cms/EditableText';
import EditableImage from '../components/cms/EditableImage';
import EditableIcon from '../components/cms/EditableIcon';
import EditableSection from '../components/cms/EditableSection';
import { CheckCircle, Award, Users, Globe, Target, Heart, Lightbulb, Shield, BarChart3, Trash2 } from 'lucide-react';
import { useCMS } from '../contexts/CMSContext';

const AboutPage = () => {
  const { isAdmin, isEditing } = useCMS();
  const [achievements, setAchievements] = React.useState([
    { id: 'achievement-1', icon: 'users', number: '500+', label: 'Clients Served', color: 'text-[#004FED]' },
    { id: 'achievement-2', icon: 'award', number: '15+', label: 'Industry Awards', color: 'text-[#0066FF]' },
    { id: 'achievement-3', icon: 'globe', number: '10+', label: 'Countries Served', color: 'text-[#004FED]' },
    { id: 'achievement-4', icon: 'check-circle', number: '3000+', label: 'Ad Campaigns', color: 'text-[#0066FF]' }
  ]);

  const [values, setValues] = React.useState([
    {
      id: 'value-1',
      icon: 'lightbulb',
      title: 'Innovation First',
      description: 'We stay ahead of marketing trends and embrace cutting-edge technologies to deliver exceptional results.',
      color: 'from-[#004FED] to-[#0066FF]'
    },
    {
      id: 'value-2',
      icon: 'target',
      title: 'Local Expertise',
      description: 'Deep understanding of the Myanmar market combined with international best practices.',
      color: 'from-[#0066FF] to-[#004FED]'
    },
    {
      id: 'value-3',
      icon: 'bar-chart3',
      title: 'Results Driven',
      description: 'Every strategy is designed with measurable outcomes and ROI in mind.',
      color: 'from-[#004FED] to-[#0080FF]'
    },
    {
      id: 'value-4',
      icon: 'heart',
      title: 'Client Partnership',
      description: 'We build long-term relationships based on trust, transparency, and mutual success.',
      color: 'from-[#0080FF] to-[#004FED]'
    }
  ]);

  const [timeline, setTimeline] = React.useState([
    {
      id: 'timeline-1',
      year: '2021',
      title: 'Foundation',
      description: 'Upward was founded on July 15, 2021, in Mawlamyine with a vision to transform Myanmar\'s marketing landscape.'
    },
    {
      id: 'timeline-2',
      year: '2021',
      title: 'Digital Expansion',
      description: 'Rapidly expanded our digital marketing services and helped businesses adapt to the digital-first world.'
    },
    {
      id: 'timeline-3',
      year: '2022',
      title: 'Team Growth',
      description: 'Grew our team to 20+ professionals and expanded our creative studio capabilities.'
    },
    {
      id: 'timeline-4',
      year: '2022',
      title: 'Award Recognition',
      description: 'Achieved 500+ clients milestone and won recognition for innovative campaigns.'
    },
    {
      id: 'timeline-5',
      year: '2023',
      title: 'Regional Expansion',
      description: 'Reached 3000+ successful ad campaigns and established regional partnerships.'
    },
    {
      id: 'timeline-6',
      year: '2024',
      title: 'Innovation Hub',
      description: 'Launched our innovation lab focusing on AI-driven marketing solutions and advanced analytics.'
    }
  ]);

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-32 bg-gradient-to-br from-[#004FED]/5 via-white to-[#004FED]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <EditableText
              id="about-hero-title"
              defaultContent="About Upward"
              className="text-5xl md:text-7xl font-black text-gray-900 mb-6"
              tag="h1"
            />
            <EditableText
              id="about-hero-description"
              defaultContent="We are Mawlamyine's leading marketing agency, dedicated to elevating brands through innovative 360° marketing solutions."
              className="text-2xl text-gray-600 max-w-4xl mx-auto font-light leading-relaxed"
              tag="p"
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            {/* Content */}
            <div>
              <EditableText
                id="about-main-title"
                defaultContent="Transforming Businesses Since 2019"
                className="text-4xl md:text-5xl font-bold text-gray-900 mb-8"
                tag="h2"
              />
              <EditableText
                id="about-main-description-1"
                defaultContent="Founded on July 15, 2021, in the heart of Mawlamyine, Upward has rapidly grown from a small creative studio to Myanmar's most trusted marketing agency. We combine local market insights with global marketing excellence to deliver campaigns that resonate and results that matter."
                className="text-xl text-gray-600 mb-8 leading-relaxed"
                tag="p"
              />
              <EditableText
                id="about-main-description-2"
                defaultContent="Our team of creative professionals, strategic thinkers, and digital experts work collaboratively to ensure every project exceeds expectations. From startups to established enterprises, we've helped over 500 businesses across industries achieve their marketing goals through 3000+ successful campaigns."
                className="text-xl text-gray-600 mb-12 leading-relaxed"
                tag="p"
              />

              <div className="grid grid-cols-2 gap-8">
                <div className="text-center">
                  <div className="text-3xl font-black text-[#004FED] mb-2">3+</div>
                  <div className="text-gray-600 font-medium">Years of Excellence</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-black text-[#0066FF] mb-2">20+</div>
                  <div className="text-gray-600 font-medium">Team Members</div>
                </div>
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
              <div className="absolute -bottom-10 -left-10 bg-white p-8 rounded-2xl shadow-2xl border border-gray-100">
                <div className="flex items-center space-x-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-[#004FED] to-[#0066FF] rounded-xl flex items-center justify-center">
                    <Award className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <div className="font-bold text-gray-900 text-lg">Award Winner</div>
                    <div className="text-gray-600">Myanmar Marketing Awards 2023</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <EditableSection
        id="about-values-section"
        className="py-32 bg-gradient-to-b from-white to-gray-50"
        canAddItems={true}
        onAddItem={() => {
          const newValue = {
            id: `value-${Date.now()}`,
            icon: 'star',
            title: 'New Value',
            description: 'Description of the new company value.',
            color: 'from-[#004FED] to-[#0066FF]'
          };
          setValues([...values, newValue]);
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <EditableText
              id="about-values-title"
              defaultContent="Our Values"
              className="text-4xl md:text-6xl font-black text-gray-900 mb-6"
              tag="h2"
            />
            <EditableText
              id="about-values-description"
              defaultContent="The principles that guide everything we do"
              className="text-xl text-gray-600 max-w-3xl mx-auto font-light"
              tag="p"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {values.map((value, index) => (
              <div key={value.id} className="bg-white rounded-3xl p-10 shadow-xl border border-gray-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 relative group">
                <div className={`w-20 h-20 rounded-2xl bg-gradient-to-r ${value.color} p-5 mb-8 shadow-lg`}>
                  <EditableIcon
                    id={`about-value-icon-${value.id}`}
                    defaultIcon={value.icon}
                    className="w-10 h-10 text-white"
                    onIconChange={(newIcon) => {
                      setValues(values.map(v => v.id === value.id ? { ...v, icon: newIcon } : v));
                    }}
                  />
                </div>
                <EditableText
                  id={`about-value-title-${value.id}`}
                  defaultContent={value.title}
                  className="text-2xl font-bold text-gray-900 mb-6"
                  tag="h3"
                />
                <EditableText
                  id={`about-value-description-${value.id}`}
                  defaultContent={value.description}
                  className="text-gray-600 leading-relaxed text-lg"
                  tag="p"
                />
                {isAdmin && isEditing && values.length > 1 && (
                  <button
                    onClick={() => {
                      if (window.confirm('Are you sure you want to remove this value?')) {
                        setValues(values.filter(v => v.id !== value.id));
                      }
                    }}
                    className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 text-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200 hover:bg-red-600"
                  >
                    <Trash2 className="w-3 h-3" />
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>
      </EditableSection>

      {/* Timeline Section */}
      <EditableSection
        id="about-timeline-section"
        className="py-32 bg-gradient-to-b from-gray-50 to-white"
        canAddItems={true}
        onAddItem={() => {
          const newTimelineItem = {
            id: `timeline-${Date.now()}`,
            year: '2025',
            title: 'New Milestone',
            description: 'Description of the new milestone or achievement.'
          };
          setTimeline([...timeline, newTimelineItem]);
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <EditableText
              id="about-timeline-title"
              defaultContent="Our Journey"
              className="text-4xl md:text-6xl font-black text-gray-900 mb-6"
              tag="h2"
            />
            <EditableText
              id="about-timeline-description"
              defaultContent="Milestones that shaped our growth and success"
              className="text-xl text-gray-600 max-w-3xl mx-auto font-light"
              tag="p"
            />
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-[#004FED] to-[#0066FF] rounded-full"></div>

            <div className="space-y-16">
              {timeline.map((item, index) => (
                <div key={item.id} className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} relative group`}>
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-12 text-right' : 'pl-12 text-left'}`}>
                    <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-500">
                      <EditableText
                        id={`timeline-year-${item.id}`}
                        defaultContent={item.year}
                        className="text-2xl font-black text-[#004FED] mb-4"
                        tag="div"
                      />
                      <EditableText
                        id={`timeline-title-${item.id}`}
                        defaultContent={item.title}
                        className="text-xl font-bold text-gray-900 mb-4"
                        tag="h3"
                      />
                      <EditableText
                        id={`timeline-description-${item.id}`}
                        defaultContent={item.description}
                        className="text-gray-600 leading-relaxed"
                        tag="p"
                      />
                    </div>
                  </div>
                  
                  {/* Timeline Dot */}
                  <div className="w-6 h-6 bg-gradient-to-r from-[#004FED] to-[#0066FF] rounded-full border-4 border-white shadow-lg z-10"></div>
                  
                  <div className="w-1/2"></div>
                  
                  {isAdmin && isEditing && timeline.length > 1 && (
                    <button
                      onClick={() => {
                        if (window.confirm('Are you sure you want to remove this timeline item?')) {
                          setTimeline(timeline.filter(t => t.id !== item.id));
                        }
                      }}
                      className="absolute top-4 right-4 w-6 h-6 bg-red-500 text-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200 hover:bg-red-600 z-20"
                    >
                      <Trash2 className="w-3 h-3" />
                    </button>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </EditableSection>

      {/* Achievements */}
      <EditableSection
        id="about-achievements-section"
        className="py-32 bg-gradient-to-r from-[#004FED] to-[#0066FF]"
        canAddItems={true}
        onAddItem={() => {
          const newAchievement = {
            id: `achievement-${Date.now()}`,
            icon: 'star',
            number: '100+',
            label: 'New Metric',
            color: 'text-white'
          };
          setAchievements([...achievements, newAchievement]);
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <EditableText
              id="about-achievements-title"
              defaultContent="Our Achievements"
              className="text-4xl md:text-6xl font-bold text-white mb-6"
              tag="h2"
            />
            <EditableText
              id="about-achievements-description"
              defaultContent="Numbers that reflect our commitment to excellence"
              className="text-xl text-blue-100 max-w-3xl mx-auto font-light"
              tag="p"
            />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
            {achievements.map((achievement, index) => (
              <div key={achievement.id} className="text-center group cursor-pointer relative">
                <div className="w-20 h-20 bg-white/20 backdrop-blur-md rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-125 transition-all duration-500 shadow-lg">
                  <EditableIcon
                    id={`about-achievement-icon-${achievement.id}`}
                    defaultIcon={achievement.icon}
                    className="w-10 h-10 text-white"
                    onIconChange={(newIcon) => {
                      setAchievements(achievements.map(a => a.id === achievement.id ? { ...a, icon: newIcon } : a));
                    }}
                  />
                </div>
                <EditableText
                  id={`achievement-number-${achievement.id}`}
                  defaultContent={achievement.number}
                  className="text-4xl md:text-5xl font-black text-white mb-3"
                  tag="div"
                />
                <EditableText
                  id={`achievement-label-${achievement.id}`}
                  defaultContent={achievement.label}
                  className="text-blue-100 font-semibold text-lg"
                  tag="div"
                />
                {isAdmin && isEditing && achievements.length > 1 && (
                  <button
                    onClick={() => {
                      if (window.confirm('Are you sure you want to remove this achievement?')) {
                        setAchievements(achievements.filter(a => a.id !== achievement.id));
                      }
                    }}
                    className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 text-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200 hover:bg-red-600"
                  >
                    <Trash2 className="w-3 h-3" />
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>
      </EditableSection>
    </div>
  );
};

export default AboutPage;