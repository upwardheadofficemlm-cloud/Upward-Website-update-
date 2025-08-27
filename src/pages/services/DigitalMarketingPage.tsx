import React from 'react';
import EditableText from '../../components/cms/EditableText';
import EditableImage from '../../components/cms/EditableImage';
import EditableFloatingStatCard from '../../components/cms/EditableFloatingStatCard';
import EditableStatBlock from '../../components/cms/EditableStatBlock';
import { Search, TrendingUp, Target, BarChart3, CheckCircle, ArrowRight, Award, ExternalLink } from 'lucide-react';

const DigitalMarketingPage = () => {
  const services = [
    {
      icon: Search,
      title: 'Search Engine Optimization',
      description: 'Improve your website\'s visibility on Google and other search engines',
      features: ['Keyword Research', 'On-Page SEO', 'Technical SEO', 'Local SEO']
    },
    {
      icon: Target,
      title: 'Google Ads Management',
      description: 'Targeted advertising campaigns that drive qualified traffic and conversions',
      features: ['Campaign Setup', 'Keyword Bidding', 'Ad Copy Creation', 'Performance Tracking']
    },
    {
      icon: BarChart3,
      title: 'Social Media Advertising',
      description: 'Facebook, Instagram, and LinkedIn ads that reach your ideal customers',
      features: ['Audience Targeting', 'Creative Development', 'A/B Testing', 'ROI Optimization']
    },
    {
      icon: TrendingUp,
      title: 'Analytics & Reporting',
      description: 'Comprehensive tracking and reporting to measure your digital success',
      features: ['Google Analytics', 'Conversion Tracking', 'Monthly Reports', 'Strategy Optimization']
    }
  ];

  const packages = [
    {
      id: 'digital-starter',
      name: 'Starter Digital',
      price: '600,000',
      period: 'MMK/month',
      description: 'Perfect for small businesses',
      features: [
        'Basic SEO Setup',
        'Google My Business Optimization',
        'Monthly Analytics Report',
        'Email Support',
        '1 Social Media Platform'
      ],
      buttonText: 'Get Started',
      buttonLink: '#contact',
      buttonType: 'internal' as 'internal' | 'external'
    },
    {
      id: 'digital-professional',
      name: 'Professional Digital',
      price: '1,200,000',
      period: 'MMK/month',
      description: 'Comprehensive digital marketing',
      features: [
        'Advanced SEO Strategy',
        'Google Ads Management',
        'Social Media Advertising',
        'Weekly Performance Reports',
        'Phone & Email Support'
      ],
      popular: true,
      buttonText: 'Get Started',
      buttonLink: '#contact',
      buttonType: 'internal' as 'internal' | 'external'
    },
    {
      id: 'digital-enterprise',
      name: 'Enterprise Digital',
      price: 'Custom',
      period: 'Pricing',
      description: 'Full-scale digital dominance',
      features: [
        'Complete Digital Strategy',
        'Multi-Platform Campaigns',
        'Dedicated Account Manager',
        'Real-time Dashboard',
        '24/7 Priority Support'
      ],
      buttonText: 'Contact Sales',
      buttonLink: 'https://wa.me/959740977946',
      buttonType: 'external' as 'internal' | 'external'
    }
  ];

  const results = [
    { metric: '300%', label: 'Average Traffic Increase', icon: TrendingUp },
    { metric: '250%', label: 'ROI Improvement', icon: BarChart3 },
    { metric: '180%', label: 'Lead Generation Boost', icon: Target },
    { metric: '95%', label: 'Client Satisfaction Rate', icon: Award }
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
                <span className="text-base font-semibold text-[#004FED]">Digital Marketing Services</span>
              </div>
              
              <EditableText
                id="digital-marketing-hero-title"
                defaultContent="Dominate Digital Channels"
                className="text-5xl md:text-7xl font-black text-gray-900 mb-8 leading-tight"
                tag="h1"
              />
              
              <EditableText
                id="digital-marketing-hero-description"
                defaultContent="Drive qualified traffic, generate leads, and increase sales through strategic digital marketing campaigns tailored for the Myanmar market."
                className="text-2xl text-gray-600 mb-12 leading-relaxed font-light"
                tag="p"
              />

              <div className="flex flex-col sm:flex-row space-y-6 sm:space-y-0 sm:space-x-8">
                <button className="bg-gradient-to-r from-[#004FED] to-[#0066FF] text-white px-10 py-5 rounded-2xl text-xl font-bold hover:shadow-2xl hover:shadow-[#004FED]/30 transform hover:-translate-y-2 transition-all duration-400 flex items-center space-x-3">
                  <span>Get Free Audit</span>
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
                  id="digital-marketing-hero-image"
                  defaultSrc="https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Digital Marketing"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-10 -right-10 bg-white p-8 rounded-2xl shadow-2xl border border-gray-100">
                <EditableFloatingStatCard
                  id="digital-marketing-hero-stat"
                  number="3000+ Campaigns"
                  label="Successfully Managed"
                  icon={TrendingUp}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-black text-gray-900 mb-6">
              Our Digital <span className="bg-gradient-to-r from-[#004FED] to-[#0066FF] bg-clip-text text-transparent">Services</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light">
              Comprehensive digital marketing solutions to grow your online presence
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {services.map((service, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-50 to-white p-10 rounded-3xl border border-gray-100 hover:shadow-2xl hover:-translate-y-4 transition-all duration-500">
                <div className="w-20 h-20 bg-gradient-to-r from-[#004FED] to-[#0066FF] rounded-2xl p-5 mb-8 shadow-lg">
                  <service.icon className="w-10 h-10 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed text-lg mb-6">{service.description}</p>
                
                <ul className="space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-[#004FED] flex-shrink-0" />
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-32 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-black text-gray-900 mb-6">
              Proven <span className="bg-gradient-to-r from-[#004FED] to-[#0066FF] bg-clip-text text-transparent">Results</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light">
              Our digital marketing campaigns deliver measurable results
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
            {results.map((result, index) => (
              <EditableStatBlock
                key={index}
                id={`digital-marketing-result-${index}`}
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

      {/* Pricing Section */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-black text-gray-900 mb-6">
              Digital Marketing <span className="bg-gradient-to-r from-[#004FED] to-[#0066FF] bg-clip-text text-transparent">Packages</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light">
              Choose the perfect digital marketing solution for your business
            </p>
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
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-8">
            Ready to Grow Your Business Online?
          </h2>
          <p className="text-2xl text-blue-100 mb-12 max-w-3xl mx-auto font-light">
            Let's create a digital marketing strategy that drives real results for your business in Myanmar.
          </p>
          <button className="inline-flex items-center space-x-3 bg-white text-[#004FED] px-12 py-6 rounded-2xl text-xl font-bold hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-400">
            <span>Get Free Digital Audit</span>
            <ArrowRight className="w-6 h-6" />
          </button>
        </div>
      </section>
    </div>
  );
};

export default DigitalMarketingPage;