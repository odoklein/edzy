import React, { useState, useRef } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { IconUpload, IconCheck, IconLock } from './Icons';

export const CheckoutForm: React.FC = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    fullName: '',
    whatsapp: '',
    paymentMethod: 'baridimob',
  });
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      alert('Commande confirmée! Vous recevrez vos accès dans 30 minutes.');
      setIsSubmitting(false);
      setFormData({ fullName: '', whatsapp: '', paymentMethod: 'baridimob' });
      setUploadedFile(null);
    }, 1500);
  };

  const paymentMethods = [
    { id: 'baridimob', label: t.checkout.baridimob, info: 'RIP: 00799999 00000 22', color: 'blue' },
    { id: 'ccp', label: t.checkout.ccp, info: 'CCP: 0012345678 Clé: 90', color: 'yellow' },
  ];

  return (
    <form onSubmit={handleSubmit} className="card">
      <h2 className="font-semibold text-gray-900 mb-6">{t.checkout.title}</h2>

      {/* Payment Methods */}
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 mb-3">
          {t.checkout.paymentInstructions}
        </label>
        <div className="space-y-3">
          {paymentMethods.map((method) => (
            <button
              key={method.id}
              type="button"
              onClick={() => setFormData({ ...formData, paymentMethod: method.id })}
              className={`w-full p-4 rounded-xl border-2 text-left transition-all ${formData.paymentMethod === method.id
                  ? 'border-gray-900 bg-gray-50'
                  : 'border-gray-200 hover:border-gray-300'
                }`}
            >
              <div className="flex items-center gap-3">
                <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${formData.paymentMethod === method.id ? 'border-gray-900 bg-gray-900' : 'border-gray-300'
                  }`}>
                  {formData.paymentMethod === method.id && <span className="text-white text-xs">✓</span>}
                </div>
                <div>
                  <div className="font-medium text-gray-900">{method.label}</div>
                  <div className="text-sm text-gray-500 font-mono">{method.info}</div>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Full Name */}
      <div className="mb-5">
        <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-2">
          {t.checkout.form.fullName}
        </label>
        <input
          type="text"
          id="fullName"
          required
          value={formData.fullName}
          onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
          className="input"
          placeholder="Ahmed Benali"
        />
      </div>

      {/* WhatsApp */}
      <div className="mb-5">
        <label htmlFor="whatsapp" className="block text-sm font-medium text-gray-700 mb-2">
          {t.checkout.form.whatsapp}
        </label>
        <input
          type="tel"
          id="whatsapp"
          required
          value={formData.whatsapp}
          onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
          className="input"
          placeholder="+213 555 123 456"
        />
      </div>

      {/* File Upload */}
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          {t.checkout.form.uploadProof}
        </label>
        <input
          type="file"
          ref={fileInputRef}
          onChange={(e) => setUploadedFile(e.target.files?.[0] || null)}
          accept="image/*"
          className="hidden"
          required
        />
        <button
          type="button"
          onClick={() => fileInputRef.current?.click()}
          className={`w-full p-8 rounded-xl border-2 border-dashed text-center transition-colors ${uploadedFile ? 'border-green-400 bg-green-50' : 'border-gray-300 hover:border-gray-400'
            }`}
        >
          {uploadedFile ? (
            <div className="text-green-600">
              <IconCheck size={32} className="mx-auto mb-2" />
              <div className="font-medium">{uploadedFile.name}</div>
            </div>
          ) : (
            <div className="text-gray-500">
              <IconUpload size={32} className="mx-auto mb-2" />
              <div className="font-medium">{t.checkout.form.uploadButton}</div>
              <div className="text-sm mt-1">PNG, JPG jusqu'à 10MB</div>
            </div>
          )}
        </button>
      </div>

      {/* Submit */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full btn-primary py-4 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isSubmitting ? 'Traitement...' : `${t.checkout.form.submit} →`}
      </button>

      {/* Security */}
      <div className="flex items-start gap-3 mt-6 p-4 bg-gray-50 rounded-xl">
        <IconLock size={20} className="text-gray-500 flex-shrink-0" />
        <div className="text-sm text-gray-600">
          <span className="font-medium text-gray-900">Paiement sécurisé</span> — Vos informations sont protégées.
        </div>
      </div>
    </form>
  );
};
