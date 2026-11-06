import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Clock, ShieldCheck, Search, Filter, ArrowRight, Building2, MapPin } from 'lucide-react';
import { PROJECTS_DATA } from '../data/projectsData';
import ProjectCard from '../components/ProjectCard';

export default function OngoingProjects() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const ongoingList = PROJECTS_DATA.filter(p => p.status.toLowerCase().includes('ongoing') || p.status.toLowerCase().includes('on-going'));

  const filtered = ongoingList.filter(p => {
    const matchesSearch = p.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          p.location?.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          p.client?.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCat = selectedCategory === 'all' || p.category === selectedCategory;
    return matchesSearch && matchesCat;
  });

  const categories = ['all', 'Real Estate & High-Rise', 'Roads & Highways', 'Public Facilities & Hospitals'];

  return (
    <div className="min-h-screen bg-brand-navy pt-28">
      {/* Banner */}
      <section className="relative py-20 bg-gradient-to-b from-[#060912] to-brand-navy border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold uppercase tracking-widest mb-4">
            <Clock className="w-4 h-4" />
            <span>Active Construction & Dualization Sites</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-black text-white font-heading leading-tight max-w-3xl">
            Ongoing Projects Portfolio
          </h1>
          <p className="text-base sm:text-xl text-slate-300 max-w-2xl mt-4 font-light leading-relaxed">
            Tracking active high-rise towers in DHA II & Bahria Town, 500-bed hospital expansions, and key dual carriageway highway arteries currently under mobilization.
          </p>
        </div>
      </section>

      {/* Filter & Search Bar */}
      <section className="py-8 bg-[#090D16] border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Search Box */}
          <div className="relative w-full md:w-80">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search active projects, highways, or cities..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-white/5 border border-white/10 rounded-full pl-10 pr-4 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-brand-gold"
            />
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap gap-2 w-full md:w-auto">
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
                {cat === 'all' ? 'All Active Projects' : cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16 bg-[#090D16]">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="mb-6 text-xs text-slate-400">
            Showing <strong className="text-white">{filtered.length}</strong> active mobilization contracts
          </div>

          {filtered.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filtered.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          ) : (
            <div className="text-center py-20 text-slate-400">
              No active projects found matching your search criteria.
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
