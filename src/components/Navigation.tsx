import React, { useState } from 'react';
import { Menu, X, ChevronDown, Edit3, Save, X as XIcon, ArrowRight } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useCMS } from '../contexts/CMSContext';
import EditableText from './cms/EditableText';

interface NavigationProps {
  currentPage: string;
}

interface NavItem {
  id: string;
  label: string;
  page: string;
  url: string;
}

interface ServiceItem {
  id: string;
  label: string;
  page: string;
  url: string;
}

interface OohItem {
  id: string;
  label: string;
  page: string;
  url: string;
}

// Available internal pages for search
const INTERNAL_PAGES = [
  { label: 'Home', url: '/', page: 'home' },
  { label: 'About Us', url: '/about', page: 'about' },
  { label: 'All Services', url: '/services', page: 'services' },
  { label: 'Brand Identity', url: '/brand-identity', page: 'brand-identity' },
  { label: 'Digital Marketing', url: '/digital-marketing', page: 'digital-marketing' },
  { label: 'Social Media', url: '/social-media', page: 'social-media' },
  { label: 'Web Development', url: '/web-development', page: 'web-development' },
  { label: 'Content Creation', url: '/content-creation', page: 'content-creation' },
  { label: 'SEO Services', url: '/seo-services', page: 'seo-services' },
  { label: 'Training Center', url: '/training-center', page: 'training-center' },
  { label: 'Portfolio', url: '/portfolio', page: 'portfolio' },
  { label: 'Team', url: '/team', page: 'team' },
  { label: 'Contact', url: '/contact', page: 'contact' },
  { label: 'Billboards', url: '/billboards', page: 'billboards' },
  { label: 'AdNova Digital Signage', url: '/adnova', page: 'adnova' },
  { label: 'Payments', url: '/payments', page: 'payments' },
  { label: 'Contact Section', url: '#contact', page: 'home' },
  { label: 'Services Section', url: '#services', page: 'home' },
  { label: 'About Section', url: '#about', page: 'home' },
  { label: 'Portfolio Section', url: '#portfolio', page: 'home' },
  { label: 'Team Section', url: '#team', page: 'home' }
];

interface PageSearchProps {
  onSelect: (page: { label: string; url: string; page: string }) => void;
  onClose: () => void;
}

const PageSearch: React.FC<PageSearchProps> = ({ onSelect, onClose }) => {
  const [searchTerm, setSearchTerm] = React.useState('');
  const [filteredPages, setFilteredPages] = React.useState(INTERNAL_PAGES);

  React.useEffect(() => {
    const filtered = INTERNAL_PAGES.filter(page =>
      page.label.toLowerCase().includes(searchTerm.toLowerCase()) ||
      page.url.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredPages(filtered);
  }, [searchTerm]);

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 w-full max-w-md max-h-[80vh] overflow-hidden">
        <div className="p-6 border-b border-gray-100">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xl font-bold text-gray-900">Choose Internal Page</h3>
            <button
              onClick={onClose}
              className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
          
          <div className="relative">
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search pages..."
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#004FED]/20 focus:border-[#004FED]"
              autoFocus
            />
            <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
              <div className="w-5 h-5 text-gray-400">🔍</div>
            </div>
          </div>
        </div>
        
        <div className="max-h-96 overflow-y-auto">
          {filteredPages.length > 0 ? (
            <div className="p-2">
              {filteredPages.map((page, index) => (
                <button
                  key={index}
                  onClick={() => onSelect(page)}
                  className="w-full text-left px-4 py-3 hover:bg-[#004FED]/10 hover:text-[#004FED] rounded-lg transition-all duration-200 flex items-center justify-between group"
                >
                  <div>
                    <div className="font-semibold text-gray-900 group-hover:text-[#004FED]">
                      {page.label}
                    </div>
                    <div className="text-sm text-gray-500 group-hover:text-[#0066FF]">
                      {page.url}
                    </div>
                  </div>
                  <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-[#004FED] opacity-0 group-hover:opacity-100 transition-all duration-200" />
                </button>
              ))}
            </div>
          ) : (
            <div className="p-8 text-center text-gray-500">
              <div className="text-4xl mb-4">🔍</div>
              <div className="font-medium">No pages found</div>
              <div className="text-sm">Try a different search term</div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const Navigation: React.FC<NavigationProps> = ({ currentPage }) => {
  const { isAdmin, isEditing } = useCMS();
  const { login } = useCMS();
  const location = useLocation();
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isOohOpen, setIsOohOpen] = useState(false);
  const [editingItem, setEditingItem] = useState<string | null>(null);
  const [tempLabel, setTempLabel] = useState('');
  const [tempUrl, setTempUrl] = useState('');
  const [editingBrand, setEditingBrand] = useState(false);
  const [tempBrandName, setTempBrandName] = useState('');
  const [tempBrandLogo, setTempBrandLogo] = useState('');
  const [logoClickCount, setLogoClickCount] = useState(0);
  const [showPasswordModal, setShowPasswordModal] = useState(false);
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState('');
  const [lastClickTime, setLastClickTime] = useState(0);

  const [showPageSearch, setShowPageSearch] = useState(false);
  const [searchCallback, setSearchCallback] = useState<((page: any) => void) | null>(null);

  // Navigation items with editable labels and URLs
  const [navItems, setNavItems] = useState<NavItem[]>([
    { id: 'about', label: 'About Us', page: 'about', url: '/about' },
    { id: 'training', label: 'Training Center', page: 'training-center', url: '/training-center' },
    { id: 'creation', label: 'Creation', page: 'portfolio', url: '/portfolio' },
    { id: 'contact', label: 'Contact', page: 'contact', url: '/contact' },
  ]);

  const [serviceItems, setServiceItems] = useState<ServiceItem[]>([
    { id: 'all-services', label: 'All Services', page: 'services', url: '/services' },
    { id: 'brand-identity', label: 'Brand Identity', page: 'brand-identity', url: '/brand-identity' },
    { id: 'digital-marketing', label: 'Digital Marketing', page: 'digital-marketing', url: '/digital-marketing' },
    { id: 'social-media', label: 'Social Media', page: 'social-media', url: '/social-media' },
    { id: 'web-development', label: 'Web Development', page: 'web-development', url: '/web-development' },
    { id: 'content-creation', label: 'Content Creation', page: 'content-creation', url: '/content-creation' },
    { id: 'seo-services', label: 'SEO Services', page: 'seo-services', url: '/seo-services' }
  ]);

  const [oohItems, setOohItems] = useState<OohItem[]>([
    { id: 'billboards', label: 'Billboards', page: 'billboards', url: '/billboards' },
    { id: 'adnova', label: 'AdNova Digital Signage', page: 'adnova', url: '/adnova' }
  ]);

  const [brandInfo, setBrandInfo] = useState({
    name: 'Upward',
    logo: '/upward_logo_primary-blue.png'
  });

  // Reset click count after 3 seconds
  React.useEffect(() => {
    if (logoClickCount > 0) {
      const timer = setTimeout(() => {
        setLogoClickCount(0);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [logoClickCount]);

  const handleLogoClick = () => {
    const currentTime = Date.now();
    const timeSinceLastClick = currentTime - lastClickTime;
    setLastClickTime(currentTime);
    
    const newCount = logoClickCount + 1;
    setLogoClickCount(newCount);
    
    console.log('Logo clicked! Count:', newCount, 'Time since last:', timeSinceLastClick);
    
    // If clicking continuously (within 500ms), stay on current page
    if (timeSinceLastClick < 500 && newCount > 1) {
      console.log('Continuous click detected, staying on current page');
      return;
    }
    
    if (newCount === 1) {
      console.log('First click: navigating to home');
      // First click: navigate to home
      navigate('/');
    } else if (newCount === 5) {
      console.log('Fifth click: opening admin panel modal');
      // 5th click: show admin panel
      setShowPasswordModal(true);
      setLogoClickCount(0);
      console.log('Modal state set to true, showPasswordModal should be:', true);
      // Add alert for testing
      alert('Admin panel should be opening now!');
    } else {
      console.log('Click', newCount, ': staying on current page');
    }
    // Clicks 2-4: do nothing, stay on current page
  };

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

  const handlePageChange = (page: string, url?: string) => {
    console.log('Navigation handlePageChange:', page, url);
    // Close menus
    setIsMenuOpen(false);
    setIsServicesOpen(false);
    setIsOohOpen(false);
    
    // Navigate if URL is provided
    if (url) {
      navigate(url);
    }
  };

  const startEditing = (itemId: string, currentLabel: string, currentUrl: string) => {
    if (!isAdmin || !isEditing) return;
    setEditingItem(itemId);
    setTempLabel(currentLabel);
    setTempUrl(currentUrl);
  };

  const saveEdit = (type: 'nav' | 'service' | 'ooh', itemId: string) => {
    if (!tempLabel.trim() || !tempUrl.trim()) return;

    // Keep the URL as entered, don't modify it
    const fullUrl = tempUrl.startsWith('/') ? tempUrl : `/${tempUrl}`;
    const pageName = tempUrl.startsWith('#') ? 'home' : (tempUrl.replace('/', '') || 'home');

    if (type === 'nav') {
      setNavItems(items => items.map(item => 
        item.id === itemId 
          ? { ...item, label: tempLabel, url: tempUrl, page: pageName }
          : item
      ));
    } else if (type === 'service') {
      setServiceItems(items => items.map(item => 
        item.id === itemId 
          ? { ...item, label: tempLabel, url: tempUrl, page: pageName }
          : item
      ));
    } else if (type === 'ooh') {
      setOohItems(items => items.map(item => 
        item.id === itemId 
          ? { ...item, label: tempLabel, url: tempUrl, page: pageName }
          : item
      ));
    }

    setEditingItem(null);
    setTempLabel('');
    setTempUrl('');
  };

  const cancelEdit = () => {
    setEditingItem(null);
    setTempLabel('');
    setTempUrl('');
  };

  const openPageSearch = (callback: (page: { label: string; url: string; page: string }) => void) => {
    setSearchCallback(() => callback);
    setShowPageSearch(true);
  };

  const handlePageSelect = (page: { label: string; url: string; page: string }) => {
    if (searchCallback) {
      searchCallback(page);
    }
    setShowPageSearch(false);
    setSearchCallback(null);
  };

  const startEditingBrand = () => {
    if (!isAdmin || !isEditing) return;
    setEditingBrand(true);
    setTempBrandName(brandInfo.name);
    setTempBrandLogo(brandInfo.logo);
  };

  const saveBrandEdit = () => {
    if (!tempBrandName.trim()) return;
    setBrandInfo({
      name: tempBrandName,
      logo: tempBrandLogo || brandInfo.logo
    });
    setEditingBrand(false);
    setTempBrandName('');
    setTempBrandLogo('');
  };

  const cancelBrandEdit = () => {
    setEditingBrand(false);
    setTempBrandName('');
    setTempBrandLogo('');
  };

  const renderEditableNavItem = (item: NavItem, type: 'nav' | 'service' | 'ooh' = 'nav') => {
    const isEditing = editingItem === item.id;
    const isActive = location.pathname === item.url || (item.url === '/' && location.pathname === '/');

    if (isEditing) {
      return (
        <div className="flex flex-col space-y-2 p-2 bg-white rounded-lg border border-[#004FED]/20">
          <input
            type="text"
            value={tempLabel}
            onChange={(e) => setTempLabel(e.target.value)}
            placeholder="Tab Label"
            className="px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#004FED]/20"
          />
          <input
            type="text"
            value={tempUrl}
            onChange={(e) => setTempUrl(e.target.value)}
            placeholder="URL (e.g., /portfolio)"
            className="px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#004FED]/20"
          />
          <button
            type="button"
            onClick={() => openPageSearch((page) => {
              setTempLabel(page.label);
              setTempUrl(page.url);
            })}
            className="w-full bg-[#004FED]/10 text-[#004FED] px-3 py-2 rounded-lg text-sm hover:bg-[#004FED]/20 transition-colors flex items-center justify-center space-x-2"
          >
            <span>🔍</span>
            <span>Search Pages</span>
          </button>
          <div className="flex space-x-2">
            <button
              onClick={() => saveEdit(type, item.id)}
              className="flex items-center space-x-1 bg-[#004FED] text-white px-3 py-1 rounded-lg text-sm hover:bg-[#0066FF] transition-colors"
            >
              <Save className="w-3 h-3" />
              <span>Save</span>
            </button>
            <button
              onClick={cancelEdit}
              className="flex items-center space-x-1 bg-gray-500 text-white px-3 py-1 rounded-lg text-sm hover:bg-gray-600 transition-colors"
            >
              <XIcon className="w-3 h-3" />
              <span>Cancel</span>
            </button>
          </div>
        </div>
      );
    }

    return (
      <div className="relative group">
        <Link
          to={item.url}
          className={`relative px-4 py-2 text-sm font-medium transition-all duration-300 hover:scale-105 rounded-lg ${
            isActive
              ? 'text-[#004FED] bg-white/20'
              : 'text-gray-700 hover:text-[#004FED] hover:bg-white/10'
          }`}
        >
          {item.label}
        </Link>
        {isAdmin && isEditing && (
          <button
            onClick={() => startEditing(item.id, item.label, item.url)}
            className="absolute -top-1 -right-1 w-5 h-5 bg-[#004FED] text-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200 hover:bg-[#0066FF]"
          >
            <Edit3 className="w-2 h-2" />
          </button>
        )}
      </div>
    );
  };

  return (
    <header className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50 w-full max-w-7xl px-6">
      <div className="bg-white/10 backdrop-blur-2xl border border-white/20 rounded-2xl shadow-2xl shadow-black/5">
        <div className="flex items-center justify-between px-8 py-4">
          {/* Logo */}
          <div className="relative group">
            {editingBrand ? (
              <div className="flex flex-col space-y-2 p-3 bg-white/90 backdrop-blur-md rounded-lg border border-[#004FED]/20 min-w-[200px]">
                <input
                  type="text"
                  value={tempBrandName}
                  onChange={(e) => setTempBrandName(e.target.value)}
                  placeholder="Brand Name"
                  className="px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#004FED]/20"
                />
                <input
                  type="text"
                  value={tempBrandLogo}
                  onChange={(e) => setTempBrandLogo(e.target.value)}
                  placeholder="Logo URL (optional)"
                  className="px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#004FED]/20"
                />
                <div className="flex space-x-2">
                  <button
                    onClick={saveBrandEdit}
                    className="flex items-center space-x-1 bg-[#004FED] text-white px-3 py-1 rounded-lg text-sm hover:bg-[#0066FF] transition-colors"
                  >
                    <Save className="w-3 h-3" />
                    <span>Save</span>
                  </button>
                  <button
                    onClick={cancelBrandEdit}
                    className="flex items-center space-x-1 bg-gray-500 text-white px-3 py-1 rounded-lg text-sm hover:bg-gray-600 transition-colors"
                  >
                    <XIcon className="w-3 h-3" />
                    <span>Cancel</span>
                  </button>
                </div>
              </div>
            ) : (
              <div 
                className="flex items-center cursor-pointer hover:scale-105 transition-transform duration-300"
                onClick={handleLogoClick}
              >
                <img 
                  src={brandInfo.logo} 
                  alt={`${brandInfo.name} Marketing Agency`} 
                  className="h-10 w-auto mr-2"
                />
                {logoClickCount > 0 && (
                  <div className="ml-2 text-xs text-gray-500 bg-white/80 px-2 py-1 rounded">
                    {logoClickCount}
                  </div>
                )}
              </div>
            )}
            {isAdmin && isEditing && !editingBrand && (
              <button
                onClick={startEditingBrand}
                className="absolute -top-1 -right-1 w-5 h-5 bg-[#004FED] text-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200 hover:bg-[#0066FF]"
              >
                <Edit3 className="w-2 h-2" />
              </button>
            )}
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => renderEditableNavItem(item, 'nav'))}
            
            {/* Services Dropdown */}
            <div className="relative">
              <div className="relative group">
                <button
                  onMouseEnter={() => setIsServicesOpen(true)}
                  onMouseLeave={() => setIsServicesOpen(false)}
                  className={`flex items-center space-x-1 px-4 py-2 text-sm font-medium transition-all duration-300 hover:scale-105 rounded-lg ${
                    currentPage.includes('services') || currentPage.includes('-')
                      ? 'text-[#004FED] bg-white/20'
                      : 'text-gray-700 hover:text-[#004FED] hover:bg-white/10'
                  }`}
                >
                  <span>Services</span>
                  <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isServicesOpen ? 'rotate-180' : ''}`} />
                </button>
                {isAdmin && isEditing && (
                  <button
                    onClick={() => startEditing('services-main', 'Services', '/services')}
                    className="absolute -top-1 -right-1 w-5 h-5 bg-[#004FED] text-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200 hover:bg-[#0066FF]"
                  >
                    <Edit3 className="w-2 h-2" />
                  </button>
                )}
              </div>
              
              {/* Services Dropdown Menu */}
              <div
                className={`absolute top-full right-0 mt-2 w-56 bg-white/90 backdrop-blur-2xl rounded-xl shadow-2xl border border-white/20 py-2 transition-all duration-300 ${
                  isServicesOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'
                }`}
                onMouseEnter={() => setIsServicesOpen(true)}
                onMouseLeave={() => setIsServicesOpen(false)}
              >
                {serviceItems.map((service) => (
                  <div key={service.id} className="px-2">
                    {editingItem === service.id ? (
                      <div className="flex flex-col space-y-2 p-2 bg-gray-50 rounded-lg">
                        <input
                          type="text"
                          value={tempLabel}
                          onChange={(e) => setTempLabel(e.target.value)}
                          placeholder="Service Label"
                          className="px-2 py-1 border border-gray-300 rounded text-sm focus:outline-none focus:ring-1 focus:ring-[#004FED]/20"
                        />
                        <input
                          type="text"
                          value={tempUrl}
                          onChange={(e) => setTempUrl(e.target.value)}
                          placeholder="URL"
                          className="px-2 py-1 border border-gray-300 rounded text-sm focus:outline-none focus:ring-1 focus:ring-[#004FED]/20"
                        />
                        <button
                          type="button"
                          onClick={() => openPageSearch((page) => {
                            setTempLabel(page.label);
                            setTempUrl(page.url);
                          })}
                          className="w-full bg-[#004FED]/10 text-[#004FED] px-2 py-1 rounded text-xs hover:bg-[#004FED]/20 transition-colors flex items-center justify-center space-x-1"
                        >
                          <span>🔍</span>
                          <span>Search</span>
                        </button>
                        <div className="flex space-x-1">
                          <button
                            onClick={() => saveEdit('service', service.id)}
                            className="flex items-center space-x-1 bg-[#004FED] text-white px-2 py-1 rounded text-xs hover:bg-[#0066FF]"
                          >
                            <Save className="w-2 h-2" />
                            <span>Save</span>
                          </button>
                          <button
                            onClick={cancelEdit}
                            className="flex items-center space-x-1 bg-gray-500 text-white px-2 py-1 rounded text-xs hover:bg-gray-600"
                          >
                            <XIcon className="w-2 h-2" />
                            <span>Cancel</span>
                          </button>
                        </div>
                      </div>
                    ) : (
                      <div className="relative group">
                        <Link
                          to={service.url}
                          className={`w-full text-left px-4 py-3 text-sm transition-all duration-300 hover:bg-[#004FED]/10 hover:text-[#004FED] rounded-lg ${
                            location.pathname === service.url ? 'text-[#004FED] bg-[#004FED]/10' : 'text-gray-700'
                          }`}
                        >
                          {service.label}
                        </Link>
                        {isAdmin && isEditing && (
                          <button
                            onClick={() => startEditing(service.id, service.label, service.url)}
                            className="absolute top-1 right-1 w-4 h-4 bg-[#004FED] text-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200 hover:bg-[#0066FF]"
                          >
                            <Edit3 className="w-2 h-2" />
                          </button>
                        )}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* OOH Advertising Dropdown */}
            <div className="relative">
              <div className="relative group">
                <button
                  onMouseEnter={() => setIsOohOpen(true)}
                  onMouseLeave={() => setIsOohOpen(false)}
                  className={`flex items-center space-x-1 px-4 py-2 text-sm font-medium transition-all duration-300 hover:scale-105 rounded-lg ${
                    location.pathname.includes('/billboards') || location.pathname.includes('/adnova')
                      ? 'text-[#004FED] bg-white/20'
                      : 'text-gray-700 hover:text-[#004FED] hover:bg-white/10'
                  }`}
                >
                  <span>Out-of-Home (OOH)</span>
                  <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isOohOpen ? 'rotate-180' : ''}`} />
                </button>
                {isAdmin && isEditing && (
                  <button
                    onClick={() => startEditing('ooh-main', 'Out-of-Home (OOH)', '/ooh')}
                    className="absolute -top-1 -right-1 w-5 h-5 bg-[#004FED] text-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200 hover:bg-[#0066FF]"
                  >
                    <Edit3 className="w-2 h-2" />
                  </button>
                )}
              </div>
              
              {/* OOH Dropdown Menu */}
              <div
                className={`absolute top-full right-0 mt-2 w-64 bg-white/90 backdrop-blur-2xl rounded-xl shadow-2xl border border-white/20 py-2 transition-all duration-300 ${
                  isOohOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'
                }`}
                onMouseEnter={() => setIsOohOpen(true)}
                onMouseLeave={() => setIsOohOpen(false)}
              >
                {oohItems.map((ooh) => (
                  <div key={ooh.id} className="px-2">
                    {editingItem === ooh.id ? (
                      <div className="flex flex-col space-y-2 p-2 bg-gray-50 rounded-lg">
                        <input
                          type="text"
                          value={tempLabel}
                          onChange={(e) => setTempLabel(e.target.value)}
                          placeholder="OOH Label"
                          className="px-2 py-1 border border-gray-300 rounded text-sm focus:outline-none focus:ring-1 focus:ring-[#004FED]/20"
                        />
                        <input
                          type="text"
                          value={tempUrl}
                          onChange={(e) => setTempUrl(e.target.value)}
                          placeholder="URL"
                          className="px-2 py-1 border border-gray-300 rounded text-sm focus:outline-none focus:ring-1 focus:ring-[#004FED]/20"
                        />
                        <button
                          type="button"
                          onClick={() => openPageSearch((page) => {
                            setTempLabel(page.label);
                            setTempUrl(page.url);
                          })}
                          className="w-full bg-[#004FED]/10 text-[#004FED] px-2 py-1 rounded text-xs hover:bg-[#004FED]/20 transition-colors flex items-center justify-center space-x-1"
                        >
                          <span>🔍</span>
                          <span>Search</span>
                        </button>
                        <div className="flex space-x-1">
                          <button
                            onClick={() => saveEdit('ooh', ooh.id)}
                            className="flex items-center space-x-1 bg-[#004FED] text-white px-2 py-1 rounded text-xs hover:bg-[#0066FF]"
                          >
                            <Save className="w-2 h-2" />
                            <span>Save</span>
                          </button>
                          <button
                            onClick={cancelEdit}
                            className="flex items-center space-x-1 bg-gray-500 text-white px-2 py-1 rounded text-xs hover:bg-gray-600"
                          >
                            <XIcon className="w-2 h-2" />
                            <span>Cancel</span>
                          </button>
                        </div>
                      </div>
                    ) : (
                      <div className="relative group">
                        <Link
                          to={ooh.url}
                          className={`w-full text-left px-4 py-3 text-sm transition-all duration-300 hover:bg-[#004FED]/10 hover:text-[#004FED] rounded-lg ${
                            location.pathname === ooh.url ? 'text-[#004FED] bg-[#004FED]/10' : 'text-gray-700'
                          }`}
                        >
                          {ooh.label}
                        </Link>
                        {isAdmin && isEditing && (
                          <button
                            onClick={() => startEditing(ooh.id, ooh.label, ooh.url)}
                            className="absolute top-1 right-1 w-4 h-4 bg-[#004FED] text-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200 hover:bg-[#0066FF]"
                          >
                            <Edit3 className="w-2 h-2" />
                          </button>
                        )}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Login Button */}
            <a
              href="https://upward-552926055931.us-west1.run.app/#/login"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/20 backdrop-blur-md text-[#004FED] px-6 py-2 rounded-full text-sm font-medium hover:bg-white/30 hover:scale-105 transition-all duration-300 border border-white/30"
            >
              Log in →
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-xl hover:bg-white/10 transition-colors duration-300"
          >
            {isMenuOpen ? <X className="w-6 h-6 text-gray-700" /> : <Menu className="w-6 h-6 text-gray-700" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-white/20 bg-white/10 backdrop-blur-2xl rounded-b-2xl">
            <nav className="flex flex-col p-4 space-y-2">
              {navItems.map((item) => (
                <div key={item.id}>
                  {renderEditableNavItem(item, 'nav')}
                </div>
              ))}
              
              {/* Mobile Services Menu */}
              <div className="border-t border-white/20 pt-4 mt-4">
                <div className="text-xs font-bold text-gray-500 px-4 mb-2 uppercase tracking-wide">Services</div>
                {serviceItems.map((service) => (
                  <div key={service.id}>
                    {renderEditableNavItem(service as any, 'service')}
                  </div>
                ))}
              </div>
              
              {/* Mobile OOH Menu */}
              <div className="border-t border-white/20 pt-4 mt-4">
                <div className="text-xs font-bold text-gray-500 px-4 mb-2 uppercase tracking-wide">Out-of-Home (OOH)</div>
                {oohItems.map((ooh) => (
                  <div key={ooh.id}>
                    {renderEditableNavItem(ooh as any, 'ooh')}
                  </div>
                ))}
              </div>
              
              <a
                href="https://upward-552926055931.us-west1.run.app/#/login"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/20 backdrop-blur-md text-[#004FED] px-4 py-3 rounded-xl text-sm font-medium mt-4 hover:bg-white/30 transition-all duration-300 border border-white/30 block text-center"
              >
                Log in →
              </a>
            </nav>
          </div>
        )}
      </div>

      {/* Page Search Modal */}
      {showPageSearch && (
        <PageSearch
          onSelect={handlePageSelect}
          onClose={() => {
            setShowPageSearch(false);
            setSearchCallback(null);
          }}
        />
      )}

      {/* Admin Password Modal */}
      {console.log('Rendering modal check - showPasswordModal:', showPasswordModal)}
      {showPasswordModal && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-md z-[9999] flex items-center justify-center p-4 min-h-screen">
          <div className="bg-white rounded-3xl p-12 shadow-2xl border border-gray-100 w-full max-w-lg transform transition-all duration-300 scale-100 mx-auto my-auto">
            <div className="text-center mb-10">
              <div className="w-24 h-24 bg-gradient-to-r from-[#004FED] to-[#0066FF] rounded-full flex items-center justify-center mx-auto mb-8 shadow-2xl animate-pulse">
                <Edit3 className="w-12 h-12 text-white" />
              </div>
              <h2 className="text-4xl font-black text-gray-900 mb-4">Admin Panel</h2>
              <p className="text-gray-600 text-xl font-medium">Enter password to access edit mode</p>
            </div>

            <form onSubmit={handleAdminLogin} className="space-y-8">
              <div>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter admin password"
                  className="w-full px-8 py-6 border-2 border-gray-200 rounded-2xl focus:outline-none focus:ring-4 focus:ring-[#004FED]/20 focus:border-[#004FED] text-xl transition-all duration-300 bg-gray-50 focus:bg-white"
                  autoFocus
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
                  disabled={!password.trim()}
                  className="flex-1 bg-gradient-to-r from-[#004FED] to-[#0066FF] text-white py-6 rounded-2xl font-bold text-xl hover:shadow-2xl hover:shadow-[#004FED]/30 transform hover:-translate-y-1 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
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
                  className="px-10 py-6 border-2 border-gray-300 text-gray-700 rounded-2xl hover:bg-gray-50 hover:border-gray-400 transition-all duration-300 font-bold text-lg"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navigation;