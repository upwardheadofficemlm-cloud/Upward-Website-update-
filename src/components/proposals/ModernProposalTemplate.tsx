import React, { useState } from 'react';
import { Copy, Download, Share2, CheckCircle, Star, TrendingUp, Users, Target, Award, Clock, DollarSign, ArrowRight, ArrowUpRight } from 'lucide-react';
import EditableText from '../cms/EditableText';
import EditableSection from '../cms/EditableSection';
import EditableImage from '../cms/EditableImage';
import { downloadProposalAsPDF, shareProposal, copyToClipboard } from '../../utils/pdfGenerator';

interface ModernProposalTemplateProps {
  proposalId: string;
  proposalType: string;
  clientName?: string;
  onCopyUrl?: () => void;
  onDownload?: () => void;
  onShare?: () => void;
}

const ModernProposalTemplate: React.FC<ModernProposalTemplateProps> = ({
  proposalId,
  proposalType,
  clientName = 'Client',
  onCopyUrl,
  onDownload,
  onShare
}) => {
  const [copied, setCopied] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState('premium');

  const handleCopyUrl = async () => {
    const success = await copyToClipboard(window.location.href);
    if (success) {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
      onCopyUrl?.();
    }
  };

  const handleDownload = async () => {
    await downloadProposalAsPDF(proposalId, proposalType);
    onDownload?.();
  };

  const handleShare = async () => {
    await shareProposal(window.location.href, `Proposal from Upward Marketing House`);
    onShare?.();
  };

  const pricingPackages = [
    {
      id: 'starter',
      name: 'Starter',
      price: '$1,500',
      period: '/month',
      features: [
        'Basic SEO optimization',
        'Social media management (2 platforms)',
        'Monthly content creation',
        'Basic analytics reporting',
        'Email support'
      ],
      popular: false,
      color: 'from-gray-500 to-gray-600'
    },
    {
      id: 'premium',
      name: 'Premium',
      price: '$3,500',
      period: '/month',
      features: [
        'Advanced SEO optimization',
        'Social media management (4 platforms)',
        'PPC campaign management',
        'Content marketing strategy',
        'Weekly analytics reporting',
        'Priority support',
        'Custom landing pages'
      ],
      popular: true,
      color: 'from-[#004FED] to-[#0066FF]'
    },
    {
      id: 'enterprise',
      name: 'Enterprise',
      price: '$7,500',
      period: '/month',
      features: [
        'Full-service digital marketing',
        'All social media platforms',
        'Advanced PPC campaigns',
        'Content marketing & SEO',
        'Email marketing automation',
        'Weekly strategy calls',
        'Dedicated account manager',
        'Custom reporting dashboard'
      ],
      popular: false,
      color: 'from-purple-500 to-purple-600'
    }
  ];

  const metrics = [
    { icon: TrendingUp, value: '+250%', label: 'Traffic Increase', color: 'text-green-600' },
    { icon: Users, value: '+180%', label: 'Lead Generation', color: 'text-blue-600' },
    { icon: Target, value: '+320%', label: 'Conversion Rate', color: 'text-purple-600' },
    { icon: DollarSign, value: '+400%', label: 'ROI Improvement', color: 'text-orange-600' }
  ];

  const timeline = [
    {
      phase: 'Discovery & Strategy',
      duration: 'Week 1-2',
      tasks: ['Audit & Analysis', 'Strategy Development', 'Goal Setting'],
      status: 'completed'
    },
    {
      phase: 'Implementation',
      duration: 'Week 3-6',
      tasks: ['SEO Optimization', 'Campaign Setup', 'Content Creation'],
      status: 'active'
    },
    {
      phase: 'Optimization',
      duration: 'Week 7-12',
      tasks: ['Performance Monitoring', 'A/B Testing', 'Strategy Refinement'],
      status: 'pending'
    },
    {
      phase: 'Growth & Scale',
      duration: 'Ongoing',
      tasks: ['Campaign Scaling', 'New Opportunities', 'Continuous Improvement'],
      status: 'pending'
    }
  ];

  return (
    <div className="proposal-content min-h-screen pt-24 pb-24 bg-gradient-to-br from-[#004FED]/5 via-white to-[#0066FF]/10">
      {/* Header with Actions */}
      <div className="sticky top-0 z-40 bg-white/95 backdrop-blur-xl border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <div className="w-10 h-10 bg-gradient-to-br from-[#004FED] to-[#0066FF] rounded-xl flex items-center justify-center shadow-lg">
                  <ArrowUpRight className="w-5 h-5 text-white" />
                </div>
                <span className="text-2xl font-bold bg-gradient-to-r from-[#004FED] to-[#0066FF] bg-clip-text text-transparent">
                  Upward
                </span>
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">Upward Marketing House</h1>
                <p className="text-sm text-gray-600">Professional Proposal</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <button
                onClick={handleCopyUrl}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-300 ${
                  copied 
                    ? 'bg-green-100 text-green-700' 
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                <Copy className="w-4 h-4" />
                <span>{copied ? 'Copied!' : 'Copy URL'}</span>
              </button>
              <button
                onClick={handleDownload}
                className="flex items-center space-x-2 px-4 py-2 bg-[#004FED] text-white rounded-lg text-sm font-semibold hover:bg-[#0066FF] transition-colors"
              >
                <Download className="w-4 h-4" />
                <span>Download PDF</span>
              </button>
              <button
                onClick={handleShare}
                className="flex items-center space-x-2 px-4 py-2 bg-green-600 text-white rounded-lg text-sm font-semibold hover:bg-green-700 transition-colors"
              >
                <Share2 className="w-4 h-4" />
                <span>Share</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <EditableText
              id={`${proposalType}-${proposalId}-hero-title`}
              defaultContent={`Digital Marketing Proposal for ${clientName}`}
              className="text-5xl md:text-6xl font-black text-gray-900 mb-6"
              tag="h1"
            />
            <EditableText
              id={`${proposalType}-${proposalId}-hero-subtitle`}
              defaultContent="Transform your digital presence with data-driven marketing strategies"
              className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto"
              tag="p"
            />
            <div className="flex items-center justify-center space-x-6 text-sm text-gray-500">
              <div className="flex items-center space-x-2">
                <Clock className="w-4 h-4" />
                <span>Proposal ID: {proposalId}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Award className="w-4 h-4" />
                <span>Premium Service</span>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative rounded-3xl overflow-hidden shadow-2xl mb-12">
            <EditableImage
              id={`${proposalType}-${proposalId}-hero-image`}
              defaultSrc="/images/digital-marketing-hero.jpg"
              alt="Digital Marketing Strategy"
              className="w-full h-64 md:h-96 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#004FED]/80 to-[#0066FF]/80 flex items-center justify-center">
              <div className="text-center text-white">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Scale Your Business?</h2>
                <p className="text-xl opacity-90">Let's discuss your digital marketing strategy</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Metrics Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <EditableText
            id={`${proposalType}-${proposalId}-metrics-title`}
            defaultContent="Expected Results"
            className="text-3xl font-bold text-gray-900 mb-12 text-center"
            tag="h2"
          />
          <div className="grid md:grid-cols-4 gap-8">
            {metrics.map((metric, index) => (
              <div key={index} className="text-center">
                <div className={`w-16 h-16 bg-gradient-to-r ${metric.color.replace('text-', 'bg-')} rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                  <metric.icon className="w-8 h-8 text-white" />
                </div>
                <div className={`text-3xl font-bold ${metric.color} mb-2`}>{metric.value}</div>
                <EditableText
                  id={`${proposalType}-${proposalId}-metric-${index}`}
                  defaultContent={metric.label}
                  className="text-lg font-semibold text-gray-900"
                  tag="h3"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <EditableText
            id={`${proposalType}-${proposalId}-services-title`}
            defaultContent="Our Digital Marketing Services"
            className="text-3xl font-bold text-gray-900 mb-12 text-center"
            tag="h2"
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: TrendingUp,
                title: 'Search Engine Optimization',
                description: 'Improve your search rankings and drive organic traffic',
                image: '/images/seo-service.jpg'
              },
              {
                icon: Target,
                title: 'Pay-Per-Click Advertising',
                description: 'Targeted ads for immediate traffic and conversions',
                image: '/images/ppc-service.jpg'
              },
              {
                icon: Users,
                title: 'Social Media Marketing',
                description: 'Engage your audience across all social platforms',
                image: '/images/social-service.jpg'
              },
              {
                icon: Award,
                title: 'Content Marketing',
                description: 'Create valuable content that converts visitors',
                image: '/images/content-service.jpg'
              },
              {
                icon: Star,
                title: 'Email Marketing',
                description: 'Nurture leads and drive repeat business',
                image: '/images/email-service.jpg'
              },
              {
                icon: DollarSign,
                title: 'Analytics & Reporting',
                description: 'Data-driven insights to optimize performance',
                image: '/images/analytics-service.jpg'
              }
            ].map((service, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden hover:shadow-2xl transition-all duration-300">
                <div className="h-48 overflow-hidden">
                  <EditableImage
                    id={`${proposalType}-${proposalId}-service-${index}-image`}
                    defaultSrc={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-[#004FED] to-[#0066FF] rounded-xl flex items-center justify-center mb-4">
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                  <EditableText
                    id={`${proposalType}-${proposalId}-service-${index}-title`}
                    defaultContent={service.title}
                    className="text-xl font-bold text-gray-900 mb-3"
                    tag="h3"
                  />
                  <EditableText
                    id={`${proposalType}-${proposalId}-service-${index}-desc`}
                    defaultContent={service.description}
                    className="text-gray-600"
                    tag="p"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <EditableText
            id={`${proposalType}-${proposalId}-pricing-title`}
            defaultContent="Choose Your Plan"
            className="text-3xl font-bold text-gray-900 mb-12 text-center"
            tag="h2"
          />
          <div className="grid md:grid-cols-3 gap-8">
            {pricingPackages.map((pkg) => (
              <div
                key={pkg.id}
                className={`relative bg-white rounded-2xl shadow-xl border-2 transition-all duration-300 cursor-pointer ${
                  selectedPackage === pkg.id
                    ? 'border-[#004FED] shadow-2xl scale-105'
                    : 'border-gray-200 hover:border-gray-300'
                } ${pkg.popular ? 'ring-2 ring-[#004FED]/20' : ''}`}
                onClick={() => setSelectedPackage(pkg.id)}
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-[#004FED] to-[#0066FF] text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="p-8">
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{pkg.name}</h3>
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-gray-900">{pkg.price}</span>
                      <span className="text-gray-600 ml-1">{pkg.period}</span>
                    </div>
                  </div>
                  <ul className="space-y-4 mb-8">
                    {pkg.features.map((feature, index) => (
                      <li key={index} className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <button
                    className={`w-full py-3 px-6 rounded-xl font-semibold transition-all duration-300 ${
                      selectedPackage === pkg.id
                        ? 'bg-gradient-to-r from-[#004FED] to-[#0066FF] text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {selectedPackage === pkg.id ? 'Selected' : 'Choose Plan'}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <EditableText
            id={`${proposalType}-${proposalId}-timeline-title`}
            defaultContent="Project Timeline"
            className="text-3xl font-bold text-gray-900 mb-12 text-center"
            tag="h2"
          />
          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gray-200"></div>
            <div className="space-y-8">
              {timeline.map((phase, index) => (
                <div key={index} className="relative flex items-start space-x-8">
                  <div className={`w-16 h-16 rounded-full flex items-center justify-center font-bold text-white ${
                    phase.status === 'completed' ? 'bg-green-500' :
                    phase.status === 'active' ? 'bg-[#004FED]' : 'bg-gray-300'
                  }`}>
                    {index + 1}
                  </div>
                  <div className="flex-1 bg-white rounded-2xl shadow-xl border border-gray-100 p-6">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-xl font-bold text-gray-900">{phase.phase}</h3>
                      <span className="text-sm text-gray-500">{phase.duration}</span>
                    </div>
                    <ul className="space-y-2">
                      {phase.tasks.map((task, taskIndex) => (
                        <li key={taskIndex} className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-[#004FED] rounded-full"></div>
                          <span className="text-gray-700">{task}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-[#004FED] to-[#0066FF]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <EditableText
            id={`${proposalType}-${proposalId}-cta-title`}
            defaultContent="Ready to Transform Your Digital Presence?"
            className="text-3xl md:text-4xl font-bold text-white mb-6"
            tag="h2"
          />
          <EditableText
            id={`${proposalType}-${proposalId}-cta-subtitle`}
            defaultContent="Let's discuss how we can help you achieve your marketing goals and drive real results for your business."
            className="text-xl text-white/90 mb-8"
            tag="p"
          />
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <button className="bg-white text-[#004FED] px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-colors flex items-center space-x-2">
              <span>Get Started Today</span>
              <ArrowRight className="w-5 h-5" />
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white hover:text-[#004FED] transition-colors">
              Schedule a Call
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-2 mx-auto mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-[#004FED] to-[#0066FF] rounded-xl flex items-center justify-center shadow-lg">
                <ArrowUpRight className="w-6 h-6 text-white" />
              </div>
              <span className="text-3xl font-bold text-white">Upward</span>
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Upward Marketing House</h3>
            <p className="text-gray-400 mb-6">Transforming businesses through digital innovation</p>
            <div className="flex items-center justify-center space-x-6 text-sm text-gray-400">
              <span>contact@upwardmm.com</span>
              <span>+95-9740977946</span>
              <span>www.upwardmm.com</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ModernProposalTemplate;
