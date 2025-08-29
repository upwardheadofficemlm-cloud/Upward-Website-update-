import React from 'react';
import EditableText from './cms/EditableText';
import EditableImage from './cms/EditableImage';
import EditableButton from './cms/EditableButton';
import { Link } from 'react-router-dom';
import { useMetaPixel } from './MetaPixel';
import { 
  ArrowUpRight, 
  MapPin, 
  Phone, 
  Mail, 
  Clock,
  Facebook,
  Instagram,
  Linkedin,
  MessageCircle,
  ArrowRight
} from 'lucide-react';

const Footer = () => {
  const { trackEvent } = useMetaPixel();

  const quickLinks = [
    { label: 'About Us', url: '/about', page: 'about' },
    { label: 'Our Services', url: '/services', page: 'services' },
    { label: 'Portfolio', url: '/portfolio', page: 'portfolio' },
    { label: 'Training Center', url: '/training-center', page: 'training-center' },
    { label: 'Contact Us', url: '/contact', page: 'contact' }
  ];

  const services = [
    { label: 'Brand Identity', url: '/brand-identity', page: 'brand-identity' },
    { label: 'Digital Marketing', url: '/digital-marketing', page: 'digital-marketing' },
    { label: 'Social Media', url: '/social-media', page: 'social-media' },
    { label: 'Web Development', url: '/web-development', page: 'web-development' },
    { label: 'Content Creation', url: '/content-creation', page: 'content-creation' },
    { label: 'SEO Services', url: '/seo-services', page: 'seo-services' }
  ];

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-64 h-64 bg-gradient-to-br from-[#004FED]/20 to-[#0066FF]/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-48 h-48 bg-gradient-to-br from-[#0066FF]/20 to-[#004FED]/20 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Company Info */}
            <div className="lg:col-span-1">
              <div className="flex items-center space-x-3 mb-8">
                <img 
                  src="/upward_logo_primary-blue.png" 
                  alt="Upward Logo" 
                  className="h-12 w-auto"
                />
              </div>
              
              <EditableText
                id="footer-description"
                defaultContent="Accelerating your business wings with innovative 360° marketing solutions. Mawlamyine's premier marketing agency since 2021."
                className="text-gray-300 leading-relaxed mb-8 text-lg"
                tag="p"
              />

              {/* Social Links */}
              <div className="flex space-x-4">
                <a
                  href="https://facebook.com/upwardmm"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center hover:bg-[#004FED]/20 hover:scale-110 transition-all duration-300"
                >
                  <Facebook className="w-6 h-6" />
                </a>
                <a
                  href="https://instagram.com/upwardmm"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center hover:bg-[#004FED]/20 hover:scale-110 transition-all duration-300"
                >
                  <Instagram className="w-6 h-6" />
                </a>
                <a
                  href="https://linkedin.com/company/upwardmm"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center hover:bg-[#004FED]/20 hover:scale-110 transition-all duration-300"
                >
                  <Linkedin className="w-6 h-6" />
                </a>
                <a
                  href="https://wa.me/959740977946"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center hover:bg-green-500/20 hover:scale-110 transition-all duration-300"
                >
                  <MessageCircle className="w-6 h-6" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <EditableText
                id="footer-quick-links-title"
                defaultContent="Quick Links"
                className="text-xl font-bold mb-8"
                tag="h3"
              />
              <ul className="space-y-4">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <EditableText
                      id={`footer-quick-link-${index}`}
                      defaultContent={link.label}
                      className="text-gray-300 hover:text-[#004FED] transition-colors duration-300 cursor-pointer flex items-center space-x-2 group"
                      tag="button"
                      isNavigable={true}
                      navigationUrl={link.url}
                      navigationType="internal"
                    />
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <EditableText
                id="footer-services-title"
                defaultContent="Our Services"
                className="text-xl font-bold mb-8"
                tag="h3"
              />
              <ul className="space-y-4">
                {services.map((service, index) => (
                  <li key={index}>
                    <EditableText
                      id={`footer-service-${index}`}
                      defaultContent={service.label}
                      className="text-gray-300 hover:text-[#004FED] transition-colors duration-300 cursor-pointer flex items-center space-x-2 group"
                      tag="button"
                      isNavigable={true}
                      navigationUrl={service.url}
                      navigationType="internal"
                    />
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <EditableText
                id="footer-contact-title"
                defaultContent="Get In Touch"
                className="text-xl font-bold mb-8"
                tag="h3"
              />
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center flex-shrink-0 mt-1">
                    <MapPin className="w-5 h-5 text-[#004FED]" />
                  </div>
                  <div>
                    <EditableText
                      id="footer-address"
                      defaultContent="39 (A), 3rd Floor, Taung Wine Road, Near Mawlamyine University, Mawlamyine, Mon State, Myanmar"
                      className="text-gray-300 leading-relaxed"
                      tag="p"
                    />
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-[#004FED]" />
                  </div>
                  <div>
                    <a href="tel:09740977946" className="text-gray-300 hover:text-[#004FED] transition-colors duration-300">
                      <EditableText
                        id="footer-phone-1"
                        defaultContent="09740977946"
                        className="block"
                        tag="span"
                      />
                    </a>
                    <a href="tel:09740977947" className="text-gray-300 hover:text-[#004FED] transition-colors duration-300">
                      <EditableText
                        id="footer-phone-2"
                        defaultContent="09740977947"
                        className="block"
                        tag="span"
                      />
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-[#004FED]" />
                  </div>
                  <div>
                    <a href="mailto:contact@upwardmm.com" className="text-gray-300 hover:text-[#004FED] transition-colors duration-300">
                      <EditableText
                        id="footer-email"
                        defaultContent="contact@upwardmm.com"
                        className="block"
                        tag="span"
                      />
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center flex-shrink-0 mt-1">
                    <Clock className="w-5 h-5 text-[#004FED]" />
                  </div>
                  <div>
                    <EditableText
                      id="footer-hours"
                      defaultContent="Mon - Fri: 9:00 AM - 6:00 PM<br>Sat: 9:00 AM - 3:00 PM<br>Sun: Closed"
                      className="text-gray-300 leading-relaxed"
                      tag="div"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
              <div className="flex items-center space-x-8">
                <EditableText
                  id="footer-copyright"
                  defaultContent="© 2024 Upward Marketing Agency. All rights reserved."
                  className="text-gray-400"
                  tag="p"
                />
                <EditableText
                  id="footer-founded"
                  defaultContent="Founded July 15, 2021"
                  className="text-gray-500 text-sm"
                  tag="span"
                />
              </div>
              
              <div className="flex items-center space-x-8">
                <Link
                  to="/privacy-policy"
                  className="text-gray-400 hover:text-[#004FED] transition-colors duration-300"
                  onClick={() => trackEvent('ViewContent', {
                    content_name: 'Privacy Policy',
                    content_category: 'Legal',
                    value: 1,
                    currency: 'USD'
                  })}
                >
                  Privacy Policy
                </Link>
                <Link
                  to="/terms-of-service"
                  className="text-gray-400 hover:text-[#004FED] transition-colors duration-300"
                  onClick={() => trackEvent('ViewContent', {
                    content_name: 'Terms of Service',
                    content_category: 'Legal',
                    value: 1,
                    currency: 'USD'
                  })}
                >
                  Terms of Service
                </Link>

              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;