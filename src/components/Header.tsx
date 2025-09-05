import React, { useState } from 'react';
import { Menu, X, ArrowUpRight, LogIn } from 'lucide-react';
import { trackEmployeeLoginClick } from './MetaPixel';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'Services', href: '#services' },
    { label: 'About', href: '#about' },
    { label: 'Portfolio', href: '#portfolio' },
    { label: 'Team', href: '#team' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-xl border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-br from-[#004FED] to-[#0066FF] rounded-xl flex items-center justify-center shadow-lg">
              <ArrowUpRight className="w-5 h-5 text-white" />
            </div>
            <span className="text-3xl font-bold bg-gradient-to-r from-[#004FED] to-[#0066FF] bg-clip-text text-transparent">
              Upward
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-gray-700 hover:text-[#004FED] transition-all duration-300 font-medium text-lg relative group"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#004FED] transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href="https://upwardmm.app/#/login"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-gray-600 hover:text-[#004FED] transition-all duration-300 px-4 py-2 rounded-xl hover:bg-gray-50"
              onClick={trackEmployeeLoginClick}
            >
              <LogIn className="w-5 h-5" />
              <span className="font-medium">Employee Login</span>
            </a>
            <a
              href="#contact"
              className="bg-gradient-to-r from-[#004FED] to-[#0066FF] text-white px-8 py-3 rounded-xl hover:shadow-xl hover:shadow-[#004FED]/25 transform hover:-translate-y-1 transition-all duration-300 font-semibold"
            >
              Get Started
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-3 rounded-xl hover:bg-gray-100 transition-colors duration-300"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-6 border-t border-gray-100">
            <nav className="flex flex-col space-y-2">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-gray-700 hover:text-[#004FED] transition-colors duration-300 font-medium py-3 px-4 rounded-xl hover:bg-gray-50"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <a
                href="https://upwardmm.app/#/login"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-gray-600 hover:text-[#004FED] transition-colors duration-300 py-3 px-4 rounded-xl hover:bg-gray-50"
                onClick={() => {
                  setIsMenuOpen(false);
                  trackEmployeeLoginClick();
                }}
              >
                <LogIn className="w-5 h-5" />
                <span className="font-medium">Employee Login</span>
              </a>
              <a
                href="#contact"
                className="bg-gradient-to-r from-[#004FED] to-[#0066FF] text-white px-4 py-3 rounded-xl mt-4 text-center font-semibold"
                onClick={() => setIsMenuOpen(false)}
              >
                Get Started
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;