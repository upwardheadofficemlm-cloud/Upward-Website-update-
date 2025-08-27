import React from 'react';
import EditableText from '../components/cms/EditableText';
import EditableImage from '../components/cms/EditableImage';
import EditableIcon from '../components/cms/EditableIcon';
import EditableSection from '../components/cms/EditableSection';
import EditablePricingCard from '../components/cms/EditablePricingCard';
import { submitTrainingInquiry } from '../services/contactService';
import { useCMS } from '../contexts/CMSContext';
import { 
  GraduationCap, 
  Users, 
  Award, 
  Clock, 
  CheckCircle, 
  ArrowRight, 
  BookOpen,
  Target,
  TrendingUp,
  Star,
  Calendar,
  MapPin,
  Phone,
  Mail,
  X,
  Trash2
} from 'lucide-react';

const TrainingCenterPage = () => {
  const { isAdmin, isEditing } = useCMS();
  const [courses, setCourses] = React.useState([
    {
      id: 'course-1',
      title: 'Digital Marketing Fundamentals', 
      duration: '4 weeks',
      level: 'Beginner',
      price: '150,000',
      description: 'Master the basics of digital marketing including SEO, social media, and online advertising.',
      modules: ['SEO Basics', 'Social Media Marketing', 'Google Ads', 'Email Marketing', 'Analytics'],
      icon: 'target',
      color: 'from-[#004FED] to-[#0066FF]'
    },
    {
      id: 'course-2',
      title: 'Advanced Social Media Strategy',
      duration: '3 weeks',
      level: 'Intermediate',
      price: '120,000',
      description: 'Create engaging social media campaigns that drive real business results.',
      modules: ['Content Strategy', 'Community Management', 'Paid Advertising', 'Influencer Marketing', 'Analytics'],
      icon: 'users',
      color: 'from-[#0066FF] to-[#004FED]'
    },
    {
      id: 'course-3',
      title: 'Brand Identity & Design',
      duration: '5 weeks',
      level: 'Beginner',
      price: '180,000',
      description: 'Learn to create compelling brand identities and visual designs.',
      modules: ['Brand Strategy', 'Logo Design', 'Color Theory', 'Typography', 'Brand Guidelines'],
      icon: 'book-open',
      color: 'from-[#004FED] to-[#0080FF]'
    },
    {
      id: 'course-4',
      title: 'Google Ads Mastery',
      duration: '3 weeks',
      level: 'Advanced',
      price: '200,000',
      description: 'Become a Google Ads expert and manage profitable advertising campaigns.',
      modules: ['Campaign Setup', 'Keyword Research', 'Ad Copywriting', 'Bid Management', 'Optimization'],
      icon: 'trending-up',
      color: 'from-[#0080FF] to-[#004FED]'
    },
    {
      id: 'course-5',
      title: 'Content Creation Workshop',
      duration: '2 weeks',
      level: 'Beginner',
      price: '100,000',
      description: 'Create compelling content for digital marketing campaigns.',
      modules: ['Content Strategy', 'Copywriting', 'Visual Content', 'Video Basics', 'Content Calendar'],
      icon: 'book-open',
      color: 'from-[#004FED] to-[#0099FF]'
    },
    {
      id: 'course-6',
      title: 'Marketing Analytics',
      duration: '4 weeks',
      level: 'Intermediate',
      price: '160,000',
      description: 'Master data analysis and reporting for marketing campaigns.',
      modules: ['Google Analytics', 'Data Interpretation', 'Report Creation', 'ROI Calculation', 'Dashboard Setup'],
      icon: 'trending-up',
      color: 'from-[#0099FF] to-[#004FED]'
    }
  ]);

  const [features, setFeatures] = React.useState([
    {
      id: 'feature-1',
      icon: 'graduation-cap',
      title: 'Expert Instructors',
      description: 'Learn from industry professionals with years of real-world experience'
    },
    {
      id: 'feature-2',
      icon: 'users',
      title: 'Small Class Sizes',
      description: 'Maximum 15 students per class for personalized attention'
    },
    {
      id: 'feature-3',
      icon: 'award',
      title: 'Certification',
      description: 'Receive official certificates upon successful course completion'
    },
    {
      id: 'feature-4',
      icon: 'clock',
      title: 'Flexible Schedule',
      description: 'Weekend and evening classes available to fit your schedule'
    }
  ]);

  const [testimonials, setTestimonials] = React.useState([
    {
      id: 'testimonial-1',
      name: 'Thant Zin Oo',
      role: 'Marketing Manager',
      company: 'Golden Myanmar Restaurant',
      message: 'The digital marketing course transformed my understanding of online marketing. I was able to increase our restaurant\'s online orders by 150% within 2 months.',
      rating: 5,
      image: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      id: 'testimonial-2',
      name: 'Khin Myo Thet',
      role: 'Small Business Owner',
      company: 'Mawlamyine Handicrafts',
      message: 'The brand identity course helped me create a professional brand for my handicraft business. Sales have doubled since implementing what I learned.',
      rating: 5,
      image: 'https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      id: 'testimonial-3',
      name: 'Zaw Min Htut',
      role: 'Freelance Marketer',
      company: 'Independent',
      message: 'The Google Ads mastery course gave me the skills to start my own digital marketing consultancy. I now manage campaigns for 10+ local businesses.',
      rating: 5,
      image: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=400'
    }
  ]);

  const [stats, setStats] = React.useState([
    { id: 'stat-1', number: '500+', label: 'Students Trained', icon: 'users' },
    { id: 'stat-2', number: '95%', label: 'Job Placement Rate', icon: 'trending-up' },
    { id: 'stat-3', number: '15+', label: 'Expert Instructors', icon: 'graduation-cap' },
    { id: 'stat-4', number: '20+', label: 'Course Modules', icon: 'book-open' }
  ]);

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-32 bg-gradient-to-br from-[#004FED]/5 via-white to-[#004FED]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <div className="inline-flex items-center px-6 py-3 bg-white/90 backdrop-blur-md rounded-full border border-[#004FED]/20 mb-8 shadow-lg">
                <GraduationCap className="w-5 h-5 text-[#004FED] mr-2" />
                <span className="text-base font-semibold text-[#004FED]">Professional Training Center</span>
              </div>
              
              <EditableText
                id="training-hero-title"
                defaultContent="Master Marketing Skills"
                className="text-5xl md:text-7xl font-black text-gray-900 mb-8 leading-tight"
                tag="h1"
              />
              
              <EditableText
                id="training-hero-description"
                defaultContent="Accelerate your career with hands-on marketing training from industry experts. Learn practical skills that drive real business results."
                className="text-2xl text-gray-600 mb-12 leading-relaxed font-light"
                tag="p"
              />

              <div className="flex flex-col sm:flex-row space-y-6 sm:space-y-0 sm:space-x-8">
                <button className="bg-gradient-to-r from-[#004FED] to-[#0066FF] text-white px-10 py-5 rounded-2xl text-xl font-bold hover:shadow-2xl hover:shadow-[#004FED]/30 transform hover:-translate-y-2 transition-all duration-400 flex items-center space-x-3">
                  <span>Enroll Now</span>
                  <ArrowRight className="w-6 h-6" />
                </button>
                <button className="border-2 border-[#004FED] text-[#004FED] px-10 py-5 rounded-2xl text-xl font-bold hover:bg-[#004FED] hover:text-white transition-all duration-400">
                  View Schedule
                </button>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl">
                <EditableImage
                  id="training-hero-image"
                  defaultSrc="https://images.pexels.com/photos/1181533/pexels-photo-1181533.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Training Center"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-10 -right-10 bg-white p-8 rounded-2xl shadow-2xl border border-gray-100">
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-gradient-to-r from-[#004FED] to-[#0066FF] rounded-xl flex items-center justify-center">
                    <Award className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <div className="font-bold text-gray-900 text-lg">500+ Graduates</div>
                    <div className="text-gray-600">Successfully Trained</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <EditableSection
        id="training-stats-section"
        className="py-32 bg-white"
        canAddItems={true}
        onAddItem={() => {
          const newStat = {
            id: `stat-${Date.now()}`,
            number: '100+',
            label: 'New Metric',
            icon: 'award'
          };
          setStats([...stats, newStat]);
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
            {stats.map((stat, index) => (
              <div key={stat.id} className="text-center group cursor-pointer relative">
                <div className="w-20 h-20 bg-gradient-to-r from-[#004FED]/10 to-[#0066FF]/20 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-125 transition-all duration-500 shadow-lg">
                  <EditableIcon
                    id={`training-stat-icon-${stat.id}`}
                    defaultIcon={stat.icon}
                    className="w-10 h-10 text-[#004FED]"
                    onIconChange={(newIcon) => {
                      setStats(stats.map(s => s.id === stat.id ? { ...s, icon: newIcon } : s));
                    }}
                  />
                </div>
                <EditableText
                  id={`training-stat-number-${stat.id}`}
                  defaultContent={stat.number}
                  className="text-4xl md:text-5xl font-black text-[#004FED] mb-3 block"
                  tag="div"
                />
                <EditableText
                  id={`training-stat-label-${stat.id}`}
                  defaultContent={stat.label}
                  className="text-gray-600 font-semibold text-lg"
                  tag="div"
                />
                {isAdmin && isEditing && stats.length > 1 && (
                  <button
                    onClick={() => {
                      if (window.confirm('Are you sure you want to remove this stat?')) {
                        setStats(stats.filter(s => s.id !== stat.id));
                      }
                    }}
                    className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 text-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200 hover:bg-red-600"
                  >
                    <X className="w-3 h-3" />
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>
      </EditableSection>

      {/* Features Section */}
      <EditableSection
        id="training-features-section"
        className="py-32 bg-gradient-to-b from-gray-50 to-white"
        canAddItems={true}
        onAddItem={() => {
          const newFeature = {
            id: `feature-${Date.now()}`,
            icon: 'star',
            title: 'New Feature',
            description: 'Description of the new feature'
          };
          setFeatures([...features, newFeature]);
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <EditableText
              id="training-features-title"
              defaultContent="Why Choose Our Training"
              className="text-4xl md:text-6xl font-black text-gray-900 mb-6"
              tag="h2"
            />
            <EditableText
              id="training-features-description"
              defaultContent="Experience world-class marketing education in the heart of Mawlamyine"
              className="text-xl text-gray-600 max-w-3xl mx-auto font-light"
              tag="p"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {features.map((feature, index) => (
              <div key={feature.id} className="bg-white rounded-3xl p-10 shadow-xl border border-gray-100 hover:shadow-2xl hover:-translate-y-4 transition-all duration-500 text-center relative group">
                <div className="w-20 h-20 bg-gradient-to-r from-[#004FED]/10 to-[#0066FF]/20 rounded-2xl flex items-center justify-center mx-auto mb-8">
                  <EditableIcon
                    id={`training-feature-icon-${feature.id}`}
                    defaultIcon={feature.icon}
                    className="w-10 h-10 text-[#004FED]"
                    onIconChange={(newIcon) => {
                      setFeatures(features.map(f => f.id === feature.id ? { ...f, icon: newIcon } : f));
                    }}
                  />
                </div>
                <EditableText
                  id={`training-feature-title-${feature.id}`}
                  defaultContent={feature.title}
                  className="text-2xl font-bold text-gray-900 mb-4"
                  tag="h3"
                />
                <EditableText
                  id={`training-feature-description-${feature.id}`}
                  defaultContent={feature.description}
                  className="text-gray-600 leading-relaxed text-lg"
                  tag="p"
                />
                {isAdmin && isEditing && features.length > 1 && (
                  <button
                    onClick={() => {
                      if (window.confirm('Are you sure you want to remove this feature?')) {
                        setFeatures(features.filter(f => f.id !== feature.id));
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

      {/* Courses Section */}
      <EditableSection
        id="training-courses-section"
        className="py-32 bg-white"
        canAddItems={true}
        onAddItem={() => {
          const newCourse = {
            id: `course-${Date.now()}`,
            title: 'New Course',
            duration: '4 weeks',
            level: 'Beginner',
            price: '100,000',
            description: 'Description of the new course',
            modules: ['Module 1', 'Module 2', 'Module 3'],
            icon: 'book-open',
            color: 'from-[#004FED] to-[#0066FF]'
          };
          setCourses([...courses, newCourse]);
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <EditableText
              id="training-courses-title"
              defaultContent="Our Courses"
              className="text-4xl md:text-6xl font-black text-gray-900 mb-6"
              tag="h2"
            />
            <EditableText
              id="training-courses-description"
              defaultContent="Comprehensive marketing courses designed for Myanmar professionals"
              className="text-xl text-gray-600 max-w-3xl mx-auto font-light"
              tag="p"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {courses.map((course, index) => (
              <div key={course.id} className="bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl hover:-translate-y-4 transition-all duration-500 border border-gray-100 relative group">
                <div className={`h-2 bg-gradient-to-r ${course.color}`}></div>
                
                <div className="p-10">
                  <div className="flex items-center justify-between mb-6">
                    <div className={`w-16 h-16 bg-gradient-to-r ${course.color} rounded-2xl flex items-center justify-center`}>
                      <EditableIcon
                        id={`training-course-icon-${course.id}`}
                        defaultIcon={course.icon}
                        className="w-8 h-8 text-white"
                        onIconChange={(newIcon) => {
                          setCourses(courses.map(c => c.id === course.id ? { ...c, icon: newIcon } : c));
                        }}
                      />
                    </div>
                    <div className="text-right">
                      <EditableText
                        id={`training-course-price-${course.id}`}
                        defaultContent={course.price}
                        className="text-2xl font-black text-[#004FED] block"
                        tag="div"
                      />
                      <EditableText
                        id={`training-course-currency-${course.id}`}
                        defaultContent="MMK"
                        className="text-gray-600 text-sm"
                        tag="div"
                      />
                    </div>
                  </div>

                  <div className="flex items-center space-x-4 mb-4">
                    <EditableText
                      id={`training-course-level-${course.id}`}
                      defaultContent={course.level}
                      className="px-3 py-1 bg-[#004FED]/10 text-[#004FED] rounded-full text-sm font-semibold inline-block"
                      tag="span"
                    />
                    <span className="flex items-center text-gray-600">
                      <Clock className="w-4 h-4 mr-1" />
                      <EditableText
                        id={`training-course-duration-${course.id}`}
                        defaultContent={course.duration}
                        className="inline"
                        tag="span"
                      />
                    </span>
                  </div>

                  <EditableText
                    id={`training-course-title-${course.id}`}
                    defaultContent={course.title}
                    className="text-2xl font-bold text-gray-900 mb-4"
                    tag="h3"
                  />
                  <EditableText
                    id={`training-course-description-${course.id}`}
                    defaultContent={course.description}
                    className="text-gray-600 leading-relaxed mb-6"
                    tag="p"
                  />

                  <div className="mb-8">
                    <h4 className="font-bold text-gray-900 mb-3">Course Modules:</h4>
                    <ul className="space-y-2">
                      {course.modules.map((module, moduleIndex) => (
                        <li key={moduleIndex} className="flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-[#004FED] flex-shrink-0" />
                          <EditableText
                            id={`training-course-module-${course.id}-${moduleIndex}`}
                            defaultContent={module}
                            className="text-gray-600 text-sm"
                            tag="span"
                          />
                        </li>
                      ))}
                    </ul>
                  </div>

                  <button className="w-full bg-gradient-to-r from-[#004FED] to-[#0066FF] text-white py-4 rounded-xl font-bold hover:shadow-xl hover:shadow-[#004FED]/30 transition-all duration-300">
                    Enroll Now
                  </button>
                  
                  {isAdmin && isEditing && courses.length > 1 && (
                    <button
                      onClick={() => {
                        if (window.confirm('Are you sure you want to remove this course?')) {
                          setCourses(courses.filter(c => c.id !== course.id));
                        }
                      }}
                      className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 text-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200 hover:bg-red-600"
                    >
                      <Trash2 className="w-3 h-3" />
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </EditableSection>

      {/* Testimonials Section */}
      <EditableSection
        id="training-testimonials-section"
        className="py-32 bg-gradient-to-b from-gray-50 to-white"
        canAddItems={true}
        onAddItem={() => {
          const newTestimonial = {
            id: `testimonial-${Date.now()}`,
            name: 'New Client',
            role: 'Job Title',
            company: 'Company Name',
            message: 'Great experience with the training program!',
            rating: 5,
            image: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=400'
          };
          setTestimonials([...testimonials, newTestimonial]);
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <EditableText
              id="training-testimonials-title"
              defaultContent="Student Success Stories"
              className="text-4xl md:text-6xl font-black text-gray-900 mb-6"
              tag="h2"
            />
            <EditableText
              id="training-testimonials-description"
              defaultContent="Hear from our graduates who transformed their careers"
              className="text-xl text-gray-600 max-w-3xl mx-auto font-light"
              tag="p"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {testimonials.map((testimonial, index) => (
              <div key={testimonial.id} className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 relative group">
                <div className="flex items-center mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                
                <EditableText
                  id={`training-testimonial-message-${testimonial.id}`}
                  defaultContent={`"${testimonial.message}"`}
                  className="text-gray-600 leading-relaxed mb-6 text-lg"
                  tag="p"
                />
                
                <div className="flex items-center space-x-4">
                  <EditableImage
                    id={`training-testimonial-image-${testimonial.id}`}
                    defaultSrc={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div>
                    <EditableText
                      id={`training-testimonial-name-${testimonial.id}`}
                      defaultContent={testimonial.name}
                      className="font-bold text-gray-900"
                      tag="div"
                    />
                    <EditableText
                      id={`training-testimonial-role-${testimonial.id}`}
                      defaultContent={testimonial.role}
                      className="text-[#004FED] font-medium"
                      tag="div"
                    />
                    <EditableText
                      id={`training-testimonial-company-${testimonial.id}`}
                      defaultContent={testimonial.company}
                      className="text-gray-600 text-sm"
                      tag="div"
                    />
                  </div>
                </div>
                
                {isAdmin && isEditing && testimonials.length > 1 && (
                  <button
                    onClick={() => {
                      if (window.confirm('Are you sure you want to remove this testimonial?')) {
                        setTestimonials(testimonials.filter(t => t.id !== testimonial.id));
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

      {/* Contact Section */}
      <section className="py-32 bg-gradient-to-r from-[#004FED] to-[#0066FF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <EditableText
                id="training-contact-title"
                defaultContent="Ready to Start Learning?"
                className="text-4xl md:text-6xl font-bold text-white mb-8"
                tag="h2"
              />
              <EditableText
                id="training-contact-description"
                defaultContent="Join hundreds of professionals who have accelerated their careers with our training programs."
                className="text-2xl text-blue-100 mb-12 font-light"
                tag="p"
              />
              
              <div className="space-y-6">
                <div className="flex items-center space-x-4 text-white">
                  <MapPin className="w-6 h-6 flex-shrink-0" />
                  <span className="text-lg">39 (A), 3rd Floor, Taung Wine Road, Near Mawlamyine University</span>
                </div>
                <div className="flex items-center space-x-4 text-white">
                  <Phone className="w-6 h-6 flex-shrink-0" />
                  <span className="text-lg">09740977946 / 09740977947</span>
                </div>
                <div className="flex items-center space-x-4 text-white">
                  <Mail className="w-6 h-6 flex-shrink-0" />
                  <span className="text-lg">training@upwardmm.com</span>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-3xl p-10 border border-white/20">
              <EditableText
                id="training-form-title"
                defaultContent="Get Course Information"
                className="text-2xl font-bold text-white mb-8"
                tag="h3"
              />
              
              <form className="space-y-6" onSubmit={async (e) => {
                e.preventDefault();
                const formData = new FormData(e.target as HTMLFormElement);
                const data = {
                  name: formData.get('name') as string,
                  email: formData.get('email') as string,
                  phone: formData.get('phone') as string,
                  course: formData.get('course') as string,
                  source: 'training'
                };

                try {
                  const docId = await submitTrainingInquiry(data);
                  alert('Thank you for your interest! We will contact you soon with course information. Reference ID: ' + docId.substring(0, 8));
                  (e.target as HTMLFormElement).reset();
                } catch (error) {
                  alert('Sorry, there was an error. Please try again or contact us directly.');
                  console.error('Training inquiry error:', error);
                }
              }}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    required
                    className="w-full px-6 py-4 bg-white/20 border border-white/30 rounded-xl text-white placeholder-blue-100 focus:outline-none focus:ring-2 focus:ring-white/50"
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    required
                    className="w-full px-6 py-4 bg-white/20 border border-white/30 rounded-xl text-white placeholder-blue-100 focus:outline-none focus:ring-2 focus:ring-white/50"
                  />
                </div>
                
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  required
                  className="w-full px-6 py-4 bg-white/20 border border-white/30 rounded-xl text-white placeholder-blue-100 focus:outline-none focus:ring-2 focus:ring-white/50"
                />
                
                <select name="course" required className="w-full px-6 py-4 bg-white/20 border border-white/30 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-white/50">
                  <option value="">Select Course Interest</option>
                  <option value="digital-marketing">Digital Marketing Fundamentals</option>
                  <option value="social-media">Advanced Social Media Strategy</option>
                  <option value="brand-identity">Brand Identity & Design</option>
                  <option value="google-ads">Google Ads Mastery</option>
                  <option value="content-creation">Content Creation Workshop</option>
                  <option value="analytics">Marketing Analytics</option>
                </select>
                
                <button type="submit" className="w-full bg-white text-[#004FED] py-4 rounded-xl font-bold hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
                  Request Information
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TrainingCenterPage;