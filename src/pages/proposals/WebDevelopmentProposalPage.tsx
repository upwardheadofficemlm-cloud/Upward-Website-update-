import React from 'react';
import { useParams } from 'react-router-dom';
import EditableText from '../../components/cms/EditableText';
import EditableSection from '../../components/cms/EditableSection';

const WebDevelopmentProposalPage: React.FC = () => {
  const { proposalId } = useParams<{ proposalId: string }>();
  const id = proposalId || 'default';

  return (
    <div className="min-h-screen pt-24 pb-24 bg-gradient-to-br from-[#004FED]/5 via-white to-[#0066FF]/10">
      {/* Hero Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <EditableText
            id={`web-development-${id}-hero-title`}
            defaultContent="Web Development Proposal"
            className="text-5xl md:text-6xl font-black text-gray-900 mb-6"
            tag="h1"
          />
          <EditableText
            id={`web-development-${id}-hero-subtitle`}
            defaultContent="Upward Marketing Agency"
            className="text-2xl text-[#004FED] font-semibold mb-4"
            tag="h2"
          />
          <EditableText
            id={`web-development-${id}-proposal-id`}
            defaultContent={`Proposal ID: ${id}`}
            className="text-lg text-gray-600"
            tag="p"
          />
        </div>
      </section>

      {/* Proposal Content */}
      <EditableSection
        id={`web-development-${id}-content`}
        className="py-16"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl shadow-2xl border border-gray-100 p-12">
            
            {/* Executive Summary */}
            <div className="mb-12">
              <EditableText
                id={`web-development-${id}-executive-title`}
                defaultContent="Executive Summary"
                className="text-3xl font-bold text-gray-900 mb-6"
                tag="h2"
              />
              <EditableText
                id={`web-development-${id}-executive-content`}
                defaultContent="This comprehensive web development proposal outlines our approach to creating a modern, responsive, and high-performing website that will serve as your digital foundation and drive business growth."
                className="text-lg text-gray-700 leading-relaxed"
                tag="p"
              />
            </div>

            {/* Web Development Services */}
            <div className="mb-12">
              <EditableText
                id={`web-development-${id}-services-title`}
                defaultContent="Web Development Services"
                className="text-3xl font-bold text-gray-900 mb-6"
                tag="h2"
              />
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gradient-to-r from-[#004FED]/10 to-[#0066FF]/10 rounded-xl p-6">
                  <EditableText
                    id={`web-development-${id}-design-title`}
                    defaultContent="Custom Website Design"
                    className="text-xl font-semibold text-gray-900 mb-3"
                    tag="h3"
                  />
                  <EditableText
                    id={`web-development-${id}-design-desc`}
                    defaultContent="Modern, responsive design that works perfectly on all devices and reflects your brand identity."
                    className="text-gray-700"
                    tag="p"
                  />
                </div>
                <div className="bg-gradient-to-r from-[#004FED]/10 to-[#0066FF]/10 rounded-xl p-6">
                  <EditableText
                    id={`web-development-${id}-frontend-title`}
                    defaultContent="Frontend Development"
                    className="text-xl font-semibold text-gray-900 mb-3"
                    tag="h3"
                  />
                  <EditableText
                    id={`web-development-${id}-frontend-desc`}
                    defaultContent="React.js, Next.js, and modern JavaScript frameworks for fast, interactive user experiences."
                    className="text-gray-700"
                    tag="p"
                  />
                </div>
                <div className="bg-gradient-to-r from-[#004FED]/10 to-[#0066FF]/10 rounded-xl p-6">
                  <EditableText
                    id={`web-development-${id}-backend-title`}
                    defaultContent="Backend Development"
                    className="text-xl font-semibold text-gray-900 mb-3"
                    tag="h3"
                  />
                  <EditableText
                    id={`web-development-${id}-backend-desc`}
                    defaultContent="Robust backend systems with Node.js, databases, and API development for scalable solutions."
                    className="text-gray-700"
                    tag="p"
                  />
                </div>
                <div className="bg-gradient-to-r from-[#004FED]/10 to-[#0066FF]/10 rounded-xl p-6">
                  <EditableText
                    id={`web-development-${id}-ecommerce-title`}
                    defaultContent="E-commerce Integration"
                    className="text-xl font-semibold text-gray-900 mb-3"
                    tag="h3"
                  />
                  <EditableText
                    id={`web-development-${id}-ecommerce-desc`}
                    defaultContent="Secure payment gateways, inventory management, and shopping cart functionality."
                    className="text-gray-700"
                    tag="p"
                  />
                </div>
              </div>
            </div>

            {/* Technical Specifications */}
            <div className="mb-12">
              <EditableText
                id={`web-development-${id}-tech-title`}
                defaultContent="Technical Specifications"
                className="text-3xl font-bold text-gray-900 mb-6"
                tag="h2"
              />
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="bg-[#004FED] text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-2xl font-bold">⚡</div>
                  <EditableText
                    id={`web-development-${id}-performance`}
                    defaultContent="Lightning Fast Performance"
                    className="text-lg font-semibold text-gray-900"
                    tag="h3"
                  />
                  <EditableText
                    id={`web-development-${id}-performance-desc`}
                    defaultContent="Optimized for speed with 90+ PageSpeed scores"
                    className="text-gray-700 text-sm"
                    tag="p"
                  />
                </div>
                <div className="text-center">
                  <div className="bg-[#004FED] text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-2xl font-bold">🔒</div>
                  <EditableText
                    id={`web-development-${id}-security`}
                    defaultContent="Enterprise Security"
                    className="text-lg font-semibold text-gray-900"
                    tag="h3"
                  />
                  <EditableText
                    id={`web-development-${id}-security-desc`}
                    defaultContent="SSL certificates, secure coding practices"
                    className="text-gray-700 text-sm"
                    tag="p"
                  />
                </div>
                <div className="text-center">
                  <div className="bg-[#004FED] text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-2xl font-bold">📱</div>
                  <EditableText
                    id={`web-development-${id}-responsive`}
                    defaultContent="Mobile-First Design"
                    className="text-lg font-semibold text-gray-900"
                    tag="h3"
                  />
                  <EditableText
                    id={`web-development-${id}-responsive-desc`}
                    defaultContent="Perfect on all devices and screen sizes"
                    className="text-gray-700 text-sm"
                    tag="p"
                  />
                </div>
              </div>
            </div>

            {/* Development Process */}
            <div className="mb-12">
              <EditableText
                id={`web-development-${id}-process-title`}
                defaultContent="Development Process"
                className="text-3xl font-bold text-gray-900 mb-6"
                tag="h2"
              />
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-[#004FED] text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">1</div>
                  <div>
                    <EditableText
                      id={`web-development-${id}-discovery-title`}
                      defaultContent="Discovery & Planning (Week 1-2)"
                      className="text-xl font-semibold text-gray-900 mb-2"
                      tag="h3"
                    />
                    <EditableText
                      id={`web-development-${id}-discovery-desc`}
                      defaultContent="Requirements gathering, wireframing, and project planning with detailed specifications."
                      className="text-gray-700"
                      tag="p"
                    />
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-[#004FED] text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">2</div>
                  <div>
                    <EditableText
                      id={`web-development-${id}-design-phase-title`}
                      defaultContent="Design Phase (Week 3-4)"
                      className="text-xl font-semibold text-gray-900 mb-2"
                      tag="h3"
                    />
                    <EditableText
                      id={`web-development-${id}-design-phase-desc`}
                      defaultContent="UI/UX design, mockups, and design approval process with unlimited revisions."
                      className="text-gray-700"
                      tag="p"
                    />
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-[#004FED] text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">3</div>
                  <div>
                    <EditableText
                      id={`web-development-${id}-development-title`}
                      defaultContent="Development (Week 5-10)"
                      className="text-xl font-semibold text-gray-900 mb-2"
                      tag="h3"
                    />
                    <EditableText
                      id={`web-development-${id}-development-desc`}
                      defaultContent="Frontend and backend development with regular progress updates and testing."
                      className="text-gray-700"
                      tag="p"
                    />
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-[#004FED] text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">4</div>
                  <div>
                    <EditableText
                      id={`web-development-${id}-testing-title`}
                      defaultContent="Testing & Launch (Week 11-12)"
                      className="text-xl font-semibold text-gray-900 mb-2"
                      tag="h3"
                    />
                    <EditableText
                      id={`web-development-${id}-testing-desc`}
                      defaultContent="Comprehensive testing, bug fixes, and deployment to production with training."
                      className="text-gray-700"
                      tag="p"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Deliverables */}
            <div className="mb-12">
              <EditableText
                id={`web-development-${id}-deliverables-title`}
                defaultContent="What You'll Receive"
                className="text-3xl font-bold text-gray-900 mb-6"
                tag="h2"
              />
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="bg-green-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm">✓</div>
                    <EditableText
                      id={`web-development-${id}-deliverable-1`}
                      defaultContent="Fully responsive website"
                      className="text-gray-700"
                      tag="span"
                    />
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="bg-green-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm">✓</div>
                    <EditableText
                      id={`web-development-${id}-deliverable-2`}
                      defaultContent="Content Management System"
                      className="text-gray-700"
                      tag="span"
                    />
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="bg-green-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm">✓</div>
                    <EditableText
                      id={`web-development-${id}-deliverable-3`}
                      defaultContent="SEO optimization"
                      className="text-gray-700"
                      tag="span"
                    />
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="bg-green-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm">✓</div>
                    <EditableText
                      id={`web-development-${id}-deliverable-4`}
                      defaultContent="Analytics integration"
                      className="text-gray-700"
                      tag="span"
                    />
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="bg-green-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm">✓</div>
                    <EditableText
                      id={`web-development-${id}-deliverable-5`}
                      defaultContent="Training and documentation"
                      className="text-gray-700"
                      tag="span"
                    />
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="bg-green-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm">✓</div>
                    <EditableText
                      id={`web-development-${id}-deliverable-6`}
                      defaultContent="3 months of support"
                      className="text-gray-700"
                      tag="span"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Investment */}
            <div className="mb-12">
              <EditableText
                id={`web-development-${id}-investment-title`}
                defaultContent="Investment"
                className="text-3xl font-bold text-gray-900 mb-6"
                tag="h2"
              />
              <div className="bg-gradient-to-r from-[#004FED]/20 to-[#0066FF]/20 rounded-xl p-8">
                <EditableText
                  id={`web-development-${id}-investment-amount`}
                  defaultContent="Project Investment: $8,000 - $25,000"
                  className="text-3xl font-bold text-gray-900 mb-4 text-center"
                  tag="h3"
                />
                <EditableText
                  id={`web-development-${id}-investment-details`}
                  defaultContent="Payment terms: 40% upfront, 30% at design approval, 30% upon completion. Includes hosting setup and 3 months of support."
                  className="text-lg text-gray-700 text-center"
                  tag="p"
                />
              </div>
            </div>

            {/* Contact Information */}
            <div className="text-center pt-8 border-t border-gray-200">
              <EditableText
                id={`web-development-${id}-contact-title`}
                defaultContent="Ready to Build Your Digital Presence?"
                className="text-2xl font-bold text-gray-900 mb-4"
                tag="h3"
              />
              <EditableText
                id={`web-development-${id}-contact-info`}
                defaultContent="Contact us at contact@upwardmm.com or call +95-9740977946 to discuss this web development proposal."
                className="text-lg text-gray-700"
                tag="p"
              />
            </div>
          </div>
        </div>
      </EditableSection>
    </div>
  );
};

export default WebDevelopmentProposalPage;
