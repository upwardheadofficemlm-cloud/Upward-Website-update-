import React, { useState } from 'react';
import { useCMS } from '../../contexts/CMSContext';
import { useNavigation } from '../../App';
import { Edit3, Save, X, ExternalLink } from 'lucide-react';

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
                  <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-[#004FED] opacity-0 group-hover:opacity-100 transition-all duration-200" />
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
interface EditableButtonProps {
  id: string;
  defaultText: string;
  defaultUrl: string;
  defaultType?: 'internal' | 'external';
  className?: string;
  children?: React.ReactNode;
}

const EditableButton: React.FC<EditableButtonProps> = ({
  id,
  defaultText,
  defaultUrl,
  defaultType = 'internal',
  className = '',
  children
}) => {
  const { isAdmin, isEditing } = useCMS();
  const navigation = useNavigation();
  const [editingButton, setEditingButton] = useState(false);
  const [tempText, setTempText] = useState(defaultText);
  const [tempUrl, setTempUrl] = useState(defaultUrl);
  const [tempType, setTempType] = useState<'internal' | 'external'>(defaultType);
  const [showPageSearch, setShowPageSearch] = useState(false);

  const handleClick = (e: React.MouseEvent) => {
    if (isAdmin && isEditing) {
      e.preventDefault();
      setEditingButton(true);
      return;
    }

    e.preventDefault();
    
    if (tempType === 'external') {
      window.open(tempUrl, '_blank', 'noopener noreferrer');
    } else {
      if (tempUrl.startsWith('#')) {
        navigation.scrollToSection(tempUrl);
      } else {
        // Convert URL to page name
        const page = INTERNAL_PAGES.find(p => p.url === tempUrl);
        if (page) {
          navigation.navigateToPage(page.page, tempUrl);
        } else {
          // Fallback: extract page name from URL
          const pageName = tempUrl.replace('/', '') || 'home';
          navigation.navigateToPage(pageName, tempUrl);
        }
      }
    }
  };

  const saveEdit = () => {
    setEditingButton(false);
    setShowPageSearch(false);
  };

  const cancelEdit = () => {
    setTempText(defaultText);
    setTempUrl(defaultUrl);
    setTempType(defaultType);
    setEditingButton(false);
    setShowPageSearch(false);
  };

  const handlePageSelect = (page: { label: string; url: string; page: string }) => {
    setTempText(page.label);
    setTempUrl(page.url);
    setTempType('internal');
    setShowPageSearch(false);
  };
  if (editingButton) {
    return (
      <>
        <div className="space-y-3 p-4 bg-white/90 backdrop-blur-md rounded-lg border border-[#004FED]/20 min-w-[300px]">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Button Text</label>
            <input
              type="text"
              value={tempText}
              onChange={(e) => setTempText(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#004FED]/20"
              placeholder="Button text"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Link Type</label>
            <select
              value={tempType}
              onChange={(e) => setTempType(e.target.value as 'internal' | 'external')}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#004FED]/20"
            >
              <option value="internal">Internal Page</option>
              <option value="external">External URL</option>
            </select>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              {tempType === 'internal' ? 'Page URL' : 'External URL'}
            </label>
            <input
              type="text"
              value={tempUrl}
              onChange={(e) => setTempUrl(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#004FED]/20"
              placeholder={tempType === 'internal' ? '/training-center or #section' : 'https://example.com'}
            />
          </div>
          
          {tempType === 'internal' && (
            <button
              type="button"
              onClick={() => setShowPageSearch(true)}
              className="w-full bg-[#004FED]/10 text-[#004FED] px-3 py-2 rounded-lg text-sm hover:bg-[#004FED]/20 transition-colors flex items-center justify-center space-x-2"
            >
              <span>🔍</span>
              <span>Search Pages</span>
            </button>
          )}
          
          <div className="flex space-x-2">
            <button
              onClick={saveEdit}
              className="flex items-center space-x-1 bg-[#004FED] text-white px-3 py-1 rounded-lg text-sm hover:bg-[#0066FF] transition-colors"
            >
              <Save className="w-3 h-3" />
              <span>Save</span>
            </button>
            <button
              onClick={cancelEdit}
              className="flex items-center space-x-1 bg-gray-500 text-white px-3 py-1 rounded-lg text-sm hover:bg-gray-600 transition-colors"
            >
              <X className="w-3 h-3" />
              <span>Cancel</span>
            </button>
          </div>
        </div>
        
        {/* Page Search Modal */}
        {showPageSearch && (
          <PageSearch
            onSelect={handlePageSelect}
            onClose={() => setShowPageSearch(false)}
          />
        )}
      </>
    );
  }

  return (
    <div className="relative group">
      <button
        onClick={handleClick}
        className={`${className} flex items-center space-x-2`}
      >
        {children || <span>{tempText}</span>}
        {tempType === 'external' && <ExternalLink className="w-4 h-4" />}
      </button>
      {isAdmin && isEditing && (
        <button
          onClick={(e) => {
            e.preventDefault();
            setEditingButton(true);
          }}
          className="absolute -top-1 -right-1 w-5 h-5 bg-[#004FED] text-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200 hover:bg-[#0066FF]"
        >
          <Edit3 className="w-2 h-2" />
        </button>
      )}
    </div>
  );
};

export default EditableButton;