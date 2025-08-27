import React from 'react';
import { Sparkles, Zap, Target, ArrowRight, Star } from 'lucide-react';
import EditableText from './cms/EditableText';
import EditableButton from './cms/EditableButton';

const CTASection = () => {
  return (
    <section className="py-32 bg-gradient-to-r from-[#004FED] via-[#0066FF] to-[#004FED] relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-32 h-32 bg-white/10 rounded-full animate-float blur-sm"></div>
        <div className="absolute top-40 right-32 w-24 h-24 bg-white/15 rounded-full animate-float-delayed blur-sm"></div>
        <div className="absolute bottom-32 left-1/3 w-20 h-20 bg-white/10 rounded-full animate-float blur-sm"></div>
        <div className="absolute bottom-20 right-20 w-28 h-28 bg-white/15 rounded-full animate-float-delayed blur-sm"></div>
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          {/* Icon */}
          <div className="inline-flex items-center justify-center w-24 h-24 bg-white/20 backdrop-blur-md rounded-full mb-8 shadow-2xl">
            <Sparkles className="w-12 h-12 text-white" />
          </div>

          <EditableText
            id="cta-title"
            defaultContent="Ready to Accelerate Your Business Wings?"
            className="text-4xl md:text-6xl font-bold text-white mb-8 leading-tight"
            tag="h2"
          />
          
          <EditableText
            id="cta-description"
            defaultContent="Join 500+ successful businesses that trust Upward for their marketing needs. Let's create something extraordinary together."
            className="text-2xl text-blue-100 mb-12 max-w-4xl mx-auto font-light leading-relaxed"
            tag="p"
          />

          {/* Feature Highlights */}
          <div className="flex flex-col md:flex-row items-center justify-center space-y-6 md:space-y-0 md:space-x-12 mb-12">
            <div className="flex items-center space-x-3 text-white">
              <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                <Zap className="w-5 h-5" />
              </div>
              <span className="text-lg font-semibold">Free Consultation</span>
            </div>
            <div className="flex items-center space-x-3 text-white">
              <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                <Target className="w-5 h-5" />
              </div>
              <span className="text-lg font-semibold">Custom Strategy</span>
            </div>
            <div className="flex items-center space-x-3 text-white">
              <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                <ArrowRight className="w-5 h-5" />
              </div>
              <span className="text-lg font-semibold">Proven Results</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-6 sm:space-y-0 sm:space-x-8">
            <EditableButton
              id="cta-primary-button"
              defaultText="Get Free Consultation"
              defaultUrl="#contact"
              defaultType="internal"
              className="group bg-white text-[#004FED] px-12 py-6 rounded-2xl text-xl font-bold hover:shadow-2xl hover:shadow-white/20 transform hover:-translate-y-2 transition-all duration-400 flex items-center space-x-3"
            >
              <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" />
            </EditableButton>
            
            <EditableButton
              id="cta-secondary-button"
              defaultText="View Our Work"
              defaultUrl="/portfolio"
              defaultType="internal"
              className="group border-2 border-white/30 text-white px-12 py-6 rounded-2xl text-xl font-bold hover:bg-white/10 hover:border-white transition-all duration-400 backdrop-blur-md"
            />
          </div>

          {/* Trust Indicators */}
          <div className="mt-16 flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-12 text-blue-100">
            <div className="flex items-center space-x-2">
              <Star className="w-5 h-5 text-yellow-400 fill-current" />
              <span>4.9/5 Client Rating</span>
            </div>
            <div className="flex items-center space-x-2">
              <Sparkles className="w-5 h-5" />
              <span>500+ Happy Clients</span>
            </div>
            <div className="flex items-center space-x-2">
              <Target className="w-5 h-5" />
              <span>100% Project Success</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;