import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Settings, Lock } from 'lucide-react';
import { useCMS } from '../contexts/CMSContext';

const SettingsButton: React.FC = () => {
  const navigate = useNavigate();
  const cms = useCMS();
  const { isAdmin, login } = cms;
  const [showTooltip, setShowTooltip] = useState(false);
  const [showPasswordModal, setShowPasswordModal] = useState(false);
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSettingsClick = () => {
    if (isAdmin) {
      // If already logged in, navigate to admin page
      navigate('/admin');
    } else {
      // Show password modal
      setShowPasswordModal(true);
    }
  };

  const handlePasswordSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setLoginError('');

    try {
      if (login(password)) {
        // Success - navigate to admin page
        setShowPasswordModal(false);
        setPassword('');
        navigate('/admin');
      } else {
        setLoginError('Invalid password. Please try again.');
        setPassword('');
      }
    } catch {
      setLoginError('Login failed. Please try again.');
      setPassword('');
    } finally {
      setIsLoading(false);
    }
  };

  const handleCloseModal = () => {
    setShowPasswordModal(false);
    setPassword('');
    setLoginError('');
  };

  return (
    <>
      {/* Settings Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <button
          onClick={handleSettingsClick}
          onMouseEnter={() => setShowTooltip(true)}
          onMouseLeave={() => setShowTooltip(false)}
          className="bg-gradient-to-r from-[#004FED] to-[#0066FF] text-white p-4 rounded-full shadow-2xl hover:shadow-3xl hover:scale-110 transition-all duration-300 group"
        >
          <Settings className="w-6 h-6" />
          
          {/* Tooltip */}
          {showTooltip && (
            <div className="absolute bottom-full right-0 mb-3 px-3 py-2 bg-gray-900 text-white text-sm rounded-lg shadow-lg whitespace-nowrap">
              {isAdmin ? 'Go to Admin Panel' : 'Admin Settings'}
              <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900"></div>
            </div>
          )}
        </button>
      </div>

      {/* Password Modal */}
      {showPasswordModal && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-md z-[9999] flex items-center justify-center p-4 min-h-screen">
          <div className="bg-white rounded-3xl p-12 shadow-2xl border border-gray-100 w-full max-w-lg transform transition-all duration-300 scale-100 mx-auto my-auto">
            <div className="text-center mb-10">
              <div className="w-24 h-24 bg-gradient-to-r from-[#004FED] to-[#0066FF] rounded-full flex items-center justify-center mx-auto mb-8 shadow-2xl animate-pulse">
                <Lock className="w-12 h-12 text-white" />
              </div>
              <h2 className="text-4xl font-black text-gray-900 mb-4">Admin Access</h2>
              <p className="text-gray-600 text-xl font-medium">Enter password to access admin panel</p>
            </div>

            <form onSubmit={handlePasswordSubmit} className="space-y-8">
              <div className="relative">
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter admin password"
                  className="w-full px-8 py-6 border-2 border-gray-200 rounded-2xl focus:outline-none focus:ring-4 focus:ring-[#004FED]/20 focus:border-[#004FED] text-xl transition-all duration-300 bg-gray-50 focus:bg-white"
                  autoFocus
                  disabled={isLoading}
                />
                {loginError && (
                  <div className="text-red-500 text-base mt-4 font-medium bg-red-50 p-3 rounded-xl border border-red-200">
                    {loginError}
                  </div>
                )}
              </div>

              <div className="flex space-x-4">
                <button
                  type="submit"
                  disabled={!password.trim() || isLoading}
                  className="flex-1 bg-gradient-to-r from-[#004FED] to-[#0066FF] text-white py-6 rounded-2xl font-bold text-xl hover:shadow-2xl hover:shadow-[#004FED]/30 transform hover:-translate-y-1 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                >
                  {isLoading ? (
                    <div className="flex items-center justify-center space-x-2">
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      <span>Logging in...</span>
                    </div>
                  ) : (
                    'Access Admin Panel'
                  )}
                </button>
                <button
                  type="button"
                  onClick={handleCloseModal}
                  className="px-10 py-6 border-2 border-gray-300 text-gray-700 rounded-2xl hover:bg-gray-50 hover:border-gray-400 transition-all duration-300 font-bold text-lg"
                >
                  Cancel
                </button>
              </div>
            </form>

            <div className="mt-8 text-center">
              <p className="text-sm text-gray-500">
                Need help? Contact the development team.
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default SettingsButton;
