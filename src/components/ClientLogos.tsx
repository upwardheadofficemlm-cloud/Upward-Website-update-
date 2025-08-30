import React from 'react';
import { useCMS } from '../contexts/CMSContext';
import EditableText from './cms/EditableText';
import EditableImage from './cms/EditableImage';
import EditableCard from './cms/EditableCard';
import EditableStatBlock from './cms/EditableStatBlock';
import EditableSection from './cms/EditableSection';
import { Plus, Trash2 } from 'lucide-react';

const ClientLogos = () => {
  const { isAdmin, isEditing } = useCMS();
  const [clientStats, setClientStats] = React.useState([
    { id: 'client-stat-1', number: '500+', label: 'Happy Clients' },
    { id: 'client-stat-2', number: '3000+', label: 'Projects Completed' },
    { id: 'client-stat-3', number: '15+', label: 'Industry Awards' },
    { id: 'client-stat-4', number: '24/7', label: 'Support' }
  ]);

  const [clients, setClients] = React.useState(() => {
    const savedClients = localStorage.getItem('upward-client-logos');
    if (savedClients) {
      try {
        return JSON.parse(savedClients);
      } catch (e) {
        console.log('Failed to parse saved clients, using defaults');
      }
    }
    
    return [
      {
        id: 'client-1',
        name: 'Golden Myanmar Restaurant',
        logo: 'https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=200&h=200',
        industry: 'Food & Beverage'
      },
      {
        id: 'client-2',
        name: 'Thanlwin Tech Hub',
        logo: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=200&h=200',
        industry: 'Technology'
      },
      {
        id: 'client-3',
        name: 'Mon State Tourism',
        logo: 'https://images.pexels.com/photos/2666598/pexels-photo-2666598.jpeg?auto=compress&cs=tinysrgb&w=200&h=200',
        industry: 'Tourism'
      },
      {
        id: 'client-4',
        name: 'Myanmar Gems Exhibition',
        logo: 'https://images.pexels.com/photos/1454169/pexels-photo-1454169.jpeg?auto=compress&cs=tinysrgb&w=200&h=200',
        industry: 'Retail'
      },
      {
        id: 'client-5',
        name: 'EcoGreen Myanmar',
        logo: 'https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg?auto=compress&cs=tinysrgb&w=200&h=200',
        industry: 'Environmental'
      },
      {
        id: 'client-6',
        name: 'Mon State Bank',
        logo: 'https://images.pexels.com/photos/164686/pexels-photo-164686.jpeg?auto=compress&cs=tinysrgb&w=200&h=200',
        industry: 'Finance'
      }
    ];
  });

  const addClient = () => {
    const newClient = {
      id: `client-${Date.now()}`,
      name: 'New Client',
      logo: 'https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=200&h=200',
      industry: 'Industry'
    };
    const updatedClients = [...clients, newClient];
    setClients(updatedClients);
    localStorage.setItem('upward-client-logos', JSON.stringify(updatedClients));
  };

  const removeClient = (clientId: string) => {
    if (clients.length <= 1) return;
    if (window.confirm('Are you sure you want to remove this client?')) {
      const updatedClients = clients.filter(client => client.id !== clientId);
      setClients(updatedClients);
      localStorage.setItem('upward-client-logos', JSON.stringify(updatedClients));
    }
  };

  const duplicateClient = (clientId: string) => {
    const clientToClone = clients.find(c => c.id === clientId);
    if (clientToClone) {
      const newClient = {
        ...clientToClone,
        id: `client-${Date.now()}`,
        name: `${clientToClone.name} Copy`
      };
      const updatedClients = [...clients, newClient];
      setClients(updatedClients);
      localStorage.setItem('upward-client-logos', JSON.stringify(updatedClients));
    }
  };

  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <EditableText
            id="clients-title"
            defaultContent="Trusted by Leading Brands"
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
            tag="h2"
          />
          <EditableText
            id="clients-description"
            defaultContent="Proud to work with amazing businesses across Myanmar and beyond"
            className="text-lg text-gray-600 max-w-2xl mx-auto"
            tag="p"
          />
        </div>

        {/* Animated Logo Carousel */}
        <div className="relative overflow-hidden">
          <div className="flex animate-scroll-left space-x-8">
            {/* First set of logos */}
            {clients.map((client, index) => (
              <EditableCard
                key={`first-${index}`}
                id={`client-logo-card-first-${client.id}`}
                className="flex-shrink-0 group cursor-pointer"
                canDelete={clients.length > 1}
                onDelete={() => removeClient(client.id)}
                canDuplicate={true}
                onDuplicate={() => duplicateClient(client.id)}
              >
                <div className="w-48 h-36 bg-white rounded-2xl shadow-lg border border-gray-100 flex items-center justify-center p-8 hover:shadow-xl hover:-translate-y-2 transition-all duration-500">
                  <EditableImage
                    id={`client-logo-${client.id}`}
                    defaultSrc={client.logo}
                    alt={client.name}
                    className="w-full h-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-500"
                  />
                </div>
                <div className="text-center mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <EditableText
                    id={`client-name-${client.id}`}
                    defaultContent={client.name}
                    className="text-sm font-semibold text-gray-900"
                    tag="div"
                  />
                  <EditableText
                    id={`client-industry-${client.id}`}
                    defaultContent={client.industry}
                    className="text-xs text-gray-500"
                    tag="div"
                  />
                </div>
              </EditableCard>
            ))}
            
            {/* 500+ Card - Always at the end of first set */}
            <div className="flex-shrink-0 group cursor-pointer">
              <div className="w-48 h-36 bg-gradient-to-br from-[#004FED] to-[#0066FF] rounded-2xl shadow-lg border border-[#004FED]/20 flex items-center justify-center p-8 hover:shadow-xl hover:-translate-y-2 transition-all duration-500">
                <div className="text-center text-white">
                  <div className="text-3xl font-black mb-2">500+</div>
                  <div className="text-sm font-semibold">Happy Clients</div>
                </div>
              </div>
            </div>
            
            {/* Add Client Card - Only visible in edit mode */}
            {isAdmin && isEditing && (
              <div 
                onClick={addClient}
                className="flex-shrink-0 cursor-pointer"
              >
                <div className="w-48 h-36 bg-white rounded-2xl shadow-lg border-2 border-dashed border-gray-300 hover:border-[#004FED] hover:bg-[#004FED]/5 transition-all duration-500 flex items-center justify-center">
                  <div className="text-center">
                    <Plus className="w-8 h-8 text-gray-400 hover:text-[#004FED] mx-auto mb-2" />
                    <span className="text-xs text-gray-500 font-medium">Add Client</span>
                  </div>
                </div>
              </div>
            )}
            
            {/* Duplicate set for seamless loop */}
            {clients.map((client, index) => (
              <EditableCard
                key={`second-${index}`}
                id={`client-logo-card-second-${client.id}`}
                className="flex-shrink-0 group cursor-pointer"
                canDelete={clients.length > 1}
                onDelete={() => removeClient(client.id)}
                canDuplicate={true}
                onDuplicate={() => duplicateClient(client.id)}
              >
                <div className="w-48 h-36 bg-white rounded-2xl shadow-lg border border-gray-100 flex items-center justify-center p-8 hover:shadow-xl hover:-translate-y-2 transition-all duration-500">
                  <EditableImage
                    id={`client-logo-duplicate-${client.id}`}
                    defaultSrc={client.logo}
                    alt={client.name}
                    className="w-full h-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-500"
                  />
                </div>
                <div className="text-center mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <EditableText
                    id={`client-name-duplicate-${client.id}`}
                    defaultContent={client.name}
                    className="text-sm font-semibold text-gray-900"
                    tag="div"
                  />
                  <EditableText
                    id={`client-industry-duplicate-${client.id}`}
                    defaultContent={client.industry}
                    className="text-xs text-gray-500"
                    tag="div"
                  />
                </div>
              </EditableCard>
            ))}
            
            {/* 500+ Card - Duplicate for seamless loop */}
            <div className="flex-shrink-0 group cursor-pointer">
              <div className="w-48 h-36 bg-gradient-to-br from-[#004FED] to-[#0066FF] rounded-2xl shadow-lg border border-[#004FED]/20 flex items-center justify-center p-8 hover:shadow-xl hover:-translate-y-2 transition-all duration-500">
                <div className="text-center text-white">
                  <div className="text-3xl font-black mb-2">500+</div>
                  <div className="text-sm font-semibold">Happy Clients</div>
                </div>
              </div>
            </div>
            
            {/* Add Client Card - Duplicate for seamless loop */}
            {isAdmin && isEditing && (
              <div 
                onClick={addClient}
                className="flex-shrink-0 cursor-pointer"
              >
                <div className="w-48 h-36 bg-white rounded-2xl shadow-lg border-2 border-dashed border-gray-300 hover:border-[#004FED] hover:bg-[#004FED]/5 transition-all duration-500 flex items-center justify-center">
                  <div className="text-center">
                    <Plus className="w-8 h-8 text-gray-400 hover:text-[#004FED] mx-auto mb-2" />
                    <span className="text-xs text-gray-500 font-medium">Add Client</span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Trust Indicators */}
        <EditableSection
          id="client-stats-section"
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20"
          canAddItems={true}
          onAddItem={() => {
            const newStat = {
              id: `client-stat-${Date.now()}`,
              number: '100+',
              label: 'New Metric'
            };
            setClientStats([...clientStats, newStat]);
          }}
        >
          {clientStats.map((stat, index) => (
            <EditableStatBlock
              key={stat.id}
              id={stat.id}
              number={stat.number}
              label={stat.label}
              className="text-center"
              numberClassName={`text-3xl font-black mb-2 ${index % 2 === 0 ? 'text-[#004FED]' : 'text-[#0066FF]'}`}
              labelClassName="text-gray-600 font-medium"
              onDelete={() => {
                if (clientStats.length > 1 && window.confirm('Are you sure you want to remove this statistic?')) {
                  setClientStats(clientStats.filter(s => s.id !== stat.id));
                }
              }}
              onDuplicate={() => {
                const newStat = {
                  ...stat,
                  id: `client-stat-${Date.now()}`,
                  label: `${stat.label} Copy`
                };
                setClientStats([...clientStats, newStat]);
              }}
            />
          ))}
          
          {/* Add Stat Card */}
          {isAdmin && isEditing && (
            <div 
              onClick={() => {
                const newStat = {
                  id: `client-stat-${Date.now()}`,
                  number: '100+',
                  label: 'New Metric'
                };
                setClientStats([...clientStats, newStat]);
              }}
              className="text-center cursor-pointer hover:bg-[#004FED]/5 p-4 rounded-lg transition-all duration-300 border-2 border-dashed border-gray-300 hover:border-[#004FED]"
            >
              <Plus className="w-8 h-8 text-gray-400 hover:text-[#004FED] mx-auto mb-2" />
              <div className="text-xs text-gray-500 font-medium">Add Stat</div>
            </div>
          )}
        </EditableSection>
      </div>
    </section>
  );
};

export default ClientLogos;