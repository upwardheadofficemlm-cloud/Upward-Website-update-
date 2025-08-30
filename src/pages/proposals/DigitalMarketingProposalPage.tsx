import React from 'react';
import { useParams } from 'react-router-dom';
import ProposalPage from './ProposalPage';
import EditableText from '../../components/cms/EditableText';
import EditableSection from '../../components/cms/EditableSection';

const DigitalMarketingProposalPage: React.FC = () => {
  const { proposalId } = useParams<{ proposalId: string }>();
  const id = proposalId || 'default';

  return (
    <div className="min-h-screen pt-24 pb-24 bg-gradient-to-br from-[#004FED]/5 via-white to-[#0066FF]/10">
      {/* Hero Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <EditableText
            id={`digital-marketing-${id}-hero-title`}
            defaultContent="Digital Marketing Proposal"
            className="text-5xl md:text-6xl font-black text-gray-900 mb-6"
            tag="h1"
          />
          <EditableText
            id={`digital-marketing-${id}-hero-subtitle`}
            defaultContent="Upward Marketing Agency"
            className="text-2xl text-[#004FED] font-semibold mb-4"
            tag="h2"
          />
          <EditableText
            id={`digital-marketing-${id}-proposal-id`}
            defaultContent={`Proposal ID: ${id}`}
            className="text-lg text-gray-600"
            tag="p"
          />
        </div>
      </section>

      {/* Proposal Content */}
      <EditableSection
        id={`digital-marketing-${id}-content`}
        className="py-16"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl shadow-2xl border border-gray-100 p-12">
            
            {/* Executive Summary */}
            <div className="mb-12">
              <EditableText
                id={`digital-marketing-${id}-executive-title`}
                defaultContent="Executive Summary"
                className="text-3xl font-bold text-gray-900 mb-6"
                tag="h2"
              />
              <EditableText
                id={`digital-marketing-${id}-executive-content`}
                defaultContent="This comprehensive digital marketing proposal outlines our strategic approach to increase your online presence, drive qualified traffic, and generate measurable ROI through targeted digital campaigns."
                className="text-lg text-gray-700 leading-relaxed"
                tag="p"
              />
            </div>

            {/* Digital Marketing Services */}
            <div className="mb-12">
              <EditableText
                id={`digital-marketing-${id}-services-title`}
                defaultContent="Digital Marketing Services"
                className="text-3xl font-bold text-gray-900 mb-6"
                tag="h2"
              />
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gradient-to-r from-[#004FED]/10 to-[#0066FF]/10 rounded-xl p-6">
                  <EditableText
                    id={`digital-marketing-${id}-seo-title`}
                    defaultContent="Search Engine Optimization (SEO)"
                    className="text-xl font-semibold text-gray-900 mb-3"
                    tag="h3"
                  />
                  <EditableText
                    id={`digital-marketing-${id}-seo-desc`}
                    defaultContent="On-page and off-page SEO optimization to improve search rankings and organic traffic."
                    className="text-gray-700"
                    tag="p"
                  />
                </div>
                <div className="bg-gradient-to-r from-[#004FED]/10 to-[#0066FF]/10 rounded-xl p-6">
                  <EditableText
                    id={`digital-marketing-${id}-ppc-title`}
                    defaultContent="Pay-Per-Click (PPC) Advertising"
                    className="text-xl font-semibold text-gray-900 mb-3"
                    tag="h3"
                  />
                  <EditableText
                    id={`digital-marketing-${id}-ppc-desc`}
                    defaultContent="Google Ads, Facebook Ads, and other PPC campaigns for immediate traffic and conversions."
                    className="text-gray-700"
                    tag="p"
                  />
                </div>
                <div className="bg-gradient-to-r from-[#004FED]/10 to-[#0066FF]/10 rounded-xl p-6">
                  <EditableText
                    id={`digital-marketing-${id}-social-title`}
                    defaultContent="Social Media Marketing"
                    className="text-xl font-semibold text-gray-900 mb-3"
                    tag="h3"
                  />
                  <EditableText
                    id={`digital-marketing-${id}-social-desc`}
                    defaultContent="Strategic social media campaigns across Facebook, Instagram, LinkedIn, and other platforms."
                    className="text-gray-700"
                    tag="p"
                  />
                </div>
                <div className="bg-gradient-to-r from-[#004FED]/10 to-[#0066FF]/10 rounded-xl p-6">
                  <EditableText
                    id={`digital-marketing-${id}-content-title`}
                    defaultContent="Content Marketing"
                    className="text-xl font-semibold text-gray-900 mb-3"
                    tag="h3"
                  />
                  <EditableText
                    id={`digital-marketing-${id}-content-desc`}
                    defaultContent="Blog posts, videos, infographics, and other content to engage and convert your audience."
                    className="text-gray-700"
                    tag="p"
                  />
                </div>
              </div>
            </div>

            {/* Expected Results */}
            <div className="mb-12">
              <EditableText
                id={`digital-marketing-${id}-results-title`}
                defaultContent="Expected Results"
                className="text-3xl font-bold text-gray-900 mb-6"
                tag="h2"
              />
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="bg-[#004FED] text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-2xl font-bold">+150%</div>
                  <EditableText
                    id={`digital-marketing-${id}-traffic-increase`}
                    defaultContent="Increase in Organic Traffic"
                    className="text-lg font-semibold text-gray-900"
                    tag="h3"
                  />
                </div>
                <div className="text-center">
                  <div className="bg-[#004FED] text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-2xl font-bold">+200%</div>
                  <EditableText
                    id={`digital-marketing-${id}-conversion-increase`}
                    defaultContent="Improvement in Conversion Rate"
                    className="text-lg font-semibold text-gray-900"
                    tag="h3"
                  />
                </div>
                <div className="text-center">
                  <div className="bg-[#004FED] text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-2xl font-bold">+300%</div>
                  <EditableText
                    id={`digital-marketing-${id}-roi-increase`}
                    defaultContent="ROI Improvement"
                    className="text-lg font-semibold text-gray-900"
                    tag="h3"
                  />
                </div>
              </div>
            </div>

            {/* Timeline */}
            <div className="mb-12">
              <EditableText
                id={`digital-marketing-${id}-timeline-title`}
                defaultContent="Project Timeline"
                className="text-3xl font-bold text-gray-900 mb-6"
                tag="h2"
              />
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-[#004FED] text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">1</div>
                  <div>
                    <EditableText
                      id={`digital-marketing-${id}-phase-1-title`}
                      defaultContent="Audit & Strategy (Week 1-2)"
                      className="text-xl font-semibold text-gray-900 mb-2"
                      tag="h3"
                    />
                    <EditableText
                      id={`digital-marketing-${id}-phase-1-desc`}
                      defaultContent="Website audit, competitor analysis, keyword research, and strategy development."
                      className="text-gray-700"
                      tag="p"
                    />
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-[#004FED] text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">2</div>
                  <div>
                    <EditableText
                      id={`digital-marketing-${id}-phase-2-title`}
                      defaultContent="Implementation (Week 3-6)"
                      className="text-xl font-semibold text-gray-900 mb-2"
                      tag="h3"
                    />
                    <EditableText
                      id={`digital-marketing-${id}-phase-2-desc`}
                      defaultContent="SEO optimization, PPC campaign setup, content creation, and social media management."
                      className="text-gray-700"
                      tag="p"
                    />
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-[#004FED] text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">3</div>
                  <div>
                    <EditableText
                      id={`digital-marketing-${id}-phase-3-title`}
                      defaultContent="Optimization & Growth (Ongoing)"
                      className="text-xl font-semibold text-gray-900 mb-2"
                      tag="h3"
                    />
                    <EditableText
                      id={`digital-marketing-${id}-phase-3-desc`}
                      defaultContent="Continuous monitoring, optimization, and scaling of successful campaigns."
                      className="text-gray-700"
                      tag="p"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Investment */}
            <div className="mb-12">
              <EditableText
                id={`digital-marketing-${id}-investment-title`}
                defaultContent="Investment"
                className="text-3xl font-bold text-gray-900 mb-6"
                tag="h2"
              />
              <div className="bg-gradient-to-r from-[#004FED]/20 to-[#0066FF]/20 rounded-xl p-8">
                <EditableText
                  id={`digital-marketing-${id}-investment-amount`}
                  defaultContent="Monthly Investment: $2,500 - $5,000"
                  className="text-3xl font-bold text-gray-900 mb-4 text-center"
                  tag="h3"
                />
                <EditableText
                  id={`digital-marketing-${id}-investment-details`}
                  defaultContent="Includes all digital marketing services, ad spend management, and monthly reporting. Minimum 3-month commitment recommended for optimal results."
                  className="text-lg text-gray-700 text-center"
                  tag="p"
                />
              </div>
            </div>

            {/* Contact Information */}
            <div className="text-center pt-8 border-t border-gray-200">
              <EditableText
                id={`digital-marketing-${id}-contact-title`}
                defaultContent="Ready to Accelerate Your Digital Growth?"
                className="text-2xl font-bold text-gray-900 mb-4"
                tag="h3"
              />
              <EditableText
                id={`digital-marketing-${id}-contact-info`}
                defaultContent="Contact us at contact@upwardmm.com or call +95-9740977946 to discuss this digital marketing proposal."
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

export default DigitalMarketingProposalPage;



