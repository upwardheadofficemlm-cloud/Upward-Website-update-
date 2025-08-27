import React, { useState } from 'react';
import { useCMS } from '../../contexts/CMSContext';
import { Plus, Trash2, Copy, Edit3 } from 'lucide-react';

interface EditableSectionProps {
  id: string;
  title?: string;
  children: React.ReactNode;
  className?: string;
  canDelete?: boolean;
  canDuplicate?: boolean;
  canAddItems?: boolean;
  onDelete?: () => void;
  onDuplicate?: () => void;
  onAddItem?: () => void;
}

const EditableSection: React.FC<EditableSectionProps> = ({
  id,
  title,
  children,
  className = '',
  canDelete = false,
  canDuplicate = false,
  canAddItems = false,
  onDelete,
  onDuplicate,
  onAddItem
}) => {
  const { isAdmin, isEditing } = useCMS();
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className={`relative ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {children}
      
      {/* Admin Controls */}
      {isAdmin && isEditing && isHovered && (
        <div className="absolute top-4 right-4 flex space-x-2 z-10">
          {canAddItems && onAddItem && (
            <button
              onClick={onAddItem}
              className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center hover:bg-green-600 transition-colors shadow-lg"
              title="Add Item"
            >
              <Plus className="w-4 h-4" />
            </button>
          )}
          {canDuplicate && onDuplicate && (
            <button
              onClick={onDuplicate}
              className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors shadow-lg"
              title="Duplicate Section"
            >
              <Copy className="w-4 h-4" />
            </button>
          )}
          {canDelete && onDelete && (
            <button
              onClick={onDelete}
              className="w-8 h-8 bg-red-500 text-white rounded-full flex items-center justify-center hover:bg-red-600 transition-colors shadow-lg"
              title="Delete Section"
            >
              <Trash2 className="w-4 h-4" />
            </button>
          )}
          <div className="w-8 h-8 bg-[#004FED] text-white rounded-full flex items-center justify-center shadow-lg">
            <Edit3 className="w-4 h-4" />
          </div>
        </div>
      )}
    </div>
  );
};

export default EditableSection;