import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, Building2, MapPin, CheckCircle2, ArrowRight, ShieldCheck, Flame } from 'lucide-react';
import PropertyCalculator from '../components/PropertyCalculator';

export default function RealEstate({ onOpenInquiry }) {
  return (
    <div className="min-h-screen bg-brand-navy pt-28">
      {/* Banner */}
      <section className="relative py-20 bg-gradient-to-b from-[#060912] to-brand-navy border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-brand-gold/10 border border-brand-gold/30 text-brand-gold text-xs font-bold uppercase tracking-widest mb-4">
            <Sparkles className="w-4 h-4" />
            <span>Luxury High-Rise & Commercial Developments</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-black text-white font-heading leading-tight max-w-3xl">
            Real Estate Portfolio
          </h1>
          <p className="text-base sm:text-xl text-slate-300 max-w-2xl mt-4 font-light leading-relaxed">
            Elevating modern living in the twin cities with landmark high-rise residences and premier commercial destinations in DHA Phase-II and Bahria Town.
          </p>
        </div>
      </section>

      {/* Flagship Projects Section */}
      <section className="py-20 bg-[#090D16]">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-20">
          {/* Project 1: Seven Star Mall & Residency */}
          <div className="glass-card rounded-3xl p-8 sm:p-12 border border-brand-gold/40 flex flex-col lg:flex-row gap-10 items-center">
            <div className="w-full lg:w-1/2 aspect-[16/10] rounded-2xl overflow-hidden bg-slate-900 flex-shrink-0 relative group">
              <img 
                src="https://sevenstar.com.pk/wp-content/uploads/2025/12/PIC-1-1.webp" 
                alt="Seven Star Mall & Residency" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-extrabold uppercase tracking-wider bg-brand-navy/90 text-brand-gold border border-brand-gold/30 backdrop-blur-md">
                DHA Phase-II, Islamabad
              </div>
            </div>

            <div className="w-full lg:w-1/2 space-y-5">
              <div className="text-xs font-bold uppercase tracking-widest text-brand-gold">
                FLAGSHIP MIXED-USE DEVELOPMENT
              </div>
              <h2 className="text-2xl sm:text-4xl font-black text-white font-heading">
                Seven Star Mall & Residency
              </h2>
              <div className="flex items-center space-x-1.5 text-xs text-slate-300">
                <MapPin className="w-4 h-4 text-brand-gold" />
                <span>Prime Junction of Main GT Road, DHA Phase-II, Islamabad</span>
              </div>
              <p className="text-sm text-slate-300 leading-relaxed">
                Seven Star Mall & Residency stands as an iconic architectural presence on Main GT Road inside DHA Phase-II. Bringing together premium shopping arcades, corporate headquarter suites, and executive residences with panoramic city vistas.
              </p>

              <div className="grid grid-cols-2 gap-3 text-xs pt-2">
                <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                  <strong className="text-brand-gold block font-bold">Shopping Mall:</strong>
                  <span className="text-slate-400">Anchor brands & luxury retail</span>
                </div>
                <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                  <strong className="text-brand-gold block font-bold">Apartments:</strong>
                  <span className="text-slate-400">1, 2, 3 Bed & Sky Penthouses</span>
                </div>
              </div>

              <div className="pt-4 flex flex-wrap gap-4">
                <Link
                  to="/projects/seven-star-mall-residency"
                  className="btn-gold px-7 py-3 rounded-full text-xs uppercase font-extrabold tracking-wider shadow-lg flex items-center space-x-2"
                >
                  <span>Explore Mall & Residency</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <button
                  onClick={onOpenInquiry}
                  className="px-6 py-3 rounded-full text-xs font-bold uppercase tracking-wider text-white bg-white/10 hover:bg-white/20 border border-white/20 transition-colors"
                >
                  Schedule Site Tour
                </button>
              </div>
            </div>
          </div>

          {/* Project 2: Seven Star Heights */}
          <div className="glass-card rounded-3xl p-8 sm:p-12 border border-brand-gold/40 flex flex-col lg:flex-row-reverse gap-10 items-center">
            <div className="w-full lg:w-1/2 aspect-[16/10] rounded-2xl overflow-hidden bg-slate-900 flex-shrink-0 relative group">
              <img 
                src="https://sevenstar.com.pk/wp-content/uploads/2025/12/1-48_40_11zon-scaled.webp" 
                alt="Seven Star Heights Bahria Town" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-extrabold uppercase tracking-wider bg-brand-navy/90 text-brand-gold border border-brand-gold/30 backdrop-blur-md">
                Bahria Town Rawalpindi
              </div>
            </div>

            <div className="w-full lg:w-1/2 space-y-5">
              <div className="text-xs font-bold uppercase tracking-widest text-brand-gold">
                EXECUTIVE HIGH-RISE RESIDENCES
              </div>
              <h2 className="text-2xl sm:text-4xl font-black text-white font-heading">
                Seven Star Heights
              </h2>
              <div className="flex items-center space-x-1.5 text-xs text-slate-300">
                <MapPin className="w-4 h-4 text-brand-gold" />
                <span>Prestigious Location in Bahria Town, Rawalpindi / Islamabad</span>
              </div>
              <p className="text-sm text-slate-300 leading-relaxed">
                An exclusive residential sanctuary engineered with spacious modern floor plans, luxury finishes, earthquake-resistant structural safety, and rapid highway connectivity to the twin cities and motorway network.
              </p>

              <div className="grid grid-cols-2 gap-3 text-xs pt-2">
                <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                  <strong className="text-brand-gold block font-bold">Residences:</strong>
                  <span className="text-slate-400">1, 2 & 3 Bedroom Luxury Suites</span>
                </div>
                <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                  <strong className="text-brand-gold block font-bold">Payment Plan:</strong>
                  <span className="text-slate-400">Easy quarterly installments</span>
                </div>
              </div>

              <div className="pt-4 flex flex-wrap gap-4">
                <Link
                  to="/projects/seven-star-heights"
                  className="btn-gold px-7 py-3 rounded-full text-xs uppercase font-extrabold tracking-wider shadow-lg flex items-center space-x-2"
                >
                  <span>Explore Seven Star Heights</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <button
                  onClick={onOpenInquiry}
                  className="px-6 py-3 rounded-full text-xs font-bold uppercase tracking-wider text-white bg-white/10 hover:bg-white/20 border border-white/20 transition-colors"
                >
                  Schedule Site Tour
                </button>
              </div>
            </div>
          </div>

          {/* Interactive Calculator */}
          <div className="pt-8">
            <PropertyCalculator onOpenInquiry={onOpenInquiry} />
          </div>
        </div>
      </section>
    </div>
  );
}
