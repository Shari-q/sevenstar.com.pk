import React, { useState } from 'react';
import { X, CheckCircle2, Phone, Mail, Building2, MapPin, Send, ShieldCheck } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';

export default function InquiryModal({ isOpen, onClose, defaultDivision }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    city: '',
    interest: defaultDivision || 'real-estate',
    project: 'seven-star-mall-residency',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-fadeIn">
      <div className="relative w-full max-w-xl bg-white border border-slate-200 rounded-3xl shadow-2xl overflow-hidden p-6 sm:p-8">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-500 hover:text-slate-800 transition-colors"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="text-center py-10 space-y-4">
            <div className="w-16 h-16 rounded-full bg-emerald-50 border border-emerald-300 flex items-center justify-center mx-auto text-emerald-600">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <h3 className="text-2xl font-black text-slate-900">Inquiry Received</h3>
            <p className="text-sm text-slate-600 max-w-md mx-auto">
              Thank you for contacting <strong className="text-brand-gold">Seven Star Group of Companies</strong>. Our corporate liaison officer will review your request and reach out within 2 business hours.
            </p>
            <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 text-xs text-slate-600 space-y-1">
              <div>Urgent requirement? Call our corporate helpline:</div>
              <a href="tel:+925827437268" className="text-brand-gold font-bold text-sm block">
                +92 582 7437 268 / +92 300 2748 007
              </a>
            </div>
            <button
              onClick={handleReset}
              className="btn-gold px-8 py-3 rounded-full text-xs font-bold uppercase tracking-wider"
            >
              Close Window
            </button>
          </div>
        ) : (
          <div>
            <div className="mb-6">
              <div className="text-xs font-bold uppercase tracking-widest text-brand-gold mb-1">
                SEVEN STAR GROUP DIRECT INQUIRY
              </div>
              <h2 className="text-xl sm:text-2xl font-black text-slate-900">
                Schedule a Visit or Request Quotation
              </h2>
              <p className="text-xs text-slate-500 mt-1">
                Direct engagement with our senior project management and real estate advisory desk.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4 text-xs">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="font-bold text-slate-700 block mb-1">Full Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Tariq Mahmood"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-brand-gold focus:bg-white"
                  />
                </div>
                <div>
                  <label className="font-bold text-slate-700 block mb-1">Phone / WhatsApp Number *</label>
                  <input
                    type="tel"
                    required
                    placeholder="e.g. +92 300 1234567 or +44..."
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-brand-gold focus:bg-white"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="font-bold text-slate-700 block mb-1">Email Address *</label>
                  <input
                    type="email"
                    required
                    placeholder="you@domain.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-brand-gold focus:bg-white"
                  />
                </div>
                <div>
                  <label className="font-bold text-slate-700 block mb-1">City / Country of Residence</label>
                  <input
                    type="text"
                    placeholder="e.g. Islamabad, Mirpur, London UK"
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-brand-gold focus:bg-white"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="font-bold text-slate-700 block mb-1">Business Division *</label>
                  <select
                    value={formData.interest}
                    onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-slate-900 focus:outline-none focus:border-brand-gold focus:bg-white"
                  >
                    <option value="real-estate">Real Estate & High-Rise (DHA / Bahria)</option>
                    <option value="construction">Turnkey Building Construction</option>
                    <option value="infrastructure">Highways, Roads & Bridges</option>
                    <option value="government">Government Contracting (Category C-A)</option>
                    <option value="petroleum">Petroleum & LPG Distribution</option>
                    <option value="machinery">Asphalt Production & Equipment</option>
                    <option value="seven-star-uk">Seven Star UK Developments</option>
                  </select>
                </div>
                <div>
                  <label className="font-bold text-slate-700 block mb-1">Specific Project / Location</label>
                  <select
                    value={formData.project}
                    onChange={(e) => setFormData({ ...formData, project: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-slate-900 focus:outline-none focus:border-brand-gold focus:bg-white"
                  >
                    <option value="seven-star-mall-residency">Seven Star Mall & Residency (DHA II)</option>
                    <option value="seven-star-heights">Seven Star Heights (Bahria Town)</option>
                    <option value="commercial-shop">Commercial Retail Store</option>
                    <option value="corporate-office">Corporate Office Suite</option>
                    <option value="infrastructure-tender">Government Tender / Infrastructure JV</option>
                    <option value="asphalt-supply">Bulk Asphalt Supply (Jatlan Plant)</option>
                    <option value="uk-housing">UK Housing Development</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="font-bold text-slate-700 block mb-1">Project Details or Requirements</label>
                <textarea
                  rows="3"
                  placeholder="Share details regarding your inquiry, preferred schedule for site visit, or technical specifications..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-brand-gold focus:bg-white"
                ></textarea>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="btn-gold w-full py-3.5 rounded-full text-xs uppercase font-extrabold tracking-wider shadow-lg flex items-center justify-center space-x-2"
                >
                  <Send className="w-4 h-4" />
                  <span>Submit Confidential Inquiry</span>
                </button>
              </div>

              <div className="text-[10px] text-center text-slate-500 flex items-center justify-center space-x-2 pt-1">
                <ShieldCheck className="w-3.5 h-3.5 text-brand-gold" />
                <span>Your information is strictly protected by Seven Star Group corporate privacy governance.</span>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
