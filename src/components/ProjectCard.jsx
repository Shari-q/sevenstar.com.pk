import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, ArrowRight, ShieldCheck, CheckCircle2, Clock } from 'lucide-react';

export default function ProjectCard({ project }) {
  const isOngoing = project.status.toLowerCase().includes('ongoing') || project.status.toLowerCase().includes('on-going');

  return (
    <div className="glass-card rounded-2xl overflow-hidden group flex flex-col h-full bg-white border border-slate-200 hover:border-brand-gold shadow-sm hover:shadow-xl transition-all duration-300">
      {/* Image Container */}
      <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
        <img 
          src={project.image} 
          alt={project.title}
          loading="lazy"
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = "https://sevenstar.com.pk/wp-content/uploads/2025/12/1-44_36_11zon-scaled.webp";
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-black/20" />

        {/* Top Badges */}
        <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
          <span className="px-3 py-1 rounded-full text-[11px] font-extrabold uppercase tracking-wider bg-white/95 text-slate-900 border border-slate-200 shadow-sm backdrop-blur-md">
            {project.category}
          </span>
          <span className={`px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider backdrop-blur-md flex items-center space-x-1 shadow-sm ${
            isOngoing 
              ? 'bg-amber-500 text-white' 
              : 'bg-emerald-600 text-white'
          }`}>
            {isOngoing ? <Clock className="w-3 h-3" /> : <CheckCircle2 className="w-3 h-3" />}
            <span>{project.status}</span>
          </span>
        </div>

        {/* Location Tag */}
        {project.location && (
          <div className="absolute bottom-3 left-4 flex items-center space-x-1.5 text-xs text-white bg-slate-900/80 px-2.5 py-1 rounded-md backdrop-blur-sm">
            <MapPin className="w-3.5 h-3.5 text-amber-300 flex-shrink-0" />
            <span className="truncate max-w-[240px] font-medium">{project.location}</span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
        <div className="space-y-2">
          {project.type && (
            <div className="text-[11px] uppercase tracking-wider font-extrabold text-brand-gold">
              {project.type}
            </div>
          )}
          <h3 className="text-lg font-bold text-slate-900 group-hover:text-brand-gold transition-colors line-clamp-2 leading-snug">
            {project.title}
          </h3>
          <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
            {project.description}
          </p>
        </div>

        {/* Client or Specifics */}
        {project.client && (
          <div className="pt-2 border-t border-slate-100 text-[11px] text-slate-500 flex items-center justify-between">
            <span className="truncate max-w-[180px]">Client: <strong className="text-slate-700">{project.client}</strong></span>
            {project.specs?.length && <span className="text-brand-gold font-bold">{project.specs.length}</span>}
          </div>
        )}

        {/* CTA Link */}
        <Link
          to={`/projects/${project.id}`}
          className="inline-flex items-center justify-between w-full pt-2 text-xs font-bold uppercase tracking-wider text-slate-800 group-hover:text-brand-gold transition-colors"
        >
          <span>View Project Details</span>
          <ArrowRight className="w-4 h-4 text-brand-gold transform group-hover:translate-x-1.5 transition-transform" />
        </Link>
      </div>
    </div>
  );
}
