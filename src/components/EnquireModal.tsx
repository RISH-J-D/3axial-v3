import React, { useState } from 'react';
import { X, ArrowUpRight } from 'lucide-react';

interface EnquireModalProps {
  isOpen: boolean;
  onClose: () => void;
  onShowToast: (msg: string) => void;
}

export const EnquireModal: React.FC<EnquireModalProps> = ({ isOpen, onClose, onShowToast }) => {
  const [submitting, setSubmitting] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      onShowToast('Request submitted! Our engineering team will review your specifications and issue a competitive quote shortly.');
      onClose();
    }, 1000);
  };

  return (
    <div className="fixed inset-0 z-[100] bg-slate-950/60 backdrop-blur-md flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl max-w-lg w-full overflow-hidden shadow-2xl border border-slate-200 animate-fadeIn">
        <div className="p-6 sm:p-7 bg-slate-50/80 flex items-center justify-between border-b border-slate-100">
          <div>
            <span className="eyebrow block mb-1">Direct Engineering Desk</span>
            <h3 className="font-display font-medium text-lg sm:text-xl text-slate-900">Request a Project Bid</h3>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full text-slate-500 hover:text-slate-900 hover:bg-slate-200/60 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 sm:p-7 space-y-4">
          <div>
            <label className="label block mb-1.5 text-slate-600">Full Name *</label>
            <input 
              type="text" 
              required 
              placeholder="John Doe" 
              className="w-full px-4 py-2.5 bg-slate-50/60 border border-slate-200 rounded-xl text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#0099ff] focus:bg-white transition-all" 
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="label block mb-1.5 text-slate-600">Phone Number *</label>
              <input 
                type="tel" 
                required 
                placeholder="+1 (555) 000-0000" 
                className="w-full px-4 py-2.5 bg-slate-50/60 border border-slate-200 rounded-xl text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#0099ff] focus:bg-white transition-all" 
              />
            </div>
            <div>
              <label className="label block mb-1.5 text-slate-600">Email Address *</label>
              <input 
                type="email" 
                required 
                placeholder="john@example.com" 
                className="w-full px-4 py-2.5 bg-slate-50/60 border border-slate-200 rounded-xl text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#0099ff] focus:bg-white transition-all" 
              />
            </div>
          </div>

          <div>
            <label className="label block mb-1.5 text-slate-600">Service Required</label>
            <select className="w-full px-4 py-2.5 bg-slate-50/60 border border-slate-200 rounded-xl text-xs text-slate-900 focus:outline-none focus:border-[#0099ff] focus:bg-white transition-all">
              <option>Pre-bid Estimations & ABM</option>
              <option>Structural Steel Detailing</option>
              <option>Miscellaneous Steel Detailing</option>
              <option>Connection Design & Stamping</option>
              <option>Joist & Deck Layouts</option>
            </select>
          </div>

          <div>
            <label className="label block mb-1.5 text-slate-600">Project Details / Message</label>
            <textarea 
              rows={3} 
              placeholder="Tell us about your project tonnage, timeline, and location..." 
              className="w-full px-4 py-2.5 bg-slate-50/60 border border-slate-200 rounded-xl text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#0099ff] focus:bg-white transition-all" 
            />
          </div>

          <button
            type="submit"
            disabled={submitting}
            className="btn btn-primary w-full justify-center mt-2"
          >
            {submitting ? (
              <span>Submitting Quote Request...</span>
            ) : (
              <>
                <span>Submit Bid Request</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </>
            )}
          </button>
        </form>
      </div>
    </div>
  );
};
