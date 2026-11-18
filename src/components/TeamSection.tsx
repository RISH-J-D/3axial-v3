import React from 'react';
import { TEAM_MEMBERS } from '../data/siteData';

export const TeamSection: React.FC = () => {
  return (
    <div className="section border-b border-[#929da7]/35 bg-transparent">
      <div className="shell">
        
        <div className="text-center max-w-3xl mx-auto mb-12">
          <p className="eyebrow mb-2">
            Driving Our Excellence
          </p>
          <h2 className="display-md">
            Leadership & Engineering Direction<span className="dot">.</span>
          </h2>
          <p className="lede text-sm mt-3">
            Our leadership combines decades of shop-floor fabrication experience with advanced 3D Tekla engineering acumen.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {TEAM_MEMBERS.map((member, idx) => (
            <div
              key={member.id}
              className={`bg-[#fdfdfe] border border-[#929da7]/35 rounded-3xl p-7 text-center shadow-xs hover:border-[#0099ff] transition-all border-t-4 ${
                idx % 2 === 0 ? 'border-t-[#0099ff]' : 'border-t-[#e8250e]'
              }`}
            >
              <div className="w-28 h-28 rounded-full overflow-hidden mx-auto mb-5 border-2 border-[#929da7]/30">
                <img
                  src={member.image}
                  alt={member.name}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover"
                />
              </div>

              <h3 className="font-display font-medium text-base text-slate-900 mb-1">
                {member.name}
              </h3>
              <span className="label text-[#0099ff] block">
                {member.role}
              </span>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};
