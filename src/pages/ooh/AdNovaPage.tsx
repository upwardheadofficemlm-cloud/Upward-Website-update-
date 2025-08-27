import React from 'react';
import EditableText from '../../components/cms/EditableText';
import EditableImage from '../../components/cms/EditableImage';
import EditableStatBlock from '../../components/cms/EditableStatBlock';
import { Monitor, Zap, Users, BarChart3, CheckCircle, ArrowRight, Award, Clock, Target, Wifi, ExternalLink } from 'lucide-react';

const AdNovaPage = () => {
  const features = [
    {
      icon: Monitor,
      title: '65" Full HD Display',
      description: '1080×1920 resolution with 450 nits brightness and infrared touch screen'
    },
    {
      icon: Zap,
      title: 'Smart Android System',
      description: 'Runs on Android 11 with 2MP built-in camera and supports JPEG, PNG, MP4 formats'
    },
    {
      icon: Users,
      title: 'Strategic Locations',
      description: 'Placed in Ocean Mawlamyine, Grand Mawlamyine, and K-Mart Shopping Centers'
    },
    {
      icon: Wifi,
      title: 'Interactive Features',
      description: 'Touch-sensitive screens with QR codes and interactive buttons support'
    }
  ];

  const locations = [
    {
      name: 'Ocean Mawlamyine Shopping Center',
      description: 'Premium shopping destination with high foot traffic and engaged shoppers',
      audience: 'Families & Premium Shoppers',
      screens: 'Prime Location',
      image: 'https://images.pexels.com/photos/264636/pexels-photo-264636.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      name: 'Grand Mawlamyine Shopping Center',
      description: 'Major retail hub attracting diverse demographics throughout the day',
      audience: 'Mixed Demographics',
      screens: 'Central Location',
      image: 'https://images.pexels.com/photos/264636/pexels-photo-264636.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      name: 'K-Mart Shopping Centre (Phat Khin Ward)',
      description: 'Popular shopping center in residential area with consistent daily traffic',
      audience: 'Local Residents & Families',
      screens: 'Community Location',
      image: 'https://images.pexels.com/photos/264636/pexels-photo-264636.jpeg?auto=compress&cs=tinysrgb&w=600'
    }
  ];

  const packages = [
    {
      id: 'adnova-essential',
      name: 'Essential',
      price: '25,000',
      period: 'MMK/day',
      description: 'Perfect for single-day campaigns',
      features: [
        '1 location (25K) or 3 locations (70K)',
        '15-second ad slots',
        'Full-screen or split-screen format',
        'JPEG, PNG, MP4 support',
        'Touch-screen interaction'
      ],
      screens: '1-3 Locations',
      buttonText: 'Get Started',
      buttonLink: '#contact',
      buttonType: 'internal' as 'internal' | 'external'
    },
    {
      id: 'adnova-growth',
      name: 'Growth',
      price: '70,000',
      period: 'MMK/week',
      description: 'One-week advertising campaign',
      features: [
        '1 location (70K) or 3 locations (200K)',
        '1 free creative change per week',
        'Basic performance report',
        '8 shows per hour',
        'Interactive QR code support'
      ],
      screens: '1-3 Locations',
      popular: true,
      buttonText: 'Get Started',
      buttonLink: '#contact',
      buttonType: 'internal' as 'internal' | 'external'
    },
    {
      id: 'adnova-elite',
      name: 'Elite',
      price: '250,000',
      period: 'MMK/month',
      description: 'Premium monthly campaign',
      features: [
        '1 location (250K) or 3 locations (700K)',
        '2 free creative changes per month',
        'Advanced performance report',
        'Priority placement',
        'Dedicated support'
      ],
      screens: '1-3 Locations',
      buttonText: 'Contact Sales',
      buttonLink: 'https://wa.me/959740977946',
      buttonType: 'external' as 'internal' | 'external'
    }
  ];

  const benefits = [
    {
      icon: Target,
      title: 'First in Mawlamyine',
      description: 'Be part of Mawlamyine\'s pioneering smart digital advertising system'
    },
    {
      icon: Clock,
      title: 'Cost-Effective',
      description: 'Affordable advertising starting from just 25,000 MMK per day'
    },
    {
      icon: BarChart3,
      title: 'Real-Time Data',
      description: 'Get performance reports and real-time advertising analytics'
    },
    {
      icon: Zap,
      title: 'Interactive Features',
      description: 'Touch-sensitive screens with QR codes and interactive buttons'
    }
  ];

  const stats = [
    { number: '65"', label: 'Full HD Display', icon: Monitor },
    { number: '8x', label: 'Hourly Ad Shows', icon: Users },
    { number: '450', label: 'Nits Brightness', icon: Zap },
    { number: '15s', label: 'Ad Slot Duration', icon: Clock }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-32 bg-gradient-to-br from-[#004FED]/5 via-white to-[#004FED]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <div className="inline-flex items-center px-6 py-3 bg-white/90 backdrop-blur-md rounded-full border border-[#004FED]/20 mb-8 shadow-lg">
                <Monitor className="w-5 h-5 text-[#004FED] mr-2" />
                <span className="text-base font-semibold text-[#004FED]">Digital Signage Network</span>
              </div>
              
              <EditableText
                id="adnova-hero-title"
                defaultContent="AdNova Digital Signage"
                className="text-5xl md:text-7xl font-black text-gray-900 mb-8 leading-tight"
                tag="h1"
              />
              
              <EditableText
                id="adnova-hero-description"
                defaultContent="Mawlamyine's first smart digital signage advertising system. Revolutionary 65-inch Full HD displays in premium indoor locations across Mawlamyine city."
                className="text-2xl text-gray-600 mb-12 leading-relaxed font-light"
                tag="p"
              />

              <div className="flex flex-col sm:flex-row space-y-6 sm:space-y-0 sm:space-x-8">
                <button className="bg-gradient-to-r from-[#004FED] to-[#0066FF] text-white px-10 py-5 rounded-2xl text-xl font-bold hover:shadow-2xl hover:shadow-[#004FED]/30 transform hover:-translate-y-2 transition-all duration-400 flex items-center space-x-3">
                  <span>View Network</span>
                  <ArrowRight className="w-6 h-6" />
                </button>
                <button className="border-2 border-[#004FED] text-[#004FED] px-10 py-5 rounded-2xl text-xl font-bold hover:bg-[#004FED] hover:text-white transition-all duration-400">
                  Get Demo
                </button>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl">
                <EditableImage
                  id="adnova-hero-image"
                  defaultSrc="https://images.pexels.com/photos/1181533/pexels-photo-1181533.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Digital Signage"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-10 -right-10 bg-white p-8 rounded-2xl shadow-2xl border border-gray-100">
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-gradient-to-r from-[#004FED] to-[#0066FF] rounded-xl flex items-center justify-center">
                    <Monitor className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <div className="font-bold text-gray-900 text-lg">First in Mawlamyine</div>
                    <div className="text-gray-600">Smart Digital Signage</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
            {stats.map((stat, index) => (
              <EditableStatBlock
                key={index}
                id={`adnova-stat-${index}`}
                number={stat.number}
                label={stat.label}
                icon={stat.icon}
                className="group cursor-pointer"
                numberClassName="text-4xl md:text-5xl font-black text-[#004FED] mb-3"
                labelClassName="text-gray-600 font-semibold text-lg"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-32 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-black text-gray-900 mb-6">
              Advanced <span className="bg-gradient-to-r from-[#004FED] to-[#0066FF] bg-clip-text text-transparent">Technology</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light">
              Mawlamyine's first smart digital signage system with advanced features
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {features.map((feature, index) => (
              <div key={index} className="bg-white rounded-3xl p-10 shadow-xl border border-gray-100 hover:shadow-2xl hover:-translate-y-4 transition-all duration-500 text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-[#004FED]/10 to-[#0066FF]/20 rounded-2xl flex items-center justify-center mx-auto mb-8">
                  <feature.icon className="w-10 h-10 text-[#004FED]" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed text-lg">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Locations Section */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-black text-gray-900 mb-6">
              Premium <span className="bg-gradient-to-r from-[#004FED] to-[#0066FF] bg-clip-text text-transparent">Locations</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light">
              Strategic digital screen placements across Mawlamyine's premier shopping centers
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {locations.map((location, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-50 to-white rounded-3xl overflow-hidden shadow-xl border border-gray-100 hover:shadow-2xl hover:-translate-y-4 transition-all duration-500">
                <div className="relative h-64">
                  <img
                    src={location.image}
                    alt={location.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md px-4 py-2 rounded-full">
                    <span className="text-[#004FED] font-bold">{location.screens}</span>
                  </div>
                </div>
                
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{location.name}</h3>
                  <div className="text-[#004FED] font-bold mb-4">{location.audience}</div>
                  <p className="text-gray-600 leading-relaxed">{location.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-32 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-black text-gray-900 mb-6">
              Why Choose <span className="bg-gradient-to-r from-[#004FED] to-[#0066FF] bg-clip-text text-transparent">AdNova</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light">
              Mawlamyine's first smart advertising system benefits
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white rounded-3xl p-10 shadow-xl border border-gray-100 hover:shadow-2xl hover:-translate-y-4 transition-all duration-500 text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-[#004FED]/10 to-[#0066FF]/20 rounded-2xl flex items-center justify-center mx-auto mb-8">
                  <benefit.icon className="w-10 h-10 text-[#004FED]" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{benefit.title}</h3>
                <p className="text-gray-600 leading-relaxed text-lg">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-black text-gray-900 mb-6">
              Digital Signage <span className="bg-gradient-to-r from-[#004FED] to-[#0066FF] bg-clip-text text-transparent">Packages</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light">
              Flexible digital advertising solutions for every business size
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
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{pkg.name}</h3>
                  <div className="text-[#004FED] font-semibold mb-4">{pkg.screens}</div>
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
            Ready to Go Digital?
          </h2>
          <p className="text-2xl text-blue-100 mb-12 max-w-3xl mx-auto font-light">
            Transform your advertising with AdNova, Mawlamyine's first smart digital signage system. Reach your local audience with precision and impact.
          </p>
          <button className="inline-flex items-center space-x-3 bg-white text-[#004FED] px-12 py-6 rounded-2xl text-xl font-bold hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-400">
            <span>Start Your Digital Campaign</span>
            <ArrowRight className="w-6 h-6" />
          </button>
        </div>
      </section>
    </div>
  );
};

export default AdNovaPage;