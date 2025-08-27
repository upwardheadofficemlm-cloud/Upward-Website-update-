import React from 'react';
import EditableText from '../../components/cms/EditableText';
import EditableImage from '../../components/cms/EditableImage';
import EditableIcon from '../../components/cms/EditableIcon';
import EditableSection from '../../components/cms/EditableSection';
import EditableFloatingStatCard from '../../components/cms/EditableFloatingStatCard';
import { Share2, Users, TrendingUp, Heart, CheckCircle, ArrowRight, Award, ExternalLink, Trash2 } from 'lucide-react';
import { useCMS } from '../../contexts/CMSContext';

const SocialMediaPage = () => {
  const { isAdmin, isEditing } = useCMS();
  const [platforms, setPlatforms] = React.useState([
    {
      id: 'platform-facebook',
      icon: 'share2',
      name: 'Facebook Marketing',
      description: 'Build communities and drive engagement with targeted Facebook campaigns',
      features: ['Page Management', 'Content Creation', 'Paid Advertising', 'Community Building'],
      color: 'from-[#1877F2] to-[#42A5F5]'
    },
    {
      id: 'platform-instagram',
      icon: 'heart',
      name: 'Instagram Marketing',
      description: 'Visual storytelling that captures attention and drives brand awareness',
      features: ['Visual Content', 'Stories & Reels', 'Influencer Partnerships', 'Shopping Integration'],
      color: 'from-[#E4405F] to-[#F77737]'
    },
    {
      id: 'platform-linkedin',
      icon: 'users',
      name: 'LinkedIn Marketing',
      description: 'Professional networking and B2B lead generation strategies',
      features: ['Professional Content', 'Lead Generation', 'Company Pages', 'Industry Networking'],
      color: 'from-[#0077B5] to-[#00A0DC]'
    },
    {
      id: 'platform-tiktok',
      icon: 'trending-up',
      name: 'TikTok Marketing',
      description: 'Viral content creation for younger demographics and trending topics',
      features: ['Viral Content', 'Trend Analysis', 'Creative Videos', 'Youth Targeting'],
      color: 'from-[#000000] to-[#FF0050]'
    }
  ]);

  const [services, setServices] = React.useState([
    {
      id: 'service-strategy',
      icon: 'target',
      title: 'Social Media Strategy',
      description: 'Comprehensive social media planning and execution'
    },
    {
      id: 'service-content',
      icon: 'book-open',
      title: 'Content Creation',
      description: 'Engaging posts, stories, and multimedia content'
    },
    {
      id: 'service-management',
      icon: 'users',
      title: 'Community Management',
      description: 'Active engagement and community building'
    },
    {
      id: 'service-advertising',
      icon: 'trending-up',
      title: 'Social Advertising',
      description: 'Targeted paid campaigns across all platforms'
    }
  ]);

  const packages = [
    {
      id: 'social-starter',
      name: 'Social Starter',
      price: '400,000',
      period: 'MMK/month',
      description: 'Perfect for small businesses',
      features: [
        '2 Social Media Platforms',
        '12 Posts per Month',
        'Basic Analytics',
        'Community Management',
        'Monthly Strategy Review'
      ],
      buttonText: 'Get Started',
      buttonLink: '#contact',
      buttonType: 'internal' as 'internal' | 'external'
    },
    {
      id: 'social-professional',
      name: 'Social Professional',
      price: '800,000',
      period: 'MMK/month',
      description: 'Complete social media management',
      features: [
        '4 Social Media Platforms',
        '20 Posts per Month',
        'Advanced Analytics',
        'Paid Advertising Management',
        'Weekly Performance Reports'
      ],
      popular: true,
      buttonText: 'Get Started',
      buttonLink: '#contact',
      buttonType: 'internal' as 'internal' | 'external'
    },
    {
      id: 'social-enterprise',
      name: 'Social Enterprise',
      price: 'Custom',
      period: 'Pricing',
      description: 'Full-scale social media dominance',
      features: [
        'All Major Platforms',
        'Unlimited Content',
        'Influencer Partnerships',
        'Real-time Monitoring',
        'Dedicated Social Media Manager'
      ],
      buttonText: 'Contact Sales',
      buttonLink: 'https://wa.me/959740977946',
      buttonType: 'external' as 'internal' | 'external'
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-32 bg-gradient-to-br from-[#004FED]/5 via-white to-[#004FED]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <div className="inline-flex items-center px-6 py-3 bg-white/90 backdrop-blur-md rounded-full border border-[#004FED]/20 mb-8 shadow-lg">
                <Share2 className="w-5 h-5 text-[#004FED] mr-2" />
                <span className="text-base font-semibold text-[#004FED]">Social Media Marketing</span>
              </div>
              
              <EditableText
                id="social-media-hero-title"
                defaultContent="Social Media Marketing"
                className="text-5xl md:text-7xl font-black text-gray-900 mb-8 leading-tight"
                tag="h1"
              />
              
              <EditableText
                id="social-media-hero-description"
                defaultContent="Build meaningful connections with your audience across all social platforms. From content creation to community management, we help your brand thrive in the social media landscape."
                className="text-2xl text-gray-600 mb-12 leading-relaxed font-light"
                tag="p"
              />

              <div className="flex flex-col sm:flex-row space-y-6 sm:space-y-0 sm:space-x-8">
                <button className="bg-gradient-to-r from-[#004FED] to-[#0066FF] text-white px-10 py-5 rounded-2xl text-xl font-bold hover:shadow-2xl hover:shadow-[#004FED]/30 transform hover:-translate-y-2 transition-all duration-400 flex items-center space-x-3">
                  <span>Start Social Campaign</span>
                  <ArrowRight className="w-6 h-6" />
                </button>
                <button className="border-2 border-[#004FED] text-[#004FED] px-10 py-5 rounded-2xl text-xl font-bold hover:bg-[#004FED] hover:text-white transition-all duration-400">
                  View Portfolio
                </button>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl">
                <EditableImage
                  id="social-media-hero-image"
                  defaultSrc="https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Social Media Marketing"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-10 -right-10 bg-white p-8 rounded-2xl shadow-2xl border border-gray-100">
                <EditableFloatingStatCard
                  id="social-media-hero-stat"
                  number="1M+ Followers"
                  label="Generated for Clients"
                  icon={Users}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Platforms Section */}
      <EditableSection
        id="social-media-platforms-section"
        className="py-32 bg-white"
        canAddItems={true}
        onAddItem={() => {
          const newPlatform = {
            id: `platform-${Date.now()}`,
            icon: 'share2',
            name: 'New Platform',
            description: 'Description of the new social media platform',
            features: ['Feature 1', 'Feature 2', 'Feature 3', 'Feature 4'],
            color: 'from-[#004FED] to-[#0066FF]'
          };
          setPlatforms([...platforms, newPlatform]);
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <EditableText
              id="social-media-platforms-title"
              defaultContent="Social Media Platforms"
              className="text-4xl md:text-6xl font-black text-gray-900 mb-6"
              tag="h2"
            />
            <EditableText
              id="social-media-platforms-description"
              defaultContent="We manage your presence across all major social media platforms"
              className="text-xl text-gray-600 max-w-3xl mx-auto font-light"
              tag="p"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {platforms.map((platform, index) => (
              <div key={platform.id} className="bg-gradient-to-br from-gray-50 to-white p-10 rounded-3xl border border-gray-100 hover:shadow-2xl hover:-translate-y-4 transition-all duration-500 relative group">
                <div className={`w-20 h-20 bg-gradient-to-r ${platform.color} rounded-2xl p-5 mb-8 shadow-lg`}>
                  <EditableIcon
                    id={`social-platform-icon-${platform.id}`}
                    defaultIcon={platform.icon}
                    className="w-10 h-10 text-white"
                    onIconChange={(newIcon) => {
                      setPlatforms(platforms.map(p => p.id === platform.id ? { ...p, icon: newIcon } : p));
                    }}
                  />
                </div>
                
                <EditableText
                  id={`social-platform-name-${platform.id}`}
                  defaultContent={platform.name}
                  className="text-2xl font-bold text-gray-900 mb-4"
                  tag="h3"
                />
                
                <EditableText
                  id={`social-platform-description-${platform.id}`}
                  defaultContent={platform.description}
                  className="text-gray-600 leading-relaxed text-lg mb-6"
                  tag="p"
                />
                
                <ul className="space-y-3">
                  {platform.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-[#004FED] flex-shrink-0" />
                      <EditableText
                        id={`social-platform-feature-${platform.id}-${featureIndex}`}
                        defaultContent={feature}
                        className="text-gray-600"
                        tag="span"
                      />
                    </li>
                  ))}
                </ul>

                {isAdmin && isEditing && platforms.length > 1 && (
                  <button
                    onClick={() => {
                      if (window.confirm('Are you sure you want to remove this platform?')) {
                        setPlatforms(platforms.filter(p => p.id !== platform.id));
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

      {/* Services Section */}
      <EditableSection
        id="social-media-services-section"
        className="py-32 bg-gradient-to-b from-gray-50 to-white"
        canAddItems={true}
        onAddItem={() => {
          const newService = {
            id: `service-${Date.now()}`,
            icon: 'star',
            title: 'New Service',
            description: 'Description of the new service'
          };
          setServices([...services, newService]);
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <EditableText
              id="social-media-services-title"
              defaultContent="Our Social Media Services"
              className="text-4xl md:text-6xl font-black text-gray-900 mb-6"
              tag="h2"
            />
            <EditableText
              id="social-media-services-description"
              defaultContent="Comprehensive social media solutions to grow your online presence"
              className="text-xl text-gray-600 max-w-3xl mx-auto font-light"
              tag="p"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {services.map((service, index) => (
              <div key={service.id} className="bg-white rounded-3xl p-10 shadow-xl border border-gray-100 hover:shadow-2xl hover:-translate-y-4 transition-all duration-500 text-center relative group">
                <div className="w-20 h-20 bg-gradient-to-r from-[#004FED]/10 to-[#0066FF]/20 rounded-2xl flex items-center justify-center mx-auto mb-8">
                  <EditableIcon
                    id={`social-service-icon-${service.id}`}
                    defaultIcon={service.icon}
                    className="w-10 h-10 text-[#004FED]"
                    onIconChange={(newIcon) => {
                      setServices(services.map(s => s.id === service.id ? { ...s, icon: newIcon } : s));
                    }}
                  />
                </div>
                
                <EditableText
                  id={`social-service-title-${service.id}`}
                  defaultContent={service.title}
                  className="text-2xl font-bold text-gray-900 mb-4"
                  tag="h3"
                />
                
                <EditableText
                  id={`social-service-description-${service.id}`}
                  defaultContent={service.description}
                  className="text-gray-600 leading-relaxed text-lg"
                  tag="p"
                />

                {isAdmin && isEditing && services.length > 1 && (
                  <button
                    onClick={() => {
                      if (window.confirm('Are you sure you want to remove this service?')) {
                        setServices(services.filter(s => s.id !== service.id));
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
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <EditableText
              id="social-media-pricing-title"
              defaultContent="Social Media Packages"
              className="text-4xl md:text-6xl font-black text-gray-900 mb-6"
              tag="h2"
            />
            <EditableText
              id="social-media-pricing-description"
              defaultContent="Choose the perfect social media management package for your business"
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
            id="social-media-cta-title"
            defaultContent="Ready to Dominate Social Media?"
            className="text-4xl md:text-6xl font-bold text-white mb-8"
            tag="h2"
          />
          <EditableText
            id="social-media-cta-description"
            defaultContent="Let's create a social media strategy that builds meaningful connections with your audience and drives real business results."
            className="text-2xl text-blue-100 mb-12 max-w-3xl mx-auto font-light"
            tag="p"
          />
          <button className="inline-flex items-center space-x-3 bg-white text-[#004FED] px-12 py-6 rounded-2xl text-xl font-bold hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-400">
            <span>Start Your Social Campaign</span>
            <ArrowRight className="w-6 h-6" />
          </button>
        </div>
      </section>
    </div>
  );
};

export default SocialMediaPage;