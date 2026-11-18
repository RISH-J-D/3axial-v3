import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, X, ArrowUpRight } from 'lucide-react';
import type { Project } from '../types';
import { PROJECTS_DATA } from '../data/siteData';

export const ProjectsGallery: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'completed' | 'ongoing' | 'commercial' | 'industrial' | 'educational'>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeLightbox, setActiveLightbox] = useState<Project | null>(null);

  const filteredProjects = PROJECTS_DATA.filter((proj) => {
    const matchesFilter =
      filter === 'all' ||
      proj.category === filter ||
      proj.sector === filter;

    const matchesSearch =
      proj.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (proj.location && proj.location.toLowerCase().includes(searchQuery.toLowerCase())) ||
      (proj.tonnage && proj.tonnage.toLowerCase().includes(searchQuery.toLowerCase()));

    return matchesFilter && matchesSearch;
  });

  return (
    <div className="shell">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <p className="eyebrow mb-2">
          Verified Portfolio
        </p>
        <h2 className="display-md">
          Executed Structural Steel Projects<span className="dot">.</span>
        </h2>
        <p className="lede text-sm mt-3">
          Over 800+ completed projects across commercial towers, industrial refineries, institutional academies, and stadium roofs worldwide.
        </p>
      </div>

      {/* Filter Controls & Search */}
      <div className="bg-[#fdfdfe] border border-[#929da7]/35 rounded-3xl p-4 sm:p-5 shadow-xs mb-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          
          <div className="flex flex-wrap items-center gap-2">
            {[
              { id: 'all', label: 'All Projects' },
              { id: 'completed', label: 'Completed' },
              { id: 'ongoing', label: 'Ongoing' },
              { id: 'commercial', label: 'Commercial' },
              { id: 'industrial', label: 'Industrial' },
              { id: 'educational', label: 'Educational' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setFilter(tab.id as any)}
                className={`px-4 py-2 rounded-full text-xs font-mono font-medium transition-all ${
                  filter === tab.id
                    ? 'bg-[#0099ff] text-white shadow-xs'
                    : 'bg-[#fdfdfe] text-slate-700 hover:text-slate-950 border border-[#929da7]/30'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Search Bar */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search project, state, tonnage..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 bg-[#fdfdfe] border border-[#929da7]/40 rounded-full text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#0099ff] transition-all"
            />
          </div>
        </div>
      </div>

      {/* Projects Grid */}
      <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        <AnimatePresence>
          {filteredProjects.map((proj, idx) => (
            <motion.div
              key={proj.id}
              layout
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.3 }}
              className={`group rounded-3xl bg-[#fdfdfe] border border-[#929da7]/35 shadow-xs overflow-hidden flex flex-col justify-between cursor-pointer hover:border-[#0099ff] transition-all border-t-4 ${
                idx % 2 === 0 ? 'border-t-[#0099ff]' : 'border-t-[#e8250e]'
              }`}
              onClick={() => setActiveLightbox(proj)}
            >
              <div>
                <div className="relative aspect-[16/10] overflow-hidden bg-slate-950">
                  <img
                    src={proj.image}
                    alt={proj.title}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="text-[10px] font-mono font-medium uppercase tracking-wider text-white bg-slate-900/85 px-3 py-1 rounded-full border border-white/20">
                      {proj.category === 'completed' ? 'Completed' : 'Ongoing'}
                    </span>
                  </div>
                  <div className="absolute top-3 right-3">
                    <span className="font-mono text-[10px] tracking-[0.2em] text-white bg-slate-900/85 px-2.5 py-1 rounded-full border border-white/20">
                      {String(idx + 1).padStart(3, '0')}
                    </span>
                  </div>
                </div>

                <div className="p-7">
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="px-2.5 py-0.5 rounded-full text-[11px] font-mono font-medium bg-[#0099ff]/10 text-[#0099ff] border border-[#0099ff]/30">
                      {proj.sector || 'Structural Steel'}
                    </span>
                    <span className="label text-slate-500">
                      {proj.location || 'USA / Global'}
                    </span>
                  </div>

                  <h3 className="font-display font-medium text-lg sm:text-xl text-slate-900 mb-3 group-hover:text-[#0099ff] transition-colors leading-snug">
                    {proj.title}
                  </h3>
                  
                  <div className="flex items-center justify-between text-xs pt-4 border-t border-[#929da7]/20">
                    <span className="text-white font-mono font-medium bg-[#e8250e] px-3 py-0.5 rounded-full shadow-xs text-[11px]">
                      {proj.tonnage || 'Standard Build'}
                    </span>
                    <span className="link-line text-xs font-mono font-medium text-[#0099ff] group-hover:text-[#e8250e]">
                      <span>Details</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {filteredProjects.length === 0 && (
        <div className="text-center py-16 text-slate-500 font-mono text-xs">
          No projects matching your search criteria.
        </div>
      )}

      {/* Lightbox Modal */}
      <AnimatePresence>
        {activeLightbox && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-white rounded-3xl max-w-2xl w-full p-6 sm:p-8 border border-slate-200 shadow-2xl relative"
            >
              <button
                onClick={() => setActiveLightbox(null)}
                className="absolute top-5 right-5 p-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 transition-colors"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="aspect-[16/9] w-full rounded-2xl overflow-hidden mb-6 bg-slate-900">
                <img
                  src={activeLightbox.image}
                  alt={activeLightbox.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="flex items-center gap-2 mb-2">
                <span className="label text-[#0099ff]">{activeLightbox.sector}</span>
                <span className="text-slate-400">·</span>
                <span className="label text-slate-500">{activeLightbox.location}</span>
              </div>

              <h3 className="font-display font-medium text-2xl text-slate-900 mb-3">{activeLightbox.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">
                {activeLightbox.description || 'Full Tekla 3D structural modeling, anchor bolt plans, shop member fabrication sheets, and connection calculations completed to zero-clash tolerance.'}
              </p>

              <div className="grid grid-cols-2 gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-200 mb-6">
                <div>
                  <span className="label text-slate-400 block">Structural Tonnage</span>
                  <span className="font-mono font-semibold text-[#e8250e] text-sm">{activeLightbox.tonnage}</span>
                </div>
                <div>
                  <span className="label text-slate-400 block">Compliance Standard</span>
                  <span className="font-mono font-semibold text-[#0099ff] text-sm">AISC 360-16 / CISC</span>
                </div>
              </div>

              <button
                onClick={() => setActiveLightbox(null)}
                className="btn btn-primary w-full justify-center"
              >
                <span>Close Window</span>
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};
