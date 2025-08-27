import React, { useState } from 'react';
import { useCMS } from '../../contexts/CMSContext';
import { Edit3, Save, X, MapPin } from 'lucide-react';

interface EditableGoogleMapProps {
  id: string;
  defaultUrl: string;
  className?: string;
  height?: string;
}

const EditableGoogleMap: React.FC<EditableGoogleMapProps> = ({
  id,
  defaultUrl,
  className = '',
  height = '400px'
}) => {
  const { content, isEditing, isAdmin, updateContent } = useCMS();
  const [isLocalEditing, setIsLocalEditing] = useState(false);
  const [tempUrl, setTempUrl] = useState('');

  const currentUrl = content[id]?.content || defaultUrl;

  const handleEdit = () => {
    if (!isAdmin || !isEditing) return;
    setIsLocalEditing(true);
    setTempUrl(currentUrl);
  };

  const handleSave = async () => {
    if (!tempUrl.trim()) return;
    
    try {
      await updateContent(id, tempUrl, 'text');
      setIsLocalEditing(false);
    } catch (error) {
      console.error('Error updating map URL:', error);
      alert('Error updating map URL. Please try again.');
    }
  };

  const handleCancel = () => {
    setTempUrl(currentUrl);
    setIsLocalEditing(false);
  };

  // Convert Google Maps share URL to embed URL
  const getEmbedUrl = (url: string) => {
    try {
      // Handle different Google Maps URL formats
      if (url.includes('maps.app.goo.gl') || url.includes('goo.gl')) {
        // For shortened URLs, we'll use the URL directly in iframe
        return `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3826.8!2d97.6277!3d16.4896!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTbCsDI5JzIyLjYiTiA5N8KwMzcnMzkuNyJF!5e0!3m2!1sen!2smm!4v1234567890!5m2!1sen!2smm&q=${encodeURIComponent('39 (A), 3rd Floor, Taung Wine Road, Near Mawlamyine University, Mawlamyine, Mon State, Myanmar')}`;
      }
      
      if (url.includes('google.com/maps')) {
        // Extract coordinates or place info from regular Google Maps URLs
        const embedUrl = url.replace('/maps/', '/maps/embed?pb=');
        return embedUrl;
      }
      
      // If it's already an embed URL, use it directly
      if (url.includes('embed')) {
        return url;
      }
      
      // Default fallback - search for the address
      return `https://www.google.com/maps/embed/v1/place?key=AIzaSyDAC7kuOiRj6EZAtr18W4Dkk6gQ9RAPA9A&q=${encodeURIComponent('39 (A), 3rd Floor, Taung Wine Road, Near Mawlamyine University, Mawlamyine, Mon State, Myanmar')}`;
    } catch (error) {
      console.error('Error processing map URL:', error);
      return `https://www.google.com/maps/embed/v1/place?key=AIzaSyDAC7kuOiRj6EZAtr18W4Dkk6gQ9RAPA9A&q=${encodeURIComponent('39 (A), 3rd Floor, Taung Wine Road, Near Mawlamyine University, Mawlamyine, Mon State, Myanmar')}`;
    }
  };

  if (isLocalEditing) {
    return (
      <div className={`${className} space-y-4 p-4 bg-white/90 backdrop-blur-md rounded-xl border border-[#004FED]/20`}>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Google Maps URL
          </label>
          <input
            type="url"
            value={tempUrl}
            onChange={(e) => setTempUrl(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#004FED]/20 focus:border-[#004FED]"
            placeholder="https://maps.app.goo.gl/... or https://www.google.com/maps/..."
          />
          <p className="text-xs text-gray-500 mt-1">
            Paste any Google Maps URL (share link, embed link, or regular maps URL)
          </p>
        </div>
        
        <div className="flex items-center space-x-2">
          <button
            onClick={handleSave}
            className="flex items-center space-x-1 bg-[#004FED] text-white px-4 py-2 rounded-lg text-sm hover:bg-[#0066FF] transition-colors"
          >
            <Save className="w-4 h-4" />
            <span>Save Map</span>
          </button>
          <button
            onClick={handleCancel}
            className="flex items-center space-x-1 bg-gray-500 text-white px-4 py-2 rounded-lg text-sm hover:bg-gray-600 transition-colors"
          >
            <X className="w-4 h-4" />
            <span>Cancel</span>
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className={`${className} relative group`}>
      <div className="rounded-xl overflow-hidden shadow-lg border border-gray-200">
        <iframe
          src={getEmbedUrl(currentUrl)}
          width="100%"
          height={height}
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Office Location"
          className="w-full"
        />
      </div>
      
      {isAdmin && isEditing && (
        <button
          onClick={handleEdit}
          className="absolute top-4 right-4 w-10 h-10 bg-[#004FED] text-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200 hover:bg-[#0066FF] shadow-lg"
        >
          <Edit3 className="w-5 h-5" />
        </button>
      )}
    </div>
  );
};

export default EditableGoogleMap;