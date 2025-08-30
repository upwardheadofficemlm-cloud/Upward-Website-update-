import React, { useState } from 'react';
import { useCMS } from '../../contexts/CMSContext';
import { Image, Upload } from 'lucide-react';

interface EditableImageProps {
  id: string;
  defaultSrc: string;
  alt: string;
  className?: string;
  onImageChange?: (newSrc: string) => void;
}

const EditableImage: React.FC<EditableImageProps> = ({
  id,
  defaultSrc,
  alt,
  className = '',
  onImageChange
}) => {
  const { isEditing } = useCMS();
  const [imageSrc, setImageSrc] = useState(defaultSrc);
  const [isHovered, setIsHovered] = useState(false);

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const newSrc = e.target?.result as string;
        setImageSrc(newSrc);
        onImageChange?.(newSrc);
        
        // Save to localStorage for persistence
        const savedImages = JSON.parse(localStorage.getItem('upward-editable-images') || '{}');
        savedImages[id] = newSrc;
        localStorage.setItem('upward-editable-images', JSON.stringify(savedImages));
      };
      reader.readAsDataURL(file);
    }
  };

  // Load saved image on component mount
  React.useEffect(() => {
    const savedImages = JSON.parse(localStorage.getItem('upward-editable-images') || '{}');
    if (savedImages[id]) {
      setImageSrc(savedImages[id]);
    }
  }, [id]);

  return (
    <div
      className={`relative group ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img
        src={imageSrc}
        alt={alt}
        className={`w-full h-full object-cover ${className}`}
      />
      
      {isEditing && (
        <div className={`absolute inset-0 bg-black/50 flex items-center justify-center transition-opacity duration-300 ${
          isHovered ? 'opacity-100' : 'opacity-0'
        }`}>
          <label className="cursor-pointer">
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="hidden"
            />
            <div className="flex items-center space-x-2 bg-white text-gray-900 px-4 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              <Upload className="w-4 h-4" />
              <span>Change Image</span>
            </div>
          </label>
        </div>
      )}
      
      {isEditing && !isHovered && (
        <div className="absolute top-2 right-2 bg-[#004FED] text-white p-1 rounded-lg">
          <Image className="w-4 h-4" />
        </div>
      )}
    </div>
  );
};

export default EditableImage;