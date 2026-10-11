import React from 'react';
import { 
  ShieldCheck, 
  ArrowRight, 
  CheckCircle2, 
  Sparkles, 
  Layers, 
  Download,
  Building2,
  Trophy,
  Award
} from 'lucide-react';
import { COMPANY_INFO } from '../data/productsData';

export default function Hero({ onOpenRfq, onOpenSlides, onOpenCertificate }) {
  return (
    <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden bg-[#faf8f5] pt-12 pb-20 border-b border-slate-200">
      {/* Background Subtle Technical Dots & Warm Glow */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-warm-dots opacity-40 pointer-events-none" />
        <div className="absolute top-1/4 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-cyan-100/35 blur-[130px] rounded-full pointer-events-none" />
        <div className="absolute bottom-10 right-1/4 w-[500px] h-[280px] bg-amber-100/35 blur-[100px] rounded-full pointer-events-none" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* Left Column: Headline & Corporate Scope */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Top Specification Badges: Spaced Out & Clean */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3">
              
              {/* Award Badge */}
              <a 
                href="#founder"
                className="badge-gold font-mono text-xs shadow-sm hover:scale-105 transition-transform"
              >
                <Trophy className="w-3.5 h-3.5 text-amber-600" />
                <span>Top 10 Growing MSMEs Awardee</span>
              </a>

              {/* ISO Badge */}
              <button 
                onClick={onOpenCertificate}
                className="badge-cyan font-mono text-xs shadow-sm hover:bg-cyan-100 transition-colors cursor-pointer"
              >
                <ShieldCheck className="w-3.5 h-3.5 text-[#008ba3]" />
                <span>ISO 9001:2015 TÜV NORD Certified</span>
              </button>

              {/* Plant Location */}
              <span className="badge-iso font-mono text-xs shadow-sm">
                <Building2 className="w-3.5 h-3.5 text-emerald-600" />
                <span>Waghodia GIDC, Vadodara</span>
              </span>

            </div>

            {/* Main Corporate Headline with Generous Spacing */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-normal text-[#0b1e36] font-heading leading-[1.18] sm:leading-[1.15]">
              Precision Sheet Metal <br />
              <span className="text-gradient-cyan">Pressed Parts & Assemblies</span>
            </h1>

            {/* Corporate Sub-headline */}
            <p className="text-base sm:text-lg text-slate-700 max-w-2xl leading-relaxed font-normal pt-1">
              Supplying high-tolerance stampings, silver-brazed flexible copper shunts, and turnkey electromechanical assemblies to global OEMs. Built on a 3-generation manufacturing legacy — founded by <strong className="text-[#0b1e36]">Sarita Khandelwal</strong> with 25 years of leadership and partner <strong className="text-[#0b1e36]">Shreya Khandelwal</strong> in Vadodara, Gujarat.
            </p>

            {/* Engineering Capability Checkpoints */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3.5 pt-2 text-xs text-slate-700 font-semibold font-mono">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#008ba3] shrink-0" />
                <span>Ferrous & Non-Ferrous</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#008ba3] shrink-0" />
                <span>Silver-Brazed Copper</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#008ba3] shrink-0" />
                <span>7 Plating Treatments</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#008ba3] shrink-0" />
                <span>10T to 200T Press Shop</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#008ba3] shrink-0" />
                <span>100% Traceability & QC</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#008ba3] shrink-0" />
                <span>Progressive Tooling Dies</span>
              </div>
            </div>

            {/* Primary Action Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-4">
              <button 
                onClick={onOpenRfq}
                className="btn-primary text-sm py-3 px-6 shadow-sm font-bold"
              >
                <span>Request Engineering RFQ</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a 
                href="#products"
                className="btn-navy text-sm py-3 px-6 shadow-sm"
              >
                <Layers className="w-4 h-4 text-cyan-300" />
                <span>Explore Component Specs</span>
              </a>

              <button
                onClick={onOpenSlides}
                className="inline-flex items-center gap-2 text-xs font-semibold text-slate-700 hover:text-[#008ba3] px-3.5 py-3 rounded-lg border border-slate-300 bg-white hover:bg-slate-50 transition-all cursor-pointer shadow-sm"
              >
                <Download className="w-3.5 h-3.5 text-slate-500" />
                <span>View Company Profile Deck</span>
              </button>
            </div>
          </div>

          {/* Right Column: High-Tolerance Production Preview */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              <div className="relative rounded-2xl bg-white p-6 border border-slate-200 shadow-md">
                
                {/* Header of the Technical Showcase */}
                <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                    <span className="text-xs font-bold uppercase tracking-wider text-[#0b1e36] font-mono">
                      Production Series Showcase
                    </span>
                  </div>
                  <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-slate-100 text-slate-700 border border-slate-200">
                    GIDC PLANT SPEC
                  </span>
                </div>

                {/* 3 Main Production Series Rows */}
                <div className="mt-4 space-y-3">
                  
                  {/* Series 1: Stamping */}
                  <div className="p-3.5 rounded-xl bg-slate-50/70 hover:bg-white border border-slate-200 hover:border-[#008ba3] transition-all flex items-center gap-3.5 group">
                    <div className="w-16 h-16 rounded-lg bg-white p-1 overflow-hidden shrink-0 shadow-sm border border-slate-100 flex items-center justify-center">
                      <img 
                        src="images/product_stamping_copper.png" 
                        alt="High-tolerance stamping" 
                        className="w-full h-full object-contain group-hover:scale-105 transition-transform"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between">
                        <h4 className="text-sm font-bold text-[#0b1e36] group-hover:text-[#008ba3] transition-colors font-heading">
                          Precision Stampings
                        </h4>
                        <span className="text-[10px] font-mono font-bold text-amber-700">±0.02 mm</span>
                      </div>
                      <p className="text-xs text-slate-600 line-clamp-2 mt-0.5">
                        High-tolerance stamping across varied gauges & alloys for repeatable accuracy in electrical applications.
                      </p>
                    </div>
                  </div>

                  {/* Series 2: Brazed Assemblies */}
                  <div className="p-3.5 rounded-xl bg-slate-50/70 hover:bg-white border border-slate-200 hover:border-[#008ba3] transition-all flex items-center gap-3.5 group">
                    <div className="w-16 h-16 rounded-lg bg-white p-1 overflow-hidden shrink-0 shadow-sm border border-slate-100 flex items-center justify-center">
                      <img 
                        src="images/product_brazed_assemblies.png" 
                        alt="Brazed Assemblies" 
                        className="w-full h-full object-contain group-hover:scale-105 transition-transform"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between">
                        <h4 className="text-sm font-bold text-[#0b1e36] group-hover:text-[#008ba3] transition-colors font-heading">
                          Brazed Assemblies
                        </h4>
                        <span className="text-[10px] font-mono font-bold text-[#008ba3]">Silver Alloy</span>
                      </div>
                      <p className="text-xs text-slate-600 line-clamp-2 mt-0.5">
                        Robust joins for electrical and thermal conductivity where strength and high ampacity matter.
                      </p>
                    </div>
                  </div>

                  {/* Series 3: Mechanical Assemblies */}
                  <div className="p-3.5 rounded-xl bg-slate-50/70 hover:bg-white border border-slate-200 hover:border-[#008ba3] transition-all flex items-center gap-3.5 group">
                    <div className="w-16 h-16 rounded-lg bg-white p-1 overflow-hidden shrink-0 shadow-sm border border-slate-100 flex items-center justify-center">
                      <img 
                        src="images/product_mechanical_assembly.png" 
                        alt="End-to-End Assemblies" 
                        className="w-full h-full object-contain group-hover:scale-105 transition-transform"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between">
                        <h4 className="text-sm font-bold text-[#0b1e36] group-hover:text-[#008ba3] transition-colors font-heading">
                          End-to-End Assemblies
                        </h4>
                        <span className="text-[10px] font-mono font-bold text-emerald-700">Torque Tested</span>
                      </div>
                      <p className="text-xs text-slate-600 line-clamp-2 mt-0.5">
                        Configured to integration specifications, torque calibration, and strict customer test protocols.
                      </p>
                    </div>
                  </div>

                </div>

                {/* Footer of card */}
                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-600">
                  <span className="flex items-center gap-1.5 font-semibold text-slate-700">
                    <ShieldCheck className="w-4 h-4 text-emerald-600" />
                    100% Quality Audited
                  </span>
                  <a 
                    href="#products" 
                    className="text-[#008ba3] hover:text-[#006d80] flex items-center gap-1 font-bold"
                  >
                    View All 9 Component Series →
                  </a>
                </div>

              </div>
            </div>
          </div>

        </div>

        {/* Bottom Technical Specifications Metrics */}
        <div className="mt-16 sm:mt-20 pt-10 border-t border-slate-200 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="p-5 sm:p-6 rounded-2xl bg-white border border-slate-200 shadow-sm hover:border-[#008ba3] transition-colors">
            <div className="text-3xl sm:text-4xl font-extrabold text-[#0b1e36] font-heading">
              25<span className="text-[#008ba3]">+</span>
            </div>
            <div className="text-xs font-semibold text-slate-600 mt-2 uppercase tracking-wider font-mono">
              Years in Manufacturing
            </div>
          </div>

          <div className="p-5 sm:p-6 rounded-2xl bg-white border border-slate-200 shadow-sm hover:border-[#008ba3] transition-colors">
            <div className="text-2xl sm:text-3xl font-extrabold text-[#008ba3] font-heading">
              ISO 9001:2015
            </div>
            <div className="text-xs font-semibold text-slate-600 mt-2 uppercase tracking-wider font-mono">
              TÜV NORD Certified (IAF)
            </div>
          </div>

          <div className="p-5 sm:p-6 rounded-2xl bg-white border border-slate-200 shadow-sm hover:border-[#008ba3] transition-colors">
            <div className="text-3xl sm:text-4xl font-extrabold text-[#0b1e36] font-heading">
              10T – 200T
            </div>
            <div className="text-xs font-semibold text-slate-600 mt-2 uppercase tracking-wider font-mono">
              Stamping Press Capacity
            </div>
          </div>

          <div className="p-5 sm:p-6 rounded-2xl bg-white border border-slate-200 shadow-sm hover:border-[#008ba3] transition-colors">
            <div className="text-3xl sm:text-4xl font-extrabold text-emerald-700 font-heading">
              100<span className="text-emerald-700">%</span>
            </div>
            <div className="text-xs font-semibold text-slate-600 mt-2 uppercase tracking-wider font-mono">
              Batch Traceability & QC
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
