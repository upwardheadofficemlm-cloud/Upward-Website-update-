import React, { useState } from 'react';
import { useCMS } from '../../contexts/CMSContext';
import { Edit3, Save, X, Palette, Search, Share2, BarChart3, Video, Megaphone, Globe, Target, Users, Award, CheckCircle, Clock, MapPin, Phone, Mail, Star, TrendingUp, Lightbulb, Heart, Shield, Calendar, GraduationCap, BookOpen, Monitor, Zap, Wifi } from 'lucide-react';

interface EditableIconProps {
  id: string;
  defaultIcon: string;
  className?: string;
  size?: number;
  onIconChange?: (newIcon: string) => void;
}

const iconMap = {
  'palette': Palette,
  'search': Search,
  'share2': Share2,
  'bar-chart3': BarChart3,
  'video': Video,
  'megaphone': Megaphone,
  'globe': Globe,
  'target': Target,
  'users': Users,
  'award': Award,
  'check-circle': CheckCircle,
  'clock': Clock,
  'map-pin': MapPin,
  'phone': Phone,
  'mail': Mail,
  'star': Star,
  'trending-up': TrendingUp,
  'lightbulb': Lightbulb,
  'heart': Heart,
  'shield': Shield,
  'calendar': Calendar,
  'graduation-cap': GraduationCap,
  'book-open': BookOpen,
  'monitor': Monitor,
  'zap': Zap,
  'wifi': Wifi
};

const EditableIcon: React.FC<EditableIconProps> = ({
  id,
  defaultIcon,
  className = '',
  size = 24,
  onIconChange
}) => {
  const { isAdmin, isEditing } = useCMS();
  const [editingIcon, setEditingIcon] = useState(false);
  const [selectedIcon, setSelectedIcon] = useState(defaultIcon);

  const IconComponent = iconMap[selectedIcon as keyof typeof iconMap] || Target;

  const handleIconSelect = (iconName: string) => {
    setSelectedIcon(iconName);
    if (onIconChange) {
      onIconChange(iconName);
    }
    setEditingIcon(false);
  };

  if (editingIcon) {
    return (
      <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center">
        <div className="bg-white rounded-2xl p-8 shadow-2xl border border-gray-100 w-full max-w-4xl max-h-[80vh] overflow-y-auto">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-2xl font-bold text-gray-900">Choose Icon</h3>
            <button
              onClick={() => setEditingIcon(false)}
              className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
          
          <div className="grid grid-cols-6 md:grid-cols-8 lg:grid-cols-10 gap-4">
            {Object.entries(iconMap).map(([iconName, Icon]) => (
              <button
                key={iconName}
                onClick={() => handleIconSelect(iconName)}
                className={`p-4 rounded-xl border-2 transition-all duration-200 hover:scale-110 ${
                  selectedIcon === iconName
                    ? 'border-[#004FED] bg-[#004FED]/10'
                    : 'border-gray-200 hover:border-[#004FED]/50'
                }`}
                title={iconName}
              >
                <Icon className="w-6 h-6 text-gray-700" />
              </button>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative group">
      <IconComponent className={className} style={{ width: size, height: size }} />
      {isAdmin && isEditing && (
        <button
          onClick={() => setEditingIcon(true)}
          className="absolute -top-1 -right-1 w-5 h-5 bg-[#004FED] text-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200 hover:bg-[#0066FF]"
        >
          <Edit3 className="w-2 h-2" />
        </button>
      )}
    </div>
  );
};

export default EditableIcon;