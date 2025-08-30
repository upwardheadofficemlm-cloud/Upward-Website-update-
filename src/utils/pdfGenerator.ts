import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

export const downloadProposalAsPDF = async (proposalId: string, proposalType: string) => {
  try {
    // Get the proposal content element
    const proposalElement = document.querySelector('.proposal-content') || document.body;
    
    // Show loading indicator
    const loadingDiv = document.createElement('div');
    loadingDiv.className = 'fixed top-4 right-4 bg-blue-500 text-white px-6 py-3 rounded-lg shadow-lg z-50';
    loadingDiv.textContent = 'Generating PDF...';
    document.body.appendChild(loadingDiv);

    // Create canvas from the proposal content
    const canvas = await html2canvas(proposalElement as HTMLElement, {
      scale: 2,
      useCORS: true,
      allowTaint: true,
      backgroundColor: '#ffffff',
      width: 1200,
      height: proposalElement.scrollHeight
    });

    // Create PDF
    const imgData = canvas.toDataURL('image/png');
    const pdf = new jsPDF('p', 'mm', 'a4');
    
    const imgWidth = 210; // A4 width in mm
    const pageHeight = 295; // A4 height in mm
    const imgHeight = (canvas.height * imgWidth) / canvas.width;
    let heightLeft = imgHeight;
    let position = 0;

    // Add first page
    pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
    heightLeft -= pageHeight;

    // Add additional pages if needed
    while (heightLeft >= 0) {
      position = heightLeft - imgHeight;
      pdf.addPage();
      pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
      heightLeft -= pageHeight;
    }

    // Download the PDF
    const fileName = `${proposalType}-proposal-${proposalId}.pdf`;
    pdf.save(fileName);

    // Remove loading indicator
    document.body.removeChild(loadingDiv);

    // Show success message
    const successDiv = document.createElement('div');
    successDiv.className = 'fixed top-4 right-4 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg z-50';
    successDiv.textContent = 'PDF downloaded successfully!';
    document.body.appendChild(successDiv);
    
    setTimeout(() => {
      if (document.body.contains(successDiv)) {
        document.body.removeChild(successDiv);
      }
    }, 3000);

  } catch (error) {
    console.error('Error generating PDF:', error);
    
    // Show error message
    const errorDiv = document.createElement('div');
    errorDiv.className = 'fixed top-4 right-4 bg-red-500 text-white px-6 py-3 rounded-lg shadow-lg z-50';
    errorDiv.textContent = 'Error generating PDF. Please try again.';
    document.body.appendChild(errorDiv);
    
    setTimeout(() => {
      if (document.body.contains(errorDiv)) {
        document.body.removeChild(errorDiv);
      }
    }, 3000);
  }
};

export const shareProposal = async (url: string, title: string) => {
  if (navigator.share) {
    try {
      await navigator.share({
        title: title,
        url: url,
        text: 'Check out this proposal from Upward Marketing Agency'
      });
    } catch (error) {
      console.log('Share cancelled or failed:', error);
      // Fallback to copying URL
      await copyToClipboard(url);
    }
  } else {
    // Fallback for browsers that don't support Web Share API
    await copyToClipboard(url);
  }
};

export const copyToClipboard = async (text: string): Promise<boolean> => {
  try {
    if (navigator.clipboard && window.isSecureContext) {
      await navigator.clipboard.writeText(text);
      return true;
    } else {
      // Fallback for older browsers
      const textArea = document.createElement('textarea');
      textArea.value = text;
      textArea.style.position = 'fixed';
      textArea.style.left = '-999999px';
      textArea.style.top = '-999999px';
      document.body.appendChild(textArea);
      textArea.focus();
      textArea.select();
      const result = document.execCommand('copy');
      document.body.removeChild(textArea);
      return result;
    }
  } catch (error) {
    console.error('Failed to copy to clipboard:', error);
    return false;
  }
};
