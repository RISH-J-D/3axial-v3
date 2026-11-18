import React from 'react';
import { motion } from 'framer-motion';
import { TEAM_MEMBERS } from '../data/siteData';

interface TeamPageProps {
  onNavigateHome: () => void;
  onNavigateTab?: (tabId: string) => void;
}

export const TeamPage: React.FC<TeamPageProps> = ({
  onNavigateHome
}) => {
  return (
    <div className="w-full bg-white text-[#0f172a] flex flex-col">
      {/* ───────────────────────── 1. DGS HERO PHOTOGRAPHY BANNER ───────────────────────── */}
      <section className="relative w-full h-[320px] sm:h-[420px] md:h-[480px] flex items-center justify-center bg-[#0a0f1d] overflow-hidden">
        <img
          src="/mission-fabrication.jpg"
          alt="Our Team"
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
            Our Team
          </motion.h1>
          <p className="text-white/90 text-sm sm:text-base font-medium tracking-wide uppercase mt-3 drop-shadow max-w-2xl mx-auto">
            Structural Engineers, Certified Tekla Detailers & Project Managers
          </p>
        </div>
      </section>

      {/* ───────────────────────── 2. BREADCRUMBS & SECTION TITLE SUB-BAR ───────────────────────── */}
      <div className="w-full bg-[#f8fafc] border-b border-[#e2e8f0] py-6 px-4 sm:px-8">
        <div className="max-w-[1378px] mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#0099ff] tracking-tight">
            Leadership & Engineering Operations
          </h2>
          <div className="flex items-center gap-2 text-xs text-slate-500 mt-2 font-medium">
            <button
              onClick={onNavigateHome}
              className="hover:text-[#0099ff] transition-colors cursor-pointer"
            >
              Home
            </button>
            <span>/</span>
            <span>About Us</span>
            <span>/</span>
            <span className="text-slate-800 font-semibold">Leadership Team</span>
          </div>
        </div>
      </div>

      {/* ───────────────────────── 3. DGS 2-COLUMN INTRO SECTION ───────────────────────── */}
      <section className="w-full py-16 sm:py-20 bg-white border-b border-[#e2e8f0]">
        <div className="max-w-[1378px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Column: People Overview */}
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs font-mono font-bold tracking-widest text-[#0099ff] uppercase block">
                Engineering Talent & Culture
              </span>
              <h3 className="text-3xl sm:text-4xl font-bold text-[#0f172a] leading-tight">
                Decades of Fabrication Expertise, <br />
                <span className="text-[#0099ff]">Driven by Innovation</span>
                <span className="text-[#e8250e]">.</span>
              </h3>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                The 3-Axial team brings together over 120 dedicated structural engineers, connection design specialists, Senior Tekla Model Checkers, and BIM coordinators. Operating seamlessly from Bengaluru, Coimbatore, and Austin (Texas), our leadership possesses deep hands-on expertise in American and Canadian fabrication practices, erection engineering, and automated detailing.
              </p>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Every client project is led by a dedicated Project Manager who oversees a synchronized squad of senior modelers, connection checkers, and drafting technicians. This pod structure guarantees total accountability, direct phone/Teams communication during your local business hours, and immediate turnaround on RFIs.
              </p>

              <div className="pt-2 flex flex-wrap gap-3">
                <span className="px-3.5 py-1.5 bg-[#f8fafc] border border-[#0099ff]/30 text-[#0099ff] text-xs font-mono font-semibold rounded-xs">
                  120+ In-House Detailers
                </span>
                <span className="px-3.5 py-1.5 bg-[#f8fafc] border border-[#e8250e]/30 text-[#e8250e] text-xs font-mono font-semibold rounded-xs">
                  Dedicated Project Managers
                </span>
                <span className="px-3.5 py-1.5 bg-[#f8fafc] border border-slate-300 text-slate-700 text-xs font-mono font-semibold rounded-xs">
                  Dual-Shift Synchronized Pods
                </span>
              </div>
            </div>

            {/* Right Column: Visual Graphic */}
            <div className="lg:col-span-5">
              <div className="relative rounded-sm overflow-hidden border border-[#e2e8f0] shadow-xl bg-slate-900 group">
                <img
                  src="/vision-3d.png"
                  alt="Tekla BIM Excellence"
                  className="w-full h-auto object-cover transform group-hover:scale-102 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-4 left-4 right-4 text-white text-xs font-mono">
                  <div className="flex items-center justify-between">
                    <span className="text-[#0099ff] font-bold">Tekla Structures Certified Team</span>
                    <span className="bg-[#e8250e] text-white px-2 py-0.5 rounded-xs text-[10px]">AISC Licensed</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ───────────────────────── 4. LEADERSHIP TEAM GRID ───────────────────────── */}
      <section className="w-full py-16 sm:py-20 bg-[#f8fafc] border-b border-[#e2e8f0]">
        <div className="max-w-[1378px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-2xl sm:text-3xl font-bold text-[#0099ff] tracking-tight">
              Executive Leadership & Management
            </h3>
            <div className="w-16 h-1 bg-[#0099ff] mx-auto mt-2 mb-4" />
            <p className="text-slate-600 text-sm sm:text-base max-w-2xl mx-auto">
              Guiding our global engineering teams with deep industry experience in commercial, industrial, and infrastructure steel projects.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {TEAM_MEMBERS.map((member, idx) => {
              const numStr = String(idx + 1).padStart(2, '0');
              return (
                <div
                  key={member.id}
                  className="bg-white border border-[#e2e8f0] hover:border-[#0099ff] hover:shadow-lg transition-all rounded-sm overflow-hidden flex flex-col justify-between group"
                >
                  <div className="relative aspect-[4/4.5] overflow-hidden bg-[#f8fafc] border-b border-[#e2e8f0]">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover object-top group-hover:scale-103 transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3 bg-[#0f172a]/90 text-white text-[11px] font-mono px-2.5 py-1 rounded-xs border border-white/20">
                      {numStr}
                    </div>
                  </div>

                  <div className="p-6 text-center">
                    <h4 className="text-lg font-bold text-[#0f172a] group-hover:text-[#0099ff] transition-colors mb-1">
                      {member.name}
                    </h4>
                    <p className="text-xs font-mono font-semibold text-[#e8250e] uppercase tracking-wider mb-3">
                      {member.role}
                    </p>
                    <p className="text-xs text-slate-500 leading-relaxed">
                      Leading structural steel detailing initiatives and ensuring highest AISC/CISC compliance standards across all project deliverables.
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ───────────────────────── 5. TEAM CAPABILITIES STATS ───────────────────────── */}
      <section className="w-full py-16 sm:py-20 bg-white">
        <div className="max-w-[1378px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div className="p-8 bg-[#f8fafc] border border-[#e2e8f0] rounded-xs">
              <span className="text-4xl font-black text-[#0f172a] font-display block mb-2">120+</span>
              <h4 className="text-base font-bold text-[#0099ff] mb-2">In-House Detailers</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Tekla certified structural detailers operating in synchronized project pods with dedicated leads.
              </p>
            </div>

            <div className="p-8 bg-[#f8fafc] border border-[#e2e8f0] rounded-xs">
              <span className="text-4xl font-black text-[#0099ff] font-display block mb-2">15+</span>
              <h4 className="text-base font-bold text-[#0099ff] mb-2">Years Avg. Experience</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Senior project managers with deep background in US, Canadian, and European structural erection.
              </p>
            </div>

            <div className="p-8 bg-[#f8fafc] border border-[#e2e8f0] rounded-xs">
              <span className="text-4xl font-black text-[#e8250e] font-display block mb-2">24/7</span>
              <h4 className="text-base font-bold text-[#0099ff] mb-2">Dual-Shift Production</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Continuous overlap coverage across US Eastern, Central, Mountain, and Pacific working hours.
              </p>
            </div>

            <div className="p-8 bg-[#f8fafc] border border-[#e2e8f0] rounded-xs">
              <span className="text-4xl font-black text-[#0f172a] font-display block mb-2">100%</span>
              <h4 className="text-base font-bold text-[#0099ff] mb-2">Zero-Clash QA Standard</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Three-tier model validation and connection verification before releasing shop fabrication packages.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
