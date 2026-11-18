import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Download, Check, Eye, X, ArrowRight } from 'lucide-react';
import type { SampleDrawing } from '../types';
import { SAMPLE_DRAWINGS } from '../data/siteData';

interface DrawingsPageProps {
  onNavigateHome: () => void;
  onNavigateTab?: (tabId: string) => void;
  onOpenEnquire?: () => void;
}

export const DrawingsPage: React.FC<DrawingsPageProps> = ({
  onNavigateHome,
  onNavigateTab,
  onOpenEnquire
}) => {
  const [filter, setFilter] = useState<'all' | 'shop' | 'ab' | 'structural' | 'misc'>('all');
  const [activeDrawing, setActiveDrawing] = useState<SampleDrawing | null>(null);
  const [downloaded, setDownloaded] = useState(false);

  const filteredDrawings = SAMPLE_DRAWINGS.filter(
    (item) => filter === 'all' || item.category === filter
  );

  const handleDownloadBrochure = () => {
    setDownloaded(true);
    setTimeout(() => setDownloaded(false), 3000);
  };

  return (
    <div className="w-full bg-white text-[#0f172a] flex flex-col">
      {/* ───────────────────────── 1. DGS HERO PHOTOGRAPHY BANNER ───────────────────────── */}
      <section className="relative w-full h-[320px] sm:h-[420px] md:h-[480px] flex items-center justify-center bg-[#0a0f1d] overflow-hidden">
        <img
          src="/blueprint-bg.jpg"
          alt="Sample Drawings"
          className="absolute inset-0 w-full h-full object-cover object-center brightness-90"
        />
        <div className="absolute inset-0 bg-black/50 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f1d]/90 via-transparent to-black/40" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_40%,rgba(0,153,255,0.25),transparent_70%)]" />

        <div className="relative z-10 text-center px-4">
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-white text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight drop-shadow-lg"
          >
            Sample Drawings
          </motion.h1>
          <p className="text-white/90 text-sm sm:text-base font-medium tracking-wide uppercase mt-3 drop-shadow max-w-2xl mx-auto">
            High-Resolution Shop Fabrication & Erection Drawing Packages
          </p>
        </div>
      </section>

      {/* ───────────────────────── 2. BREADCRUMBS & SECTION TITLE SUB-BAR ───────────────────────── */}
      <div className="w-full bg-[#f8fafc] border-b border-[#e2e8f0] py-6 px-4 sm:px-8">
        <div className="max-w-[1378px] mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#0099ff] tracking-tight">
            Sample Drawings & Erection Diagrams
          </h2>
          <div className="flex items-center gap-2 text-xs text-slate-500 mt-2 font-medium">
            <button
              onClick={onNavigateHome}
              className="hover:text-[#0099ff] transition-colors cursor-pointer"
            >
              Home
            </button>
            <span>/</span>
            <span className="text-slate-800 font-semibold">Sample Drawings</span>
          </div>
        </div>
      </div>

      {/* ───────────────────────── 3. DGS 2-COLUMN INTRO SECTION ───────────────────────── */}
      <section className="w-full py-16 sm:py-20 bg-white border-b border-[#e2e8f0]">
        <div className="max-w-[1378px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Column: Technical Overview */}
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs font-mono font-bold tracking-widest text-[#0099ff] uppercase block">
                Fabrication-Ready Deliverables
              </span>
              <h3 className="text-3xl sm:text-4xl font-bold text-[#0f172a] leading-tight">
                Shop Drawings Crafted for <br />
                <span className="text-[#0099ff]">Automated Beam Lines</span>
                <span className="text-[#e8250e]">.</span>
              </h3>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                3-Axial produces comprehensive drawing sets directly from synchronized 3D Tekla models. Each package is tailored to match individual fabricator shop preferences, tooling clearances, weld conventions, and title block standards.
              </p>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Our deliverables include Anchor Bolt & Foundation Embed Plans, Column & Beam Assembly Sheets, Truss Profiles, Stair & Railing Multi-Sheets, Gathering Sheets, and Field Bolt Summaries. All sheets include full bill of materials with heat numbers, grade callouts, and finish designations.
              </p>

              <div className="pt-2 flex flex-wrap gap-4">
                <button
                  onClick={handleDownloadBrochure}
                  className="bg-[#0099ff] hover:bg-[#007acc] text-white font-mono font-bold text-xs uppercase px-6 py-3 tracking-wider rounded-xs transition-colors inline-flex items-center gap-2 cursor-pointer shadow-sm"
                >
                  {downloaded ? (
                    <>
                      <Check className="w-4 h-4 text-white" />
                      <span>Package Downloaded!</span>
                    </>
                  ) : (
                    <>
                      <Download className="w-4 h-4 text-white" />
                      <span>Download Sample PDF Package</span>
                    </>
                  )}
                </button>

                <button
                  onClick={() => onOpenEnquire ? onOpenEnquire() : (onNavigateTab && onNavigateTab('contact'))}
                  className="bg-[#0f172a] hover:bg-[#1e293b] text-white font-mono font-bold text-xs uppercase px-6 py-3 tracking-wider rounded-xs transition-colors cursor-pointer"
                >
                  Request Custom Sample
                </button>
              </div>
            </div>

            {/* Right Column: Visual Sheet Preview */}
            <div className="lg:col-span-5">
              <div className="relative rounded-sm overflow-hidden border border-[#e2e8f0] shadow-xl bg-slate-900 group">
                <img
                  src={SAMPLE_DRAWINGS[0]?.image || '/blueprint-bg.jpg'}
                  alt="Shop Drawing Sample"
                  className="w-full h-auto object-cover transform group-hover:scale-102 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-4 left-4 right-4 text-white text-xs font-mono">
                  <div className="flex items-center justify-between">
                    <span className="text-[#0099ff] font-bold">AISC Standard E-Sheet</span>
                    <span className="bg-[#e8250e] text-white px-2 py-0.5 rounded-xs text-[10px]">Audited</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ───────────────────────── 4. DRAWING GALLERY WITH DGS PILL TABS ───────────────────────── */}
      <section className="w-full py-16 sm:py-20 bg-[#f8fafc] border-b border-[#e2e8f0]">
        <div className="max-w-[1378px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h3 className="text-2xl sm:text-3xl font-bold text-[#0099ff] tracking-tight">
              Drawing Sheet Index
            </h3>
            <div className="w-16 h-1 bg-[#0099ff] mx-auto mt-2 mb-4" />
            <p className="text-slate-600 text-sm sm:text-base max-w-2xl mx-auto">
              Filter by sheet discipline to inspect sample erection plans, anchor bolt layouts, shop member details, and miscellaneous assemblies.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12">
            {[
              { id: 'all', label: 'All Samples' },
              { id: 'shop', label: 'Shop Drawings' },
              { id: 'ab', label: 'Anchor Bolt Plans' },
              { id: 'structural', label: 'Structural Steel' },
              { id: 'misc', label: 'Miscellaneous Metals' }
            ].map((cat) => (
              <button
                key={cat.id}
                onClick={() => setFilter(cat.id as any)}
                className={`px-5 py-2.5 text-xs font-mono font-bold tracking-wider uppercase transition-all rounded-xs cursor-pointer ${
                  filter === cat.id
                    ? 'bg-[#0099ff] text-white shadow-sm'
                    : 'bg-white text-slate-700 hover:text-[#0099ff] border border-[#e2e8f0]'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Drawing Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredDrawings.map((draw, idx) => {
              const numStr = String(idx + 1).padStart(2, '0');
              return (
                <div
                  key={draw.id}
                  onClick={() => setActiveDrawing(draw)}
                  className="bg-white border border-[#e2e8f0] hover:border-[#0099ff] hover:shadow-lg transition-all rounded-sm overflow-hidden flex flex-col justify-between cursor-pointer group"
                >
                  <div className="relative aspect-[16/10] overflow-hidden bg-slate-950">
                    <img
                      src={draw.image}
                      alt={draw.title}
                      className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3 bg-[#0f172a]/90 text-white text-[11px] font-mono px-2.5 py-1 rounded-xs border border-white/20">
                      {numStr} · {draw.sheetNo || `E-${100 + idx}`}
                    </div>
                    <div className="absolute inset-0 bg-[#0099ff]/15 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <span className="bg-white text-[#0f172a] font-mono font-bold text-xs uppercase px-4 py-2 rounded-xs shadow-md inline-flex items-center gap-1.5">
                        <Eye className="w-4 h-4 text-[#0099ff]" />
                        Inspect Sheet
                      </span>
                    </div>
                  </div>

                  <div className="p-6">
                    <span className="text-[11px] font-mono font-bold text-[#e8250e] uppercase block mb-1">
                      {draw.standards || 'AISC 360-16'} · Scale {draw.scale || '1/4" = 1\'-0"'}
                    </span>
                    <h4 className="text-base font-bold text-[#0f172a] group-hover:text-[#0099ff] transition-colors mb-2">
                      {draw.title}
                    </h4>
                    <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed mb-4">
                      {draw.description || `${draw.title} detail sheet engineered for shop fabrication and field erection.`}
                    </p>

                    <div className="flex items-center justify-between text-xs font-mono text-[#0099ff] pt-2 border-t border-[#f1f5f9]">
                      <span>Formats: {draw.format || 'PDF / DWG / NC1'}</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ───────────────────────── 5. 3-TIER QC PROTOCOL SECTION ───────────────────────── */}
      <section className="w-full py-16 sm:py-20 bg-white">
        <div className="max-w-[1378px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h3 className="text-2xl sm:text-3xl font-bold text-[#0099ff] tracking-tight">
              Quality Assurance & CNC Formats
            </h3>
            <div className="w-16 h-1 bg-[#0099ff] mx-auto mt-2 mb-4" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 bg-[#f8fafc] border border-[#e2e8f0] rounded-xs">
              <span className="text-4xl font-black text-[#0f172a] font-display block mb-3">01</span>
              <h4 className="text-lg font-bold text-[#0099ff] mb-2">3-Tier Quality Control</h4>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                All shop drawing sheets are audited sequentially by Senior Model Checker, Project Manager, and Registered Professional Engineer before client issuance.
              </p>
            </div>

            <div className="p-8 bg-[#f8fafc] border border-[#e2e8f0] rounded-xs">
              <span className="text-4xl font-black text-[#0f172a] font-display block mb-3">02</span>
              <h4 className="text-lg font-bold text-[#0099ff] mb-2">Automated CNC Beam Line Data</h4>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                We generate zero-defect NC1, DXF, and DSTV data compatible with Ficep, Peddinghaus, Voortman, and PythonX automated steel processing lines.
              </p>
            </div>

            <div className="p-8 bg-[#f8fafc] border border-[#e2e8f0] rounded-xs">
              <span className="text-4xl font-black text-[#0f172a] font-display block mb-3">03</span>
              <h4 className="text-lg font-bold text-[#0099ff] mb-2">AISC Imperial & CISC Metric</h4>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Drawing dimensioning, weld symbols, and bolt schedules formatted precisely for US imperial fractional and Canadian/European metric systems.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ───────────────────────── 6. DRAWING DETAIL MODAL ───────────────────────── */}
      <AnimatePresence>
        {activeDrawing && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-xs">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-white max-w-4xl w-full max-h-[90vh] overflow-y-auto rounded-sm shadow-2xl border-t-4 border-[#0099ff] relative"
            >
              <button
                onClick={() => setActiveDrawing(null)}
                className="absolute top-4 right-4 text-slate-400 hover:text-slate-800 transition-colors p-1 z-10 cursor-pointer"
                aria-label="Close"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="relative aspect-[16/10] bg-slate-950 overflow-hidden">
                <img
                  src={activeDrawing.image}
                  alt={activeDrawing.title}
                  className="w-full h-full object-contain"
                />
              </div>

              <div className="p-6 sm:p-8 space-y-4">
                <div className="flex flex-wrap items-center justify-between gap-2 text-xs font-mono">
                  <span className="text-[#0099ff] font-bold">Sheet No: {activeDrawing.sheetNo || 'E-101'}</span>
                  <span className="text-slate-500">Scale: {activeDrawing.scale || '1/4" = 1\'-0"'} · {activeDrawing.standards || 'AISC 360-16'}</span>
                </div>

                <h3 className="text-2xl font-bold text-[#0f172a]">
                  {activeDrawing.title}
                </h3>

                <p className="text-slate-700 text-sm leading-relaxed">
                  {activeDrawing.description || `${activeDrawing.title} detailing drawing sheet engineered strictly to AISC and NISD standards with complete assembly marks and CNC data.`}
                </p>

                <div className="pt-4 border-t border-[#e2e8f0] flex flex-wrap items-center justify-between gap-4">
                  <span className="text-xs font-mono text-slate-600">
                    Deliverable Files: <strong>PDF, DWG, DXF, NC1, KISS</strong>
                  </span>
                  <button
                    onClick={() => setActiveDrawing(null)}
                    className="bg-[#0f172a] hover:bg-[#1e293b] text-white text-xs font-mono font-bold tracking-wider px-6 py-2.5 uppercase transition-colors rounded-xs cursor-pointer"
                  >
                    Close Sheet
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
