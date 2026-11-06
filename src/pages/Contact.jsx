import React, { useState } from 'react';
import { 
  MapPin, Phone, Mail, Clock, Send, ShieldCheck, 
  CheckCircle2, Globe, Building2, MessageSquare 
} from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    department: 'general',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-brand-surface pt-28">
      {/* Banner */}
      <section className="relative py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-brand-gold/10 border border-brand-gold/30 text-brand-gold text-xs font-bold uppercase tracking-widest mb-4">
            <Mail className="w-4 h-4" />
            <span>Official Corporate Liaison & Inquiries</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-black text-slate-900 font-heading leading-tight max-w-3xl">
            Contact Seven Star Group
          </h1>
          <p className="text-base sm:text-xl text-slate-600 max-w-2xl mt-4 font-light leading-relaxed">
            Reach our executive headquarters in Mirpur, our corporate suites in DHA Phase-II Islamabad and Bahria Town, or our international UK office.
          </p>
        </div>
      </section>

      {/* Main Content Grid */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Left: Contact Form */}
            <div className="lg:col-span-7">
              <div className="glass-card rounded-3xl p-8 sm:p-10 border border-brand-gold/30 shadow-2xl">
                <div className="mb-8">
                  <div className="text-xs font-bold uppercase tracking-widest text-brand-gold mb-1">
                    DIRECT COMMUNICATION
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-black text-slate-900 font-heading">
                    Send a Message to Corporate Desk
                  </h2>
                  <p className="text-xs text-slate-600 mt-1">
                    Our team responds to all verified client and procurement inquiries within 24 hours.
                  </p>
                </div>

                {submitted ? (
                  <div className="text-center py-12 space-y-4">
                    <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center mx-auto text-emerald-400">
                      <CheckCircle2 className="w-10 h-10" />
                    </div>
                    <h3 className="text-2xl font-black text-slate-900">Message Transmitted</h3>
                    <p className="text-sm text-slate-600 max-w-md mx-auto">
                      Thank you for contacting Seven Star Group. Your inquiry has been routed to the relevant division director.
                    </p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="btn-gold px-8 py-3 rounded-full text-xs font-bold uppercase tracking-wider"
                    >
                      Send Another Inquiry
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4 text-xs">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="font-bold text-slate-700 block mb-1">Your Full Name *</label>
                        <input
                          type="text"
                          required
                          placeholder="e.g. Engr. Asim Khan"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full bg-white border border-slate-300 rounded-xl px-3.5 py-2.5 text-slate-900 placeholder-slate-500 focus:outline-none focus:border-brand-gold"
                        />
                      </div>
                      <div>
                        <label className="font-bold text-slate-700 block mb-1">Contact Phone Number *</label>
                        <input
                          type="tel"
                          required
                          placeholder="e.g. +92 300 1234567"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full bg-white border border-slate-300 rounded-xl px-3.5 py-2.5 text-slate-900 placeholder-slate-500 focus:outline-none focus:border-brand-gold"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="font-bold text-slate-700 block mb-1">Email Address *</label>
                        <input
                          type="email"
                          required
                          placeholder="name@organization.com"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full bg-white border border-slate-300 rounded-xl px-3.5 py-2.5 text-slate-900 placeholder-slate-500 focus:outline-none focus:border-brand-gold"
                        />
                      </div>
                      <div>
                        <label className="font-bold text-slate-700 block mb-1">Division of Interest *</label>
                        <select
                          value={formData.department}
                          onChange={(e) => setFormData({ ...formData, department: e.target.value })}
                          className="w-full bg-white border border-slate-300 rounded-xl px-3.5 py-2.5 text-slate-900 focus:outline-none focus:border-brand-gold"
                        >
                          <option value="general">General Corporate Inquiry</option>
                          <option value="dha-mall">Seven Star Mall & Residency (DHA II)</option>
                          <option value="bahria-heights">Seven Star Heights (Bahria Town)</option>
                          <option value="govt-tender">Government Contracting / JV</option>
                          <option value="infrastructure">Highways & Bridge Engineering</option>
                          <option value="asphalt">Asphalt Plant Supply (Jatlan)</option>
                          <option value="petroleum">Petroleum & LPG Distribution</option>
                          <option value="uk">Seven Star UK Operations</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="font-bold text-slate-700 block mb-1">Subject</label>
                      <input
                        type="text"
                        placeholder="Inquiry regarding apartment booking / tender / supply..."
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        className="w-full bg-white border border-slate-300 rounded-xl px-3.5 py-2.5 text-slate-900 placeholder-slate-500 focus:outline-none focus:border-brand-gold"
                      />
                    </div>

                    <div>
                      <label className="font-bold text-slate-700 block mb-1">Detailed Message *</label>
                      <textarea
                        rows="4"
                        required
                        placeholder="Please elaborate on your project specifications, location, or scheduling requirements..."
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full bg-white border border-slate-300 rounded-xl px-3.5 py-2.5 text-slate-900 placeholder-slate-500 focus:outline-none focus:border-brand-gold"
                      ></textarea>
                    </div>

                    <div className="pt-2">
                      <button
                        type="submit"
                        className="btn-gold w-full py-3.5 rounded-full text-xs uppercase font-extrabold tracking-wider shadow-xl flex items-center justify-center space-x-2"
                      >
                        <Send className="w-4 h-4" />
                        <span>Dispatch Official Communication</span>
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </div>

            {/* Right: Verified Office Locations */}
            <div className="lg:col-span-5 space-y-6">
              <h2 className="text-xl font-black text-slate-900 flex items-center space-x-2">
                <Building2 className="w-5 h-5 text-brand-gold" />
                <span>Headquarters & Regional Suites</span>
              </h2>

              <div className="space-y-4">
                {COMPANY_INFO.offices.map((off, idx) => (
                  <div key={idx} className="glass-card rounded-2xl p-5 border border-slate-200 space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold uppercase tracking-wider text-brand-gold">
                        {off.type}
                      </span>
                      {off.isPrimary && (
                        <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-brand-gold text-brand-navy">
                          Head Office
                        </span>
                      )}
                    </div>
                    <div className="text-base font-bold text-slate-900">{off.city}</div>
                    <p className="text-xs text-slate-600 flex items-start space-x-2">
                      <MapPin className="w-4 h-4 text-brand-gold flex-shrink-0 mt-0.5" />
                      <span>{off.address}</span>
                    </p>
                    <div className="pt-2 border-t border-slate-200 flex flex-wrap gap-x-4 gap-y-1 text-xs">
                      {off.phones.map((ph, pIdx) => (
                        <a key={pIdx} href={`tel:${ph.replace(/\s+/g, '')}`} className="text-brand-gold hover:underline flex items-center space-x-1">
                          <Phone className="w-3 h-3" />
                          <span>{ph}</span>
                        </a>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* Working Hours Card */}
              <div className="p-5 rounded-2xl bg-white border border-slate-200 flex items-center space-x-4 text-xs">
                <div className="w-10 h-10 rounded-xl bg-brand-gold/10 border border-brand-gold/30 flex items-center justify-center text-brand-gold flex-shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-slate-900 font-bold">Standard Corporate Business Hours:</div>
                  <div className="text-slate-600 mt-0.5">{COMPANY_INFO.contact.hours}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
