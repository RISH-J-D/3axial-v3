import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

interface HeroVideoBannerProps {
  onOpenEnquire: () => void;
  onExploreProjects: () => void;
}

const STANDARDS_TICKER = [
  'AISC 303 & 360',
  'CISC',
  'MM Standards',
  'Eurocode 3',
  'AS 4100',
  'BS 5950',
  'Tekla Structures',
  'SDS2 by ALLPLAN',
  'ADSC Connection Design',
  'Advance Bill of Materials',
  'Joist & Deck',
  'Miscellaneous Steel',
  'Pre-Engineered Buildings',
];

export const HeroVideoBanner: React.FC<HeroVideoBannerProps> = ({ onOpenEnquire, onExploreProjects }) => {
  return (
    <div className="relative w-full h-[calc(100dvh-116px)] sm:h-[calc(100dvh-128px)] min-h-[600px] overflow-hidden flex flex-col justify-between border-b border-[#929da7]/30 bg-slate-950">
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

      {/* Cinematic Gradient Overlays smoothly blending towards bottom */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950/90 via-slate-950/50 to-slate-950/95 z-10 pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_90%_60%_at_50%_35%,rgba(0,153,255,0.22),transparent_70%)] z-10 pointer-events-none" />

      {/* Hero Content Container - Vertically Centered with Generous Spacing */}
      <div className="relative z-20 max-w-5xl w-full mx-auto px-6 sm:px-8 text-center flex-grow flex flex-col items-center justify-center py-6 sm:py-8">
        {/* Hero Title with Larger, Bold, Crisp Typography */}
        <motion.h1
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.32, 0.72, 0, 1] }}
          className="display-xl text-white mb-3 sm:mb-6 drop-shadow-xl text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold leading-[1.1] break-words"
        >
          Precision steel detailing,<br />
          <span className="text-[#0099ff]">engineered for fabrication</span>
          <span className="text-[#e8250e]">.</span>
        </motion.h1>

        {/* Subtitle with Increased Readability */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-sm sm:text-lg md:text-xl text-slate-100 max-w-3xl mb-6 sm:mb-10 leading-relaxed font-normal"
        >
          3D Tekla modelling, connection design, pre-bid estimation and shop-ready drawings for fabricators and contractors across North America, Europe and Australia.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-wrap items-center justify-center gap-3 sm:gap-5 mb-6 sm:mb-10"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          <button
            onClick={onOpenEnquire}
            className="btn btn-accent px-6 sm:px-8 py-3.5 sm:py-4 text-sm sm:text-base font-bold shadow-2xl"
          >
            <span>Request a Quote</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
          
          <button
            onClick={onExploreProjects}
            className="btn btn-secondary px-6 sm:px-8 py-3.5 sm:py-4 text-sm sm:text-base font-bold shadow-xl"
          >
            <span>View Our Projects</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </motion.div>

        {/* Key Stats Row */}
        <motion.div
          className="w-full max-w-4xl grid grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-4 lg:gap-5 pt-4 sm:pt-8 border-t border-white/20"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="p-3 sm:p-5 rounded-2xl bg-slate-900/85 backdrop-blur-md border border-white/15 text-center shadow-lg">
            <span className="display-sm block text-white font-bold text-xl sm:text-2xl lg:text-3xl">1200+</span>
            <span className="text-[11px] sm:text-xs text-slate-200 font-mono font-medium block mt-1">Projects delivered</span>
          </div>

          <div className="p-3 sm:p-5 rounded-2xl bg-slate-900/85 backdrop-blur-md border border-white/15 text-center shadow-lg">
            <span className="display-sm block text-[#0099ff] font-bold text-xl sm:text-2xl lg:text-3xl">5+</span>
            <span className="text-[11px] sm:text-xs text-slate-200 font-mono font-medium block mt-1">Countries served</span>
          </div>

          <div className="p-3 sm:p-5 rounded-2xl bg-slate-900/85 backdrop-blur-md border border-white/15 text-center shadow-lg">
            <span className="display-sm block text-white font-bold text-base sm:text-xl lg:text-2xl">AISC · CISC · MM</span>
            <span className="text-[11px] sm:text-xs text-slate-200 font-mono font-medium block mt-1">Detailing standards</span>
          </div>

          <div className="p-3 sm:p-5 rounded-2xl bg-slate-900/85 backdrop-blur-md border border-white/15 text-center shadow-lg">
            <span className="display-sm block text-[#e8250e] font-bold text-xl sm:text-2xl lg:text-3xl">24/7</span>
            <span className="text-[11px] sm:text-xs text-slate-200 font-mono font-medium block mt-1">Dual-shift support</span>
          </div>
        </motion.div>
      </div>

      {/* Marquee Standards / Software Ticker Docked at Bottom */}
      <div className="relative z-20 w-full shrink-0 bg-slate-950/95 backdrop-blur-md border-t border-[#929da7]/30 py-3.5 sm:py-4 overflow-hidden marquee-wrap">
        <div className="animate-marquee-ltr gap-10 items-center">
          {[...STANDARDS_TICKER, ...STANDARDS_TICKER, ...STANDARDS_TICKER, ...STANDARDS_TICKER].map((item, idx) => (
            <span key={idx} className="inline-flex items-center gap-3 text-xs sm:text-sm font-mono font-semibold text-slate-200 tracking-wider uppercase whitespace-nowrap">
              <span className="w-2 h-2 rounded-full bg-[#0099ff] shrink-0" />
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};
