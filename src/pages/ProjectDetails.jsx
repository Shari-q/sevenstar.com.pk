import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  MapPin, CheckCircle2, Clock, ShieldCheck, ArrowLeft, 
  ArrowRight, Building2, Calendar, Phone, Share2, Download 
} from 'lucide-react';
import { PROJECTS_DATA } from '../data/projectsData';
import ProjectCard from '../components/ProjectCard';

export default function ProjectDetails({ onOpenInquiry }) {
  const { id } = useParams();
  const project = PROJECTS_DATA.find(p => p.id === id || p.slug === id) || PROJECTS_DATA[0];

  const isOngoing = project.status.toLowerCase().includes('ongoing') || project.status.toLowerCase().includes('on-going');

  // Related projects in same category
  const related = PROJECTS_DATA
    .filter(p => p.category === project.category && p.id !== project.id)
    .slice(0, 3);

  return (
    <div className="min-h-screen bg-brand-navy pt-28">
      {/* Back button & Breadcrumb */}
      <div className="bg-[#060912] border-b border-white/10 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 flex items-center justify-between text-xs text-slate-400">
          <Link to="/projects" className="hover:text-brand-gold flex items-center space-x-1.5 transition-colors">
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to All Projects</span>
          </Link>
          <div className="flex items-center space-x-2">
            <span>Projects</span>
            <span>/</span>
            <span className="text-brand-gold font-medium">{project.category}</span>
          </div>
        </div>
      </div>

      {/* Main Project Hero */}
      <section className="relative py-16 bg-gradient-to-b from-[#060912] to-brand-navy border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Project Header Info */}
            <div className="lg:col-span-7 space-y-5">
              <div className="flex items-center space-x-3">
                <span className="px-3.5 py-1 rounded-full text-xs font-extrabold uppercase tracking-wider bg-brand-gold/10 text-brand-gold border border-brand-gold/30">
                  {project.category}
                </span>
                <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider flex items-center space-x-1 ${
                  isOngoing 
                    ? 'bg-amber-500/20 text-amber-300 border border-amber-500/30' 
                    : 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30'
                }`}>
                  {isOngoing ? <Clock className="w-3.5 h-3.5" /> : <CheckCircle2 className="w-3.5 h-3.5" />}
                  <span>{project.status}</span>
                </span>
              </div>

              <h1 className="text-3xl sm:text-5xl font-black text-white font-heading leading-tight">
                {project.title}
              </h1>

              {project.location && (
                <div className="flex items-center space-x-2 text-sm text-slate-300">
                  <MapPin className="w-4 h-4 text-brand-gold" />
                  <span>{project.location}</span>
                </div>
              )}

              {project.client && (
                <div className="p-4 rounded-xl bg-white/5 border border-white/10 text-xs text-slate-300">
                  <span className="text-slate-400 block font-semibold">Executing Authority / Client:</span>
                  <strong className="text-white text-sm">{project.client}</strong>
                </div>
              )}

              <div className="flex flex-wrap gap-4 pt-2">
                <button
                  onClick={onOpenInquiry}
                  className="btn-gold px-8 py-3.5 rounded-full text-xs uppercase font-extrabold tracking-widest shadow-xl flex items-center space-x-2"
                >
                  <span>Schedule Site Visit / Inquire</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <a
                  href="tel:+925827437268"
                  className="px-6 py-3.5 rounded-full text-xs font-bold uppercase tracking-wider text-white bg-white/10 hover:bg-white/20 border border-white/20 transition-colors flex items-center space-x-2"
                >
                  <Phone className="w-4 h-4 text-brand-gold" />
                  <span>Call Project Desk</span>
                </a>
              </div>
            </div>

            {/* Hero Image Showcase */}
            <div className="lg:col-span-5">
              <div className="rounded-3xl overflow-hidden border border-brand-gold/40 shadow-2xl bg-slate-900 aspect-[16/11]">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = "https://sevenstar.com.pk/wp-content/uploads/2025/12/1-44_36_11zon-scaled.webp";
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Details Body */}
      <section className="py-20 bg-[#090D16]">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Description & Narrative */}
            <div className="lg:col-span-8 space-y-6">
              <div className="text-xs font-extrabold uppercase tracking-widest text-brand-gold">
                SCOPE & DETAILED SPECIFICATIONS
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-white font-heading">
                Project Overview & Execution Details
              </h2>
              <div className="space-y-4 text-sm text-slate-300 leading-relaxed">
                <p>{project.description}</p>
                <p>
                  Delivered under Seven Star Group's strict QA/QC standards. From geological survey and foundation engineering to structural frame assembly and environmental impact assessments, all works are certified by the Pakistan Engineering Council and resident supervisory consultants.
                </p>
              </div>

              {/* Gallery if available */}
              {project.gallery && project.gallery.length > 1 && (
                <div className="pt-8 border-t border-white/10">
                  <h3 className="text-lg font-bold text-white mb-4">Project Visual Gallery</h3>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                    {project.gallery.map((imgUrl, gIdx) => (
                      <div key={gIdx} className="rounded-xl overflow-hidden aspect-[4/3] bg-slate-900 border border-white/10">
                        <img 
                          src={imgUrl} 
                          alt={`${project.title} - ${gIdx + 1}`}
                          className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Sidebar Specifications */}
            <div className="lg:col-span-4 space-y-6">
              <div className="glass-card rounded-2xl p-6 border border-brand-gold/30 space-y-4">
                <h3 className="text-base font-extrabold text-white flex items-center space-x-2">
                  <ShieldCheck className="w-5 h-5 text-brand-gold" />
                  <span>Technical Data Sheet</span>
                </h3>

                <div className="space-y-3 text-xs border-t border-white/10 pt-4">
                  <div className="flex justify-between py-1.5 border-b border-white/5">
                    <span className="text-slate-400">Category:</span>
                    <strong className="text-white">{project.category}</strong>
                  </div>
                  <div className="flex justify-between py-1.5 border-b border-white/5">
                    <span className="text-slate-400">Current Status:</span>
                    <strong className={isOngoing ? 'text-amber-400' : 'text-emerald-400'}>{project.status}</strong>
                  </div>
                  {project.specs && Object.entries(project.specs).map(([key, val]) => (
                    <div key={key} className="flex justify-between py-1.5 border-b border-white/5">
                      <span className="text-slate-400 capitalize">{key.replace(/([A-Z])/g, ' $1')}:</span>
                      <strong className="text-slate-200 text-right max-w-[180px]">{val}</strong>
                    </div>
                  ))}
                  <div className="flex justify-between py-1.5">
                    <span className="text-slate-400">Contractor Licensure:</span>
                    <strong className="text-brand-gold">PEC Category C-A</strong>
                  </div>
                </div>

                <button
                  onClick={onOpenInquiry}
                  className="btn-gold w-full py-3 rounded-full text-xs uppercase font-extrabold tracking-wider shadow-lg"
                >
                  Inquire About This Project
                </button>
              </div>
            </div>
          </div>

          {/* Related Projects */}
          {related.length > 0 && (
            <div className="border-t border-white/10 pt-16">
              <div className="flex justify-between items-end mb-8">
                <div>
                  <div className="text-xs font-extrabold uppercase tracking-widest text-brand-gold mb-1">Related Undertakings</div>
                  <h3 className="text-2xl font-black text-white font-heading">More in {project.category}</h3>
                </div>
                <Link to="/projects" className="text-xs font-bold text-brand-gold hover:underline">
                  View All Projects →
                </Link>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {related.map((rel) => (
                  <ProjectCard key={rel.id} project={rel} />
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
