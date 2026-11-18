import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { LanguageSelector } from './LanguageSelector';

interface HeaderProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  cartCount?: number;
  onOpenEnquire?: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  activeTab,
  setActiveTab,
  onOpenEnquire
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Exact 8 items requested by the user
  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'services', label: 'Services' },
    { id: 'projects', label: 'Projects' },
    { id: 'drawings', label: 'Drawings' },
    { id: 'team', label: 'Team' },
    { id: 'careers', label: 'Careers' },
    { id: 'contact', label: 'Contact' }
  ];

  const handleNavClick = (tabId: string) => {
    setActiveTab(tabId);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="w-full sticky top-0 z-50 shadow-md">
      {/* ───────────────────────── 1. TOP UTILITY BAR (DGS UI Style) ───────────────────────── */}
      <div className="w-full bg-[#0099ff] text-white text-xs font-mono py-2 px-4 sm:px-8 border-b border-[#0088e6]">
        <div className="max-w-[1378px] mx-auto flex items-center justify-between">
          <div className="flex items-center gap-6 sm:gap-10">
            <div className="flex items-center gap-2">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
              </svg>
              <span className="font-semibold tracking-wider">Leading Structural Steel Detailing Provider</span>
            </div>
            <div className="hidden sm:flex items-center gap-2">
              <span className="text-white/60">|</span>
              <span className="text-white/90">AISC · CISC · NISD QPP Certified Operations</span>
            </div>
          </div>

          <div className="flex items-center gap-3 sm:gap-4 text-[11px] font-sans">
            <span className="hidden md:inline font-mono">Tel: +1 (650) 695-6923</span>
            <span className="hidden md:inline text-white/50">|</span>
            <span className="text-white font-mono font-medium hidden sm:inline">info@3axialsteeldetail.com</span>
            <span className="text-white/50 hidden sm:inline">|</span>
            <LanguageSelector variant="topbar" />
          </div>
        </div>
      </div>

      {/* ───────────────────────── 2. MAIN NAVIGATION HEADER ───────────────────────── */}
      <header className="w-full bg-white border-b border-[#e2e8f0]">
        <div className="max-w-[1378px] mx-auto px-4 sm:px-6 lg:px-8 min-h-[86px] sm:min-h-[92px] py-2 sm:py-3 flex items-center justify-between">
          {/* Left: 3-Axial Brand Logo (Enlarged) + Certified Badges (AISC first, then NISD) */}
          <div className="flex items-center gap-3 sm:gap-4 shrink-0">
            <button
              onClick={() => handleNavClick('home')}
              className="flex items-center text-left focus:outline-none cursor-pointer group"
              aria-label="3-Axial Home"
            >
              <img
                src="/3axial-logo.png"
                alt="3-Axial Steel Detailing"
                className="h-12 sm:h-14 md:h-16 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                onError={(e) => {
                  e.currentTarget.src = "https://www.3axialsteeldetail.com/wp-content/uploads/2025/06/3axial-logo.png";
                }}
              />
            </button>

            {/* Subtle Divider between main logo and accreditation logos */}
            <div className="hidden sm:block h-9 w-[1px] bg-slate-200" />

            {/* Certification Badges: AISC first, then NISD */}
            <div className="flex items-center gap-2 sm:gap-2.5">
              <div
                className="flex items-center justify-center p-0.5 rounded bg-white hover:opacity-90 transition-opacity"
                title="AISC Member / Certified Steel Detailing"
              >
                <img
                  src="/3axial-Elements.jpg"
                  alt="AISC Logo"
                  className="h-9 sm:h-11 md:h-12 w-auto object-contain rounded-xs border border-slate-100 shadow-2xs"
                  onError={(e) => {
                    e.currentTarget.src = "/aisc-badge.png";
                  }}
                />
              </div>

              <div
                className="flex items-center justify-center p-0.5 rounded bg-white hover:opacity-90 transition-opacity"
                title="NISD Quality Procedures Program (QPP) Certified"
              >
                <img
                  src="/nisd-logo.png"
                  alt="NISD Logo"
                  className="h-9 sm:h-11 md:h-12 w-auto object-contain rounded-xs border border-slate-100 shadow-2xs"
                  onError={(e) => {
                    e.currentTarget.src = "/nisd-badge.png";
                  }}
                />
              </div>
            </div>
          </div>

          {/* Center: EXACT 8 Items (Home, About, Services, Projects, Drawings, Team, Careers, Contact) */}
          <nav className="hidden xl:flex items-center gap-5 2xl:gap-7">
            {navItems.map((item) => {
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`relative text-[14px] font-bold tracking-wide transition-colors cursor-pointer py-2 ${
                    isActive
                      ? 'text-[#0099ff]'
                      : 'text-[#0f172a] hover:text-[#0099ff]'
                  }`}
                >
                  <span>{item.label}</span>
                  {isActive && (
                    <motion.div
                      layoutId="nav-underline"
                      className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#0099ff]"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Right: DGS-style Action Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={() => handleNavClick('contact')}
              className="bg-[#0f172a] hover:bg-[#1e293b] text-white text-xs font-bold font-mono tracking-wider px-4 py-2.5 uppercase transition-colors cursor-pointer rounded-xs"
            >
              CONTACT
            </button>
            <button
              onClick={() => onOpenEnquire ? onOpenEnquire() : handleNavClick('contact')}
              className="bg-[#0099ff] hover:bg-[#007acc] text-white text-xs font-bold font-mono tracking-wider px-4 py-2.5 uppercase transition-colors cursor-pointer rounded-xs shadow-sm"
            >
              REQUEST QUOTE
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="xl:hidden p-2 text-slate-900 hover:text-[#0099ff] transition-colors cursor-pointer"
            aria-label="Toggle Navigation"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? (
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            ) : (
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <line x1="3" y1="12" x2="21" y2="12"></line>
                <line x1="3" y1="18" x2="21" y2="18"></line>
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Navigation Drawer with ONLY the 8 Items */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="xl:hidden bg-white border-t border-[#e2e8f0] px-6 py-6 shadow-xl space-y-3"
            >
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`block w-full text-left text-base font-bold py-2 border-b border-slate-100 ${
                    activeTab === item.id ? 'text-[#0099ff]' : 'text-[#0f172a] hover:text-[#0099ff]'
                  }`}
                >
                  {item.label}
                </button>
              ))}

              {/* Mobile Language Selector */}
              <div className="pt-2">
                <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 font-bold block mb-1.5">
                  Select Language (110+ Languages)
                </span>
                <LanguageSelector variant="mobile" />
              </div>

              <div className="pt-2 flex gap-3">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    if (onOpenEnquire) onOpenEnquire();
                    else handleNavClick('contact');
                  }}
                  className="w-full bg-[#0099ff] text-white text-xs font-bold font-mono py-3 uppercase text-center rounded-xs cursor-pointer shadow-sm"
                >
                  REQUEST A QUOTE
                </button>
              </div>

              {/* Mobile Certification Badges */}
              <div className="pt-4 flex items-center justify-center gap-4 border-t border-slate-100">
                <img
                  src="/3axial-Elements.jpg"
                  alt="AISC Logo"
                  className="h-10 w-auto object-contain"
                  onError={(e) => {
                    e.currentTarget.src = "/aisc-badge.png";
                  }}
                />
                <img
                  src="/nisd-logo.png"
                  alt="NISD Logo"
                  className="h-10 w-auto object-contain"
                  onError={(e) => {
                    e.currentTarget.src = "/nisd-badge.png";
                  }}
                />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </div>
  );
};

export default Header;
