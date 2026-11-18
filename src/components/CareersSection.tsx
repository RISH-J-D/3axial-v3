import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, X, Upload } from 'lucide-react';
import type { JobOpening } from '../types';
import { JOB_OPENINGS } from '../data/siteData';

interface CareersSectionProps {
  onShowToast: (msg: string) => void;
}

export const CareersSection: React.FC<CareersSectionProps> = ({ onShowToast }) => {
  const [selectedJob, setSelectedJob] = useState<JobOpening | null>(null);
  const [submitting, setSubmitting] = useState(false);

  const handleApplySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      onShowToast(`Application submitted successfully for ${selectedJob?.title}!`);
      setSelectedJob(null);
    }, 1200);
  };

  return (
    <div className="section border-b border-[#929da7]/35 bg-transparent">
      <div className="shell">
        
        <div className="text-center max-w-3xl mx-auto mb-12">
          <p className="eyebrow mb-2">
            Join 3 Axial Engineering
          </p>
          <h2 className="display-md">
            Shape Global Steel Structures<span className="dot">.</span>
          </h2>
          <p className="lede text-sm mt-3">
            Build your career with an enterprise team delivering world-class Tekla 3D modeling and connection design.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {JOB_OPENINGS.map((job, idx) => (
            <motion.div
              key={job.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              viewport={{ once: true }}
              className={`bg-[#fdfdfe] border border-[#929da7]/35 rounded-3xl p-8 sm:p-10 shadow-xs hover:border-[#0099ff] transition-all flex flex-col justify-between border-t-4 ${
                idx % 2 === 0 ? 'border-t-[#0099ff]' : 'border-t-[#e8250e]'
              }`}
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="chip text-[#0099ff]">
                    {job.department}
                  </span>
                  <span className="label text-[#e8250e]">
                    {job.location}
                  </span>
                </div>

                <h3 className="font-display font-medium text-xl text-slate-900 mb-3">
                  {job.title}
                </h3>

                <p className="text-slate-600 text-sm leading-relaxed mb-6 font-normal">
                  {job.description}
                </p>

                <div className="space-y-2 mb-6 border-t border-slate-100 pt-4">
                  <span className="label text-slate-400 block mb-2">Requirements</span>
                  <ul className="space-y-1.5 text-xs text-slate-700">
                    {job.requirements.map((req, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#0099ff]" />
                        <span>{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <span className="label text-slate-500 font-mono">Full-Time · {job.location}</span>
                <button
                  onClick={() => setSelectedJob(job)}
                  className="btn btn-primary"
                >
                  <span>Apply Now</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Application Modal */}
        <AnimatePresence>
          {selectedJob && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-md">
              <div className="bg-white rounded-3xl max-w-lg w-full p-8 border border-slate-200 shadow-2xl relative">
                <button
                  onClick={() => setSelectedJob(null)}
                  className="absolute top-5 right-5 p-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>

                <span className="eyebrow block mb-1">Career Application</span>
                <h3 className="font-display font-medium text-xl text-slate-900 mb-2">{selectedJob.title}</h3>
                <p className="label text-slate-500 mb-6">{selectedJob.department} · {selectedJob.location}</p>

                <form onSubmit={handleApplySubmit} className="space-y-4">
                  <div>
                    <label className="label block mb-1 text-slate-600">Full Name *</label>
                    <input type="text" required placeholder="John Doe" className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-900 focus:outline-none focus:border-[#0099ff] focus:bg-white" />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="label block mb-1 text-slate-600">Email *</label>
                      <input type="email" required placeholder="john@example.com" className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-900 focus:outline-none focus:border-[#0099ff] focus:bg-white" />
                    </div>
                    <div>
                      <label className="label block mb-1 text-slate-600">Phone *</label>
                      <input type="tel" required placeholder="+91 90000 00000" className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-900 focus:outline-none focus:border-[#0099ff] focus:bg-white" />
                    </div>
                  </div>

                  <div>
                    <label className="label block mb-1 text-slate-600">Years of Tekla Experience</label>
                    <input type="text" placeholder="e.g. 5 Years in Commercial Detailing" className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-900 focus:outline-none focus:border-[#0099ff] focus:bg-white" />
                  </div>

                  <div>
                    <label className="label block mb-1 text-slate-600">Attach Resume / CV (PDF)</label>
                    <div className="border border-dashed border-slate-300 hover:border-[#0099ff] bg-slate-50 rounded-xl p-4 text-center cursor-pointer">
                      <Upload className="w-4 h-4 text-[#0099ff] mx-auto mb-1" />
                      <span className="label text-slate-500 block">Click to browse resume PDF</span>
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={submitting}
                    className="btn btn-primary w-full justify-center mt-2"
                  >
                    {submitting ? 'Submitting Application...' : 'Send Application'}
                  </button>
                </form>
              </div>
            </div>
          )}
        </AnimatePresence>

      </div>
    </div>
  );
};
