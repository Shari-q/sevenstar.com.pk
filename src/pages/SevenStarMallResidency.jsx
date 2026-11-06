import React from 'react';
import { Link } from 'react-router-dom';
import { Building2, MapPin, CheckCircle2, ArrowRight, ShieldCheck, Sparkles, Phone, ShoppingBag, Store } from 'lucide-react';
import PropertyCalculator from '../components/PropertyCalculator';

export default function SevenStarMallResidency({ onOpenInquiry }) {
  const features = [
    { title: "Strategic Main GT Road Frontage", desc: "Unmatched visibility and daily transit exposure at DHA Phase-II entrance." },
    { title: "Grand Shopping Mall & Atrium", desc: "Multi-level commercial retail hosting premier fashion, electronics & lifestyle brands." },
    { title: "Executive Corporate Suites", desc: "Dedicated corporate floors with smart access, boardroom facilities, and high-speed fiber." },
    { title: "Luxury Apartments & Penthouses", desc: "1, 2 & 3 bedroom suites with floor-to-ceiling glass and private terraces." },
    { title: "Multi-Tier Basement Parking", desc: "Automated ticketless entry with extensive dedicated parking for shoppers & residents." },
    { title: "24/7 Security & Building Automation", desc: "Integrated HVAC, central fire fighting, building management, and security personnel." }
  ];

  const commercialCategories = [
    {
      title: "Ground Floor Premium Retail",
      desc: "Prime anchor stores and flagship brand boutiques directly accessible from the grand main entrance.",
      tag: "Highest Footfall"
    },
    {
      title: "Mezzanine & 1st Floor Fashion Arcades",
      desc: "Apparel, jewelry, footwear, and specialty lifestyle retail arranged along wide illuminated avenues.",
      tag: "Retail Excellence"
    },
    {
      title: "Food Court & Dining Terraces",
      desc: "Dedicated culinary floor featuring international franchises, local dining, and family seating.",
      tag: "Culinary Destination"
    },
    {
      title: "Corporate Headquarter Floors",
      desc: "High-spec modern offices tailored for multinationals, financial firms, and tech headquarters.",
      tag: "Corporate Prestige"
    }
  ];

  return (
    <div className="min-h-screen bg-brand-navy pt-28">
      {/* Banner */}
      <section className="relative py-24 bg-gradient-to-b from-[#060912] to-brand-navy border-b border-white/10 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://sevenstar.com.pk/wp-content/uploads/2025/12/PIC-1-1.webp" 
            alt="Seven Star Mall & Residency DHA II" 
            className="w-full h-full object-cover opacity-35"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-navy via-brand-navy/80 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-brand-gold/10 border border-brand-gold/30 text-brand-gold text-xs font-bold uppercase tracking-widest mb-4">
            <Building2 className="w-4 h-4" />
            <span>Commercial Retail • Corporate Suites • Luxury Living</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-black text-white font-heading leading-tight max-w-4xl">
            Seven Star Mall & Residency
          </h1>

          <div className="flex items-center space-x-2 text-slate-300 text-sm mt-3">
            <MapPin className="w-4 h-4 text-brand-gold" />
            <span>Main GT Road, DHA Phase-II, Islamabad • Developed by Seven Star Group</span>
          </div>

          <div className="mt-8 flex flex-wrap gap-4">
            <button
              onClick={onOpenInquiry}
              className="btn-gold px-8 py-3.5 rounded-full text-xs uppercase font-extrabold tracking-widest shadow-xl flex items-center space-x-2"
            >
              <span>Book Shop or Apartment / Request Brochure</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <a
              href="tel:+923004376007"
              className="px-6 py-3.5 rounded-full text-xs font-bold uppercase tracking-wider text-white bg-white/10 hover:bg-white/20 border border-white/20 transition-colors flex items-center space-x-2"
            >
              <Phone className="w-4 h-4 text-brand-gold" />
              <span>DHA Desk: +92 300 4376 007</span>
            </a>
          </div>
        </div>
      </section>

      {/* Narrative Section */}
      <section className="py-20 bg-[#090D16]">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-5">
              <div className="text-xs font-extrabold uppercase tracking-widest text-brand-gold">
                THE CAPITAL'S NEW COMMERCIAL EPICENTER
              </div>
              <h2 className="text-3xl sm:text-4xl font-black text-white font-heading">
                A Multi-Storey Landmark at the Heart of DHA Phase-II
              </h2>
              <div className="space-y-4 text-sm text-slate-300 leading-relaxed">
                <p>
                  Ideally positioned on the main arterial corridor of <strong className="text-white">GT Road inside DHA Phase-II, Islamabad</strong>, <strong className="text-white">Seven Star Mall & Residency</strong> commands one of the most prominent real estate locations in the capital metropolis.
                </p>
                <p>
                  The development brings together high-end commercial retail brands, experiential culinary dining, corporate offices, and ultra-luxurious 1, 2, and 3-bedroom residences. Engineered to earthquake-resistant structural specifications by Seven Star Group's veteran civil engineering team, this landmark represents prime investment security and tremendous capital appreciation.
                </p>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-4">
                <div className="p-4 rounded-xl bg-white/5 border border-white/10 text-center">
                  <div className="text-brand-gold font-black text-xl">Main GT Rd</div>
                  <div className="text-[11px] text-slate-400 mt-1 uppercase">DHA II Frontage</div>
                </div>
                <div className="p-4 rounded-xl bg-white/5 border border-white/10 text-center">
                  <div className="text-brand-gold font-black text-xl">High Rental</div>
                  <div className="text-[11px] text-slate-400 mt-1 uppercase">Guaranteed Yields</div>
                </div>
                <div className="p-4 rounded-xl bg-white/5 border border-white/10 text-center">
                  <div className="text-brand-gold font-black text-xl">3 Years</div>
                  <div className="text-[11px] text-slate-400 mt-1 uppercase">Flexible Schedule</div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="rounded-3xl overflow-hidden border border-brand-gold/40 shadow-2xl bg-slate-900 aspect-[4/3]">
                <img 
                  src="https://sevenstar.com.pk/wp-content/uploads/2025/12/1-43_48_11zon-scaled.webp" 
                  alt="Seven Star Mall Architecture"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Commercial & Retail Zones */}
          <div className="border-t border-white/10 pt-16">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <div className="text-xs font-extrabold uppercase tracking-widest text-brand-gold mb-2">Commercial Opportunities</div>
              <h2 className="text-3xl sm:text-4xl font-black text-white font-heading">
                Retail Outlets & Corporate Suites
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {commercialCategories.map((c, idx) => (
                <div key={idx} className="glass-card rounded-2xl p-7 border border-white/10 hover:border-brand-gold/50 transition-all flex flex-col justify-between">
                  <div className="space-y-3">
                    <div className="inline-block px-2.5 py-0.5 rounded-full text-[10px] font-extrabold uppercase tracking-wider bg-brand-gold/10 text-brand-gold border border-brand-gold/30">
                      {c.tag}
                    </div>
                    <h3 className="text-xl font-bold text-white">{c.title}</h3>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      {c.desc}
                    </p>
                  </div>
                  <div className="pt-5 border-t border-white/10 mt-5 flex items-center justify-between">
                    <button
                      onClick={onOpenInquiry}
                      className="text-xs font-bold uppercase tracking-wider text-brand-gold hover:underline flex items-center space-x-1"
                    >
                      <span>Inquire About Shop Booking</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                    <span className="text-[11px] text-slate-400">Prime Locations Available</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Architectural Features */}
          <div className="border-t border-white/10 pt-16">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <div className="text-xs font-extrabold uppercase tracking-widest text-brand-gold mb-2">Engineering & Convenience</div>
              <h2 className="text-3xl sm:text-4xl font-black text-white font-heading">
                Complex Features & Specifications
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((feat, idx) => (
                <div key={idx} className="p-6 rounded-2xl bg-white/5 border border-white/10 space-y-2">
                  <div className="flex items-center space-x-2 text-brand-gold font-bold text-sm">
                    <CheckCircle2 className="w-4 h-4 flex-shrink-0" />
                    <span>{feat.title}</span>
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed pl-6">
                    {feat.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Embedded Calculator */}
          <div className="pt-8">
            <PropertyCalculator onOpenInquiry={onOpenInquiry} />
          </div>
        </div>
      </section>
    </div>
  );
}
