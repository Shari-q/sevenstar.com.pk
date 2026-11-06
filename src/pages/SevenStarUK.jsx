import React from 'react';
import { Globe, ShieldCheck, MapPin, Phone, Mail, ArrowRight, CheckCircle2, Building2 } from 'lucide-react';
import PropertyCalculator from '../components/PropertyCalculator';

export default function SevenStarUK({ onOpenInquiry }) {
  return (
    <div className="min-h-screen bg-brand-surface pt-28">
      {/* Banner */}
      <section className="relative py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-brand-gold/10 border border-brand-gold/30 text-brand-gold text-xs font-bold uppercase tracking-widest mb-4">
            <Globe className="w-4 h-4" />
            <span>International Operations • United Kingdom & Pakistan</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-black text-slate-900 font-heading leading-tight max-w-3xl">
            Seven Star UK
          </h1>
          <p className="text-base sm:text-xl text-slate-600 max-w-2xl mt-4 font-light leading-relaxed">
            Expanding Seven Star's trusted craftsmanship to the United Kingdom, delivering large-scale residential housing and providing overseas investors with direct access to prime Pakistani real estate.
          </p>
        </div>
      </section>

      {/* Main Narrative */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-5">
              <div className="text-xs font-extrabold uppercase tracking-widest text-brand-gold">
                CROSS-BORDER PROPERTY & HOUSING DEVELOPMENTS
              </div>
              <h2 className="text-3xl sm:text-4xl font-black text-slate-900 font-heading">
                Bridging British Housing Standards with Pakistani Heritage
              </h2>
              <div className="space-y-4 text-sm text-slate-600 leading-relaxed">
                <p>
                  As part of its international expansion,                   <strong className="text-slate-900">Seven Star Group</strong> maintains dedicated operations in the <strong className="text-slate-900">United Kingdom</strong>. Seven Star UK is actively engaged in large-scale residential housing developments, adhering strictly to British building codes, energy performance standards, and architectural sustainability.
                </p>
                <p>
                  For the extensive British-Pakistani community living in London, Birmingham, Manchester, and Leeds, Seven Star UK serves as a credible, transparent, and direct developer conduit. Overseas clients can purchase and manage luxury apartments in                   <strong className="text-slate-900">Seven Star Mall & Residency (DHA Phase-II Islamabad)</strong> and <strong className="text-slate-900">Seven Star Heights (Bahria Town)</strong> with total legal transparency and dedicated UK representation.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                <div className="p-4 rounded-xl bg-white border border-slate-200 space-y-1">
                  <div className="text-brand-gold font-bold text-sm">Direct UK Liaison Office</div>
                  <p className="text-xs text-slate-600">Personalized consultation and contracts in London and UK regional centers.</p>
                </div>
                <div className="p-4 rounded-xl bg-white border border-slate-200 space-y-1">
                  <div className="text-brand-gold font-bold text-sm">Transparent Remittance</div>
                  <p className="text-xs text-slate-600">Official banking channel transfers with verified title documentation.</p>
                </div>
              </div>

              <div className="pt-4 flex flex-wrap gap-4">
                <a
                  href="tel:+447746000007"
                  className="btn-gold px-7 py-3 rounded-full text-xs uppercase font-extrabold tracking-wider shadow-lg flex items-center space-x-2"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call UK Desk: +44 774 6000 007</span>
                </a>
                <button
                  onClick={onOpenInquiry}
                  className="px-6 py-3 rounded-full text-xs font-bold uppercase tracking-wider text-slate-700 bg-white hover:bg-slate-100 border border-slate-200 transition-colors"
                >
                  Book UK Private Consultation
                </button>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="glass-card rounded-3xl p-8 border border-brand-gold/40 space-y-6">
                <div className="w-14 h-14 rounded-2xl bg-amber-400/10 border border-amber-400/30 flex items-center justify-center text-amber-400">
                  <Globe className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-slate-900">Seven Star UK Contact Information</h3>
                
                <div className="space-y-4 text-xs text-slate-600 border-t border-slate-200 pt-4">
                  <div className="flex items-start space-x-3">
                    <MapPin className="w-4 h-4 text-brand-gold flex-shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-slate-900 block">Operations:</strong>
                      <span className="text-slate-600">Residential Housing & Development Division, United Kingdom</span>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Phone className="w-4 h-4 text-brand-gold flex-shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-slate-900 block">UK Direct Hotline:</strong>
                      <a href="tel:+447746000007" className="text-amber-300 font-bold hover:underline">
                        +44 774 6000 007
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Mail className="w-4 h-4 text-brand-gold flex-shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-slate-900 block">Official Email:</strong>
                      <span className="text-slate-600">uk@sevenstar.com.pk</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Investment Calculator */}
          <div className="pt-8">
            <PropertyCalculator onOpenInquiry={onOpenInquiry} />
          </div>
        </div>
      </section>
    </div>
  );
}
