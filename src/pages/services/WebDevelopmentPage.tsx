import React from 'react';
import EditableText from '../../components/cms/EditableText';
import EditableImage from '../../components/cms/EditableImage';
import EditableIcon from '../../components/cms/EditableIcon';
import EditableSection from '../../components/cms/EditableSection';
import EditableFloatingStatCard from '../../components/cms/EditableFloatingStatCard';
import { Globe, Monitor, Zap, Shield, CheckCircle, ArrowRight, Award, ExternalLink, Trash2 } from 'lucide-react';
import { useCMS } from '../../contexts/CMSContext';

const WebDevelopmentPage = () => {
  const { isAdmin, isEditing } = useCMS();
  const [technologies, setTechnologies] = React.useState([
    {
      id: 'tech-react',
      icon: 'monitor',
      name: 'React & Next.js',
      description: 'Modern frontend frameworks for fast, interactive user experiences',
      features: ['Component-based', 'SEO Optimized', 'Fast Loading', 'Mobile Responsive'],
      color: 'from-[#61DAFB] to-[#21759B]'
    },
    {
      id: 'tech-node',
      icon: 'zap',
      name: 'Node.js & Express',
      description: 'Scalable backend solutions for robust web applications',
      features: ['API Development', 'Database Integration', 'Real-time Features', 'Cloud Deployment'],
      color: 'from-[#339933] to-[#68A063]'
    },
    {
      id: 'tech-wordpress',
      icon: 'globe',
      name: 'WordPress & CMS',
      description: 'Content management systems for easy website maintenance',
      features: ['Easy Content Updates', 'Plugin Integration', 'SEO Friendly', 'Custom Themes'],
      color: 'from-[#21759B] to-[#0073AA]'
    },
    {
      id: 'tech-ecommerce',
      icon: 'shield',
      name: 'E-commerce Solutions',
      description: 'Secure online stores with payment gateway integration',
      features: ['Payment Integration', 'Inventory Management', 'Order Tracking', 'Security Features'],
      color: 'from-[#FF6B35] to-[#F7931E]'
    }
  ]);

  const [services, setServices] = React.useState([
    {
      id: 'service-design',
      icon: 'monitor',
      title: 'Web Design',
      description: 'Beautiful, user-friendly website designs'
    },
    {
      id: 'service-development',
      icon: 'globe',
      title: 'Web Development',
      description: 'Custom web applications and websites'
    },
    {
      id: 'service-ecommerce',
      icon: 'shield',
      title: 'E-commerce Development',
      description: 'Online stores and shopping platforms'
    },
    {
      id: 'service-maintenance',
      icon: 'zap',
      title: 'Website Maintenance',
      description: 'Ongoing support and updates'
    }
  ]);

  const packages = [
    {
      id: 'web-basic',
      name: 'Basic Website',
      price: '1,500,000',
      period: 'MMK',
      description: 'Perfect for small businesses',
      features: [
        '5-Page Website',
        'Mobile Responsive Design',
        'Contact Form',
        'Basic SEO Setup',
        '3 Months Support'
      ],
      buttonText: 'Get Started',
      buttonLink: '#contact',
      buttonType: 'internal' as 'internal' | 'external'
    },
    {
      id: 'web-professional',
      name: 'Professional Website',
      price: '3,000,000',
      period: 'MMK',
      description: 'Complete business website',
      features: [
        '10-Page Website',
        'Custom Design',
        'CMS Integration',
        'Advanced SEO',
        '6 Months Support'
      ],
      popular: true,
      buttonText: 'Get Started',
      buttonLink: '#contact',
      buttonType: 'internal' as 'internal' | 'external'
    },
    {
      id: 'web-ecommerce',
      name: 'E-commerce Website',
      price: 'Custom',
      period: 'Quote',
      description: 'Full online store solution',
      features: [
        'Custom E-commerce Platform',
        'Payment Gateway Integration',
        'Inventory Management',
        'Order Management System',
        '12 Months Support'
      ],
      buttonText: 'Request Quote',
      buttonLink: 'mailto:sales@upwardmm.com',
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
                <Globe className="w-5 h-5 text-[#004FED] mr-2" />
                <span className="text-base font-semibold text-[#004FED]">Web Development Services</span>
              </div>
              
              <EditableText
                id="web-development-hero-title"
                defaultContent="Web Development"
                className="text-5xl md:text-7xl font-black text-gray-900 mb-8 leading-tight"
                tag="h1"
              />
              
              <EditableText
                id="web-development-hero-description"
                defaultContent="Create stunning, fast, and secure websites that convert visitors into customers. From simple business websites to complex e-commerce platforms, we build digital experiences that drive results."
                className="text-2xl text-gray-600 mb-12 leading-relaxed font-light"
                tag="p"
              />

              <div className="flex flex-col sm:flex-row space-y-6 sm:space-y-0 sm:space-x-8">
                <button className="bg-gradient-to-r from-[#004FED] to-[#0066FF] text-white px-10 py-5 rounded-2xl text-xl font-bold hover:shadow-2xl hover:shadow-[#004FED]/30 transform hover:-translate-y-2 transition-all duration-400 flex items-center space-x-3">
                  <span>Start Your Project</span>
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
                  id="web-development-hero-image"
                  defaultSrc="https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Web Development"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-10 -right-10 bg-white p-8 rounded-2xl shadow-2xl border border-gray-100">
                <EditableFloatingStatCard
                  id="web-development-hero-stat"
                  number="200+ Websites"
                  label="Successfully Delivered"
                  icon={Globe}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <EditableSection
        id="web-development-technologies-section"
        className="py-32 bg-white"
        canAddItems={true}
        onAddItem={() => {
          const newTechnology = {
            id: `tech-${Date.now()}`,
            icon: 'monitor',
            name: 'New Technology',
            description: 'Description of the new technology',
            features: ['Feature 1', 'Feature 2', 'Feature 3', 'Feature 4'],
            color: 'from-[#004FED] to-[#0066FF]'
          };
          setTechnologies([...technologies, newTechnology]);
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <EditableText
              id="web-development-technologies-title"
              defaultContent="Technologies We Use"
              className="text-4xl md:text-6xl font-black text-gray-900 mb-6"
              tag="h2"
            />
            <EditableText
              id="web-development-technologies-description"
              defaultContent="Modern technologies and frameworks for cutting-edge web solutions"
              className="text-xl text-gray-600 max-w-3xl mx-auto font-light"
              tag="p"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {technologies.map((tech, index) => (
              <div key={tech.id} className="bg-gradient-to-br from-gray-50 to-white p-10 rounded-3xl border border-gray-100 hover:shadow-2xl hover:-translate-y-4 transition-all duration-500 relative group">
                <div className={`w-20 h-20 bg-gradient-to-r ${tech.color} rounded-2xl p-5 mb-8 shadow-lg`}>
                  <EditableIcon
                    id={`web-tech-icon-${tech.id}`}
                    defaultIcon={tech.icon}
                    className="w-10 h-10 text-white"
                    onIconChange={(newIcon) => {
                      setTechnologies(technologies.map(t => t.id === tech.id ? { ...t, icon: newIcon } : t));
                    }}
                  />
                </div>
                
                <EditableText
                  id={`web-tech-name-${tech.id}`}
                  defaultContent={tech.name}
                  className="text-2xl font-bold text-gray-900 mb-4"
                  tag="h3"
                />
                
                <EditableText
                  id={`web-tech-description-${tech.id}`}
                  defaultContent={tech.description}
                  className="text-gray-600 leading-relaxed text-lg mb-6"
                  tag="p"
                />
                
                <ul className="space-y-3">
                  {tech.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-[#004FED] flex-shrink-0" />
                      <EditableText
                        id={`web-tech-feature-${tech.id}-${featureIndex}`}
                        defaultContent={feature}
                        className="text-gray-600"
                        tag="span"
                      />
                    </li>
                  ))}
                </ul>

                {isAdmin && isEditing && technologies.length > 1 && (
                  <button
                    onClick={() => {
                      if (window.confirm('Are you sure you want to remove this technology?')) {
                        setTechnologies(technologies.filter(t => t.id !== tech.id));
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
        id="web-development-services-section"
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
              id="web-development-services-title"
              defaultContent="Our Web Development Services"
              className="text-4xl md:text-6xl font-black text-gray-900 mb-6"
              tag="h2"
            />
            <EditableText
              id="web-development-services-description"
              defaultContent="Comprehensive web development solutions for your business needs"
              className="text-xl text-gray-600 max-w-3xl mx-auto font-light"
              tag="p"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {services.map((service, index) => (
              <div key={service.id} className="bg-white rounded-3xl p-10 shadow-xl border border-gray-100 hover:shadow-2xl hover:-translate-y-4 transition-all duration-500 text-center relative group">
                <div className="w-20 h-20 bg-gradient-to-r from-[#004FED]/10 to-[#0066FF]/20 rounded-2xl flex items-center justify-center mx-auto mb-8">
                  <EditableIcon
                    id={`web-service-icon-${service.id}`}
                    defaultIcon={service.icon}
                    className="w-10 h-10 text-[#004FED]"
                    onIconChange={(newIcon) => {
                      setServices(services.map(s => s.id === service.id ? { ...s, icon: newIcon } : s));
                    }}
                  />
                </div>
                
                <EditableText
                  id={`web-service-title-${service.id}`}
                  defaultContent={service.title}
                  className="text-2xl font-bold text-gray-900 mb-4"
                  tag="h3"
                />
                
                <EditableText
                  id={`web-service-description-${service.id}`}
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
              id="web-development-pricing-title"
              defaultContent="Web Development Packages"
              className="text-4xl md:text-6xl font-black text-gray-900 mb-6"
              tag="h2"
            />
            <EditableText
              id="web-development-pricing-description"
              defaultContent="Choose the perfect web development solution for your business"
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
            id="web-development-cta-title"
            defaultContent="Ready to Build Your Website?"
            className="text-4xl md:text-6xl font-bold text-white mb-8"
            tag="h2"
          />
          <EditableText
            id="web-development-cta-description"
            defaultContent="Let's create a website that not only looks amazing but also drives real business results for your company."
            className="text-2xl text-blue-100 mb-12 max-w-3xl mx-auto font-light"
            tag="p"
          />
          <button className="inline-flex items-center space-x-3 bg-white text-[#004FED] px-12 py-6 rounded-2xl text-xl font-bold hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-400">
            <span>Start Your Web Project</span>
            <ArrowRight className="w-6 h-6" />
          </button>
        </div>
      </section>
    </div>
  );
};

export default WebDevelopmentPage;