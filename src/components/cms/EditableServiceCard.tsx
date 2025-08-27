import React, { useState } from 'react';
import { useCMS } from '../../contexts/CMSContext';
import EditableText from './EditableText';
import EditableCard from './EditableCard';
import { DivideIcon as LucideIcon } from 'lucide-react';

interface EditableServiceCardProps {
  id: string;
  icon: LucideIcon;
  title: string;
  description: string;
  color: string;
  onDelete?: () => void;
  onDuplicate?: () => void;
}

const EditableServiceCard: React.FC<EditableServiceCardProps> = ({
  id,
  icon: Icon,
  title,
  description,
  color,
  onDelete,
  onDuplicate
}) => {
  return (
    <EditableCard
      id={id}
      className="bg-white rounded-3xl p-10 shadow-lg border border-gray-100 hover:shadow-2xl hover:shadow-[#004FED]/10 hover:-translate-y-4 transition-all duration-500"
      canDelete={!!onDelete}
      onDelete={onDelete}
      canDuplicate={!!onDuplicate}
      onDuplicate={onDuplicate}
    >
      <div className={`w-20 h-20 rounded-2xl bg-gradient-to-r ${color} p-5 mb-8 group-hover:scale-125 group-hover:rotate-6 transition-all duration-500 shadow-lg`}>
        <Icon className="w-10 h-10 text-white" />
      </div>
      
      <EditableText
        id={`${id}-title`}
        defaultContent={title}
        className="text-2xl font-bold text-gray-900 mb-6 group-hover:text-[#004FED] transition-colors duration-300"
        tag="h3"
      />
      
      <EditableText
        id={`${id}-description`}
        defaultContent={description}
        className="text-gray-600 leading-relaxed text-lg"
        tag="p"
      />
    </EditableCard>
  );
};

export default EditableServiceCard;