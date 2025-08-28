import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import EditableText from '../../components/cms/EditableText';
import EditableImage from '../../components/cms/EditableImage';
import EditableStatBlock from '../../components/cms/EditableStatBlock';
import { MapPin, Eye, TrendingUp, Users, CheckCircle, ArrowRight, Award, Clock, Target, ExternalLink, Filter, Search } from 'lucide-react';

const BillboardsPage = () => {
  const navigate = useNavigate();
  const [filterType, setFilterType] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  
  const locations = [
    {
      id: 'BB001',
      name: 'Strand Road Junction',
      traffic: '50,000+',
      type: 'Premium Billboard',
      size: '20ft x 10ft',
      description: 'High-traffic intersection with maximum visibility',
      image: 'https://images.pexels.com/photos/1666021/pexels-photo-1666021.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      id: 'BB002',
      name: 'Mawlamyine University Area',
      traffic: '30,000+',
      type: 'Student Zone Billboard',
      size: '15ft x 8ft',
      description: 'Perfect for targeting young demographics and families',
      image: 'https://images.pexels.com/photos/1666021/pexels-photo-1666021.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      id: 'BB003',
      name: 'Central Market District',
      traffic: '40,000+',
      type: 'Commercial Billboard',
      size: '18ft x 9ft',
      description: 'Busy commercial area with diverse audience',
      image: 'https://images.pexels.com/photos/1666021/pexels-photo-1666021.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      id: 'BB004',
      name: 'Thanlwin Bridge Approach',
      traffic: '60,000+',
      type: 'Highway Billboard',
      size: '25ft x 12ft',
      description: 'Major gateway to Mawlamyine with interstate traffic',
      image: 'https://images.pexels.com/photos/1666021/pexels-photo-1666021.jpeg?auto=compress&cs=tinysrgb&w=600'
    }
  ];

  const packages = [
    {
      id: 'billboard-standard',
      name: 'Standard Billboard',
      price: '500,000',
      period: 'MMK/month',
      description: 'Perfect for local businesses',
      features: [
        'Prime location selection',
        'Professional design included',
        'Monthly maintenance',
        'Performance reporting',
        '1 design revision'
      ],
      size: '15ft x 8ft',
      buttonText: 'Get Started',
      buttonLink: '#contact',
      buttonType: 'internal' as 'internal' | 'external'
    },
    {
      id: 'billboard-premium',
      name: 'Premium Billboard',
      price: '800,000',
      period: 'MMK/month',
      description: 'High-traffic premium locations',
      features: [
        'Premium location guarantee',
        'Custom design & installation',
        'Weekly maintenance checks',
        'Detailed analytics',
        'Unlimited design revisions'
      ],
      size: '20ft x 10ft',
      popular: true,
      buttonText: 'Get Started',
      buttonLink: '#contact',
      buttonType: 'internal' as 'internal' | 'external'
    },
    {
      id: 'billboard-highway',
      name: 'Highway Billboard',
      price: '1,200,000',
      period: 'MMK/month',
      description: 'Maximum visibility and impact',
      features: [
        'Highway premium locations',
        'Large format design',
        'Professional photography',
        'Traffic impact analysis',
        'Campaign optimization'
      ],
      size: '25ft x 12ft',
      buttonText: 'Contact Sales',
      buttonLink: 'tel:09740977946',
      buttonType: 'external' as 'internal' | 'external'
    }
  ];

  const benefits = [
    {
      icon: Eye,
      title: 'Maximum Visibility',
      description: 'Strategic locations ensure your message reaches thousands daily'
    },
    {
      icon: Target,
      title: 'Local Targeting',
      description: 'Reach Mawlamyine residents and visitors at key city locations'
    },
    {
      icon: Clock,
      title: '24/7 Exposure',
      description: 'Your advertisement works around the clock, every day'
    },
    {
      icon: TrendingUp,
      title: 'Brand Recognition',
      description: 'Build strong local brand presence and community awareness'
    }
  ];

  const stats = [
    { number: '200,000+', label: 'Daily Impressions', icon: Eye },
    { number: '15+', label: 'Prime Locations', icon: MapPin },
    { number: '95%', label: 'Client Retention', icon: Award },
    { number: '3+', label: 'Years Experience', icon: TrendingUp }
  ];

  // Filter locations based on type and search term
  const filteredLocations = locations.filter(location => {
    const matchesType = filterType === 'all' || location.type.toLowerCase().includes(filterType.toLowerCase());
    const matchesSearch = location.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         location.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesType && matchesSearch;
  });

  const uniqueTypes = ['all', ...new Set(locations.map(loc => loc.type))];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-32 bg-gradient-to-br from-[#004FED]/5 via-white to-[#004FED]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <div className="inline-flex items-center px-6 py-3 bg-white/90 backdrop-blur-md rounded-full border border-[#004FED]/20 mb-8 shadow-lg">
                <MapPin className="w-5 h-5 text-[#004FED] mr-2" />
                <span className="text-base font-semibold text-[#004FED]">Mawlamyine City-Wide Coverage</span>
              </div>
              
              <EditableText
                id="billboards-hero-title"
                defaultContent="Billboard Advertising"
                className="text-5xl md:text-7xl font-black text-gray-900 mb-8 leading-tight"
                tag="h1"
              />
              
              <EditableText
                id="billboards-hero-description"
                defaultContent="Dominate Mawlamyine's skyline with strategic billboard placements. Our billboard advertising services are exclusively available in Mawlamyine city, reaching thousands of local residents and visitors daily."
                className="text-2xl text-gray-600 mb-12 leading-relaxed font-light"
                tag="p"
              />

              <div className="flex flex-col sm:flex-row space-y-6 sm:space-y-0 sm:space-x-8">
                <button className="bg-gradient-to-r from-[#004FED] to-[#0066FF] text-white px-10 py-5 rounded-2xl text-xl font-bold hover:shadow-2xl hover:shadow-[#004FED]/30 transform hover:-translate-y-2 transition-all duration-400 flex items-center space-x-3">
                  <span>View Locations</span>
                  <ArrowRight className="w-6 h-6" />
                </button>
                <button className="border-2 border-[#004FED] text-[#004FED] px-10 py-5 rounded-2xl text-xl font-bold hover:bg-[#004FED] hover:text-white transition-all duration-400">
                  Get Quote
                </button>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl">
                <EditableImage
                  id="billboards-hero-image"
                  defaultSrc="https://images.pexels.com/photos/1666021/pexels-photo-1666021.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Billboard Advertising"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-10 -right-10 bg-white p-8 rounded-2xl shadow-2xl border border-gray-100">
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-gradient-to-r from-[#004FED] to-[#0066FF] rounded-xl flex items-center justify-center">
                    <Eye className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <div className="font-bold text-gray-900 text-lg">200K+ Views</div>
                    <div className="text-gray-600">Daily Impressions</div>
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
                id={`billboard-stat-${index}`}
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

      {/* Benefits Section */}
      <section className="py-32 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-black text-gray-900 mb-6">
              Why Choose <span className="bg-gradient-to-r from-[#004FED] to-[#0066FF] bg-clip-text text-transparent">Billboard</span> Advertising
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light">
              Powerful outdoor advertising benefits exclusively for Mawlamyine businesses
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

      {/* Locations Section */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-black text-gray-900 mb-6">
              Prime <span className="bg-gradient-to-r from-[#004FED] to-[#0066FF] bg-clip-text text-transparent">Locations</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light">
              Strategic billboard placements across Mawlamyine's busiest areas
            </p>
          </div>

          {/* Filter Section */}
          <div className="mb-12">
            <div className="flex flex-col lg:flex-row gap-6 items-center justify-center">
              {/* Search Bar */}
              <div className="relative w-full max-w-md">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search locations..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#004FED]/20 focus:border-[#004FED] transition-all duration-300"
                />
              </div>

              {/* Filter Dropdown */}
              <div className="relative">
                <Filter className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <select
                  value={filterType}
                  onChange={(e) => setFilterType(e.target.value)}
                  className="pl-12 pr-8 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#004FED]/20 focus:border-[#004FED] transition-all duration-300 appearance-none bg-white"
                >
                  {uniqueTypes.map((type) => (
                    <option key={type} value={type}>
                      {type === 'all' ? 'All Types' : type}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {filteredLocations.map((location, index) => (
              <div 
                key={index} 
                onClick={() => navigate(`/billboards/${location.id}`)}
                className="bg-gradient-to-br from-gray-50 to-white rounded-3xl overflow-hidden shadow-xl border border-gray-100 hover:shadow-2xl hover:-translate-y-4 transition-all duration-500 cursor-pointer group"
              >
                <div className="relative h-64">
                  <img
                    src={location.image}
                    alt={location.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md px-4 py-2 rounded-full">
                    <span className="text-[#004FED] font-bold">{location.traffic} daily views</span>
                  </div>
                  <div className="absolute top-4 left-4 bg-[#004FED]/90 backdrop-blur-md px-3 py-1 rounded-full">
                    <span className="text-white font-bold text-sm">{location.id}</span>
                  </div>
                </div>
                
                <div className="p-8">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-2xl font-bold text-gray-900">{location.name}</h3>
                    <span className="px-3 py-1 bg-[#004FED]/10 text-[#004FED] rounded-full text-sm font-semibold">
                      {location.size}
                    </span>
                  </div>
                  
                  <div className="text-[#004FED] font-bold mb-4">{location.type}</div>
                  <p className="text-gray-600 leading-relaxed">{location.description}</p>
                  
                  <div className="mt-6 flex items-center justify-between">
                    <span className="text-sm text-gray-500">Click to view details</span>
                    <ArrowRight className="w-5 h-5 text-[#004FED] group-hover:translate-x-2 transition-transform duration-300" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-32 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-black text-gray-900 mb-6">
              Billboard <span className="bg-gradient-to-r from-[#004FED] to-[#0066FF] bg-clip-text text-transparent">Packages</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light">
              Flexible billboard advertising solutions for every budget
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
                  <div className="text-[#004FED] font-semibold mb-4">{pkg.size}</div>
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
                      if (pkg.buttonLink.startsWith('tel:')) {
                        window.location.href = pkg.buttonLink;
                      } else {
                        window.open(pkg.buttonLink, '_blank', 'noopener noreferrer');
                      }
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
            Ready to Dominate Mawlamyine's Skyline?
          </h2>
          <p className="text-2xl text-blue-100 mb-12 max-w-3xl mx-auto font-light">
            Let's create a billboard campaign that puts your brand in front of thousands of Mawlamyine residents and visitors every day.
          </p>
          <button className="inline-flex items-center space-x-3 bg-white text-[#004FED] px-12 py-6 rounded-2xl text-xl font-bold hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-400">
            <span>Start Your Billboard Campaign</span>
            <ArrowRight className="w-6 h-6" />
          </button>
        </div>
      </section>
    </div>
  );
};

export default BillboardsPage;