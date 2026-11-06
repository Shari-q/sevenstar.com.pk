import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Building2, HardHat, Compass, Landmark, ShieldCheck, 
  ArrowRight, CheckCircle2, Flame, Truck, Globe
} from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';

export default function Services({ onOpenInquiry }) {
  const serviceList = [
    {
      id: "construction",
      title: "Commercial & High-Capacity Construction",
      slug: "/services/construction",
      icon: Building2,
      image: "https://sevenstar.com.pk/wp-content/uploads/2025/12/1-43_48_11zon-scaled.webp",
      desc: "Turnkey architectural construction of multi-story institutional campuses, 500-bed hospitals, corporate headquarters, and luxury high-rise developments with earthquake-resistant structural engineering.",
      capabilities: [
        "High-Rise Reinforced Concrete (RCC) Structural Frames",
        "Tertiary Healthcare & Hospital Block Engineering",
        "University Campuses, Auditoriums & Libraries",
        "Strict Testing & Quality Assurance Laboratories"
      ]
    },
    {
      id: "infrastructure",
      title: "Infrastructure, Roads & Major Bridges",
      slug: "/services/infrastructure",
      icon: HardHat,
      image: "https://sevenstar.com.pk/wp-content/uploads/2025/12/1-44_36_11zon-scaled.webp",
      desc: "Execution of national highways, four-lane dual carriageways, mountain transit corridors, and heavy RCC bridges up to 180-meter spans supported by our own industrial asphalt plants.",
      capabilities: [
        "National Highways & Dual Carriageway Construction",
        "Prestressed Continuous Concrete Bridges & Abutments",
        "Municipal Water Supply & Deep Sewerage Reticulation",
        "Hillside Cut-and-Fill, Gabion & Retaining Wall Engineering"
      ]
    },
    {
      id: "government-projects",
      title: "PEC Category C-A Government Contracting",
      slug: "/services/government-projects",
      icon: Landmark,
      image: "https://sevenstar.com.pk/wp-content/uploads/2025/12/1-53_45_11zon-scaled.webp",
      desc: "Licensed at the highest category (No Limit) by the Pakistan Engineering Council, delivering mega projects for Communication & Works (C&W), PP&H, LG&RD, Health, and Education departments.",
      capabilities: [
        "Category C-A (No Financial Limit) Bidding & Execution",
        "Enlisted with Major Federal and Provincial Ministries",
        "Islamic Development Bank (IDB) Assisted Works",
        "Recognized by Prime Minister and President of AJK"
      ]
    },
    {
      id: "architectural-design",
      title: "Architectural, Structural & Interior Design",
      slug: "/divisions/residential-development",
      icon: Compass,
      image: "https://sevenstar.com.pk/wp-content/uploads/2025/12/1-29_62_11zon-scaled.webp",
      desc: "In-house architectural and structural design bureau providing end-to-end master planning, 3D modeling, MEP coordination, and luxury interior finishing.",
      capabilities: [
        "Architectural Conceptualization & 3D Visualization",
        "Finite Element Structural Seismic Modeling",
        "Mechanical, Electrical & Plumbing (MEP) Integration",
        "Luxury Interior Architecture & Turnkey Colony Planning"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-brand-navy pt-28">
      {/* Banner */}
      <section className="relative py-20 bg-gradient-to-b from-[#060912] to-brand-navy border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-brand-gold/10 border border-brand-gold/30 text-brand-gold text-xs font-bold uppercase tracking-widest mb-4">
            <Building2 className="w-4 h-4" />
            <span>Turnkey Engineering & Construction Solutions</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-black text-white font-heading leading-tight max-w-3xl">
            Engineering Capabilities & Services
          </h1>
          <p className="text-base sm:text-xl text-slate-300 max-w-2xl mt-4 font-light leading-relaxed">
            Delivering comprehensive construction, highway engineering, and public infrastructure powered by 25+ years of institutional know-how.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-[#090D16]">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-16">
          {serviceList.map((srv, idx) => {
            const Icon = srv.icon;
            const isReversed = idx % 2 === 1;
            return (
              <div 
                key={srv.id}
                className={`glass-card rounded-3xl p-8 sm:p-12 border border-white/10 hover:border-brand-gold/40 transition-all flex flex-col ${isReversed ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-10 items-center`}
              >
                {/* Image */}
                <div className="w-full lg:w-1/2 aspect-[16/10] rounded-2xl overflow-hidden bg-slate-900 flex-shrink-0 relative group">
                  <img 
                    src={srv.image} 
                    alt={srv.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-navy via-transparent to-transparent" />
                </div>

                {/* Content */}
                <div className="w-full lg:w-1/2 space-y-5">
                  <div className="w-12 h-12 rounded-xl bg-brand-gold/10 border border-brand-gold/30 flex items-center justify-center text-brand-gold">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-black text-white font-heading">
                    {srv.title}
                  </h2>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    {srv.desc}
                  </p>

                  <div className="space-y-2.5 pt-2">
                    {srv.capabilities.map((cap, cIdx) => (
                      <div key={cIdx} className="flex items-center space-x-2.5 text-xs text-slate-200 font-medium">
                        <CheckCircle2 className="w-4 h-4 text-brand-gold flex-shrink-0" />
                        <span>{cap}</span>
                      </div>
                    ))}
                  </div>

                  <div className="pt-4 flex items-center space-x-4">
                    <Link
                      to={srv.slug}
                      className="btn-gold px-6 py-3 rounded-full text-xs uppercase font-extrabold tracking-wider shadow-lg flex items-center space-x-2"
                    >
                      <span>Explore Specialization</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
