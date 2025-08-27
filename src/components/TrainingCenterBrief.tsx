import React from 'react';
import EditableText from './cms/EditableText';
import EditableImage from './cms/EditableImage';
import EditableButton from './cms/EditableButton';
import EditableSection from './cms/EditableSection';
import EditableStatBlock from './cms/EditableStatBlock';
import { GraduationCap, Users, Award, Clock, ArrowRight, BookOpen, Plus } from 'lucide-react';
import { useCMS } from '../contexts/CMSContext';

const TrainingCenterBrief = () => {
  const { isAdmin, isEditing } = useCMS();
  const [trainingStats, setTrainingStats] = React.useState([
    { id: 'training-brief-stat-1', number: '500+', label: 'Students Trained' },
    { id: 'training-brief-stat-2', number: '95%', label: 'Job Placement' },
    { id: 'training-brief-stat-3', number: '15+', label: 'Expert Instructors' }
  ]);

  const courses = [
    {
      title: 'Digital Marketing Fundamentals',
      duration: '4 weeks',
      level: 'Beginner',
      price: '150,000',
      icon: BookOpen
    },
    {
      title: 'Advanced Social Media Strategy',
      duration: '3 weeks',
      level: 'Intermediate',
      price: '120,000',
      icon: Users
    },
    {
      title: 'Brand Identity & Design',
      duration: '5 weeks',
      level: 'Beginner',
      price: '180,000',
      icon: Award
    }
  ];

  return (
    <section className="py-32 bg-gradient-to-br from-[#004FED]/5 via-white to-[#0066FF]/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* Content */}
          <div>
            <div className="inline-flex items-center px-6 py-3 bg-white/90 backdrop-blur-md rounded-full border border-[#004FED]/20 mb-8 shadow-lg">
              <GraduationCap className="w-5 h-5 text-[#004FED] mr-2" />
              <span className="text-base font-semibold text-[#004FED]">Professional Training</span>
            </div>
            
            <EditableText
              id="training-brief-title"
              defaultContent="Master Marketing Skills"
              className="text-4xl md:text-5xl font-black text-gray-900 mb-6"
              tag="h2"
            />
            
            <EditableText
              id="training-brief-description"
              defaultContent="Accelerate your career with hands-on marketing training from industry experts. Learn practical skills that drive real business results in Myanmar's growing market."
              className="text-xl text-gray-600 mb-8 leading-relaxed"
              tag="p"
            />

            {/* Quick Stats */}
            <EditableSection
              id="training-brief-stats-section"
              className="grid grid-cols-3 gap-6 mb-8"
              canAddItems={true}
              onAddItem={() => {
                const newStat = {
                  id: `training-brief-stat-${Date.now()}`,
                  number: '100+',
                  label: 'New Metric'
                };
                setTrainingStats([...trainingStats, newStat]);
              }}
            >
              {trainingStats.map((stat, index) => (
                <div key={stat.id} className="text-center">
                  <EditableStatBlock
                    id={stat.id}
                    number={stat.number}
                    label={stat.label}
                    numberClassName="text-2xl font-black text-[#004FED] mb-1"
                    labelClassName="text-gray-600 text-sm"
                    onDelete={() => {
                      if (trainingStats.length > 1 && window.confirm('Are you sure you want to remove this statistic?')) {
                        setTrainingStats(trainingStats.filter(s => s.id !== stat.id));
                      }
                    }}
                    onDuplicate={() => {
                      const newStat = {
                        ...stat,
                        id: `training-brief-stat-${Date.now()}`,
                        label: `${stat.label} Copy`
                      };
                      setTrainingStats([...trainingStats, newStat]);
                    }}
                  />
                </div>
              ))}
              
              {/* Add Stat Card */}
              {isAdmin && isEditing && (
                <div 
                  onClick={() => {
                    const newStat = {
                      id: `training-brief-stat-${Date.now()}`,
                      number: '100+',
                      label: 'New Metric'
                    };
                    setTrainingStats([...trainingStats, newStat]);
                  }}
                  className="text-center cursor-pointer hover:bg-[#004FED]/5 p-4 rounded-lg transition-all duration-300 border-2 border-dashed border-gray-300 hover:border-[#004FED]"
                >
                  <Plus className="w-8 h-8 text-gray-400 hover:text-[#004FED] mx-auto mb-2" />
                  <div className="text-xs text-gray-500 font-medium">Add Stat</div>
                </div>
              )}
            </EditableSection>

            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6">
              <EditableButton
                id="training-brief-cta-primary"
                defaultText="Explore Courses"
                defaultUrl="/training-center"
                defaultType="internal"
                className="bg-gradient-to-r from-[#004FED] to-[#0066FF] text-white px-8 py-4 rounded-xl text-lg font-bold hover:shadow-xl hover:shadow-[#004FED]/30 transform hover:-translate-y-2 transition-all duration-400"
              />
              <EditableButton
                id="training-brief-cta-secondary"
                defaultText="View Schedule"
                defaultUrl="/training-center#schedule"
                defaultType="internal"
                className="border-2 border-[#004FED] text-[#004FED] px-8 py-4 rounded-xl text-lg font-bold hover:bg-[#004FED] hover:text-white transition-all duration-400"
              />
            </div>
          </div>

          {/* Courses Preview */}
          <div className="space-y-6">
            {courses.map((course, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-500">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-[#004FED]/10 to-[#0066FF]/20 rounded-xl flex items-center justify-center">
                    <course.icon className="w-6 h-6 text-[#004FED]" />
                  </div>
                  <div className="flex-1">
                    <EditableText
                      id={`training-course-brief-title-${index}`}
                      defaultContent={course.title}
                      className="text-lg font-bold text-gray-900 mb-1"
                      tag="h4"
                    />
                    <div className="flex items-center space-x-4 text-sm text-gray-600">
                      <span className="flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        {course.duration}
                      </span>
                      <span className="px-2 py-1 bg-[#004FED]/10 text-[#004FED] rounded-full text-xs font-semibold">
                        {course.level}
                      </span>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-lg font-black text-[#004FED]">{course.price}</div>
                    <div className="text-xs text-gray-600">MMK</div>
                  </div>
                </div>
              </div>
            ))}
            
            <div className="text-center pt-4">
              <EditableButton
                id="training-view-all-courses"
                defaultText="View All Courses & Enroll"
                defaultUrl="/training-center"
                defaultType="internal"
                className="text-[#004FED] hover:text-[#0066FF] font-semibold transition-colors duration-300"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrainingCenterBrief;