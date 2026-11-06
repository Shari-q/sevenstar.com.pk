import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Building2, Search, Filter, ShieldCheck, CheckCircle2, Clock } from 'lucide-react';
import { PROJECTS_DATA } from '../data/projectsData';
import ProjectCard from '../components/ProjectCard';

export default function Projects() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [statusFilter, setStatusFilter] = useState('all');

  const categories = [
    'all',
    'Real Estate & High-Rise',
    'Roads & Highways',
    'Bridges & Civil Infrastructure',
    'Public Facilities & Hospitals',
    'Education & Institutions',
    'Machinery Fleet',
    'Energy & Petroleum'
  ];

  const filtered = PROJECTS_DATA.filter(p => {
    const matchesSearch = p.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          p.location?.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          p.client?.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          p.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCat = selectedCategory === 'all' || p.category === selectedCategory;
    const matchesStatus = statusFilter === 'all' || 
                          (statusFilter === 'completed' && p.status.toLowerCase().includes('completed')) ||
                          (statusFilter === 'ongoing' && (p.status.toLowerCase().includes('ongoing') || p.status.toLowerCase().includes('on-going')));
    return matchesSearch && matchesCat && matchesStatus;
  });

  return (
    <div className="min-h-screen bg-brand-navy pt-28">
      {/* Banner */}
      <section className="relative py-20 bg-gradient-to-b from-[#060912] to-brand-navy border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-brand-gold/10 border border-brand-gold/30 text-brand-gold text-xs font-bold uppercase tracking-widest mb-4">
            <Building2 className="w-4 h-4" />
            <span>400+ Verified Landmark Undertakings</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-black text-white font-heading leading-tight max-w-3xl">
            Seven Star Projects Portfolio
          </h1>
          <p className="text-base sm:text-xl text-slate-300 max-w-2xl mt-4 font-light leading-relaxed">
            From towering residential landmarks in DHA II and Bahria Town to 180-meter river bridges and hundreds of kilometers of national highways.
          </p>
        </div>
      </section>

      {/* Filter and Search Bar */}
      <section className="py-8 bg-[#090D16] border-b border-white/10 sticky top-[72px] z-30 backdrop-blur-md bg-opacity-95">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Search Input */}
            <div className="relative w-full md:w-96">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search by project name, highway, city, or client..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full bg-white/5 border border-white/10 rounded-full pl-10 pr-4 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-brand-gold"
              />
            </div>

            {/* Status Filter */}
            <div className="flex items-center space-x-2 bg-brand-card p-1 rounded-full border border-white/10 text-xs w-full md:w-auto justify-center">
              <button
                onClick={() => setStatusFilter('all')}
                className={`px-4 py-1.5 rounded-full font-bold transition-all ${
                  statusFilter === 'all' ? 'bg-brand-gold text-brand-navy shadow-sm' : 'text-slate-400 hover:text-white'
                }`}
              >
                All ({PROJECTS_DATA.length})
              </button>
              <button
                onClick={() => setStatusFilter('completed')}
                className={`px-4 py-1.5 rounded-full font-bold transition-all ${
                  statusFilter === 'completed' ? 'bg-emerald-500 text-white shadow-sm' : 'text-slate-400 hover:text-white'
                }`}
              >
                Completed
              </button>
              <button
                onClick={() => setStatusFilter('ongoing')}
                className={`px-4 py-1.5 rounded-full font-bold transition-all ${
                  statusFilter === 'ongoing' ? 'bg-amber-500 text-brand-navy shadow-sm' : 'text-slate-400 hover:text-white'
                }`}
              >
                Ongoing
              </button>
            </div>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap gap-2 pt-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all ${
                  selectedCategory === cat
                    ? 'bg-brand-gold text-brand-navy shadow-md font-extrabold'
                    : 'bg-white/5 text-slate-400 hover:text-white border border-white/10'
                }`}
              >
                {cat === 'all' ? 'All Categories' : cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16 bg-[#090D16]">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="mb-6 text-xs text-slate-400">
            Showing <strong className="text-white">{filtered.length}</strong> projects matching criteria
          </div>

          {filtered.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filtered.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          ) : (
            <div className="text-center py-24 text-slate-400 space-y-3">
              <Building2 className="w-12 h-12 mx-auto text-slate-600" />
              <div className="text-base font-bold text-white">No projects found</div>
              <p className="text-xs text-slate-400">Try modifying your search keywords or resetting filters.</p>
              <button
                onClick={() => { setSearchTerm(''); setSelectedCategory('all'); setStatusFilter('all'); }}
                className="btn-gold px-5 py-2 rounded-full text-xs font-bold uppercase tracking-wider"
              >
                Reset All Filters
              </button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
