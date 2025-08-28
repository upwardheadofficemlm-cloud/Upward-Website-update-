// TypeScript errors temporarily disabled for this file
import React from 'react';
import EditableText from '../components/cms/EditableText';
import EditableImage from '../components/cms/EditableImage';
import EditableSection from '../components/cms/EditableSection';
import EditableCard from '../components/cms/EditableCard';
import { useCMS } from '../contexts/CMSContext';

const PaymentsPage: React.FC = () => {
  const { isAdmin, isEditing, updateContent, content } = useCMS();

  const [methodIds, setMethodIds] = React.useState<string[]>([]);

  // Load methods order from Firebase data
  React.useEffect(() => {
    const key = 'payments-methods-order';
    const existing = content[key]?.content;
    
    if (existing) {
      try {
        const parsed = JSON.parse(existing);
        if (Array.isArray(parsed) && parsed.length > 0) {
          console.log('📋 Loading existing payment methods from Firebase:', parsed);
          setMethodIds(parsed);
          return;
        }
      } catch (error) {
        console.error('❌ Failed to parse payment methods order:', error);
      }
    }
    
    // Only initialize defaults if there's NO existing data at all
    const hasAnyPaymentData = Object.keys(content).some(key => 
      key.includes('payments-method-') && content[key]?.content
    );
    
    if (!hasAnyPaymentData) {
      console.log('🆕 No existing payment data found, initializing defaults...');
      const defaultIds = ['payments-method-bank', 'payments-method-wallet', 'payments-method-alt'];
      setMethodIds(defaultIds);
      
      // Initialize default methods only if they don't exist
      const initializeDefaults = async () => {
        try {
          await initDefaultMethods();
          console.log('✅ Default payment methods initialized');
        } catch (error) {
          console.error('❌ Failed to initialize default payment methods:', error);
        }
      };
      
      initializeDefaults();
    } else {
      console.log('📦 Existing payment data found, using Firebase data only');
      // If we have some data but no order, create order from existing methods
      const existingMethodIds = Object.keys(content)
        .filter(key => key.includes('payments-method-') && key.endsWith('-name'))
        .map(key => key.replace('-name', ''));
      
      if (existingMethodIds.length > 0) {
        console.log('🔄 Creating order from existing methods:', existingMethodIds);
        setMethodIds(existingMethodIds);
        persistOrder(existingMethodIds);
      }
    }
  }, [content]);

  const persistOrder = async (ids: string[]) => {
    setMethodIds(ids);
    try {
      await updateContent('payments-methods-order', JSON.stringify(ids), 'html');
    } catch (e) {
      console.error('Failed to persist payment method order', e);
    }
  };

  const initMethodDefaults = async (baseId: string) => {
    try {
      await Promise.all([
        updateContent(`${baseId}-name`, 'Payment Method', 'text'),
        updateContent(`${baseId}-account-name-label`, 'Account Name', 'text'),
        updateContent(`${baseId}-account-name`, 'Upward Marketing Agency', 'text'),
        updateContent(`${baseId}-number-label`, 'Account Number', 'text'),
        updateContent(`${baseId}-number`, '000-000-000', 'text'),
        updateContent(`${baseId}-qr-title`, 'QR Code (Optional)', 'text'),
        updateContent(`${baseId}-qr-note`, 'Upload QR code for quick scanning', 'text'),
        updateContent(`${baseId}-note`, 'Send receipt after payment for verification.', 'text')
      ]);
    } catch (e) {
      console.error('Failed to initialize defaults for', baseId, e);
    }
  };

  const initDefaultMethods = async () => {
    const defaults = [
      {
        id: 'payments-method-bank',
        name: 'KBZ Bank',
        accountName: 'Upward Marketing Agency Co., Ltd',
        number: '123-456-789-012345',
        note: 'Transfer fees are borne by the sender. Please email the slip after transfer.'
      },
      {
        id: 'payments-method-wallet',
        name: 'WavePay',
        accountName: 'Upward Marketing Agency',
        number: '09 740 977 946',
        note: 'Send screenshot after payment. Do not pay to unverified accounts.'
      },
      {
        id: 'payments-method-alt',
        name: 'AYA Bank',
        accountName: 'Upward Marketing Agency',
        number: '001-000-222-333444',
        note: 'For international payments, contact us for Swift details.'
      }
    ];

    for (const method of defaults) {
      try {
        await Promise.all([
          updateContent(`${method.id}-name`, method.name, 'text'),
          updateContent(`${method.id}-account-name-label`, 'Account Name', 'text'),
          updateContent(`${method.id}-account-name`, method.accountName, 'text'),
          updateContent(`${method.id}-number-label`, 'Account Number', 'text'),
          updateContent(`${method.id}-number`, method.number, 'text'),
          updateContent(`${method.id}-qr-title`, 'QR Code (Optional)', 'text'),
          updateContent(`${method.id}-qr-note`, 'Upload QR code for quick scanning', 'text'),
          updateContent(`${method.id}-note`, method.note, 'text')
        ]);
      } catch (e) {
        console.error('Failed to initialize default method', method.id, e);
      }
    }
  };

  const addMethod = async () => {
    const newId = `payments-method-${Date.now()}`;
    await initMethodDefaults(newId);
    await persistOrder([...methodIds, newId]);
  };

  const deleteMethod = async (id: string) => {
    const next = methodIds.filter(mid => mid !== id);
    await persistOrder(next);
  };

  const duplicateMethod = async (id: string) => {
    const newId = `payments-method-${Date.now()}`;
    const fields = ['name','account-name-label','account-name','number-label','number','qr-title','qr-note','note'];
    try {
      await Promise.all(fields.map(async (field) => {
        const srcKey = `${id}-${field}`;
        const dstKey = `${newId}-${field}`;
        const value = content[srcKey]?.content || '';
        if (value) {
          await updateContent(dstKey, value, 'text');
        }
      }));
    } catch (e) {
      console.error('Duplicate content failed', e);
    }
    await persistOrder([...methodIds, newId]);
  };

  const copyText = async (text: string) => {
    const value = (text || '').trim();
    if (!value) {
      alert('Nothing to copy');
      return;
    }
    
    try {
      // Try modern clipboard API first
      await navigator.clipboard.writeText(value);
      // Show success feedback
      const button = event?.target as HTMLButtonElement;
      if (button) {
        const originalText = button.textContent;
        button.textContent = 'Copied!';
        button.style.backgroundColor = '#10B981';
        button.style.color = 'white';
        setTimeout(() => {
          button.textContent = originalText;
          button.style.backgroundColor = '';
          button.style.color = '';
        }, 2000);
      } else {
        alert('Copied to clipboard!');
      }
    } catch (err) {
      try {
        // Fallback for older browsers
        const ta = document.createElement('textarea');
        ta.value = value;
        ta.style.position = 'fixed';
        ta.style.opacity = '0';
        ta.style.left = '-9999px';
        document.body.appendChild(ta);
        ta.focus();
        ta.select();
        const successful = document.execCommand('copy');
        document.body.removeChild(ta);
        
        if (successful) {
          const button = event?.target as HTMLButtonElement;
          if (button) {
            const originalText = button.textContent;
            button.textContent = 'Copied!';
            button.style.backgroundColor = '#10B981';
            button.style.color = 'white';
            setTimeout(() => {
              button.textContent = originalText;
              button.style.backgroundColor = '';
              button.style.color = '';
            }, 2000);
          } else {
            alert('Copied to clipboard!');
          }
        } else {
          throw new Error('execCommand failed');
        }
      } catch (e2) {
        console.error('Copy failed', e2);
        alert('Could not copy automatically. Please select and copy manually: ' + value);
      }
    }
  };

  const handleCopyFromId = async (elementId: string) => {
    // Wait a bit for the DOM to be ready
    await new Promise(resolve => setTimeout(resolve, 50));
    
    const el = document.getElementById(elementId);
    if (!el) {
      console.error('Element not found:', elementId);
      console.log('Available elements with similar IDs:', 
        Array.from(document.querySelectorAll('[id*="number"]')).map(e => e.id)
      );
      alert('Element not found: ' + elementId);
      return;
    }
    
    // For EditableText components, the text is inside the element
    // Try multiple ways to get text content for Safari compatibility
    let text = '';
    
    // First try to get the text content directly
    text = el.textContent || el.innerText || '';
    
    // If that's empty, try to get from innerHTML and strip tags
    if (!text.trim()) {
      const html = el.innerHTML || '';
      if (html) {
        const tempDiv = document.createElement('div');
        tempDiv.innerHTML = html;
        text = tempDiv.textContent || tempDiv.innerText || '';
      }
    }
    
    // Remove extra whitespace and clean up
    text = text.trim().replace(/\s+/g, ' ');
    
    console.log('Copying text:', text, 'from element:', elementId, 'element:', el);
    
    if (!text) {
      console.error('No text found in element:', elementId, 'element:', el);
      alert('No text found to copy from: ' + elementId);
      return;
    }
    
    await copyText(text);
  };

  return (
    <div className="min-h-screen pt-24 pb-24 bg-gradient-to-br from-[#004FED]/5 via-white to-[#0066FF]/10">
      {/* Hero */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <EditableText
            id="payments-hero-title"
            defaultContent="Payments"
            className="text-5xl md:text-6xl font-black text-gray-900 mb-4"
            tag="h1"
          />
          <EditableText
            id="payments-hero-desc"
            defaultContent="Use the details below to complete your payment. This page is informational only; there are no direct payment links."
            className="text-xl text-gray-600 max-w-3xl mx-auto"
            tag="p"
          />
        </div>
      </section>

      {/* Instructions + QR */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <div className="bg-white rounded-3xl shadow-2xl border border-gray-100 p-8">
            <EditableText
              id="payments-instruction-title"
              defaultContent="Payment Instructions"
              className="text-3xl font-bold text-gray-900 mb-4"
              tag="h2"
            />
            <EditableText
              id="payments-instructions"
              defaultContent="Please include your invoice number in the payment reference. After payment, send the receipt to our finance team at accounts@upwardmm.com."
              className="text-gray-600 leading-relaxed mb-6"
              tag="div"
            />
            
            {/* Payment Instruction Image */}
            <div className="mt-6">
              <EditableText
                id="payments-instruction-image-title"
                defaultContent="Reference Image (Optional)"
                className="text-lg font-bold text-gray-900 mb-3"
                tag="h3"
              />
              <EditableImage
                id="payments-instruction-image"
                defaultSrc="/upward_logo_primary-blue.png"
                className="w-full max-w-4xl rounded-xl border border-gray-100 shadow-lg"
                alt="Payment instruction reference image"
              />
              <EditableText
                id="payments-instruction-image-note"
                defaultContent="Upload a 1920x1080 reference image for payment instructions, forms, or process guides. Recommended format: PNG or JPG."
                className="text-sm text-gray-500 mt-3"
                tag="p"
              />
            </div>
          </div>
          <div className="bg-white rounded-3xl shadow-2xl border border-gray-100 p-8 flex items-center justify-center">
            <div className="w-full h-full flex flex-col justify-center">
              <EditableText
                id="payments-qr-title"
                defaultContent="Payment QR (Optional)"
                className="text-xl font-bold text-gray-900 mb-4"
                tag="h3"
              />
              <EditableImage
                id="payments-qr-image"
                defaultSrc="/upward_logo_primary-blue.png"
                className="w-full aspect-square rounded-xl border border-gray-100 object-contain"
              />
              <EditableText
                id="payments-qr-note"
                defaultContent="You may upload a QR for quick scanning. Ensure the QR matches the account below."
                className="text-sm text-gray-500 mt-3"
                tag="p"
              />
            </div>
          </div>
        </div>

        {/* Payment Methods */}
        <div className="flex items-center justify-between mb-4">
          <EditableText
            id="payments-methods-title"
            defaultContent="Payment Methods"
            className="text-3xl font-bold text-gray-900"
            tag="h2"
          />
          {isAdmin && isEditing && (
            <button
              onClick={addMethod}
              className="px-4 py-2 rounded-lg bg-[#004FED] text-white font-semibold hover:bg-[#003dcc] transition-colors"
            >
              Add Method
            </button>
          )}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {methodIds.map((id) => (
            <EditableCard
              key={id}
              id={id}
              className="bg-white rounded-2xl p-6 shadow-xl border border-gray-100"
              canDelete={isAdmin && isEditing}
              onDelete={() => deleteMethod(id)}
              canDuplicate={isAdmin && isEditing}
              onDuplicate={() => duplicateMethod(id)}
            >
              <div className="flex items-center space-x-4 mb-4">
                <EditableImage id={`${id}-logo`} defaultSrc="/upward_logo_primary-blue.png" className="w-14 h-14 object-contain rounded-lg border border-gray-100" />
                <EditableText id={`${id}-name`} defaultContent="Payment Method" className="text-xl font-bold text-gray-900" tag="h3" />
              </div>
              <div className="space-y-2">
                <EditableText id={`${id}-account-name-label`} defaultContent="Account Name" className="text-xs uppercase tracking-wider text-gray-500" tag="div" />
                <EditableText id={`${id}-account-name`} defaultContent="Upward Marketing Agency" className="text-gray-800 font-medium" tag="div" />
              </div>
              <div className="mt-4 space-y-2">
                <EditableText id={`${id}-number-label`} defaultContent="Account Number" className="text-xs uppercase tracking-wider text-gray-500" tag="div" />
                <div className="flex items-center justify-between bg-gray-50 rounded-xl border border-gray-200 px-4 py-3">
                  <EditableText id={`${id}-number`} defaultContent="000-000-000" className="text-gray-900 font-mono" tag="div" />
                  <button onClick={() => handleCopyFromId(`${id}-number`)} className="ml-4 text-[#004FED] font-semibold hover:underline">Copy</button>
                </div>
              </div>
              
              {/* QR Code Section */}
              <div className="mt-4">
                <EditableText 
                  id={`${id}-qr-title`} 
                  defaultContent="QR Code (Optional)" 
                  className="text-sm font-semibold text-gray-700 mb-2" 
                  tag="div" 
                />
                <EditableImage
                  id={`${id}-qr-code`}
                  defaultSrc=""
                  className="w-full max-w-32 mx-auto rounded-lg border border-gray-200 shadow-sm"
                  alt={`${content[`${id}-name`]?.content || 'Payment method'} QR code`}
                />
                <EditableText 
                  id={`${id}-qr-note`} 
                  defaultContent="Upload QR code for quick scanning" 
                  className="text-xs text-gray-500 mt-2 text-center" 
                  tag="div" 
                />
              </div>
              
              <EditableText id={`${id}-note`} defaultContent="Send receipt after payment for verification." className="text-sm text-gray-500 mt-4" tag="p" />
            </EditableCard>
          ))}
        </div>

        {/* Footer Note */}
        <div className="mt-12 bg-white rounded-2xl shadow-xl border border-gray-100 p-6">
          <EditableText id="payments-disclaimer-title" defaultContent="Important" className="text-lg font-bold text-gray-900 mb-2" tag="h4" />
          <EditableText id="payments-disclaimer" defaultContent="All payment details on this page are for reference only. Do not proceed with payment links elsewhere; use only the information shown here and verify with our team if unsure." className="text-sm text-gray-600" tag="p" />
        </div>
      </div>
    </div>
  );
};

export default PaymentsPage;


