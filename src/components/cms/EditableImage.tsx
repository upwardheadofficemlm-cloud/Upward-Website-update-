import React, { useState, useRef, useEffect } from 'react';
import { useCMS } from '../../contexts/CMSContext';
import { Upload, Edit3, Save, X, Image as ImageIcon, Link, ExternalLink } from 'lucide-react';

interface EditableImageProps {
  id: string;
  defaultSrc: string;
  alt?: string;
  className?: string;
  containerClassName?: string;
}

const EditableImage: React.FC<EditableImageProps> = ({
  id,
  defaultSrc,
  alt = '',
  className = '',
  containerClassName = ''
}) => {
  const { content, isEditing, isAdmin, uploadImage, updateContent } = useCMS();
  const [isLocalEditing, setIsLocalEditing] = useState(false);
  const [localAlt, setLocalAlt] = useState(alt);
  const [localSrc, setLocalSrc] = useState('');
  const [uploadMethod, setUploadMethod] = useState<'file' | 'url'>('file');
  const [uploading, setUploading] = useState(false);
  const [dragOver, setDragOver] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const currentImage = content[id]?.content || defaultSrc;
  const currentAlt = content[id]?.alt || alt;

  useEffect(() => {
    setLocalSrc(currentImage);
    setLocalAlt(currentAlt);
  }, [currentImage, currentAlt]);

  const handleEdit = () => {
    if (!isAdmin || !isEditing) return;
    setIsLocalEditing(true);
    setLocalAlt(currentAlt);
    setLocalSrc(currentImage);
  };

  const handleFileSelect = async (file: File) => {
    const allowedTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/gif', 'image/webp'];
    if (!allowedTypes.includes(file.type.toLowerCase())) {
      alert('Please select a valid image file (JPEG, PNG, GIF, WebP)');
      return;
    }

    if (file.size > 10 * 1024 * 1024) { // 10MB limit
      alert('Image size should be less than 10MB');
      return;
    }

    try {
      setUploading(true);
      await uploadImage(id, file, localAlt);
      setIsLocalEditing(false);
    } catch (error) {
      console.error('Error uploading image:', error);
      alert('Error uploading image. Please try again.');
    } finally {
      setUploading(false);
    }
  };

  const handleUrlSave = async () => {
    if (!localSrc.trim()) {
      alert('Please enter a valid image URL');
      return;
    }

    // Basic URL validation
    if (!localSrc.startsWith('http://') && !localSrc.startsWith('https://')) {
      alert('Please enter a valid URL starting with http:// or https://');
      return;
    }

    try {
      setUploading(true);
      console.log('Saving image URL:', localSrc);
      await updateContent(id, localSrc, 'image', localAlt);
      console.log('Image URL saved successfully');
      setIsLocalEditing(false);
      
      // Show success feedback
      const successDiv = document.createElement('div');
      successDiv.className = 'fixed top-4 right-4 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg z-50';
      successDiv.textContent = 'Image updated successfully!';
      document.body.appendChild(successDiv);
      setTimeout(() => {
        if (document.body.contains(successDiv)) {
          document.body.removeChild(successDiv);
        }
      }, 2000);
      
    } catch (error) {
      console.error('Error updating image URL:', error);
      
      // Show error feedback
      const errorDiv = document.createElement('div');
      errorDiv.className = 'fixed top-4 right-4 bg-red-500 text-white px-6 py-3 rounded-lg shadow-lg z-50';
      errorDiv.textContent = 'Error updating image. Please try again.';
      document.body.appendChild(errorDiv);
      setTimeout(() => {
        if (document.body.contains(errorDiv)) {
          document.body.removeChild(errorDiv);
        }
      }, 3000);
    } finally {
      setUploading(false);
    }
  };

  const handleFileInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      handleFileSelect(file);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setDragOver(false);
    const file = e.dataTransfer.files[0];
    if (file) {
      handleFileSelect(file);
    }
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setDragOver(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setDragOver(false);
  };

  const handleCancel = () => {
    setLocalAlt(currentAlt);
    setLocalSrc(currentImage);
    setIsLocalEditing(false);
    setUploadMethod('file');
  };

  if (isLocalEditing) {
    return (
      <div className={`${containerClassName} relative`}>
        <div className="bg-white/95 backdrop-blur-md rounded-2xl p-6 shadow-2xl border border-gray-200">
          {/* Method Selection */}
          <div className="flex items-center space-x-4 mb-6">
            <button
              onClick={() => setUploadMethod('file')}
              className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                uploadMethod === 'file'
                  ? 'bg-[#004FED] text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              <Upload className="w-4 h-4" />
              <span>Upload File</span>
            </button>
            <button
              onClick={() => setUploadMethod('url')}
              className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                uploadMethod === 'url'
                  ? 'bg-[#004FED] text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              <Link className="w-4 h-4" />
              <span>Use URL</span>
            </button>
          </div>

          {uploadMethod === 'file' ? (
            <div
              className={`border-2 border-dashed rounded-xl p-8 text-center transition-all duration-200 ${
                dragOver 
                  ? 'border-[#004FED] bg-[#004FED]/5' 
                  : 'border-gray-300 hover:border-[#004FED]/50'
              }`}
              onDrop={handleDrop}
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
            >
              {uploading ? (
                <div className="flex flex-col items-center space-y-4">
                  <div className="w-8 h-8 border-2 border-[#004FED] border-t-transparent rounded-full animate-spin"></div>
                  <span className="text-gray-600 font-medium">Processing image...</span>
                </div>
              ) : (
                <>
                  <ImageIcon className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-600 mb-4 text-lg">
                    Drop your image here or{' '}
                    <button
                      onClick={() => fileInputRef.current?.click()}
                      className="text-[#004FED] hover:text-[#0066FF] font-semibold underline"
                    >
                      browse files
                    </button>
                  </p>
                  <p className="text-sm text-gray-500">Supports: JPEG, PNG, GIF, WebP (max 10MB)</p>
                </>
              )}
            </div>
          ) : (
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Image URL
                </label>
                <div className="relative">
                  <input
                    type="url"
                    value={localSrc}
                    onChange={(e) => setLocalSrc(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#004FED]/20 focus:border-[#004FED] pr-12"
                    placeholder="https://example.com/image.png"
                  />
                  <ExternalLink className="absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                </div>
                <p className="text-xs text-gray-500 mt-1">
                  Enter a direct link to an image (JPEG, PNG, GIF, WebP)
                </p>
              </div>

              {/* Preview */}
              {localSrc && (
                <div className="mt-4">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Preview</label>
                  <div className="w-full max-w-xs mx-auto">
                    <img
                      src={localSrc}
                      alt="Preview"
                      className="w-full h-32 object-cover rounded-lg border border-gray-200"
                      onError={() => {
                        alert('Invalid image URL. Please check the URL and try again.');
                      }}
                    />
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Alt Text */}
          <div className="mt-6">
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Alt Text (for accessibility)
            </label>
            <input
              type="text"
              value={localAlt}
              onChange={(e) => setLocalAlt(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#004FED]/20 focus:border-[#004FED]"
              placeholder="Describe this image for screen readers..."
            />
          </div>

          {/* Action Buttons */}
          <div className="flex items-center space-x-3 mt-6">
            {uploadMethod === 'url' ? (
              <button
                onClick={handleUrlSave}
                disabled={uploading || !localSrc.trim()}
                className="flex items-center space-x-2 bg-[#004FED] text-white px-6 py-3 rounded-xl text-sm font-semibold hover:bg-[#0066FF] transition-colors disabled:opacity-50 disabled:cursor-not-allowed shadow-lg"
              >
                <Save className="w-4 h-4" />
                <span>{uploading ? 'Saving...' : 'Save Image'}</span>
              </button>
            ) : null}
            
            <button
              onClick={handleCancel}
              className="flex items-center space-x-2 bg-gray-500 text-white px-6 py-3 rounded-xl text-sm font-semibold hover:bg-gray-600 transition-colors shadow-lg"
            >
              <X className="w-4 h-4" />
              <span>Cancel</span>
            </button>
          </div>

          <input
            ref={fileInputRef}
            type="file"
            accept="image/jpeg,image/jpg,image/png,image/gif,image/webp"
            onChange={handleFileInputChange}
            className="hidden"
          />
        </div>
      </div>
    );
  }

  return (
    <div className={`${containerClassName} relative group`}>
      <img
        src={currentImage}
        alt={currentAlt}
        className={`${className} ${isAdmin && isEditing ? 'cursor-pointer hover:opacity-80 transition-opacity duration-200' : ''}`}
        onClick={handleEdit}
        onError={(e) => {
          // Fallback to default image if current image fails to load
          const target = e.target as HTMLImageElement;
          if (target.src !== defaultSrc) {
            target.src = defaultSrc;
          }
        }}
      />
      {isAdmin && isEditing && (
        <button
          onClick={handleEdit}
          className="absolute top-2 right-2 w-10 h-10 bg-[#004FED] text-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200 hover:bg-[#0066FF] shadow-lg"
        >
          <Upload className="w-5 h-5" />
        </button>
      )}
    </div>
  );
};

export default EditableImage;