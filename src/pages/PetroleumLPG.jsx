import React from 'react';
import { Flame, ShieldCheck, MapPin, CheckCircle2, ArrowRight, Phone, Fuel } from 'lucide-react';

export default function PetroleumLPG({ onOpenInquiry }) {
  const facilities = [
    {
      title: "7-Star & M Zakaria Petrol Pump & Terminal",
      location: "Main Road, Mirpur, Azad Jammu & Kashmir",
      desc: "Flagship multi-island retail refueling facility supplying Super Petrol, High-Octane (HOBC), and High-Speed Diesel (HSD) alongside automotive lubricants.",
      image: "https://sevenstar.com.pk/wp-content/uploads/2024/09/Blog-29-300x169.png"
    },
    {
      title: "7-Star Petroleum Commercial Hub",
      location: "Bhimber, Azad Jammu & Kashmir",
      desc: "High-capacity commercial distribution terminal catering to civil construction contractors, heavy equipment fleets, agricultural machinery, and local transport.",
      image: "https://sevenstar.com.pk/wp-content/uploads/2024/09/Blog-29-1-300x169.png"
    },
    {
      title: "Seven Star LPG Storage & Filling Terminals",
      location: "Mirpur & Regional Supply Network",
      desc: "Licensed LPG bulk storage tanks and cylinder decanting facility providing clean, safe, and pressurized gas solutions for domestic and industrial clients.",
      image: "https://sevenstar.com.pk/wp-content/uploads/2024/09/Blog-29-4-300x169.png"
    }
  ];

  return (
    <div className="min-h-screen bg-brand-navy pt-28">
      {/* Banner */}
      <section className="relative py-20 bg-gradient-to-b from-[#060912] to-brand-navy border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-brand-gold/10 border border-brand-gold/30 text-brand-gold text-xs font-bold uppercase tracking-widest mb-4">
            <Flame className="w-4 h-4" />
            <span>Energy Distribution & Retail Petroleum Logistics</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-black text-white font-heading leading-tight max-w-3xl">
            Petroleum & LPG Operations
          </h1>
          <p className="text-base sm:text-xl text-slate-300 max-w-2xl mt-4 font-light leading-relaxed">
            Supplying premium fuels, certified lubricants, and high-capacity LPG storage infrastructure across strategic transport corridors of AJK and Punjab.
          </p>
        </div>
      </section>

      {/* Facilities Grid */}
      <section className="py-20 bg-[#090D16]">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {facilities.map((fac, idx) => (
              <div key={idx} className="glass-card rounded-2xl overflow-hidden border border-white/10 hover:border-brand-gold/40 transition-all flex flex-col justify-between">
                <div className="aspect-[16/10] bg-slate-900 overflow-hidden relative">
                  <img 
                    src={fac.image} 
                    alt={fac.title} 
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = "https://sevenstar.com.pk/wp-content/uploads/2024/09/Blog-29-300x169.png";
                    }}
                  />
                  <div className="absolute top-3 left-3 px-2.5 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider bg-black/70 text-brand-gold border border-brand-gold/30">
                    Energy Terminal 0{idx + 1}
                  </div>
                </div>

                <div className="p-6 space-y-3 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center space-x-1.5 text-[11px] text-slate-400 mb-1">
                      <MapPin className="w-3.5 h-3.5 text-brand-gold" />
                      <span>{fac.location}</span>
                    </div>
                    <h3 className="text-lg font-bold text-white">{fac.title}</h3>
                    <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                      {fac.desc}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs">
                    <span className="text-emerald-400 font-bold flex items-center space-x-1">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      <span>OGRA Licensed</span>
                    </span>
                    <button
                      onClick={onOpenInquiry}
                      className="text-brand-gold font-bold hover:underline"
                    >
                      Inquire Bulk Supply →
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Operational Standards */}
          <div className="glass-card rounded-3xl p-8 sm:p-12 border border-brand-gold/30">
            <h2 className="text-2xl font-black text-white mb-6">Rigorous Safety & Environmental Compliance</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs text-slate-300">
              <div className="p-5 rounded-2xl bg-white/5 border border-white/10 space-y-2">
                <div className="text-brand-gold font-bold text-sm">Underground Safe Storage</div>
                <p className="text-slate-400 leading-relaxed">
                  Heavy-gauge cathodic protected underground fuel tanks equipped with automatic digital tank gauging and vapor recovery systems.
                </p>
              </div>
              <div className="p-5 rounded-2xl bg-white/5 border border-white/10 space-y-2">
                <div className="text-brand-gold font-bold text-sm">Fleet Supply Logistics</div>
                <p className="text-slate-400 leading-relaxed">
                  Dedicated bowser transport fleet ensuring uninterrupted diesel supply directly to heavy construction and highway paving sites.
                </p>
              </div>
              <div className="p-5 rounded-2xl bg-white/5 border border-white/10 space-y-2">
                <div className="text-brand-gold font-bold text-sm">LPG Decanting Safety</div>
                <p className="text-slate-400 leading-relaxed">
                  Automated leak detection, explosion-proof electrical installations, and emergency shutdown valves adhering strictly to national codes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
