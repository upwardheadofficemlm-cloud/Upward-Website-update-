import React from 'react';
import { useParams } from 'react-router-dom';
import EditableText from '../../components/cms/EditableText';
import EditableSection from '../../components/cms/EditableSection';

const SEOServicesProposalPage: React.FC = () => {
  const { proposalId } = useParams<{ proposalId: string }>();
  const id = proposalId || 'default';

  return (
    <div className="min-h-screen pt-24 pb-24 bg-gradient-to-br from-[#004FED]/5 via-white to-[#0066FF]/10">
      {/* Hero Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <EditableText
            id={`seo-services-${id}-hero-title`}
            defaultContent="SEO Services Proposal"
            className="text-5xl md:text-6xl font-black text-gray-900 mb-6"
            tag="h1"
          />
          <EditableText
            id={`seo-services-${id}-hero-subtitle`}
            defaultContent="Upward Marketing Agency"
            className="text-2xl text-[#004FED] font-semibold mb-4"
            tag="h2"
          />
          <EditableText
            id={`seo-services-${id}-proposal-id`}
            defaultContent={`Proposal ID: ${id}`}
            className="text-lg text-gray-600"
            tag="p"
          />
        </div>
      </section>

      {/* Proposal Content */}
      <EditableSection
        id={`seo-services-${id}-content`}
        className="py-16"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl shadow-2xl border border-gray-100 p-12">
            
            {/* Executive Summary */}
            <div className="mb-12">
              <EditableText
                id={`seo-services-${id}-executive-title`}
                defaultContent="Executive Summary"
                className="text-3xl font-bold text-gray-900 mb-6"
                tag="h2"
              />
              <EditableText
                id={`seo-services-${id}-executive-content`}
                defaultContent="This comprehensive SEO services proposal outlines our strategic approach to improving your search engine rankings, increasing organic traffic, and driving sustainable growth through proven search engine optimization techniques."
                className="text-lg text-gray-700 leading-relaxed"
                tag="p"
              />
            </div>

            {/* SEO Services */}
            <div className="mb-12">
              <EditableText
                id={`seo-services-${id}-services-title`}
                defaultContent="SEO Services"
                className="text-3xl font-bold text-gray-900 mb-6"
                tag="h2"
              />
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gradient-to-r from-[#004FED]/10 to-[#0066FF]/10 rounded-xl p-6">
                  <EditableText
                    id={`seo-services-${id}-onpage-title`}
                    defaultContent="On-Page SEO"
                    className="text-xl font-semibold text-gray-900 mb-3"
                    tag="h3"
                  />
                  <EditableText
                    id={`seo-services-${id}-onpage-desc`}
                    defaultContent="Website optimization including meta tags, content optimization, internal linking, and technical SEO improvements."
                    className="text-gray-700"
                    tag="p"
                  />
                </div>
                <div className="bg-gradient-to-r from-[#004FED]/10 to-[#0066FF]/10 rounded-xl p-6">
                  <EditableText
                    id={`seo-services-${id}-offpage-title`}
                    defaultContent="Off-Page SEO"
                    className="text-xl font-semibold text-gray-900 mb-3"
                    tag="h3"
                  />
                  <EditableText
                    id={`seo-services-${id}-offpage-desc`}
                    defaultContent="Link building, local SEO, social signals, and reputation management to build domain authority."
                    className="text-gray-700"
                    tag="p"
                  />
                </div>
                <div className="bg-gradient-to-r from-[#004FED]/10 to-[#0066FF]/10 rounded-xl p-6">
                  <EditableText
                    id={`seo-services-${id}-technical-title`}
                    defaultContent="Technical SEO"
                    className="text-xl font-semibold text-gray-900 mb-3"
                    tag="h3"
                  />
                  <EditableText
                    id={`seo-services-${id}-technical-desc`}
                    defaultContent="Site speed optimization, mobile responsiveness, schema markup, and technical audit implementation."
                    className="text-gray-700"
                    tag="p"
                  />
                </div>
                <div className="bg-gradient-to-r from-[#004FED]/10 to-[#0066FF]/10 rounded-xl p-6">
                  <EditableText
                    id={`seo-services-${id}-local-title`}
                    defaultContent="Local SEO"
                    className="text-xl font-semibold text-gray-900 mb-3"
                    tag="h3"
                  />
                  <EditableText
                    id={`seo-services-${id}-local-desc`}
                    defaultContent="Google My Business optimization, local citations, and location-based keyword targeting."
                    className="text-gray-700"
                    tag="p"
                  />
                </div>
              </div>
            </div>

            {/* SEO Process */}
            <div className="mb-12">
              <EditableText
                id={`seo-services-${id}-process-title`}
                defaultContent="SEO Optimization Process"
                className="text-3xl font-bold text-gray-900 mb-6"
                tag="h2"
              />
              <div className="grid md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="bg-[#004FED] text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-2xl font-bold">🔍</div>
                  <EditableText
                    id={`seo-services-${id}-audit`}
                    defaultContent="SEO Audit"
                    className="text-lg font-semibold text-gray-900"
                    tag="h3"
                  />
                  <EditableText
                    id={`seo-services-${id}-audit-desc`}
                    defaultContent="Comprehensive website analysis and keyword research"
                    className="text-gray-700 text-sm"
                    tag="p"
                  />
                </div>
                <div className="text-center">
                  <div className="bg-[#004FED] text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-2xl font-bold">⚙️</div>
                  <EditableText
                    id={`seo-services-${id}-optimization`}
                    defaultContent="Optimization"
                    className="text-lg font-semibold text-gray-900"
                    tag="h3"
                  />
                  <EditableText
                    id={`seo-services-${id}-optimization-desc`}
                    defaultContent="On-page and technical SEO improvements"
                    className="text-gray-700 text-sm"
                    tag="p"
                  />
                </div>
                <div className="text-center">
                  <div className="bg-[#004FED] text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-2xl font-bold">📈</div>
                  <EditableText
                    id={`seo-services-${id}-monitoring`}
                    defaultContent="Monitoring"
                    className="text-lg font-semibold text-gray-900"
                    tag="h3"
                  />
                  <EditableText
                    id={`seo-services-${id}-monitoring-desc`}
                    defaultContent="Performance tracking and analytics"
                    className="text-gray-700 text-sm"
                    tag="p"
                  />
                </div>
                <div className="text-center">
                  <div className="bg-[#004FED] text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-2xl font-bold">🔄</div>
                  <EditableText
                    id={`seo-services-${id}-refinement`}
                    defaultContent="Refinement"
                    className="text-lg font-semibold text-gray-900"
                    tag="h3"
                  />
                  <EditableText
                    id={`seo-services-${id}-refinement-desc`}
                    defaultContent="Continuous optimization and improvements"
                    className="text-gray-700 text-sm"
                    tag="p"
                  />
                </div>
              </div>
            </div>

            {/* Expected Results */}
            <div className="mb-12">
              <EditableText
                id={`seo-services-${id}-results-title`}
                defaultContent="Expected Results"
                className="text-3xl font-bold text-gray-900 mb-6"
                tag="h2"
              />
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="bg-[#004FED] text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-2xl font-bold">+200%</div>
                  <EditableText
                    id={`seo-services-${id}-organic-traffic`}
                    defaultContent="Organic Traffic"
                    className="text-lg font-semibold text-gray-900"
                    tag="h3"
                  />
                </div>
                <div className="text-center">
                  <div className="bg-[#004FED] text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-2xl font-bold">+150%</div>
                  <EditableText
                    id={`seo-services-${id}-keyword-rankings`}
                    defaultContent="Keyword Rankings"
                    className="text-lg font-semibold text-gray-900"
                    tag="h3"
                  />
                </div>
                <div className="text-center">
                  <div className="bg-[#004FED] text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-2xl font-bold">+300%</div>
                  <EditableText
                    id={`seo-services-${id}-conversions`}
                    defaultContent="Conversions"
                    className="text-lg font-semibold text-gray-900"
                    tag="h3"
                  />
                </div>
              </div>
            </div>

            {/* Monthly Deliverables */}
            <div className="mb-12">
              <EditableText
                id={`seo-services-${id}-deliverables-title`}
                defaultContent="Monthly Deliverables"
                className="text-3xl font-bold text-gray-900 mb-6"
                tag="h2"
              />
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="bg-[#004FED] text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">✓</div>
                    <EditableText
                      id={`seo-services-${id}-deliverable-1`}
                      defaultContent="SEO audit and recommendations"
                      className="text-gray-700"
                      tag="span"
                    />
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="bg-[#004FED] text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">✓</div>
                    <EditableText
                      id={`seo-services-${id}-deliverable-2`}
                      defaultContent="Keyword research and optimization"
                      className="text-gray-700"
                      tag="span"
                    />
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="bg-[#004FED] text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">✓</div>
                    <EditableText
                      id={`seo-services-${id}-deliverable-3`}
                      defaultContent="Content optimization"
                      className="text-gray-700"
                      tag="span"
                    />
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="bg-[#004FED] text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">✓</div>
                    <EditableText
                      id={`seo-services-${id}-deliverable-4`}
                      defaultContent="Technical SEO improvements"
                      className="text-gray-700"
                      tag="span"
                    />
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="bg-[#004FED] text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">✓</div>
                    <EditableText
                      id={`seo-services-${id}-deliverable-5`}
                      defaultContent="Monthly performance reports"
                      className="text-gray-700"
                      tag="span"
                    />
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="bg-[#004FED] text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">✓</div>
                    <EditableText
                      id={`seo-services-${id}-deliverable-6`}
                      defaultContent="Link building campaigns"
                      className="text-gray-700"
                      tag="span"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Timeline */}
            <div className="mb-12">
              <EditableText
                id={`seo-services-${id}-timeline-title`}
                defaultContent="SEO Project Timeline"
                className="text-3xl font-bold text-gray-900 mb-6"
                tag="h2"
              />
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-[#004FED] text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">1</div>
                  <div>
                    <EditableText
                      id={`seo-services-${id}-audit-phase-title`}
                      defaultContent="SEO Audit & Research (Week 1-2)"
                      className="text-xl font-semibold text-gray-900 mb-2"
                      tag="h3"
                    />
                    <EditableText
                      id={`seo-services-${id}-audit-phase-desc`}
                      defaultContent="Comprehensive website audit, competitor analysis, and keyword research."
                      className="text-gray-700"
                      tag="p"
                    />
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-[#004FED] text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">2</div>
                  <div>
                    <EditableText
                      id={`seo-services-${id}-optimization-phase-title`}
                      defaultContent="On-Page Optimization (Week 3-6)"
                      className="text-xl font-semibold text-gray-900 mb-2"
                      tag="h3"
                    />
                    <EditableText
                      id={`seo-services-${id}-optimization-phase-desc`}
                      defaultContent="Meta tags optimization, content improvements, and technical SEO fixes."
                      className="text-gray-700"
                      tag="p"
                    />
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-[#004FED] text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">3</div>
                  <div>
                    <EditableText
                      id={`seo-services-${id}-ongoing-phase-title`}
                      defaultContent="Ongoing Optimization (Month 2+)"
                      className="text-xl font-semibold text-gray-900 mb-2"
                      tag="h3"
                    />
                    <EditableText
                      id={`seo-services-${id}-ongoing-phase-desc`}
                      defaultContent="Continuous monitoring, content updates, and link building campaigns."
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
                id={`seo-services-${id}-investment-title`}
                defaultContent="Investment"
                className="text-3xl font-bold text-gray-900 mb-6"
                tag="h2"
              />
              <div className="bg-gradient-to-r from-[#004FED]/20 to-[#0066FF]/20 rounded-xl p-8">
                <EditableText
                  id={`seo-services-${id}-investment-amount`}
                  defaultContent="Monthly Investment: $1,000 - $3,000"
                  className="text-3xl font-bold text-gray-900 mb-4 text-center"
                  tag="h3"
                />
                <EditableText
                  id={`seo-services-${id}-investment-details`}
                  defaultContent="Includes comprehensive SEO services, monthly reporting, and ongoing optimization. Minimum 6-month commitment for optimal results."
                  className="text-lg text-gray-700 text-center"
                  tag="p"
                />
              </div>
            </div>

            {/* Contact Information */}
            <div className="text-center pt-8 border-t border-gray-200">
              <EditableText
                id={`seo-services-${id}-contact-title`}
                defaultContent="Ready to Dominate Search Results?"
                className="text-2xl font-bold text-gray-900 mb-4"
                tag="h3"
              />
              <EditableText
                id={`seo-services-${id}-contact-info`}
                defaultContent="Contact us at contact@upwardmm.com or call +95-9740977946 to discuss this SEO services proposal."
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

export default SEOServicesProposalPage;
