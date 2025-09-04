import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCMS } from '../../contexts/CMSContext';
import { Settings, Edit3, LogOut, Eye, EyeOff, CheckCircle, LayoutDashboard, FileText, Plus, List, Moon, Sun } from 'lucide-react';

const AdminPanel: React.FC = () => {
  const { isAdmin, isEditing, isDarkMode, toggleEditing, toggleDarkMode, logout } = useCMS();
  const navigate = useNavigate();
  const [showSuccess, setShowSuccess] = useState(false);

  const handleLogout = () => {
    logout();
  };

  const handleToggleEditing = () => {
    toggleEditing();
    if (!isEditing) {
      setShowSuccess(true);
      setTimeout(() => setShowSuccess(false), 2000);
    }
  };

  // Success notification
  if (showSuccess) {
    return (
      <div className="fixed top-6 right-6 z-50">
        <div className="bg-green-500 text-white px-6 py-4 rounded-xl shadow-2xl flex items-center space-x-3 animate-bounce">
          <CheckCircle className="w-6 h-6" />
          <span className="font-semibold">
            {isEditing ? 'Edit mode activated!' : 'Login successful!'}
          </span>
        </div>
      </div>
    );
  }

  // Only show admin panel if user is already logged in as admin
  if (!isAdmin) {
    console.log('AdminPanel: User is not admin, not showing panel');
    return null;
  }
  
  console.log('AdminPanel: User is admin, showing panel');

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <div className="bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl rounded-2xl shadow-3xl border border-white/50 dark:border-gray-700/50 p-6 min-w-[320px]">
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-3">
            <div className="w-4 h-4 bg-green-500 rounded-full animate-pulse shadow-lg"></div>
            <span className="text-sm font-bold text-gray-700 dark:text-gray-200">Admin Panel Active</span>
          </div>
          <div className="flex items-center space-x-2">
            <button
              onClick={toggleDarkMode}
              className="w-8 h-8 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              title={isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            >
              {isDarkMode ? <Sun className="w-4 h-4 text-gray-600 dark:text-gray-300" /> : <Moon className="w-4 h-4 text-gray-600 dark:text-gray-300" />}
            </button>
            <div className="w-8 h-8 bg-gradient-to-r from-[#004FED] to-[#0066FF] rounded-full flex items-center justify-center">
              <Settings className="w-4 h-4 text-white" />
            </div>
          </div>
        </div>

        
        {/* Main Actions */}
        <div className="flex items-center space-x-3 mb-4">
          <button
            onClick={handleToggleEditing}
            className={`flex items-center space-x-2 px-4 py-3 rounded-xl text-sm font-bold transition-all duration-300 ${
              isEditing
                ? 'bg-gradient-to-r from-[#004FED] to-[#0066FF] text-white shadow-lg hover:shadow-xl'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
            title={isEditing ? 'Exit Edit Mode' : 'Enter Edit Mode'}
          >
            {isEditing ? <EyeOff className="w-4 h-4" /> : <Edit3 className="w-4 h-4" />}
            <span>{isEditing ? 'Exit Edit' : 'Edit Mode'}</span>
          </button>
          
          <button
            onClick={() => navigate('/admin/dashboard')}
            className="flex items-center space-x-2 px-4 py-3 bg-[#004FED] text-white rounded-xl text-sm font-bold hover:bg-[#0066FF] transition-colors"
            title="Admin Dashboard"
          >
            <LayoutDashboard className="w-4 h-4" />
          </button>
          
          <button
            onClick={handleLogout}
            className="flex items-center space-x-2 px-4 py-3 bg-red-100 text-red-700 rounded-xl text-sm font-bold hover:bg-red-200 transition-colors"
            title="Logout"
          >
            <LogOut className="w-4 h-4" />
          </button>
        </div>

        {isEditing && (
          <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
            <div className="flex items-center space-x-2 text-xs text-gray-600 dark:text-gray-400">
              <Eye className="w-4 h-4 text-[#004FED]" />
              <span>Click any text or image to edit. Changes save automatically to Firebase.</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminPanel;