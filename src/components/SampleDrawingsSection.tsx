import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { Download, X, Check, ArrowUpRight } from 'lucide-react';
import type { SampleDrawing } from '../types';
import { SAMPLE_DRAWINGS } from '../data/siteData';

export const SampleDrawingsSection: React.FC = () => {
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
    <div className="shell">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <p className="eyebrow mb-2">
          Technical Verification
        </p>
        <h2 className="display-md">
          Sample Tekla Shop Drawings<span className="dot">.</span>
        </h2>
        <p className="lede text-sm mt-3">
          Inspect sample erection plans, anchor bolt layouts, shop member details, and miscellaneous steel drawings crafted for international fabricators.
        </p>
      </div>

      {/* Category Controls & Download Brochure Button */}
      <div className="bg-[#fdfdfe] border border-[#929da7]/35 rounded-3xl p-4 sm:p-5 shadow-xs mb-10">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-2">
            {[
              { id: 'all', label: 'All Samples' },
              { id: 'shop', label: 'Shop Drawings' },
              { id: 'ab', label: 'AB & Embed Plans' },
              { id: 'structural', label: 'Structural Steel' },
              { id: 'misc', label: 'Miscellaneous Steel' }
            ].map((cat) => (
              <button
                key={cat.id}
                onClick={() => setFilter(cat.id as any)}
                className={`px-4 py-2 rounded-full text-xs font-mono font-medium transition-all ${
                  filter === cat.id
                    ? 'bg-[#0099ff] text-white shadow-xs'
                    : 'bg-[#fdfdfe] text-slate-700 hover:text-slate-950 border border-[#929da7]/30'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          <button
            onClick={handleDownloadBrochure}
            className="btn btn-accent flex-shrink-0"
          >
            {downloaded ? (
              <>
                <Check className="w-4 h-4 text-white" />
                <span>Package Downloaded!</span>
              </>
            ) : (
              <>
                <Download className="w-3.5 h-3.5 text-white" />
                <span>Download Sample Package (PDF)</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* Drawing Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {filteredDrawings.map((draw, idx) => (
          <div
            key={draw.id}
            className={`group rounded-3xl bg-[#fdfdfe] border border-[#929da7]/35 shadow-xs overflow-hidden flex flex-col justify-between cursor-pointer hover:border-[#0099ff] transition-all border-t-4 ${
              idx % 2 === 0 ? 'border-t-[#0099ff]' : 'border-t-[#e8250e]'
            }`}
            onClick={() => setActiveDrawing(draw)}
          >
            <div>
              <div className="relative aspect-[16/11] overflow-hidden bg-slate-950">
                <img
                  src={draw.image}
                  alt={draw.title}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3">
                  <span className="text-[10px] font-mono font-medium uppercase tracking-wider text-white bg-slate-900/85 px-3 py-1 rounded-full border border-white/20">
                    {draw.category.toUpperCase()}
                  </span>
                </div>
              </div>

              <div className="p-7">
                <span className="label text-[#0099ff] block mb-1">
                  Tekla Deliverable Sheet
                </span>
                <h3 className="font-display font-medium text-lg text-slate-900 mb-3 group-hover:text-[#0099ff] transition-colors leading-snug">
                  {draw.title}
                </h3>
                
                <div className="flex items-center justify-between text-xs pt-4 border-t border-[#929da7]/20">
                  <span className="text-slate-500 font-mono text-[11px]">
                    PDF / DWG Vector Sheet
                  </span>
                  <span className="link-line text-xs font-mono font-medium text-[#0099ff] group-hover:text-[#e8250e]">
                    <span>Inspect</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Drawing Sheet Modal */}
      <AnimatePresence>
        {activeDrawing && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-md">
            <div className="bg-white rounded-3xl max-w-4xl w-full p-6 sm:p-8 border border-slate-200 shadow-2xl relative">
              <button
                onClick={() => setActiveDrawing(null)}
                className="absolute top-5 right-5 p-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 transition-colors"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="aspect-[16/10] w-full rounded-2xl overflow-hidden mb-6 bg-slate-900 border border-slate-200">
                <img
                  src={activeDrawing.image}
                  alt={activeDrawing.title}
                  className="w-full h-full object-contain"
                />
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-display font-medium text-xl text-slate-900">{activeDrawing.title}</h3>
                  <span className="label text-[#0099ff] mt-1 block">AISC / CISC Fabrication Ready Format</span>
                </div>

                <button
                  onClick={() => setActiveDrawing(null)}
                  className="btn btn-primary"
                >
                  <span>Close Preview</span>
                </button>
              </div>
            </div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};
