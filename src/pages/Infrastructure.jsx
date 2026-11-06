import React from 'react';
import { Link } from 'react-router-dom';
import { HardHat, ShieldCheck, CheckCircle2, ArrowRight, Truck, Flame, MapPin } from 'lucide-react';
import { PROJECTS_DATA } from '../data/projectsData';
import ProjectCard from '../components/ProjectCard';

export default function Infrastructure({ onOpenInquiry }) {
  const infraProjects = PROJECTS_DATA.filter(
    p => p.category === 'Roads & Highways' || p.category === 'Bridges & Civil Infrastructure'
  );

  return (
    <div className="min-h-screen bg-brand-navy pt-28">
      {/* Banner */}
      <section className="relative py-20 bg-gradient-to-b from-[#060912] to-brand-navy border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-brand-gold/10 border border-brand-gold/30 text-brand-gold text-xs font-bold uppercase tracking-widest mb-4">
            <HardHat className="w-4 h-4" />
            <span>Highways, Dual Carriageways & Major RCC Bridges</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-black text-white font-heading leading-tight max-w-3xl">
            Infrastructure & Civil Works
          </h1>
          <p className="text-base sm:text-xl text-slate-300 max-w-2xl mt-4 font-light leading-relaxed">
            Connecting regional communities and fueling economic mobility through over 200+ kilometers of heavy highways, mountain transit passes, and major river bridges.
          </p>
        </div>
      </section>

      {/* Technical Highlights */}
      <section className="py-20 bg-[#090D16]">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            <div className="glass-card rounded-2xl p-6 border border-white/10 space-y-3">
              <div className="w-10 h-10 rounded-lg bg-brand-gold/10 border border-brand-gold/30 flex items-center justify-center text-brand-gold font-bold">
                01
              </div>
              <h3 className="text-base font-bold text-white">Dual Carriageways</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Rehabilitation and construction of high-capacity four-lane corridors including the 29 KM Gujrat-Lakhanwal highway and 46 KM Mandi Bahauddin-Sarai Alamgir dualization.
              </p>
            </div>

            <div className="glass-card rounded-2xl p-6 border border-white/10 space-y-3">
              <div className="w-10 h-10 rounded-lg bg-brand-gold/10 border border-brand-gold/30 flex items-center justify-center text-brand-gold font-bold">
                02
              </div>
              <h3 className="text-base font-bold text-white">Prestressed Bridges</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Deep foundation RCC bridges up to 180-meter continuous spans (Khokhran Raypur Bridge) and 120-meter Pir Dingianwala Bridge designed to military Class-AA loading.
              </p>
            </div>

            <div className="glass-card rounded-2xl p-6 border border-white/10 space-y-3">
              <div className="w-10 h-10 rounded-lg bg-brand-gold/10 border border-brand-gold/30 flex items-center justify-center text-brand-gold font-bold">
                03
              </div>
              <h3 className="text-base font-bold text-white">In-House Asphalt Plant</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Fully owned 160 T/H automated asphalt batching plant located in Jatlan, Mirpur AJK, ensuring exact binder grading, temperature compliance, and rapid hot-mix dispatch.
              </p>
            </div>

            <div className="glass-card rounded-2xl p-6 border border-white/10 space-y-3">
              <div className="w-10 h-10 rounded-lg bg-brand-gold/10 border border-brand-gold/30 flex items-center justify-center text-brand-gold font-bold">
                04
              </div>
              <h3 className="text-base font-bold text-white">Water & Flood Works</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Municipal water reticulation covering millions of gallons per day (Bhimber Phase-IV) and reinforced concrete riverbank protections along River Poonch.
              </p>
            </div>
          </div>

          {/* Infrastructure Projects Portfolio */}
          <div className="border-t border-white/10 pt-16">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
              <div>
                <div className="text-xs font-extrabold uppercase tracking-widest text-brand-gold mb-2">Verified Projects</div>
                <h2 className="text-2xl sm:text-4xl font-black text-white font-heading">
                  Highways, Dual Carriageways & Bridges
                </h2>
              </div>
              <Link to="/projects/completed" className="text-xs font-bold text-brand-gold hover:underline flex items-center space-x-1">
                <span>View All Completed Highways</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {infraProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Asphalt Plant Feature Banner */}
      <section className="py-16 bg-brand-navy border-t border-brand-gold/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="glass-card rounded-3xl p-8 sm:p-12 border border-brand-gold/40 flex flex-col lg:flex-row gap-8 items-center justify-between">
            <div className="space-y-4 max-w-2xl">
              <div className="inline-flex items-center space-x-2 text-xs font-extrabold uppercase tracking-widest text-brand-gold">
                <Flame className="w-4 h-4 text-brand-gold" />
                <span>Industrial Asphalt Production Facility</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-black text-white">
                7-Star Asphalt Plant — Jatlan, Mirpur AJK
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Operating a high-capacity 160 Tons/Hour computerized asphalt plant paired with our own fleet of pavers, compactors, and insulated transit carriers. Available for bulk supply to government contractors and mega infrastructure joint ventures.
              </p>
            </div>
            <Link
              to="/divisions/machinery-equipment"
              className="btn-gold px-8 py-3.5 rounded-full text-xs uppercase font-extrabold tracking-wider whitespace-nowrap shadow-xl"
            >
              Explore Machinery & Asphalt Plant
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
