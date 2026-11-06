import React from 'react';
import { Home, Compass, MapPin, CheckCircle2, ArrowRight, Paintbrush, Hammer } from 'lucide-react';

export default function ResidentialDevelopment({ onOpenInquiry }) {
  const services = [
    {
      title: "Colony Planning & Master Development",
      desc: "Collaborating with housing societies to envision and master-plan expansions. Assessing terrain, zoning residential and commercial enclaves, designing wide road grids, underground electrification, and sewerage systems.",
      icon: Compass,
      image: "https://sevenstar.com.pk/wp-content/uploads/2025/12/1-29_62_11zon-scaled.webp"
    },
    {
      title: "Turnkey Home & Villa Construction",
      desc: "Executing bespoke single-family residences, designer villas, and gated community enclaves. From foundation laying to high-end interior cabinetry, marble flooring, and smart automation.",
      icon: Hammer,
      image: "https://sevenstar.com.pk/wp-content/uploads/2025/12/1-27_60_11zon-scaled.webp"
    },
    {
      title: "Architectural, Exterior & Interior Design",
      desc: "Integrated design studio creating captivating modern facades, energy-efficient building envelopes, landscaping, and bespoke luxury interior spaces that elevate everyday living.",
      icon: Paintbrush,
      image: "https://sevenstar.com.pk/wp-content/uploads/2025/12/1-48_40_11zon-scaled.webp"
    }
  ];

  return (
    <div className="min-h-screen bg-brand-surface pt-28">
      {/* Banner */}
      <section className="relative py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-brand-gold/10 border border-brand-gold/30 text-brand-gold text-xs font-bold uppercase tracking-widest mb-4">
            <Home className="w-4 h-4" />
            <span>Master Community Planning & Custom Turnkey Villas</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-black text-slate-900 font-heading leading-tight max-w-3xl">
            Residential Development Services
          </h1>
          <p className="text-base sm:text-xl text-slate-600 max-w-2xl mt-4 font-light leading-relaxed">
            Specializing in turning housing visions into thriving residential communities with comprehensive planning, modern infrastructure, and bespoke home construction.
          </p>
        </div>
      </section>

      {/* Services Showcase */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((srv, idx) => {
              const Icon = srv.icon;
              return (
                <div key={idx} className="glass-card rounded-2xl overflow-hidden border border-slate-200 hover:border-brand-gold/40 transition-all flex flex-col justify-between">
                    <div className="aspect-[16/10] bg-slate-100 overflow-hidden relative">
                    <img 
                      src={srv.image} 
                      alt={srv.title} 
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="p-6 space-y-3 flex-1 flex flex-col justify-between">
                    <div>
                      <div className="w-10 h-10 rounded-xl bg-brand-gold/10 border border-brand-gold/30 flex items-center justify-center text-brand-gold mb-3">
                        <Icon className="w-5 h-5" />
                      </div>
                      <h3 className="text-lg font-bold text-slate-900">{srv.title}</h3>
                      <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                        {srv.desc}
                      </p>
                    </div>

                    <div className="pt-4 border-t border-slate-200">
                      <button
                        onClick={onOpenInquiry}
                        className="text-xs font-bold uppercase tracking-wider text-brand-gold hover:underline flex items-center space-x-1"
                      >
                        <span>Inquire Residential Project</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Planning Steps */}
          <div className="glass-card rounded-3xl p-8 sm:p-12 border border-brand-gold/30">
            <h2 className="text-2xl font-black text-slate-900 mb-6">Our Residential Development Lifecycle</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-xs text-slate-600">
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
                <span className="text-brand-gold font-bold text-sm block">1. Site Feasibility</span>
                <p className="text-slate-600">Topographical surveying, soil profiling, and zoning analysis.</p>
              </div>
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
                <span className="text-brand-gold font-bold text-sm block">2. Master Colony Layout</span>
                <p className="text-slate-600">Road hierarchies, green spaces, utilities, and plot demarcations.</p>
              </div>
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
                <span className="text-brand-gold font-bold text-sm block">3. Civil Infrastructure</span>
                <p className="text-slate-600">Asphalt paving, stormwater drainage, water supply, and streetlights.</p>
              </div>
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
                <span className="text-brand-gold font-bold text-sm block">4. Turnkey Construction</span>
                <p className="text-slate-600">Architectural home building, luxury finishes, and key handover.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
