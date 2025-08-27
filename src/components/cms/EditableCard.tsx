import React, { useState } from 'react';
import { useCMS } from '../../contexts/CMSContext';
import { Edit3, Save, X, Plus, Trash2 } from 'lucide-react';
import EditableText from './EditableText';

interface EditableCardProps {
  id: string;
  className?: string;
  children: React.ReactNode;
  canDelete?: boolean;
  onDelete?: () => void;
  canDuplicate?: boolean;
  onDuplicate?: () => void;
}

const EditableCard: React.FC<EditableCardProps> = ({
  id,
  className = '',
  children,
  canDelete = false,
  onDelete,
  canDuplicate = false,
  onDuplicate
}) => {
  const { isAdmin, isEditing } = useCMS();
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className={`relative group ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {children}
      
      {/* Admin Controls */}
      {isAdmin && isEditing && isHovered && (
        <div className="absolute -top-2 -right-2 flex space-x-1 z-10">
          {canDuplicate && onDuplicate && (
            <button
              onClick={onDuplicate}
              className="w-6 h-6 bg-green-500 text-white rounded-full flex items-center justify-center hover:bg-green-600 transition-colors shadow-lg"
              title="Duplicate Card"
            >
              <Plus className="w-3 h-3" />
            </button>
          )}
          {canDelete && onDelete && (
            <button
              onClick={onDelete}
              className="w-6 h-6 bg-red-500 text-white rounded-full flex items-center justify-center hover:bg-red-600 transition-colors shadow-lg"
              title="Delete Card"
            >
              <Trash2 className="w-3 h-3" />
            </button>
          )}
          <div className="w-6 h-6 bg-[#004FED] text-white rounded-full flex items-center justify-center shadow-lg">
            <Edit3 className="w-3 h-3" />
          </div>
        </div>
      )}
    </div>
  );
};

export default EditableCard;