import React from 'react';
import { useParams } from 'react-router-dom';
import EditableText from '../../components/cms/EditableText';
import EditableSection from '../../components/cms/EditableSection';

const ContentCreationProposalPage: React.FC = () => {
  const { proposalId } = useParams<{ proposalId: string }>();
  const id = proposalId || 'default';

  return (
    <div className="min-h-screen pt-24 pb-24 bg-gradient-to-br from-[#004FED]/5 via-white to-[#0066FF]/10">
      {/* Hero Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <EditableText
            id={`content-creation-${id}-hero-title`}
            defaultContent="Content Creation Proposal"
            className="text-5xl md:text-6xl font-black text-gray-900 mb-6"
            tag="h1"
          />
          <EditableText
            id={`content-creation-${id}-hero-subtitle`}
            defaultContent="Upward Marketing Agency"
            className="text-2xl text-[#004FED] font-semibold mb-4"
            tag="h2"
          />
          <EditableText
            id={`content-creation-${id}-proposal-id`}
            defaultContent={`Proposal ID: ${id}`}
            className="text-lg text-gray-600"
            tag="p"
          />
        </div>
      </section>

      {/* Proposal Content */}
      <EditableSection
        id={`content-creation-${id}-content`}
        className="py-16"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl shadow-2xl border border-gray-100 p-12">
            
            {/* Executive Summary */}
            <div className="mb-12">
              <EditableText
                id={`content-creation-${id}-executive-title`}
                defaultContent="Executive Summary"
                className="text-3xl font-bold text-gray-900 mb-6"
                tag="h2"
              />
              <EditableText
                id={`content-creation-${id}-executive-content`}
                defaultContent="This comprehensive content creation proposal outlines our strategic approach to producing high-quality, engaging content that tells your story, connects with your audience, and drives meaningful results across all marketing channels."
                className="text-lg text-gray-700 leading-relaxed"
                tag="p"
              />
            </div>

            {/* Content Creation Services */}
            <div className="mb-12">
              <EditableText
                id={`content-creation-${id}-services-title`}
                defaultContent="Content Creation Services"
                className="text-3xl font-bold text-gray-900 mb-6"
                tag="h2"
              />
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gradient-to-r from-[#004FED]/10 to-[#0066FF]/10 rounded-xl p-6">
                  <EditableText
                    id={`content-creation-${id}-video-title`}
                    defaultContent="Video Production"
                    className="text-xl font-semibold text-gray-900 mb-3"
                    tag="h3"
                  />
                  <EditableText
                    id={`content-creation-${id}-video-desc`}
                    defaultContent="Professional video content including commercials, product videos, testimonials, and social media videos."
                    className="text-gray-700"
                    tag="p"
                  />
                </div>
                <div className="bg-gradient-to-r from-[#004FED]/10 to-[#0066FF]/10 rounded-xl p-6">
                  <EditableText
                    id={`content-creation-${id}-photography-title`}
                    defaultContent="Photography"
                    className="text-xl font-semibold text-gray-900 mb-3"
                    tag="h3"
                  />
                  <EditableText
                    id={`content-creation-${id}-photography-desc`}
                    defaultContent="High-quality product photography, corporate headshots, event coverage, and lifestyle photography."
                    className="text-gray-700"
                    tag="p"
                  />
                </div>
                <div className="bg-gradient-to-r from-[#004FED]/10 to-[#0066FF]/10 rounded-xl p-6">
                  <EditableText
                    id={`content-creation-${id}-design-title`}
                    defaultContent="Graphic Design"
                    className="text-xl font-semibold text-gray-900 mb-3"
                    tag="h3"
                  />
                  <EditableText
                    id={`content-creation-${id}-design-desc`}
                    defaultContent="Custom graphics, infographics, social media templates, and marketing materials design."
                    className="text-gray-700"
                    tag="p"
                  />
                </div>
                <div className="bg-gradient-to-r from-[#004FED]/10 to-[#0066FF]/10 rounded-xl p-6">
                  <EditableText
                    id={`content-creation-${id}-copywriting-title`}
                    defaultContent="Copywriting"
                    className="text-xl font-semibold text-gray-900 mb-3"
                    tag="h3"
                  />
                  <EditableText
                    id={`content-creation-${id}-copywriting-desc`}
                    defaultContent="Compelling copy for websites, social media, marketing campaigns, and brand messaging."
                    className="text-gray-700"
                    tag="p"
                  />
                </div>
              </div>
            </div>

            {/* Content Types */}
            <div className="mb-12">
              <EditableText
                id={`content-creation-${id}-types-title`}
                defaultContent="Content Types We Create"
                className="text-3xl font-bold text-gray-900 mb-6"
                tag="h2"
              />
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="bg-[#004FED] text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-2xl font-bold">🎬</div>
                  <EditableText
                    id={`content-creation-${id}-video-content`}
                    defaultContent="Video Content"
                    className="text-lg font-semibold text-gray-900"
                    tag="h3"
                  />
                  <EditableText
                    id={`content-creation-${id}-video-content-desc`}
                    defaultContent="Commercials, product demos, testimonials, social media videos"
                    className="text-gray-700 text-sm"
                    tag="p"
                  />
                </div>
                <div className="text-center">
                  <div className="bg-[#004FED] text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-2xl font-bold">📸</div>
                  <EditableText
                    id={`content-creation-${id}-photo-content`}
                    defaultContent="Photography"
                    className="text-lg font-semibold text-gray-900"
                    tag="h3"
                  />
                  <EditableText
                    id={`content-creation-${id}-photo-content-desc`}
                    defaultContent="Product photos, corporate events, lifestyle shoots"
                    className="text-gray-700 text-sm"
                    tag="p"
                  />
                </div>
                <div className="text-center">
                  <div className="bg-[#004FED] text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-2xl font-bold">🎨</div>
                  <EditableText
                    id={`content-creation-${id}-design-content`}
                    defaultContent="Design Assets"
                    className="text-lg font-semibold text-gray-900"
                    tag="h3"
                  />
                  <EditableText
                    id={`content-creation-${id}-design-content-desc`}
                    defaultContent="Graphics, infographics, templates, marketing materials"
                    className="text-gray-700 text-sm"
                    tag="p"
                  />
                </div>
              </div>
            </div>

            {/* Project Packages */}
            <div className="mb-12">
              <EditableText
                id={`content-creation-${id}-packages-title`}
                defaultContent="Content Creation Packages"
                className="text-3xl font-bold text-gray-900 mb-6"
                tag="h2"
              />
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-gradient-to-r from-[#004FED]/10 to-[#0066FF]/10 rounded-xl p-6">
                  <EditableText
                    id={`content-creation-${id}-basic-title`}
                    defaultContent="Basic Package"
                    className="text-xl font-semibold text-gray-900 mb-4"
                    tag="h3"
                  />
                  <div className="space-y-3 text-gray-700">
                    <div className="flex items-center space-x-2">
                      <div className="bg-green-500 text-white rounded-full w-4 h-4 flex items-center justify-center text-xs">✓</div>
                      <EditableText
                        id={`content-creation-${id}-basic-1`}
                        defaultContent="5 product photos"
                        className="text-sm"
                        tag="span"
                      />
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="bg-green-500 text-white rounded-full w-4 h-4 flex items-center justify-center text-xs">✓</div>
                      <EditableText
                        id={`content-creation-${id}-basic-2`}
                        defaultContent="1 promotional video (30s)"
                        className="text-sm"
                        tag="span"
                      />
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="bg-green-500 text-white rounded-full w-4 h-4 flex items-center justify-center text-xs">✓</div>
                      <EditableText
                        id={`content-creation-${id}-basic-3`}
                        defaultContent="10 social media graphics"
                        className="text-sm"
                        tag="span"
                      />
                    </div>
                  </div>
                </div>
                <div className="bg-gradient-to-r from-[#004FED]/20 to-[#0066FF]/20 rounded-xl p-6 border-2 border-[#004FED]">
                  <EditableText
                    id={`content-creation-${id}-standard-title`}
                    defaultContent="Standard Package"
                    className="text-xl font-semibold text-gray-900 mb-4"
                    tag="h3"
                  />
                  <div className="space-y-3 text-gray-700">
                    <div className="flex items-center space-x-2">
                      <div className="bg-green-500 text-white rounded-full w-4 h-4 flex items-center justify-center text-xs">✓</div>
                      <EditableText
                        id={`content-creation-${id}-standard-1`}
                        defaultContent="15 product photos"
                        className="text-sm"
                        tag="span"
                      />
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="bg-green-500 text-white rounded-full w-4 h-4 flex items-center justify-center text-xs">✓</div>
                      <EditableText
                        id={`content-creation-${id}-standard-2`}
                        defaultContent="2 promotional videos (60s each)"
                        className="text-sm"
                        tag="span"
                      />
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="bg-green-500 text-white rounded-full w-4 h-4 flex items-center justify-center text-xs">✓</div>
                      <EditableText
                        id={`content-creation-${id}-standard-3`}
                        defaultContent="25 social media graphics"
                        className="text-sm"
                        tag="span"
                      />
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="bg-green-500 text-white rounded-full w-4 h-4 flex items-center justify-center text-xs">✓</div>
                      <EditableText
                        id={`content-creation-${id}-standard-4`}
                        defaultContent="Website copywriting"
                        className="text-sm"
                        tag="span"
                      />
                    </div>
                  </div>
                </div>
                <div className="bg-gradient-to-r from-[#004FED]/10 to-[#0066FF]/10 rounded-xl p-6">
                  <EditableText
                    id={`content-creation-${id}-premium-title`}
                    defaultContent="Premium Package"
                    className="text-xl font-semibold text-gray-900 mb-4"
                    tag="h3"
                  />
                  <div className="space-y-3 text-gray-700">
                    <div className="flex items-center space-x-2">
                      <div className="bg-green-500 text-white rounded-full w-4 h-4 flex items-center justify-center text-xs">✓</div>
                      <EditableText
                        id={`content-creation-${id}-premium-1`}
                        defaultContent="Unlimited photos"
                        className="text-sm"
                        tag="span"
                      />
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="bg-green-500 text-white rounded-full w-4 h-4 flex items-center justify-center text-xs">✓</div>
                      <EditableText
                        id={`content-creation-${id}-premium-2`}
                        defaultContent="5 promotional videos"
                        className="text-sm"
                        tag="span"
                      />
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="bg-green-500 text-white rounded-full w-4 h-4 flex items-center justify-center text-xs">✓</div>
                      <EditableText
                        id={`content-creation-${id}-premium-3`}
                        defaultContent="50+ social media graphics"
                        className="text-sm"
                        tag="span"
                      />
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="bg-green-500 text-white rounded-full w-4 h-4 flex items-center justify-center text-xs">✓</div>
                      <EditableText
                        id={`content-creation-${id}-premium-4`}
                        defaultContent="Complete copywriting package"
                        className="text-sm"
                        tag="span"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Creative Process */}
            <div className="mb-12">
              <EditableText
                id={`content-creation-${id}-process-title`}
                defaultContent="Creative Process"
                className="text-3xl font-bold text-gray-900 mb-6"
                tag="h2"
              />
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-[#004FED] text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">1</div>
                  <div>
                    <EditableText
                      id={`content-creation-${id}-brief-title`}
                      defaultContent="Creative Brief (Week 1)"
                      className="text-xl font-semibold text-gray-900 mb-2"
                      tag="h3"
                    />
                    <EditableText
                      id={`content-creation-${id}-brief-desc`}
                      defaultContent="Project consultation, creative brief development, and concept planning."
                      className="text-gray-700"
                      tag="p"
                    />
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-[#004FED] text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">2</div>
                  <div>
                    <EditableText
                      id={`content-creation-${id}-production-title`}
                      defaultContent="Production (Week 2-3)"
                      className="text-xl font-semibold text-gray-900 mb-2"
                      tag="h3"
                    />
                    <EditableText
                      id={`content-creation-${id}-production-desc`}
                      defaultContent="Content creation, photography, video production, and design development."
                      className="text-gray-700"
                      tag="p"
                    />
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-[#004FED] text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">3</div>
                  <div>
                    <EditableText
                      id={`content-creation-${id}-review-title`}
                      defaultContent="Review & Revisions (Week 4)"
                      className="text-xl font-semibold text-gray-900 mb-2"
                      tag="h3"
                    />
                    <EditableText
                      id={`content-creation-${id}-review-desc`}
                      defaultContent="Client review, feedback incorporation, and final refinements."
                      className="text-gray-700"
                      tag="p"
                    />
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-[#004FED] text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">4</div>
                  <div>
                    <EditableText
                      id={`content-creation-${id}-delivery-title`}
                      defaultContent="Final Delivery (Week 5)"
                      className="text-xl font-semibold text-gray-900 mb-2"
                      tag="h3"
                    />
                    <EditableText
                      id={`content-creation-${id}-delivery-desc`}
                      defaultContent="Final file delivery, usage guidelines, and ongoing support."
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
                id={`content-creation-${id}-investment-title`}
                defaultContent="Investment"
                className="text-3xl font-bold text-gray-900 mb-6"
                tag="h2"
              />
              <div className="bg-gradient-to-r from-[#004FED]/20 to-[#0066FF]/20 rounded-xl p-8">
                <EditableText
                  id={`content-creation-${id}-investment-amount`}
                  defaultContent="Project Investment: $2,000 - $8,000"
                  className="text-3xl font-bold text-gray-900 mb-4 text-center"
                  tag="h3"
                />
                <EditableText
                  id={`content-creation-${id}-investment-details`}
                  defaultContent="Payment terms: 50% upfront, 50% upon completion. Includes unlimited revisions and all source files."
                  className="text-lg text-gray-700 text-center"
                  tag="p"
                />
              </div>
            </div>

            {/* Contact Information */}
            <div className="text-center pt-8 border-t border-gray-200">
              <EditableText
                id={`content-creation-${id}-contact-title`}
                defaultContent="Ready to Create Amazing Content?"
                className="text-2xl font-bold text-gray-900 mb-4"
                tag="h3"
              />
              <EditableText
                id={`content-creation-${id}-contact-info`}
                defaultContent="Contact us at contact@upwardmm.com or call +95-9740977946 to discuss this content creation proposal."
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

export default ContentCreationProposalPage;
