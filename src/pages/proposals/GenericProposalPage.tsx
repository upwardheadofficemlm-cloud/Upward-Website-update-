import React from 'react';
import { useParams } from 'react-router-dom';
import EditableText from '../../components/cms/EditableText';
import EditableSection from '../../components/cms/EditableSection';

const GenericProposalPage: React.FC = () => {
  const { proposalType, proposalId } = useParams<{ proposalType: string; proposalId: string }>();
  const type = proposalType || 'proposal';
  const id = proposalId || 'default';

  // Format proposal type for display
  const formatProposalType = (type: string) => {
    return type
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  };

  return (
    <div className="min-h-screen pt-24 pb-24 bg-gradient-to-br from-[#004FED]/5 via-white to-[#0066FF]/10">
      {/* Hero Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <EditableText
            id={`${type}-${id}-hero-title`}
            defaultContent={`${formatProposalType(type)} Proposal`}
            className="text-5xl md:text-6xl font-black text-gray-900 mb-6"
            tag="h1"
          />
          <EditableText
            id={`${type}-${id}-hero-subtitle`}
            defaultContent="Upward Marketing Agency"
            className="text-2xl text-[#004FED] font-semibold mb-4"
            tag="h2"
          />
          <EditableText
            id={`${type}-${id}-proposal-id`}
            defaultContent={`Proposal ID: ${id}`}
            className="text-lg text-gray-600"
            tag="p"
          />
        </div>
      </section>

      {/* Proposal Content */}
      <EditableSection
        id={`${type}-${id}-content`}
        className="py-16"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl shadow-2xl border border-gray-100 p-12">
            
            {/* Executive Summary */}
            <div className="mb-12">
              <EditableText
                id={`${type}-${id}-executive-title`}
                defaultContent="Executive Summary"
                className="text-3xl font-bold text-gray-900 mb-6"
                tag="h2"
              />
              <EditableText
                id={`${type}-${id}-executive-content`}
                defaultContent="This comprehensive proposal outlines our strategic approach to deliver exceptional results for your business objectives. We are committed to providing innovative solutions that drive growth and success."
                className="text-lg text-gray-700 leading-relaxed"
                tag="p"
              />
            </div>

            {/* Project Overview */}
            <div className="mb-12">
              <EditableText
                id={`${type}-${id}-overview-title`}
                defaultContent="Project Overview"
                className="text-3xl font-bold text-gray-900 mb-6"
                tag="h2"
              />
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <EditableText
                  id={`${type}-${id}-overview-1`}
                  defaultContent="Our experienced team will work closely with you to understand your unique needs and develop a customized strategy that aligns with your business goals and target audience."
                  className="text-lg"
                  tag="p"
                />
                <EditableText
                  id={`${type}-${id}-overview-2`}
                  defaultContent="This proposal includes detailed deliverables, timelines, and investment requirements to ensure transparency and successful project execution."
                  className="text-lg"
                  tag="p"
                />
              </div>
            </div>

            {/* Services Included */}
            <div className="mb-12">
              <EditableText
                id={`${type}-${id}-services-title`}
                defaultContent="Services Included"
                className="text-3xl font-bold text-gray-900 mb-6"
                tag="h2"
              />
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gradient-to-r from-[#004FED]/10 to-[#0066FF]/10 rounded-xl p-6">
                  <EditableText
                    id={`${type}-${id}-service-1-title`}
                    defaultContent="Strategic Planning"
                    className="text-xl font-semibold text-gray-900 mb-3"
                    tag="h3"
                  />
                  <EditableText
                    id={`${type}-${id}-service-1-desc`}
                    defaultContent="Comprehensive analysis and strategic planning tailored to your specific business objectives and market position."
                    className="text-gray-700"
                    tag="p"
                  />
                </div>
                <div className="bg-gradient-to-r from-[#004FED]/10 to-[#0066FF]/10 rounded-xl p-6">
                  <EditableText
                    id={`${type}-${id}-service-2-title`}
                    defaultContent="Creative Development"
                    className="text-xl font-semibold text-gray-900 mb-3"
                    tag="h3"
                  />
                  <EditableText
                    id={`${type}-${id}-service-2-desc`}
                    defaultContent="Professional creative services including design, content creation, and brand development that resonates with your audience."
                    className="text-gray-700"
                    tag="p"
                  />
                </div>
                <div className="bg-gradient-to-r from-[#004FED]/10 to-[#0066FF]/10 rounded-xl p-6">
                  <EditableText
                    id={`${type}-${id}-service-3-title`}
                    defaultContent="Implementation"
                    className="text-xl font-semibold text-gray-900 mb-3"
                    tag="h3"
                  />
                  <EditableText
                    id={`${type}-${id}-service-3-desc`}
                    defaultContent="Expert execution of all planned strategies with attention to detail and quality assurance throughout the process."
                    className="text-gray-700"
                    tag="p"
                  />
                </div>
                <div className="bg-gradient-to-r from-[#004FED]/10 to-[#0066FF]/10 rounded-xl p-6">
                  <EditableText
                    id={`${type}-${id}-service-4-title`}
                    defaultContent="Ongoing Support"
                    className="text-xl font-semibold text-gray-900 mb-3"
                    tag="h3"
                  />
                  <EditableText
                    id={`${type}-${id}-service-4-desc`}
                    defaultContent="Continuous monitoring, optimization, and support to ensure long-term success and maximum ROI."
                    className="text-gray-700"
                    tag="p"
                  />
                </div>
              </div>
            </div>

            {/* Expected Results */}
            <div className="mb-12">
              <EditableText
                id={`${type}-${id}-results-title`}
                defaultContent="Expected Results"
                className="text-3xl font-bold text-gray-900 mb-6"
                tag="h2"
              />
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="bg-[#004FED] text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-2xl font-bold">+100%</div>
                  <EditableText
                    id={`${type}-${id}-result-1`}
                    defaultContent="Performance Improvement"
                    className="text-lg font-semibold text-gray-900"
                    tag="h3"
                  />
                </div>
                <div className="text-center">
                  <div className="bg-[#004FED] text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-2xl font-bold">+150%</div>
                  <EditableText
                    id={`${type}-${id}-result-2`}
                    defaultContent="Engagement Increase"
                    className="text-lg font-semibold text-gray-900"
                    tag="h3"
                  />
                </div>
                <div className="text-center">
                  <div className="bg-[#004FED] text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-2xl font-bold">+200%</div>
                  <EditableText
                    id={`${type}-${id}-result-3`}
                    defaultContent="ROI Enhancement"
                    className="text-lg font-semibold text-gray-900"
                    tag="h3"
                  />
                </div>
              </div>
            </div>

            {/* Timeline */}
            <div className="mb-12">
              <EditableText
                id={`${type}-${id}-timeline-title`}
                defaultContent="Project Timeline"
                className="text-3xl font-bold text-gray-900 mb-6"
                tag="h2"
              />
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-[#004FED] text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">1</div>
                  <div>
                    <EditableText
                      id={`${type}-${id}-phase-1-title`}
                      defaultContent="Discovery & Planning (Week 1-2)"
                      className="text-xl font-semibold text-gray-900 mb-2"
                      tag="h3"
                    />
                    <EditableText
                      id={`${type}-${id}-phase-1-desc`}
                      defaultContent="Comprehensive research, analysis, and strategic planning phase to understand your needs and develop the perfect approach."
                      className="text-gray-700"
                      tag="p"
                    />
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-[#004FED] text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">2</div>
                  <div>
                    <EditableText
                      id={`${type}-${id}-phase-2-title`}
                      defaultContent="Development & Creation (Week 3-6)"
                      className="text-xl font-semibold text-gray-900 mb-2"
                      tag="h3"
                    />
                    <EditableText
                      id={`${type}-${id}-phase-2-desc`}
                      defaultContent="Active development and creation phase with regular updates and collaboration to ensure everything meets your expectations."
                      className="text-gray-700"
                      tag="p"
                    />
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-[#004FED] text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">3</div>
                  <div>
                    <EditableText
                      id={`${type}-${id}-phase-3-title`}
                      defaultContent="Launch & Optimization (Week 7-8)"
                      className="text-xl font-semibold text-gray-900 mb-2"
                      tag="h3"
                    />
                    <EditableText
                      id={`${type}-${id}-phase-3-desc`}
                      defaultContent="Final implementation, launch, and initial optimization to ensure everything is performing at its best."
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
                id={`${type}-${id}-investment-title`}
                defaultContent="Investment"
                className="text-3xl font-bold text-gray-900 mb-6"
                tag="h2"
              />
              <div className="bg-gradient-to-r from-[#004FED]/20 to-[#0066FF]/20 rounded-xl p-8">
                <EditableText
                  id={`${type}-${id}-investment-amount`}
                  defaultContent="Project Investment: $5,000 - $15,000"
                  className="text-3xl font-bold text-gray-900 mb-4 text-center"
                  tag="h3"
                />
                <EditableText
                  id={`${type}-${id}-investment-details`}
                  defaultContent="Payment terms: 50% upfront, 50% upon project completion. All prices are in USD and subject to applicable taxes. Custom payment plans available."
                  className="text-lg text-gray-700 text-center"
                  tag="p"
                />
              </div>
            </div>

            {/* Next Steps */}
            <div className="mb-8">
              <EditableText
                id={`${type}-${id}-next-steps-title`}
                defaultContent="Next Steps"
                className="text-3xl font-bold text-gray-900 mb-6"
                tag="h2"
              />
              <div className="space-y-4">
                <EditableText
                  id={`${type}-${id}-next-steps-1`}
                  defaultContent="1. Review this proposal and discuss any questions or modifications needed with our team."
                  className="text-lg text-gray-700"
                  tag="p"
                />
                <EditableText
                  id={`${type}-${id}-next-steps-2`}
                  defaultContent="2. Sign the proposal to confirm acceptance and project commencement."
                  className="text-lg text-gray-700"
                  tag="p"
                />
                <EditableText
                  id={`${type}-${id}-next-steps-3`}
                  defaultContent="3. Provide initial payment to begin the discovery and planning phase."
                  className="text-lg text-gray-700"
                  tag="p"
                />
              </div>
            </div>

            {/* Contact Information */}
            <div className="text-center pt-8 border-t border-gray-200">
              <EditableText
                id={`${type}-${id}-contact-title`}
                defaultContent="Ready to Get Started?"
                className="text-2xl font-bold text-gray-900 mb-4"
                tag="h3"
              />
              <EditableText
                id={`${type}-${id}-contact-info`}
                defaultContent="Contact us at contact@upwardmm.com or call +95-9740977946 to discuss this proposal and answer any questions you may have."
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

export default GenericProposalPage;
