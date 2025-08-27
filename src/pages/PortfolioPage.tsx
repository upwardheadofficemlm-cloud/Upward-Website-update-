import React from 'react';
import EditableText from '../components/cms/EditableText';
import EditableImage from '../components/cms/EditableImage';
import EditableStatBlock from '../components/cms/EditableStatBlock';
import { ExternalLink, ArrowRight, Calendar, Award, TrendingUp } from 'lucide-react';

const PortfolioPage = () => {
  const projects = [
    {
      title: 'Golden Myanmar Restaurant Chain',
      category: 'Branding & Digital Marketing',
      description: 'Complete brand identity and digital marketing campaign that increased online orders by 200%.',
      image: 'https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=600',
      tags: ['Branding', 'Social Media', 'Web Design'],
      results: ['200% increase in online orders', '150% growth in social media followers', '85% brand recognition improvement'],
      duration: '6 months',
      color: 'from-[#004FED] to-[#0066FF]'
    },
    {
      title: 'Thanlwin Tech Hub',
      category: 'Digital Transformation',
      description: 'Website redesign and SEO optimization resulting in 300% increase in organic traffic.',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=600',
      tags: ['Web Development', 'SEO', 'Analytics'],
      results: ['300% increase in organic traffic', '45% improvement in conversion rate', '60% reduction in bounce rate'],
      duration: '4 months',
      color: 'from-[#0066FF] to-[#004FED]'
    },
    {
      title: 'Myanmar Gems Exhibition',
      category: 'Event Marketing',
      description: 'Integrated marketing campaign for annual gems exhibition with 50,000+ visitors.',
      image: 'https://images.pexels.com/photos/1454169/pexels-photo-1454169.jpeg?auto=compress&cs=tinysrgb&w=600',
      tags: ['Event Marketing', 'PR', 'Media Planning'],
      results: ['50,000+ event visitors', '25% increase from previous year', '100+ media mentions'],
      duration: '3 months',
      color: 'from-[#004FED] to-[#0080FF]'
    },
    {
      title: 'Mawlamyine Tourism Board',
      category: 'Tourism Marketing',
      description: 'Tourism promotion campaign showcasing Mawlamyine\'s cultural heritage and attractions.',
      image: 'https://images.pexels.com/photos/2666598/pexels-photo-2666598.jpeg?auto=compress&cs=tinysrgb&w=600',
      tags: ['Tourism', 'Content Creation', 'Social Media'],
      results: ['40% increase in tourist visits', '2M+ campaign reach', '500+ user-generated content'],
      duration: '8 months',
      color: 'from-[#0066FF] to-[#004FED]'
    },
    {
      title: 'EcoGreen Myanmar',
      category: 'Sustainability Campaign',
      description: 'Environmental awareness campaign reaching 1M+ people across Myanmar.',
      image: 'https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg?auto=compress&cs=tinysrgb&w=600',
      tags: ['Campaign', 'Video Production', 'PR'],
      results: ['1M+ people reached', '75% awareness increase', '20+ partner organizations'],
      duration: '12 months',
      color: 'from-[#004FED] to-[#0099FF]'
    },
    {
      title: 'Mon State Bank',
      category: 'Financial Services',
      description: 'Digital banking campaign and mobile app promotion for modern banking services.',
      image: 'https://images.pexels.com/photos/164686/pexels-photo-164686.jpeg?auto=compress&cs=tinysrgb&w=600',
      tags: ['Digital Marketing', 'App Promotion', 'Finance'],
      results: ['100,000+ app downloads', '35% increase in digital transactions', '90% customer satisfaction'],
      duration: '5 months',
      color: 'from-[#0080FF] to-[#004FED]'
    }
  ];

  const categories = ['All', 'Branding', 'Digital Marketing', 'Event Marketing', 'Tourism', 'Sustainability', 'Finance'];
  const [selectedCategory, setSelectedCategory] = React.useState('All');

  const filteredProjects = selectedCategory === 'All' 
    ? projects 
    : projects.filter(project => project.tags.some(tag => tag.toLowerCase().includes(selectedCategory.toLowerCase())));

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-32 bg-gradient-to-br from-[#004FED]/5 via-white to-[#004FED]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <EditableText
            id="portfolio-hero-title"
            defaultContent="Our Portfolio"
            className="text-5xl md:text-7xl font-black text-gray-900 mb-6"
            tag="h1"
          />
          <EditableText
            id="portfolio-hero-description"
            defaultContent="Explore our diverse portfolio of successful campaigns and projects that have helped businesses grow and thrive."
            className="text-2xl text-gray-600 max-w-4xl mx-auto font-light leading-relaxed mb-12"
            tag="p"
          />
          <div className="inline-flex items-center px-6 py-3 bg-white/90 backdrop-blur-md rounded-full border border-[#004FED]/20 shadow-lg">
            <EditableText
              id="portfolio-hero-badge"
              defaultContent="🏆 Award-Winning Campaigns"
              className="text-lg font-semibold text-[#004FED]"
              tag="span"
            />
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-8 py-4 rounded-2xl font-semibold transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-[#004FED] to-[#0066FF] text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-[#004FED]/10 hover:text-[#004FED]'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-32 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {filteredProjects.map((project, index) => (
              <div
                key={index}
                className="group bg-white rounded-3xl shadow-2xl overflow-hidden hover:shadow-2xl hover:shadow-[#004FED]/10 hover:-translate-y-4 transition-all duration-500 border border-gray-100"
              >
                {/* Image */}
                <div className="relative overflow-hidden h-80">
                  <EditableImage
                    id={`portfolio-project-image-${index}`}
                    defaultSrc={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
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
                <div className="p-10">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="flex items-center space-x-2 text-gray-500">
                      <Calendar className="w-5 h-5" />
                      <span className="text-sm font-medium">{project.duration}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-[#004FED]">
                      <Award className="w-5 h-5" />
                      <span className="text-sm font-medium">Featured Project</span>
                    </div>
                  </div>

                  <EditableText
                    id={`portfolio-project-title-${index}`}
                    defaultContent={project.title}
                    className="text-3xl font-bold text-gray-900 mb-4 group-hover:text-[#004FED] transition-colors duration-300"
                    tag="h3"
                  />
                  <EditableText
                    id={`portfolio-project-description-${index}`}
                    defaultContent={project.description}
                    className="text-gray-600 mb-8 leading-relaxed text-lg"
                    tag="p"
                  />

                  {/* Results */}
                  <div className="mb-8">
                    <h4 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
                      <TrendingUp className="w-5 h-5 mr-2 text-[#004FED]" />
                      Key Results
                    </h4>
                    <ul className="space-y-2">
                      {project.results.map((result, resultIndex) => (
                        <li key={resultIndex} className="flex items-center space-x-3">
                          <div className="w-2 h-2 bg-[#004FED] rounded-full"></div>
                          <EditableText
                            id={`portfolio-project-result-${index}-${resultIndex}`}
                            defaultContent={result}
                            className="text-gray-600"
                            tag="span"
                          />
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  {/* Tags */}
                  <div className="flex flex-wrap gap-3">
                    {project.tags.map((tag, tagIndex) => (
                      <EditableText
                        key={tagIndex}
                        id={`portfolio-project-tag-${index}-${tagIndex}`}
                        defaultContent={tag}
                        className="px-4 py-2 text-sm font-semibold bg-[#004FED]/10 text-[#004FED] rounded-full hover:bg-[#004FED]/20 transition-colors duration-300"
                        tag="span"
                      />
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-32 bg-gradient-to-r from-[#004FED] to-[#0066FF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <EditableText
              id="portfolio-stats-title"
              defaultContent="Portfolio Impact"
              className="text-4xl md:text-6xl font-bold text-white mb-6"
              tag="h2"
            />
            <EditableText
              id="portfolio-stats-description"
              defaultContent="Measurable results across all our projects"
              className="text-xl text-blue-100 max-w-3xl mx-auto font-light"
              tag="p"
            />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
            <EditableStatBlock
              id="portfolio-stat-campaigns"
              number="3000+"
              label="Ad Campaigns"
              numberClassName="text-4xl md:text-5xl font-black text-white mb-3"
              labelClassName="text-blue-100 font-semibold text-lg"
            />
            <EditableStatBlock
              id="portfolio-stat-roi"
              number="250%"
              label="Average ROI Increase"
              numberClassName="text-4xl md:text-5xl font-black text-white mb-3"
              labelClassName="text-blue-100 font-semibold text-lg"
            />
            <EditableStatBlock
              id="portfolio-stat-clients"
              number="500+"
              label="Clients Served"
              numberClassName="text-4xl md:text-5xl font-black text-white mb-3"
              labelClassName="text-blue-100 font-semibold text-lg"
            />
            <EditableStatBlock
              id="portfolio-stat-satisfaction"
              number="100%"
              label="Client Satisfaction"
              numberClassName="text-4xl md:text-5xl font-black text-white mb-3"
              labelClassName="text-blue-100 font-semibold text-lg"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gradient-to-r from-[#004FED]/5 to-[#0066FF]/10 rounded-3xl p-12 md:p-16 border border-[#004FED]/10">
            <EditableText
              id="portfolio-cta-title"
              defaultContent="Ready to Join Our Success Stories?"
              className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
              tag="h3"
            />
            <EditableText
              id="portfolio-cta-description"
              defaultContent="Let's create something amazing together. Contact us to discuss your project and see how we can help you achieve your goals."
              className="text-2xl text-gray-600 mb-12 max-w-3xl mx-auto font-light"
              tag="p"
            />
            <button className="inline-flex items-center space-x-3 bg-gradient-to-r from-[#004FED] to-[#0066FF] text-white px-12 py-6 rounded-2xl text-xl font-bold hover:shadow-2xl hover:shadow-[#004FED]/30 transform hover:-translate-y-2 transition-all duration-400">
              <span>Start Your Project</span>
              <ArrowRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PortfolioPage;