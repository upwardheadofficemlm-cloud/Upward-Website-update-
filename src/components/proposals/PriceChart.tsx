import React, { useState } from 'react';
import { TrendingUp, TrendingDown, DollarSign, CheckCircle, Star } from 'lucide-react';
import EditableText from '../cms/EditableText';

interface PricingTier {
  id: string;
  name: string;
  price: string;
  period: string;
  features: string[];
  popular?: boolean;
  color: string;
  savings?: string;
  originalPrice?: string;
}

interface PriceChartProps {
  proposalId: string;
  proposalType: string;
  tiers: PricingTier[];
  onSelectTier?: (tierId: string) => void;
  selectedTier?: string;
}

const PriceChart: React.FC<PriceChartProps> = ({
  proposalId,
  proposalType,
  tiers,
  onSelectTier,
  selectedTier
}) => {
  const [hoveredTier, setHoveredTier] = useState<string | null>(null);

  const defaultTiers: PricingTier[] = [
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
      originalPrice: '$4,200',
      savings: 'Save $700/month',
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

  const displayTiers = tiers.length > 0 ? tiers : defaultTiers;

  return (
    <div className="w-full">
      <div className="text-center mb-12">
        <EditableText
          id={`${proposalType}-${proposalId}-pricing-title`}
          defaultContent="Choose Your Plan"
          className="text-3xl font-bold text-gray-900 mb-4"
          tag="h2"
        />
        <EditableText
          id={`${proposalType}-${proposalId}-pricing-subtitle`}
          defaultContent="Select the perfect plan for your business needs"
          className="text-lg text-gray-600"
          tag="p"
        />
      </div>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {displayTiers.map((tier) => (
          <div
            key={tier.id}
            className={`relative bg-white rounded-2xl shadow-xl border-2 transition-all duration-300 cursor-pointer transform ${
              selectedTier === tier.id
                ? 'border-[#004FED] shadow-2xl scale-105'
                : hoveredTier === tier.id
                ? 'border-gray-300 shadow-2xl scale-102'
                : 'border-gray-200 hover:border-gray-300'
            } ${tier.popular ? 'ring-2 ring-[#004FED]/20' : ''}`}
            onClick={() => onSelectTier?.(tier.id)}
            onMouseEnter={() => setHoveredTier(tier.id)}
            onMouseLeave={() => setHoveredTier(null)}
          >
            {tier.popular && (
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-gradient-to-r from-[#004FED] to-[#0066FF] text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center space-x-1">
                  <Star className="w-4 h-4" />
                  <span>Most Popular</span>
                </span>
              </div>
            )}

            {tier.savings && (
              <div className="absolute -top-2 -right-2">
                <span className="bg-green-500 text-white px-3 py-1 rounded-full text-xs font-semibold flex items-center space-x-1">
                  <TrendingDown className="w-3 h-3" />
                  <span>{tier.savings}</span>
                </span>
              </div>
            )}

            <div className="p-8">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{tier.name}</h3>
                <div className="flex items-baseline justify-center space-x-2">
                  {tier.originalPrice && (
                    <span className="text-lg text-gray-500 line-through">{tier.originalPrice}</span>
                  )}
                  <span className="text-4xl font-bold text-gray-900">{tier.price}</span>
                  <span className="text-gray-600">{tier.period}</span>
                </div>
                {tier.savings && (
                  <p className="text-sm text-green-600 font-semibold mt-2">{tier.savings}</p>
                )}
              </div>

              <div className="space-y-4 mb-8">
                {tier.features.map((feature, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>

              <button
                className={`w-full py-3 px-6 rounded-xl font-semibold transition-all duration-300 ${
                  selectedTier === tier.id
                    ? 'bg-gradient-to-r from-[#004FED] to-[#0066FF] text-white shadow-lg'
                    : `bg-gradient-to-r ${tier.color} text-white hover:shadow-lg`
                }`}
              >
                {selectedTier === tier.id ? 'Selected' : 'Choose Plan'}
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Additional Pricing Information */}
      <div className="mt-12 text-center">
        <div className="bg-gray-50 rounded-2xl p-8 max-w-4xl mx-auto">
          <EditableText
            id={`${proposalType}-${proposalId}-pricing-note`}
            defaultContent="All plans include a 30-day money-back guarantee and can be customized to meet your specific needs."
            className="text-lg text-gray-700 mb-4"
            tag="p"
          />
          <div className="flex items-center justify-center space-x-6 text-sm text-gray-600">
            <div className="flex items-center space-x-2">
              <CheckCircle className="w-4 h-4 text-green-500" />
              <span>30-day guarantee</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle className="w-4 h-4 text-green-500" />
              <span>Customizable plans</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle className="w-4 h-4 text-green-500" />
              <span>No setup fees</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PriceChart;
