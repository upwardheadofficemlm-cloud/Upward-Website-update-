import React from 'react';
import EditableText from './cms/EditableText';
import EditableButton from './cms/EditableButton';
import { 
  Brush,
  SearchCheck,
  Heart,
  TrendingUp,
  Camera,
  Radio,
  Monitor,
  Lightbulb,
  ArrowRight
} from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Brush,
      title: 'Brand Identity',
      description: 'Complete brand development from logo design to brand guidelines that make you stand out.',
      color: 'from-[#004FED] to-[#0066FF]'
    },
    {
      icon: SearchCheck,
      title: 'Digital Marketing',
      description: 'SEO, SEM, and digital advertising strategies that drive traffic and conversions.',
      color: 'from-[#0066FF] to-[#004FED]'
    },
    {
      icon: Heart,
      title: 'Social Media',
      description: 'Engaging social media campaigns that build communities and boost brand awareness.',
      color: 'from-[#004FED] to-[#0080FF]'
    },
    {
      icon: TrendingUp,
      title: 'Analytics & Insights',
      description: 'Data-driven strategies with comprehensive reporting and performance optimization.',
      color: 'from-[#0066FF] to-[#004FED]'
    },
    {
      icon: Camera,
      title: 'Content Creation',
      description: 'High-quality video, photography, and graphic content that tells your story.',
      color: 'from-[#004FED] to-[#0099FF]'
    },
    {
      icon: Radio,
      title: 'Traditional Marketing',
      description: 'Print, radio, and outdoor advertising solutions tailored for the Myanmar market.',
      color: 'from-[#0080FF] to-[#004FED]'
    },
    {
      icon: Monitor,
      title: 'Web Development',
      description: 'Modern, responsive websites and e-commerce platforms that convert visitors.',
      color: 'from-[#0066FF] to-[#004FED]'
    },
    {
      icon: Lightbulb,
      title: 'Strategy Consulting',
      description: 'Comprehensive marketing strategies and business growth consulting services.',
      color: 'from-[#004FED] to-[#0066FF]'
    }
  ];

  return (
    <section id="services" className="py-32 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-24">
          <h2 className="text-5xl md:text-7xl font-black text-gray-900 mb-6">
            <EditableText
              id="services-title-our"
              defaultContent="Our"
              className="inline"
              tag="span"
            /> <span className="bg-gradient-to-r from-[#004FED] to-[#0066FF] bg-clip-text text-transparent">
              <EditableText
                id="services-title-services"
                defaultContent="Services"
                className="inline"
                tag="span"
              />
            </span>
          </h2>
          <EditableText
            id="services-description"
            defaultContent="Comprehensive 360° marketing solutions tailored for Myanmar businesses. From digital campaigns to brand identity, we deliver results that matter."
            className="text-2xl text-gray-600 max-w-4xl mx-auto font-light leading-relaxed"
            tag="p"
          />
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-white rounded-3xl p-8 shadow-lg border border-gray-100 hover:shadow-2xl hover:shadow-[#004FED]/10 hover:-translate-y-4 transition-all duration-500"
            >
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${service.color} p-4 mb-6 group-hover:scale-125 group-hover:rotate-6 transition-all duration-500 shadow-lg`}>
                <service.icon className="w-8 h-8 text-white" />
              </div>
              
              <EditableText
                id={`service-title-${index}`}
                defaultContent={service.title}
                className="text-xl font-bold text-gray-900 mb-4 group-hover:text-[#004FED] transition-colors duration-300"
                tag="h3"
              />
              
              <EditableText
                id={`service-description-${index}`}
                defaultContent={service.description}
                className="text-gray-600 leading-relaxed mb-6"
                tag="p"
              />

              <EditableButton
                id={`service-button-${index}`}
                defaultText="Learn More"
                defaultUrl={index === 0 ? "/brand-identity" : index === 1 ? "/digital-marketing" : index === 2 ? "/social-media" : index === 3 ? "/seo-services" : index === 4 ? "/content-creation" : index === 5 ? "/billboards" : index === 6 ? "/web-development" : "/services"}
                defaultType="internal"
                className="inline-flex items-center space-x-2 text-[#004FED] hover:text-[#0066FF] font-semibold transition-colors duration-300"
              >
                <ArrowRight className="w-4 h-4" />
              </EditableButton>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-24">
          <div className="bg-gradient-to-r from-[#004FED]/5 to-[#0066FF]/10 rounded-3xl p-12 md:p-16 border border-[#004FED]/10">
            <EditableText
              id="services-cta-title"
              defaultContent="Ready to Transform Your Business?"
              className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
              tag="h3"
            />
            <EditableText
              id="services-cta-description"
              defaultContent="Discover how our comprehensive marketing solutions can accelerate your business growth."
              className="text-2xl text-gray-600 mb-12 max-w-3xl mx-auto font-light"
              tag="p"
            />
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-6 sm:space-y-0 sm:space-x-8">
              <EditableButton
                id="services-cta-primary"
                defaultText="Get Free Consultation"
                defaultUrl="#contact"
                defaultType="internal"
                className="bg-gradient-to-r from-[#004FED] to-[#0066FF] text-white px-12 py-6 rounded-2xl text-xl font-bold hover:shadow-2xl hover:shadow-[#004FED]/30 transform hover:-translate-y-2 transition-all duration-400 flex items-center space-x-3"
              />
              <EditableButton
                id="services-cta-secondary"
                defaultText="View All Services"
                defaultUrl="/services"
                defaultType="internal"
                className="border-2 border-[#004FED] text-[#004FED] px-12 py-6 rounded-2xl text-xl font-bold hover:bg-[#004FED] hover:text-white transition-all duration-400 flex items-center space-x-3"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;