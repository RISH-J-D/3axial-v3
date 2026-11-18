import React from 'react';
import { ArrowRight } from 'lucide-react';

interface ServicesSectionProps {
  onOpenEnquire: () => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onOpenEnquire }) => {
  const services = [
    {
      num: '01',
      title: 'Pre-Bid Estimations & ABM',
      tag: 'Bidding & Quantities',
      desc: '3D tender models in Tekla Structures extracting Advance Bill of Materials (ABM) with preliminary marks, phases, and lot sequences for winning competitive global bids.',
      highlights: [
        'Precise structural steel tonnage takeoffs',
        'Advanced preliminary mark & phase list generation',
        'Accelerated turnaround for tight bid deadlines'
      ],
      compliance: 'AISC 360-16 / CISC S16 Pre-Bid Protocol'
    },
    {
      num: '02',
      title: 'Structural Steel Detailing',
      tag: 'Core Fabrication',
      desc: 'Complete shop fabrication drawings and general arrangement (GA) erection drawings formatted for both imperial and metric fabrication shops under rigorous AISC and CISC standards.',
      highlights: [
        'Zero-clash verified Tekla 3D structural models',
        'Erection diagrams, column schedules, and anchor bolt plans',
        'CNC machine files (NC1, DXF, DSTV, KSS) for automated beam lines'
      ],
      compliance: 'AISC 360-16 / NISD Quality Standard Level 1'
    },
    {
      num: '03',
      title: 'Miscellaneous Steel Detailing',
      tag: 'Architectural & Access Metals',
      desc: 'Specialized detailing for complex architectural metals, monumental stairs, industrial cage ladders, roof access hatches, handrails, dumpster gates, and mechanical screens.',
      highlights: [
        'Egress & monumental stair layouts with pan/stringer drawings',
        'OSHA compliant cage ladders & roof walkways',
        'Architectural railings, canopy frames & trench drain embeds'
      ],
      compliance: 'AISC / OSHA 1910.28 Fall Protection Standards'
    },
    {
      num: '04',
      title: 'Connection Design & Stamping',
      tag: 'Engineering & PE Stamp',
      desc: 'Verified structural connection calculations and engineering verification using Advance Design Steel Connections (ADSC) and IDEA StatiCa, complete with PE/SE stamped calculation books.',
      highlights: [
        'Moment, shear, vertical bracing, and seismic connection design',
        'PE / SE licensed engineer stamping across US and Canadian provinces',
        'Complete calculation packages with limit state checks'
      ],
      compliance: 'AISC 341 Seismic Provisions / ADSC Verification'
    },
    {
      num: '05',
      title: 'Research & Development (R&D)',
      tag: 'Tekla Open API Automation',
      desc: 'Dedicated in-house software division writing custom Tekla C# Open API plugins, automated modeling macros, and parametric component libraries that eliminate drafting human error.',
      highlights: [
        'Proprietary automated joint & connection placement macros',
        'BIM clash audit scripts integrated with Tekla Open API',
        'Automated bill-of-materials and report generation pipelines'
      ],
      compliance: 'Tekla Structures Open API / Custom Automation Suite'
    }
  ];

  return (
    <div className="section border-b border-[#929da7]/35 bg-transparent">
      <div className="shell">
        
        {/* Section Header */}
        <div className="mb-10">
          <div className="grid gap-6 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-8">
              <p className="eyebrow mb-2">
                Engineering Capabilities
              </p>
              <h2 className="display-md">
                Comprehensive Steel Detailing<span className="dot">.</span>
              </h2>
            </div>
            <div className="lg:col-span-4 lg:text-right">
              <p className="lede text-sm">
                From 3D pre-bid tender estimations and Advance Bill of Materials (ABM) to PE stamped connection designs and fabrication shop packages.
              </p>
            </div>
          </div>
          <div className="rule mt-6" />
        </div>

        {/* All Capabilities Displayed Directly (Content-First, No Images Needed) */}
        <div className="space-y-6">
          {services.map((srv, idx) => (
            <div
              key={srv.num}
              className={`rounded-3xl bg-[#fdfdfe] border border-[#929da7]/35 p-6 sm:p-8 shadow-xs hover:border-[#0099ff] transition-all border-t-4 ${
                idx % 2 === 0 ? 'border-t-[#0099ff]' : 'border-t-[#e8250e]'
              }`}
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
                
                {/* Left: Number, Tag, Title, Description, Standard */}
                <div className="lg:col-span-7 space-y-3">
                  <div className="flex items-center gap-3">
                    <span className={`font-mono text-xs font-semibold px-2.5 py-1 rounded-md ${
                      idx % 2 === 0 ? 'text-[#0099ff] bg-[#0099ff]/10' : 'text-[#e8250e] bg-[#e8250e]/10'
                    }`}>
                      {srv.num}
                    </span>
                    <span className={`label font-semibold ${
                      idx % 2 === 0 ? 'text-[#0099ff]' : 'text-[#e8250e]'
                    }`}>
                      {srv.tag}
                    </span>
                  </div>

                  <h3 className="font-display font-medium text-xl sm:text-2xl text-slate-900 leading-snug">
                    {srv.title}
                  </h3>

                  <p className="text-slate-600 text-sm leading-relaxed">
                    {srv.desc}
                  </p>

                  <div className="pt-1">
                    <span className="text-xs font-mono text-slate-500">
                      Standard: <strong className="text-slate-900">{srv.compliance}</strong>
                    </span>
                  </div>
                </div>

                {/* Right: Deliverables List & CTA Button */}
                <div className="lg:col-span-5 bg-slate-50/80 p-5 sm:p-6 rounded-2xl border border-[#929da7]/30 space-y-4">
                  <div>
                    <p className="label text-slate-500 mb-2.5 font-semibold">
                      Deliverables & Quality Checks:
                    </p>
                    <ul className="space-y-2 text-xs font-medium text-slate-800">
                      {srv.highlights.map((h, i) => (
                        <li key={i} className="flex items-center gap-2.5">
                          <span className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${
                            idx % 2 === 0 ? 'bg-[#0099ff]' : 'bg-[#e8250e]'
                          }`} />
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-3 border-t border-[#929da7]/20 flex items-center justify-between gap-3">
                    <span className="text-[11px] font-mono text-slate-500">Zero-Clash Tolerance</span>
                    <button
                      onClick={onOpenEnquire}
                      className="btn btn-primary text-xs py-2 px-4 shadow-sm"
                    >
                      <span>Request Scope Quote</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};
