import React from 'react';
import EditableText from '../../components/cms/EditableText';
import EditableImage from '../../components/cms/EditableImage';
import EditableIcon from '../../components/cms/EditableIcon';
import EditableSection from '../../components/cms/EditableSection';
import EditableFloatingStatCard from '../../components/cms/EditableFloatingStatCard';
import { Video, Camera, Edit3, Palette, CheckCircle, ArrowRight, Award, ExternalLink, Trash2 } from 'lucide-react';
import { useCMS } from '../../contexts/CMSContext';

const ContentCreationPage = () => {
  const { isAdmin, isEditing } = useCMS();
  const [contentTypes, setContentTypes] = React.useState([
    {
      id: 'content-video',
      icon: 'video',
      name: 'Video Production',
      description: 'Professional video content for marketing, training, and promotional purposes',
      features: ['Corporate Videos', 'Product Demos', 'Social Media Videos', 'Training Content'],
      color: 'from-[#FF6B35] to-[#F7931E]'
    },
    {
      id: 'content-photography',
      icon: 'camera',
      name: 'Photography',
      description: 'High-quality photography for products, events, and corporate needs',
      features: ['Product Photography', 'Event Coverage', 'Corporate Headshots', 'Lifestyle Photos'],
      color: 'from-[#667EEA] to-[#764BA2]'
    },
    {
      id: 'content-design',
      icon: 'palette',
      name: 'Graphic Design',
      description: 'Visual content design for digital and print marketing materials',
      features: ['Social Media Graphics', 'Brochures & Flyers', 'Infographics', 'Banner Designs'],
      color: 'from-[#F093FB] to-[#F5576C]'
    },
    {
      id: 'content-copywriting',
      icon: 'edit3',
      name: 'Copywriting',
      description: 'Compelling written content that engages and converts your audience',
      features: ['Website Copy', 'Blog Articles', 'Ad Copy', 'Email Content'],
      color: 'from-[#4FACFE] to-[#00F2FE]'
    }
  ]);

  const [services, setServices] = React.useState([
    {
      id: 'service-strategy',
      icon: 'target',
      title: 'Content Strategy',
      description: 'Comprehensive content planning and strategy development'
    },
    {
      id: 'service-production',
      icon: 'video',
      title: 'Content Production',
      description: 'High-quality content creation across all formats'
    },
    {
      id: 'service-editing',
      icon: 'edit3',
      title: 'Content Editing',
      description: 'Professional editing and post-production services'
    },
    {
      id: 'service-distribution',
      icon: 'share2',
      title: 'Content Distribution',
      description: 'Strategic content distribution across platforms'
    }
  ]);

  const packages = [
    {
      id: 'content-basic',
      name: 'Content Starter',
      price: '500,000',
      period: 'MMK/month',
      description: 'Essential content creation',
      features: [
        '8 Social Media Posts',
        '2 Blog Articles',
        'Basic Photo Editing',
        'Content Calendar',
        'Monthly Strategy Review'
      ],
      buttonText: 'Get Started',
      buttonLink: '#contact',
      buttonType: 'internal' as 'internal' | 'external'
    },
    {
      id: 'content-professional',
      name: 'Content Professional',
      price: '1,000,000',
      period: 'MMK/month',
      description: 'Complete content solution',
      features: [
        '16 Social Media Posts',
        '4 Blog Articles',
        '1 Professional Video',
        'Advanced Photo Editing',
        'Weekly Content Reports'
      ],
      popular: true,
      buttonText: 'Get Started',
      buttonLink: '#contact',
      buttonType: 'internal' as 'internal' | 'external'
    },
    {
      id: 'content-enterprise',
      name: 'Content Enterprise',
      price: 'Custom',
      period: 'Pricing',
      description: 'Full content production',
      features: [
        'Unlimited Content Creation',
        'Professional Video Production',
        'Photography Sessions',
        'Dedicated Content Team',
        'Real-time Content Dashboard'
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
                <Video className="w-5 h-5 text-[#004FED] mr-2" />
                <span className="text-base font-semibold text-[#004FED]">Content Creation Services</span>
              </div>
              
              <EditableText
                id="content-creation-hero-title"
                defaultContent="Content Creation"
                className="text-5xl md:text-7xl font-black text-gray-900 mb-8 leading-tight"
                tag="h1"
              />
              
              <EditableText
                id="content-creation-hero-description"
                defaultContent="Create compelling content that tells your story and engages your audience. From professional videos to stunning photography, we produce content that drives results and builds brand loyalty."
                className="text-2xl text-gray-600 mb-12 leading-relaxed font-light"
                tag="p"
              />

              <div className="flex flex-col sm:flex-row space-y-6 sm:space-y-0 sm:space-x-8">
                <button className="bg-gradient-to-r from-[#004FED] to-[#0066FF] text-white px-10 py-5 rounded-2xl text-xl font-bold hover:shadow-2xl hover:shadow-[#004FED]/30 transform hover:-translate-y-2 transition-all duration-400 flex items-center space-x-3">
                  <span>Start Creating</span>
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
                  id="content-creation-hero-image"
                  defaultSrc="https://images.pexels.com/photos/1181533/pexels-photo-1181533.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Content Creation"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-10 -right-10 bg-white p-8 rounded-2xl shadow-2xl border border-gray-100">
                <EditableFloatingStatCard
                  id="content-creation-hero-stat"
                  number="1000+ Contents"
                  label="Successfully Created"
                  icon={Video}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content Types Section */}
      <EditableSection
        id="content-creation-types-section"
        className="py-32 bg-white"
        canAddItems={true}
        onAddItem={() => {
          const newContentType = {
            id: `content-${Date.now()}`,
            icon: 'video',
            name: 'New Content Type',
            description: 'Description of the new content type',
            features: ['Feature 1', 'Feature 2', 'Feature 3', 'Feature 4'],
            color: 'from-[#004FED] to-[#0066FF]'
          };
          setContentTypes([...contentTypes, newContentType]);
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <EditableText
              id="content-creation-types-title"
              defaultContent="Content Types We Create"
              className="text-4xl md:text-6xl font-black text-gray-900 mb-6"
              tag="h2"
            />
            <EditableText
              id="content-creation-types-description"
              defaultContent="Professional content creation across all formats and platforms"
              className="text-xl text-gray-600 max-w-3xl mx-auto font-light"
              tag="p"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {contentTypes.map((type, index) => (
              <div key={type.id} className="bg-gradient-to-br from-gray-50 to-white p-10 rounded-3xl border border-gray-100 hover:shadow-2xl hover:-translate-y-4 transition-all duration-500 relative group">
                <div className={`w-20 h-20 bg-gradient-to-r ${type.color} rounded-2xl p-5 mb-8 shadow-lg`}>
                  <EditableIcon
                    id={`content-type-icon-${type.id}`}
                    defaultIcon={type.icon}
                    className="w-10 h-10 text-white"
                    onIconChange={(newIcon) => {
                      setContentTypes(contentTypes.map(t => t.id === type.id ? { ...t, icon: newIcon } : t));
                    }}
                  />
                </div>
                
                <EditableText
                  id={`content-type-name-${type.id}`}
                  defaultContent={type.name}
                  className="text-2xl font-bold text-gray-900 mb-4"
                  tag="h3"
                />
                
                <EditableText
                  id={`content-type-description-${type.id}`}
                  defaultContent={type.description}
                  className="text-gray-600 leading-relaxed text-lg mb-6"
                  tag="p"
                />
                
                <ul className="space-y-3">
                  {type.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-[#004FED] flex-shrink-0" />
                      <EditableText
                        id={`content-type-feature-${type.id}-${featureIndex}`}
                        defaultContent={feature}
                        className="text-gray-600"
                        tag="span"
                      />
                    </li>
                  ))}
                </ul>

                {isAdmin && isEditing && contentTypes.length > 1 && (
                  <button
                    onClick={() => {
                      if (window.confirm('Are you sure you want to remove this content type?')) {
                        setContentTypes(contentTypes.filter(t => t.id !== type.id));
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
        id="content-creation-services-section"
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
              id="content-creation-services-title"
              defaultContent="Our Content Services"
              className="text-4xl md:text-6xl font-black text-gray-900 mb-6"
              tag="h2"
            />
            <EditableText
              id="content-creation-services-description"
              defaultContent="End-to-end content creation services for your marketing needs"
              className="text-xl text-gray-600 max-w-3xl mx-auto font-light"
              tag="p"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {services.map((service, index) => (
              <div key={service.id} className="bg-white rounded-3xl p-10 shadow-xl border border-gray-100 hover:shadow-2xl hover:-translate-y-4 transition-all duration-500 text-center relative group">
                <div className="w-20 h-20 bg-gradient-to-r from-[#004FED]/10 to-[#0066FF]/20 rounded-2xl flex items-center justify-center mx-auto mb-8">
                  <EditableIcon
                    id={`content-service-icon-${service.id}`}
                    defaultIcon={service.icon}
                    className="w-10 h-10 text-[#004FED]"
                    onIconChange={(newIcon) => {
                      setServices(services.map(s => s.id === service.id ? { ...s, icon: newIcon } : s));
                    }}
                  />
                </div>
                
                <EditableText
                  id={`content-service-title-${service.id}`}
                  defaultContent={service.title}
                  className="text-2xl font-bold text-gray-900 mb-4"
                  tag="h3"
                />
                
                <EditableText
                  id={`content-service-description-${service.id}`}
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
              id="content-creation-pricing-title"
              defaultContent="Content Creation Packages"
              className="text-4xl md:text-6xl font-black text-gray-900 mb-6"
              tag="h2"
            />
            <EditableText
              id="content-creation-pricing-description"
              defaultContent="Choose the perfect content creation package for your brand"
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
            id="content-creation-cta-title"
            defaultContent="Ready to Create Amazing Content?"
            className="text-4xl md:text-6xl font-bold text-white mb-8"
            tag="h2"
          />
          <EditableText
            id="content-creation-cta-description"
            defaultContent="Let's create content that tells your story, engages your audience, and drives meaningful results for your business."
            className="text-2xl text-blue-100 mb-12 max-w-3xl mx-auto font-light"
            tag="p"
          />
          <button className="inline-flex items-center space-x-3 bg-white text-[#004FED] px-12 py-6 rounded-2xl text-xl font-bold hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-400">
            <span>Start Your Content Project</span>
            <ArrowRight className="w-6 h-6" />
          </button>
        </div>
      </section>
    </div>
  );
};

export default ContentCreationPage;