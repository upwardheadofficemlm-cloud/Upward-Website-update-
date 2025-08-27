import React from 'react';
import EditableText from './cms/EditableText';
import EditableImage from './cms/EditableImage';
import EditableButton from './cms/EditableButton';
import EditableStatBlock from './cms/EditableStatBlock';
import EditableSection from './cms/EditableSection';
import { ExternalLink, ArrowRight, Plus } from 'lucide-react';
import { useCMS } from '../contexts/CMSContext';

const Portfolio = () => {
  const { isAdmin, isEditing } = useCMS();
  const [portfolioStats, setPortfolioStats] = React.useState([
    { id: 'portfolio-stat-1', number: '98%', label: 'Client Satisfaction' },
    { id: 'portfolio-stat-2', number: '4.9/5', label: 'Average Rating' },
    { id: 'portfolio-stat-3', number: '100%', label: 'Project Success' }
  ]);

  const projects = [
    {
      title: 'Golden Myanmar Restaurant Chain',
      category: 'Branding & Digital Marketing',
      description: 'Complete brand identity and digital marketing campaign that increased online orders by 200%.',
      image: 'https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=600',
      tags: ['Branding', 'Social Media', 'Web Design'],
      color: 'from-[#004FED] to-[#0066FF]'
    },
    {
      title: 'Thanlwin Tech Hub',
      category: 'Digital Transformation',
      description: 'Website redesign and SEO optimization resulting in 300% increase in organic traffic.',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=600',
      tags: ['Web Development', 'SEO', 'Analytics'],
      color: 'from-[#0066FF] to-[#004FED]'
    },
    {
      title: 'Myanmar Gems Exhibition',
      category: 'Event Marketing',
      description: 'Integrated marketing campaign for annual gems exhibition with 50,000+ visitors.',
      image: 'https://images.pexels.com/photos/1454169/pexels-photo-1454169.jpeg?auto=compress&cs=tinysrgb&w=600',
      tags: ['Event Marketing', 'PR', 'Media Planning'],
      color: 'from-[#004FED] to-[#0080FF]'
    },
    {
      title: 'Mawlamyine Tourism Board',
      category: 'Tourism Marketing',
      description: 'Tourism promotion campaign showcasing Mawlamyine\'s cultural heritage and attractions.',
      image: 'https://images.pexels.com/photos/2666598/pexels-photo-2666598.jpeg?auto=compress&cs=tinysrgb&w=600',
      tags: ['Tourism', 'Content Creation', 'Social Media'],
      color: 'from-[#0066FF] to-[#004FED]'
    },
    {
      title: 'EcoGreen Myanmar',
      category: 'Sustainability Campaign',
      description: 'Environmental awareness campaign reaching 1M+ people across Myanmar.',
      image: 'https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg?auto=compress&cs=tinysrgb&w=600',
      tags: ['Campaign', 'Video Production', 'PR'],
      color: 'from-[#004FED] to-[#0099FF]'
    },
    {
      title: 'Mon State Bank',
      category: 'Financial Services',
      description: 'Digital banking campaign and mobile app promotion for modern banking services.',
      image: 'https://images.pexels.com/photos/164686/pexels-photo-164686.jpeg?auto=compress&cs=tinysrgb&w=600',
      tags: ['Digital Marketing', 'App Promotion', 'Finance'],
      color: 'from-[#0080FF] to-[#004FED]'
    }
  ];

  return (
    <section id="portfolio" className="py-32 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-24">
          <h2 className="text-5xl md:text-7xl font-black text-gray-900 mb-6">
            <EditableText
              id="portfolio-title-our"
              defaultContent="Our"
              className="inline"
              tag="span"
            /> <span className="bg-gradient-to-r from-[#004FED] to-[#0066FF] bg-clip-text text-transparent">
              <EditableText
                id="portfolio-title-portfolio"
                defaultContent="Portfolio"
                className="inline"
                tag="span"
              />
            </span>
          </h2>
          <EditableText
            id="portfolio-description"
            defaultContent="Showcasing successful campaigns that delivered real results for Myanmar businesses."
            className="text-2xl text-gray-600 max-w-4xl mx-auto font-light leading-relaxed"
            tag="p"
          />
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-24">
          {projects.slice(0, 3).map((project, index) => (
            <div
              key={index}
              className="group bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl hover:shadow-[#004FED]/10 hover:-translate-y-4 transition-all duration-500 border border-gray-100"
            >
              {/* Image */}
              <div className="relative overflow-hidden">
                <EditableImage
                  id={`portfolio-project-image-${index}`}
                  defaultSrc={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover group-hover:scale-125 transition-transform duration-700"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${project.color} opacity-0 group-hover:opacity-80 transition-opacity duration-500`}></div>
                <div className="absolute top-6 right-6 w-12 h-12 bg-white/95 backdrop-blur-md rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:scale-110">
                  <ExternalLink className="w-6 h-6 text-[#004FED]" />
                </div>
                <div className="absolute bottom-6 left-6 right-6 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                  <EditableText
                    id={`portfolio-project-category-${index}`}
                    defaultContent={project.category}
                    className={`inline-block px-4 py-2 bg-gradient-to-r ${project.color} text-white text-sm font-semibold rounded-full`}
                    tag="span"
                  />
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <EditableText
                  id={`portfolio-project-title-${index}`}
                  defaultContent={project.title}
                  className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#004FED] transition-colors duration-300"
                  tag="h3"
                />
                <EditableText
                  id={`portfolio-project-description-${index}`}
                  defaultContent={project.description}
                  className="text-gray-600 mb-4 leading-relaxed"
                  tag="p"
                />
                
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.slice(0, 2).map((tag, tagIndex) => (
                    <EditableText
                      key={tagIndex}
                      id={`portfolio-project-tag-${index}-${tagIndex}`}
                      defaultContent={tag}
                      className="px-3 py-1 text-xs font-semibold bg-[#004FED]/10 text-[#004FED] rounded-full"
                      tag="span"
                    />
                  ))}
                </div>
                
                <EditableButton
                  id={`portfolio-project-button-${index}`}
                  defaultText="View Case Study"
                  defaultUrl={index === 0 ? "/portfolio#golden-myanmar" : index === 1 ? "/portfolio#thanlwin-tech" : "/portfolio"}
                  defaultType="internal"
                  className="inline-flex items-center space-x-2 text-[#004FED] hover:text-[#0066FF] font-semibold transition-colors duration-300"
                >
                  <ArrowRight className="w-4 h-4" />
                </EditableButton>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-[#004FED]/5 to-[#0066FF]/10 rounded-3xl p-12 md:p-16 border border-[#004FED]/10">
            <EditableText
              id="portfolio-cta-title"
              defaultContent="Ready to Join Our Success Stories?"
              className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
              tag="h3"
            />
            <EditableText
              id="portfolio-cta-description"
              defaultContent="Ready to see your business featured in our next success story?"
              className="text-2xl text-gray-600 mb-12 max-w-3xl mx-auto font-light"
              tag="p"
            />
            <EditableSection
              id="portfolio-bottom-stats-section"
              className="text-center mt-20"
              canAddItems={true}
              onAddItem={() => {
                const newStat = {
                  id: `portfolio-stat-${Date.now()}`,
                  number: '95%',
                  label: 'New Metric'
                };
                setPortfolioStats([...portfolioStats, newStat]);
              }}
            >
              <div className="inline-flex items-center space-x-12 bg-white/80 backdrop-blur-md rounded-2xl p-8 shadow-xl border border-gray-100">
                {portfolioStats.map((stat, index) => (
                  <React.Fragment key={stat.id}>
                    {index > 0 && <div className="w-px h-12 bg-gray-200"></div>}
                    <div className="text-center relative group">
                      <EditableStatBlock
                        id={stat.id}
                        number={stat.number}
                        label={stat.label}
                        numberClassName="text-2xl font-black text-[#004FED] mb-1"
                        labelClassName="text-gray-600 text-sm font-medium"
                        onDelete={() => {
                          if (portfolioStats.length > 1 && window.confirm('Are you sure you want to remove this statistic?')) {
                            setPortfolioStats(portfolioStats.filter(s => s.id !== stat.id));
                          }
                        }}
                        onDuplicate={() => {
                          const newStat = {
                            ...stat,
                            id: `portfolio-stat-${Date.now()}`,
                            label: `${stat.label} Copy`
                          };
                          setPortfolioStats([...portfolioStats, newStat]);
                        }}
                      />
                    </div>
                  </React.Fragment>
                ))}
                
                {/* Add Stat Button */}
                {isAdmin && isEditing && (
                  <>
                    <div className="w-px h-12 bg-gray-200"></div>
                    <div 
                      onClick={() => {
                        const newStat = {
                          id: `portfolio-stat-${Date.now()}`,
                          number: '95%',
                          label: 'New Metric'
                        };
                        setPortfolioStats([...portfolioStats, newStat]);
                      }}
                      className="text-center cursor-pointer hover:bg-[#004FED]/5 p-4 rounded-lg transition-all duration-300"
                    >
                      <Plus className="w-8 h-8 text-gray-400 hover:text-[#004FED] mx-auto mb-2" />
                      <div className="text-xs text-gray-500 font-medium">Add Stat</div>
                    </div>
                  </>
                )}
              </div>
            </EditableSection>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;