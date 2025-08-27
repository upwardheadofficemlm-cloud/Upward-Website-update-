import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCMS } from '../contexts/CMSContext';
import { Edit3, Lock, Eye, EyeOff } from 'lucide-react';

const AdminPage: React.FC = () => {
  const { login, isAdmin } = useCMS();
  const navigate = useNavigate();
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loginError, setLoginError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  // Redirect if already logged in
  useEffect(() => {
    if (isAdmin) {
      navigate('/');
    }
  }, [isAdmin, navigate]);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setLoginError('');

    try {
      if (login(password)) {
        // Success - redirect to home page
        navigate('/');
      } else {
        setLoginError('Invalid password. Please try again.');
        setPassword('');
      }
    } catch (error) {
      setLoginError('Login failed. Please try again.');
      setPassword('');
    } finally {
      setIsLoading(false);
    }
  };

  const handleBackToHome = () => {
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#004FED]/5 via-white to-[#0066FF]/10 flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl p-12 shadow-2xl border border-gray-100 w-full max-w-lg transform transition-all duration-300">
        <div className="text-center mb-10">
          <div className="w-24 h-24 bg-gradient-to-r from-[#004FED] to-[#0066FF] rounded-full flex items-center justify-center mx-auto mb-8 shadow-2xl animate-pulse">
            <Lock className="w-12 h-12 text-white" />
          </div>
          <h1 className="text-4xl font-black text-gray-900 mb-4">Admin Panel</h1>
          <p className="text-gray-600 text-xl font-medium">Enter password to access edit mode</p>
        </div>

        <form onSubmit={handleLogin} className="space-y-8">
          <div className="relative">
            <input
              type={showPassword ? 'text' : 'password'}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter admin password"
              className="w-full px-8 py-6 border-2 border-gray-200 rounded-2xl focus:outline-none focus:ring-4 focus:ring-[#004FED]/20 focus:border-[#004FED] text-xl transition-all duration-300 bg-gray-50 focus:bg-white pr-16"
              autoFocus
              disabled={isLoading}
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
            >
              {showPassword ? <EyeOff className="w-6 h-6" /> : <Eye className="w-6 h-6" />}
            </button>
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
              onClick={handleBackToHome}
              className="px-10 py-6 border-2 border-gray-300 text-gray-700 rounded-2xl hover:bg-gray-50 hover:border-gray-400 transition-all duration-300 font-bold text-lg"
            >
              Back
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
  );
};

export default AdminPage;

