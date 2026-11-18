import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, CheckCircle2, X } from 'lucide-react';
import { AXIAL_SERVICES } from '../data/siteData';

interface ServicesPageProps {
  onNavigateHome?: () => void;
  onNavigateTab?: (tabId: string) => void;
  onOpenEnquire?: () => void;
  onShowToast?: (msg: string) => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({
  onNavigateTab,
  onOpenEnquire
}) => {
  const [selectedServiceId, setSelectedServiceId] = useState<string | null>(null);

  const selectedService = AXIAL_SERVICES.find(s => s.id === selectedServiceId) || null;

  const handleContactClick = () => {
    if (onNavigateTab) {
      onNavigateTab('contact');
    } else if (onOpenEnquire) {
      onOpenEnquire();
    }
  };

  return (
    <div className="w-full bg-white text-[#0f172a] flex flex-col">
      {/* ───────────────────────── 1. DGS HERO PHOTOGRAPHY BANNER ───────────────────────── */}
      <section className="relative w-full h-[320px] sm:h-[420px] md:h-[480px] flex items-center justify-center bg-[#0a0f1d] overflow-hidden">
        <img
          src="/steel-construction-bg.jpg"
          alt="Structural Steel Services"
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
            Structural Steel
          </motion.h1>
          <p className="text-white/90 text-sm sm:text-base font-medium tracking-wide uppercase mt-3 drop-shadow max-w-2xl mx-auto">
            Full-Spectrum Structural Steel Detailing & Connection Engineering Solutions
          </p>
        </div>
      </section>

      {/* ───────────────────────── 2. BREADCRUMBS & SECTION TITLE SUB-BAR ───────────────────────── */}
      <div className="w-full bg-[#f8fafc] border-b border-[#e2e8f0] py-6 px-4 sm:px-8">
        <div className="max-w-[1378px] mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#0099ff] tracking-tight">
            Structural Steel
          </h2>
          <div className="flex items-center gap-2 text-xs text-slate-500 mt-2 font-medium">
            <button
              onClick={() => onNavigateTab && onNavigateTab('home')}
              className="hover:text-[#0099ff] transition-colors cursor-pointer"
            >
              Home
            </button>
            <span>/</span>
            <span className="text-slate-800 font-semibold">Structural Steel</span>
          </div>
        </div>
      </div>

      {/* ───────────────────────── 3. DGS SIGNATURE 2-COLUMN INTRO SECTION ───────────────────────── */}
      <section className="w-full py-16 sm:py-20 bg-white border-b border-[#e2e8f0]">
        <div className="max-w-[1378px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Column: Editorial Content matching DGS UI */}
            <div className="lg:col-span-7 space-y-5">
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Steel Detailing services from <strong className="text-slate-900 font-semibold">3-Axial</strong> use the state-of-the-art technical tools and solutions. Our services are tailored to our customers' needs in an efficient and transparent manner. Majority of our offerings are CAD and BIM based with advanced 3D Modeling. 3-Axial believes in using the right technology tools with highly skilled personnel to deliver optimum solutions to customers in a closed loop style.
              </p>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Our Steel Detailing services help our clients to simplify project coordination, improve delivery schedules, and increase overall project quality. Driven by a passion to build a better tomorrow, we strive to go above and beyond customer expectations. With emphasis on research, and focus on quality, we offer highly innovative steel detailing solutions to our valued customers. We commit to delivering quality solutions on time and every time.
              </p>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                As a provider of customer-centric structural consulting and engineering services, we offer you a seamless one-stop experience alongside high quality, AISC/CISC compliance, and timely delivery across North America, Europe, and Australia.
              </p>

              <div className="pt-3 flex flex-wrap gap-3">
                <span className="px-3.5 py-1.5 bg-[#f8fafc] border border-[#0099ff]/30 text-[#0099ff] text-xs font-mono font-semibold rounded-xs">
                  Tekla Structures v2024
                </span>
                <span className="px-3.5 py-1.5 bg-[#f8fafc] border border-[#e8250e]/30 text-[#e8250e] text-xs font-mono font-semibold rounded-xs">
                  AISC 360 & 341 Seismic
                </span>
                <span className="px-3.5 py-1.5 bg-[#f8fafc] border border-slate-300 text-slate-700 text-xs font-mono font-semibold rounded-xs">
                  CISC S16 Standard
                </span>
                <span className="px-3.5 py-1.5 bg-[#f8fafc] border border-slate-300 text-slate-700 text-xs font-mono font-semibold rounded-xs">
                  Dual-Shift 24/7 Response
                </span>
              </div>
            </div>

            {/* Right Column: 3D Tekla BIM Structural Model Render */}
            <div className="lg:col-span-5 flex flex-col items-center justify-center">
              <div className="relative w-full rounded-sm overflow-hidden border border-[#e2e8f0] shadow-xl bg-slate-900 group">
                <img
                  src="/vision-3d.png"
                  alt="3D Tekla Structural BIM Model"
                  className="w-full h-auto object-cover transform group-hover:scale-102 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-4 left-4 right-4 text-white text-xs font-mono">
                  <div className="flex items-center justify-between">
                    <span className="text-[#0099ff] font-bold">Tekla Structures 3D BIM Model</span>
                    <span className="bg-[#e8250e] text-white px-2 py-0.5 rounded-xs text-[10px]">Zero Clash</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ───────────────────────── 4. SIGNATURE NUMBERED SERVICES GRID (DGS UI) ───────────────────────── */}
      <section className="w-full py-16 sm:py-20 bg-[#f8fafc] border-b border-[#e2e8f0]">
        <div className="max-w-[1378px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-2xl sm:text-3xl font-bold text-[#0099ff] tracking-tight">
              Our Structural Engineering Offerings
            </h3>
            <div className="w-16 h-1 bg-[#0099ff] mx-auto mt-2 mb-4" />
            <p className="text-slate-600 text-sm sm:text-base max-w-2xl mx-auto">
              Click any offering to review comprehensive technical deliverables, CNC beam line file types, and code compliance.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {AXIAL_SERVICES.map((srv, idx) => {
              const numStr = String(idx + 1).padStart(2, '0');
              return (
                <div
                  key={srv.id}
                  className="flex flex-col justify-between text-center p-8 bg-white border border-[#e2e8f0] hover:border-[#0099ff] hover:shadow-lg transition-all rounded-sm group"
                >
                  <div>
                    <div className="text-5xl font-black text-[#0f172a] group-hover:text-[#0099ff] transition-colors mb-4 font-display">
                      {numStr}
                    </div>
                    <h4 className="text-base font-bold text-[#0099ff] mb-3 leading-snug">
                      {srv.title}
                    </h4>
                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-6">
                      {srv.shortDesc}
                    </p>
                  </div>

                  <div className="pt-2">
                    <button
                      onClick={() => setSelectedServiceId(srv.id)}
                      className="inline-flex items-center gap-1.5 text-xs font-bold font-mono tracking-wider text-[#0099ff] group-hover:text-[#e8250e] transition-colors cursor-pointer uppercase"
                    >
                      <span>Read More</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ───────────────────────── 5. FULL DETAIL EXPANSIONS ───────────────────────── */}
      <section className="w-full py-16 sm:py-24 bg-white">
        <div className="max-w-[1378px] mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h3 className="text-2xl sm:text-3xl font-bold text-[#0f172a]">
              Engineering Specifications & Standards
            </h3>
            <p className="text-slate-600 text-sm mt-2">
              Every detail drawing is engineered to strict North American and international building codes.
            </p>
          </div>

          {AXIAL_SERVICES.map((service, index) => {
            const isReversed = index % 2 !== 0;
            return (
              <div
                key={service.id}
                id={service.id}
                className="p-8 sm:p-10 bg-[#f8fafc] border border-[#e2e8f0] rounded-sm shadow-sm"
              >
                <div className={`grid grid-cols-1 lg:grid-cols-12 gap-10 items-center ${isReversed ? 'lg:flex-row-reverse' : ''}`}>
                  <div className={`lg:col-span-7 space-y-4 ${isReversed ? 'lg:order-2' : ''}`}>
                    <div className="flex items-center gap-3">
                      <span className="text-3xl font-black text-[#0099ff] font-display">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                      <span className="text-xs font-mono font-bold text-[#e8250e] uppercase tracking-wider">
                        {service.codeStandard}
                      </span>
                    </div>

                    <h4 className="text-2xl font-bold text-[#0f172a]">
                      {service.title}
                    </h4>

                    <p className="text-slate-700 text-sm leading-relaxed">
                      {service.fullDesc}
                    </p>

                    <div className="pt-2">
                      <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-800 block mb-2">
                        Deliverables & Features:
                      </span>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {service.features.map((item, i) => (
                          <div key={i} className="flex items-start gap-2 text-xs text-slate-600">
                            <CheckCircle2 className="w-4 h-4 text-[#0099ff] shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className={`lg:col-span-5 ${isReversed ? 'lg:order-1' : ''}`}>
                    <div className="p-6 bg-white border border-[#e2e8f0] rounded-xs space-y-4 shadow-xs">
                      <span className="text-xs font-mono font-bold text-slate-500 uppercase block border-b border-[#e2e8f0] pb-2">
                        Technical Scope Highlights
                      </span>
                      <div className="space-y-3 text-xs">
                        <div>
                          <span className="text-slate-500 block">Applicable Building Codes:</span>
                          <span className="font-mono font-semibold text-slate-900">{service.codeStandard}</span>
                        </div>
                        <div>
                          <span className="text-slate-500 block">Compatible Software:</span>
                          <span className="font-mono font-semibold text-[#0099ff]">Tekla Structures v2024 · SDS2 · AutoCAD</span>
                        </div>
                        <div>
                          <span className="text-slate-500 block">Turnaround Protocol:</span>
                          <span className="font-mono font-semibold text-[#e8250e]">24/7 Dual-Shift Rapid Release</span>
                        </div>
                      </div>

                      <div className="pt-3 border-t border-[#e2e8f0]">
                        <button
                          onClick={handleContactClick}
                          className="w-full bg-[#0f172a] hover:bg-[#0099ff] text-white font-mono font-bold text-xs uppercase py-2.5 rounded-xs transition-colors cursor-pointer"
                        >
                          Request Quotation for this Scope
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ───────────────────────── 6. SERVICE DETAIL MODAL ───────────────────────── */}
      <AnimatePresence>
        {selectedService && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-white max-w-xl w-full p-6 sm:p-8 rounded-sm shadow-2xl border-t-4 border-[#0099ff] relative"
            >
              <button
                onClick={() => setSelectedServiceId(null)}
                className="absolute top-4 right-4 text-slate-400 hover:text-slate-800 transition-colors p-1 cursor-pointer"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>

              <span className="text-xs font-mono font-bold text-[#e8250e] uppercase block mb-1">
                {selectedService.codeStandard}
              </span>

              <h4 className="text-2xl font-bold text-[#0f172a] mb-3">
                {selectedService.title}
              </h4>

              <p className="text-slate-700 text-sm leading-relaxed mb-6">
                {selectedService.fullDesc}
              </p>

              <div className="space-y-2 mb-6">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-800 block">
                  Included Deliverables & Features:
                </span>
                {selectedService.features.map((item, i) => (
                  <div key={i} className="flex items-start gap-2 text-xs text-slate-600">
                    <CheckCircle2 className="w-4 h-4 text-[#0099ff] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4 border-t border-[#e2e8f0] flex items-center justify-between">
                <button
                  onClick={() => {
                    setSelectedServiceId(null);
                    handleContactClick();
                  }}
                  className="bg-[#0099ff] hover:bg-[#007acc] text-white text-xs font-mono font-bold tracking-wider px-5 py-2.5 uppercase transition-colors rounded-xs cursor-pointer shadow-xs"
                >
                  Request Quote
                </button>
                <button
                  onClick={() => setSelectedServiceId(null)}
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
