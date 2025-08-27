import React, { useState, useRef, useEffect } from 'react';
import { useCMS } from '../../contexts/CMSContext';
import { useNavigation } from '../../App';
import { Edit3, Save, X, Bold, Italic, Underline, Palette, Type } from 'lucide-react';

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
interface EditableTextProps {
  id: string;
  defaultContent: string;
  className?: string;
  tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span' | 'div';
  placeholder?: string;
  isNavigable?: boolean;
  navigationUrl?: string;
  navigationType?: 'internal' | 'external';
}

const EditableText: React.FC<EditableTextProps> = ({
  id,
  defaultContent,
  className = '',
  tag: Tag = 'div',
  placeholder = 'Click to edit...',
  isNavigable = false,
  navigationUrl = '',
  navigationType = 'internal'
}) => {
  const { content, isEditing, isAdmin, updateContent } = useCMS();
  const navigation = useNavigation();
  const [isLocalEditing, setIsLocalEditing] = useState(false);
  const [localContent, setLocalContent] = useState('');
  const [saving, setSaving] = useState(false);
  const [showColorPicker, setShowColorPicker] = useState(false);
  const [customColor, setCustomColor] = useState('#004FED');
  const [editingNavigation, setEditingNavigation] = useState(false);
  const [tempNavUrl, setTempNavUrl] = useState(navigationUrl);
  const [tempNavType, setTempNavType] = useState<'internal' | 'external'>(navigationType);
  const [showPageSearch, setShowPageSearch] = useState(false);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  // Get current content from CMS or use default
  const currentContent = content[id]?.content || defaultContent;

  // Debug logging
  useEffect(() => {
    console.log(`EditableText ${id}:`, {
      hasContentInCMS: !!content[id],
      currentContent: currentContent,
      defaultContent: defaultContent
    });
  }, [content, id, currentContent, defaultContent]);

  // Strip HTML tags for editing
  const stripHtml = (html: string) => {
    const temp = document.createElement('div');
    temp.innerHTML = html;
    return temp.textContent || temp.innerText || '';
  };

  // Convert plain text to HTML with basic formatting
  const textToHtml = (text: string) => {
    return text
      .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
      .replace(/\*(.*?)\*/g, '<em>$1</em>')
      .replace(/__(.*?)__/g, '<u>$1</u>')
      .replace(/\{color:(#[0-9A-Fa-f]{6})\}(.*?)\{\/color\}/g, '<span style="color: $1">$2</span>')
      .replace(/\n/g, '<br>');
  };

  useEffect(() => {
    setLocalContent(stripHtml(currentContent));
  }, [currentContent]);

  const handleTextClick = (e: React.MouseEvent) => {
    if (isNavigable && !isAdmin) {
      e.preventDefault();
      if (tempNavType === 'external') {
        window.open(tempNavUrl, '_blank', 'noopener noreferrer');
      } else {
        if (tempNavUrl.startsWith('#')) {
          navigation.scrollToSection(tempNavUrl);
        } else {
          const page = INTERNAL_PAGES.find(p => p.url === tempNavUrl);
          if (page) {
            navigation.navigateToPage(page.page, tempNavUrl);
          }
        }
      }
      return;
    }
    
    if (isAdmin && isEditing) {
      handleEdit();
    }
  };
  const handleEdit = () => {
    if (!isAdmin || !isEditing) return;
    console.log('Starting edit for:', id);
    setIsLocalEditing(true);
    setLocalContent(stripHtml(currentContent));
    
    // Focus and position cursor
    setTimeout(() => {
      if (textareaRef.current) {
        textareaRef.current.focus();
        const length = textareaRef.current.value.length;
        textareaRef.current.setSelectionRange(length, length);
      }
    }, 100);
  };

  const handleSave = async () => {
    if (!localContent.trim()) {
      alert('Content cannot be empty');
      return;
    }
    
    try {
      setSaving(true);
      console.log('Saving content for ID:', id, 'Content:', localContent);
      
      // Convert to HTML and save
      const htmlContent = textToHtml(localContent.trim());
      console.log('Converted HTML content:', htmlContent);
      await updateContent(id, htmlContent, 'html');
      
      console.log('Content saved successfully for:', id);
      setIsLocalEditing(false);
      
      // Force a small delay to ensure Firebase has processed the save
      setTimeout(() => {
        console.log('Checking if content persisted:', content[id]);
      }, 1000);
      
      // Show success feedback
      showNotification('Content saved successfully!', 'success');
      
    } catch (error) {
      console.error('Error saving content:', error);
      
      // Show error feedback
      showNotification(`Error saving content: ${error.message}`, 'error');
    } finally {
      setSaving(false);
    }
  };

  const showNotification = (message: string, type: 'success' | 'error') => {
    const notification = document.createElement('div');
    notification.className = `fixed top-4 right-4 px-6 py-3 rounded-lg shadow-lg z-50 ${
      type === 'success' ? 'bg-green-500' : 'bg-red-500'
    } text-white`;
    notification.textContent = message;
    document.body.appendChild(notification);
    
    setTimeout(() => {
      if (document.body.contains(notification)) {
        document.body.removeChild(notification);
      }
    }, type === 'success' ? 2000 : 4000);
  };

  const handleCancel = () => {
    setLocalContent(stripHtml(currentContent));
    setIsLocalEditing(false);
    setShowColorPicker(false);
    setEditingNavigation(false);
    setShowPageSearch(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && e.ctrlKey) {
      e.preventDefault();
      handleSave();
    } else if (e.key === 'Escape') {
      e.preventDefault();
      handleCancel();
    }
  };

  const applyFormatting = (format: string) => {
    if (!textareaRef.current) return;
    
    const textarea = textareaRef.current;
    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const selectedText = textarea.value.substring(start, end);
    
    if (!selectedText) {
      // If no text selected, just insert formatting markers
      let markers = '';
      switch (format) {
        case 'bold':
          markers = '****';
          break;
        case 'italic':
          markers = '**';
          break;
        case 'underline':
          markers = '____';
          break;
        default:
          return;
      }
      
      const newContent = 
        textarea.value.substring(0, start) + 
        markers + 
        textarea.value.substring(end);
      
      setLocalContent(newContent);
      
      // Position cursor between markers
      setTimeout(() => {
        const newPos = start + markers.length / 2;
        textarea.setSelectionRange(newPos, newPos);
        textarea.focus();
      }, 0);
      return;
    }
    
    let formattedText = '';
    switch (format) {
      case 'bold':
        formattedText = `**${selectedText}**`;
        break;
      case 'italic':
        formattedText = `*${selectedText}*`;
        break;
      case 'underline':
        formattedText = `__${selectedText}__`;
        break;
      default:
        return;
    }
    
    const newContent = 
      textarea.value.substring(0, start) + 
      formattedText + 
      textarea.value.substring(end);
    
    setLocalContent(newContent);
    
    // Restore cursor position after formatted text
    setTimeout(() => {
      const newCursorPos = start + formattedText.length;
      textarea.setSelectionRange(newCursorPos, newCursorPos);
      textarea.focus();
    }, 0);
  };

  const applyTextColor = (color: string) => {
    if (!textareaRef.current) return;
    
    const textarea = textareaRef.current;
    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const selectedText = textarea.value.substring(start, end);
    
    if (!selectedText) {
      alert('Please select text first to apply color');
      return;
    }
    
    const coloredText = `{color:${color}}${selectedText}{/color}`;
    
    const newContent = 
      textarea.value.substring(0, start) + 
      coloredText + 
      textarea.value.substring(end);
    
    setLocalContent(newContent);
    
    // Restore cursor position after colored text
    setTimeout(() => {
      const newCursorPos = start + coloredText.length;
      textarea.setSelectionRange(newCursorPos, newCursorPos);
      textarea.focus();
    }, 0);
    
    setShowColorPicker(false);
  };

  const handlePageSelect = (page: { label: string; url: string; page: string }) => {
    setTempNavUrl(page.url);
    setTempNavType('internal');
    setShowPageSearch(false);
  };

  const saveNavigationEdit = () => {
    // In a real implementation, you'd save this to your CMS
    // For now, we'll just update the local state
    setEditingNavigation(false);
    setShowPageSearch(false);
  };
  const predefinedColors = [
    '#004FED', // Primary blue
    '#0066FF', // Secondary blue
    '#000000', // Black
    '#374151', // Gray
    '#DC2626', // Red
    '#059669', // Green
    '#D97706', // Orange
    '#7C3AED', // Purple
    '#DB2777', // Pink
    '#0891B2'  // Cyan
  ];
  if (isLocalEditing) {
    return (
      <>
        <div className="relative group bg-white/95 backdrop-blur-md rounded-2xl p-6 shadow-2xl border border-[#004FED]/20 z-50">
          {/* Toolbar */}
          <div className="flex items-center justify-between mb-4 p-3 bg-gray-50 rounded-xl flex-wrap gap-2">
            <div className="flex items-center space-x-2">
              <button
                onClick={() => applyFormatting('bold')}
                className="p-2 hover:bg-white rounded-lg transition-colors border border-gray-200"
                title="Bold (**text**)"
              >
                <Bold className="w-4 h-4" />
              </button>
              <button
                onClick={() => applyFormatting('italic')}
                className="p-2 hover:bg-white rounded-lg transition-colors border border-gray-200"
                title="Italic (*text*)"
              >
                <Italic className="w-4 h-4" />
              </button>
              <button
                onClick={() => applyFormatting('underline')}
                className="p-2 hover:bg-white rounded-lg transition-colors border border-gray-200"
                title="Underline (__text__)"
              >
                <Underline className="w-4 h-4" />
              </button>
              
              {/* Color Picker Button */}
              <div className="relative">
                <button
                  onClick={() => setShowColorPicker(!showColorPicker)}
                  className="p-2 hover:bg-white rounded-lg transition-colors border border-gray-200 flex items-center space-x-1"
                  title="Text Color"
                >
                  <Palette className="w-4 h-4" />
                  <div 
                    className="w-3 h-3 rounded-full border border-gray-300" 
                    style={{ backgroundColor: customColor }}
                  ></div>
                </button>
                
                {/* Color Picker Dropdown */}
                {showColorPicker && (
                  <div className="absolute top-full left-0 mt-2 bg-white rounded-xl shadow-2xl border border-gray-200 p-4 z-50 min-w-[280px]">
                    <div className="mb-3">
                      <label className="block text-sm font-medium text-gray-700 mb-2">Predefined Colors</label>
                      <div className="grid grid-cols-5 gap-2">
                        {predefinedColors.map((color) => (
                          <button
                            key={color}
                            onClick={() => {
                              setCustomColor(color);
                              applyTextColor(color);
                            }}
                            className="w-8 h-8 rounded-lg border-2 border-gray-200 hover:border-gray-400 transition-colors hover:scale-110"
                            style={{ backgroundColor: color }}
                            title={color}
                          />
                        ))}
                      </div>
                    </div>
                    
                    <div className="mb-3">
                      <label className="block text-sm font-medium text-gray-700 mb-2">Custom Color</label>
                      <div className="flex items-center space-x-2">
                        <input
                          type="color"
                          value={customColor}
                          onChange={(e) => setCustomColor(e.target.value)}
                          className="w-12 h-8 rounded border border-gray-300 cursor-pointer"
                        />
                        <input
                          type="text"
                          value={customColor}
                          onChange={(e) => setCustomColor(e.target.value)}
                          className="flex-1 px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#004FED]/20"
                          placeholder="#004FED"
                        />
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-2">
                      <button
                        onClick={() => applyTextColor(customColor)}
                        className="flex items-center space-x-2 bg-[#004FED] text-white px-4 py-2 rounded-lg text-sm hover:bg-[#0066FF] transition-colors"
                      >
                        <Type className="w-4 h-4" />
                        <span>Apply Color</span>
                      </button>
                      <button
                        onClick={() => setShowColorPicker(false)}
                        className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg text-sm hover:bg-gray-200 transition-colors"
                      >
                        Close
                      </button>
                    </div>
                  </div>
                )}
              </div>
              
              {/* Navigation Link Button */}
              {isNavigable && (
                <button
                  onClick={() => setEditingNavigation(!editingNavigation)}
                  className={`p-2 hover:bg-white rounded-lg transition-colors border border-gray-200 ${
                    editingNavigation ? 'bg-[#004FED]/10 border-[#004FED]' : ''
                  }`}
                  title="Make this text clickable for navigation"
                >
                  🔗
                </button>
              )}
            </div>
            
            <div className="text-xs text-gray-500 bg-white px-3 py-2 rounded-lg border">
              <kbd className="font-mono">Ctrl+Enter</kbd> to save
            </div>
          </div>

          {/* Navigation Settings */}
          {editingNavigation && (
            <div className="mb-4 p-4 bg-blue-50 rounded-xl border border-blue-200">
              <h4 className="text-sm font-bold text-gray-900 mb-3">Navigation Settings</h4>
              <div className="space-y-3">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Link Type</label>
                  <select
                    value={tempNavType}
                    onChange={(e) => setTempNavType(e.target.value as 'internal' | 'external')}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#004FED]/20"
                  >
                    <option value="internal">Internal Page</option>
                    <option value="external">External URL</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    {tempNavType === 'internal' ? 'Page URL' : 'External URL'}
                  </label>
                  <input
                    type="text"
                    value={tempNavUrl}
                    onChange={(e) => setTempNavUrl(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#004FED]/20"
                    placeholder={tempNavType === 'internal' ? '/about or #section' : 'https://example.com'}
                  />
                </div>
                
                {tempNavType === 'internal' && (
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
                    onClick={saveNavigationEdit}
                    className="flex items-center space-x-1 bg-[#004FED] text-white px-3 py-1 rounded-lg text-sm hover:bg-[#0066FF] transition-colors"
                  >
                    <Save className="w-3 h-3" />
                    <span>Save Link</span>
                  </button>
                  <button
                    onClick={() => setEditingNavigation(false)}
                    className="flex items-center space-x-1 bg-gray-500 text-white px-3 py-1 rounded-lg text-sm hover:bg-gray-600 transition-colors"
                  >
                    <X className="w-3 h-3" />
                    <span>Cancel</span>
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Text Editor */}
          <textarea
            ref={textareaRef}
            value={localContent}
            onChange={(e) => setLocalContent(e.target.value)}
            onKeyDown={handleKeyDown}
            className="w-full min-h-[120px] p-4 border-2 border-[#004FED] rounded-xl focus:outline-none focus:ring-4 focus:ring-[#004FED]/20 bg-white resize-vertical text-left"
            placeholder={placeholder}
            style={{ 
              direction: 'ltr',
              textAlign: 'left',
              fontFamily: 'inherit',
              fontSize: 'inherit',
              lineHeight: 'inherit'
            }}
            autoFocus
          />

          {/* Action Buttons */}
          <div className="flex items-center justify-between mt-4">
            <div className="flex items-center space-x-3">
              <button
                onClick={handleSave}
                disabled={saving || !localContent.trim()}
                className="flex items-center space-x-2 bg-[#004FED] text-white px-6 py-3 rounded-xl text-sm font-semibold hover:bg-[#0066FF] transition-colors disabled:opacity-50 disabled:cursor-not-allowed shadow-lg"
              >
                <Save className="w-4 h-4" />
                <span>{saving ? 'Saving...' : 'Save Changes'}</span>
              </button>
              <button
                onClick={handleCancel}
                className="flex items-center space-x-2 bg-gray-500 text-white px-6 py-3 rounded-xl text-sm font-semibold hover:bg-gray-600 transition-colors shadow-lg"
              >
                <X className="w-4 h-4" />
                <span>Cancel</span>
              </button>
            </div>
            
            <div className="text-xs text-gray-500">
              Characters: {localContent.length}
            </div>
          </div>

          {/* Help Text */}
          <div className="mt-4 text-xs text-gray-600 bg-blue-50 p-3 rounded-lg">
            <strong>Formatting:</strong> **bold**, *italic*, __underline__, {'{'}color:#FF0000{'}'}text{'{/color}'} | <strong>Shortcuts:</strong> Ctrl+Enter (save), Esc (cancel)
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
      <Tag 
        className={`${className} ${
          isAdmin && isEditing 
            ? 'cursor-pointer hover:bg-blue-50/50 hover:outline hover:outline-2 hover:outline-[#004FED]/30 rounded-lg transition-all duration-200 p-2 -m-2' 
            : isNavigable 
              ? 'cursor-pointer hover:text-[#004FED] transition-colors duration-300' 
              : ''
        }`}
        onClick={handleTextClick}
        dangerouslySetInnerHTML={{ __html: currentContent || placeholder }}
      />
      {isAdmin && isEditing && (
        <button
          onClick={handleEdit}
          className="absolute -top-2 -right-2 w-7 h-7 bg-[#004FED] text-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200 hover:bg-[#0066FF] shadow-lg"
        >
          <Edit3 className="w-3 h-3" />
        </button>
      )}
      {isNavigable && !isAdmin && (
        <div className="absolute -top-1 -right-1 w-4 h-4 bg-[#004FED]/20 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200">
          🔗
        </div>
      )}
    </div>
  );
};

// Page Search Component
const PageSearch: React.FC<{ onSelect: (page: any) => void; onClose: () => void }> = ({ onSelect, onClose }) => {
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
export default EditableText;