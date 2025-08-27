import React, { useState } from 'react';
import { useCMS } from '../../contexts/CMSContext';
import EditableText from './EditableText';
import EditableCard from './EditableCard';
import { DivideIcon as LucideIcon, ArrowRight } from 'lucide-react';

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
  const { isAdmin, isEditing } = useCMS();
  
  return (
    <EditableCard
      id={id}
      className="bg-white rounded-3xl p-10 shadow-lg border border-gray-100 hover:shadow-2xl hover:shadow-[#004FED]/10 hover:-translate-y-4 transition-all duration-500 relative group"
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
        className="text-gray-600 leading-relaxed text-lg mb-6"
        tag="p"
      />
      
      {/* Click indicator - only show when not in edit mode */}
      {(!isAdmin || !isEditing) && (
        <div className="flex items-center justify-between mt-auto">
          <div className="flex items-center text-[#004FED] font-semibold group-hover:text-[#0066FF] transition-colors duration-300">
            <span>Learn More</span>
            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
          </div>
        </div>
      )}
    </EditableCard>
  );
};

export default EditableServiceCard;