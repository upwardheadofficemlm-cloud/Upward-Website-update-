import React from "react";

/**
 * A modern and professional loading screen component for an agency website.
 * Features a pulsing effect on the Upward logo.
 * @returns {JSX.Element} The LoadingScreen component.
 */
const LoadingScreen = () => {
  return (
    <div className="fixed inset-0 bg-white z-50 flex flex-col items-center justify-center text-black">
      
      {/* Container for the logo */}
      <div className="flex flex-col items-center justify-center text-center space-y-4">
        
        {/* The Upward Logo with a pulsing effect */}
        <img
          src="/upward_logo_primary-blue.png"
          alt="Upward Logo"
          className="h-20 w-auto object-contain animate-pulse"
        />
        
      </div>

      {/* Custom CSS for the pulsing animation */}
      <style>{`
        @keyframes pulse {
          0%, 100% {
            transform: scale(1);
            opacity: 1;
          }
          50% {
            transform: scale(1.1);
            opacity: 0.8;
          }
        }
        .animate-pulse {
          animation: pulse 2s infinite ease-in-out;
        }
      `}</style>
    </div>
  );
};

export default LoadingScreen;
