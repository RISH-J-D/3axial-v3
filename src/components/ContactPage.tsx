import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, CheckCircle2, Clock } from 'lucide-react';

interface ContactPageProps {
  onNavigateHome: () => void;
  onShowToast: (msg: string) => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({
  onNavigateHome,
  onShowToast
}) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    scope: 'Structural Steel Detailing',
    standards: 'AISC 360-16 / AISC 341',
    tonnage: '500 - 1500 Tons',
    turnaround: 'Standard Milestone Plan',
    notes: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      onShowToast('Engineering inquiry transmitted! An estimation lead will review within 2 business hours.');
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        scope: 'Structural Steel Detailing',
        standards: 'AISC 360-16 / AISC 341',
        tonnage: '500 - 1500 Tons',
        turnaround: 'Standard Milestone Plan',
        notes: ''
      });
      setTimeout(() => setIsSuccess(false), 5000);
    }, 1000);
  };

  return (
    <div className="w-full bg-white text-[#0f172a] flex flex-col">
      {/* ───────────────────────── 1. DGS HERO PHOTOGRAPHY BANNER ───────────────────────── */}
      <section className="relative w-full h-[320px] sm:h-[420px] md:h-[480px] flex items-center justify-center bg-[#0a0f1d] overflow-hidden">
        <img
          src="/home-backdrop.jpg"
          alt="Contact 3-Axial"
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
            Contact Us
          </motion.h1>
          <p className="text-white/90 text-sm sm:text-base font-medium tracking-wide uppercase mt-3 drop-shadow max-w-2xl mx-auto">
            Fast Technical Inquiries & Pre-Bid Detailing Estimations
          </p>
        </div>
      </section>

      {/* ───────────────────────── 2. BREADCRUMBS & SECTION TITLE SUB-BAR ───────────────────────── */}
      <div className="w-full bg-[#f8fafc] border-b border-[#e2e8f0] py-6 px-4 sm:px-8">
        <div className="max-w-[1378px] mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#0099ff] tracking-tight">
            Contact & Estimation Desk
          </h2>
          <div className="flex items-center gap-2 text-xs text-slate-500 mt-2 font-medium">
            <button
              onClick={onNavigateHome}
              className="hover:text-[#0099ff] transition-colors cursor-pointer"
            >
              Home
            </button>
            <span>/</span>
            <span className="text-slate-800 font-semibold">Contact Us</span>
          </div>
        </div>
      </div>

      {/* ───────────────────────── 3. DGS 2-COLUMN CONTACT & FORM SECTION ───────────────────────── */}
      <section className="w-full py-16 sm:py-20 bg-white border-b border-[#e2e8f0]">
        <div className="max-w-[1378px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left Column: Direct Contact Info Desk */}
            <div className="lg:col-span-5 space-y-8">
              <div>
                <span className="text-xs font-mono font-bold tracking-widest text-[#0099ff] uppercase block mb-2">
                  Get In Touch
                </span>
                <h3 className="text-3xl sm:text-4xl font-bold text-[#0f172a] leading-tight mb-4">
                  Let's Discuss Your <br />
                  <span className="text-[#0099ff]">Next Steel Project</span>
                  <span className="text-[#e8250e]">.</span>
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Every enquiry and tender drawing package is treated with utmost urgency. Our estimating leads and structural project managers are available 24/7 across EST, CST, MST, and PST hours.
                </p>
              </div>

              {/* Quick Contact Cards */}
              <div className="space-y-4">
                <div className="p-5 bg-[#f8fafc] border border-[#e2e8f0] rounded-xs flex items-start gap-4">
                  <div className="p-3 bg-[#0099ff]/10 text-[#0099ff] rounded-xs shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-mono font-bold text-slate-500 uppercase block">North America Phone</span>
                    <a
                      href="tel:+16506956923"
                      className="text-base font-mono font-bold text-[#0f172a] hover:text-[#0099ff] transition-colors block mt-0.5"
                    >
                      +1 (650) 695-6923
                    </a>
                    <span className="text-[11px] text-slate-500 block mt-0.5">Live phone support during business hours</span>
                  </div>
                </div>

                <div className="p-5 bg-[#f8fafc] border border-[#e2e8f0] rounded-xs flex items-start gap-4">
                  <div className="p-3 bg-[#e8250e]/10 text-[#e8250e] rounded-xs shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-mono font-bold text-slate-500 uppercase block">Email Quotation Desk</span>
                    <a
                      href="mailto:info@3axialsteeldetail.com"
                      className="text-base font-mono font-bold text-[#0f172a] hover:text-[#0099ff] transition-colors block mt-0.5"
                    >
                      info@3axialsteeldetail.com
                    </a>
                    <span className="text-[11px] text-slate-500 block mt-0.5">Send tender sets and design drawings</span>
                  </div>
                </div>

                <div className="p-5 bg-[#f8fafc] border border-[#e2e8f0] rounded-xs flex items-start gap-4">
                  <div className="p-3 bg-slate-900/10 text-[#0f172a] rounded-xs shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-mono font-bold text-slate-500 uppercase block">Dual-Shift Production</span>
                    <span className="text-sm font-bold text-[#0f172a] block mt-0.5">24/7 Operations</span>
                    <span className="text-[11px] text-slate-500 block mt-0.5">Continuous engineering for US & Canadian time zones</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Interactive Quote Request Form */}
            <div className="lg:col-span-7 bg-[#f8fafc] border border-[#e2e8f0] p-8 sm:p-10 rounded-sm shadow-sm">
              <div className="mb-6">
                <span className="text-xs font-mono font-bold text-[#0099ff] uppercase block mb-1">
                  Project Tender Submission
                </span>
                <h4 className="text-2xl font-bold text-[#0f172a]">
                  Request an Estimation Proposal
                </h4>
                <p className="text-xs text-slate-600 mt-1">
                  Complete the details below for a comprehensive pre-bid proposal with milestone delivery timelines.
                </p>
              </div>

              {isSuccess && (
                <div className="mb-6 p-4 rounded-xs bg-emerald-50 border border-emerald-200 text-emerald-800 flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                  <div>
                    <strong className="block text-xs font-bold font-mono">Inquiry Received Successfully</strong>
                    <span className="text-xs">An estimation lead will reach out with pricing and schedule breakdown.</span>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono font-semibold text-slate-700 uppercase mb-1">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="John Smith"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-white border border-[#e2e8f0] px-3.5 py-2.5 text-xs text-slate-900 focus:outline-none focus:border-[#0099ff] rounded-xs"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono font-semibold text-slate-700 uppercase mb-1">
                      Work Email *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="john@fabricator.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-white border border-[#e2e8f0] px-3.5 py-2.5 text-xs text-slate-900 focus:outline-none focus:border-[#0099ff] rounded-xs"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono font-semibold text-slate-700 uppercase mb-1">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      placeholder="+1 (650) 000-0000"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-white border border-[#e2e8f0] px-3.5 py-2.5 text-xs text-slate-900 focus:outline-none focus:border-[#0099ff] rounded-xs"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono font-semibold text-slate-700 uppercase mb-1">
                      Company / Fabricator Name
                    </label>
                    <input
                      type="text"
                      placeholder="Apex Steel Works LLC"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full bg-white border border-[#e2e8f0] px-3.5 py-2.5 text-xs text-slate-900 focus:outline-none focus:border-[#0099ff] rounded-xs"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono font-semibold text-slate-700 uppercase mb-1">
                      Service Scope
                    </label>
                    <select
                      value={formData.scope}
                      onChange={(e) => setFormData({ ...formData, scope: e.target.value })}
                      className="w-full bg-white border border-[#e2e8f0] px-3.5 py-2.5 text-xs text-slate-900 focus:outline-none focus:border-[#0099ff] rounded-xs"
                    >
                      <option>Structural Steel Detailing</option>
                      <option>Connection Design & Stamping</option>
                      <option>Pre-Bid Estimation & ABM</option>
                      <option>Miscellaneous Metals & Stairs</option>
                      <option>3D BIM Model Coordination</option>
                      <option>Rebar Detailing</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-mono font-semibold text-slate-700 uppercase mb-1">
                      Estimated Tonnage
                    </label>
                    <select
                      value={formData.tonnage}
                      onChange={(e) => setFormData({ ...formData, tonnage: e.target.value })}
                      className="w-full bg-white border border-[#e2e8f0] px-3.5 py-2.5 text-xs text-slate-900 focus:outline-none focus:border-[#0099ff] rounded-xs"
                    >
                      <option>Under 200 Tons</option>
                      <option>200 - 500 Tons</option>
                      <option>500 - 1,500 Tons</option>
                      <option>1,500 - 5,000 Tons</option>
                      <option>5,000+ Tons Enterprise</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono font-semibold text-slate-700 uppercase mb-1">
                    Project Notes & Specifications
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Provide details on project location, software preference (Tekla/SDS2), standards (AISC/CISC), or target delivery milestones..."
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    className="w-full bg-white border border-[#e2e8f0] px-3.5 py-2.5 text-xs text-slate-900 focus:outline-none focus:border-[#0099ff] rounded-xs"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full sm:w-auto bg-[#0099ff] hover:bg-[#007acc] text-white font-mono font-bold text-xs uppercase px-8 py-3.5 tracking-wider rounded-xs transition-colors inline-flex items-center justify-center gap-2 cursor-pointer shadow-sm"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>{isSubmitting ? 'Transmitting Proposal...' : 'Submit Estimation Request'}</span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* ───────────────────────── 4. GLOBAL OFFICES GRID WITH GOOGLE MAPS ───────────────────────── */}
      <section className="w-full py-16 sm:py-20 bg-[#f8fafc]">
        <div className="max-w-[1378px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h3 className="text-2xl sm:text-3xl font-bold text-[#0099ff] tracking-tight">
              Engineering Office Locations & Coordinates
            </h3>
            <div className="w-16 h-1 bg-[#0099ff] mx-auto mt-2 mb-4" />
            <p className="text-slate-600 text-sm max-w-xl mx-auto">
              Visit our delivery centers or navigate directly using verified Google Maps locations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* 1. Global Headquarters (Bengaluru) */}
            <div className="bg-white p-7 border border-[#e2e8f0] hover:border-[#0099ff] rounded-xs shadow-xs transition-all flex flex-col justify-between group">
              <div>
                <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#0099ff] uppercase mb-2">
                  <MapPin className="w-4 h-4 text-[#0099ff]" />
                  <span>Global Headquarters</span>
                </div>
                <h4 className="text-lg font-bold text-[#0f172a] mb-2 group-hover:text-[#0099ff] transition-colors">
                  3Axial Steel Detailing Services Pvt Ltd
                </h4>
                <address className="not-italic text-xs text-slate-600 leading-relaxed space-y-0.5 mb-4 font-sans">
                  <div>17B, 3rd floor, Tech Mahindra Road,</div>
                  <div>Opp. Tata Power Gate No. 01, Electronic City Phase 2,</div>
                  <div className="font-semibold text-slate-800">Bengaluru, Karnataka - 560100, India</div>
                </address>
                <div className="text-xs font-mono text-slate-700 mb-4 pt-2 border-t border-slate-100">
                  <span>Email: </span>
                  <a href="mailto:info@3axialsteeldetail.com" className="text-[#0099ff] font-bold hover:underline">info@3axialsteeldetail.com</a>
                </div>
              </div>

              <div className="pt-3 border-t border-[#e2e8f0]">
                <a
                  href="https://maps.app.goo.gl/QATut2KmXaCSX6RJ7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 bg-[#f8fafc] hover:bg-[#0099ff] text-slate-800 hover:text-white border border-[#e2e8f0] hover:border-[#0099ff] py-2.5 px-4 text-xs font-mono font-bold uppercase tracking-wider rounded-xs transition-colors"
                >
                  <MapPin className="w-3.5 h-3.5" />
                  <span>View on Google Maps</span>
                </a>
              </div>
            </div>

            {/* 2. Branch Office (Coimbatore, India) */}
            <div className="bg-white p-7 border border-[#e2e8f0] hover:border-emerald-600 rounded-xs shadow-xs transition-all flex flex-col justify-between group">
              <div>
                <div className="flex items-center gap-2 text-xs font-mono font-bold text-emerald-600 uppercase mb-2">
                  <MapPin className="w-4 h-4 text-emerald-600" />
                  <span>Branch Office (India)</span>
                </div>
                <h4 className="text-lg font-bold text-[#0f172a] mb-2 group-hover:text-emerald-600 transition-colors">
                  Coimbatore Engineering Branch
                </h4>
                <address className="not-italic text-xs text-slate-600 leading-relaxed space-y-0.5 mb-4 font-sans">
                  <div>Door No 438 A, 1st Floor, Kamarajar Rd,</div>
                  <div>Peelamedu, Lakshmipuram,</div>
                  <div className="font-semibold text-slate-800">Coimbatore, Tamil Nadu - 641004, India</div>
                </address>
                <div className="text-xs font-mono text-slate-700 mb-4 pt-2 border-t border-slate-100">
                  <span>Production: </span>
                  <span className="text-emerald-700 font-semibold">24/7 Dual-Shift Schedule</span>
                </div>
              </div>

              <div className="pt-3 border-t border-[#e2e8f0]">
                <a
                  href="https://maps.app.goo.gl/gKHvPtPitJQvQEdZ9?g_st=aw"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 bg-[#f8fafc] hover:bg-emerald-600 text-slate-800 hover:text-white border border-[#e2e8f0] hover:border-emerald-600 py-2.5 px-4 text-xs font-mono font-bold uppercase tracking-wider rounded-xs transition-colors"
                >
                  <MapPin className="w-3.5 h-3.5" />
                  <span>View on Google Maps</span>
                </a>
              </div>
            </div>

            {/* 3. USA Branch Office (Austin, TX) */}
            <div className="bg-white p-7 border border-[#e2e8f0] hover:border-[#e8250e] rounded-xs shadow-xs transition-all flex flex-col justify-between group">
              <div>
                <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#e8250e] uppercase mb-2">
                  <MapPin className="w-4 h-4 text-[#e8250e]" />
                  <span>USA Branch Office</span>
                </div>
                <h4 className="text-lg font-bold text-[#0f172a] mb-2 group-hover:text-[#e8250e] transition-colors">
                  North American Operations (Austin, TX)
                </h4>
                <address className="not-italic text-xs text-slate-600 leading-relaxed space-y-0.5 mb-4 font-sans">
                  <div>5900 BALCONES DR STE 100,</div>
                  <div className="font-semibold text-slate-800">AUSTIN, TX 78731, USA</div>
                </address>
                <div className="text-xs font-mono text-slate-700 mb-4 pt-2 border-t border-slate-100">
                  <span>Direct Line: </span>
                  <a href="tel:+16506956923" className="text-[#0099ff] font-bold hover:underline">+1 (650) 695-6923</a>
                </div>
              </div>

              <div className="pt-3 border-t border-[#e2e8f0]">
                <a
                  href="https://maps.app.goo.gl/jHVB7mFamBg51nQ7A"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 bg-[#f8fafc] hover:bg-[#e8250e] text-slate-800 hover:text-white border border-[#e2e8f0] hover:border-[#e8250e] py-2.5 px-4 text-xs font-mono font-bold uppercase tracking-wider rounded-xs transition-colors"
                >
                  <MapPin className="w-3.5 h-3.5" />
                  <span>View on Google Maps</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
