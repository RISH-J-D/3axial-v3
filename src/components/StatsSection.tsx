import React from 'react';

export const StatsSection: React.FC = () => {
  const stats = [
    {
      number: '25+',
      label: 'Years Combined Expertise',
      desc: 'Deep roots in AISC/CISC structural detailing and field fabrication'
    },
    {
      number: '800+',
      label: 'Successful Projects',
      desc: 'Commercial towers, industrial plants & complex stadium roofs'
    },
    {
      number: '15+',
      label: 'Countries Served',
      desc: 'Engineering partners across North America, Europe & APAC'
    },
    {
      number: '100+',
      label: 'Happy Fabricators',
      desc: 'Long-term fabricator, erector, and general contractor trust'
    }
  ];

  return (
    <div className="py-8 sm:py-10 border-b border-[#929da7]/35 bg-transparent">
      <div className="shell">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {stats.map((item, index) => (
            <div
              key={index}
              className={`bg-[#fdfdfe] border border-[#929da7]/35 rounded-3xl p-6 sm:p-7 shadow-xs hover:border-[#0099ff] transition-all border-t-4 ${
                index % 2 === 0 ? 'border-t-[#0099ff]' : 'border-t-[#e8250e]'
              }`}
            >
              <div className="mb-2">
                <span className={`display-sm text-3xl font-display font-medium tracking-tight ${
                  index % 2 === 0 ? 'text-[#0099ff]' : 'text-[#e8250e]'
                }`}>
                  {item.number}
                </span>
              </div>
              <h3 className="font-display font-medium text-slate-900 text-base mb-1">
                {item.label}
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
