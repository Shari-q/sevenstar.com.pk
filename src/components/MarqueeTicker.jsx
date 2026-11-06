import React from 'react';
import { Award, ShieldCheck, Building2, Flame, MapPin, Globe } from 'lucide-react';

export default function MarqueeTicker() {
  const items = [
    { icon: ShieldCheck, text: "PEC Category C-A (No-Limit) Registered Contractor" },
    { icon: Building2, text: "400+ Government & National Projects Delivered" },
    { icon: Award, text: "25+ Years of Engineering & Construction Excellence" },
    { icon: MapPin, text: "Seven Star Mall & Residency — Main GT Road, DHA Phase-II, Islamabad" },
    { icon: Building2, text: "Seven Star Heights — Bahria Town Executive Residences" },
    { icon: Flame, text: "7-Star Asphalt Plant & Industrial Fleet — Jatlan, Mirpur AJK" },
    { icon: Globe, text: "Seven Star UK — International Residential Developments" },
  ];

  return (
    <div className="bg-slate-100 border-y border-slate-200 py-3 overflow-hidden select-none">
      <div className="flex animate-marquee whitespace-nowrap items-center">
        {items.concat(items).map((item, idx) => {
          const Icon = item.icon;
          return (
            <div key={idx} className="flex items-center space-x-3 mx-8 text-xs font-bold tracking-wider uppercase text-slate-700">
              <span className="w-2 h-2 rounded-full bg-brand-gold"></span>
              <Icon className="w-4 h-4 text-brand-gold flex-shrink-0" />
              <span>{item.text}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
