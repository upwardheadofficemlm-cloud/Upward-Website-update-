import React from 'react';
import { useParams } from 'react-router-dom';
import ModernProposalTemplate from '../../components/proposals/ModernProposalTemplate';

const DigitalMarketingProposalPage: React.FC = () => {
  const { proposalId } = useParams<{ proposalId: string }>();
  const id = proposalId || 'default';

  const handleCopyUrl = () => {
    console.log('URL copied to clipboard');
  };

  const handleDownload = () => {
    console.log('Downloading PDF...');
    // PDF download implementation would go here
  };

  const handleShare = () => {
    console.log('Sharing proposal...');
  };

  return (
    <ModernProposalTemplate
      proposalId={id}
      proposalType="digital-marketing"
      clientName="Your Business"
      onCopyUrl={handleCopyUrl}
      onDownload={handleDownload}
      onShare={handleShare}
    />
  );
};

export default DigitalMarketingProposalPage;



