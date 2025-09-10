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
    <>

      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
        {/* Hero Section */}
        <div className="bg-white shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-red-600 mb-6">
                Email Hosting
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                Professional email hosting with SSD storage, advanced security features, and 99.9% uptime guarantee. 
                Choose the perfect plan for your business needs.
              </p>
              <div className="inline-flex items-center bg-red-50 text-red-700 px-6 py-3 rounded-full text-lg font-semibold">
                <span className="mr-2">✓</span>
                Choosing the most suitable plan for your business
              </div>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="bg-red-600 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12">Email Hosting Features</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-red-600 text-sm font-bold">✓</span>
                  </div>
                  <p className="text-lg">Create unlimited email accounts within your specified storage limit</p>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-red-600 text-sm font-bold">✓</span>
                  </div>
                  <p className="text-lg">Use your own domain name for professional email addresses</p>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-red-600 text-sm font-bold">✓</span>
                  </div>
                  <p className="text-lg">Cloud server infrastructure ensures zero downtime</p>
                </div>
              </div>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-red-600 text-sm font-bold">✓</span>
                  </div>
                  <p className="text-lg">Dedicated SSD storage for optimal email performance</p>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-red-600 text-sm font-bold">✓</span>
                  </div>
                  <p className="text-lg">Real-time virus and spam protection</p>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-red-600 text-sm font-bold">✓</span>
                  </div>
                  <p className="text-lg">Self-managed control panel for easy administration</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Plan Comparison Section */}
        <div className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Choose Your Plan</h2>
            
            {/* Plan Toggle */}
            <div className="flex justify-center mb-12">
              <div className="bg-gray-100 rounded-lg p-1 flex">
                <button
                  onClick={() => setSelectedPlan('professional')}
                  className={`px-8 py-3 rounded-md font-semibold transition-all duration-200 ${
                    selectedPlan === 'professional'
                      ? 'bg-white text-red-600 shadow-sm'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  Professional
                </button>
                <button
                  onClick={() => setSelectedPlan('standard')}
                  className={`px-8 py-3 rounded-md font-semibold transition-all duration-200 ${
                    selectedPlan === 'standard'
                      ? 'bg-white text-red-600 shadow-sm'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  Standard
                </button>
              </div>
            </div>

            {/* Feature Comparison */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden mb-12">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-gray-50">
                      <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Plan Features</th>
                      <th className={`px-6 py-4 text-center text-sm font-semibold ${
                        selectedPlan === 'professional' ? 'text-red-600 bg-red-50' : 'text-gray-600'
                      }`}>
                        Professional
                      </th>
                      <th className={`px-6 py-4 text-center text-sm font-semibold ${
                        selectedPlan === 'standard' ? 'text-red-600 bg-red-50' : 'text-gray-600'
                      }`}>
                        Standard
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr>
                      <td className="px-6 py-4 text-sm text-gray-900">SSD Enterprise Harddisk</td>
                      <td className="px-6 py-4 text-center">
                        <span className="text-green-500 text-xl">✓</span>
                      </td>
                      <td className="px-6 py-4 text-center">
                        <span className="text-green-500 text-xl">✓</span>
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 text-sm text-gray-900">Unlimited Accounts</td>
                      <td className="px-6 py-4 text-center">
                        <span className="text-green-500 text-xl">✓</span>
                      </td>
                      <td className="px-6 py-4 text-center">
                        <span className="text-green-500 text-xl">✓</span>
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 text-sm text-gray-900">name@yourdomain.com</td>
                      <td className="px-6 py-4 text-center">
                        <span className="text-green-500 text-xl">✓</span>
                      </td>
                      <td className="px-6 py-4 text-center">
                        <span className="text-green-500 text-xl">✓</span>
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 text-sm text-gray-900">Anti-Virus Protection</td>
                      <td className="px-6 py-4 text-center">
                        <span className="text-green-500 text-xl">✓</span>
                      </td>
                      <td className="px-6 py-4 text-center">
                        <span className="text-green-500 text-xl">✓</span>
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 text-sm text-gray-900">Anti-Spam Protection</td>
                      <td className="px-6 py-4 text-center">
                        <span className="text-green-500 text-xl">✓</span>
                      </td>
                      <td className="px-6 py-4 text-center">
                        <span className="text-green-500 text-xl">✓</span>
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 text-sm text-gray-900">Backup Frequency</td>
                      <td className="px-6 py-4 text-center text-sm text-gray-900">2 Layer Daily</td>
                      <td className="px-6 py-4 text-center text-sm text-gray-900">1 Layer Weekly</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 text-sm text-gray-900">Backup Server</td>
                      <td className="px-6 py-4 text-center">
                        <span className="text-green-500 text-xl">✓</span>
                      </td>
                      <td className="px-6 py-4 text-center">
                        <span className="text-red-500 text-xl">✗</span>
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 text-sm text-gray-900">Suitable For</td>
                      <td className="px-6 py-4 text-center text-sm text-gray-900">Small, Medium, Big Company</td>
                      <td className="px-6 py-4 text-center text-sm text-gray-900">General Use</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Pricing Table */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className="bg-gray-50 px-6 py-4">
                <h3 className="text-xl font-bold text-gray-900">Storage & Pricing</h3>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-gray-50 border-b">
                      <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Storage & Price</th>
                      <th className={`px-6 py-4 text-center text-sm font-semibold ${
                        selectedPlan === 'professional' ? 'text-red-600 bg-red-50' : 'text-gray-600'
                      }`}>
                        Professional
                      </th>
                      <th className={`px-6 py-4 text-center text-sm font-semibold ${
                        selectedPlan === 'standard' ? 'text-red-600 bg-red-50' : 'text-gray-600'
                      }`}>
                        Standard
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {pricingData.map((item) => (
                      <tr key={item.id} className="hover:bg-gray-50 transition-colors">
                        <td className="px-6 py-4">
                          <div className="flex items-center">
                            <span className="bg-red-600 text-white text-xs font-bold px-2 py-1 rounded mr-3">
                              {item.id}
                            </span>
                            <span className="text-sm font-medium text-gray-900">
                              {item.storage} (SSD)
                            </span>
                          </div>
                        </td>
                        <td className="px-6 py-4 text-center">
                          <div className="text-lg font-bold text-gray-900">
                            {formatPrice(item.professional)} MMK/year
                          </div>
                        </td>
                        <td className="px-6 py-4 text-center">
                          <div className="text-lg font-bold text-gray-900">
                            {formatPrice(item.standard)} MMK/year
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Order Buttons */}
            <div className="mt-12 grid md:grid-cols-2 gap-6">
              <div className="text-center">
                <button className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-8 rounded-lg text-lg transition-colors duration-200 flex items-center justify-center">
                  Order Now
                  <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
                <p className="text-sm text-gray-600 mt-2">Professional Plan</p>
              </div>
              <div className="text-center">
                <button className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-8 rounded-lg text-lg transition-colors duration-200 flex items-center justify-center">
                  Order Now
                  <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
                <p className="text-sm text-gray-600 mt-2">Standard Plan</p>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Information */}
        <div className="bg-gray-50 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-8">Why Choose Our Email Hosting?</h3>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">99.9% Uptime</h4>
                  <p className="text-gray-600">Reliable cloud infrastructure ensures your email is always accessible</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Advanced Security</h4>
                  <p className="text-gray-600">Real-time virus and spam protection keeps your emails safe</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Easy Management</h4>
                  <p className="text-gray-600">Self-managed control panel for complete control over your email accounts</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EmailHostingPage;
