import React, { useState } from 'react';
import { useCMS } from '../../contexts/CMSContext';
import EditableText from './EditableText';
import EditableCard from './EditableCard';
import { CheckCircle, Edit3, Save, X, Plus, Trash2, ExternalLink, Link } from 'lucide-react';

interface EditablePricingCardProps {
  id: string;
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  popular?: boolean;
  buttonText?: string;
  buttonLink?: string;
  buttonType?: 'internal' | 'external';
  onDelete?: () => void;
  onDuplicate?: () => void;
  onAddFeature?: () => void;
  onRemoveFeature?: (index: number) => void;
  onUpdateButton?: (text: string, link: string, type: 'internal' | 'external') => void;
}

const EditablePricingCard: React.FC<EditablePricingCardProps> = ({
  id,
  name,
  price,
  period,
  description,
  features,
  popular = false,
  buttonText = 'Get Started',
  buttonLink = '#contact',
  buttonType = 'internal',
  onDelete,
  onDuplicate,
  onAddFeature,
  onRemoveFeature,
  onUpdateButton
}) => {
  const { isAdmin, isEditing } = useCMS();
  const [editingButton, setEditingButton] = useState(false);
  const [tempButtonText, setTempButtonText] = useState(buttonText);
  const [tempButtonLink, setTempButtonLink] = useState(buttonLink);
  const [tempButtonType, setTempButtonType] = useState<'internal' | 'external'>(buttonType);

  const handleButtonClick = (e: React.MouseEvent) => {
    if (isAdmin && isEditing) {
      e.preventDefault();
      setEditingButton(true);
      return;
    }

    if (buttonType === 'external') {
      window.open(buttonLink, '_blank', 'noopener noreferrer');
    } else {
      // For internal links
      if (buttonLink.startsWith('#')) {
        // Scroll to section
        const element = document.querySelector(buttonLink);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      } else {
        // Navigate to page - you can implement your routing logic here
        window.location.href = buttonLink;
      }
    }
  };

  const saveButtonEdit = () => {
    if (onUpdateButton) {
      onUpdateButton(tempButtonText, tempButtonLink, tempButtonType);
    }
    setEditingButton(false);
  };

  const cancelButtonEdit = () => {
    setTempButtonText(buttonText);
    setTempButtonLink(buttonLink);
    setTempButtonType(buttonType);
    setEditingButton(false);
  };

  return (
    <EditableCard
      id={id}
      className={`relative bg-white rounded-3xl p-10 shadow-xl border transition-all duration-500 hover:-translate-y-2 ${
        popular 
          ? 'border-[#004FED] shadow-2xl shadow-[#004FED]/20' 
          : 'border-gray-100 hover:shadow-2xl hover:shadow-[#004FED]/10'
      }`}
      canDelete={!!onDelete}
      onDelete={onDelete}
      canDuplicate={!!onDuplicate}
      onDuplicate={onDuplicate}
    >
      {popular && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
          <EditableText
            id={`${id}-popular-badge`}
            defaultContent="Most Popular"
            className="bg-gradient-to-r from-[#004FED] to-[#0066FF] text-white px-6 py-2 rounded-full text-sm font-bold"
            tag="span"
          />
        </div>
      )}

      <div className="text-center mb-8">
        <EditableText
          id={`${id}-name`}
          defaultContent={name}
          className="text-2xl font-bold text-gray-900 mb-4"
          tag="h3"
        />
        <div className="mb-4">
          <EditableText
            id={`${id}-price`}
            defaultContent={price}
            className="text-4xl font-black text-[#004FED] inline"
            tag="span"
          />
          <EditableText
            id={`${id}-period`}
            defaultContent={period}
            className="text-gray-600 ml-2 inline"
            tag="span"
          />
        </div>
        <EditableText
          id={`${id}-description`}
          defaultContent={description}
          className="text-gray-600"
          tag="p"
        />
      </div>

      <div className="mb-10">
        <div className="flex items-center justify-between mb-4">
          <h4 className="font-semibold text-gray-900">Features:</h4>
          {isAdmin && isEditing && onAddFeature && (
            <button
              onClick={onAddFeature}
              className="flex items-center space-x-1 text-[#004FED] hover:text-[#0066FF] text-sm font-medium"
            >
              <Plus className="w-4 h-4" />
              <span>Add Feature</span>
            </button>
          )}
        </div>
        <ul className="space-y-4">
          {features.map((feature, featureIndex) => (
            <li key={featureIndex} className="flex items-center space-x-3 group">
              <CheckCircle className="w-5 h-5 text-[#004FED] flex-shrink-0" />
              <EditableText
                id={`${id}-feature-${featureIndex}`}
                defaultContent={feature}
                className="text-gray-600 flex-1"
                tag="span"
              />
              {isAdmin && isEditing && onRemoveFeature && features.length > 1 && (
                <button
                  onClick={() => onRemoveFeature(featureIndex)}
                  className="opacity-0 group-hover:opacity-100 text-red-500 hover:text-red-700 text-sm flex items-center space-x-1"
                >
                  <Trash2 className="w-3 h-3" />
                  <span>Remove</span>
                </button>
              )}
            </li>
          ))}
        </ul>
      </div>

      {/* Button Section */}
      {editingButton ? (
        <div className="space-y-4 p-4 bg-gray-50 rounded-xl">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Button Text</label>
            <input
              type="text"
              value={tempButtonText}
              onChange={(e) => setTempButtonText(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#004FED]/20"
              placeholder="Button text"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Link Type</label>
            <select
              value={tempButtonType}
              onChange={(e) => setTempButtonType(e.target.value as 'internal' | 'external')}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#004FED]/20"
            >
              <option value="internal">Internal Page</option>
              <option value="external">External URL</option>
            </select>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              {tempButtonType === 'internal' ? 'Page URL' : 'External URL'}
            </label>
            <input
              type="text"
              value={tempButtonLink}
              onChange={(e) => setTempButtonLink(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#004FED]/20"
              placeholder={tempButtonType === 'internal' ? '/contact or #section' : 'https://example.com'}
            />
          </div>
          
          <div className="flex space-x-2">
            <button
              onClick={saveButtonEdit}
              className="flex items-center space-x-1 bg-[#004FED] text-white px-4 py-2 rounded-lg text-sm hover:bg-[#0066FF] transition-colors"
            >
              <Save className="w-4 h-4" />
              <span>Save</span>
            </button>
            <button
              onClick={cancelButtonEdit}
              className="flex items-center space-x-1 bg-gray-500 text-white px-4 py-2 rounded-lg text-sm hover:bg-gray-600 transition-colors"
            >
              <X className="w-4 h-4" />
              <span>Cancel</span>
            </button>
          </div>
        </div>
      ) : (
        <div className="relative group">
          <button
            onClick={handleButtonClick}
            className={`w-full py-4 rounded-xl font-bold transition-all duration-300 flex items-center justify-center space-x-2 ${
              popular
                ? 'bg-gradient-to-r from-[#004FED] to-[#0066FF] text-white hover:shadow-xl hover:shadow-[#004FED]/30'
                : 'bg-gray-100 text-gray-900 hover:bg-[#004FED]/10 hover:text-[#004FED]'
            }`}
          >
            <span>{buttonText}</span>
            {buttonType === 'external' && <ExternalLink className="w-4 h-4" />}
          </button>
          
          {isAdmin && isEditing && (
            <button
              onClick={(e) => {
                e.preventDefault();
                setEditingButton(true);
              }}
              className="absolute -top-2 -right-2 w-6 h-6 bg-[#004FED] text-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200 hover:bg-[#0066FF]"
            >
              <Edit3 className="w-3 h-3" />
            </button>
          )}
        </div>
      )}
    </EditableCard>
  );
};

export default EditablePricingCard;