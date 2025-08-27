import React, { useState } from 'react';
import EditableText from './cms/EditableText';
import EditableButton from './cms/EditableButton';
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
  MessageCircle
} from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    budget: '',
    message: ''
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
    if (!formData.name || !formData.email || !formData.message) {
      alert('Please fill in all required fields.');
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      alert('Please enter a valid email address.');
      return;
    }

    // Submit to Firebase
    const contactData: ContactFormData = {
      ...formData,
      source: 'general'
    };

    submitContactForm(contactData)
      .then((docId) => {
        alert('Thank you for your message! We will contact you soon. Reference ID: ' + docId.substring(0, 8));
        setFormData({
          name: '',
          email: '',
          phone: '',
          service: '',
          budget: '',
          message: ''
        });
      })
      .catch((error) => {
        alert('Sorry, there was an error submitting your message. Please try again.');
        console.error('Submission error:', error);
      });
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Visit Us',
      details: ['39 (A), 3rd Floor, Taung Wine Road', 'Near Mawlamyine University', 'Mawlamyine, Mon State, Myanmar'],
      color: 'text-[#004FED]'
    },
    {
      icon: Phone,
      title: 'Call Us',
      details: ['09740977946', '09740977947'],
      color: 'text-[#0066FF]'
    },
    {
      icon: Mail,
      title: 'Email Us',
      details: ['contact@upwardmm.com', 'sales@upwardmm.com'],
      color: 'text-[#004FED]'
    },
    {
      icon: Clock,
      title: 'Business Hours',
      details: ['Mon - Fri: 9:00 AM - 6:00 PM', 'Sat: 9:00 AM - 3:00 PM', 'Sun: Closed'],
      color: 'text-[#0066FF]'
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
  return (
    <section id="contact" className="py-32 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-24">
          <h2 className="text-5xl md:text-7xl font-black text-gray-900 mb-6">
            <EditableText
              id="contact-title-get"
              defaultContent="Get In"
              className="inline"
              tag="span"
            /> <span className="bg-gradient-to-r from-[#004FED] to-[#0066FF] bg-clip-text text-transparent">
              <EditableText
                id="contact-title-touch"
                defaultContent="Touch"
                className="inline"
                tag="span"
              />
            </span>
          </h2>
          <EditableText
            id="contact-description"
            defaultContent="Ready to accelerate your business wings? Let's start the conversation."
            className="text-2xl text-gray-600 max-w-4xl mx-auto font-light leading-relaxed"
            tag="p"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          {/* Contact Form */}
          <div className="bg-white rounded-3xl shadow-2xl p-10 border border-gray-100">
            <EditableText
              id="contact-form-title"
              defaultContent="Quick Contact"
              className="text-2xl font-bold text-gray-900 mb-6"
              tag="h3"
            />
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block font-semibold text-gray-700 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#004FED] focus:border-transparent transition-all duration-300"
                    placeholder="Your name"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block font-semibold text-gray-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#004FED] focus:border-transparent transition-all duration-300"
                    placeholder="your@email.com"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phone" className="block font-semibold text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#004FED] focus:border-transparent transition-all duration-300"
                    placeholder="+95 9 123 456 789"
                  />
                </div>
                <div>
                  <label htmlFor="service" className="block font-semibold text-gray-700 mb-2">
                    Service Interested
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#004FED] focus:border-transparent transition-all duration-300"
                  >
                    <option value="">Select a service</option>
                    {services.map((service) => (
                      <option key={service} value={service}>{service}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block font-semibold text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#004FED] focus:border-transparent transition-all duration-300 resize-none"
                  placeholder="Tell us about your project..."
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-[#004FED] to-[#0066FF] text-white px-8 py-4 rounded-xl text-lg font-bold hover:shadow-2xl hover:shadow-[#004FED]/30 transform hover:-translate-y-2 transition-all duration-400 flex items-center justify-center space-x-3"
              >
                <Send className="w-6 h-6" />
                <span>Send Message</span>
              </button>
              
              <div className="text-center">
                <EditableButton
                  id="contact-detailed-form-button"
                  defaultText="Need Detailed Quote? Use Full Contact Form"
                  defaultUrl="/contact"
                  defaultType="internal"
                  className="text-[#004FED] hover:text-[#0066FF] font-semibold transition-colors duration-300"
                />
              </div>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-10">
            {/* Contact Cards */}
            <div className="space-y-6">
              {contactInfo.slice(0, 2).map((info, index) => (
                <div key={index} className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl hover:shadow-[#004FED]/10 transition-all duration-500">
                  <div className="flex items-start space-x-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-[#004FED]/10 to-[#0066FF]/20 rounded-xl flex items-center justify-center flex-shrink-0">
                      <info.icon className={`w-8 h-8 ${info.color}`} />
                    </div>
                    <div>
                      <EditableText
                        id={`contact-info-title-${index}`}
                        defaultContent={info.title}
                        className="text-2xl font-bold text-gray-900 mb-3"
                        tag="h4"
                      />
                      {info.details.map((detail, detailIndex) => (
                        <EditableText
                          key={detailIndex}
                          id={`contact-info-detail-${index}-${detailIndex}`}
                          defaultContent={detail}
                          className="text-gray-600 leading-relaxed text-lg"
                          tag="p"
                        />
                      ))}
                    </div>
                  </div>
                </div>
              ))}
              
              {/* View More Contact Info */}
              <div className="text-center">
                <EditableButton
                  id="contact-view-more-button"
                  defaultText="View All Contact Information"
                  defaultUrl="/contact"
                  defaultType="internal"
                  className="text-[#004FED] hover:text-[#0066FF] font-semibold transition-colors duration-300"
                />
              </div>
            </div>

            {/* Social Media */}
            <div className="bg-gradient-to-r from-[#004FED] to-[#0066FF] rounded-2xl p-10 text-white">
              <EditableText
                id="contact-social-title"
                defaultContent="Follow Us"
                className="text-3xl font-bold mb-6"
                tag="h4"
              />
              <EditableText
                id="contact-social-description"
                defaultContent="Stay connected and get the latest updates on our projects and industry insights."
                className="text-blue-100 mb-8 text-lg"
                tag="p"
              />
              <div className="flex space-x-6">
                <a
                  href="#"
                  className="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center hover:bg-white/30 transition-all duration-300 hover:scale-110"
                >
                  <Facebook className="w-7 h-7" />
                </a>
                <a
                  href="#"
                  className="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center hover:bg-white/30 transition-all duration-300 hover:scale-110"
                >
                  <Instagram className="w-7 h-7" />
                </a>
                <a
                  href="#"
                  className="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center hover:bg-white/30 transition-all duration-300 hover:scale-110"
                >
                  <Linkedin className="w-7 h-7" />
                </a>
                <a
                  href="#"
                  className="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center hover:bg-white/30 transition-all duration-300 hover:scale-110"
                >
                  <MessageCircle className="w-7 h-7" />
                </a>
              </div>
            </div>

            {/* Quick Contact */}
            <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100">
              <EditableText
                id="contact-quick-title"
                defaultContent="Need Immediate Assistance?"
                className="text-2xl font-bold text-gray-900 mb-6"
                tag="h4"
              />
              <EditableText
                id="contact-quick-description"
                defaultContent="For urgent inquiries, call us directly or send a WhatsApp message."
                className="text-gray-600 mb-6 text-lg"
                tag="p"
              />
              <div className="flex space-x-6">
                <a
                  href="tel:09740977946"
                  className="flex-1 bg-[#004FED]/10 text-[#004FED] px-6 py-4 rounded-xl text-center font-bold hover:bg-[#004FED]/20 transition-all duration-300 text-lg block"
                >
                  <EditableText
                    id="contact-call-button"
                    defaultContent="Call Now"
                    className="block"
                    tag="span"
                  />
                </a>
                <a
                  href="https://wa.me/959740977946"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 bg-green-50 text-green-600 px-6 py-4 rounded-xl text-center font-bold hover:bg-green-100 transition-all duration-300 text-lg block"
                >
                  <EditableText
                    id="contact-whatsapp-button"
                    defaultContent="WhatsApp"
                    className="block"
                    tag="span"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;