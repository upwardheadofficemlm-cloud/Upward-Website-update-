import React, { useState } from 'react';

const EmailHostingPage: React.FC = () => {
  const [selectedPlan, setSelectedPlan] = useState<'professional' | 'standard'>('professional');
  
  // Force deployment update

  // Pricing data based on the screenshots (original prices only)
  const pricingData = [
    { id: 'E1', storage: '1GB', professional: 120960, standard: 80640 },
    { id: 'E2', storage: '2GB', professional: 181440, standard: 120960 },
    { id: 'E3', storage: '3GB', professional: 257040, standard: 171360 },
    { id: 'E4', storage: '4GB', professional: 321300, standard: 214200 },
    { id: 'E5', storage: '5GB', professional: 403200, standard: 268800 },
    { id: 'E6', storage: '6GB', professional: 483840, standard: 322560 },
    { id: 'E7', storage: '7GB', professional: 564480, standard: 376320 },
    { id: 'E8', storage: '8GB', professional: 645120, standard: 430080 },
    { id: 'E9', storage: '9GB', professional: 725760, standard: 483840 },
    { id: 'E10', storage: '10GB', professional: 806400, standard: 537600 },
    { id: 'E11', storage: '20GB', professional: 1612800, standard: 1075200 },
    { id: 'E12', storage: '50GB', professional: 4032000, standard: 2688000 },
    { id: 'E13', storage: '100GB', professional: 8064000, standard: 5376000 },
    { id: 'E14', storage: '500GB', professional: 40320000, standard: 26880000 },
    { id: 'E15', storage: '1000GB', professional: 80640000, standard: 53760000 },
  ];

  const formatPrice = (price: number) => {
    return price.toLocaleString('en-US');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white pt-24">
        {/* Hero Section */}
        <div className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[#004FED]/5 via-white to-[#0066FF]/10"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div className="text-center">
              <div className="inline-flex items-center bg-gradient-to-r from-[#004FED] to-[#0066FF] text-white px-6 py-2 rounded-full text-sm font-semibold mb-6">
                <span className="mr-2">📧</span>
                Professional Email Solutions
              </div>
              <h1 className="text-5xl md:text-7xl font-black text-gray-900 mb-6">
                Email <span className="bg-gradient-to-r from-[#004FED] to-[#0066FF] bg-clip-text text-transparent">Hosting</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
                Enterprise-grade email hosting with SSD storage, advanced security, and 99.9% uptime guarantee. 
                Scale your business communication with confidence.
              </p>
              <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-500">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-[#004FED] rounded-full mr-2"></div>
                  Unlimited Accounts
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-[#0066FF] rounded-full mr-2"></div>
                  SSD Storage
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-[#0080FF] rounded-full mr-2"></div>
                  Anti-Virus Protection
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-[#0099FF] rounded-full mr-2"></div>
                  99.9% Uptime
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
                Why Choose Our <span className="bg-gradient-to-r from-[#004FED] to-[#0066FF] bg-clip-text text-transparent">Email Hosting</span>?
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Enterprise-grade features designed for modern businesses
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="group p-8 rounded-2xl bg-gradient-to-br from-[#004FED]/5 to-[#0066FF]/10 hover:from-[#004FED]/10 hover:to-[#0066FF]/20 transition-all duration-300 border border-gray-100 hover:border-[#004FED]/20">
                <div className="w-12 h-12 bg-gradient-to-r from-[#004FED] to-[#0066FF] rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-white text-xl">👥</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Unlimited Accounts</h3>
                <p className="text-gray-600">Create unlimited email accounts within your specified storage limit for maximum flexibility.</p>
              </div>
              
              <div className="group p-8 rounded-2xl bg-gradient-to-br from-[#0066FF]/5 to-[#0080FF]/10 hover:from-[#0066FF]/10 hover:to-[#0080FF]/20 transition-all duration-300 border border-gray-100 hover:border-[#0066FF]/20">
                <div className="w-12 h-12 bg-gradient-to-r from-[#0066FF] to-[#0080FF] rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-white text-xl">🏢</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Custom Domain</h3>
                <p className="text-gray-600">Use your own domain name for professional email addresses that build trust.</p>
              </div>
              
              <div className="group p-8 rounded-2xl bg-gradient-to-br from-[#0080FF]/5 to-[#0099FF]/10 hover:from-[#0080FF]/10 hover:to-[#0099FF]/20 transition-all duration-300 border border-gray-100 hover:border-[#0080FF]/20">
                <div className="w-12 h-12 bg-gradient-to-r from-[#0080FF] to-[#0099FF] rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-white text-xl">☁️</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Cloud Infrastructure</h3>
                <p className="text-gray-600">Cloud server infrastructure ensures zero downtime and maximum reliability.</p>
              </div>
              
              <div className="group p-8 rounded-2xl bg-gradient-to-br from-[#004FED]/5 to-[#0080FF]/10 hover:from-[#004FED]/10 hover:to-[#0080FF]/20 transition-all duration-300 border border-gray-100 hover:border-[#004FED]/20">
                <div className="w-12 h-12 bg-gradient-to-r from-[#004FED] to-[#0080FF] rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-white text-xl">💾</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">SSD Storage</h3>
                <p className="text-gray-600">Dedicated SSD storage for optimal email performance and lightning-fast access.</p>
              </div>
              
              <div className="group p-8 rounded-2xl bg-gradient-to-br from-[#0066FF]/5 to-[#0099FF]/10 hover:from-[#0066FF]/10 hover:to-[#0099FF]/20 transition-all duration-300 border border-gray-100 hover:border-[#0066FF]/20">
                <div className="w-12 h-12 bg-gradient-to-r from-[#0066FF] to-[#0099FF] rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-white text-xl">🛡️</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Advanced Security</h3>
                <p className="text-gray-600">Real-time virus and spam protection keeps your emails secure and clean.</p>
              </div>
              
              <div className="group p-8 rounded-2xl bg-gradient-to-br from-[#0080FF]/5 to-[#004FED]/10 hover:from-[#0080FF]/10 hover:to-[#004FED]/20 transition-all duration-300 border border-gray-100 hover:border-[#0080FF]/20">
                <div className="w-12 h-12 bg-gradient-to-r from-[#0080FF] to-[#004FED] rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-white text-xl">⚙️</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Easy Management</h3>
                <p className="text-gray-600">Self-managed control panel for easy administration and complete control.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Plan Comparison Section */}
        <div className="py-20 bg-gradient-to-br from-gray-50 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
                Choose Your <span className="bg-gradient-to-r from-[#004FED] to-[#0066FF] bg-clip-text text-transparent">Perfect Plan</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Flexible pricing options designed to scale with your business needs
              </p>
            </div>
            
            {/* Plan Toggle */}
            <div className="flex justify-center mb-16">
              <div className="bg-white rounded-2xl p-2 shadow-lg border border-gray-100 flex">
                <button
                  onClick={() => setSelectedPlan('professional')}
                  className={`px-8 py-4 rounded-xl font-bold transition-all duration-300 ${
                    selectedPlan === 'professional'
                      ? 'bg-gradient-to-r from-[#004FED] to-[#0066FF] text-white shadow-lg transform scale-105'
                      : 'text-gray-600 hover:text-[#004FED] hover:bg-gray-50'
                  }`}
                >
                  Professional
                </button>
                <button
                  onClick={() => setSelectedPlan('standard')}
                  className={`px-8 py-4 rounded-xl font-bold transition-all duration-300 ${
                    selectedPlan === 'standard'
                      ? 'bg-gradient-to-r from-[#004FED] to-[#0066FF] text-white shadow-lg transform scale-105'
                      : 'text-gray-600 hover:text-[#004FED] hover:bg-gray-50'
                  }`}
                >
                  Standard
                </button>
              </div>
            </div>

            {/* Feature Comparison */}
            <div className="bg-white rounded-3xl shadow-2xl overflow-hidden mb-16 border border-gray-100">
              <div className="bg-gradient-to-r from-[#004FED] to-[#0066FF] px-8 py-6">
                <h3 className="text-2xl font-bold text-white text-center">Plan Comparison</h3>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-gray-50">
                      <th className="px-8 py-6 text-left text-lg font-bold text-gray-900">Features</th>
                      <th className={`px-8 py-6 text-center text-lg font-bold ${
                        selectedPlan === 'professional' ? 'text-[#004FED] bg-gradient-to-br from-[#004FED]/10 to-[#0066FF]/10' : 'text-gray-600'
                      }`}>
                        Professional
                      </th>
                      <th className={`px-8 py-6 text-center text-lg font-bold ${
                        selectedPlan === 'standard' ? 'text-[#004FED] bg-gradient-to-br from-[#004FED]/10 to-[#0066FF]/10' : 'text-gray-600'
                      }`}>
                        Standard
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    <tr className="hover:bg-gray-50 transition-colors">
                      <td className="px-8 py-6 text-lg font-medium text-gray-900">SSD Enterprise Storage</td>
                      <td className="px-8 py-6 text-center">
                        <div className="w-8 h-8 bg-gradient-to-r from-[#004FED] to-[#0066FF] rounded-full flex items-center justify-center mx-auto">
                          <span className="text-white text-lg">✓</span>
                        </div>
                      </td>
                      <td className="px-8 py-6 text-center">
                        <div className="w-8 h-8 bg-gradient-to-r from-[#004FED] to-[#0066FF] rounded-full flex items-center justify-center mx-auto">
                          <span className="text-white text-lg">✓</span>
                        </div>
                      </td>
                    </tr>
                    <tr className="hover:bg-gray-50 transition-colors">
                      <td className="px-8 py-6 text-lg font-medium text-gray-900">Unlimited Email Accounts</td>
                      <td className="px-8 py-6 text-center">
                        <div className="w-8 h-8 bg-gradient-to-r from-[#004FED] to-[#0066FF] rounded-full flex items-center justify-center mx-auto">
                          <span className="text-white text-lg">✓</span>
                        </div>
                      </td>
                      <td className="px-8 py-6 text-center">
                        <div className="w-8 h-8 bg-gradient-to-r from-[#004FED] to-[#0066FF] rounded-full flex items-center justify-center mx-auto">
                          <span className="text-white text-lg">✓</span>
                        </div>
                      </td>
                    </tr>
                    <tr className="hover:bg-gray-50 transition-colors">
                      <td className="px-8 py-6 text-lg font-medium text-gray-900">Custom Domain Email</td>
                      <td className="px-8 py-6 text-center">
                        <div className="w-8 h-8 bg-gradient-to-r from-[#004FED] to-[#0066FF] rounded-full flex items-center justify-center mx-auto">
                          <span className="text-white text-lg">✓</span>
                        </div>
                      </td>
                      <td className="px-8 py-6 text-center">
                        <div className="w-8 h-8 bg-gradient-to-r from-[#004FED] to-[#0066FF] rounded-full flex items-center justify-center mx-auto">
                          <span className="text-white text-lg">✓</span>
                        </div>
                      </td>
                    </tr>
                    <tr className="hover:bg-gray-50 transition-colors">
                      <td className="px-8 py-6 text-lg font-medium text-gray-900">Anti-Virus Protection</td>
                      <td className="px-8 py-6 text-center">
                        <div className="w-8 h-8 bg-gradient-to-r from-[#004FED] to-[#0066FF] rounded-full flex items-center justify-center mx-auto">
                          <span className="text-white text-lg">✓</span>
                        </div>
                      </td>
                      <td className="px-8 py-6 text-center">
                        <div className="w-8 h-8 bg-gradient-to-r from-[#004FED] to-[#0066FF] rounded-full flex items-center justify-center mx-auto">
                          <span className="text-white text-lg">✓</span>
                        </div>
                      </td>
                    </tr>
                    <tr className="hover:bg-gray-50 transition-colors">
                      <td className="px-8 py-6 text-lg font-medium text-gray-900">Anti-Spam Protection</td>
                      <td className="px-8 py-6 text-center">
                        <div className="w-8 h-8 bg-gradient-to-r from-[#004FED] to-[#0066FF] rounded-full flex items-center justify-center mx-auto">
                          <span className="text-white text-lg">✓</span>
                        </div>
                      </td>
                      <td className="px-8 py-6 text-center">
                        <div className="w-8 h-8 bg-gradient-to-r from-[#004FED] to-[#0066FF] rounded-full flex items-center justify-center mx-auto">
                          <span className="text-white text-lg">✓</span>
                        </div>
                      </td>
                    </tr>
                    <tr className="hover:bg-gray-50 transition-colors">
                      <td className="px-8 py-6 text-lg font-medium text-gray-900">Backup Frequency</td>
                      <td className="px-8 py-6 text-center">
                        <span className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-[#004FED] to-[#0066FF] text-white rounded-full text-sm font-semibold">
                          2 Layer Daily
                        </span>
                      </td>
                      <td className="px-8 py-6 text-center">
                        <span className="inline-flex items-center px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-semibold">
                          1 Layer Weekly
                        </span>
                      </td>
                    </tr>
                    <tr className="hover:bg-gray-50 transition-colors">
                      <td className="px-8 py-6 text-lg font-medium text-gray-900">Backup Server</td>
                      <td className="px-8 py-6 text-center">
                        <div className="w-8 h-8 bg-gradient-to-r from-[#004FED] to-[#0066FF] rounded-full flex items-center justify-center mx-auto">
                          <span className="text-white text-lg">✓</span>
                        </div>
                      </td>
                      <td className="px-8 py-6 text-center">
                        <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center mx-auto">
                          <span className="text-gray-600 text-lg">✗</span>
                        </div>
                      </td>
                    </tr>
                    <tr className="hover:bg-gray-50 transition-colors">
                      <td className="px-8 py-6 text-lg font-medium text-gray-900">Target Audience</td>
                      <td className="px-8 py-6 text-center">
                        <span className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-[#004FED] to-[#0066FF] text-white rounded-full text-sm font-semibold">
                          Enterprise
                        </span>
                      </td>
                      <td className="px-8 py-6 text-center">
                        <span className="inline-flex items-center px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-semibold">
                          General Use
                        </span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Pricing Table */}
            <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100">
              <div className="bg-gradient-to-r from-[#004FED] to-[#0066FF] px-8 py-6">
                <h3 className="text-2xl font-bold text-white text-center">Storage & Pricing</h3>
                <p className="text-blue-100 text-center mt-2">Choose the perfect storage size for your needs</p>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-gray-50 border-b border-gray-100">
                      <th className="px-8 py-6 text-left text-lg font-bold text-gray-900">Storage Plans</th>
                      <th className={`px-8 py-6 text-center text-lg font-bold ${
                        selectedPlan === 'professional' ? 'text-[#004FED] bg-gradient-to-br from-[#004FED]/10 to-[#0066FF]/10' : 'text-gray-600'
                      }`}>
                        Professional
                      </th>
                      <th className={`px-8 py-6 text-center text-lg font-bold ${
                        selectedPlan === 'standard' ? 'text-[#004FED] bg-gradient-to-br from-[#004FED]/10 to-[#0066FF]/10' : 'text-gray-600'
                      }`}>
                        Standard
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    {pricingData.map((item) => (
                      <tr key={item.id} className="hover:bg-gradient-to-r hover:from-[#004FED]/5 hover:to-[#0066FF]/5 transition-all duration-200">
                        <td className="px-8 py-6">
                          <div className="flex items-center">
                            <div className="w-12 h-12 bg-gradient-to-r from-[#004FED] to-[#0066FF] rounded-xl flex items-center justify-center mr-4">
                              <span className="text-white font-bold text-sm">{item.id}</span>
                            </div>
                            <div>
                              <div className="text-lg font-bold text-gray-900">{item.storage} SSD</div>
                              <div className="text-sm text-gray-500">Enterprise Storage</div>
                            </div>
                          </div>
                        </td>
                        <td className="px-8 py-6 text-center">
                          <div className="space-y-2">
                            <div className="text-2xl font-black text-gray-900">
                              {formatPrice(item.professional)}
                            </div>
                            <div className="text-sm text-gray-500">MMK/year</div>
                            <div className="inline-flex items-center px-3 py-1 bg-gradient-to-r from-[#004FED] to-[#0066FF] text-white rounded-full text-xs font-semibold">
                              Enterprise
                            </div>
                          </div>
                        </td>
                        <td className="px-8 py-6 text-center">
                          <div className="space-y-2">
                            <div className="text-2xl font-black text-gray-900">
                              {formatPrice(item.standard)}
                            </div>
                            <div className="text-sm text-gray-500">MMK/year</div>
                            <div className="inline-flex items-center px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-semibold">
                              Standard
                            </div>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Order Buttons */}
            <div className="mt-16 grid md:grid-cols-2 gap-8">
              <div className="text-center">
                <button className="group w-full bg-gradient-to-r from-[#004FED] to-[#0066FF] hover:from-[#0066FF] hover:to-[#004FED] text-white font-bold py-6 px-8 rounded-2xl text-xl transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-2xl transform hover:scale-105">
                  <span>Get Professional Plan</span>
                  <svg className="ml-3 w-6 h-6 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
                <p className="text-sm text-gray-600 mt-3 font-medium">Enterprise-grade email hosting</p>
              </div>
              <div className="text-center">
                <button className="group w-full bg-gradient-to-r from-[#0066FF] to-[#0080FF] hover:from-[#0080FF] hover:to-[#0066FF] text-white font-bold py-6 px-8 rounded-2xl text-xl transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-2xl transform hover:scale-105">
                  <span>Get Standard Plan</span>
                  <svg className="ml-3 w-6 h-6 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
                <p className="text-sm text-gray-600 mt-3 font-medium">Perfect for small businesses</p>
              </div>
            </div>
          </div>
        </div>

    </div>
  );
};

export default EmailHostingPage;
