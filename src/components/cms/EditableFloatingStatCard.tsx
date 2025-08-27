import React from 'react';
import { useCMS } from '../../contexts/CMSContext';
import EditableText from './EditableText';
import EditableCard from './EditableCard';

interface EditableFloatingStatCardProps {
  id: string;
  number: string;
  label: string;
  icon?: React.ComponentType<{ className?: string }>;
  className?: string;
  onDelete?: () => void;
  onDuplicate?: () => void;
}

const EditableFloatingStatCard: React.FC<EditableFloatingStatCardProps> = ({
  id,
  number,
  label,
  icon: Icon,
  className = '',
  onDelete,
  onDuplicate
}) => {
  return (
    <EditableCard
      id={id}
      className={`bg-white/90 backdrop-blur-md rounded-2xl p-6 shadow-2xl border border-gray-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 ${className}`}
      canDelete={!!onDelete}
      onDelete={onDelete}
      canDuplicate={!!onDuplicate}
      onDuplicate={onDuplicate}
    >
      <div className="flex items-center space-x-4">
        {Icon && (
          <div className="w-16 h-16 bg-gradient-to-r from-[#004FED] to-[#0066FF] rounded-xl flex items-center justify-center flex-shrink-0">
            <Icon className="w-8 h-8 text-white" />
          </div>
        )}
        <div>
          <EditableText
            id={`${id}-number`}
            defaultContent={number}
            className="font-bold text-gray-900 text-lg block"
            tag="div"
          />
          <EditableText
            id={`${id}-label`}
            defaultContent={label}
            className="text-gray-600"
            tag="div"
          />
        </div>
      </div>
    </EditableCard>
  );
};

export default EditableFloatingStatCard;