import React from 'react';
import { LanguageSelector } from './LanguageSelector';

interface FooterProps {
  setActiveTab: (tab: string) => void;
  onOpenEnquire?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ setActiveTab, onOpenEnquire: _onOpenEnquire }) => {
  const handleNav = (tab: string) => {
    setActiveTab(tab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full bg-[#0a0f1d] text-white border-t-4 border-[#0099ff]">
      {/* ───────────────────────── MAIN FOOTER CONTENT ───────────────────────── */}
      <div className="max-w-[1378px] mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 text-xs leading-relaxed text-slate-300">
          {/* Column 1: Company Profile */}
          <div className="space-y-4">
            <button
              onClick={() => handleNav('home')}
              className="text-left focus:outline-none cursor-pointer flex items-center gap-2"
            >
              <img
                src="https://www.3axialsteeldetail.com/wp-content/uploads/2025/06/3axial-logo.png"
                alt="3-Axial Steel Detailing"
                className="h-10 w-auto brightness-0 invert"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                }}
              />
            </button>
            <p className="text-slate-400">
              3-Axial Steel Detailing Services delivers high-precision 3D Tekla modeling, certified connection engineering, and shop fabrication drawings globally.
            </p>
            <div className="pt-2 text-slate-400 font-mono space-y-1">
              <div>AISC Associate Member</div>
              <div>NISD Quality Procedures Program (QPP)</div>
              <div>Dual-Shift 24/7 Global Delivery</div>
            </div>
          </div>

          {/* Column 2: Navigation Links */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider font-mono border-b border-white/10 pb-2">
              Navigation
            </h4>
            <ul className="space-y-2 text-slate-400 font-medium">
              <li>
                <button onClick={() => handleNav('home')} className="hover:text-[#0099ff] transition-colors">
                  Home
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('about')} className="hover:text-[#0099ff] transition-colors">
                  About Us
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('services')} className="hover:text-[#0099ff] transition-colors">
                  Services
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('projects')} className="hover:text-[#0099ff] transition-colors">
                  Projects
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Quality & Team */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider font-mono border-b border-white/10 pb-2">
              Quality & Organization
            </h4>
            <ul className="space-y-2 text-slate-400 font-medium">
              <li>
                <button onClick={() => handleNav('drawings')} className="hover:text-[#0099ff] transition-colors">
                  Sample Drawings
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('team')} className="hover:text-[#0099ff] transition-colors">
                  Leadership Team
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('careers')} className="hover:text-[#0099ff] transition-colors">
                  Careers & Openings
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('contact')} className="hover:text-[#0099ff] transition-colors">
                  Contact Us
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & Global Desk */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider font-mono border-b border-white/10 pb-2">
              Global Delivery Hubs
            </h4>
            <div className="text-slate-400 space-y-2.5 text-xs">
              <div>
                <strong className="text-white block font-mono text-[11px] text-[#0099ff] uppercase">HQ (Bengaluru):</strong>
                17B, 3rd fl, Tech Mahindra Rd, Electronic City Ph 2<br />
                <a
                  href="https://maps.app.goo.gl/QATut2KmXaCSX6RJ7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-[#0099ff] underline underline-offset-2 text-[11px]"
                >
                  View on Google Maps ↗
                </a>
              </div>

              <div>
                <strong className="text-white block font-mono text-[11px] text-emerald-400 uppercase">Coimbatore Branch:</strong>
                Door No 438 A, 1st Fl, Kamarajar Rd, Peelamedu<br />
                <a
                  href="https://maps.app.goo.gl/gKHvPtPitJQvQEdZ9?g_st=aw"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-emerald-400 underline underline-offset-2 text-[11px]"
                >
                  View on Google Maps ↗
                </a>
              </div>

              <div>
                <strong className="text-white block font-mono text-[11px] text-[#e8250e] uppercase">USA Branch (Austin, TX):</strong>
                5900 BALCONES DR STE 100, AUSTIN, TX 78731<br />
                <a
                  href="https://maps.app.goo.gl/jHVB7mFamBg51nQ7A"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-[#e8250e] underline underline-offset-2 text-[11px]"
                >
                  View on Google Maps ↗
                </a>
              </div>

              <div className="pt-1 border-t border-white/10">
                <span className="block text-slate-300 font-mono text-[11px]">
                  Direct: <a href="tel:+16506956923" className="text-white hover:text-[#0099ff] font-bold">+1 (650) 695-6923</a>
                </span>
                <span className="block text-slate-300 font-mono text-[11px]">
                  Email: <a href="mailto:info@3axialsteeldetail.com" className="text-white hover:text-[#0099ff] font-bold">info@3axialsteeldetail.com</a>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ───────────────────────── BOTTOM COPYRIGHT STRIP ───────────────────────── */}
      <div className="w-full bg-[#060a14] border-t border-white/10 py-5 text-slate-400 text-xs font-mono">
        <div className="max-w-[1378px] mx-auto px-4 sm:px-8 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div>
            Copyright {new Date().getFullYear()} 3-Axial Steel Detailing Services Pvt. Ltd. | All Rights Reserved.
          </div>
          <div className="flex items-center gap-4 text-[11px]">
            <LanguageSelector variant="topbar" />
            <span className="text-white/20">|</span>
            <a href="#" className="hover:text-white transition-colors">TERMS OF USE</a>
            <span className="text-white/20">|</span>
            <a href="#" className="hover:text-white transition-colors">PRIVACY POLICY</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
