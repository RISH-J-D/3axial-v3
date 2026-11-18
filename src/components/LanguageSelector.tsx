import React, { useState, useEffect, useRef } from 'react';
import { Globe, Search, Check, X } from 'lucide-react';
import { ALL_LANGUAGES, POPULAR_LANGUAGES, getStoredLanguage, applyLanguage } from '../data/languages';
import type { Language } from '../data/languages';

interface LanguageSelectorProps {
  variant?: 'topbar' | 'header' | 'mobile';
  onLanguageChange?: (lang: Language) => void;
}

export const LanguageSelector: React.FC<LanguageSelectorProps> = ({
  variant = 'topbar',
  onLanguageChange
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentCode, setCurrentCode] = useState('en');
  const [searchQuery, setSearchQuery] = useState('');
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const saved = getStoredLanguage();
    setCurrentCode(saved);
  }, []);

  // Click outside listener
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  const currentLang = ALL_LANGUAGES.find(l => l.code === currentCode) ||
    POPULAR_LANGUAGES.find(l => l.code === currentCode) ||
    { code: 'en', name: 'English', native: 'English', flag: '🇺🇸' };

  const filteredLanguages = ALL_LANGUAGES.filter(lang =>
    lang.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    lang.native.toLowerCase().includes(searchQuery.toLowerCase()) ||
    lang.code.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSelectLanguage = (lang: Language) => {
    setCurrentCode(lang.code);
    applyLanguage(lang.code);
    setIsOpen(false);
    setSearchQuery('');
    if (onLanguageChange) onLanguageChange(lang);
  };

  return (
    <div className="relative inline-block text-left" ref={dropdownRef}>
      {/* Trigger Button */}
      {variant === 'mobile' ? (
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="w-full flex items-center justify-between px-3 py-2.5 rounded bg-slate-50 border border-slate-200 text-slate-800 text-xs font-medium cursor-pointer hover:bg-slate-100 transition-colors"
        >
          <div className="flex items-center gap-2">
            <Globe className="w-4 h-4 text-[#0099ff]" />
            <span className="text-base">{currentLang.flag}</span>
            <span className="font-semibold">{currentLang.name}</span>
            <span className="text-slate-500 font-mono text-[10px]">({currentLang.native})</span>
          </div>
          <span className="text-[10px] font-mono text-[#0099ff] bg-[#0099ff]/10 px-2 py-0.5 rounded font-bold">
            110+ Langs
          </span>
        </button>
      ) : (
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className={`flex items-center gap-1.5 px-2.5 py-1 rounded transition-all cursor-pointer font-sans ${
            variant === 'topbar'
              ? 'bg-white/10 hover:bg-white/20 text-white text-xs border border-white/20'
              : 'bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs border border-slate-200'
          }`}
          title="Translate website into 110+ languages"
          aria-expanded={isOpen}
        >
          <Globe className="w-3.5 h-3.5 text-white/90" />
          <span className="text-sm leading-none">{currentLang.flag}</span>
          <span className="font-semibold tracking-wide text-[11px] uppercase">
            {currentLang.code.toUpperCase()}
          </span>
          <span className="text-[10px] text-white/70 font-mono hidden sm:inline">
            · {currentLang.name.split(' ')[0]}
          </span>
          <svg
            className={`w-3 h-3 transition-transform text-white/80 ${isOpen ? 'rotate-180' : ''}`}
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </button>
      )}

      {/* Dropdown Panel */}
      {isOpen && (
        <div className="absolute right-0 mt-2 w-[340px] sm:w-[420px] max-w-[92vw] bg-white rounded-lg shadow-2xl border border-slate-200 z-[100] text-[#0f172a] overflow-hidden flex flex-col max-h-[520px] animate-in fade-in zoom-in-95 duration-150">
          {/* Header */}
          <div className="p-3.5 bg-gradient-to-r from-[#0099ff] to-[#007acc] text-white flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Globe className="w-4 h-4 text-white" />
              <h4 className="text-xs font-bold uppercase tracking-wider">
                Select Language
              </h4>
              <span className="text-[10px] font-mono bg-white/20 px-1.5 py-0.5 rounded text-white">
                110+ Available
              </span>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white/80 hover:text-white p-1 rounded hover:bg-white/10 cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Search Box */}
          <div className="p-3 border-b border-slate-100 bg-[#f8fafc]">
            <div className="relative">
              <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search languages (e.g. Spanish, German, 日本語)..."
                className="w-full pl-9 pr-3 py-1.5 text-xs bg-white border border-slate-200 rounded focus:outline-none focus:border-[#0099ff] text-slate-800 placeholder-slate-400 font-sans"
                autoFocus
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 text-xs"
                >
                  ✕
                </button>
              )}
            </div>
          </div>

          {/* Popular Languages Quick Bar */}
          {!searchQuery && (
            <div className="px-3 pt-2.5 pb-2 border-b border-slate-100 bg-white">
              <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 font-bold block mb-1.5">
                Popular Languages
              </span>
              <div className="flex flex-wrap gap-1.5">
                {POPULAR_LANGUAGES.slice(0, 10).map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => handleSelectLanguage(lang)}
                    className={`text-[11px] px-2 py-1 rounded flex items-center gap-1.5 cursor-pointer transition-colors ${
                      currentCode === lang.code
                        ? 'bg-[#0099ff] text-white font-bold'
                        : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
                    }`}
                  >
                    <span>{lang.flag}</span>
                    <span>{lang.name}</span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* All Languages Scrollable List */}
          <div className="flex-1 overflow-y-auto p-2 divide-y divide-slate-50">
            {filteredLanguages.length === 0 ? (
              <div className="text-center py-8 text-xs text-slate-500">
                No languages found matching &quot;{searchQuery}&quot;
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-1">
                {filteredLanguages.map((lang) => {
                  const isSelected = currentCode === lang.code;
                  return (
                    <button
                      key={lang.code}
                      onClick={() => handleSelectLanguage(lang)}
                      className={`w-full text-left px-2.5 py-1.5 rounded flex items-center justify-between text-xs cursor-pointer transition-colors ${
                        isSelected
                          ? 'bg-[#0099ff]/10 text-[#0099ff] font-bold border border-[#0099ff]/30'
                          : 'hover:bg-slate-100 text-slate-800'
                      }`}
                    >
                      <div className="flex items-center gap-2 truncate">
                        <span className="text-sm">{lang.flag}</span>
                        <div className="truncate">
                          <span className="truncate block font-medium leading-tight">
                            {lang.name}
                          </span>
                          <span className="text-[10px] text-slate-400 font-mono block leading-tight">
                            {lang.native}
                          </span>
                        </div>
                      </div>
                      {isSelected && (
                        <Check className="w-3.5 h-3.5 text-[#0099ff] shrink-0" />
                      )}
                    </button>
                  );
                })}
              </div>
            )}
          </div>

          {/* Footer status */}
          <div className="p-2.5 bg-slate-50 border-t border-slate-100 text-[10px] text-slate-500 flex items-center justify-between font-mono">
            <span>Powered by Google Neural Translation</span>
            <button
              onClick={() => handleSelectLanguage({ code: 'en', name: 'English', native: 'English', flag: '🇺🇸' })}
              className="text-[#0099ff] hover:underline font-semibold"
            >
              Reset to English
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default LanguageSelector;
