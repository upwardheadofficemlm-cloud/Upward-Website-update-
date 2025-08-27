import React from 'react';
import Hero from '../components/Hero';
import Services from '../components/Services';
import ClientLogos from '../components/ClientLogos';
import ProcessSection from '../components/ProcessSection';
import TestimonialsSection from '../components/TestimonialsSection';
import CTASection from '../components/CTASection';
import OOHAdvertisingBrief from '../components/OOHAdvertisingBrief';

const HomePage = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <ClientLogos />
      <Services />
      <ProcessSection />
      <OOHAdvertisingBrief />
      <TestimonialsSection />
      <CTASection />
    </div>
  );
};

export default HomePage;