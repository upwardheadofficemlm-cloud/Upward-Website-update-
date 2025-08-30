import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useCMS } from '../contexts/CMSContext';
import { Settings, Edit3, LogOut, Eye, EyeOff, CheckCircle, FileText, Users, BarChart3, Home } from 'lucide-react';
import ProposalManager from '../components/cms/ProposalManager';

const AdminDashboardPage: React.FC = () => {
  const { isAdmin, isEditing, toggleEditing, logout } = useCMS();
  const navigate = useNavigate();
  const location = useLocation();
  const [activeTab, setActiveTab] = useState('proposals');
  const [showSuccess, setShowSuccess] = useState(false);
  const [showCreateForm, setShowCreateForm] = useState(false);

  // Handle URL parameters for direct navigation
  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const tabParam = searchParams.get('tab');
    const actionParam = searchParams.get('action');
    
    if (tabParam) {
      setActiveTab(tabParam);
    }
    
    if (actionParam === 'create' && tabParam === 'proposals') {
      setShowCreateForm(true);
    }
  }, [location.search]);

  // Redirect if not admin
  if (!isAdmin) {
    navigate('/admin');
    return null;
  }

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const handleToggleEditing = () => {
    toggleEditing();
    if (!isEditing) {
      setShowSuccess(true);
      setTimeout(() => setShowSuccess(false), 2000);
    }
  };

  const tabs = [
    { id: 'proposals', label: 'Proposals', icon: FileText },
    { id: 'analytics', label: 'Analytics', icon: BarChart3 },
    { id: 'users', label: 'Users', icon: Users },
    { id: 'settings', label: 'Settings', icon: Settings }
  ];

  const renderTabContent = () => {
    switch (activeTab) {
      case 'proposals':
        return <ProposalManager showCreateForm={showCreateForm} onCloseCreateForm={() => setShowCreateForm(false)} />;
      case 'analytics':
        return (
          <div className="bg-white rounded-3xl shadow-2xl border border-gray-100 p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Analytics Dashboard</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-gradient-to-r from-[#004FED]/10 to-[#0066FF]/10 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Total Proposals</h3>
                <p className="text-3xl font-bold text-[#004FED]">24</p>
                <p className="text-sm text-gray-600">+12% from last month</p>
              </div>
              <div className="bg-gradient-to-r from-green-500/10 to-green-600/10 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Accepted Proposals</h3>
                <p className="text-3xl font-bold text-green-600">18</p>
                <p className="text-sm text-gray-600">75% acceptance rate</p>
              </div>
              <div className="bg-gradient-to-r from-purple-500/10 to-purple-600/10 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Total Revenue</h3>
                <p className="text-3xl font-bold text-purple-600">$45,200</p>
                <p className="text-sm text-gray-600">+8% from last month</p>
              </div>
            </div>
          </div>
        );
      case 'users':
        return (
          <div className="bg-white rounded-3xl shadow-2xl border border-gray-100 p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">User Management</h2>
            <p className="text-gray-600">User management features coming soon...</p>
          </div>
        );
      case 'settings':
        return (
          <div className="bg-white rounded-3xl shadow-2xl border border-gray-100 p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Admin Settings</h2>
            <div className="space-y-6">
              <div className="flex items-center justify-between p-4 border border-gray-200 rounded-xl">
                <div>
                  <h3 className="font-semibold text-gray-900">Edit Mode</h3>
                  <p className="text-sm text-gray-600">Enable content editing on the website</p>
                </div>
                <button
                  onClick={handleToggleEditing}
                  className={`px-4 py-2 rounded-lg font-semibold transition-all duration-300 ${
                    isEditing
                      ? 'bg-gradient-to-r from-[#004FED] to-[#0066FF] text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {isEditing ? 'Enabled' : 'Disabled'}
                </button>
              </div>
              <div className="flex items-center justify-between p-4 border border-gray-200 rounded-xl">
                <div>
                  <h3 className="font-semibold text-gray-900">Admin Password</h3>
                  <p className="text-sm text-gray-600">Change admin panel password</p>
                </div>
                <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg font-semibold hover:bg-gray-200 transition-colors">
                  Change
                </button>
              </div>
            </div>
          </div>
        );
      default:
        return <ProposalManager />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#004FED]/5 via-white to-[#0066FF]/10">
      {/* Success Notification */}
      {showSuccess && (
        <div className="fixed top-6 right-6 z-50">
          <div className="bg-green-500 text-white px-6 py-4 rounded-xl shadow-2xl flex items-center space-x-3 animate-bounce">
            <CheckCircle className="w-6 h-6" />
            <span className="font-semibold">Edit mode activated!</span>
          </div>
        </div>
      )}

      {/* Header */}
      <div className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center space-x-4">
              <button
                onClick={() => navigate('/')}
                className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors"
              >
                <Home className="w-5 h-5" />
                <span className="font-semibold">Back to Website</span>
              </button>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium text-gray-600">Admin Active</span>
              </div>
              <button
                onClick={handleLogout}
                className="flex items-center space-x-2 px-4 py-2 bg-red-100 text-red-700 rounded-lg font-semibold hover:bg-red-200 transition-colors"
              >
                <LogOut className="w-4 h-4" />
                <span>Logout</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Admin Dashboard</h1>
          <p className="text-gray-600">Manage proposals, view analytics, and control your website</p>
        </div>

        {/* Navigation Tabs */}
        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-2 mb-8">
          <div className="flex space-x-2">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center space-x-2 px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                    activeTab === tab.id
                      ? 'bg-gradient-to-r from-[#004FED] to-[#0066FF] text-white shadow-lg'
                      : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Tab Content */}
        <div className="mb-8">
          {renderTabContent()}
        </div>

        {/* Quick Actions */}
        <div className="bg-white rounded-3xl shadow-2xl border border-gray-100 p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Quick Actions</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <button
              onClick={() => setActiveTab('proposals')}
              className="bg-gradient-to-r from-[#004FED]/10 to-[#0066FF]/10 rounded-xl p-6 text-left hover:shadow-lg transition-all duration-300"
            >
              <FileText className="w-8 h-8 text-[#004FED] mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Create New Proposal</h3>
              <p className="text-gray-600">Generate a new proposal for a client</p>
            </button>
            <button
              onClick={handleToggleEditing}
              className="bg-gradient-to-r from-green-500/10 to-green-600/10 rounded-xl p-6 text-left hover:shadow-lg transition-all duration-300"
            >
              <Edit3 className="w-8 h-8 text-green-600 mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Edit Website Content</h3>
              <p className="text-gray-600">Enable edit mode to modify website content</p>
            </button>
            <button
              onClick={() => navigate('/')}
              className="bg-gradient-to-r from-purple-500/10 to-purple-600/10 rounded-xl p-6 text-left hover:shadow-lg transition-all duration-300"
            >
              <Eye className="w-8 h-8 text-purple-600 mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">View Website</h3>
              <p className="text-gray-600">Go back to the main website</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboardPage;
