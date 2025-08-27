// @ts-nocheck
import React from 'react';
import EditableText from '../components/cms/EditableText';
import EditableImage from '../components/cms/EditableImage';
import EditableSection from '../components/cms/EditableSection';
import EditableCard from '../components/cms/EditableCard';
import { useCMS } from '../contexts/CMSContext';

const PaymentsPage: React.FC = () => {
  const { isAdmin, isEditing, updateContent, content } = useCMS();

  const [methodIds, setMethodIds] = React.useState<string[]>([]);

  // Load methods order (or fallback to 3 defaults)
  React.useEffect(() => {
    const key = 'payments-methods-order';
    const existing = content[key]?.content;
    if (existing) {
      try {
        const parsed = JSON.parse(existing);
        if (Array.isArray(parsed)) {
          setMethodIds(parsed);
          return;
        }
      } catch {}
    }
    setMethodIds(['payments-method-bank', 'payments-method-wallet', 'payments-method-alt']);
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
        updateContent(`${baseId}-note`, 'Send receipt after payment for verification.', 'text')
      ]);
    } catch (e) {
      console.error('Failed to initialize defaults for', baseId, e);
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
    const fields = ['name','account-name-label','account-name','number-label','number','note'];
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
      await navigator.clipboard.writeText(value);
      alert('Copied to clipboard');
    } catch (err) {
      try {
        const ta = document.createElement('textarea');
        ta.value = value;
        ta.style.position = 'fixed';
        ta.style.opacity = '0';
        document.body.appendChild(ta);
        ta.focus();
        ta.select();
        document.execCommand('copy');
        document.body.removeChild(ta);
        alert('Copied to clipboard');
      } catch (e2) {
        console.error('Copy failed', e2);
        alert('Could not copy. Please copy manually.');
      }
    }
  };

  const handleCopyFromId = async (elementId: string) => {
    const el = document.getElementById(elementId);
    await copyText(el?.textContent || '');
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
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          <div className="lg:col-span-2 bg-white rounded-3xl shadow-2xl border border-gray-100 p-8">
            <EditableText
              id="payments-instruction-title"
              defaultContent="Payment Instructions"
              className="text-3xl font-bold text-gray-900 mb-4"
              tag="h2"
            />
            <EditableSection id="payments-instructions" defaultContent='<p class="text-gray-600 leading-relaxed">Please include your invoice number in the payment reference. After payment, send the receipt to our finance team at <strong>accounts@upwardmm.com</strong>.</p>' />
          </div>
          <div className="bg-white rounded-3xl shadow-2xl border border-gray-100 p-8 flex items-center justify-center">
            <div className="w-full">
              <EditableText
                id="payments-qr-title"
                defaultContent="Payment QR (Optional)"
                className="text-xl font-bold text-gray-900 mb-4"
                tag="h3"
              />
              <EditableImage
                id="payments-qr-image"
                defaultSrc="/upward_logo_primary-blue.png"
                className="w-full rounded-xl border border-gray-100"
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
          {/* Bank Transfer Card */}
          <EditableCard id="payments-method-bank" className="bg-white rounded-2xl p-6 shadow-xl border border-gray-100">
            <div className="flex items-center space-x-4 mb-4">
              <EditableImage id="payments-bank-logo" defaultSrc="/upward_logo_primary-blue.png" className="w-14 h-14 object-contain rounded-lg border border-gray-100" />
              <EditableText id="payments-bank-name" defaultContent="KBZ Bank" className="text-xl font-bold text-gray-900" tag="h3" />
            </div>
            <div className="space-y-2">
              <EditableText id="payments-bank-account-name-label" defaultContent="Account Name" className="text-xs uppercase tracking-wider text-gray-500" tag="div" />
              <EditableText id="payments-bank-account-name" defaultContent="Upward Marketing Agency Co., Ltd" className="text-gray-800 font-medium" tag="div" />
            </div>
            <div className="mt-4 space-y-2">
              <EditableText id="payments-bank-account-no-label" defaultContent="Account Number" className="text-xs uppercase tracking-wider text-gray-500" tag="div" />
              <div className="flex items-center justify-between bg-gray-50 rounded-xl border border-gray-200 px-4 py-3">
                <EditableText id="payments-bank-account-no" defaultContent="123-456-789-012345" className="text-gray-900 font-mono" tag="div" />
                <button onClick={() => handleCopy(document.getElementById('payments-bank-account-no')?.textContent || '')} className="ml-4 text-[#004FED] font-semibold hover:underline">Copy</button>
              </div>
            </div>
            <EditableText id="payments-bank-note" defaultContent="Transfer fees are borne by the sender. Please email the slip after transfer." className="text-sm text-gray-500 mt-4" tag="p" />
          </EditableCard>

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


