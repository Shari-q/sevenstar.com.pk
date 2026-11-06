import React from 'react';
import { Link } from 'react-router-dom';
import { Landmark, ShieldCheck, CheckCircle2, Award, ArrowRight, FileCheck, Building2 } from 'lucide-react';
import { PROJECTS_DATA } from '../data/projectsData';
import ProjectCard from '../components/ProjectCard';

export default function GovernmentProjects({ onOpenInquiry }) {
  const govtProjects = PROJECTS_DATA.filter(
    p => p.client && (p.client.includes('PP&H') || p.client.includes('C&W') || p.client.includes('PWD') || p.client.includes('Health') || p.client.includes('HEC') || p.client.includes('Military') || p.client.includes('Works'))
  );

  return (
    <div className="min-h-screen bg-brand-navy pt-28">
      {/* Banner */}
      <section className="relative py-20 bg-gradient-to-b from-[#060912] to-brand-navy border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-brand-gold/10 border border-brand-gold/30 text-brand-gold text-xs font-bold uppercase tracking-widest mb-4">
            <ShieldCheck className="w-4 h-4" />
            <span>Pakistan Engineering Council (PEC) Category C-A Licensure</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-black text-white font-heading leading-tight max-w-3xl">
            Government Contracting & Public Infrastructure
          </h1>
          <p className="text-base sm:text-xl text-slate-300 max-w-2xl mt-4 font-light leading-relaxed">
            Over 400 delivered public sector projects. The trusted Tier-1 contracting partner for federal, provincial, and multilateral development programs across Pakistan.
          </p>
        </div>
      </section>

      {/* PEC Credentials Card */}
      <section className="py-20 bg-[#090D16]">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="glass-card rounded-3xl p-8 sm:p-12 border border-brand-gold/40 mb-16 shadow-2xl">
            <div className="flex flex-col lg:flex-row gap-8 items-start lg:items-center justify-between">
              <div className="space-y-4 max-w-3xl">
                <div className="text-xs uppercase font-extrabold tracking-widest text-brand-gold">
                  Official Contracting Status
                </div>
                <h2 className="text-2xl sm:text-4xl font-black text-white font-heading">
                  Category C-A (No Financial Limit) Registration
                </h2>
                <p className="text-sm text-slate-300 leading-relaxed">
                  7-Star & Co. (Private) Limited is licensed under Category C-A by the Pakistan Engineering Council—the highest accreditation available to construction firms in Pakistan. This registration qualifies the group to bid, execute, and deliver unrestricted mega infrastructure without monetary capping.
                </p>
              </div>

              <div className="bg-brand-navy/90 border border-brand-gold/40 rounded-2xl p-6 text-center flex-shrink-0 w-full sm:w-64">
                <div className="text-4xl font-black text-brand-gold font-heading">C-A</div>
                <div className="text-xs uppercase font-bold text-white mt-1">No Limit Contractor</div>
                <div className="text-[10px] text-slate-400 mt-2 border-t border-white/10 pt-2">
                  Pakistan Engineering Council Registration
                </div>
              </div>
            </div>

            {/* Enlisted Departments Grid */}
            <div className="mt-10 pt-8 border-t border-white/10 grid grid-cols-2 md:grid-cols-4 gap-4 text-xs">
              <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                <div className="text-brand-gold font-bold">Communication & Works (C&W)</div>
                <div className="text-slate-400 text-[11px] mt-1">Highways, dual carriageways & transit corridors</div>
              </div>
              <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                <div className="text-brand-gold font-bold">Physical Planning & Housing (PP&H)</div>
                <div className="text-slate-400 text-[11px] mt-1">Hospitals, judicial complexes & employee housing</div>
              </div>
              <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                <div className="text-brand-gold font-bold">LG&RD & Public Health</div>
                <div className="text-slate-400 text-[11px] mt-1">Greater municipal water supply & treatment</div>
              </div>
              <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                <div className="text-brand-gold font-bold">Islamic Development Bank (IDB)</div>
                <div className="text-slate-400 text-[11px] mt-1">Assisted basic education packages across AJK</div>
              </div>
            </div>
          </div>

          {/* Government Projects Portfolio */}
          <div>
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
              <div>
                <div className="text-xs font-extrabold uppercase tracking-widest text-brand-gold mb-2">Verified Contract History</div>
                <h2 className="text-2xl sm:text-4xl font-black text-white font-heading">
                  Major Public Sector Contracts
                </h2>
              </div>
              <div className="text-xs text-slate-400">
                Enlisted with Federal & Provincial Ministries
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {govtProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Tender & JV Inquiries */}
      <section className="py-16 bg-brand-navy border-t border-brand-gold/20 text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-8 space-y-4">
          <h2 className="text-2xl sm:text-3xl font-black text-white">Government Tender & Joint-Venture Partnerships</h2>
          <p className="text-xs sm:text-sm text-slate-300">
            For department procurement officers, consulting engineers, or international consortiums seeking a licensed Category C-A partner with proven plant equipment and financial solvency.
          </p>
          <button
            onClick={onOpenInquiry}
            className="btn-gold px-8 py-3.5 rounded-full text-xs uppercase font-extrabold tracking-wider shadow-xl inline-flex items-center space-x-2"
          >
            <span>Contact Tender Bidding Directorate</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>
    </div>
  );
}
