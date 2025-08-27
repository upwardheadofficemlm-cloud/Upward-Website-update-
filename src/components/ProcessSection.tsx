import React from 'react';
import EditableText from './cms/EditableText';
import EditableIcon from './cms/EditableIcon';
import { Search, Lightbulb, Rocket, BarChart3 } from 'lucide-react';

const ProcessSection = () => {
  const steps = [
    {
      number: '01',
      icon: 'search',
      title: 'Discovery & Research',
      description: 'We dive deep into your business, market, and competition to understand your unique challenges and opportunities.',
      color: 'from-[#004FED] to-[#0066FF]'
    },
    {
      number: '02',
      icon: 'lightbulb',
      title: 'Strategy Development',
      description: 'Our team creates a comprehensive marketing strategy tailored to your goals and target audience.',
      color: 'from-[#0066FF] to-[#004FED]'
    },
    {
      number: '03',
      icon: 'rocket',
      title: 'Implementation',
      description: 'We execute the strategy with precision, creating compelling campaigns and content that drive results.',
      color: 'from-[#004FED] to-[#0080FF]'
    },
    {
      number: '04',
      icon: 'bar-chart3',
      title: 'Optimization',
      description: 'Continuous monitoring and optimization ensure your campaigns perform at their best and deliver maximum ROI.',
      color: 'from-[#0080FF] to-[#004FED]'
    }
  ];

  return (
    <section className="py-32 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-[#004FED]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-[#0066FF]/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <EditableText
            id="process-title"
            defaultContent="Our Proven Process"
            className="text-4xl md:text-6xl font-black text-gray-900 mb-6"
            tag="h2"
          />
          <EditableText
            id="process-description"
            defaultContent="A systematic approach that delivers consistent results for every client"
            className="text-xl text-gray-600 max-w-3xl mx-auto font-light"
            tag="p"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="relative group"
            >
              {/* Connection Line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-20 left-full w-8 h-0.5 bg-gradient-to-r from-[#004FED]/30 to-[#0066FF]/30 z-0"></div>
              )}

              <div className="bg-white rounded-3xl p-10 shadow-xl border border-gray-100 hover:shadow-2xl hover:-translate-y-4 transition-all duration-500 text-center relative z-10">
                {/* Step Number */}
                <div className={`absolute -top-6 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-gradient-to-r ${step.color} rounded-full flex items-center justify-center text-white font-black text-lg shadow-lg`}>
                  <EditableText
                    id={`process-step-number-${index}`}
                    defaultContent={step.number}
                    className=""
                    tag="span"
                  />
                </div>

                {/* Icon */}
                <div className="w-20 h-20 bg-gradient-to-r from-gray-50 to-gray-100 rounded-2xl flex items-center justify-center mx-auto mb-8 mt-6 group-hover:scale-110 transition-all duration-500">
                  <EditableIcon
                    id={`process-step-icon-${index}`}
                    defaultIcon={step.icon}
                    className="w-10 h-10 text-[#004FED]"
                  />
                </div>

                <EditableText
                  id={`process-step-title-${index}`}
                  defaultContent={step.title}
                  className="text-2xl font-bold text-gray-900 mb-6 group-hover:text-[#004FED] transition-colors duration-300"
                  tag="h3"
                />

                <EditableText
                  id={`process-step-description-${index}`}
                  defaultContent={step.description}
                  className="text-gray-600 leading-relaxed text-lg"
                  tag="p"
                />
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-20">
          <div className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-[#004FED]/10 to-[#0066FF]/10 rounded-full border border-[#004FED]/20">
            <EditableText
              id="process-cta-text"
              defaultContent="Ready to start your journey? Let's discuss your project!"
              className="text-lg font-semibold text-[#004FED]"
              tag="span"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;