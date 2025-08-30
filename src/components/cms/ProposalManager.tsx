import React, { useState, useEffect } from 'react';
import { Plus, Edit3, Eye, Copy, Trash2, ExternalLink, Search, Filter } from 'lucide-react';

interface Proposal {
  id: string;
  type: string;
  title: string;
  clientName: string;
  createdAt: string;
  lastModified: string;
  status: 'draft' | 'sent' | 'accepted' | 'rejected';
  url: string;
}

const ProposalManager: React.FC = () => {
  const [proposals, setProposals] = useState<Proposal[]>([]);
  const [showCreateForm, setShowCreateForm] = useState(false);
  const [editingProposal, setEditingProposal] = useState<Proposal | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterType, setFilterType] = useState('all');
  const [filterStatus, setFilterStatus] = useState('all');

  // Proposal types available
  const proposalTypes = [
    { value: 'digital-marketing', label: 'Digital Marketing' },
    { value: 'web-development', label: 'Web Development' },
    { value: 'brand-identity', label: 'Brand Identity' },
    { value: 'social-media', label: 'Social Media Marketing' },
    { value: 'content-creation', label: 'Content Creation' },
    { value: 'seo-services', label: 'SEO Services' },
    { value: 'custom', label: 'Custom Service' }
  ];

  // Status options
  const statusOptions = [
    { value: 'draft', label: 'Draft', color: 'bg-gray-100 text-gray-800' },
    { value: 'sent', label: 'Sent', color: 'bg-blue-100 text-blue-800' },
    { value: 'accepted', label: 'Accepted', color: 'bg-green-100 text-green-800' },
    { value: 'rejected', label: 'Rejected', color: 'bg-red-100 text-red-800' }
  ];

  // Load proposals from localStorage (in a real app, this would be from a database)
  useEffect(() => {
    const savedProposals = localStorage.getItem('upward-proposals');
    if (savedProposals) {
      setProposals(JSON.parse(savedProposals));
    }
  }, []);

  // Save proposals to localStorage
  const saveProposals = (newProposals: Proposal[]) => {
    localStorage.setItem('upward-proposals', JSON.stringify(newProposals));
    setProposals(newProposals);
  };

  // Create new proposal
  const createProposal = (formData: any) => {
    const newProposal: Proposal = {
      id: `${formData.type}-${Date.now()}`,
      type: formData.type,
      title: formData.title,
      clientName: formData.clientName,
      createdAt: new Date().toISOString(),
      lastModified: new Date().toISOString(),
      status: 'draft',
      url: `https://upward-website-update.vercel.app/proposals/${formData.type}/${formData.type}-${Date.now()}`
    };

    const updatedProposals = [...proposals, newProposal];
    saveProposals(updatedProposals);
    setShowCreateForm(false);
  };

  // Update proposal
  const updateProposal = (id: string, updates: Partial<Proposal>) => {
    const updatedProposals = proposals.map(proposal => 
      proposal.id === id 
        ? { ...proposal, ...updates, lastModified: new Date().toISOString() }
        : proposal
    );
    saveProposals(updatedProposals);
    setEditingProposal(null);
  };

  // Delete proposal
  const deleteProposal = (id: string) => {
    if (window.confirm('Are you sure you want to delete this proposal?')) {
      const updatedProposals = proposals.filter(proposal => proposal.id !== id);
      saveProposals(updatedProposals);
    }
  };

  // Copy URL to clipboard
  const copyUrl = (url: string) => {
    navigator.clipboard.writeText(url);
    // You could add a toast notification here
  };

  // Filter proposals
  const filteredProposals = proposals.filter(proposal => {
    const matchesSearch = proposal.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         proposal.clientName.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType = filterType === 'all' || proposal.type === filterType;
    const matchesStatus = filterStatus === 'all' || proposal.status === filterStatus;
    
    return matchesSearch && matchesType && matchesStatus;
  });

  return (
    <div className="bg-white rounded-3xl shadow-2xl border border-gray-100 p-8">
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Proposal Manager</h2>
          <p className="text-gray-600">Create, edit, and manage all your proposals</p>
        </div>
        <button
          onClick={() => setShowCreateForm(true)}
          className="bg-gradient-to-r from-[#004FED] to-[#0066FF] text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 flex items-center space-x-2"
        >
          <Plus className="w-5 h-5" />
          <span>Create New Proposal</span>
        </button>
      </div>

      {/* Search and Filters */}
      <div className="grid md:grid-cols-4 gap-4 mb-8">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="text"
            placeholder="Search proposals..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#004FED]/20 focus:border-[#004FED]"
          />
        </div>
        <select
          value={filterType}
          onChange={(e) => setFilterType(e.target.value)}
          className="px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#004FED]/20 focus:border-[#004FED]"
        >
          <option value="all">All Types</option>
          {proposalTypes.map(type => (
            <option key={type.value} value={type.value}>{type.label}</option>
          ))}
        </select>
        <select
          value={filterStatus}
          onChange={(e) => setFilterStatus(e.target.value)}
          className="px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#004FED]/20 focus:border-[#004FED]"
        >
          <option value="all">All Status</option>
          {statusOptions.map(status => (
            <option key={status.value} value={status.value}>{status.label}</option>
          ))}
        </select>
        <div className="text-right">
          <span className="text-sm text-gray-600">
            {filteredProposals.length} of {proposals.length} proposals
          </span>
        </div>
      </div>

      {/* Proposals List */}
      <div className="space-y-4">
        {filteredProposals.length === 0 ? (
          <div className="text-center py-12">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Search className="w-8 h-8 text-gray-400" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">No proposals found</h3>
            <p className="text-gray-600">Create your first proposal to get started</p>
          </div>
        ) : (
          filteredProposals.map(proposal => (
            <div key={proposal.id} className="border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all duration-300">
              <div className="flex justify-between items-start">
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-2">
                    <h3 className="text-xl font-semibold text-gray-900">{proposal.title}</h3>
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${statusOptions.find(s => s.value === proposal.status)?.color}`}>
                      {statusOptions.find(s => s.value === proposal.status)?.label}
                    </span>
                  </div>
                  <p className="text-gray-600 mb-2">Client: {proposal.clientName}</p>
                  <p className="text-sm text-gray-500">
                    Created: {new Date(proposal.createdAt).toLocaleDateString()} | 
                    Modified: {new Date(proposal.lastModified).toLocaleDateString()}
                  </p>
                  <div className="mt-3">
                    <span className="text-sm text-gray-500">URL: </span>
                    <span className="text-sm text-[#004FED] font-mono">{proposal.url}</span>
                  </div>
                </div>
                <div className="flex space-x-2">
                  <button
                    onClick={() => window.open(proposal.url, '_blank')}
                    className="p-2 text-gray-600 hover:text-[#004FED] hover:bg-blue-50 rounded-lg transition-colors"
                    title="View Proposal"
                  >
                    <Eye className="w-5 h-5" />
                  </button>
                  <button
                    onClick={() => copyUrl(proposal.url)}
                    className="p-2 text-gray-600 hover:text-[#004FED] hover:bg-blue-50 rounded-lg transition-colors"
                    title="Copy URL"
                  >
                    <Copy className="w-5 h-5" />
                  </button>
                  <button
                    onClick={() => setEditingProposal(proposal)}
                    className="p-2 text-gray-600 hover:text-[#004FED] hover:bg-blue-50 rounded-lg transition-colors"
                    title="Edit Proposal"
                  >
                    <Edit3 className="w-5 h-5" />
                  </button>
                  <button
                    onClick={() => deleteProposal(proposal.id)}
                    className="p-2 text-gray-600 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                    title="Delete Proposal"
                  >
                    <Trash2 className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>

      {/* Create Proposal Modal */}
      {showCreateForm && (
        <CreateProposalModal
          proposalTypes={proposalTypes}
          onCreate={createProposal}
          onClose={() => setShowCreateForm(false)}
        />
      )}

      {/* Edit Proposal Modal */}
      {editingProposal && (
        <EditProposalModal
          proposal={editingProposal}
          statusOptions={statusOptions}
          onUpdate={updateProposal}
          onClose={() => setEditingProposal(null)}
        />
      )}
    </div>
  );
};

// Create Proposal Modal Component
interface CreateProposalModalProps {
  proposalTypes: { value: string; label: string }[];
  onCreate: (data: any) => void;
  onClose: () => void;
}

const CreateProposalModal: React.FC<CreateProposalModalProps> = ({ proposalTypes, onCreate, onClose }) => {
  const [formData, setFormData] = useState({
    type: 'digital-marketing',
    title: '',
    clientName: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.title && formData.clientName) {
      onCreate(formData);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-3xl p-8 max-w-md w-full">
        <h3 className="text-2xl font-bold text-gray-900 mb-6">Create New Proposal</h3>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Service Type</label>
            <select
              value={formData.type}
              onChange={(e) => setFormData({ ...formData, type: e.target.value })}
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#004FED]/20 focus:border-[#004FED]"
            >
              {proposalTypes.map(type => (
                <option key={type.value} value={type.value}>{type.label}</option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Proposal Title</label>
            <input
              type="text"
              value={formData.title}
              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
              placeholder="e.g., Digital Marketing Campaign for ABC Company"
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#004FED]/20 focus:border-[#004FED]"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Client Name</label>
            <input
              type="text"
              value={formData.clientName}
              onChange={(e) => setFormData({ ...formData, clientName: e.target.value })}
              placeholder="e.g., ABC Company"
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#004FED]/20 focus:border-[#004FED]"
              required
            />
          </div>
          <div className="flex space-x-4">
            <button
              type="submit"
              className="flex-1 bg-gradient-to-r from-[#004FED] to-[#0066FF] text-white py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300"
            >
              Create Proposal
            </button>
            <button
              type="button"
              onClick={onClose}
              className="flex-1 border border-gray-300 text-gray-700 py-3 rounded-xl font-semibold hover:bg-gray-50 transition-all duration-300"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

// Edit Proposal Modal Component
interface EditProposalModalProps {
  proposal: Proposal;
  statusOptions: { value: string; label: string; color: string }[];
  onUpdate: (id: string, updates: Partial<Proposal>) => void;
  onClose: () => void;
}

const EditProposalModal: React.FC<EditProposalModalProps> = ({ proposal, statusOptions, onUpdate, onClose }) => {
  const [formData, setFormData] = useState({
    title: proposal.title,
    clientName: proposal.clientName,
    status: proposal.status
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onUpdate(proposal.id, formData);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-3xl p-8 max-w-md w-full">
        <h3 className="text-2xl font-bold text-gray-900 mb-6">Edit Proposal</h3>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Proposal Title</label>
            <input
              type="text"
              value={formData.title}
              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#004FED]/20 focus:border-[#004FED]"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Client Name</label>
            <input
              type="text"
              value={formData.clientName}
              onChange={(e) => setFormData({ ...formData, clientName: e.target.value })}
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#004FED]/20 focus:border-[#004FED]"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Status</label>
            <select
              value={formData.status}
              onChange={(e) => setFormData({ ...formData, status: e.target.value as any })}
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#004FED]/20 focus:border-[#004FED]"
            >
              {statusOptions.map(status => (
                <option key={status.value} value={status.value}>{status.label}</option>
              ))}
            </select>
          </div>
          <div className="bg-gray-50 p-4 rounded-xl">
            <p className="text-sm text-gray-600 mb-2">Proposal URL:</p>
            <p className="text-sm text-[#004FED] font-mono break-all">{proposal.url}</p>
          </div>
          <div className="flex space-x-4">
            <button
              type="submit"
              className="flex-1 bg-gradient-to-r from-[#004FED] to-[#0066FF] text-white py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300"
            >
              Update Proposal
            </button>
            <button
              type="button"
              onClick={onClose}
              className="flex-1 border border-gray-300 text-gray-700 py-3 rounded-xl font-semibold hover:bg-gray-50 transition-all duration-300"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProposalManager;
