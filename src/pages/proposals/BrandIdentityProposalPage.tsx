import React from 'react';
import { useParams } from 'react-router-dom';
import EditableText from '../../components/cms/EditableText';
import EditableSection from '../../components/cms/EditableSection';

const BrandIdentityProposalPage: React.FC = () => {
  const { proposalId } = useParams<{ proposalId: string }>();
  const id = proposalId || 'default';

  return (
    <div className="min-h-screen pt-24 pb-24 bg-gradient-to-br from-[#004FED]/5 via-white to-[#0066FF]/10">
      {/* Hero Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <EditableText
            id={`brand-identity-${id}-hero-title`}
            defaultContent="Brand Identity Proposal"
            className="text-5xl md:text-6xl font-black text-gray-900 mb-6"
            tag="h1"
          />
          <EditableText
            id={`brand-identity-${id}-hero-subtitle`}
            defaultContent="Upward Marketing Agency"
            className="text-2xl text-[#004FED] font-semibold mb-4"
            tag="h2"
          />
          <EditableText
            id={`brand-identity-${id}-proposal-id`}
            defaultContent={`Proposal ID: ${id}`}
            className="text-lg text-gray-600"
            tag="p"
          />
        </div>
      </section>

      {/* Proposal Content */}
      <EditableSection
        id={`brand-identity-${id}-content`}
        className="py-16"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl shadow-2xl border border-gray-100 p-12">
            
            {/* Executive Summary */}
            <div className="mb-12">
              <EditableText
                id={`brand-identity-${id}-executive-title`}
                defaultContent="Executive Summary"
                className="text-3xl font-bold text-gray-900 mb-6"
                tag="h2"
              />
              <EditableText
                id={`brand-identity-${id}-executive-content`}
                defaultContent="This comprehensive brand identity proposal outlines our strategic approach to creating a distinctive, memorable, and cohesive brand that will set you apart from competitors and resonate with your target audience."
                className="text-lg text-gray-700 leading-relaxed"
                tag="p"
              />
            </div>

            {/* Brand Identity Services */}
            <div className="mb-12">
              <EditableText
                id={`brand-identity-${id}-services-title`}
                defaultContent="Brand Identity Services"
                className="text-3xl font-bold text-gray-900 mb-6"
                tag="h2"
              />
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gradient-to-r from-[#004FED]/10 to-[#0066FF]/10 rounded-xl p-6">
                  <EditableText
                    id={`brand-identity-${id}-logo-title`}
                    defaultContent="Logo Design"
                    className="text-xl font-semibold text-gray-900 mb-3"
                    tag="h3"
                  />
                  <EditableText
                    id={`brand-identity-${id}-logo-desc`}
                    defaultContent="Professional logo design in multiple formats and variations for all applications."
                    className="text-gray-700"
                    tag="p"
                  />
                </div>
                <div className="bg-gradient-to-r from-[#004FED]/10 to-[#0066FF]/10 rounded-xl p-6">
                  <EditableText
                    id={`brand-identity-${id}-guidelines-title`}
                    defaultContent="Brand Guidelines"
                    className="text-xl font-semibold text-gray-900 mb-3"
                    tag="h3"
                  />
                  <EditableText
                    id={`brand-identity-${id}-guidelines-desc`}
                    defaultContent="Comprehensive brand guidelines including color palette, typography, and usage rules."
                    className="text-gray-700"
                    tag="p"
                  />
                </div>
                <div className="bg-gradient-to-r from-[#004FED]/10 to-[#0066FF]/10 rounded-xl p-6">
                  <EditableText
                    id={`brand-identity-${id}-collateral-title`}
                    defaultContent="Brand Collateral"
                    className="text-xl font-semibold text-gray-900 mb-3"
                    tag="h3"
                  />
                  <EditableText
                    id={`brand-identity-${id}-collateral-desc`}
                    defaultContent="Business cards, letterheads, envelopes, and other essential brand materials."
                    className="text-gray-700"
                    tag="p"
                  />
                </div>
                <div className="bg-gradient-to-r from-[#004FED]/10 to-[#0066FF]/10 rounded-xl p-6">
                  <EditableText
                    id={`brand-identity-${id}-strategy-title`}
                    defaultContent="Brand Strategy"
                    className="text-xl font-semibold text-gray-900 mb-3"
                    tag="h3"
                  />
                  <EditableText
                    id={`brand-identity-${id}-strategy-desc`}
                    defaultContent="Brand positioning, messaging framework, and visual identity strategy."
                    className="text-gray-700"
                    tag="p"
                  />
                </div>
              </div>
            </div>

            {/* Brand Elements */}
            <div className="mb-12">
              <EditableText
                id={`brand-identity-${id}-elements-title`}
                defaultContent="Brand Elements Included"
                className="text-3xl font-bold text-gray-900 mb-6"
                tag="h2"
              />
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="bg-[#004FED] text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-2xl font-bold">🎨</div>
                  <EditableText
                    id={`brand-identity-${id}-visual-identity`}
                    defaultContent="Visual Identity"
                    className="text-lg font-semibold text-gray-900"
                    tag="h3"
                  />
                  <EditableText
                    id={`brand-identity-${id}-visual-identity-desc`}
                    defaultContent="Logo, color palette, typography, and visual elements"
                    className="text-gray-700 text-sm"
                    tag="p"
                  />
                </div>
                <div className="text-center">
                  <div className="bg-[#004FED] text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-2xl font-bold">📝</div>
                  <EditableText
                    id={`brand-identity-${id}-messaging`}
                    defaultContent="Brand Messaging"
                    className="text-lg font-semibold text-gray-900"
                    tag="h3"
                  />
                  <EditableText
                    id={`brand-identity-${id}-messaging-desc`}
                    defaultContent="Taglines, value propositions, and tone of voice"
                    className="text-gray-700 text-sm"
                    tag="p"
                  />
                </div>
                <div className="text-center">
                  <div className="bg-[#004FED] text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-2xl font-bold">📋</div>
                  <EditableText
                    id={`brand-identity-${id}-guidelines-doc`}
                    defaultContent="Brand Guidelines"
                    className="text-lg font-semibold text-gray-900"
                    tag="h3"
                  />
                  <EditableText
                    id={`brand-identity-${id}-guidelines-doc-desc`}
                    defaultContent="Comprehensive brand manual and usage guidelines"
                    className="text-gray-700 text-sm"
                    tag="p"
                  />
                </div>
              </div>
            </div>

            {/* Design Process */}
            <div className="mb-12">
              <EditableText
                id={`brand-identity-${id}-process-title`}
                defaultContent="Design Process"
                className="text-3xl font-bold text-gray-900 mb-6"
                tag="h2"
              />
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-[#004FED] text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">1</div>
                  <div>
                    <EditableText
                      id={`brand-identity-${id}-research-title`}
                      defaultContent="Research & Discovery (Week 1)"
                      className="text-xl font-semibold text-gray-900 mb-2"
                      tag="h3"
                    />
                    <EditableText
                      id={`brand-identity-${id}-research-desc`}
                      defaultContent="Market research, competitor analysis, and brand positioning strategy development."
                      className="text-gray-700"
                      tag="p"
                    />
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-[#004FED] text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">2</div>
                  <div>
                    <EditableText
                      id={`brand-identity-${id}-concept-title`}
                      defaultContent="Concept Development (Week 2-3)"
                      className="text-xl font-semibold text-gray-900 mb-2"
                      tag="h3"
                    />
                    <EditableText
                      id={`brand-identity-${id}-concept-desc`}
                      defaultContent="Logo concepts, color palette development, and typography selection with client feedback."
                      className="text-gray-700"
                      tag="p"
                    />
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-[#004FED] text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">3</div>
                  <div>
                    <EditableText
                      id={`brand-identity-${id}-refinement-title`}
                      defaultContent="Refinement & Finalization (Week 4)"
                      className="text-xl font-semibold text-gray-900 mb-2"
                      tag="h3"
                    />
                    <EditableText
                      id={`brand-identity-${id}-refinement-desc`}
                      defaultContent="Final logo design, brand guidelines creation, and collateral design."
                      className="text-gray-700"
                      tag="p"
                    />
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-[#004FED] text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">4</div>
                  <div>
                    <EditableText
                      id={`brand-identity-${id}-delivery-title`}
                      defaultContent="Delivery & Support (Week 5)"
                      className="text-xl font-semibold text-gray-900 mb-2"
                      tag="h3"
                    />
                    <EditableText
                      id={`brand-identity-${id}-delivery-desc`}
                      defaultContent="Final file delivery, brand guidelines presentation, and ongoing support."
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
                id={`brand-identity-${id}-deliverables-title`}
                defaultContent="What You'll Receive"
                className="text-3xl font-bold text-gray-900 mb-6"
                tag="h2"
              />
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="bg-green-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm">✓</div>
                    <EditableText
                      id={`brand-identity-${id}-deliverable-1`}
                      defaultContent="Primary logo design"
                      className="text-gray-700"
                      tag="span"
                    />
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="bg-green-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm">✓</div>
                    <EditableText
                      id={`brand-identity-${id}-deliverable-2`}
                      defaultContent="Logo variations (horizontal, vertical, icon)"
                      className="text-gray-700"
                      tag="span"
                    />
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="bg-green-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm">✓</div>
                    <EditableText
                      id={`brand-identity-${id}-deliverable-3`}
                      defaultContent="Color palette and typography"
                      className="text-gray-700"
                      tag="span"
                    />
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="bg-green-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm">✓</div>
                    <EditableText
                      id={`brand-identity-${id}-deliverable-4`}
                      defaultContent="Brand guidelines document"
                      className="text-gray-700"
                      tag="span"
                    />
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="bg-green-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm">✓</div>
                    <EditableText
                      id={`brand-identity-${id}-deliverable-5`}
                      defaultContent="Business card design"
                      className="text-gray-700"
                      tag="span"
                    />
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="bg-green-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm">✓</div>
                    <EditableText
                      id={`brand-identity-${id}-deliverable-6`}
                      defaultContent="All source files and formats"
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
                id={`brand-identity-${id}-investment-title`}
                defaultContent="Investment"
                className="text-3xl font-bold text-gray-900 mb-6"
                tag="h2"
              />
              <div className="bg-gradient-to-r from-[#004FED]/20 to-[#0066FF]/20 rounded-xl p-8">
                <EditableText
                  id={`brand-identity-${id}-investment-amount`}
                  defaultContent="Project Investment: $3,000 - $8,000"
                  className="text-3xl font-bold text-gray-900 mb-4 text-center"
                  tag="h3"
                />
                <EditableText
                  id={`brand-identity-${id}-investment-details`}
                  defaultContent="Payment terms: 50% upfront, 50% upon completion. Includes unlimited revisions and 3 months of support."
                  className="text-lg text-gray-700 text-center"
                  tag="p"
                />
              </div>
            </div>

            {/* Contact Information */}
            <div className="text-center pt-8 border-t border-gray-200">
              <EditableText
                id={`brand-identity-${id}-contact-title`}
                defaultContent="Ready to Build Your Brand?"
                className="text-2xl font-bold text-gray-900 mb-4"
                tag="h3"
              />
              <EditableText
                id={`brand-identity-${id}-contact-info`}
                defaultContent="Contact us at contact@upwardmm.com or call +95-9740977946 to discuss this brand identity proposal."
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

export default BrandIdentityProposalPage;
