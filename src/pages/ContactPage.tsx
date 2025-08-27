import React, { useState } from 'react';
import EditableText from '../components/cms/EditableText';
import EditableImage from '../components/cms/EditableImage';
import EditableGoogleMap from '../components/cms/EditableGoogleMap';
import { submitContactForm, ContactFormData } from '../services/contactService';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  Send,
  Facebook,
  Instagram,
  Linkedin,
  MessageCircle,
  CheckCircle,
  Star
} from 'lucide-react';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    budget: '',
    message: '',
    timeline: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic form validation
    if (!formData.name || !formData.email || !formData.service || !formData.message) {
      alert('Please fill in all required fields.');
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      alert('Please enter a valid email address.');
      return;
    }

    // Show loading state
    const submitButton = e.target as HTMLFormElement;
    const button = submitButton.querySelector('button[type="submit"]') as HTMLButtonElement;
    const originalText = button.innerHTML;
    button.innerHTML = '<div class="flex items-center justify-center space-x-2"><div class="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div><span>Sending...</span></div>';
    button.disabled = true;

    // Submit to Firebase
    const contactData: ContactFormData = {
      ...formData,
      source: 'contact'
    };

    submitContactForm(contactData)
      .then((docId) => {
        // Reset button
        button.innerHTML = originalText;
        button.disabled = false;
        
        // Show success message
        alert('Thank you for your message! We will get back to you within 24 hours. Your reference ID is: ' + docId.substring(0, 8));
        
        // Reset form
        setFormData({
          name: '',
          email: '',
          phone: '',
          company: '',
          service: '',
          budget: '',
          message: '',
          timeline: ''
        });
      })
      .catch((error) => {
        // Reset button
        button.innerHTML = originalText;
        button.disabled = false;
        
        // Show error message
        alert('Sorry, there was an error submitting your message. Please try again or contact us directly.');
        console.error('Submission error:', error);
      });
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Visit Our Office',
      details: ['39 (A), 3rd Floor, Taung Wine Road', 'Near Mawlamyine University', 'Mawlamyine, Mon State, Myanmar'],
      color: 'text-[#004FED]',
      bgColor: 'from-[#004FED]/10 to-[#0066FF]/20'
    },
    {
      icon: Phone,
      title: 'Call Us',
      details: ['09740977946', '09740977947', 'Available 24/7'],
      color: 'text-[#0066FF]',
      bgColor: 'from-[#0066FF]/10 to-[#004FED]/20'
    },
    {
      icon: Mail,
      title: 'Email Us',
      details: ['contact@upwardmm.com', 'sales@upwardmm.com', 'careers@upwardmm.com'],
      color: 'text-[#004FED]',
      bgColor: 'from-[#004FED]/10 to-[#0080FF]/20'
    },
    {
      icon: Clock,
      title: 'Business Hours',
      details: ['Mon - Fri: 9:00 AM - 6:00 PM', 'Sat: 9:00 AM - 3:00 PM', 'Sun: Closed'],
      color: 'text-[#0066FF]',
      bgColor: 'from-[#0066FF]/10 to-[#004FED]/20'
    }
  ];

  const services = [
    'Brand Identity',
    'Digital Marketing',
    'Social Media Marketing',
    'Web Development',
    'Content Creation',
    'SEO Services',
    'Traditional Marketing',
    'Strategy Consulting',
    'Other'
  ];

  const budgetRanges = [
    'Under 50,000 MMK',
    '50,000 - 100,000 MMK',
    '100,000 - 300,000 MMK',
    '300,000 - 500,000 MMK',
    'Over 500,000 MMK'
  ];

  const timelines = [
    'ASAP',
    '1-3 months',
    '3-6 months',
    '6+ months',
    'Just exploring'
  ];

  const testimonials = [
    {
      name: 'Thant Zin',
      company: 'Golden Myanmar Restaurant',
      message: 'Upward transformed our brand completely. Their creative approach and attention to detail exceeded our expectations.',
      rating: 5
    },
    {
      name: 'Khin Maung',
      company: 'Thanlwin Tech Hub',
      message: 'Professional team with excellent results. Our website traffic increased by 300% within 4 months.',
      rating: 5
    },
    {
      name: 'Nwe Nwe',
      company: 'Mon State Tourism',
      message: 'Outstanding service and creative solutions. They truly understand the Myanmar market.',
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-32 bg-gradient-to-br from-[#004FED]/5 via-white to-[#004FED]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <EditableText
            id="contact-hero-title"
            defaultContent="Get In Touch"
            className="text-5xl md:text-7xl font-black text-gray-900 mb-6"
            tag="h1"
          />
          <EditableText
            id="contact-hero-description"
            defaultContent="Ready to elevate your brand? Let's discuss your project and create something amazing together."
            className="text-2xl text-gray-600 max-w-4xl mx-auto font-light leading-relaxed mb-12"
            tag="p"
          />
          <div className="flex items-center justify-center space-x-8">
            <div className="flex items-center space-x-3">
              <CheckCircle className="w-8 h-8 text-[#004FED]" />
              <span className="text-xl font-semibold text-gray-700">Free Consultation</span>
            </div>
            <div className="flex items-center space-x-3">
              <Clock className="w-8 h-8 text-[#0066FF]" />
              <span className="text-xl font-semibold text-gray-700">24h Response Time</span>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-20 py-32">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-3xl shadow-2xl p-12 border border-gray-100">
              <EditableText
                id="contact-form-title"
                defaultContent="Start Your Project"
                className="text-4xl font-bold text-gray-900 mb-8"
                tag="h2"
              />
              <EditableText
                id="contact-form-description"
                defaultContent="Tell us about your project and we'll get back to you within 24 hours with a detailed proposal."
                className="text-xl text-gray-600 mb-12"
                tag="p"
              />
              
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  <div>
                    <label htmlFor="name" className="block text-lg font-semibold text-gray-700 mb-3">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-6 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#004FED] focus:border-transparent transition-all duration-300 text-lg"
                      placeholder="Your name"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-lg font-semibold text-gray-700 mb-3">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-6 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#004FED] focus:border-transparent transition-all duration-300 text-lg"
                      placeholder="your@email.com"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  <div>
                    <label htmlFor="phone" className="block text-lg font-semibold text-gray-700 mb-3">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-6 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#004FED] focus:border-transparent transition-all duration-300 text-lg"
                      placeholder="+95 9 123 456 789"
                    />
                  </div>
                  <div>
                    <label htmlFor="company" className="block text-lg font-semibold text-gray-700 mb-3">
                      Company Name
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-6 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#004FED] focus:border-transparent transition-all duration-300 text-lg"
                      placeholder="Your company"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
                  <div>
                    <label htmlFor="service" className="block text-lg font-semibold text-gray-700 mb-3">
                      Service Needed *
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-6 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#004FED] focus:border-transparent transition-all duration-300 text-lg"
                      required
                    >
                      <option value="">Select a service</option>
                      {services.map((service) => (
                        <option key={service} value={service}>{service}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label htmlFor="budget" className="block text-lg font-semibold text-gray-700 mb-3">
                      Budget Range
                    </label>
                    <select
                      id="budget"
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      className="w-full px-6 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#004FED] focus:border-transparent transition-all duration-300 text-lg"
                    >
                      <option value="">Select budget</option>
                      {budgetRanges.map((range) => (
                        <option key={range} value={range}>{range}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label htmlFor="timeline" className="block text-lg font-semibold text-gray-700 mb-3">
                      Timeline
                    </label>
                    <select
                      id="timeline"
                      name="timeline"
                      value={formData.timeline}
                      onChange={handleChange}
                      className="w-full px-6 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#004FED] focus:border-transparent transition-all duration-300 text-lg"
                    >
                      <option value="">Select timeline</option>
                      {timelines.map((timeline) => (
                        <option key={timeline} value={timeline}>{timeline}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-lg font-semibold text-gray-700 mb-3">
                    Project Details *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={8}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-6 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#004FED] focus:border-transparent transition-all duration-300 resize-none text-lg"
                    placeholder="Tell us about your project, goals, and any specific requirements..."
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-[#004FED] to-[#0066FF] text-white px-8 py-6 rounded-xl text-xl font-bold hover:shadow-2xl hover:shadow-[#004FED]/30 transform hover:-translate-y-2 transition-all duration-400 flex items-center justify-center space-x-3"
                >
                  <Send className="w-6 h-6" />
                  <span>Send Project Details</span>
                </button>
              </form>
            </div>
          </div>

          {/* Contact Information Sidebar */}
          <div className="space-y-8">
            {/* Contact Cards */}
            {contactInfo.map((info, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl hover:shadow-[#004FED]/10 transition-all duration-500">
                <div className="flex items-start space-x-6">
                  <div className={`w-16 h-16 bg-gradient-to-r ${info.bgColor} rounded-xl flex items-center justify-center flex-shrink-0`}>
                    <info.icon className={`w-8 h-8 ${info.color}`} />
                  </div>
                  <div>
                    <EditableText
                      id={`contact-info-title-${index}`}
                      defaultContent={info.title}
                      className="text-xl font-bold text-gray-900 mb-3"
                      tag="h3"
                    />
                    {info.details.map((detail, detailIndex) => (
                      <EditableText
                        key={detailIndex}
                        id={`contact-info-detail-${index}-${detailIndex}`}
                        defaultContent={detail}
                        className="text-gray-600 leading-relaxed"
                        tag="p"
                      />
                    ))}
                  </div>
                </div>
              </div>
            ))}

            {/* Social Media */}
            <div className="bg-gradient-to-r from-[#004FED] to-[#0066FF] rounded-2xl p-8 text-white">
              <EditableText
                id="contact-social-title"
                defaultContent="Follow Us"
                className="text-2xl font-bold mb-4"
                tag="h3"
              />
              <EditableText
                id="contact-social-description"
                defaultContent="Stay connected and get the latest updates on our projects and industry insights."
                className="text-blue-100 mb-6"
                tag="p"
              />
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center hover:bg-white/30 transition-all duration-300 hover:scale-110"
                >
                  <Facebook className="w-6 h-6" />
                </a>
                <a
                  href="#"
                  className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center hover:bg-white/30 transition-all duration-300 hover:scale-110"
                >
                  <Instagram className="w-6 h-6" />
                </a>
                <a
                  href="#"
                  className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center hover:bg-white/30 transition-all duration-300 hover:scale-110"
                >
                  <Linkedin className="w-6 h-6" />
                </a>
                <a
                  href="#"
                  className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center hover:bg-white/30 transition-all duration-300 hover:scale-110"
                >
                  <MessageCircle className="w-6 h-6" />
                </a>
              </div>
            </div>

            {/* Quick Contact */}
            <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100">
              <EditableText
                id="contact-quick-title"
                defaultContent="Need Immediate Help?"
                className="text-xl font-bold text-gray-900 mb-4"
                tag="h3"
              />
              <EditableText
                id="contact-quick-description"
                defaultContent="For urgent inquiries, call us directly or send a WhatsApp message."
                className="text-gray-600 mb-6"
                tag="p"
              />
              <div className="space-y-4">
                <a
                  href="tel:09740977946"
                  className="w-full bg-[#004FED]/10 text-[#004FED] px-6 py-4 rounded-xl text-center font-bold hover:bg-[#004FED]/20 transition-all duration-300 block"
                >
                  Call Now: 09740977946
                </a>
                <a
                  href="https://wa.me/959740977946"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-green-50 text-green-600 px-6 py-4 rounded-xl text-center font-bold hover:bg-green-100 transition-all duration-300 block"
                >
                  WhatsApp Us
                </a>
              </div>
            </div>

            {/* Google Maps */}
            <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
              <div className="p-6 border-b border-gray-100">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-gradient-to-r from-[#004FED]/10 to-[#0066FF]/20 rounded-xl flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-[#004FED]" />
                  </div>
                  <div>
                    <EditableText
                      id="contact-map-title"
                      defaultContent="Find Us on Map"
                      className="text-xl font-bold text-gray-900"
                      tag="h3"
                    />
                    <EditableText
                      id="contact-map-subtitle"
                      defaultContent="Get directions to our office"
                      className="text-gray-600"
                      tag="p"
                    />
                  </div>
                </div>
              </div>
              <EditableGoogleMap
                id="contact-office-map"
                defaultUrl="https://maps.app.goo.gl/yc9CtNUKp3H5SSXi9?g_st=ipc"
                height="300px"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <section className="py-32 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <EditableText
              id="contact-testimonials-title"
              defaultContent="What Clients Say"
              className="text-4xl md:text-6xl font-black text-gray-900 mb-6"
              tag="h2"
            />
            <EditableText
              id="contact-testimonials-description"
              defaultContent="Don't just take our word for it - hear from our satisfied clients"
              className="text-xl text-gray-600 max-w-3xl mx-auto font-light"
              tag="p"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500">
                <div className="flex items-center mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <EditableText
                  id={`testimonial-message-${index}`}
                  defaultContent={`"${testimonial.message}"`}
                  className="text-gray-600 leading-relaxed mb-6 text-lg"
                  tag="p"
                />
                <div>
                  <EditableText
                    id={`testimonial-name-${index}`}
                    defaultContent={testimonial.name}
                    className="font-bold text-gray-900"
                    tag="div"
                  />
                  <EditableText
                    id={`testimonial-company-${index}`}
                    defaultContent={testimonial.company}
                    className="text-[#004FED] font-medium"
                    tag="div"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-32 bg-gradient-to-r from-[#004FED] to-[#0066FF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <EditableText
            id="contact-map-title"
            defaultContent="Visit Our Office"
            className="text-4xl md:text-6xl font-bold text-white mb-8"
            tag="h2"
          />
          <EditableText
            id="contact-map-description"
            defaultContent="Located in the heart of Mawlamyine, we're easily accessible and always ready to welcome you."
            className="text-xl text-blue-100 mb-12 max-w-3xl mx-auto font-light"
            tag="p"
          />
          <div className="bg-white/10 backdrop-blur-md rounded-3xl p-12 border border-white/20">
            <EditableText
              id="contact-office-address"
              defaultContent="📍 39 (a), 3rd Floor, Taung Wine Road, Near Mawlamyine University, Mawlamyine, Mon State, Myanmar"
              className="text-2xl text-white mb-4"
              tag="div"
            />
            <EditableText
              id="contact-office-note"
              defaultContent="Our office is conveniently located near Mawlamyine University with easy parking and public transport access."
              className="text-blue-100 text-lg"
              tag="p"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;