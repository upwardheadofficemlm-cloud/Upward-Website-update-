import React, { useState, useEffect } from 'react';
import EditableText from './cms/EditableText';
import EditableButton from './cms/EditableButton';
import EditableStatBlock from './cms/EditableStatBlock';
import EditableSection from './cms/EditableSection';
import { useCMS } from '../contexts/CMSContext';
import { ArrowRight, Play, Sparkles, Zap, Target, Award, Plus } from 'lucide-react';

const Hero = () => {
  const { login, isAdmin, isEditing } = useCMS();
  const [showPasswordModal, setShowPasswordModal] = useState(false);
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState('');
  const [typingText, setTypingText] = useState('');
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const [heroStats, setHeroStats] = useState([
    { id: 'hero-stat-1', number: '500+', label: 'Happy Clients', icon: Target },
    { id: 'hero-stat-2', number: '3000+', label: 'Projects Completed', icon: Zap },
    { id: 'hero-stat-3', number: '3+', label: 'Years Experience', icon: Award },
    { id: 'hero-stat-4', number: '24/7', label: 'Support', icon: Sparkles }
  ]);

  const texts = [
    'Digital Marketing',
    'Brand Identity',
    'Social Media',
    'Web Development',
    'Content Creation',
    'SEO Services'
  ];

  // Typing effect
  useEffect(() => {
    const currentText = texts[currentTextIndex];
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (typingText.length < currentText.length) {
          setTypingText(currentText.slice(0, typingText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        if (typingText.length > 0) {
          setTypingText(typingText.slice(0, -1));
        } else {
          setIsDeleting(false);
          setCurrentTextIndex((prev) => (prev + 1) % texts.length);
        }
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [typingText, currentTextIndex, isDeleting, texts]);

  const handleAdminLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (login(password)) {
      setShowPasswordModal(false);
      setPassword('');
      setLoginError('');
    } else {
      setLoginError('Invalid password. Please try again.');
      setPassword('');
    }
  };

  return (
    <>
      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
        {/* Enhanced Background */}
        <div className="absolute inset-0">
          {/* Gradient Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#004FED]/5 via-white to-[#0066FF]/10 dark:from-[#004FED]/10 dark:via-gray-900 dark:to-[#0066FF]/5"></div>
          
          {/* Animated Grid */}
          <div className="absolute inset-0 bg-grid-pattern opacity-30"></div>
          
          {/* Mesh Gradient */}
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-br from-[#004FED]/10 to-[#0066FF]/20 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-br from-[#0066FF]/10 to-[#004FED]/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
          </div>
        </div>
        
        {/* Enhanced Floating Elements */}
        <div className="absolute top-32 left-10 w-32 h-32 bg-gradient-to-br from-[#004FED]/20 to-[#0066FF]/30 rounded-full opacity-60 animate-float blur-sm shadow-2xl"></div>
        <div className="absolute top-48 right-20 w-24 h-24 bg-gradient-to-br from-[#0066FF]/25 to-[#004FED]/35 rounded-full opacity-60 animate-float-delayed blur-sm shadow-2xl"></div>
        <div className="absolute bottom-32 left-20 w-20 h-20 bg-gradient-to-br from-[#004FED]/30 to-[#0080FF]/40 rounded-full opacity-60 animate-float blur-sm shadow-2xl"></div>
        <div className="absolute bottom-48 right-32 w-28 h-28 bg-gradient-to-br from-[#0080FF]/20 to-[#004FED]/30 rounded-full opacity-60 animate-float-delayed blur-sm shadow-2xl"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-5xl mx-auto">
            {/* Enhanced Badge - Admin Access - Positioned below header */}
            <div className="mb-16 pt-8">
              <div className="inline-flex items-center px-8 py-4 bg-white/90 dark:bg-gray-800/90 backdrop-blur-md rounded-full border border-[#004FED]/20 dark:border-[#004FED]/30 shadow-2xl hover:shadow-3xl hover:scale-105 transition-all duration-500 cursor-pointer">
                <Sparkles className="w-5 h-5 text-[#004FED] mr-3" />
                <EditableText
                  id="hero-badge"
                  defaultContent="🚀 Mawlamyine's Premier 360° Marketing Agency"
                  className="text-lg font-bold text-[#004FED]"
                  tag="span"
                />
              </div>
            </div>

            {/* Enhanced Main Heading with Typing Effect */}
            <div className="mb-8">
              <EditableText
                id="hero-title"
                defaultContent="Elevate Your Brand with"
                className="text-5xl md:text-7xl font-black text-gray-900 mb-4 leading-tight"
                tag="h1"
              />
              <div className="text-5xl md:text-7xl font-black bg-gradient-to-r from-[#004FED] to-[#0066FF] bg-clip-text text-transparent mb-4 leading-tight py-2 min-h-[1.2em]">
                {typingText}
                <span className="animate-pulse">|</span>
              </div>
            </div>

            {/* Enhanced Subheading */}
            <EditableText
              id="hero-description"
              defaultContent="Mawlamyine's leading 360° marketing agency delivering innovative solutions that drive growth, build connections, and create lasting impact for businesses across Myanmar."
              className="text-2xl md:text-3xl text-gray-600 mb-16 leading-relaxed max-w-5xl mx-auto font-light"
              tag="p"
            />

            {/* Enhanced CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-8 sm:space-y-0 sm:space-x-10 mb-24">
              <EditableButton
                id="hero-cta-primary"
                defaultText="Start Your Journey"
                defaultUrl="#contact"
                defaultType="internal"
                className="group bg-gradient-to-r from-[#004FED] to-[#0066FF] text-white px-12 py-6 rounded-2xl text-xl font-bold hover:shadow-2xl hover:shadow-[#004FED]/40 transform hover:-translate-y-3 hover:scale-105 transition-all duration-500 flex items-center space-x-4 relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-[#0066FF] to-[#004FED] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <span className="relative z-10">Start Your Journey</span>
                <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-300 relative z-10" />
              </EditableButton>
              
              <EditableButton
                id="hero-cta-secondary"
                defaultText="Watch Our Story"
                defaultUrl="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                defaultType="external"
                className="group flex items-center space-x-4 text-gray-700 hover:text-[#004FED] transition-all duration-500"
              >
                <div className="w-20 h-20 bg-white rounded-full shadow-2xl flex items-center justify-center group-hover:shadow-3xl group-hover:shadow-[#004FED]/30 group-hover:scale-110 transition-all duration-500 border border-gray-100">
                  <Play className="w-8 h-8 ml-1 group-hover:scale-110 transition-transform duration-300" />
                </div>
                <div className="text-left">
                  <div className="text-xl font-bold block">Watch Our Story</div>
                  <span className="text-gray-500 text-sm">2 min video</span>
                </div>
              </EditableButton>
            </div>

            {/* Enhanced Stats with Icons */}
            <EditableSection
              id="hero-stats-section"
              className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto"
              canAddItems={true}
              onAddItem={() => {
                const newStat = {
                  id: `hero-stat-${Date.now()}`,
                  number: '100+',
                  label: 'New Metric',
                  icon: Award
                };
                setHeroStats([...heroStats, newStat]);
              }}
            >
              {heroStats.map((stat, index) => (
                <div key={stat.id} className="group bg-white/80 backdrop-blur-md rounded-2xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500">
                  <div className="w-16 h-16 bg-gradient-to-r from-[#004FED]/10 to-[#0066FF]/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <stat.icon className="w-8 h-8 text-[#004FED]" />
                  </div>
                  <EditableStatBlock
                    id={stat.id}
                    number={stat.number}
                    label={stat.label}
                    numberClassName="text-3xl md:text-4xl font-black text-[#004FED] mb-2"
                    labelClassName="text-gray-600 font-semibold text-lg"
                    onDelete={() => {
                      if (heroStats.length > 1 && window.confirm('Are you sure you want to remove this statistic?')) {
                        setHeroStats(heroStats.filter(s => s.id !== stat.id));
                      }
                    }}
                    onDuplicate={() => {
                      const newStat = {
                        ...stat,
                        id: `hero-stat-${Date.now()}`,
                        label: `${stat.label} Copy`
                      };
                      setHeroStats([...heroStats, newStat]);
                    }}
                  />
                </div>
              ))}
              
              {/* Add Stat Card */}
              {isAdmin && isEditing && (
                <div 
                  onClick={() => {
                    const newStat = {
                      id: `hero-stat-${Date.now()}`,
                      number: '100+',
                      label: 'New Metric',
                      icon: Award
                    };
                    setHeroStats([...heroStats, newStat]);
                  }}
                  className="bg-white/60 backdrop-blur-md rounded-2xl p-8 shadow-lg border-2 border-dashed border-gray-300 hover:border-[#004FED] hover:bg-[#004FED]/5 transition-all duration-300 cursor-pointer flex items-center justify-center min-h-[200px]"
                >
                  <div className="text-center">
                    <Plus className="w-12 h-12 text-gray-400 hover:text-[#004FED] mx-auto mb-4" />
                    <span className="text-gray-500 font-medium">Add Statistic</span>
                  </div>
                </div>
              )}
            </EditableSection>

            {/* Trust Indicators */}
            <div className="mt-16 flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-12 text-gray-600">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <span className="font-medium">Free Consultation Available</span>
              </div>
              <div className="flex items-center space-x-2">
                <Target className="w-5 h-5 text-[#0066FF]" />
                <span className="font-medium">Proven Results</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Admin Password Modal */}
      {showPasswordModal && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl p-10 shadow-3xl border border-gray-100 w-full max-w-md">
            <div className="text-center mb-8">
              <div className="w-20 h-20 bg-gradient-to-r from-[#004FED] to-[#0066FF] rounded-full flex items-center justify-center mx-auto mb-6 shadow-xl">
                <Sparkles className="w-10 h-10 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Admin Access</h2>
              <p className="text-gray-600 text-lg">Enter password to access edit mode</p>
            </div>

            <form onSubmit={handleAdminLogin} className="space-y-6">
              <div>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter admin password"
                  className="w-full px-6 py-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-4 focus:ring-[#004FED]/20 focus:border-[#004FED] text-lg transition-all duration-300"
                  autoFocus
                />
                {loginError && (
                  <div className="text-red-500 text-sm mt-3">{loginError}</div>
                )}
              </div>

              <div className="flex space-x-4">
                <button
                  type="submit"
                  disabled={!password.trim()}
                  className="flex-1 bg-gradient-to-r from-[#004FED] to-[#0066FF] text-white py-4 rounded-xl font-bold text-lg hover:shadow-xl hover:shadow-[#004FED]/30 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Access Admin Panel
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setShowPasswordModal(false);
                    setPassword('');
                    setLoginError('');
                  }}
                  className="px-8 py-4 border-2 border-gray-300 text-gray-700 rounded-xl hover:bg-gray-50 transition-colors font-semibold"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default Hero;