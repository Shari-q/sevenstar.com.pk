import React from 'react';
import { Link } from 'react-router-dom';
import { Building2, ShieldCheck, CheckCircle2, ArrowRight, ArrowUpRight, Award, Ruler } from 'lucide-react';
import { PROJECTS_DATA } from '../data/projectsData';
import ProjectCard from '../components/ProjectCard';

export default function Construction({ onOpenInquiry }) {
  const buildingProjects = PROJECTS_DATA.filter(
    p => p.category === 'Public Facilities & Hospitals' || p.category === 'Education & Institutions' || p.category === 'Real Estate & High-Rise'
  );

  return (
    <div className="min-h-screen bg-brand-navy pt-28">
      {/* Banner */}
      <section className="relative py-20 bg-gradient-to-b from-[#060912] to-brand-navy border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-brand-gold/10 border border-brand-gold/30 text-brand-gold text-xs font-bold uppercase tracking-widest mb-4">
            <Building2 className="w-4 h-4" />
            <span>Turnkey Institutional, Hospital & High-Rise Construction</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-black text-white font-heading leading-tight max-w-3xl">
            Construction Division
          </h1>
          <p className="text-base sm:text-xl text-slate-300 max-w-2xl mt-4 font-light leading-relaxed">
            Delivering structural resilience, advanced MEP systems, and premium architectural finishes across hospitals, universities, and commercial landmarks.
          </p>
        </div>
      </section>

      {/* Capabilities Overview */}
      <section className="py-20 bg-[#090D16]">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            <div className="glass-card rounded-2xl p-8 border border-white/10 space-y-4">
              <div className="text-brand-gold font-black text-3xl font-heading">01</div>
              <h3 className="text-xl font-bold text-white">Healthcare Facilities</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Specialized in tertiary hospital construction including the 500-Bed DHQ Hospital Mirpur and 150-Bed Pallandri DHQ. Fully compliant with international healthcare engineering codes, medical gas piping, modular operation theaters, and ICU air handling.
              </p>
            </div>

            <div className="glass-card rounded-2xl p-8 border border-white/10 space-y-4">
              <div className="text-brand-gold font-black text-3xl font-heading">02</div>
              <h3 className="text-xl font-bold text-white">Educational & Public Campuses</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Extensive portfolio of higher education buildings, including Army Public School (40,000+ SFT blocks), Government College of Technology Bhimber, MUST University Central Library, and University of Kotli external infrastructure.
              </p>
            </div>

            <div className="glass-card rounded-2xl p-8 border border-white/10 space-y-4">
              <div className="text-brand-gold font-black text-3xl font-heading">03</div>
              <h3 className="text-xl font-bold text-white">Luxury High-Rise Structures</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Developing multi-story commercial and residential towers in DHA Phase-II Islamabad and Bahria Town with seismic-rated structural designs, high-speed vertical transportation, and multi-tier basement parking.
              </p>
            </div>
          </div>

          {/* Projects Grid */}
          <div className="border-t border-white/10 pt-16">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
              <div>
                <div className="text-xs font-extrabold uppercase tracking-widest text-brand-gold mb-2">Portfolio Showcase</div>
                <h2 className="text-2xl sm:text-4xl font-black text-white font-heading">
                  Delivered Building & Institutional Works
                </h2>
              </div>
              <Link to="/projects" className="text-xs font-bold text-brand-gold hover:underline flex items-center space-x-1">
                <span>Browse All Projects</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {buildingProjects.slice(0, 6).map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-brand-navy border-t border-brand-gold/20 text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-8 space-y-5">
          <h2 className="text-2xl sm:text-3xl font-black text-white">Need Turnkey Construction for Your Project?</h2>
          <p className="text-sm text-slate-300">
            From preliminary soil testing and architectural modeling to structural frame erection and final commissioning.
          </p>
          <button
            onClick={onOpenInquiry}
            className="btn-gold px-8 py-3.5 rounded-full text-xs uppercase font-extrabold tracking-wider shadow-xl inline-flex items-center space-x-2"
          >
            <span>Request Construction Consultation</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>
    </div>
  );
}
