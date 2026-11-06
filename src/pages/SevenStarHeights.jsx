import React from 'react';
import { Link } from 'react-router-dom';
import { Building2, MapPin, CheckCircle2, ArrowRight, ShieldCheck, Sparkles, Phone, Download } from 'lucide-react';
import PropertyCalculator from '../components/PropertyCalculator';

export default function SevenStarHeights({ onOpenInquiry }) {
  const amenities = [
    { title: "Seismic-Resistant RCC Structure", desc: "Engineered to strict Zone 2B/3 earthquake safety standards." },
    { title: "High-Speed Elevators", desc: "Automated modern elevators with emergency power rescue system." },
    { title: "24/7 Security & CCTV", desc: "Round-the-clock trained security personnel and comprehensive coverage." },
    { title: "100% Power Backup", desc: "Dedicated heavy generator ensuring uninterrupted common and unit power." },
    { title: "Multi-Tier Covered Parking", desc: "Secure allocated underground parking for residents and visitors." },
    { title: "Designer Balconies & Terraces", desc: "Spacious private outdoor zones offering skyline views of Bahria Town." }
  ];

  const unitTypes = [
    {
      title: "1-Bedroom Modern Suite",
      size: "600 SFT",
      specs: "Spacious Master Bedroom, Attached Bath, Open American Kitchen, Living Lounge & Balcony",
      badge: "Ideal for Young Professionals & Investors"
    },
    {
      title: "2-Bedroom Luxury Residence",
      size: "1,050 SFT",
      specs: "2 Master Bedrooms with En-Suite Bathrooms, Elegant Dining Lounge, Kitchen & Dual Balconies",
      badge: "Most Popular Family Layout"
    },
    {
      title: "3-Bedroom Royal Family Suite",
      size: "1,650 SFT",
      specs: "3 Large Bedrooms, 3 Bathrooms, Powder Room, Grand Hall, Chef's Kitchen & Panoramic Terrace",
      badge: "Executive Luxury Living"
    },
    {
      title: "Skyline Royal Penthouse",
      size: "3,000 SFT",
      specs: "Duplex Layout, Private Rooftop Terrace, Maid Quarters, Master Suite with Walk-In Closet",
      badge: "Exclusive Top-Floor Address"
    }
  ];

  return (
    <div className="min-h-screen bg-brand-navy pt-28">
      {/* Banner */}
      <section className="relative py-24 bg-gradient-to-b from-[#060912] to-brand-navy border-b border-white/10 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://sevenstar.com.pk/wp-content/uploads/2025/12/1-48_40_11zon-scaled.webp" 
            alt="Seven Star Heights Bahria Town" 
            className="w-full h-full object-cover opacity-35"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-navy via-brand-navy/80 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-brand-gold/10 border border-brand-gold/30 text-brand-gold text-xs font-bold uppercase tracking-widest mb-4">
            <Building2 className="w-4 h-4" />
            <span>Prestigious High-Rise Living in Bahria Town</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-black text-white font-heading leading-tight max-w-3xl">
            Seven Star Heights
          </h1>

          <div className="flex items-center space-x-2 text-slate-300 text-sm mt-3">
            <MapPin className="w-4 h-4 text-brand-gold" />
            <span>Bahria Town Rawalpindi / Islamabad • Developed by Seven Star Group</span>
          </div>

          <div className="mt-8 flex flex-wrap gap-4">
            <button
              onClick={onOpenInquiry}
              className="btn-gold px-8 py-3.5 rounded-full text-xs uppercase font-extrabold tracking-widest shadow-xl flex items-center space-x-2"
            >
              <span>Book An Apartment / Site Visit</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <a
              href="tel:+925827437268"
              className="px-6 py-3.5 rounded-full text-xs font-bold uppercase tracking-wider text-white bg-white/10 hover:bg-white/20 border border-white/20 transition-colors flex items-center space-x-2"
            >
              <Phone className="w-4 h-4 text-brand-gold" />
              <span>Call Sales Desk: +92 582 7437 268</span>
            </a>
          </div>
        </div>
      </section>

      {/* Overview & Project Details */}
      <section className="py-20 bg-[#090D16]">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-5">
              <div className="text-xs font-extrabold uppercase tracking-widest text-brand-gold">
                ARCHITECTURAL EXCELLENCE
              </div>
              <h2 className="text-3xl sm:text-4xl font-black text-white font-heading">
                A Landmark Address for Modern Families and Overseas Investors
              </h2>
              <div className="space-y-4 text-sm text-slate-300 leading-relaxed">
                <p>
                  <strong className="text-white">Seven Star Heights</strong> represents the culmination of Seven Star Group's 25-year structural heritage channeled into private residential luxury. Situated in the tranquil and upscale precinct of Bahria Town, this multi-story tower offers an oasis of calm and refinement with rapid arterial links to Islamabad and Rawalpindi.
                </p>
                <p>
                  Every home is conceived to maximize natural daylight, cross-ventilation, and aesthetic elegance. Using premium imported tiles, contemporary kitchen cabinetry, branded sanitary fittings, and expansive balconies, Seven Star Heights sets an uncompromising standard for real estate in the twin cities.
                </p>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-4">
                <div className="p-4 rounded-xl bg-white/5 border border-white/10 text-center">
                  <div className="text-brand-gold font-black text-xl">DHA / Bahria</div>
                  <div className="text-[11px] text-slate-400 mt-1 uppercase">Top Enclave</div>
                </div>
                <div className="p-4 rounded-xl bg-white/5 border border-white/10 text-center">
                  <div className="text-brand-gold font-black text-xl">3 Years</div>
                  <div className="text-[11px] text-slate-400 mt-1 uppercase">Installment Plan</div>
                </div>
                <div className="p-4 rounded-xl bg-white/5 border border-white/10 text-center">
                  <div className="text-brand-gold font-black text-xl">100% Owned</div>
                  <div className="text-[11px] text-slate-400 mt-1 uppercase">Direct Developer</div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="rounded-3xl overflow-hidden border border-brand-gold/40 shadow-2xl bg-slate-900 aspect-[4/3]">
                <img 
                  src="https://sevenstar.com.pk/wp-content/uploads/2025/12/1-40_66_11zon-scaled.webp" 
                  alt="Seven Star Heights Architecture"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Apartment Unit Types */}
          <div className="border-t border-white/10 pt-16">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <div className="text-xs font-extrabold uppercase tracking-widest text-brand-gold mb-2">Available Residences</div>
              <h2 className="text-3xl sm:text-4xl font-black text-white font-heading">
                Thoughtfully Designed Layouts
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {unitTypes.map((unit, idx) => (
                <div key={idx} className="glass-card rounded-2xl p-7 border border-white/10 hover:border-brand-gold/50 transition-all flex flex-col justify-between">
                  <div className="space-y-3">
                    <div className="inline-block px-2.5 py-0.5 rounded-full text-[10px] font-extrabold uppercase tracking-wider bg-brand-gold/10 text-brand-gold border border-brand-gold/30">
                      {unit.badge}
                    </div>
                    <div className="flex items-center justify-between">
                      <h3 className="text-xl font-bold text-white">{unit.title}</h3>
                      <span className="text-brand-gold font-extrabold text-sm">{unit.size}</span>
                    </div>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      {unit.specs}
                    </p>
                  </div>
                  <div className="pt-5 border-t border-white/10 mt-5 flex items-center justify-between">
                    <button
                      onClick={onOpenInquiry}
                      className="text-xs font-bold uppercase tracking-wider text-brand-gold hover:underline flex items-center space-x-1"
                    >
                      <span>Reserve This Unit</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                    <span className="text-[11px] text-slate-400">Quarterly Plan Available</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Building Amenities */}
          <div className="border-t border-white/10 pt-16">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <div className="text-xs font-extrabold uppercase tracking-widest text-brand-gold mb-2">World-Class Standards</div>
              <h2 className="text-3xl sm:text-4xl font-black text-white font-heading">
                Amenities & Engineering Features
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {amenities.map((am, idx) => (
                <div key={idx} className="p-6 rounded-2xl bg-white/5 border border-white/10 space-y-2">
                  <div className="flex items-center space-x-2 text-brand-gold font-bold text-sm">
                    <CheckCircle2 className="w-4 h-4 flex-shrink-0" />
                    <span>{am.title}</span>
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed pl-6">
                    {am.desc}
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
