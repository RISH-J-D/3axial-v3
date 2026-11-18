import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2, Download, ArrowUpRight } from 'lucide-react';

interface ContactQuoteSectionProps {
  onShowToast: (msg: string) => void;
}

export const ContactQuoteSection: React.FC<ContactQuoteSectionProps> = ({ onShowToast }) => {
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
      onShowToast('Engineering inquiry transmitted. An estimation lead will review within 2 to 4 business hours.');
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
    }, 1200);
  };

  return (
    <div className="section pt-4 pb-20 border-b border-[#929da7]/35 bg-transparent">
      <div className="shell">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          
          {/* Left Column: Interactive Project Quotation Form */}
          <div className="lg:col-span-7 bg-[#fdfdfe] border border-[#929da7]/35 rounded-3xl p-6 sm:p-10 shadow-sm relative">
            <div className="mb-8">
              <span className="eyebrow block mb-2">Direct Estimation Desk</span>
              <h3 className="display-sm text-2xl sm:text-3xl text-slate-900">
                Submit Project Specification<span className="dot">.</span>
              </h3>
              <p className="text-slate-600 text-sm sm:text-base mt-2 leading-relaxed">
                Connect directly with our senior detailing managers to discuss your project scope, request a pre-bid estimation quote, or review connection compliance.
              </p>
            </div>

            {isSuccess && (
              <div className="mb-6 p-4 sm:p-5 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-800 flex items-center gap-3">
                <CheckCircle2 className="w-6 h-6 text-emerald-600 shrink-0" />
                <div>
                  <h4 className="font-display font-bold text-sm text-slate-900">Inquiry Transmitted Successfully</h4>
                  <p className="text-xs text-slate-600 mt-0.5">Our senior estimator will contact you within 2 to 4 business hours.</p>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="label block mb-1.5 text-slate-700 font-bold">Contact Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="field"
                  />
                </div>
                <div>
                  <label className="label block mb-1.5 text-slate-700 font-bold">Corporate Email *</label>
                  <input
                    type="email"
                    required
                    placeholder="john@fabricator.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="field"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="label block mb-1.5 text-slate-700 font-bold">Phone Number</label>
                  <input
                    type="tel"
                    placeholder="+1 (555) 000-0000"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="field"
                  />
                </div>
                <div>
                  <label className="label block mb-1.5 text-slate-700 font-bold">Company / Fabricator Name</label>
                  <input
                    type="text"
                    placeholder="Apex Steel Works LLC"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="field"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="label block mb-1.5 text-slate-700 font-bold">Detailing Scope</label>
                  <select
                    value={formData.scope}
                    onChange={(e) => setFormData({ ...formData, scope: e.target.value })}
                    className="field cursor-pointer"
                  >
                    <option value="Structural Steel Detailing">Structural Steel Detailing</option>
                    <option value="Miscellaneous Steel (Stairs & Rails)">Miscellaneous Steel (Stairs & Rails)</option>
                    <option value="Pre-Bid Estimation & ABM Takeoff">Pre-Bid Estimation & ABM Takeoff</option>
                    <option value="Connection Design & PE Stamping">Connection Design & PE Stamping</option>
                    <option value="Industrial Piping & Piperacks">Industrial Piping & Piperacks</option>
                    <option value="Full Turnkey Detailing Package">Full Turnkey Detailing Package</option>
                  </select>
                </div>
                <div>
                  <label className="label block mb-1.5 text-slate-700 font-bold">Applicable Code Standard</label>
                  <select
                    value={formData.standards}
                    onChange={(e) => setFormData({ ...formData, standards: e.target.value })}
                    className="field cursor-pointer"
                  >
                    <option value="AISC 360-16 / AISC 341">AISC 360-16 / AISC 341 (USA)</option>
                    <option value="CISC S16 Specification">CISC S16 (Canada)</option>
                    <option value="Eurocode 3 (EN 1993)">Eurocode 3 (Europe / UK)</option>
                    <option value="AS 4100 / AS/NZS 5131">AS 4100 / AS/NZS (Australia)</option>
                    <option value="Multi-Regional Specification">Multi-Regional Specification</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="label block mb-1.5 text-slate-700 font-bold">Project Requirements & Timeline</label>
                <textarea
                  rows={4}
                  placeholder="Estimated structural tonnage, drawing delivery schedule, connection engineer stamping needs..."
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="field resize-y"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="btn btn-primary w-full justify-center py-4 text-base font-bold shadow-lg"
              >
                {isSubmitting ? (
                  <span>Transmitting Project Scope...</span>
                ) : (
                  <>
                    <span>Transmit Project Bid Request</span>
                    <Send className="w-4 h-4 ml-1" />
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Right Column: Direct Contact Info, Google Maps Locations & Brochure */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Global Headquarters (Bangalore) Card */}
            <div className="bg-[#fdfdfe] border border-[#929da7]/35 rounded-3xl p-6 sm:p-7 shadow-xs border-l-4 border-l-[#0099ff]">
              <div className="flex items-start gap-3 mb-2">
                <div className="w-10 h-10 rounded-xl bg-[#0099ff]/10 text-[#0099ff] flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="label text-[#0099ff] font-bold block text-[11px]">Global Headquarters</span>
                  <h4 className="font-display font-bold text-slate-900 text-base sm:text-lg">
                    3Axial Steel Detailing Services Pvt Ltd
                  </h4>
                </div>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal pl-12 mt-1">
                17B, 3rd floor, Tech Mahindra Road,<br />
                Opp. Tata Power Gate No. 01, Electronic City Phase 2,<br />
                Bengaluru, Karnataka - 560100, India
              </p>
            </div>

            {/* Coimbatore Branch Office Card with Google Maps Link */}
            <a
              href="https://maps.app.goo.gl/gKHvPtPitJQvQEdZ9?g_st=aw"
              target="_blank"
              rel="noopener noreferrer"
              className="group block bg-[#fdfdfe] border border-[#929da7]/35 hover:border-[#0099ff] rounded-3xl p-6 sm:p-7 shadow-xs hover:shadow-md transition-all border-l-4 border-l-emerald-600"
              title="Open Coimbatore Branch on Google Maps"
            >
              <div className="flex items-start justify-between gap-3 mb-2">
                <div className="flex items-center gap-2.5">
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-600 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="label text-emerald-600 font-bold block text-[11px]">Branch Office (India)</span>
                    <h4 className="font-display font-bold text-slate-900 text-base sm:text-lg group-hover:text-emerald-600 transition-colors">
                      Coimbatore Engineering Branch
                    </h4>
                  </div>
                </div>
                <ArrowUpRight className="w-5 h-5 text-slate-400 group-hover:text-emerald-600 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all shrink-0 mt-1" />
              </div>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal pl-12 mt-2">
                Door No 438 A, 1st Floor, Kamarajar Rd,<br />
                Peelamedu, Lakshmipuram,<br />
                Coimbatore, Tamil Nadu - 641004, India
              </p>

              <div className="pl-12 mt-3 pt-3 border-t border-[#929da7]/20 flex items-center gap-1.5 text-xs font-mono font-bold text-emerald-600">
                <span>View on Google Maps</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </div>
            </a>

            {/* USA Branch Office Card with Google Maps Link */}
            <a
              href="https://maps.app.goo.gl/QZQ683EXPvxZHiecA"
              target="_blank"
              rel="noopener noreferrer"
              className="group block bg-[#fdfdfe] border border-[#929da7]/35 hover:border-[#e8250e] rounded-3xl p-6 sm:p-7 shadow-xs hover:shadow-md transition-all border-l-4 border-l-[#e8250e]"
              title="Open Austin USA Branch Office on Google Maps"
            >
              <div className="flex items-start justify-between gap-3 mb-2">
                <div className="flex items-center gap-2.5">
                  <div className="w-10 h-10 rounded-xl bg-[#e8250e]/10 text-[#e8250e] flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="label text-[#e8250e] font-bold block text-[11px]">USA Branch Office</span>
                    <h4 className="font-display font-bold text-slate-900 text-base sm:text-lg group-hover:text-[#e8250e] transition-colors">
                      North American Operations (Austin, TX)
                    </h4>
                  </div>
                </div>
                <ArrowUpRight className="w-5 h-5 text-slate-400 group-hover:text-[#e8250e] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all shrink-0 mt-1" />
              </div>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal pl-12 mt-2">
                5900 BALCONES DR STE 100,<br />
                AUSTIN, TX 78731, USA
              </p>

              <div className="pl-12 mt-3 pt-3 border-t border-[#929da7]/20 flex items-center gap-1.5 text-xs font-mono font-bold text-[#e8250e]">
                <span>View on Google Maps</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </div>
            </a>

            {/* Direct Phone & Email */}
            <div className="bg-[#fdfdfe] border border-[#929da7]/35 rounded-3xl p-6 sm:p-7 shadow-xs space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#0099ff]/10 text-[#0099ff] flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-display font-bold text-slate-900 text-sm">Direct Phone</h4>
                  <a href="tel:+16506956923" className="text-sm sm:text-base font-mono font-bold text-[#0099ff] hover:text-[#e8250e] transition-colors block mt-0.5">
                    +1 (650) 695-6923
                  </a>
                  <span className="text-xs text-slate-500 font-mono">24/7 dual-shift operations across US & APAC hours</span>
                </div>
              </div>

              <div className="flex items-start gap-4 pt-3 border-t border-[#929da7]/20">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-600 flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-display font-bold text-slate-900 text-sm">Email Enquiries</h4>
                  <a href="mailto:info@3axialsteeldetail.com" className="text-sm sm:text-base font-mono font-bold text-[#0099ff] hover:text-[#e8250e] transition-colors block mt-0.5">
                    info@3axialsteeldetail.com
                  </a>
                  <span className="text-xs text-slate-500 font-mono">Drawing files & RFQ submissions</span>
                </div>
              </div>
            </div>

            {/* Download Corporate Brochure Card */}
            <div className="bg-[#fdfdfe] border border-[#929da7]/35 rounded-3xl p-6 sm:p-7 shadow-xs space-y-3">
              <span className="label text-[#0099ff] block font-bold">Capabilities Deck</span>
              <h4 className="font-display font-bold text-slate-900 text-base sm:text-lg">Corporate Brochure & Samples</h4>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                Download our detailed capabilities deck, Tekla environment setups, and sample structural drawing sheets.
              </p>
              <button
                onClick={() => onShowToast('Brochure download initiated (3Axial-Corporate-Deck.pdf)')}
                className="btn btn-ghost w-full justify-center bg-white border border-[#929da7]/35 py-3.5 text-sm font-bold"
              >
                <Download className="w-4 h-4 text-[#0099ff]" />
                <span>Download Capability Deck (PDF)</span>
              </button>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
};
