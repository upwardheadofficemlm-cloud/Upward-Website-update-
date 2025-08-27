import React, { useState } from 'react';
import { useCMS } from '../../contexts/CMSContext';
import { Settings, Edit3, LogOut, Eye, EyeOff, CheckCircle } from 'lucide-react';

const AdminPanel: React.FC = () => {
  const { isAdmin, isEditing, toggleEditing, logout } = useCMS();
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
  if (!isAdmin) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <div className="bg-white/95 backdrop-blur-xl rounded-2xl shadow-3xl border border-white/50 p-6 min-w-[280px]">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-3">
            <div className="w-4 h-4 bg-green-500 rounded-full animate-pulse shadow-lg"></div>
            <span className="text-sm font-bold text-gray-700">Admin Panel Active</span>
          </div>
          <div className="w-8 h-8 bg-gradient-to-r from-[#004FED] to-[#0066FF] rounded-full flex items-center justify-center">
            <Settings className="w-4 h-4 text-white" />
          </div>
        </div>
        
        <div className="flex items-center space-x-3">
          <button
            onClick={handleToggleEditing}
            className={`flex items-center space-x-2 px-6 py-3 rounded-xl text-sm font-bold transition-all duration-300 flex-1 ${
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
            onClick={handleLogout}
            className="flex items-center space-x-2 px-4 py-3 bg-red-100 text-red-700 rounded-xl text-sm font-bold hover:bg-red-200 transition-colors"
            title="Logout"
          >
            <LogOut className="w-4 h-4" />
          </button>
        </div>

        {isEditing && (
          <div className="mt-4 pt-4 border-t border-gray-200">
            <div className="flex items-center space-x-2 text-xs text-gray-600">
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