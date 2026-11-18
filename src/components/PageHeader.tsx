import React from 'react';
import { ChevronRight } from 'lucide-react';

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  badge: string;
  currentTab: string;
  onNavigateHome: () => void;
}

export const PageHeader: React.FC<PageHeaderProps> = ({
  title,
  subtitle,
  badge,
  currentTab,
  onNavigateHome
}) => {
  return (
    <div className="relative bg-gradient-to-r from-[#647482] via-[#929da7] to-[#5b6a77] border-b-4 border-[#e8250e] py-10 sm:py-14 overflow-hidden shadow-sm">
      {/* Structural Steel Construction Backdrop Texture */}
      <img
        src="/steel-construction-bg.jpg"
        alt=""
        loading="eager"
        decoding="async"
        className="absolute inset-0 w-full h-full object-cover object-center opacity-30 mix-blend-overlay pointer-events-none"
      />

      {/* Atmospheric Engineering Lighting using #0099ff & #e8250e */}
      <div 
        aria-hidden="true" 
        className="absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_15%_25%,rgba(0,153,255,0.28),transparent_70%)] pointer-events-none" 
      />
      <div 
        aria-hidden="true" 
        className="absolute inset-0 bg-[radial-gradient(ellipse_50%_50%_at_85%_75%,rgba(232,37,14,0.15),transparent_65%)] pointer-events-none" 
      />

      <div className="shell relative z-10">
        {/* Breadcrumb Trail */}
        <div className="flex items-center gap-2 text-xs font-mono text-white/90 mb-3">
          <button 
            onClick={onNavigateHome}
            className="hover:text-white transition-colors underline-offset-2 hover:underline"
          >
            Home
          </button>
          <ChevronRight className="w-3.5 h-3.5 text-white/60" />
          <span className="px-2.5 py-0.5 rounded-full bg-[#0099ff] text-white text-[11px] font-mono font-medium shadow-sm">
            {currentTab}
          </span>
        </div>

        {/* Page Overline Chip */}
        <div className="mb-3">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] sm:text-[11px] font-mono font-medium uppercase tracking-widest text-[#e8250e] bg-[#fdfdfe] border border-[#e8250e]/30 shadow-xs">
            <span className="w-1.5 h-1.5 rounded-full bg-[#e8250e]" />
            {badge}
          </span>
        </div>

        {/* Page Title */}
        <h1 className="display-md text-white drop-shadow-md">
          {title}<span className="text-[#0099ff]">.</span>
        </h1>

        {/* Subtitle */}
        {subtitle && (
          <p className="text-slate-100 text-xs sm:text-sm max-w-2xl mt-3 font-normal leading-relaxed drop-shadow-xs">
            {subtitle}
          </p>
        )}
      </div>
    </div>
  );
};
