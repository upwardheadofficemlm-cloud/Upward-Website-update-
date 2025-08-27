import React, { useState } from 'react';
import EditableText from './cms/EditableText';
import EditableImage from './cms/EditableImage';
import EditableButton from './cms/EditableButton';
import EditableSection from './cms/EditableSection';
import EditableStatBlock from './cms/EditableStatBlock';
import EditableCard from './cms/EditableCard';
import { Monitor, MapPin, Eye, TrendingUp, ArrowRight, Zap, Plus, Trash2, Copy } from 'lucide-react';
import { useCMS } from '../contexts/CMSContext';

const OOHAdvertisingBrief = () => {
  const { isAdmin, isEditing } = useCMS();
  const [oohImages, setOohImages] = useState([
    {
      id: 'ooh-image-1',
      src: 'https://images.pexels.com/photos/1666021/pexels-photo-1666021.jpeg?auto=compress&cs=tinysrgb&w=400',
      alt: 'Billboard Advertising',
      title: 'Billboard Network',
      description: 'Strategic billboard placements across Mawlamyine'
    },
    {
      id: 'ooh-image-2', 
      src: 'https://images.pexels.com/photos/1181533/pexels-photo-1181533.jpeg?auto=compress&cs=tinysrgb&w=400',
      alt: 'Digital Signage',
      title: 'AdNova Digital Signage',
      description: 'Smart 65" displays in premium shopping centers'
    },
    {
      id: 'ooh-image-3',
      src: 'https://images.pexels.com/photos/264636/pexels-photo-264636.jpeg?auto=compress&cs=tinysrgb&w=400', 
      alt: 'Shopping Center',
      title: 'Premium Locations',
      description: 'High-traffic shopping centers and commercial areas'
    },
    {
      id: 'ooh-image-4',
      src: 'https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=400',
      alt: 'City Traffic',
      title: 'Maximum Visibility', 
      description: 'Reach thousands of daily commuters and shoppers'
    }
  ]);

  const [oohStats, setOohStats] = React.useState([
    { id: 'ooh-brief-stat-1', number: '200K+', label: 'Daily Impressions' },
    { id: 'ooh-brief-stat-2', number: '15+', label: 'Prime Locations' },
    { id: 'ooh-brief-stat-3', number: '24/7', label: 'Visibility' },
    { id: 'ooh-brief-stat-4', number: '95%', label: 'Client Retention' }
  ]);

  const oohServices = [
    {
      title: 'Traditional Billboards',
      description: 'Strategic billboard placements across Mawlamyine\'s busiest areas',
      price: 'From 500K MMK/month',
      icon: MapPin,
      color: 'from-[#004FED] to-[#0066FF]'
    },
    {
      title: 'AdNova Digital Signage',
      description: 'Mawlamyine\'s first smart 65" digital displays in premium locations',
      price: 'From 25K MMK/day',
      icon: Monitor,
      color: 'from-[#0066FF] to-[#004FED]'
    }
  ];

  const locations = [
    'Ocean Mawlamyine Shopping Center',
    'Grand Mawlamyine Shopping Center',
    'K-Mart Shopping Centre',
    'Strand Road Junction',
    'Thanlwin Bridge Approach'
  ];

  const addOohImage = () => {
    const newImage = {
      id: `ooh-image-${Date.now()}`,
      src: 'https://images.pexels.com/photos/1666021/pexels-photo-1666021.jpeg?auto=compress&cs=tinysrgb&w=400',
      alt: 'New OOH Image',
      title: 'New OOH Service',
      description: 'Description of the new OOH service'
    };
    setOohImages([...oohImages, newImage]);
  };

  const removeOohImage = (imageId: string) => {
    if (oohImages.length <= 1) return;
    if (window.confirm('Are you sure you want to remove this OOH image?')) {
      setOohImages(oohImages.filter(img => img.id !== imageId));
    }
  };

  const duplicateOohImage = (imageId: string) => {
    const imageToClone = oohImages.find(img => img.id === imageId);
    if (imageToClone) {
      const newImage = {
        ...imageToClone,
        id: `ooh-image-${Date.now()}`,
        title: `${imageToClone.title} Copy`
      };
      setOohImages([...oohImages, newImage]);
    }
  };

  return (
    <section className="py-32 bg-gradient-to-br from-gray-50 via-white to-[#004FED]/5 relative overflow-hidden">
      {/* Modern Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-64 h-64 bg-gradient-to-br from-[#004FED]/10 to-[#0066FF]/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-48 h-48 bg-gradient-to-br from-[#0066FF]/10 to-[#004FED]/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-[#004FED]/5 to-[#0066FF]/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-24 relative z-10">
          <div className="inline-flex items-center px-8 py-4 bg-white/90 backdrop-blur-md rounded-full border border-[#004FED]/20 mb-12 shadow-2xl hover:shadow-3xl hover:scale-105 transition-all duration-500">
            <Monitor className="w-6 h-6 text-[#004FED] mr-3" />
            <span className="text-lg font-bold text-[#004FED]">Out-of-Home Advertising</span>
          </div>
          
          <EditableText
            id="ooh-brief-title"
            defaultContent="Dominate Mawlamyine's Skyline"
            className="text-5xl md:text-7xl font-black text-gray-900 mb-8 leading-tight"
            tag="h2"
          />
          
          <EditableText
            id="ooh-brief-description"
            defaultContent="From traditional billboards to cutting-edge digital signage, reach thousands of Mawlamyine residents and visitors daily with strategic outdoor advertising solutions."
            className="text-2xl text-gray-600 max-w-5xl mx-auto font-light leading-relaxed"
            tag="p"
          />
        </div>

        {/* Modern Image Grid */}
        <EditableSection
          id="ooh-images-section"
          className="mb-24 relative z-10"
          canAddItems={true}
          onAddItem={addOohImage}
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-16">
            {oohImages.map((image, index) => (
              <EditableCard
                key={image.id}
                id={`ooh-image-card-${image.id}`}
                className="group"
                canDelete={oohImages.length > 1}
                onDelete={() => removeOohImage(image.id)}
                canDuplicate={true}
                onDuplicate={() => duplicateOohImage(image.id)}
              >
                <div className="bg-white/95 backdrop-blur-md rounded-3xl shadow-2xl border border-white/20 hover:shadow-3xl hover:shadow-[#004FED]/20 hover:-translate-y-6 transition-all duration-700 overflow-hidden group">
                  {/* Square Image */}
                  <div className="aspect-square relative overflow-hidden">
                    <EditableImage
                      id={`ooh-image-${image.id}`}
                      defaultSrc={image.src}
                      alt={image.alt}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#004FED]/90 via-[#004FED]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                    <div className="absolute inset-0 flex flex-col justify-end p-6 text-white opacity-0 group-hover:opacity-100 transition-all duration-700 transform translate-y-8 group-hover:translate-y-0">
                      <EditableText
                        id={`ooh-image-title-${image.id}`}
                        defaultContent={image.title}
                        className="font-black text-xl mb-2 text-shadow-lg"
                        tag="h4"
                      />
                      <EditableText
                        id={`ooh-image-description-${image.id}`}
                        defaultContent={image.description}
                        className="text-base text-blue-100 leading-relaxed"
                        tag="p"
                      />
                    </div>
                  </div>
                </div>
              </EditableCard>
            ))}
            
            {/* Add Image Card */}
            {isAdmin && isEditing && (
              <div 
                onClick={addOohImage}
                className="bg-white/60 backdrop-blur-md rounded-3xl shadow-2xl border-2 border-dashed border-[#004FED]/30 hover:border-[#004FED] hover:bg-[#004FED]/10 hover:shadow-3xl hover:-translate-y-2 transition-all duration-500 cursor-pointer flex items-center justify-center aspect-square"
              >
                <div className="text-center">
                  <Plus className="w-16 h-16 text-[#004FED]/60 hover:text-[#004FED] mx-auto mb-4 hover:scale-110 transition-all duration-300" />
                  <span className="text-[#004FED] font-bold text-lg">Add OOH Service</span>
                </div>
              </div>
            )}
          </div>
        </EditableSection>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 relative z-10">
          {/* Billboard Service */}
          <div className="bg-white/95 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/30 hover:shadow-3xl hover:shadow-[#004FED]/20 hover:-translate-y-4 transition-all duration-500 overflow-hidden">
            {/* Header with Icon */}
            <div className="relative h-32 bg-gradient-to-r from-[#004FED] to-[#0066FF] flex items-center justify-center">
              <div className="absolute inset-0 bg-black/10"></div>
              <div className="relative z-10 flex items-center space-x-4">
                <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center">
                  <MapPin className="w-8 h-8 text-white" />
                </div>
                <div>
                  <EditableText
                    id="ooh-billboard-title"
                    defaultContent="Billboard Advertising"
                    className="text-3xl font-black text-white"
                    tag="h3"
                  />
                  <div className="text-blue-100 font-semibold">Traditional Outdoor Marketing</div>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="p-10">
              <EditableText
                id="ooh-billboard-description"
                defaultContent="Strategic billboard placements across Mawlamyine's busiest areas for maximum visibility and brand impact."
                className="text-gray-600 leading-relaxed mb-8 text-lg"
                tag="p"
              />

              {/* Features */}
              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-[#004FED] rounded-full"></div>
                  <span className="text-gray-700">Prime city locations</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-[#004FED] rounded-full"></div>
                  <span className="text-gray-700">200K+ daily impressions</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-[#004FED] rounded-full"></div>
                  <span className="text-gray-700">Professional design included</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-[#004FED] rounded-full"></div>
                  <span className="text-gray-700">24/7 visibility</span>
                </div>
              </div>

              {/* Price */}
              <div className="bg-gradient-to-r from-[#004FED]/10 to-[#0066FF]/10 rounded-2xl p-6 mb-8">
                <div className="text-center">
                  <div className="text-3xl font-black text-[#004FED] mb-2">From 500K MMK</div>
                  <div className="text-gray-600 font-semibold">per month</div>
                </div>
              </div>

              <EditableButton
                id="ooh-billboard-button"
                defaultText="Explore Billboard Network"
                defaultUrl="/billboards"
                defaultType="internal"
                className="w-full bg-gradient-to-r from-[#004FED] to-[#0066FF] text-white py-4 rounded-2xl text-lg font-bold hover:shadow-2xl hover:shadow-[#004FED]/40 transform hover:-translate-y-2 transition-all duration-500 flex items-center justify-center space-x-3"
              >
                <ArrowRight className="w-5 h-5" />
              </EditableButton>
            </div>
          </div>

          {/* AdNova Digital Signage */}
          <div className="bg-white/95 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/30 hover:shadow-3xl hover:shadow-[#0066FF]/20 hover:-translate-y-4 transition-all duration-500 overflow-hidden">
            {/* Header with Icon */}
            <div className="relative h-32 bg-gradient-to-r from-[#0066FF] to-[#004FED] flex items-center justify-center">
              <div className="absolute inset-0 bg-black/10"></div>
              <div className="relative z-10 flex items-center space-x-4">
                <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center">
                  <Monitor className="w-8 h-8 text-white" />
                </div>
                <div>
                  <EditableText
                    id="ooh-adnova-title"
                    defaultContent="AdNova Digital Signage"
                    className="text-3xl font-black text-white"
                    tag="h3"
                  />
                  <div className="text-blue-100 font-semibold">Smart Digital Advertising</div>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="p-10">
              <EditableText
                id="ooh-adnova-description"
                defaultContent="Mawlamyine's first smart 65-inch digital displays in premium shopping centers with interactive features."
                className="text-gray-600 leading-relaxed mb-8 text-lg"
                tag="p"
              />

              {/* Features */}
              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-[#0066FF] rounded-full"></div>
                  <span className="text-gray-700">65" Full HD displays</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-[#0066FF] rounded-full"></div>
                  <span className="text-gray-700">Touch-screen interaction</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-[#0066FF] rounded-full"></div>
                  <span className="text-gray-700">Premium shopping centers</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-[#0066FF] rounded-full"></div>
                  <span className="text-gray-700">Real-time content updates</span>
                </div>
              </div>

              {/* Price */}
              <div className="bg-gradient-to-r from-[#0066FF]/10 to-[#004FED]/10 rounded-2xl p-6 mb-8">
                <div className="text-center">
                  <div className="text-3xl font-black text-[#0066FF] mb-2">From 25K MMK</div>
                  <div className="text-gray-600 font-semibold">per day</div>
                </div>
              </div>

              <EditableButton
                id="ooh-adnova-button"
                defaultText="Discover AdNova System"
                defaultUrl="/adnova"
                defaultType="internal"
                className="w-full bg-gradient-to-r from-[#0066FF] to-[#004FED] text-white py-4 rounded-2xl text-lg font-bold hover:shadow-2xl hover:shadow-[#0066FF]/40 transform hover:-translate-y-2 transition-all duration-500 flex items-center justify-center space-x-3"
              >
                <Monitor className="w-5 h-5" />
              </EditableButton>
            </div>
          </div>
        </div>

        {/* Stats Section - Full Width Below */}
        <div className="mt-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* Stats */}
            <EditableSection
              id="ooh-brief-stats-section"
              className="bg-gradient-to-br from-[#004FED] via-[#0066FF] to-[#004FED] rounded-3xl p-10 text-white shadow-3xl border border-white/30"
              canAddItems={true}
              onAddItem={() => {
                const newStat = {
                  id: `ooh-brief-stat-${Date.now()}`,
                  number: '100+',
                  label: 'New Metric'
                };
                setOohStats([...oohStats, newStat]);
              }}
            >
              <EditableText
                id="ooh-stats-title"
                defaultContent="OOH Advertising Impact"
                className="text-3xl font-black mb-8 text-center"
                tag="h3"
              />
              
              <div className="grid grid-cols-2 gap-6">
                {oohStats.map((stat, index) => (
                  <div key={stat.id} className="text-center group relative">
                    <EditableStatBlock
                      id={stat.id}
                      number={stat.number}
                      label={stat.label}
                      numberClassName="text-3xl font-black mb-2 text-white group-hover:scale-110 transition-transform duration-500"
                      labelClassName="text-blue-100 text-sm font-semibold"
                      onDelete={() => {
                        if (oohStats.length > 1 && window.confirm('Are you sure you want to remove this statistic?')) {
                          setOohStats(oohStats.filter(s => s.id !== stat.id));
                        }
                      }}
                      onDuplicate={() => {
                        const newStat = {
                          ...stat,
                          id: `ooh-brief-stat-${Date.now()}`,
                          label: `${stat.label} Copy`
                        };
                        setOohStats([...oohStats, newStat]);
                      }}
                    />
                  </div>
                ))}
                
                {/* Add Stat Card */}
                {isAdmin && isEditing && (
                  <div 
                    onClick={() => {
                      const newStat = {
                        id: `ooh-brief-stat-${Date.now()}`,
                        number: '100+',
                        label: 'New Metric'
                      };
                      setOohStats([...oohStats, newStat]);
                    }}
                    className="text-center cursor-pointer hover:bg-white/20 p-4 rounded-2xl transition-all duration-500 border-2 border-dashed border-white/40 hover:border-white/80"
                  >
                    <Plus className="w-8 h-8 text-white/70 hover:text-white mx-auto mb-2" />
                    <div className="text-xs text-blue-100 font-bold">Add Stat</div>
                  </div>
                )}
              </div>
            </EditableSection>

            {/* Key Locations */}
            <div className="bg-white/95 backdrop-blur-xl rounded-3xl p-10 shadow-2xl border border-white/30 hover:shadow-3xl hover:-translate-y-2 transition-all duration-700">
              <EditableText
                id="ooh-locations-title"
                defaultContent="Premium Locations"
                className="text-3xl font-black text-gray-900 mb-8"
                tag="h3"
              />
              
              <div className="space-y-4">
                {locations.slice(0, 3).map((location, index) => (
                  <div key={index} className="flex items-center space-x-4 p-3 rounded-xl hover:bg-[#004FED]/10 transition-all duration-300">
                    <div className="w-10 h-10 bg-gradient-to-r from-[#004FED]/20 to-[#0066FF]/30 rounded-xl flex items-center justify-center">
                      <MapPin className="w-5 h-5 text-[#004FED]" />
                    </div>
                    <EditableText
                      id={`ooh-location-${index}`}
                      defaultContent={location}
                      className="text-gray-800 font-semibold"
                      tag="span"
                    />
                  </div>
                ))}
                <div className="pt-6">
                  <EditableButton
                    id="ooh-locations-view-all"
                    defaultText="View All Locations"
                    defaultUrl="/billboards"
                    defaultType="internal"
                    className="inline-flex items-center space-x-2 text-[#004FED] hover:text-[#0066FF] font-semibold transition-all duration-300"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-20">
          <div className="bg-gradient-to-r from-[#004FED]/5 to-[#0066FF]/10 rounded-3xl p-12 border border-[#004FED]/10">
            <EditableText
              id="ooh-brief-cta-title"
              defaultContent="Ready to Dominate Mawlamyine's Advertising?"
              className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
              tag="h3"
            />
            <EditableText
              id="ooh-brief-cta-description"
              defaultContent="Choose between traditional billboards or cutting-edge digital signage to reach your audience effectively."
              className="text-xl text-gray-600 mb-10 max-w-3xl mx-auto font-light"
              tag="p"
            />
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <EditableButton
                id="ooh-brief-cta-contact"
                defaultText="Get Free Consultation"
                defaultUrl="#contact"
                defaultType="internal"
                className="bg-gradient-to-r from-[#004FED] to-[#0066FF] text-white px-10 py-4 rounded-2xl text-lg font-bold hover:shadow-2xl hover:shadow-[#004FED]/30 transform hover:-translate-y-2 transition-all duration-400"
              />
              <EditableButton
                id="ooh-brief-cta-compare"
                defaultText="Compare OOH Options"
                defaultUrl="/billboards"
                defaultType="internal"
                className="border-2 border-[#004FED] text-[#004FED] px-10 py-4 rounded-2xl text-lg font-bold hover:bg-[#004FED] hover:text-white transition-all duration-400"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OOHAdvertisingBrief;