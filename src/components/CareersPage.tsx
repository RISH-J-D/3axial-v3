import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, X, Upload } from 'lucide-react';
import type { JobOpening } from '../types';
import { JOB_OPENINGS } from '../data/siteData';

interface CareersPageProps {
  onNavigateHome: () => void;
  onShowToast: (msg: string) => void;
}

export const CareersPage: React.FC<CareersPageProps> = ({
  onNavigateHome,
  onShowToast
}) => {
  const [selectedJob, setSelectedJob] = useState<JobOpening | null>(null);
  const [submitting, setSubmitting] = useState(false);

  const handleApplySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      onShowToast(`Application submitted successfully for ${selectedJob?.title}! Our HR team will reach out.`);
      setSelectedJob(null);
    }, 1000);
  };

  return (
    <div className="w-full bg-white text-[#0f172a] flex flex-col">
      {/* ───────────────────────── 1. DGS HERO PHOTOGRAPHY BANNER ───────────────────────── */}
      <section className="relative w-full h-[320px] sm:h-[420px] md:h-[480px] flex items-center justify-center bg-[#0a0f1d] overflow-hidden">
        <img
          src="/steel-construction-bg.jpg"
          alt="Careers"
          className="absolute inset-0 w-full h-full object-cover object-center brightness-90"
        />
        <div className="absolute inset-0 bg-black/55 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f1d]/90 via-transparent to-black/40" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_40%,rgba(0,153,255,0.25),transparent_70%)]" />

        <div className="relative z-10 text-center px-4">
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-white text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight drop-shadow-lg"
          >
            Careers
          </motion.h1>
          <p className="text-white/90 text-sm sm:text-base font-medium tracking-wide uppercase mt-3 drop-shadow max-w-2xl mx-auto">
            Join Our Global Structural Engineering & Tekla Detailing Team
          </p>
        </div>
      </section>

      {/* ───────────────────────── 2. BREADCRUMBS & SECTION TITLE SUB-BAR ───────────────────────── */}
      <div className="w-full bg-[#f8fafc] border-b border-[#e2e8f0] py-6 px-4 sm:px-8">
        <div className="max-w-[1378px] mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#0099ff] tracking-tight">
            Careers at 3-Axial Steel Detailing
          </h2>
          <div className="flex items-center gap-2 text-xs text-slate-500 mt-2 font-medium">
            <button
              onClick={onNavigateHome}
              className="hover:text-[#0099ff] transition-colors cursor-pointer"
            >
              Home
            </button>
            <span>/</span>
            <span className="text-slate-800 font-semibold">Careers</span>
          </div>
        </div>
      </div>

      {/* ───────────────────────── 3. DGS 2-COLUMN INTRO SECTION ───────────────────────── */}
      <section className="w-full py-16 sm:py-20 bg-white border-b border-[#e2e8f0]">
        <div className="max-w-[1378px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Column: Career Overview */}
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs font-mono font-bold tracking-widest text-[#0099ff] uppercase block">
                Work With Industry Leaders
              </span>
              <h3 className="text-3xl sm:text-4xl font-bold text-[#0f172a] leading-tight">
                Shape Landmark Steel Structures <br />
                <span className="text-[#0099ff]">Across the Globe</span>
                <span className="text-[#e8250e]">.</span>
              </h3>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                At 3-Axial, we cultivate an engineering culture centered on precision, technological mastery, and continuous professional growth. Our teams in Bengaluru, Coimbatore, and Austin work on complex structural projects across the United States, Canada, Europe, and Australia.
              </p>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Whether you are an experienced Senior Tekla Checker, a Connection Design Engineer, or an aspiring BIM Detailer, you will have access to high-impact projects, cutting-edge Open API automation software, and clear career progression pathways.
              </p>

              <div className="pt-2 flex flex-wrap gap-3">
                <span className="px-3.5 py-1.5 bg-[#f8fafc] border border-[#0099ff]/30 text-[#0099ff] text-xs font-mono font-semibold rounded-xs">
                  Tekla Structures v2024 Lab
                </span>
                <span className="px-3.5 py-1.5 bg-[#f8fafc] border border-[#e8250e]/30 text-[#e8250e] text-xs font-mono font-semibold rounded-xs">
                  AISC & CISC Mentorship
                </span>
                <span className="px-3.5 py-1.5 bg-[#f8fafc] border border-slate-300 text-slate-700 text-xs font-mono font-semibold rounded-xs">
                  Flexible Dual-Shift Options
                </span>
              </div>
            </div>

            {/* Right Column: Visual Graphic */}
            <div className="lg:col-span-5">
              <div className="relative rounded-sm overflow-hidden border border-[#e2e8f0] shadow-xl bg-slate-900 group">
                <img
                  src="/mission-fabrication.jpg"
                  alt="3-Axial Engineering Workspace"
                  className="w-full h-auto object-cover transform group-hover:scale-102 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-4 left-4 right-4 text-white text-xs font-mono">
                  <div className="flex items-center justify-between">
                    <span className="text-[#0099ff] font-bold">Bengaluru & Coimbatore Centers</span>
                    <span className="bg-[#e8250e] text-white px-2 py-0.5 rounded-xs text-[10px]">Hiring Active</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ───────────────────────── 4. NUMBERED JOB OPENINGS GRID (DGS UI) ───────────────────────── */}
      <section className="w-full py-16 sm:py-20 bg-[#f8fafc] border-b border-[#e2e8f0]">
        <div className="max-w-[1378px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-2xl sm:text-3xl font-bold text-[#0099ff] tracking-tight">
              Current Open Engineering Positions
            </h3>
            <div className="w-16 h-1 bg-[#0099ff] mx-auto mt-2 mb-4" />
            <p className="text-slate-600 text-sm sm:text-base max-w-2xl mx-auto">
              Explore available career opportunities and submit your profile directly to our technical recruiting desk.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {JOB_OPENINGS.map((job, idx) => {
              const numStr = String(idx + 1).padStart(2, '0');
              return (
                <div
                  key={job.id}
                  className="bg-white border border-[#e2e8f0] hover:border-[#0099ff] hover:shadow-lg transition-all rounded-sm p-8 flex flex-col justify-between group"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-4xl font-black text-[#0f172a] group-hover:text-[#0099ff] transition-colors font-display">
                        {numStr}
                      </span>
                      <div className="flex items-center gap-2">
                        <span className="px-3 py-1 bg-[#f8fafc] text-[#0099ff] border border-[#0099ff]/30 text-xs font-mono font-semibold rounded-xs">
                          {job.department}
                        </span>
                        <span className="px-3 py-1 bg-[#f8fafc] text-[#e8250e] border border-[#e8250e]/30 text-xs font-mono font-semibold rounded-xs">
                          {job.location}
                        </span>
                      </div>
                    </div>

                    <h4 className="text-xl font-bold text-[#0f172a] group-hover:text-[#0099ff] transition-colors mb-3">
                      {job.title}
                    </h4>

                    <p className="text-slate-600 text-sm leading-relaxed mb-6">
                      {job.description}
                    </p>

                    <div className="space-y-2 mb-6 pt-4 border-t border-[#f1f5f9]">
                      <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-700 block">
                        Core Qualifications:
                      </span>
                      <ul className="space-y-1.5 text-xs text-slate-600">
                        {job.requirements.map((req, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#0099ff] shrink-0 mt-1.5" />
                            <span>{req}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-[#e2e8f0] flex items-center justify-between">
                    <span className="text-xs font-mono text-slate-500">Full-Time · On-Site / Hybrid</span>
                    <button
                      onClick={() => setSelectedJob(job)}
                      className="bg-[#0099ff] hover:bg-[#007acc] text-white font-mono font-bold text-xs uppercase px-5 py-2.5 tracking-wider rounded-xs transition-colors inline-flex items-center gap-1.5 cursor-pointer shadow-xs"
                    >
                      <span>Apply Now</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ───────────────────────── 5. BENEFITS / CULTURE GRID ───────────────────────── */}
      <section className="w-full py-16 sm:py-20 bg-white">
        <div className="max-w-[1378px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h3 className="text-2xl sm:text-3xl font-bold text-[#0099ff] tracking-tight">
              Life at 3-Axial
            </h3>
            <div className="w-16 h-1 bg-[#0099ff] mx-auto mt-2 mb-4" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            <div className="p-6 bg-[#f8fafc] border border-[#e2e8f0] rounded-xs">
              <span className="text-3xl font-black text-[#0f172a] font-display block mb-2">01</span>
              <h4 className="text-base font-bold text-[#0099ff] mb-2">Trimble Certification</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Full sponsorship for Tekla Structures certification and advanced modeling workshops.
              </p>
            </div>

            <div className="p-6 bg-[#f8fafc] border border-[#e2e8f0] rounded-xs">
              <span className="text-3xl font-black text-[#0f172a] font-display block mb-2">02</span>
              <h4 className="text-base font-bold text-[#0099ff] mb-2">Global Steel Projects</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Work on iconic airports, stadiums, high-rises, and industrial complexes in the US & Canada.
              </p>
            </div>

            <div className="p-6 bg-[#f8fafc] border border-[#e2e8f0] rounded-xs">
              <span className="text-3xl font-black text-[#0f172a] font-display block mb-2">03</span>
              <h4 className="text-base font-bold text-[#0099ff] mb-2">Dual-Shift Flexibility</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Balanced shift structures with transport allowances, overtime compensation, and comprehensive healthcare.
              </p>
            </div>

            <div className="p-6 bg-[#f8fafc] border border-[#e2e8f0] rounded-xs">
              <span className="text-3xl font-black text-[#0f172a] font-display block mb-2">04</span>
              <h4 className="text-base font-bold text-[#0099ff] mb-2">Rapid Advancement</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Merit-based promotions with clear pathways from Junior Modeler to Checker and Project Manager.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ───────────────────────── 6. APPLICATION MODAL ───────────────────────── */}
      <AnimatePresence>
        {selectedJob && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-white max-w-lg w-full p-6 sm:p-8 rounded-sm shadow-2xl border-t-4 border-[#0099ff] relative"
            >
              <button
                onClick={() => setSelectedJob(null)}
                className="absolute top-4 right-4 text-slate-400 hover:text-slate-800 transition-colors p-1 cursor-pointer"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>

              <span className="text-xs font-mono font-bold text-[#0099ff] uppercase block mb-1">
                Job Application
              </span>
              <h3 className="text-2xl font-bold text-[#0f172a] mb-1">
                {selectedJob.title}
              </h3>
              <p className="text-xs font-mono text-slate-500 mb-6">
                {selectedJob.department} · {selectedJob.location}
              </p>

              <form onSubmit={handleApplySubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-mono font-semibold text-slate-700 uppercase mb-1">Full Name</label>
                  <input
                    type="text"
                    required
                    placeholder="John Doe"
                    className="w-full bg-[#f8fafc] border border-[#e2e8f0] px-3.5 py-2.5 text-xs text-slate-900 focus:outline-none focus:border-[#0099ff] rounded-xs"
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-mono font-semibold text-slate-700 uppercase mb-1">Email</label>
                    <input
                      type="email"
                      required
                      placeholder="john@example.com"
                      className="w-full bg-[#f8fafc] border border-[#e2e8f0] px-3.5 py-2.5 text-xs text-slate-900 focus:outline-none focus:border-[#0099ff] rounded-xs"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-mono font-semibold text-slate-700 uppercase mb-1">Phone</label>
                    <input
                      type="tel"
                      required
                      placeholder="+1 (555) 000-0000"
                      className="w-full bg-[#f8fafc] border border-[#e2e8f0] px-3.5 py-2.5 text-xs text-slate-900 focus:outline-none focus:border-[#0099ff] rounded-xs"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono font-semibold text-slate-700 uppercase mb-1">Years of Tekla / Detailing Experience</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. 5 Years in AISC Detailing"
                    className="w-full bg-[#f8fafc] border border-[#e2e8f0] px-3.5 py-2.5 text-xs text-slate-900 focus:outline-none focus:border-[#0099ff] rounded-xs"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono font-semibold text-slate-700 uppercase mb-1">Upload Resume (PDF / DOC)</label>
                  <div className="border border-dashed border-slate-300 rounded-xs p-4 text-center bg-[#f8fafc] hover:border-[#0099ff] transition-colors cursor-pointer">
                    <Upload className="w-5 h-5 text-[#0099ff] mx-auto mb-1" />
                    <span className="text-xs text-slate-600 block">Click to attach your resume</span>
                  </div>
                </div>

                <div className="pt-4 flex items-center justify-end gap-3 border-t border-[#e2e8f0]">
                  <button
                    type="button"
                    onClick={() => setSelectedJob(null)}
                    className="px-4 py-2 text-xs font-mono uppercase text-slate-600 hover:text-slate-900 cursor-pointer"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={submitting}
                    className="bg-[#0099ff] hover:bg-[#007acc] text-white font-mono font-bold text-xs uppercase px-6 py-2.5 tracking-wider rounded-xs transition-colors cursor-pointer"
                  >
                    {submitting ? 'Submitting...' : 'Submit Application'}
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};
