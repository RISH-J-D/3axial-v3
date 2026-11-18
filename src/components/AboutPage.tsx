import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, CheckCircle2, X } from 'lucide-react';

interface AboutPageProps {
  onNavigateHome: () => void;
  onOpenEnquire?: () => void;
}

interface PillarDetail {
  id: string;
  num: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  keyPoints: string[];
}

export const AboutPage: React.FC<AboutPageProps> = ({
  onNavigateHome,
  onOpenEnquire: _onOpenEnquire
}) => {
  const [selectedPillar, setSelectedPillar] = useState<PillarDetail | null>(null);

  const pillars: PillarDetail[] = [
    {
      id: '01',
      num: '01',
      title: 'AISC & CISC Rigorous Standards',
      shortDesc: 'All structural shop drawings adhere rigidly to AISC 360-16, AISC 341 seismic codes, and Canadian CISC S16 standards with zero tolerance for deviations.',
      fullDesc: 'Every project undertaken by 3-Axial adheres strictly to current American Institute of Steel Construction (AISC 360, 303, 341) and Canadian Institute of Steel Construction (CISC S16) codes. Our team incorporates local fabrication practices, erection clearances, shipping dimension limits, and shop welding standards into every single drawing sheet.',
      keyPoints: [
        'AISC Code of Standard Practice (AISC 303) compliance',
        'Seismic Provisions for Structural Steel Buildings (AISC 341)',
        'CISC S16 and Canadian national building code standards',
        'Certified weld symbols in full conformance with AWS D1.1'
      ]
    },
    {
      id: '02',
      num: '02',
      title: 'Tekla Structures 3D BIM Mastery',
      shortDesc: 'Zero-clash 3D model environment generating automated CNC files, bolt lists, and material callouts with extreme dimensional accuracy.',
      fullDesc: 'We construct exhaustive, parametric 3D building information models down to every washer, bolt hole, coped flange, and weld prep. By identifying spatial clashes and connection interference inside the virtual model, we completely eliminate costly field fixes and shop re-fabrication.',
      keyPoints: [
        'Parametric modeling with Tekla Structures v2024 and SDS2',
        'Automated generation of NC1, DXF, and DSTV files for CNC beam lines',
        'Precision Advance Bill of Materials (ABM) for early steel procurement',
        'IFC and BIM 360 clash coordination with architects and MEP teams'
      ]
    },
    {
      id: '03',
      num: '03',
      title: 'Dual-Shift 24/7 Global Delivery',
      shortDesc: 'Operating dual engineering shifts aligned directly with US Eastern (EST), Central (CST), Mountain (MST), and Pacific (PST) hours for real-time responsiveness.',
      fullDesc: 'Our engineering workforce operates synchronized dual shifts, allowing our North American and international clients to submit RFIs or project changes at the end of their workday and receive checked revisions the following morning.',
      keyPoints: [
        'Live overlap coverage across US EST, CST, MST, and PST business hours',
        'Rapid 24-hour turnaround on critical pre-construction RFIs',
        'Dedicated Project Lead assigned as single point of contact',
        'Secure cloud file transfer and automated revision tracking'
      ]
    },
    {
      id: '04',
      num: '04',
      title: 'In-House R&D & Plugin Innovation',
      shortDesc: 'Dedicated R&D team building custom Tekla Open API C# plugins to automate repetitive detailing, accelerate delivery, and eliminate manual errors.',
      fullDesc: 'To ensure unmatched speed and precision, our dedicated software development engineers build proprietary Tekla Open API plugins. These custom tools automate connection macros, drawing title block populations, and member labeling, increasing output speed by up to 35%.',
      keyPoints: [
        'Custom Tekla Open API C# toolsets and algorithmic macros',
        'Automated drawing numbering and bill of materials generation',
        'Automated checking scripts for bolt edge distances and gauge validation',
        'Direct API integration with fabricator ERP and nesting software'
      ]
    }
  ];

  return (
    <div className="w-full bg-white text-[#0f172a] flex flex-col">
      {/* ───────────────────────── 1. DGS HERO PHOTOGRAPHY BANNER ───────────────────────── */}
      <section className="relative w-full h-[320px] sm:h-[420px] md:h-[480px] flex items-center justify-center bg-[#0a0f1d] overflow-hidden">
        <img
          src="/steel-construction-bg.jpg"
          alt="About 3-Axial Steel Detailing"
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
            About Us
          </motion.h1>
          <p className="text-white/90 text-sm sm:text-base font-medium tracking-wide uppercase mt-3 drop-shadow max-w-2xl mx-auto">
            Precision Structural Steel Detailing & Connection Engineering Specialists
          </p>
        </div>
      </section>

      {/* ───────────────────────── 2. BREADCRUMBS & SECTION TITLE SUB-BAR ───────────────────────── */}
      <div className="w-full bg-[#f8fafc] border-b border-[#e2e8f0] py-6 px-4 sm:px-8">
        <div className="max-w-[1378px] mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#0099ff] tracking-tight">
            About 3-Axial Steel Detailing
          </h2>
          <div className="flex items-center gap-2 text-xs text-slate-500 mt-2 font-medium">
            <button
              onClick={onNavigateHome}
              className="hover:text-[#0099ff] transition-colors cursor-pointer"
            >
              Home
            </button>
            <span>/</span>
            <span className="text-slate-800 font-semibold">About Us</span>
          </div>
        </div>
      </div>

      {/* ───────────────────────── 3. DGS 2-COLUMN INTRO SECTION ───────────────────────── */}
      <section className="w-full py-16 sm:py-20 bg-white border-b border-[#e2e8f0]">
        <div className="max-w-[1378px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Column: Editorial Content */}
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs font-mono font-bold tracking-widest text-[#0099ff] uppercase block">
                Corporate Profile & Technical Rigor
              </span>
              <h3 className="text-3xl sm:text-4xl font-bold text-[#0f172a] leading-tight">
                Engineered for Precision, <br />
                <span className="text-[#0099ff]">Built for Fabrication</span>
                <span className="text-[#e8250e]">.</span>
              </h3>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Headquartered in Bengaluru, with engineering branch operations in Coimbatore (Tamil Nadu) and Austin (Texas, USA), <strong className="text-slate-900 font-semibold">3Axial Steel Detailing Services Pvt Ltd</strong> is a premier structural engineering firm specializing in 3D Tekla steel modeling, connection design, pre-bid estimation, and shop drawing production.
              </p>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                With a seasoned team of structural detailers, connection engineers, and BIM specialists, we serve steel fabricators, general contractors, and structural engineers across North America, Canada, Europe, and Asia.
              </p>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Driven by a passion to build with zero errors, we combine shop-floor fabrication understanding with modern computational tools. Every drawing sheet is audited through a 3-tier quality control protocol before release to eliminate costly shop rework and field modifications.
              </p>

              <div className="pt-4 flex flex-wrap gap-3">
                <span className="px-3.5 py-1.5 bg-[#f8fafc] border border-[#0099ff]/30 text-[#0099ff] text-xs font-mono font-semibold rounded-xs">
                  AISC Licensed Partner
                </span>
                <span className="px-3.5 py-1.5 bg-[#f8fafc] border border-[#e8250e]/30 text-[#e8250e] text-xs font-mono font-semibold rounded-xs">
                  Tekla Structures Certified
                </span>
                <span className="px-3.5 py-1.5 bg-[#f8fafc] border border-[#0099ff]/30 text-[#0099ff] text-xs font-mono font-semibold rounded-xs">
                  1200+ Delivered Projects
                </span>
                <span className="px-3.5 py-1.5 bg-[#f8fafc] border border-slate-300 text-slate-700 text-xs font-mono font-semibold rounded-xs">
                  CISC S16 Standard
                </span>
              </div>
            </div>

            {/* Right Column: 3D Tekla BIM Model Graphics */}
            <div className="lg:col-span-5 flex flex-col items-center justify-center">
              <div className="relative w-full rounded-sm overflow-hidden border border-[#e2e8f0] shadow-xl bg-slate-900 group">
                <img
                  src="/vision-3d.png"
                  alt="3D Tekla Structural Model"
                  className="w-full h-auto object-cover transform group-hover:scale-102 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-4 left-4 right-4 text-white text-xs font-mono">
                  <div className="flex items-center justify-between">
                    <span className="text-[#0099ff] font-bold">Tekla Structures 3D Environment</span>
                    <span className="bg-[#e8250e] text-white px-2 py-0.5 rounded-xs text-[10px]">Zero Clash</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ───────────────────────── 4. SIGNATURE NUMBERED PILLARS GRID (DGS UI) ───────────────────────── */}
      <section className="w-full py-16 sm:py-20 bg-[#f8fafc] border-b border-[#e2e8f0]">
        <div className="max-w-[1378px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-2xl sm:text-3xl font-bold text-[#0099ff] tracking-tight">
              Why Global Fabricators Partner with 3-Axial
            </h3>
            <div className="w-16 h-1 bg-[#0099ff] mx-auto mt-2 mb-4" />
            <p className="text-slate-600 text-sm sm:text-base max-w-2xl mx-auto">
              Our combination of structural engineering rigor, computational modeling tools, and dual-shift responsiveness ensures reliable fabrication packages.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {pillars.map((pillar) => (
              <div
                key={pillar.id}
                className="flex flex-col justify-between text-center p-8 bg-white border border-[#e2e8f0] hover:border-[#0099ff] hover:shadow-lg transition-all rounded-sm group"
              >
                <div>
                  <div className="text-5xl font-black text-[#0f172a] group-hover:text-[#0099ff] transition-colors mb-4 font-display">
                    {pillar.num}
                  </div>
                  <h4 className="text-base font-bold text-[#0099ff] mb-3 leading-snug">
                    {pillar.title}
                  </h4>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-6">
                    {pillar.shortDesc}
                  </p>
                </div>

                <div className="pt-2">
                  <button
                    onClick={() => setSelectedPillar(pillar)}
                    className="inline-flex items-center gap-1.5 text-xs font-bold font-mono tracking-wider text-[#0099ff] group-hover:text-[#e8250e] transition-colors cursor-pointer uppercase"
                  >
                    <span>Read More</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ───────────────────────── 5. STATS & CAPABILITIES BAR ───────────────────────── */}
      <section className="w-full py-14 bg-white border-b border-[#e2e8f0]">
        <div className="max-w-[1378px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="p-6 bg-[#f8fafc] border border-[#e2e8f0] rounded-xs">
              <span className="text-3xl sm:text-4xl font-black text-[#0f172a] font-display block">1200+</span>
              <span className="text-xs sm:text-sm text-[#0099ff] font-mono font-semibold block mt-1">Projects Delivered</span>
              <span className="text-[11px] text-slate-500 mt-1 block">Across US, Canada & Global</span>
            </div>

            <div className="p-6 bg-[#f8fafc] border border-[#e2e8f0] rounded-xs">
              <span className="text-3xl sm:text-4xl font-black text-[#0099ff] font-display block">5+</span>
              <span className="text-xs sm:text-sm text-[#0099ff] font-mono font-semibold block mt-1">Countries Served</span>
              <span className="text-[11px] text-slate-500 mt-1 block">USA, Canada, UK, Europe, Australia</span>
            </div>

            <div className="p-6 bg-[#f8fafc] border border-[#e2e8f0] rounded-xs">
              <span className="text-3xl sm:text-4xl font-black text-[#0f172a] font-display block">120+</span>
              <span className="text-xs sm:text-sm text-[#0099ff] font-mono font-semibold block mt-1">Tekla Specialists</span>
              <span className="text-[11px] text-slate-500 mt-1 block">Certified structural modelers</span>
            </div>

            <div className="p-6 bg-[#f8fafc] border border-[#e2e8f0] rounded-xs">
              <span className="text-3xl sm:text-4xl font-black text-[#e8250e] font-display block">24/7</span>
              <span className="text-xs sm:text-sm text-[#0099ff] font-mono font-semibold block mt-1">Dual-Shift Support</span>
              <span className="text-[11px] text-slate-500 mt-1 block">Full EST, CST, MST, PST coverage</span>
            </div>
          </div>
        </div>
      </section>

      {/* ───────────────────────── 6. GLOBAL OFFICES SECTION WITH GOOGLE MAPS ───────────────────────── */}
      <section className="w-full py-16 sm:py-20 bg-[#f8fafc]">
        <div className="max-w-[1378px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h3 className="text-2xl sm:text-3xl font-bold text-[#0099ff] tracking-tight">
              Our Engineering Centers
            </h3>
            <div className="w-16 h-1 bg-[#0099ff] mx-auto mt-2 mb-4" />
            <p className="text-slate-600 text-sm sm:text-base max-w-xl mx-auto">
              Strategically positioned across three hubs to provide continuous detailing coverage and local project coordination.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* 1. Global Headquarters (Bengaluru) */}
            <div className="bg-white p-7 border border-[#e2e8f0] hover:border-[#0099ff] rounded-xs shadow-xs transition-all flex flex-col justify-between group">
              <div>
                <div className="text-xs font-mono font-bold text-[#0099ff] uppercase mb-2">Global Headquarters</div>
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
                  className="w-full inline-flex items-center justify-center gap-1.5 bg-[#f8fafc] hover:bg-[#0099ff] text-slate-800 hover:text-white border border-[#e2e8f0] hover:border-[#0099ff] py-2 px-3 text-xs font-mono font-bold uppercase tracking-wider rounded-xs transition-colors"
                >
                  <span>View on Google Maps</span>
                  <span className="text-[11px]">↗</span>
                </a>
              </div>
            </div>

            {/* 2. Branch Office (Coimbatore) */}
            <div className="bg-white p-7 border border-[#e2e8f0] hover:border-emerald-600 rounded-xs shadow-xs transition-all flex flex-col justify-between group">
              <div>
                <div className="text-xs font-mono font-bold text-emerald-600 uppercase mb-2">Branch Office (India)</div>
                <h4 className="text-lg font-bold text-[#0f172a] mb-2 group-hover:text-emerald-600 transition-colors">
                  Coimbatore Engineering Branch
                </h4>
                <address className="not-italic text-xs text-slate-600 leading-relaxed space-y-0.5 mb-4 font-sans">
                  <div>Door No 438 A, 1st Floor, Kamarajar Rd,</div>
                  <div>Peelamedu, Lakshmipuram,</div>
                  <div className="font-semibold text-slate-800">Coimbatore, Tamil Nadu - 641004, India</div>
                </address>
                <div className="text-xs font-mono text-slate-700 mb-4 pt-2 border-t border-slate-100">
                  <span>Schedule: </span>
                  <span className="text-emerald-700 font-semibold">24/7 Dual-Shift Schedule</span>
                </div>
              </div>

              <div className="pt-3 border-t border-[#e2e8f0]">
                <a
                  href="https://maps.app.goo.gl/gKHvPtPitJQvQEdZ9?g_st=aw"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-1.5 bg-[#f8fafc] hover:bg-emerald-600 text-slate-800 hover:text-white border border-[#e2e8f0] hover:border-emerald-600 py-2 px-3 text-xs font-mono font-bold uppercase tracking-wider rounded-xs transition-colors"
                >
                  <span>View on Google Maps</span>
                  <span className="text-[11px]">↗</span>
                </a>
              </div>
            </div>

            {/* 3. USA Branch Office (Austin, TX) */}
            <div className="bg-white p-7 border border-[#e2e8f0] hover:border-[#e8250e] rounded-xs shadow-xs transition-all flex flex-col justify-between group">
              <div>
                <div className="text-xs font-mono font-bold text-[#e8250e] uppercase mb-2">USA Branch Office</div>
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
                  className="w-full inline-flex items-center justify-center gap-1.5 bg-[#f8fafc] hover:bg-[#e8250e] text-slate-800 hover:text-white border border-[#e2e8f0] hover:border-[#e8250e] py-2 px-3 text-xs font-mono font-bold uppercase tracking-wider rounded-xs transition-colors"
                >
                  <span>View on Google Maps</span>
                  <span className="text-[11px]">↗</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ───────────────────────── 7. MODAL POPUP FOR "READ MORE" ───────────────────────── */}
      <AnimatePresence>
        {selectedPillar && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              className="bg-white max-w-xl w-full p-6 sm:p-8 rounded-sm shadow-2xl border-t-4 border-[#0099ff] relative"
            >
              <button
                onClick={() => setSelectedPillar(null)}
                className="absolute top-4 right-4 text-slate-400 hover:text-slate-800 transition-colors p-1 cursor-pointer"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="text-4xl font-black text-[#0f172a] font-display mb-2">
                {selectedPillar.num}
              </div>

              <h4 className="text-xl font-bold text-[#0099ff] mb-4">
                {selectedPillar.title}
              </h4>

              <p className="text-slate-700 text-sm leading-relaxed mb-6">
                {selectedPillar.fullDesc}
              </p>

              <div className="space-y-2 mb-6">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-900 block">
                  Core Implementation Standards:
                </span>
                {selectedPillar.keyPoints.map((pt, i) => (
                  <div key={i} className="flex items-start gap-2 text-xs text-slate-600">
                    <CheckCircle2 className="w-4 h-4 text-[#0099ff] shrink-0 mt-0.5" />
                    <span>{pt}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4 border-t border-[#e2e8f0] flex justify-end">
                <button
                  onClick={() => setSelectedPillar(null)}
                  className="bg-[#0f172a] hover:bg-[#1e293b] text-white text-xs font-mono font-bold tracking-wider px-5 py-2.5 uppercase transition-colors rounded-xs cursor-pointer"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};
