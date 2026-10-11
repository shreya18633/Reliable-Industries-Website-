import React from 'react';
import { 
  Hammer, 
  Flame, 
  Cpu, 
  Compass, 
  ShieldCheck, 
  CheckCircle2, 
  ArrowRight,
  Zap
} from 'lucide-react';
import { CAPABILITIES } from '../data/productsData';

export default function Capabilities({ onOpenRfq }) {
  const icons = {
    Hammer: Hammer,
    Flame: Flame,
    Cpu: Cpu,
    Compass: Compass,
    ShieldCheck: ShieldCheck,
    CheckCircle2: CheckCircle2
  };

  const surfaceTreatments = [
    { name: 'Silver Electroplating', use: 'Low-resistance electrical contacts & switchgear busbars', badge: 'Electrical Grade' },
    { name: 'Zinc Blue Passivation', use: 'Corrosion barrier with clean aesthetic trivalent finish', badge: 'RoHS Compliant' },
    { name: 'Zinc-Cobalt Plating', use: 'Superior corrosion protection in harsh automotive environments', badge: 'High Endurance' },
    { name: 'Zinc Yellow Dichromate', use: 'Heavy duty 480+ hrs salt spray protection for enclosures', badge: '480+ Hrs Salt Spray' },
    { name: 'Bright Nickel Plating', use: 'Wear resistance, hard barrier and decorative anti-tarnish finish', badge: 'Anti-Wear' },
    { name: 'Epoxy Powder Coating', use: 'Electrically insulated and durable exterior enclosure coats', badge: 'Heavy Duty' }
  ];

  return (
    <section id="capabilities" className="py-20 bg-[#faf7f2] relative border-b border-cyan-100/60">
      <div className="container mx-auto px-4">
        
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 sm:mb-20">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold bg-cyan-50 text-[#008ba3] border border-cyan-200 mb-4 shadow-sm">
              <Zap className="w-3.5 h-3.5" />
              <span>Full-Spectrum Manufacturing</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0a1f38] font-heading leading-tight">
              Engineering <span className="text-gradient-cyan">Capabilities & Processes</span>
            </h2>
            <p className="mt-4 text-slate-600 text-base sm:text-lg leading-relaxed">
              From raw ferrous and non-ferrous coils to precision stamped parts, specialized brazed shunts, and tested electromechanical sub-assemblies.
            </p>
          </div>

          <button
            onClick={onOpenRfq}
            className="btn-primary self-start md:self-end text-xs sm:text-sm py-2.5 px-5 shadow-md"
          >
            <span>Consult an Engineer</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Capabilities 6-Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CAPABILITIES.map((cap) => {
            const Icon = icons[cap.icon] || Cpu;
            return (
              <div
                key={cap.id}
                className="p-7 rounded-2xl bg-white border border-slate-200/80 hover:border-[#008ba3]/60 card-hover flex flex-col justify-between group shadow-sm"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-xl bg-cyan-50 border border-cyan-200 text-[#008ba3] flex items-center justify-center group-hover:scale-110 group-hover:bg-[#008ba3] group-hover:text-white transition-all shadow-sm">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-mono font-semibold px-2.5 py-1 rounded-full bg-slate-100 text-slate-700 border border-slate-200">
                      {cap.bullet}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-[#0a1f38] font-heading group-hover:text-[#008ba3] transition-colors mb-2">
                    {cap.title}
                  </h3>
                  
                  <p className="text-xs text-[#008ba3] font-bold mb-3">
                    {cap.subtitle}
                  </p>

                  <p className="text-sm text-slate-600 leading-relaxed mb-6">
                    {cap.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 space-y-2">
                  {cap.metrics.map((metric, mIdx) => (
                    <div key={mIdx} className="flex items-center gap-2 text-xs text-slate-700 font-medium">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#008ba3] shrink-0" />
                      <span>{metric}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Specialized Surface Finishing Feature Banner */}
        <div className="mt-16 rounded-3xl bg-white p-8 sm:p-10 border border-cyan-200/80 shadow-xl relative overflow-hidden">
          <div className="max-w-3xl mb-8">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#008ba3]">
              In-House & Partnered Coating Specifications
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold text-[#0a1f38] font-heading mt-1">
              Precision Surface Treatments & Plating
            </h3>
            <p className="text-sm text-slate-600 mt-2">
              Protecting parts against galvanic corrosion, reducing contact resistance, and ensuring long-term field reliability across harsh electrical and industrial environments.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {surfaceTreatments.map((treatment) => (
              <div 
                key={treatment.name}
                className="p-4 rounded-xl bg-[#faf7f2] border border-slate-200/80 hover:border-cyan-300 transition-all flex flex-col justify-between shadow-sm"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="text-sm font-bold text-[#0a1f38] font-heading">
                      {treatment.name}
                    </h4>
                    <span className="text-[10px] px-2 py-0.5 rounded-full bg-cyan-100 text-[#006d80] font-mono font-bold">
                      {treatment.badge}
                    </span>
                  </div>
                  <p className="text-xs text-slate-600">
                    {treatment.use}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 pt-6 border-t border-slate-100 flex flex-wrap items-center justify-between gap-4 text-xs text-slate-600">
            <div className="flex items-center gap-2 font-medium">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>Full Salt-Spray Testing & Plating Thickness Verification via Magnetic & Coulometric Methods</span>
            </div>
            <button
              onClick={onOpenRfq}
              className="text-[#008ba3] hover:text-[#006d80] font-bold flex items-center gap-1 cursor-pointer"
            >
              Request Finish Specification Sheet →
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
