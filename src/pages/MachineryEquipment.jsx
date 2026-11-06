import React from 'react';
import { Truck, Flame, ShieldCheck, CheckCircle2, ArrowRight, Settings, Wrench } from 'lucide-react';

export default function MachineryEquipment({ onOpenInquiry }) {
  const fleetCategories = [
    {
      title: "7-Star Industrial Asphalt Plant",
      capacity: "160 Tons / Hour Continuous Capacity",
      location: "Jatlan, Mirpur AJK",
      image: "https://sevenstar.com.pk/wp-content/uploads/2023/12/UKS05903-768x512.webp",
      desc: "Fully computerized batch-mix asphalt plant featuring multi-stage aggregate drying, high-efficiency baghouse filtration, precision bitumen injection, and insulated storage silos."
    },
    {
      title: "Earthmoving & Excavation Fleet",
      capacity: "50+ Heavy Hydraulic Units",
      location: "Active across AJK & Punjab",
      image: "https://sevenstar.com.pk/wp-content/uploads/2025/12/1-44_36_11zon-scaled.webp",
      desc: "Comprehensive fleet of Caterpillar and Komatsu tracked excavators, hydraulic rock breakers, wheel loaders, and heavy bulldozers for mass earthwork and mountain cutting."
    },
    {
      title: "Paving, Grading & Compaction Fleet",
      capacity: "Precision Highway Equipment",
      location: "Mobilized on Highway Corridors",
      image: "https://sevenstar.com.pk/wp-content/uploads/2025/12/1-28_61_11zon-scaled.webp",
      desc: "High-spec Vogele and Dynapac asphalt pavers with electronic grade and slope control, vibratory tandem steel rollers, and pneumatic tyre rollers ensuring 98%+ compaction density."
    },
    {
      title: "Concrete Production & Haulage Logistics",
      capacity: "Batching Plants & Transit Mixers",
      location: "Central & Site Batching Stations",
      image: "https://sevenstar.com.pk/wp-content/uploads/2025/12/1-15_68_11zon-scaled.webp",
      desc: "Automated mobile concrete batching plants, heavy dump truck armadas, concrete boom pumps, and transit mixers enabling continuous high-volume structural pours."
    }
  ];

  return (
    <div className="min-h-screen bg-brand-surface pt-28">
      {/* Banner */}
      <section className="relative py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-brand-gold/10 border border-brand-gold/30 text-brand-gold text-xs font-bold uppercase tracking-widest mb-4">
            <Truck className="w-4 h-4" />
            <span>500+ Company Owned Units & Industrial Asphalt Plant</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-black text-slate-900 font-heading leading-tight max-w-3xl">
            Machinery & Equipment Fleet
          </h1>
          <p className="text-base sm:text-xl text-slate-600 max-w-2xl mt-4 font-light leading-relaxed">
            Eliminating third-party dependency. Seven Star Group executes mega infrastructure projects with its own heavy machinery armada and industrial manufacturing plants.
          </p>
        </div>
      </section>

      {/* Fleet Showcase */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {fleetCategories.map((fleet, idx) => (
              <div key={idx} className="glass-card rounded-3xl overflow-hidden border border-slate-200 hover:border-brand-gold/40 transition-all flex flex-col justify-between">
                <div className="aspect-[16/10] bg-slate-100 overflow-hidden relative">
                  <img 
                    src={fleet.image} 
                    alt={fleet.title} 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4 px-3 py-1 rounded-full text-[11px] font-extrabold uppercase tracking-wider bg-white/95 text-brand-gold border border-brand-gold/30">
                    {fleet.capacity}
                  </div>
                </div>

                <div className="p-8 space-y-4 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-slate-900">{fleet.title}</h3>
                    <div className="text-xs text-brand-gold font-medium mt-1">{fleet.location}</div>
                    <p className="text-xs sm:text-sm text-slate-600 mt-3 leading-relaxed">
                      {fleet.desc}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-slate-200 flex items-center justify-between">
                    <button
                      onClick={onOpenInquiry}
                      className="btn-gold px-5 py-2.5 rounded-full text-xs uppercase font-extrabold tracking-wider shadow-md flex items-center space-x-1.5"
                    >
                      <span>Inquire Equipment Lease / Supply</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Plant Specs */}
          <div className="glass-card rounded-3xl p-8 sm:p-12 border border-brand-gold/30">
            <h2 className="text-2xl font-black text-slate-900 mb-6">7-Star Asphalt Plant Technical Specifications</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-xs">
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                <div className="text-brand-gold font-bold text-sm">160 TPH Output</div>
                <div className="text-slate-600 mt-1">Continuous high-volume asphaltic concrete production</div>
              </div>
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                <div className="text-brand-gold font-bold text-sm">Computerized Batching</div>
                <div className="text-slate-600 mt-1">Exact automated aggregate and bitumen ratio control</div>
              </div>
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                <div className="text-brand-gold font-bold text-sm">Quality Lab on Site</div>
                <div className="text-slate-600 mt-1">Marshall stability and binder penetration testing</div>
              </div>
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                <div className="text-brand-gold font-bold text-sm">Insulated Storage</div>
                <div className="text-slate-600 mt-1">Heated bitumen storage tanks & thermal delivery fleet</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
