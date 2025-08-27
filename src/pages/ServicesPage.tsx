import React from 'react';
import { useNavigate } from 'react-router-dom';
import EditableText from '../components/cms/EditableText';
import EditableImage from '../components/cms/EditableImage';
import EditableServiceCard from '../components/cms/EditableServiceCard';
import EditablePricingCard from '../components/cms/EditablePricingCard';
import { useCMS } from '../contexts/CMSContext';
import { 
  Palette, 
  Search, 
  Share2, 
  BarChart3, 
  Video, 
  Megaphone,
  Globe,
  Target,
  ArrowRight,
  CheckCircle,
  Plus
} from 'lucide-react';

const ServicesPage = () => {
  const { isAdmin, isEditing } = useCMS();
  const navigate = useNavigate();
  const [services, setServices] = React.useState([
    {
      id: 'service-brand-identity',
      icon: Palette,
      title: 'Brand Identity',
      description: 'Complete brand development from logo design to brand guidelines that make you stand out.',
      features: ['Logo Design', 'Brand Guidelines', 'Visual Identity', 'Brand Strategy'],
      color: 'from-[#004FED] to-[#0066FF]',
      url: '/brand-identity'
    },
    {
      id: 'service-digital-marketing',
      icon: Search,
      title: 'Digital Marketing',
      description: 'SEO, SEM, and digital advertising strategies that drive traffic and conversions.',
      features: ['Search Engine Optimization', 'Google Ads', 'Facebook Advertising', 'Email Marketing'],
      color: 'from-[#0066FF] to-[#004FED]',
      url: '/digital-marketing'
    },
    {
      id: 'service-social-media',
      icon: Share2,
      title: 'Social Media',
      description: 'Engaging social media campaigns that build communities and boost brand awareness.',
      features: ['Content Creation', 'Community Management', 'Influencer Marketing', 'Social Advertising'],
      color: 'from-[#004FED] to-[#0080FF]',
      url: '/social-media'
    },
    {
      id: 'service-analytics',
      icon: BarChart3,
      title: 'Analytics & Insights',
      description: 'Data-driven strategies with comprehensive reporting and performance optimization.',
      features: ['Performance Tracking', 'ROI Analysis', 'Market Research', 'Competitor Analysis'],
      color: 'from-[#0066FF] to-[#004FED]',
      url: '/seo-services'
    },
    {
      id: 'service-content-creation',
      icon: Video,
      title: 'Content Creation',
      description: 'High-quality video, photography, and graphic content that tells your story.',
      features: ['Video Production', 'Photography', 'Graphic Design', 'Copywriting'],
      color: 'from-[#004FED] to-[#0099FF]',
      url: '/content-creation'
    },
    {
      id: 'service-traditional-marketing',
      icon: Megaphone,
      title: 'Traditional Marketing',
      description: 'Print, radio, and outdoor advertising solutions tailored for the Myanmar market.',
      features: ['Print Advertising', 'Radio Campaigns', 'Outdoor Advertising', 'Event Marketing'],
      color: 'from-[#0080FF] to-[#004FED]',
      url: '/services'
    },
    {
      id: 'service-web-development',
      icon: Globe,
      title: 'Web Development',
      description: 'Modern, responsive websites and e-commerce platforms that convert visitors.',
      features: ['Website Design', 'E-commerce Development', 'Mobile Optimization', 'CMS Integration'],
      color: 'from-[#0066FF] to-[#004FED]',
      url: '/web-development'
    },
    {
      id: 'service-strategy-consulting',
      icon: Target,
      title: 'Strategy Consulting',
      description: 'Comprehensive marketing strategies and business growth consulting services.',
      features: ['Marketing Strategy', 'Business Consulting', 'Growth Planning', 'Market Entry'],
      color: 'from-[#004FED] to-[#0066FF]',
      url: '/services'
    }
  ]);

  const [packages, setPackages] = React.useState([
    {
      id: 'package-starter',
      name: 'Starter',
      price: '500,000',
      period: 'MMK/month',
      description: 'Perfect for small businesses getting started',
      features: [
        'Social Media Management',
        'Basic SEO Setup',
        'Monthly Analytics Report',
        'Email Support'
      ],
      popular: false,
      buttonText: 'Get Started',
      buttonLink: '#contact',
      buttonType: 'internal' as 'internal' | 'external'
    },
    {
      id: 'package-professional',
      name: 'Professional',
      price: '1,200,000',
      period: 'MMK/month',
      description: 'Ideal for growing businesses',
      features: [
        'Everything in Starter',
        'Google Ads Management',
        'Content Creation',
        'Weekly Strategy Calls',
        'Priority Support'
      ],
      popular: true,
      buttonText: 'Get Started',
      buttonLink: '#contact',
      buttonType: 'internal' as 'internal' | 'external'
    },
    {
      id: 'package-enterprise',
      name: 'Enterprise',
      price: 'Custom',
      period: 'Pricing',
      description: 'For large businesses with complex needs',
      features: [
        'Everything in Professional',
        'Dedicated Account Manager',
        'Custom Strategy Development',
        'Advanced Analytics',
        '24/7 Support'
      ],
      popular: false,
      buttonText: 'Contact Sales',
      buttonLink: '#contact',
      buttonType: 'internal' as 'internal' | 'external'
    }
  ]);

  const addService = () => {
    const newService = {
      id: `service-${Date.now()}`,
      icon: Target,
      title: 'New Service',
      description: 'Description of the new service offering.',
      features: ['Feature 1', 'Feature 2', 'Feature 3', 'Feature 4'],
      color: 'from-[#004FED] to-[#0066FF]'
    };
    setServices([...services, newService]);
  };

  const removeService = (id: string) => {
    if (services.length <= 1) return;
    if (window.confirm('Are you sure you want to remove this service?')) {
      setServices(services.filter(service => service.id !== id));
    }
  };

  const duplicateService = (id: string) => {
    const serviceToClone = services.find(s => s.id === id);
    if (serviceToClone) {
      const newService = {
        ...serviceToClone,
        id: `service-${Date.now()}`,
        title: `${serviceToClone.title} Copy`
      };
      setServices([...services, newService]);
    }
  };

  const addPackage = () => {
    const newPackage = {
      id: `package-${Date.now()}`,
      name: 'New Package',
      price: '0',
      period: 'MMK/month',
      description: 'Description of the new package',
      features: ['Feature 1', 'Feature 2', 'Feature 3'],
      popular: false,
      buttonText: 'Get Started',
      buttonLink: '#contact',
      buttonType: 'internal' as 'internal' | 'external'
    };
    setPackages([...packages, newPackage]);
  };

  const removePackage = (id: string) => {
    if (packages.length <= 1) return;
    if (window.confirm('Are you sure you want to remove this package?')) {
      setPackages(packages.filter(pkg => pkg.id !== id));
    }
  };

  const duplicatePackage = (id: string) => {
    const packageToClone = packages.find(p => p.id === id);
    if (packageToClone) {
      const newPackage = {
        ...packageToClone,
        id: `package-${Date.now()}`,
        name: `${packageToClone.name} Copy`,
        popular: false
      };
      setPackages([...packages, newPackage]);
    }
  };

  const addFeatureToPackage = (packageId: string) => {
    setPackages(packages.map(pkg => 
      pkg.id === packageId 
        ? { ...pkg, features: [...pkg.features, 'New Feature'] }
        : pkg
    ));
  };

  const removeFeatureFromPackage = (packageId: string, featureIndex: number) => {
    setPackages(packages.map(pkg => 
      pkg.id === packageId 
        ? { ...pkg, features: pkg.features.filter((_, index) => index !== featureIndex) }
        : pkg
    ));
  };

  const updatePackageButton = (packageId: string, text: string, link: string, type: 'internal' | 'external') => {
    setPackages(packages.map(pkg => 
      pkg.id === packageId 
        ? { ...pkg, buttonText: text, buttonLink: link, buttonType: type }
        : pkg
    ));
  };

  const handleServiceClick = (service: any) => {
    if (isAdmin && isEditing) {
      // If in edit mode, don't navigate, allow editing instead
      return;
    }
    navigate(service.url);
  };

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-32 bg-gradient-to-br from-[#004FED]/5 via-white to-[#004FED]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <EditableText
            id="services-hero-title"
            defaultContent="Our Services"
            className="text-5xl md:text-7xl font-black text-gray-900 mb-6"
            tag="h1"
          />
          <EditableText
            id="services-hero-description"
            defaultContent="We provide comprehensive 360° marketing solutions to help your business thrive in today's competitive landscape."
            className="text-2xl text-gray-600 max-w-4xl mx-auto font-light leading-relaxed mb-12"
            tag="p"
          />
          <div className="inline-flex items-center px-6 py-3 bg-white/90 backdrop-blur-md rounded-full border border-[#004FED]/20 shadow-lg">
            <EditableText
              id="services-hero-badge"
              defaultContent="✨ Tailored for Myanmar Market"
              className="text-lg font-semibold text-[#004FED]"
              tag="span"
            />
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-32 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {services.map((service, index) => (
              <div
                key={service.id}
                onClick={() => handleServiceClick(service)}
                className={`cursor-pointer ${!isAdmin || !isEditing ? 'hover:scale-105' : ''} transition-all duration-300`}
              >
                <EditableServiceCard
                  id={service.id}
                  icon={service.icon}
                  title={service.title}
                  description={service.description}
                  color={service.color}
                  onDelete={() => removeService(service.id)}
                  onDuplicate={() => duplicateService(service.id)}
                />
              </div>
            ))}
            
            {/* Add Service Card */}
            {isAdmin && isEditing && (
              <div 
                onClick={addService}
                className="bg-white rounded-3xl p-10 shadow-lg border-2 border-dashed border-gray-300 hover:border-[#004FED] hover:bg-[#004FED]/5 transition-all duration-300 cursor-pointer flex items-center justify-center min-h-[400px]"
              >
                <div className="text-center">
                  <Plus className="w-12 h-12 text-gray-400 hover:text-[#004FED] mx-auto mb-4" />
                  <span className="text-gray-500 font-medium">Add New Service</span>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Pricing Packages */}
      <section className="py-32 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <EditableText
              id="services-pricing-title"
              defaultContent="Choose Your Package"
              className="text-4xl md:text-6xl font-black text-gray-900 mb-6"
              tag="h2"
            />
            <EditableText
              id="services-pricing-description"
              defaultContent="Flexible pricing options designed to fit businesses of all sizes"
              className="text-xl text-gray-600 max-w-3xl mx-auto font-light"
              tag="p"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {packages.map((pkg, index) => (
              <EditablePricingCard
                key={pkg.id}
                id={pkg.id}
                name={pkg.name}
                price={pkg.price}
                period={pkg.period}
                description={pkg.description}
                features={pkg.features}
                popular={pkg.popular}
                buttonText={pkg.buttonText}
                buttonLink={pkg.buttonLink}
                buttonType={pkg.buttonType}
                onDelete={() => removePackage(pkg.id)}
                onDuplicate={() => duplicatePackage(pkg.id)}
                onAddFeature={() => addFeatureToPackage(pkg.id)}
                onRemoveFeature={(featureIndex) => removeFeatureFromPackage(pkg.id, featureIndex)}
                onUpdateButton={(text, link, type) => updatePackageButton(pkg.id, text, link, type)}
              />
            ))}
            
            {/* Add Package Card */}
            {isAdmin && isEditing && (
              <div 
                onClick={addPackage}
                className="bg-white rounded-3xl p-10 shadow-xl border-2 border-dashed border-gray-300 hover:border-[#004FED] hover:bg-[#004FED]/5 transition-all duration-300 cursor-pointer flex items-center justify-center min-h-[500px]"
              >
                <div className="text-center">
                  <Plus className="w-12 h-12 text-gray-400 hover:text-[#004FED] mx-auto mb-4" />
                  <span className="text-gray-500 font-medium">Add New Package</span>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-gradient-to-r from-[#004FED] to-[#0066FF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <EditableText
            id="services-cta-title"
            defaultContent="Ready to Elevate Your Brand?"
            className="text-4xl md:text-6xl font-bold text-white mb-8"
            tag="h2"
          />
          <EditableText
            id="services-cta-description"
            defaultContent="Let's discuss how our 360° marketing approach can transform your business and drive meaningful results."
            className="text-2xl text-blue-100 mb-12 max-w-3xl mx-auto font-light"
            tag="p"
          />
          <button className="inline-flex items-center space-x-3 bg-white text-[#004FED] px-12 py-6 rounded-2xl text-xl font-bold hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-400">
            <span>Get Free Consultation</span>
            <ArrowRight className="w-6 h-6" />
          </button>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;