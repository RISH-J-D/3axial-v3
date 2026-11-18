import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { AXIAL_PROJECTS } from '../data/siteData';
import type { Project } from '../data/siteData';

interface ProjectsPageProps {
  onNavigateHome?: () => void;
  onNavigateTab?: (tabId: string) => void;
  onOpenEnquire?: () => void;
}

export const ProjectsPage: React.FC<ProjectsPageProps> = ({
  onNavigateTab,
  onOpenEnquire
}) => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeFilter, setActiveFilter] = useState<string>('all');

  const filters = [
    { id: 'all', label: 'All Projects' },
    { id: 'industrial', label: 'Industrial Projects' },
    { id: 'commercial', label: 'Commercial Projects' },
    { id: 'educational', label: 'Educational Projects' },
    { id: 'infrastructure', label: 'Infrastructure & Healthcare' }
  ];

  const recentCompleted = [
    { name: 'St. Tammany Fire StationTech', sector: 'Infrastructure' },
    { name: 'The Campbell Bldg. B', sector: 'Commercial' },
    { name: 'Yukon 10th Retail Store', sector: 'Commercial' },
    { name: 'Camden Park', sector: 'Commercial' },
    { name: 'First Baptist Church Newcastle', sector: 'Institutional' },
    { name: 'One Core Health Hospital', sector: 'Healthcare' },
    { name: 'River Parishes Community College', sector: 'Educational' },
    { name: 'Bronx Animal Care', sector: 'Institutional' }
  ];

  const filteredProjects = activeFilter === 'all'
    ? AXIAL_PROJECTS
    : AXIAL_PROJECTS.filter(p => p.sector === activeFilter);

  return (
    <div className="w-full bg-white text-[#0f172a] flex flex-col">
      {/* ───────────────────────── 1. DGS HERO PHOTOGRAPHY BANNER (Projects) ───────────────────────── */}
      <section className="relative w-full h-[320px] sm:h-[420px] md:h-[480px] flex items-center justify-center bg-[#0a0f1d] overflow-hidden">
        <img
          src="/steel-construction-bg.jpg"
          alt="Structural Steel Projects Banner"
          className="absolute inset-0 w-full h-full object-cover object-center brightness-90"
        />
        <div className="absolute inset-0 bg-black/45 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30" />

        <div className="relative z-10 text-center px-4">
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-white text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight drop-shadow-lg"
          >
            Projects
          </motion.h1>
          <p className="text-white/90 text-sm sm:text-base font-medium tracking-wide uppercase mt-3 drop-shadow">
            Portfolio of High-Complexity Structural & Industrial Steel Detailing
          </p>
        </div>
      </section>

      {/* ───────────────────────── 2. BREADCRUMBS & SECTION TITLE SUB-BAR ───────────────────────── */}
      <div className="w-full bg-[#f8fafc] border-b border-[#e2e8f0] py-6 px-4 sm:px-8">
        <div className="max-w-[1378px] mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#0099ff] tracking-tight">
            Projects
          </h2>
          <div className="flex items-center gap-2 text-xs text-slate-500 mt-2 font-medium">
            <button
              onClick={() => onNavigateTab && onNavigateTab('home')}
              className="hover:text-[#0099ff] transition-colors"
            >
              Home
            </button>
            <span>/</span>
            <span>About Us</span>
            <span>/</span>
            <span className="text-slate-800 font-semibold">Projects</span>
          </div>
        </div>
      </div>

      {/* ───────────────────────── 3. INTRO PARAGRAPH (Matching screenshot media_1795009724227_6b87e8a5.jpg) ───────────────────────── */}
      <section className="w-full py-12 bg-white border-b border-[#e2e8f0]">
        <div className="max-w-[1378px] mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-slate-700 text-sm sm:text-base leading-relaxed max-w-4xl">
            As a dedicated engineering consultancy, we have deep knowledge and experience in working on all types of projects. Our projects range from small to large, simple to complex. All our projects are well defined and the results are exactly what the clients need and to what extent. Our projects always give confidence to clients in the same way we get making the structures for them. We are pleased to share a glimpse of the projects that we have delivered.
          </p>

          {/* ───────────────────────── RECENTLY COMPLETED SCOPES CALLOUT ───────────────────────── */}
          <div className="mt-10 p-6 bg-[#f8fafc] border border-[#e2e8f0] rounded-sm">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
              <div>
                <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#0099ff] block">
                  Track Record & Delivery
                </span>
                <h3 className="text-base sm:text-lg font-bold text-[#0f172a]">
                  Recently Completed Projects
                </h3>
              </div>
              <span className="text-xs font-mono text-slate-500">
                AISC / CISC Detailed Structures
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
              {recentCompleted.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-white px-3.5 py-2.5 rounded-xs border border-[#e2e8f0] flex items-center justify-between shadow-xs hover:border-[#0099ff]/50 transition-colors"
                >
                  <div className="flex items-center gap-2 min-w-0">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#0099ff] shrink-0" />
                    <span className="font-semibold text-xs text-slate-800 truncate">{item.name}</span>
                  </div>
                  <span className="text-[10px] font-mono font-medium text-slate-400 shrink-0 ml-2">
                    {item.sector}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-3 mt-10">
            {filters.map((f) => (
              <button
                key={f.id}
                onClick={() => setActiveFilter(f.id)}
                className={`px-5 py-2 text-xs font-bold font-mono tracking-wider uppercase transition-colors cursor-pointer rounded-xs ${
                  activeFilter === f.id
                    ? 'bg-[#0099ff] text-white shadow-sm'
                    : 'bg-[#f8fafc] text-slate-700 border border-[#e2e8f0] hover:border-[#0099ff] hover:text-[#0099ff]'
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ───────────────────────── 4. PROJECTS GRID ───────────────────────── */}
      <section className="w-full py-16 sm:py-20 bg-[#f8fafc]">
        <div className="max-w-[1378px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                onClick={() => setSelectedProject(project)}
                className="bg-white border border-[#e2e8f0] hover:border-[#0099ff] hover:shadow-xl transition-all cursor-pointer group rounded-sm overflow-hidden flex flex-col"
              >
                <div className="relative aspect-[16/10] bg-[#0a0f1d] overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    onError={(e) => {
                      e.currentTarget.src = '/steel-construction-bg.jpg';
                    }}
                  />
                  {project.isAwardWinner && (
                    <div className="absolute top-3 left-3 bg-[#e8250e] text-white text-[10px] font-bold px-2.5 py-1 uppercase tracking-wider shadow">
                      ★ TEKLA BIM AWARDS
                    </div>
                  )}
                  <div className="absolute top-3 right-3 bg-[#0f172a]/80 text-white text-[10px] font-mono px-2 py-0.5 uppercase">
                    {project.sector}
                  </div>
                </div>

                <div className="p-6 flex flex-col justify-between flex-grow space-y-4">
                  <div>
                    <span className="text-xs font-bold text-slate-500 uppercase block mb-1">
                      {project.location}
                    </span>
                    <h3 className="text-lg font-bold text-[#0f172a] group-hover:text-[#0099ff] transition-colors leading-snug">
                      {project.title}
                    </h3>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-600 line-clamp-2 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-mono">
                    <span className="text-[#0099ff] font-bold">{project.tonnage}</span>
                    <span className="text-slate-500 group-hover:text-[#0099ff] font-bold">Inspect Details →</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ───────────────────────── PROJECT DETAIL MODAL ───────────────────────── */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative w-full max-w-4xl bg-white border border-[#e2e8f0] shadow-2xl overflow-hidden max-h-[90vh] flex flex-col rounded-sm"
            >
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 z-20 w-8 h-8 bg-black/70 hover:bg-black text-white flex items-center justify-center text-sm font-bold cursor-pointer rounded-full"
              >
                ✕
              </button>

              <div className="relative aspect-[16/9] w-full bg-[#0a0f1d]">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="p-6 sm:p-8 overflow-y-auto space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold text-[#0099ff] uppercase">
                    {selectedProject.location}
                  </span>
                  <span className="text-sm font-mono font-bold text-slate-800">
                    {selectedProject.tonnage}
                  </span>
                </div>
                <h2 className="text-2xl font-bold text-[#0f172a]">
                  {selectedProject.title}
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  {selectedProject.description}
                </p>

                <div className="pt-4 flex gap-3 border-t border-slate-200">
                  <button
                    onClick={() => {
                      setSelectedProject(null);
                      if (onOpenEnquire) onOpenEnquire();
                      else if (onNavigateTab) onNavigateTab('contact');
                    }}
                    className="bg-[#0099ff] hover:bg-[#007acc] text-white text-xs font-bold px-6 py-3 uppercase tracking-wider cursor-pointer"
                  >
                    Inquire About Similar Scope
                  </button>
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="border border-slate-300 text-slate-700 text-xs font-bold px-5 py-3 uppercase cursor-pointer"
                  >
                    Close
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export const OurWorkPage = ProjectsPage;
export default ProjectsPage;
