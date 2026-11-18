import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { AXIAL_SERVICES, AXIAL_PROJECTS } from '../data/siteData';
import type { Project } from '../data/siteData';

interface HomeSectionProps {
  onNavigateTab: (tabId: string) => void;
  onOpenEnquire?: () => void;
  onShowToast?: (msg: string) => void;
}

const STANDARDS_TICKER = [
  'AISC 303 & 360',
  'CISC Standards',
  'MM Standards',
  'Eurocode 3',
  'AS 4100',
  'BS 5950',
  'Tekla Structures v2024',
  'SDS2 by ALLPLAN',
  'ADSC Connection Design',
  'Advance Bill of Materials',
  'Joist & Deck Detailing',
  'Miscellaneous Metals',
  'Pre-Engineered Buildings'
];

export const HomeSection: React.FC<HomeSectionProps> = ({
  onNavigateTab,
  onOpenEnquire,
  onShowToast
}) => {
  const [selectedService, setSelectedService] = useState<string | null>(null);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // Contact form state
  const [formData, setFormData] = useState({
    fname: '',
    lname: '',
    email: '',
    phone: '',
    projectType: 'Structural Steel Detailing',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setFormSubmitted(true);
      if (onShowToast) {
        onShowToast('Inquiry received! Our structural engineering team will contact you shortly.');
      }
    }, 800);
  };

  const industriesList = [
    'Heavy Industrial Buildings',
    'Multistory Structures',
    'Churches & Theaters',
    'Schools & Universities',
    'Power Plants & Substations',
    'Miscellaneous Metals',
    'Complex Commercial Buildings',
    'Hospitals & Medical Buildings',
    'Shopping Centers & Arenas',
    'Bridges & Civil Infrastructure'
  ];

  return (
    <div className="w-full flex flex-col bg-white text-[#0f172a]">
      {/* ───────────────────────── 1. HERO VIDEO BANNER WITH EXACT SPECIFIED CONTENT ───────────────────────── */}
      <section className="relative w-full min-h-[640px] lg:min-h-[720px] flex flex-col justify-between bg-slate-950 overflow-hidden border-b border-[#0099ff]/30">
        {/* Autoplay Background Video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          poster="https://www.3axialsteeldetail.com/wp-content/uploads/2025/07/Untitled-1280-x-600-px.jpg"
          className="absolute inset-0 w-full h-full object-cover opacity-50 z-0 pointer-events-none"
        >
          <source src="https://www.3axialsteeldetail.com/wp-content/uploads/2025/08/Untitled-1280-x-600-px.mp4" type="video/mp4" />
          Your browser does not support HTML5 video.
        </video>

        {/* Cinematic Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/90 via-slate-950/55 to-slate-950/95 z-10 pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_90%_60%_at_50%_35%,rgba(0,153,255,0.25),transparent_70%)] z-10 pointer-events-none" />

        {/* Hero Content Container */}
        <div className="relative z-20 max-w-5xl w-full mx-auto px-6 sm:px-8 text-center flex-grow flex flex-col items-center justify-center pt-14 pb-10">
          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-white text-3xl sm:text-5xl md:text-6xl lg:text-[68px] font-black leading-[1.08] tracking-tight uppercase mb-4 drop-shadow-xl"
          >
            Precision steel detailing,<br />
            <span className="text-[#0099ff]">engineered for fabrication</span>
            <span className="text-[#e8250e]">.</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-slate-100 text-sm sm:text-lg md:text-xl max-w-3xl mb-8 sm:mb-10 leading-relaxed font-normal drop-shadow"
          >
            3D Tekla modelling, connection design, pre-bid estimation and shop-ready drawings for fabricators and contractors across North America, Europe and Australia.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 mb-10"
          >
            <button
              onClick={() => onOpenEnquire ? onOpenEnquire() : onNavigateTab('contact')}
              className="bg-[#e8250e] hover:bg-[#cf1f0a] text-white font-bold font-mono tracking-wider px-7 sm:px-9 py-3.5 sm:py-4 uppercase text-sm sm:text-base rounded-xs shadow-xl transition-all cursor-pointer transform hover:-translate-y-0.5"
            >
              Request a Quote
            </button>

            <button
              onClick={() => onNavigateTab('projects')}
              className="bg-[#0099ff] hover:bg-[#007acc] text-white font-bold font-mono tracking-wider px-7 sm:px-9 py-3.5 sm:py-4 uppercase text-sm sm:text-base rounded-xs shadow-xl transition-all cursor-pointer transform hover:-translate-y-0.5"
            >
              View Our Projects
            </button>
          </motion.div>

          {/* 4 Stats Cards Row Directly on Hero */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="w-full max-w-4xl grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 pt-6 border-t border-white/20"
          >
            <div className="p-4 sm:p-5 rounded-xs bg-slate-900/85 backdrop-blur-md border border-white/15 text-center shadow-lg">
              <span className="block text-white font-black text-2xl sm:text-3xl font-display">1200+</span>
              <span className="text-xs text-slate-200 font-mono font-medium block mt-1">Projects delivered</span>
            </div>

            <div className="p-4 sm:p-5 rounded-xs bg-slate-900/85 backdrop-blur-md border border-white/15 text-center shadow-lg">
              <span className="block text-[#0099ff] font-black text-2xl sm:text-3xl font-display">5+</span>
              <span className="text-xs text-slate-200 font-mono font-medium block mt-1">Countries served</span>
            </div>

            <div className="p-4 sm:p-5 rounded-xs bg-slate-900/85 backdrop-blur-md border border-white/15 text-center shadow-lg">
              <span className="block text-white font-black text-lg sm:text-xl font-display">AISC · CISC · MM</span>
              <span className="text-xs text-slate-200 font-mono font-medium block mt-1">Detailing standards</span>
            </div>

            <div className="p-4 sm:p-5 rounded-xs bg-slate-900/85 backdrop-blur-md border border-white/15 text-center shadow-lg">
              <span className="block text-[#e8250e] font-black text-2xl sm:text-3xl font-display">24/7</span>
              <span className="text-xs text-slate-200 font-mono font-medium block mt-1">Dual-shift support</span>
            </div>
          </motion.div>
        </div>

        {/* Marquee Standards Ticker Docked at Bottom of Hero */}
        <div className="relative z-20 w-full shrink-0 bg-slate-950/95 backdrop-blur-md border-t border-white/10 py-3 overflow-hidden marquee-wrap">
          <div className="animate-marquee-ltr gap-10 items-center">
            {[...STANDARDS_TICKER, ...STANDARDS_TICKER, ...STANDARDS_TICKER].map((item, idx) => (
              <span key={idx} className="inline-flex items-center gap-3 text-xs sm:text-sm font-mono font-semibold text-slate-200 tracking-wider uppercase whitespace-nowrap">
                <span className="w-2 h-2 rounded-full bg-[#0099ff] shrink-0" />
                {item}
              </span>
            ))}
          </div>
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
              onClick={() => onNavigateTab('home')}
              className="hover:text-[#0099ff] transition-colors"
            >
              Home
            </button>
            <span>/</span>
            <span className="text-slate-800 font-semibold">Structural Steel</span>
          </div>
        </div>
      </div>

      {/* ───────────────────────── 3. TWO-COLUMN INTRO SECTION ───────────────────────── */}
      <section className="w-full py-16 sm:py-20 bg-white">
        <div className="max-w-[1378px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left: Editorial Content */}
            <div className="lg:col-span-7 space-y-6 text-slate-700 text-sm sm:text-base leading-relaxed">
              <p className="text-lg sm:text-xl font-medium text-[#0f172a] leading-relaxed">
                Steel Detailing services from <strong className="text-[#0099ff]">3-Axial</strong> use the state-of-the-art technical tools and solutions. Our services are tailored to our customers’ needs in an efficient and transparent manner.
              </p>
              <p>
                Majority of our offerings are CAD-based with 3D Tekla Modeling. 3-Axial believes in using the right technology tools with skilled personnel to deliver optimum solutions to customers in a closed-loop style. Our Steel Detailing services help our clients simplify project coordination, improve delivery schedules, and increase overall project quality.
              </p>
              <p>
                Driven by a passion to build a better tomorrow, we strive to go above and beyond customer expectations. With emphasis on engineering precision and focus on quality, we offer highly innovative steel detailing solutions to our valued fabricators and general contractors. We commit to delivering quality solutions on time and every time.
              </p>
              <p className="text-slate-600 font-medium border-l-3 border-[#0099ff] pl-4 italic">
                3-Axial has the breadth and depth of expertise to respond to the most technically challenging and time-critical projects. Building strong, long-term relationships with customers is our top priority.
              </p>

              <div className="pt-2 flex flex-wrap gap-4">
                <button
                  onClick={() => onNavigateTab('services')}
                  className="bg-[#0099ff] hover:bg-[#007acc] text-white text-xs font-bold font-mono tracking-wider px-6 py-3 uppercase transition-colors rounded-xs shadow-sm cursor-pointer"
                >
                  EXPLORE DETAILED CAPABILITIES →
                </button>
                <button
                  onClick={() => onOpenEnquire ? onOpenEnquire() : onNavigateTab('contact')}
                  className="border border-[#0f172a] hover:bg-[#0f172a] hover:text-white text-[#0f172a] text-xs font-bold font-mono tracking-wider px-6 py-3 uppercase transition-colors rounded-xs cursor-pointer"
                >
                  REQUEST ESTIMATE
                </button>
              </div>
            </div>

            {/* Right: 3D BIM Model Render */}
            <div className="lg:col-span-5">
              <div className="relative bg-white border border-[#e2e8f0] p-4 shadow-xl rounded-sm group overflow-hidden">
                <img
                  src="/vision-3d.png"
                  alt="3D BIM Structural Steel Model Wireframe"
                  className="w-full h-auto object-contain mx-auto transition-transform duration-500 group-hover:scale-103"
                  onError={(e) => {
                    e.currentTarget.src = '/steel-construction-bg.jpg';
                  }}
                />
                <div className="mt-3 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] font-mono text-slate-500">
                  <span>TEKLA STRUCTURES 3D BIM</span>
                  <span className="text-[#0099ff] font-bold">LOD 400</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ───────────────────────── 4. CNC & DATA FORMATS HIGHLIGHT STRIP ───────────────────────── */}
      <section className="w-full py-10 bg-[#f8fafc] border-y border-[#e2e8f0] text-center">
        <div className="max-w-[1200px] mx-auto px-4">
          <h3 className="text-lg sm:text-2xl font-bold text-[#0099ff] leading-snug">
            We provide NC files, KISS files, ABM’s for Fabtrol / CNC machines and PEDDIMAT & DSTV formats as well
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 mt-2 font-medium">
            Seamless integration with modern beam drilling lines, automated plate processors, and shop management software.
          </p>
        </div>
      </section>

      {/* ───────────────────────── 5. SIGNATURE NUMBERED SERVICES GRID ───────────────────────── */}
      <section className="w-full py-20 sm:py-24 bg-white border-b border-[#e2e8f0]">
        <div className="max-w-[1378px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#0099ff] tracking-tight">
              Structural Steel Services
            </h2>
            <div className="w-16 h-1 bg-[#0099ff] mx-auto mt-3 mb-4" />
            <p className="text-slate-600 text-sm sm:text-base max-w-2xl mx-auto">
              Our comprehensive range of engineering and detailing services adheres to the highest AISC, NISD, and international standards.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
            {AXIAL_SERVICES.slice(0, 8).map((srv, idx) => {
              const numStr = String(idx + 1).padStart(2, '0');
              return (
                <div
                  key={srv.id}
                  className="flex flex-col justify-between text-center p-6 sm:p-8 bg-white border border-[#e2e8f0] hover:border-[#0099ff] hover:shadow-lg transition-all duration-300 rounded-sm group"
                >
                  <div>
                    <div className="text-5xl sm:text-6xl font-black text-[#0f172a] group-hover:text-[#0099ff] transition-colors mb-4 font-display">
                      {numStr}
                    </div>

                    <h3 className="text-base sm:text-lg font-bold text-[#0099ff] mb-3 leading-snug">
                      {srv.title}
                    </h3>

                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-6 font-normal">
                      {srv.shortDesc}
                    </p>
                  </div>

                  <div className="pt-2 border-t border-slate-100">
                    <button
                      onClick={() => setSelectedService(srv.id)}
                      className="text-xs font-bold text-[#0f172a] group-hover:text-[#0099ff] transition-colors uppercase tracking-wider inline-flex items-center gap-1 cursor-pointer"
                    >
                      <span>Read More</span>
                      <span className="text-[10px]">→</span>
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ───────────────────────── 6. INDUSTRIES SECTION ───────────────────────── */}
      <section className="w-full py-20 bg-[#f8fafc] border-b border-[#e2e8f0]">
        <div className="max-w-[1378px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#0099ff] tracking-tight">
              Industries We Serve
            </h2>
            <div className="w-16 h-1 bg-[#0099ff] mx-auto mt-3 mb-4" />
            <p className="text-slate-600 text-sm sm:text-base max-w-3xl mx-auto">
              Industries are becoming larger and more sophisticated. Technology & engineering remain at the center of these industries, catering to the global demand for high quality structural steel products at great speed.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-2.5 max-w-4xl mx-auto mb-16">
            {industriesList.map((item, i) => (
              <span
                key={i}
                className="px-4 py-2 bg-white border border-[#e2e8f0] text-xs font-semibold text-slate-800 hover:border-[#0099ff] hover:text-[#0099ff] transition-colors rounded-xs shadow-2xs"
              >
                {item}
              </span>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div className="p-6 bg-white border border-[#e2e8f0] rounded-sm">
              <div className="text-5xl font-black text-[#0f172a] mb-3 font-display">01</div>
              <h4 className="text-base font-bold text-[#0099ff] mb-2">Heavy Industrial & Plants</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Refineries, processing mills, pipe racks, vibrating equipment frames, and hoppers engineered for heavy industrial loads.
              </p>
            </div>

            <div className="p-6 bg-white border border-[#e2e8f0] rounded-sm">
              <div className="text-5xl font-black text-[#0f172a] mb-3 font-display">02</div>
              <h4 className="text-base font-bold text-[#0099ff] mb-2">Commercial Towers</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Multi-story composite office buildings, high-rise residential towers, and podium structures with seismic moment connections.
              </p>
            </div>

            <div className="p-6 bg-white border border-[#e2e8f0] rounded-sm">
              <div className="text-5xl font-black text-[#0f172a] mb-3 font-display">03</div>
              <h4 className="text-base font-bold text-[#0099ff] mb-2">Power & Energy</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                High-voltage electrical substations, transmission gantries, renewable energy structures, and battery gigafactories.
              </p>
            </div>

            <div className="p-6 bg-white border border-[#e2e8f0] rounded-sm">
              <div className="text-5xl font-black text-[#0f172a] mb-3 font-display">04</div>
              <h4 className="text-base font-bold text-[#0099ff] mb-2">Healthcare & Public</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Hospitals, university engineering complexes, acoustic concert halls, and monumental public architecture with AESS guidelines.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ───────────────────────── 7. FEATURED PROJECTS SHOWCASE ───────────────────────── */}
      <section className="w-full py-20 bg-white border-b border-[#e2e8f0]">
        <div className="max-w-[1378px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#0099ff] tracking-tight">
                Featured Projects
              </h2>
              <div className="w-16 h-1 bg-[#0099ff] mt-2 mb-3" />
              <p className="text-slate-600 text-sm max-w-xl">
                As a dedicated engineering consultancy, we have deep experience working on all types of projects—from small to large, simple to highly complex.
              </p>
            </div>
            <button
              onClick={() => onNavigateTab('projects')}
              className="bg-[#0f172a] hover:bg-[#0099ff] text-white text-xs font-bold font-mono tracking-wider px-5 py-3 uppercase transition-colors cursor-pointer self-start sm:self-auto"
            >
              VIEW ALL PROJECTS →
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {AXIAL_PROJECTS.slice(0, 6).map((proj) => (
              <div
                key={proj.id}
                onClick={() => setSelectedProject(proj)}
                className="bg-white border border-[#e2e8f0] hover:border-[#0099ff] hover:shadow-lg transition-all cursor-pointer group rounded-sm overflow-hidden flex flex-col"
              >
                <div className="relative aspect-[16/10] bg-[#0a0f1d] overflow-hidden">
                  <img
                    src={proj.image}
                    alt={proj.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    onError={(e) => {
                      e.currentTarget.src = '/steel-construction-bg.jpg';
                    }}
                  />
                  <div className="absolute top-2 right-2 bg-[#0f172a]/80 text-white text-[10px] font-mono px-2 py-0.5 uppercase">
                    {proj.sector}
                  </div>
                </div>

                <div className="p-5 flex flex-col justify-between flex-grow space-y-3">
                  <div>
                    <span className="text-[11px] font-semibold text-slate-500 uppercase block">
                      {proj.location}
                    </span>
                    <h4 className="text-base font-bold text-[#0f172a] group-hover:text-[#0099ff] transition-colors leading-snug">
                      {proj.title}
                    </h4>
                  </div>
                  <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs font-mono">
                    <span className="text-[#0099ff] font-bold">{proj.tonnage}</span>
                    <span className="text-slate-500 font-bold group-hover:text-[#0099ff]">Details →</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ───────────────────────── 8. CONTACT & ESTIMATION DESK ───────────────────────── */}
      <section id="contact" className="w-full py-20 bg-[#f8fafc]">
        <div className="max-w-[1378px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left: Contact Info */}
            <div className="lg:col-span-5 space-y-6">
              <h2 className="text-2xl sm:text-3xl font-bold text-[#0099ff] tracking-tight">
                CONTACT US
              </h2>
              <div className="w-16 h-1 bg-[#0099ff] mt-2 mb-4" />

              <div className="space-y-4 text-xs text-slate-700">
                <div className="p-3 bg-white border border-[#e2e8f0] rounded-xs">
                  <h4 className="font-bold text-[#0f172a] uppercase text-xs text-[#0099ff]">Global Headquarters</h4>
                  <p className="mt-1 leading-relaxed text-slate-600">
                    <strong className="text-slate-800">3Axial Steel Detailing Services Pvt Ltd</strong><br />
                    17B, 3rd floor, Tech Mahindra Road,<br />
                    Opp. Tata Power Gate No. 01, Electronic City Phase 2,<br />
                    Bengaluru, Karnataka - 560100, India
                  </p>
                  <a
                    href="https://maps.app.goo.gl/QATut2KmXaCSX6RJ7"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-2 text-[#0099ff] hover:underline font-mono font-bold"
                  >
                    View on Google Maps ↗
                  </a>
                </div>

                <div className="p-3 bg-white border border-[#e2e8f0] rounded-xs">
                  <h4 className="font-bold text-[#0f172a] uppercase text-xs text-emerald-600">Branch Office (India)</h4>
                  <p className="mt-1 leading-relaxed text-slate-600">
                    <strong className="text-slate-800">Coimbatore Engineering Branch</strong><br />
                    Door No 438 A, 1st Floor, Kamarajar Rd,<br />
                    Peelamedu, Lakshmipuram,<br />
                    Coimbatore, Tamil Nadu - 641004, India
                  </p>
                  <a
                    href="https://maps.app.goo.gl/gKHvPtPitJQvQEdZ9?g_st=aw"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-2 text-emerald-600 hover:underline font-mono font-bold"
                  >
                    View on Google Maps ↗
                  </a>
                </div>

                <div className="p-3 bg-white border border-[#e2e8f0] rounded-xs">
                  <h4 className="font-bold text-[#0f172a] uppercase text-xs text-[#e8250e]">USA Branch Office</h4>
                  <p className="mt-1 leading-relaxed text-slate-600">
                    <strong className="text-slate-800">North American Operations (Austin, TX)</strong><br />
                    5900 BALCONES DR STE 100,<br />
                    AUSTIN, TX 78731, USA
                  </p>
                  <a
                    href="https://maps.app.goo.gl/jHVB7mFamBg51nQ7A"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-2 text-[#e8250e] hover:underline font-mono font-bold"
                  >
                    View on Google Maps ↗
                  </a>
                </div>

                <div className="pt-2 text-slate-800 font-mono text-[11px] space-y-1">
                  <div>Direct Phone: <a href="tel:+16506956923" className="text-[#0099ff] font-bold">+1 (650) 695-6923</a></div>
                  <div>Corporate Email: <a href="mailto:info@3axialsteeldetail.com" className="text-[#0099ff] font-bold">info@3axialsteeldetail.com</a></div>
                </div>
              </div>
            </div>

            {/* Right: Quick Quote Form */}
            <div className="lg:col-span-7 bg-white p-6 sm:p-8 border border-[#e2e8f0] shadow-md rounded-sm">
              <h3 className="text-lg font-bold text-[#0f172a] mb-1">
                Submit an Estimation Inquiry
              </h3>
              <p className="text-xs text-slate-500 mb-6">
                Send your tender drawings or project schedule. Our senior estimators respond within 24 hours.
              </p>

              {formSubmitted ? (
                <div className="py-8 text-center text-green-700 font-medium">
                  ✓ Thank you! Your RFQ has been received. Our team will contact you shortly.
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-4 text-xs">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block font-bold text-slate-700 mb-1 uppercase">First Name *</label>
                      <input
                        type="text"
                        required
                        value={formData.fname}
                        onChange={(e) => setFormData({ ...formData, fname: e.target.value })}
                        className="w-full bg-[#f8fafc] border border-[#e2e8f0] px-3 py-2 text-sm text-slate-900 focus:outline-none focus:border-[#0099ff] rounded-xs"
                      />
                    </div>
                    <div>
                      <label className="block font-bold text-slate-700 mb-1 uppercase">Last Name *</label>
                      <input
                        type="text"
                        required
                        value={formData.lname}
                        onChange={(e) => setFormData({ ...formData, lname: e.target.value })}
                        className="w-full bg-[#f8fafc] border border-[#e2e8f0] px-3 py-2 text-sm text-slate-900 focus:outline-none focus:border-[#0099ff] rounded-xs"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block font-bold text-slate-700 mb-1 uppercase">Email Address *</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full bg-[#f8fafc] border border-[#e2e8f0] px-3 py-2 text-sm text-slate-900 focus:outline-none focus:border-[#0099ff] rounded-xs"
                      />
                    </div>
                    <div>
                      <label className="block font-bold text-slate-700 mb-1 uppercase">Phone Number</label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full bg-[#f8fafc] border border-[#e2e8f0] px-3 py-2 text-sm text-slate-900 focus:outline-none focus:border-[#0099ff] rounded-xs"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block font-bold text-slate-700 mb-1 uppercase">Service Scope</label>
                    <select
                      value={formData.projectType}
                      onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                      className="w-full bg-[#f8fafc] border border-[#e2e8f0] px-3 py-2 text-sm text-slate-900 focus:outline-none focus:border-[#0099ff] rounded-xs"
                    >
                      <option value="Structural Steel Detailing">Structural Steel Detailing (Tekla)</option>
                      <option value="Connection Design & Stamping">Connection Design & Stamping</option>
                      <option value="Accelerated Project Delivery (APD)">Accelerated Project Delivery™ (APD)</option>
                      <option value="Estimation & ABM">Estimation & Advanced Bill of Materials</option>
                      <option value="BIM Coordination">BIM Coordination & LOD 400</option>
                    </select>
                  </div>

                  <div>
                    <label className="block font-bold text-slate-700 mb-1 uppercase">Project Requirements & Timeline</label>
                    <textarea
                      rows={3}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Estimated tonnage, tender deadline, design codes..."
                      className="w-full bg-[#f8fafc] border border-[#e2e8f0] px-3 py-2 text-sm text-slate-900 focus:outline-none focus:border-[#0099ff] rounded-xs resize-y"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="bg-[#0099ff] hover:bg-[#007acc] text-white font-bold font-mono tracking-wider px-6 py-3 uppercase transition-colors rounded-xs cursor-pointer shadow-sm disabled:opacity-50"
                  >
                    {isSubmitting ? 'SENDING...' : 'SUBMIT INQUIRY →'}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ───────────────────────── SERVICE DETAIL MODAL ───────────────────────── */}
      <AnimatePresence>
        {selectedService && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative w-full max-w-2xl bg-white border border-[#e2e8f0] shadow-2xl p-6 sm:p-8 rounded-sm"
            >
              <button
                onClick={() => setSelectedService(null)}
                className="absolute top-4 right-4 text-slate-500 hover:text-slate-900 text-lg font-bold p-1 cursor-pointer"
              >
                ✕
              </button>

              {(() => {
                const s = AXIAL_SERVICES.find(x => x.id === selectedService);
                if (!s) return null;
                return (
                  <div className="space-y-4">
                    <span className="text-xs font-mono font-bold text-[#0099ff] uppercase bg-[#0099ff]/10 px-2 py-0.5 rounded">
                      {s.tagline}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold text-[#0f172a]">
                      {s.title}
                    </h3>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      {s.fullDesc}
                    </p>

                    <div className="pt-2">
                      <h4 className="text-xs font-bold font-mono uppercase text-slate-700 mb-2">Key Deliverables:</h4>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700">
                        {s.features.map((f, i) => (
                          <li key={i} className="flex items-center gap-2">
                            <span className="text-[#0099ff] font-bold">✓</span>
                            <span>{f}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="pt-4 flex gap-3">
                      <button
                        onClick={() => {
                          setSelectedService(null);
                          if (onOpenEnquire) onOpenEnquire();
                          else onNavigateTab('contact');
                        }}
                        className="bg-[#0099ff] hover:bg-[#007acc] text-white text-xs font-bold px-5 py-2.5 uppercase tracking-wider transition-colors"
                      >
                        Request Quote for This Service
                      </button>
                      <button
                        onClick={() => setSelectedService(null)}
                        className="border border-slate-300 text-slate-700 text-xs font-bold px-4 py-2.5 uppercase transition-colors"
                      >
                        Close
                      </button>
                    </div>
                  </div>
                );
              })()}
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* ───────────────────────── PROJECT DETAIL MODAL ───────────────────────── */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative w-full max-w-3xl bg-white border border-[#e2e8f0] shadow-2xl overflow-hidden rounded-sm"
            >
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 z-20 w-8 h-8 bg-black/60 hover:bg-black text-white flex items-center justify-center text-sm font-bold cursor-pointer rounded-full"
              >
                ✕
              </button>

              <div className="relative aspect-[16/9] w-full bg-[#0a0f1d]">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="p-6 space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold text-[#0099ff] uppercase">
                    {selectedProject.location}
                  </span>
                  <span className="text-xs font-mono font-bold text-slate-600">
                    {selectedProject.tonnage}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-[#0f172a]">
                  {selectedProject.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {selectedProject.description}
                </p>
                <div className="pt-2 flex gap-3">
                  <button
                    onClick={() => {
                      setSelectedProject(null);
                      if (onOpenEnquire) onOpenEnquire();
                      else onNavigateTab('contact');
                    }}
                    className="bg-[#0099ff] hover:bg-[#007acc] text-white text-xs font-bold px-5 py-2.5 uppercase tracking-wider transition-colors"
                  >
                    Inquire About Similar Scope
                  </button>
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="border border-slate-300 text-slate-700 text-xs font-bold px-4 py-2.5 uppercase transition-colors"
                  >
                    Close
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

export default HomeSection;
