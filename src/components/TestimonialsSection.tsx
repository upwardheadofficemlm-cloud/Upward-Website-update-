import React from 'react';
import EditableText from './cms/EditableText';
import EditableImage from './cms/EditableImage';
import EditableSection from './cms/EditableSection';
import EditableStatBlock from './cms/EditableStatBlock';
import { Star, Quote, Plus } from 'lucide-react';
import { useCMS } from '../contexts/CMSContext';

const TestimonialsSection = () => {
  const { isAdmin, isEditing } = useCMS();
  const [bottomStats, setBottomStats] = React.useState([
    { id: 'testimonial-stat-1', number: '98%', label: 'Client Satisfaction' },
    { id: 'testimonial-stat-2', number: '4.9/5', label: 'Average Rating' },
    { id: 'testimonial-stat-3', number: '100%', label: 'Project Success' }
  ]);

  const testimonials = [
    {
      name: 'Thant Zin Oo',
      position: 'CEO',
      company: 'Golden Myanmar Restaurant',
      image: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=400',
      quote: 'Upward transformed our brand completely. Their creative approach and attention to detail exceeded our expectations. Our revenue increased by 200% within 6 months.',
      rating: 5,
      result: '200% Revenue Growth'
    },
    {
      name: 'Khin Maung Aye',
      position: 'Founder',
      company: 'Thanlwin Tech Hub',
      image: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=400',
      quote: 'Professional team with excellent results. Our website traffic increased by 300% within 4 months. The ROI on our digital marketing investment has been incredible.',
      rating: 5,
      result: '300% Traffic Increase'
    },
    {
      name: 'Nwe Nwe Htun',
      position: 'Marketing Director',
      company: 'Mon State Tourism',
      image: 'https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=400',
      quote: 'Outstanding service and creative solutions. They truly understand the Myanmar market and helped us reach international tourists effectively.',
      rating: 5,
      result: '40% Tourist Increase'
    }
  ];

  return (
    <section className="py-32 bg-gradient-to-br from-[#004FED]/5 via-white to-[#0066FF]/5 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-32 right-20 w-64 h-64 bg-gradient-to-br from-[#004FED]/10 to-[#0066FF]/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-32 left-20 w-48 h-48 bg-gradient-to-br from-[#0066FF]/10 to-[#004FED]/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <EditableText
            id="testimonials-title"
            defaultContent="What Our Clients Say"
            className="text-4xl md:text-6xl font-black text-gray-900 mb-6"
            tag="h2"
          />
          <EditableText
            id="testimonials-description"
            defaultContent="Real stories from real clients who achieved extraordinary results"
            className="text-xl text-gray-600 max-w-3xl mx-auto font-light"
            tag="p"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="group bg-white rounded-3xl p-10 shadow-xl border border-gray-100 hover:shadow-2xl hover:shadow-[#004FED]/10 hover:-translate-y-4 transition-all duration-500 relative"
            >
              {/* Quote Icon */}
              <div className="absolute -top-6 left-10 w-12 h-12 bg-gradient-to-r from-[#004FED] to-[#0066FF] rounded-full flex items-center justify-center shadow-lg">
                <Quote className="w-6 h-6 text-white" />
              </div>

              {/* Rating */}
              <div className="flex items-center mb-6 mt-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>

              {/* Quote */}
              <EditableText
                id={`testimonial-quote-${index}`}
                defaultContent={`"${testimonial.quote}"`}
                className="text-gray-600 leading-relaxed mb-8 text-lg italic"
                tag="p"
              />

              {/* Result Badge */}
              <div className="inline-block px-4 py-2 bg-gradient-to-r from-[#004FED]/10 to-[#0066FF]/10 rounded-full mb-6">
                <EditableText
                  id={`testimonial-result-${index}`}
                  defaultContent={testimonial.result}
                  className="text-[#004FED] font-bold text-sm"
                  tag="span"
                />
              </div>

              {/* Author */}
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 rounded-full overflow-hidden shadow-lg">
                  <EditableImage
                    id={`testimonial-image-${index}`}
                    defaultSrc={testimonial.image}
                    alt={testimonial.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <EditableText
                    id={`testimonial-name-${index}`}
                    defaultContent={testimonial.name}
                    className="font-bold text-gray-900 text-lg"
                    tag="div"
                  />
                  <EditableText
                    id={`testimonial-position-${index}`}
                    defaultContent={testimonial.position}
                    className="text-[#004FED] font-semibold"
                    tag="div"
                  />
                  <EditableText
                    id={`testimonial-company-${index}`}
                    defaultContent={testimonial.company}
                    className="text-gray-600 text-sm"
                    tag="div"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Stats */}
        <EditableSection
          id="testimonials-bottom-stats-section"
          className="text-center mt-20"
          canAddItems={true}
          onAddItem={() => {
            const newStat = {
              id: `testimonial-stat-${Date.now()}`,
              number: '95%',
              label: 'New Metric'
            };
            setBottomStats([...bottomStats, newStat]);
          }}
        >
          <div className="inline-flex items-center space-x-12 bg-white/80 backdrop-blur-md rounded-2xl p-8 shadow-xl border border-gray-100">
            {bottomStats.map((stat, index) => (
              <React.Fragment key={stat.id}>
                {index > 0 && <div className="w-px h-12 bg-gray-200"></div>}
                <div className="text-center">
                  <EditableStatBlock
                    id={stat.id}
                    number={stat.number}
                    label={stat.label}
                    numberClassName="text-2xl font-black text-[#004FED] mb-1"
                    labelClassName="text-gray-600 text-sm font-medium"
                    onDelete={() => {
                      if (bottomStats.length > 1 && window.confirm('Are you sure you want to remove this statistic?')) {
                        setBottomStats(bottomStats.filter(s => s.id !== stat.id));
                      }
                    }}
                    onDuplicate={() => {
                      const newStat = {
                        ...stat,
                        id: `testimonial-stat-${Date.now()}`,
                        label: `${stat.label} Copy`
                      };
                      setBottomStats([...bottomStats, newStat]);
                    }}
                  />
                </div>
              </React.Fragment>
            ))}
            
            {/* Add Stat Button */}
            {isAdmin && isEditing && (
              <>
                <div className="w-px h-12 bg-gray-200"></div>
                <div 
                  onClick={() => {
                    const newStat = {
                      id: `testimonial-stat-${Date.now()}`,
                      number: '95%',
                      label: 'New Metric'
                    };
                    setBottomStats([...bottomStats, newStat]);
                  }}
                  className="text-center cursor-pointer hover:bg-[#004FED]/5 p-4 rounded-lg transition-all duration-300"
                >
                  <Plus className="w-8 h-8 text-gray-400 hover:text-[#004FED] mx-auto mb-2" />
                  <div className="text-xs text-gray-500 font-medium">Add Stat</div>
                </div>
              </>
            )}
          </div>
        </EditableSection>
      </div>
    </section>
  );
};

export default TestimonialsSection;