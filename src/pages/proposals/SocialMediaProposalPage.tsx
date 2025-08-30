import React from 'react';
import { useParams } from 'react-router-dom';
import EditableText from '../../components/cms/EditableText';
import EditableSection from '../../components/cms/EditableSection';

const SocialMediaProposalPage: React.FC = () => {
  const { proposalId } = useParams<{ proposalId: string }>();
  const id = proposalId || 'default';

  return (
    <div className="min-h-screen pt-24 pb-24 bg-gradient-to-br from-[#004FED]/5 via-white to-[#0066FF]/10">
      {/* Hero Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <EditableText
            id={`social-media-${id}-hero-title`}
            defaultContent="Social Media Marketing Proposal"
            className="text-5xl md:text-6xl font-black text-gray-900 mb-6"
            tag="h1"
          />
          <EditableText
            id={`social-media-${id}-hero-subtitle`}
            defaultContent="Upward Marketing Agency"
            className="text-2xl text-[#004FED] font-semibold mb-4"
            tag="h2"
          />
          <EditableText
            id={`social-media-${id}-proposal-id`}
            defaultContent={`Proposal ID: ${id}`}
            className="text-lg text-gray-600"
            tag="p"
          />
        </div>
      </section>

      {/* Proposal Content */}
      <EditableSection
        id={`social-media-${id}-content`}
        className="py-16"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl shadow-2xl border border-gray-100 p-12">
            
            {/* Executive Summary */}
            <div className="mb-12">
              <EditableText
                id={`social-media-${id}-executive-title`}
                defaultContent="Executive Summary"
                className="text-3xl font-bold text-gray-900 mb-6"
                tag="h2"
              />
              <EditableText
                id={`social-media-${id}-executive-content`}
                defaultContent="This comprehensive social media marketing proposal outlines our strategic approach to building your brand presence, engaging your audience, and driving measurable results across all major social media platforms."
                className="text-lg text-gray-700 leading-relaxed"
                tag="p"
              />
            </div>

            {/* Social Media Services */}
            <div className="mb-12">
              <EditableText
                id={`social-media-${id}-services-title`}
                defaultContent="Social Media Services"
                className="text-3xl font-bold text-gray-900 mb-6"
                tag="h2"
              />
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gradient-to-r from-[#004FED]/10 to-[#0066FF]/10 rounded-xl p-6">
                  <EditableText
                    id={`social-media-${id}-content-creation-title`}
                    defaultContent="Content Creation"
                    className="text-xl font-semibold text-gray-900 mb-3"
                    tag="h3"
                  />
                  <EditableText
                    id={`social-media-${id}-content-creation-desc`}
                    defaultContent="Engaging posts, stories, reels, and videos tailored for each platform and your target audience."
                    className="text-gray-700"
                    tag="p"
                  />
                </div>
                <div className="bg-gradient-to-r from-[#004FED]/10 to-[#0066FF]/10 rounded-xl p-6">
                  <EditableText
                    id={`social-media-${id}-community-title`}
                    defaultContent="Community Management"
                    className="text-xl font-semibold text-gray-900 mb-3"
                    tag="h3"
                  />
                  <EditableText
                    id={`social-media-${id}-community-desc`}
                    defaultContent="Daily engagement, comment responses, and community building to foster brand loyalty."
                    className="text-gray-700"
                    tag="p"
                  />
                </div>
                <div className="bg-gradient-to-r from-[#004FED]/10 to-[#0066FF]/10 rounded-xl p-6">
                  <EditableText
                    id={`social-media-${id}-advertising-title`}
                    defaultContent="Social Media Advertising"
                    className="text-xl font-semibold text-gray-900 mb-3"
                    tag="h3"
                  />
                  <EditableText
                    id={`social-media-${id}-advertising-desc`}
                    defaultContent="Targeted paid campaigns on Facebook, Instagram, LinkedIn, and other platforms for maximum reach."
                    className="text-gray-700"
                    tag="p"
                  />
                </div>
                <div className="bg-gradient-to-r from-[#004FED]/10 to-[#0066FF]/10 rounded-xl p-6">
                  <EditableText
                    id={`social-media-${id}-analytics-title`}
                    defaultContent="Analytics & Reporting"
                    className="text-xl font-semibold text-gray-900 mb-3"
                    tag="h3"
                  />
                  <EditableText
                    id={`social-media-${id}-analytics-desc`}
                    defaultContent="Monthly performance reports with insights and recommendations for optimization."
                    className="text-gray-700"
                    tag="p"
                  />
                </div>
              </div>
            </div>

            {/* Platforms Covered */}
            <div className="mb-12">
              <EditableText
                id={`social-media-${id}-platforms-title`}
                defaultContent="Platforms We Manage"
                className="text-3xl font-bold text-gray-900 mb-6"
                tag="h2"
              />
              <div className="grid md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="bg-blue-600 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-2xl font-bold">f</div>
                  <EditableText
                    id={`social-media-${id}-facebook`}
                    defaultContent="Facebook"
                    className="text-lg font-semibold text-gray-900"
                    tag="h3"
                  />
                  <EditableText
                    id={`social-media-${id}-facebook-desc`}
                    defaultContent="Posts, stories, ads"
                    className="text-gray-700 text-sm"
                    tag="p"
                  />
                </div>
                <div className="text-center">
                  <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-2xl font-bold">📷</div>
                  <EditableText
                    id={`social-media-${id}-instagram`}
                    defaultContent="Instagram"
                    className="text-lg font-semibold text-gray-900"
                    tag="h3"
                  />
                  <EditableText
                    id={`social-media-${id}-instagram-desc`}
                    defaultContent="Posts, stories, reels"
                    className="text-gray-700 text-sm"
                    tag="p"
                  />
                </div>
                <div className="text-center">
                  <div className="bg-blue-700 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-2xl font-bold">in</div>
                  <EditableText
                    id={`social-media-${id}-linkedin`}
                    defaultContent="LinkedIn"
                    className="text-lg font-semibold text-gray-900"
                    tag="h3"
                  />
                  <EditableText
                    id={`social-media-${id}-linkedin-desc`}
                    defaultContent="Professional content"
                    className="text-gray-700 text-sm"
                    tag="p"
                  />
                </div>
                <div className="text-center">
                  <div className="bg-red-500 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-2xl font-bold">▶️</div>
                  <EditableText
                    id={`social-media-${id}-youtube`}
                    defaultContent="YouTube"
                    className="text-lg font-semibold text-gray-900"
                    tag="h3"
                  />
                  <EditableText
                    id={`social-media-${id}-youtube-desc`}
                    defaultContent="Video content"
                    className="text-gray-700 text-sm"
                    tag="p"
                  />
                </div>
              </div>
            </div>

            {/* Expected Results */}
            <div className="mb-12">
              <EditableText
                id={`social-media-${id}-results-title`}
                defaultContent="Expected Results"
                className="text-3xl font-bold text-gray-900 mb-6"
                tag="h2"
              />
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="bg-[#004FED] text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-2xl font-bold">+200%</div>
                  <EditableText
                    id={`social-media-${id}-followers-increase`}
                    defaultContent="Follower Growth"
                    className="text-lg font-semibold text-gray-900"
                    tag="h3"
                  />
                </div>
                <div className="text-center">
                  <div className="bg-[#004FED] text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-2xl font-bold">+300%</div>
                  <EditableText
                    id={`social-media-${id}-engagement-increase`}
                    defaultContent="Engagement Rate"
                    className="text-lg font-semibold text-gray-900"
                    tag="h3"
                  />
                </div>
                <div className="text-center">
                  <div className="bg-[#004FED] text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-2xl font-bold">+150%</div>
                  <EditableText
                    id={`social-media-${id}-website-traffic`}
                    defaultContent="Website Traffic"
                    className="text-lg font-semibold text-gray-900"
                    tag="h3"
                  />
                </div>
              </div>
            </div>

            {/* Monthly Content Plan */}
            <div className="mb-12">
              <EditableText
                id={`social-media-${id}-content-plan-title`}
                defaultContent="Monthly Content Plan"
                className="text-3xl font-bold text-gray-900 mb-6"
                tag="h2"
              />
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="bg-[#004FED] text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">15</div>
                    <EditableText
                      id={`social-media-${id}-facebook-posts`}
                      defaultContent="Facebook posts per month"
                      className="text-gray-700"
                      tag="span"
                    />
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="bg-[#004FED] text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">20</div>
                    <EditableText
                      id={`social-media-${id}-instagram-posts`}
                      defaultContent="Instagram posts per month"
                      className="text-gray-700"
                      tag="span"
                    />
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="bg-[#004FED] text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">8</div>
                    <EditableText
                      id={`social-media-${id}-linkedin-posts`}
                      defaultContent="LinkedIn posts per month"
                      className="text-gray-700"
                      tag="span"
                    />
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="bg-[#004FED] text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">30</div>
                    <EditableText
                      id={`social-media-${id}-stories`}
                      defaultContent="Instagram/Facebook stories per month"
                      className="text-gray-700"
                      tag="span"
                    />
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="bg-[#004FED] text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">4</div>
                    <EditableText
                      id={`social-media-${id}-reels`}
                      defaultContent="Instagram reels per month"
                      className="text-gray-700"
                      tag="span"
                    />
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="bg-[#004FED] text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">2</div>
                    <EditableText
                      id={`social-media-${id}-videos`}
                      defaultContent="YouTube videos per month"
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
                id={`social-media-${id}-timeline-title`}
                defaultContent="Project Timeline"
                className="text-3xl font-bold text-gray-900 mb-6"
                tag="h2"
              />
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-[#004FED] text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">1</div>
                  <div>
                    <EditableText
                      id={`social-media-${id}-setup-title`}
                      defaultContent="Account Setup & Strategy (Week 1)"
                      className="text-xl font-semibold text-gray-900 mb-2"
                      tag="h3"
                    />
                    <EditableText
                      id={`social-media-${id}-setup-desc`}
                      defaultContent="Platform optimization, content strategy development, and brand voice establishment."
                      className="text-gray-700"
                      tag="p"
                    />
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-[#004FED] text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">2</div>
                  <div>
                    <EditableText
                      id={`social-media-${id}-content-start-title`}
                      defaultContent="Content Creation & Launch (Week 2-3)"
                      className="text-xl font-semibold text-gray-900 mb-2"
                      tag="h3"
                    />
                    <EditableText
                      id={`social-media-${id}-content-start-desc`}
                      defaultContent="Initial content creation, posting schedule implementation, and community engagement."
                      className="text-gray-700"
                      tag="p"
                    />
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-[#004FED] text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">3</div>
                  <div>
                    <EditableText
                      id={`social-media-${id}-optimization-title`}
                      defaultContent="Optimization & Growth (Ongoing)"
                      className="text-xl font-semibold text-gray-900 mb-2"
                      tag="h3"
                    />
                    <EditableText
                      id={`social-media-${id}-optimization-desc`}
                      defaultContent="Performance analysis, content optimization, and continuous strategy refinement."
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
                id={`social-media-${id}-investment-title`}
                defaultContent="Investment"
                className="text-3xl font-bold text-gray-900 mb-6"
                tag="h2"
              />
              <div className="bg-gradient-to-r from-[#004FED]/20 to-[#0066FF]/20 rounded-xl p-8">
                <EditableText
                  id={`social-media-${id}-investment-amount`}
                  defaultContent="Monthly Investment: $1,500 - $3,500"
                  className="text-3xl font-bold text-gray-900 mb-4 text-center"
                  tag="h3"
                />
                <EditableText
                  id={`social-media-${id}-investment-details`}
                  defaultContent="Includes content creation, community management, advertising management, and monthly reporting. Minimum 3-month commitment recommended."
                  className="text-lg text-gray-700 text-center"
                  tag="p"
                />
              </div>
            </div>

            {/* Contact Information */}
            <div className="text-center pt-8 border-t border-gray-200">
              <EditableText
                id={`social-media-${id}-contact-title`}
                defaultContent="Ready to Grow Your Social Media Presence?"
                className="text-2xl font-bold text-gray-900 mb-4"
                tag="h3"
              />
              <EditableText
                id={`social-media-${id}-contact-info`}
                defaultContent="Contact us at contact@upwardmm.com or call +95-9740977946 to discuss this social media marketing proposal."
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

export default SocialMediaProposalPage;
