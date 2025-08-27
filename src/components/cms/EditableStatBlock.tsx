import React from 'react';
import { useCMS } from '../../contexts/CMSContext';
import EditableText from './EditableText';
import EditableCard from './EditableCard';

interface EditableStatBlockProps {
  id: string;
  number: string;
  label: string;
  icon?: React.ComponentType<{ className?: string }>;
  className?: string;
  numberClassName?: string;
  labelClassName?: string;
  onDelete?: () => void;
  onDuplicate?: () => void;
}

const EditableStatBlock: React.FC<EditableStatBlockProps> = ({
  id,
  number,
  label,
  icon: Icon,
  className = '',
  numberClassName = '',
  labelClassName = '',
  onDelete,
  onDuplicate
}) => {
  const { isAdmin, isEditing } = useCMS();

  return (
    <EditableCard
      id={id}
      className={`text-center group cursor-pointer ${className}`}
      canDelete={!!onDelete}
      onDelete={onDelete}
      canDuplicate={!!onDuplicate}
      onDuplicate={onDuplicate}
    >
      {Icon && (
        <div className="w-20 h-20 bg-gradient-to-r from-[#004FED]/10 to-[#0066FF]/20 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-125 transition-all duration-500 shadow-lg">
          <Icon className="w-10 h-10 text-[#004FED]" />
        </div>
      )}
      
      <EditableText
        id={`${id}-number`}
        defaultContent={number}
        className={`text-4xl md:text-5xl font-black text-[#004FED] mb-3 block ${numberClassName}`}
        tag="div"
      />
      
      <EditableText
        id={`${id}-label`}
        defaultContent={label}
        className={`text-gray-600 font-semibold text-lg ${labelClassName}`}
        tag="div"
      />
    </EditableCard>
  );
};

export default EditableStatBlock;