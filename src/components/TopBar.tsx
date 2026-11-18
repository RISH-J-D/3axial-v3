import React from 'react';
import { Phone, Mail } from 'lucide-react';

export const TopBar: React.FC = () => {
  return (
    <div className="w-full bg-[#182330] text-[#fdfdfe] text-[11px] sm:text-xs font-mono border-b border-[#2d3f53] py-2 transition-all">
      <div className="w-full max-w-[1780px] mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center gap-3 flex-wrap sm:flex-nowrap">
        <div className="flex items-center gap-4 sm:gap-8 flex-wrap">
          <a
            href="tel:+16506956923"
            className="flex items-center gap-2 text-slate-200 hover:text-[#0099ff] transition-colors"
          >
            <Phone className="w-3.5 h-3.5 text-[#e8250e]" />
            <span>+1 (650) 695-6923</span>
          </a>
          <a
            href="mailto:info@3axialsteeldetail.com"
            className="flex items-center gap-2 text-slate-200 hover:text-[#0099ff] transition-colors"
          >
            <Mail className="w-3.5 h-3.5 text-[#0099ff]" />
            <span>info@3axialsteeldetail.com</span>
          </a>
        </div>

        <div className="hidden sm:flex items-center gap-3 text-slate-300 text-xs tracking-wider uppercase font-semibold">
          <span className="text-[#0099ff]">AISC Licensed Partner</span>
          <span className="text-slate-500">·</span>
          <span>Tekla 3D BIM Detailing</span>
        </div>
      </div>
    </div>
  );
};
