import React, { useState } from 'react';
import { 
  ShieldCheck, 
  ArrowRight,
  Zap
} from 'lucide-react';
import { RAW_MATERIALS } from '../data/productsData';

export default function MaterialsSection({ onOpenRfq }) {
  const [activeMaterial, setActiveMaterial] = useState(RAW_MATERIALS[0]);

  return (
    <section id="materials" className="py-20 bg-[#faf7f2] relative border-b border-cyan-100/60">
      <div className="container mx-auto px-4">
        
        {/* Section Heading */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold bg-amber-50 text-amber-800 border border-amber-200 mb-4 shadow-sm">
            <Zap className="w-3.5 h-3.5 text-amber-600" />
            <span>Ferrous & Non-Ferrous Expertise</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0a1f38] font-heading leading-tight">
            Raw Materials & <span className="text-gradient-amber">Metallurgy</span>
          </h2>
          <p className="mt-4 sm:mt-5 text-slate-600 text-base sm:text-lg leading-relaxed">
            We work with certified prime coils, sheets, and strips from premier mills, accompanied by complete test certificates (MTC) and spectroscopic traceability.
          </p>
        </div>

        {/* 5 Circular Material Cards from Slide 1 */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 mb-12">
          {RAW_MATERIALS.map((mat) => {
            const isSelected = activeMaterial.id === mat.id;
            return (
              <button
                key={mat.id}
                onClick={() => setActiveMaterial(mat)}
                className={`p-4 rounded-3xl border text-center transition-all cursor-pointer flex flex-col items-center group shadow-sm ${
                  isSelected
                    ? 'bg-white border-[#008ba3] shadow-md ring-2 ring-[#008ba3]/20'
                    : 'bg-white border-slate-200 hover:border-cyan-300 hover:bg-[#faf7f2]'
                }`}
              >
                {/* Circular image crop from authentic slide */}
                <div className={`w-24 h-24 rounded-full p-1 border-2 transition-all overflow-hidden mb-3 ${
                  isSelected 
                    ? 'border-[#008ba3] shadow-md scale-105' 
                    : 'border-slate-200 group-hover:border-cyan-300'
                }`}>
                  <img
                    src={mat.image}
                    alt={mat.name}
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>

                <h4 className="text-sm font-bold text-[#0a1f38] font-heading group-hover:text-[#008ba3] transition-colors">
                  {mat.name}
                </h4>

                <span className="text-[11px] font-mono text-slate-500 mt-1 line-clamp-1">
                  {mat.grade}
                </span>

                <div className={`mt-3 text-[10px] font-bold px-2.5 py-0.5 rounded-full transition-colors ${
                  isSelected 
                    ? 'bg-cyan-100 text-[#006d80]' 
                    : 'bg-slate-100 text-slate-600'
                }`}>
                  {isSelected ? 'Active Selection' : 'Click to View'}
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Material Deep-Dive Panel */}
        <div className="rounded-3xl bg-white border border-cyan-200/80 p-6 sm:p-10 shadow-xl relative overflow-hidden">
          <div className="grid lg:grid-cols-12 gap-8 items-center">
            
            {/* Visual representation */}
            <div className="lg:col-span-5 flex flex-col items-center text-center">
              <div className="relative w-48 h-48 sm:w-56 sm:h-56 rounded-full p-1.5 border-4 border-cyan-200 shadow-xl overflow-hidden bg-slate-50">
                <img
                  src={activeMaterial.image}
                  alt={activeMaterial.name}
                  className="w-full h-full object-cover rounded-full"
                />
              </div>

              <div className="mt-4">
                <span className="text-xs font-mono uppercase tracking-widest text-[#008ba3] font-bold">
                  Mill Test Certified (MTC)
                </span>
                <h3 className="text-2xl font-bold text-[#0a1f38] font-heading mt-1">
                  {activeMaterial.name}
                </h3>
                <p className="text-xs text-slate-500 font-mono mt-0.5 font-semibold">
                  {activeMaterial.grade}
                </p>
              </div>
            </div>

            {/* Technical Specifications & Applications */}
            <div className="lg:col-span-7 space-y-6">
              
              <div>
                <h4 className="text-xs font-mono uppercase tracking-wider text-slate-500 font-bold">
                  Material Profile & Highlights
                </h4>
                <p className="mt-2 text-base text-slate-700 leading-relaxed font-normal">
                  {activeMaterial.highlights}
                </p>
              </div>

              {/* Specs Grid */}
              <div className="grid sm:grid-cols-2 gap-4 p-4 rounded-2xl bg-[#faf7f2] border border-slate-200 text-xs">
                <div>
                  <div className="text-slate-500 font-mono">Conductivity / Grade:</div>
                  <div className="text-[#0a1f38] font-bold mt-1 text-sm">{activeMaterial.conductivity}</div>
                </div>
                <div>
                  <div className="text-slate-500 font-mono">Stamping Gauge Range:</div>
                  <div className="text-[#0a1f38] font-bold mt-1 text-sm">{activeMaterial.thicknessRange}</div>
                </div>
              </div>

              {/* Typical Component Applications */}
              <div className="p-4 rounded-2xl bg-cyan-50/70 border border-cyan-200">
                <div className="text-xs font-bold text-[#006d80] font-mono uppercase tracking-wider">
                  Typical Parts Fabricated at Reliable Industries:
                </div>
                <p className="text-sm text-slate-800 mt-1.5 font-medium">
                  {activeMaterial.typicalUses}
                </p>
              </div>

              {/* Actions */}
              <div className="pt-2 flex flex-wrap items-center gap-4">
                <button
                  onClick={onOpenRfq}
                  className="btn-primary text-xs py-2.5 px-5 shadow-md"
                >
                  <span>Inquire Parts in {activeMaterial.name}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <div className="flex items-center gap-2 text-xs text-slate-600 font-medium">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  <span>RoHS & REACH compliance verified per heat batch</span>
                </div>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
