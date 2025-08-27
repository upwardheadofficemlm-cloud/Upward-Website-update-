import React from 'react';
import EditableText from '../../components/cms/EditableText';
import EditableImage from '../../components/cms/EditableImage';
import EditableIcon from '../../components/cms/EditableIcon';
import EditableSection from '../../components/cms/EditableSection';
import EditableFloatingStatCard from '../../components/cms/EditableFloatingStatCard';
import EditableStatBlock from '../../components/cms/EditableStatBlock';
import { Search, TrendingUp, Target, BarChart3, CheckCircle, ArrowRight, Award, ExternalLink, Trash2 } from 'lucide-react';
import { useCMS } from '../../contexts/CMSContext';

const SEOServicesPage = () => {
  const { isAdmin, isEditing } = useCMS();
  const [seoServices, setSeoServices] = React.useState([
    {
      id: 'seo-onpage',
      icon: 'search',
      name: 'On-Page SEO',
      description: 'Optimize your website content and structure for better search engine rankings',
      features: ['Keyword Optimization', 'Meta Tags', 'Content Optimization', 'Internal Linking'],
      color: 'from-[#4285F4] to-[#34A853]'
    },
    {
      id: 'seo-technical',
      icon: 'zap',
      name: 'Technical SEO',
      description: 'Improve your website\'s technical foundation for search engines',
      features: ['Site Speed Optimization', 'Mobile Optimization', 'Schema Markup', 'XML Sitemaps'],
      color: 'from-[#EA4335] to-[#FBBC04]'
    },
    {
      id: 'seo-local',
      icon: 'map-pin',
      name: 'Local SEO',
      description: 'Dominate local search results and attract nearby customers',
      features: ['Google My Business', 'Local Citations', 'Review Management', 'Local Keywords'],
      color: 'from-[#34A853] to-[#4285F4]'
    },
    {
      id: 'seo-analytics',
      icon: 'bar-chart3',
      name: 'SEO Analytics',
      description: 'Track and measure your SEO performance with detailed reporting',
      features: ['Ranking Tracking', 'Traffic Analysis', 'Competitor Analysis', 'ROI Reporting'],
      color: 'from-[#FBBC04] to-[#EA4335]'
    }
  ]);

  const [features, setFeatures] = React.useState([
    {
      id: 'feature-research',
      icon: 'target',
      title: 'Keyword Research',
      description: 'In-depth keyword analysis and strategy development'
    },
    {
      id: 'feature-content',
      icon: 'edit3',
      title: 'Content Optimization',
      description: 'SEO-optimized content creation and optimization'
    },
    {
      id: 'feature-linkbuilding',
      icon: 'trending-up',
      title: 'Link Building',
      description: 'High-quality backlink acquisition strategies'
    },
    {
      id: 'feature-monitoring',
      icon: 'bar-chart3',
      title: 'Performance Monitoring',
      description: 'Continuous tracking and optimization'
    }
  ]);

  const packages = [
    {
      id: 'seo-starter',
      name: 'SEO Starter',
      price: '600,000',
      period: 'MMK/month',
      description: 'Essential SEO for small businesses',
      features: [
        'Keyword Research (20 keywords)',
        'On-Page Optimization',
        'Google My Business Setup',
        'Monthly SEO Report',
        'Basic Technical SEO'
      ],
      buttonText: 'Get Started',
      buttonLink: '#contact',
      buttonType: 'internal' as 'internal' | 'external'
    },
    {
      id: 'seo-professional',
      name: 'SEO Professional',
      price: '1,200,000',
      period: 'MMK/month',
      description: 'Comprehensive SEO strategy',
      features: [
        'Keyword Research (50 keywords)',
        'Complete On-Page SEO',
        'Technical SEO Audit',
        'Content Creation (4 articles)',
        'Link Building Campaign'
      ],
      popular: true,
      buttonText: 'Get Started',
      buttonLink: '#contact',
      buttonType: 'internal' as 'internal' | 'external'
    },
    {
      id: 'seo-enterprise',
      name: 'SEO Enterprise',
      price: 'Custom',
      period: 'Pricing',
      description: 'Advanced SEO for large businesses',
      features: [
        'Unlimited Keywords',
        'Advanced Technical SEO',
        'Competitor Analysis',
        'Custom Content Strategy',
        'Dedicated SEO Manager'
      ],
      buttonText: 'Contact Sales',
      buttonLink: 'https://wa.me/959740977946',
      buttonType: 'external' as 'internal' | 'external'
    }
  ];

  const results = [
    { metric: '400%', label: 'Average Traffic Increase', icon: TrendingUp },
    { metric: '85%', label: 'First Page Rankings', icon: Target },
    { metric: '300%', label: 'Lead Generation Boost', icon: BarChart3 },
    { metric: '6 Months', label: 'Average Results Timeline', icon: Award }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-32 bg-gradient-to-br from-[#004FED]/5 via-white to-[#004FED]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <div className="inline-flex items-center px-6 py-3 bg-white/90 backdrop-blur-md rounded-full border border-[#004FED]/20 mb-8 shadow-lg">
                <Search className="w-5 h-5 text-[#004FED] mr-2" />
                <span className="text-base font-semibold text-[#004FED]">SEO Services</span>
              </div>
              
              <EditableText
                id="seo-services-hero-title"
                defaultContent="SEO Services"
                className="text-5xl md:text-7xl font-black text-gray-900 mb-8 leading-tight"
                tag="h1"
              />
              
              <EditableText
                id="seo-services-hero-description"
                defaultContent="Dominate search engine results and drive organic traffic to your website. Our comprehensive SEO strategies help Myanmar businesses rank higher on Google and attract more qualified customers."
                className="text-2xl text-gray-600 mb-12 leading-relaxed font-light"
                tag="p"
              />

              <div className="flex flex-col sm:flex-row space-y-6 sm:space-y-0 sm:space-x-8">
                <button className="bg-gradient-to-r from-[#004FED] to-[#0066FF] text-white px-10 py-5 rounded-2xl text-xl font-bold hover:shadow-2xl hover:shadow-[#004FED]/30 transform hover:-translate-y-2 transition-all duration-400 flex items-center space-x-3">
                  <span>Get SEO Audit</span>
                  <ArrowRight className="w-6 h-6" />
                </button>
                <button className="border-2 border-[#004FED] text-[#004FED] px-10 py-5 rounded-2xl text-xl font-bold hover:bg-[#004FED] hover:text-white transition-all duration-400">
                  View Case Studies
                </button>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl">
                <EditableImage
                  id="seo-services-hero-image"
                  defaultSrc="https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="SEO Services"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-10 -right-10 bg-white p-8 rounded-2xl shadow-2xl border border-gray-100">
                <EditableFloatingStatCard
                  id="seo-services-hero-stat"
                  number="Top 3 Rankings"
                  label="For 85% of Keywords"
                  icon={Search}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SEO Services Section */}
      <EditableSection
        id="seo-services-types-section"
        className="py-32 bg-white"
        canAddItems={true}
        onAddItem={() => {
          const newService = {
            id: `seo-${Date.now()}`,
            icon: 'search',
            name: 'New SEO Service',
            description: 'Description of the new SEO service',
            features: ['Feature 1', 'Feature 2', 'Feature 3', 'Feature 4'],
            color: 'from-[#004FED] to-[#0066FF]'
          };
          setSeoServices([...seoServices, newService]);
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <EditableText
              id="seo-services-types-title"
              defaultContent="Our SEO Services"
              className="text-4xl md:text-6xl font-black text-gray-900 mb-6"
              tag="h2"
            />
            <EditableText
              id="seo-services-types-description"
              defaultContent="Comprehensive SEO solutions to improve your search engine visibility"
              className="text-xl text-gray-600 max-w-3xl mx-auto font-light"
              tag="p"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {seoServices.map((service, index) => (
              <div key={service.id} className="bg-gradient-to-br from-gray-50 to-white p-10 rounded-3xl border border-gray-100 hover:shadow-2xl hover:-translate-y-4 transition-all duration-500 relative group">
                <div className={`w-20 h-20 bg-gradient-to-r ${service.color} rounded-2xl p-5 mb-8 shadow-lg`}>
                  <EditableIcon
                    id={`seo-service-icon-${service.id}`}
                    defaultIcon={service.icon}
                    className="w-10 h-10 text-white"
                    onIconChange={(newIcon) => {
                      setSeoServices(seoServices.map(s => s.id === service.id ? { ...s, icon: newIcon } : s));
                    }}
                  />
                </div>
                
                <EditableText
                  id={`seo-service-name-${service.id}`}
                  defaultContent={service.name}
                  className="text-2xl font-bold text-gray-900 mb-4"
                  tag="h3"
                />
                
                <EditableText
                  id={`seo-service-description-${service.id}`}
                  defaultContent={service.description}
                  className="text-gray-600 leading-relaxed text-lg mb-6"
                  tag="p"
                />
                
                <ul className="space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-[#004FED] flex-shrink-0" />
                      <EditableText
                        id={`seo-service-feature-${service.id}-${featureIndex}`}
                        defaultContent={feature}
                        className="text-gray-600"
                        tag="span"
                      />
                    </li>
                  ))}
                </ul>

                {isAdmin && isEditing && seoServices.length > 1 && (
                  <button
                    onClick={() => {
                      if (window.confirm('Are you sure you want to remove this SEO service?')) {
                        setSeoServices(seoServices.filter(s => s.id !== service.id));
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

      {/* Results Section */}
      <section className="py-32 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <EditableText
              id="seo-services-results-title"
              defaultContent="SEO Results That Matter"
              className="text-4xl md:text-6xl font-black text-gray-900 mb-6"
              tag="h2"
            />
            <EditableText
              id="seo-services-results-description"
              defaultContent="Our SEO strategies deliver measurable improvements in search rankings and organic traffic"
              className="text-xl text-gray-600 max-w-3xl mx-auto font-light"
              tag="p"
            />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
            {results.map((result, index) => (
              <EditableStatBlock
                key={index}
                id={`seo-services-result-${index}`}
                number={result.metric}
                label={result.label}
                icon={result.icon}
                className="group cursor-pointer"
                numberClassName="text-4xl md:text-5xl font-black text-[#004FED] mb-3"
                labelClassName="text-gray-600 font-semibold text-lg"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <EditableSection
        id="seo-services-features-section"
        className="py-32 bg-white"
        canAddItems={true}
        onAddItem={() => {
          const newFeature = {
            id: `feature-${Date.now()}`,
            icon: 'star',
            title: 'New Feature',
            description: 'Description of the new feature'
          };
          setFeatures([...features, newFeature]);
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <EditableText
              id="seo-services-features-title"
              defaultContent="What's Included"
              className="text-4xl md:text-6xl font-black text-gray-900 mb-6"
              tag="h2"
            />
            <EditableText
              id="seo-services-features-description"
              defaultContent="Comprehensive SEO features to boost your search engine performance"
              className="text-xl text-gray-600 max-w-3xl mx-auto font-light"
              tag="p"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {features.map((feature, index) => (
              <div key={feature.id} className="bg-white rounded-3xl p-10 shadow-xl border border-gray-100 hover:shadow-2xl hover:-translate-y-4 transition-all duration-500 text-center relative group">
                <div className="w-20 h-20 bg-gradient-to-r from-[#004FED]/10 to-[#0066FF]/20 rounded-2xl flex items-center justify-center mx-auto mb-8">
                  <EditableIcon
                    id={`seo-feature-icon-${feature.id}`}
                    defaultIcon={feature.icon}
                    className="w-10 h-10 text-[#004FED]"
                    onIconChange={(newIcon) => {
                      setFeatures(features.map(f => f.id === feature.id ? { ...f, icon: newIcon } : f));
                    }}
                  />
                </div>
                
                <EditableText
                  id={`seo-feature-title-${feature.id}`}
                  defaultContent={feature.title}
                  className="text-2xl font-bold text-gray-900 mb-4"
                  tag="h3"
                />
                
                <EditableText
                  id={`seo-feature-description-${feature.id}`}
                  defaultContent={feature.description}
                  className="text-gray-600 leading-relaxed text-lg"
                  tag="p"
                />

                {isAdmin && isEditing && features.length > 1 && (
                  <button
                    onClick={() => {
                      if (window.confirm('Are you sure you want to remove this feature?')) {
                        setFeatures(features.filter(f => f.id !== feature.id));
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

      {/* Pricing Section */}
      <section className="py-32 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <EditableText
              id="seo-services-pricing-title"
              defaultContent="SEO Packages"
              className="text-4xl md:text-6xl font-black text-gray-900 mb-6"
              tag="h2"
            />
            <EditableText
              id="seo-services-pricing-description"
              defaultContent="Choose the perfect SEO package to boost your search engine rankings"
              className="text-xl text-gray-600 max-w-3xl mx-auto font-light"
              tag="p"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {packages.map((pkg, index) => (
              <div
                key={index}
                className={`relative bg-white rounded-3xl p-10 shadow-xl border transition-all duration-500 hover:-translate-y-2 ${
                  pkg.popular 
                    ? 'border-[#004FED] shadow-2xl shadow-[#004FED]/20' 
                    : 'border-gray-100 hover:shadow-2xl hover:shadow-[#004FED]/10'
                }`}
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-[#004FED] to-[#0066FF] text-white px-6 py-2 rounded-full text-sm font-bold">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{pkg.name}</h3>
                  <div className="mb-4">
                    <span className="text-4xl font-black text-[#004FED]">{pkg.price}</span>
                    <span className="text-gray-600 ml-2">{pkg.period}</span>
                  </div>
                  <p className="text-gray-600">{pkg.description}</p>
                </div>

                <ul className="space-y-4 mb-10">
                  {pkg.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-[#004FED] flex-shrink-0" />
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button 
                  onClick={() => {
                    if (pkg.buttonType === 'external') {
                      window.open(pkg.buttonLink, '_blank', 'noopener noreferrer');
                    } else {
                      if (pkg.buttonLink.startsWith('#')) {
                        const element = document.querySelector(pkg.buttonLink);
                        if (element) {
                          element.scrollIntoView({ behavior: 'smooth' });
                        }
                      } else {
                        window.location.href = pkg.buttonLink;
                      }
                    }
                  }}
                  className={`w-full py-4 rounded-xl font-bold transition-all duration-300 flex items-center justify-center space-x-2 ${
                    pkg.popular
                      ? 'bg-gradient-to-r from-[#004FED] to-[#0066FF] text-white hover:shadow-xl hover:shadow-[#004FED]/30'
                      : 'bg-gray-100 text-gray-900 hover:bg-[#004FED]/10 hover:text-[#004FED]'
                  }`}
                >
                  <span>{pkg.buttonText}</span>
                  {pkg.buttonType === 'external' && <ExternalLink className="w-4 h-4" />}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-gradient-to-r from-[#004FED] to-[#0066FF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <EditableText
            id="seo-services-cta-title"
            defaultContent="Ready to Dominate Search Results?"
            className="text-4xl md:text-6xl font-bold text-white mb-8"
            tag="h2"
          />
          <EditableText
            id="seo-services-cta-description"
            defaultContent="Let's create an SEO strategy that puts your business at the top of Google search results and drives qualified organic traffic."
            className="text-2xl text-blue-100 mb-12 max-w-3xl mx-auto font-light"
            tag="p"
          />
          <button className="inline-flex items-center space-x-3 bg-white text-[#004FED] px-12 py-6 rounded-2xl text-xl font-bold hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-400">
            <span>Get Free SEO Audit</span>
            <ArrowRight className="w-6 h-6" />
          </button>
        </div>
      </section>
    </div>
  );
};

export default SEOServicesPage;