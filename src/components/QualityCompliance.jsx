import React from 'react';
import { 
  ShieldCheck, 
  Award, 
  SearchCheck, 
  Leaf, 
  Eye, 
  CheckCircle2, 
  Gauge
} from 'lucide-react';
import { COMPANY_INFO } from '../data/productsData';

export default function QualityCompliance({ onOpenCertificate }) {
  const qcStages = [
    {
      step: '01',
      title: 'Incoming Material Verification',
      desc: 'Every incoming coil and strip lot is verified against mill test certificates (MTC). Thickness, surface finish, hardness (HRB/HV), and composition checks ensure zero defective feedstock enters production.',
      items: ['Mill Test Certificate (MTC) verification', 'Thickness micrometer gauge audit', 'Hardness & bend ductility check']
    },
    {
      step: '02',
      title: 'In-Process Dimension Inspection',
      desc: 'Mandatory First-Piece Inspection (FPI) before batch production. Periodic statistical dimension monitoring every 2 hours tracks tool wear, hole pitch, burr height, and bend angles.',
      items: ['First-piece setup signoff', 'Hourly statistical dimension sampling', 'Burr height monitoring (<0.03mm)']
    },
    {
      step: '03',
      title: 'Final Acceptance & Pre-Dispatch',
      desc: 'Finished lots undergo 100% critical dimension audit, electroplating thickness testing, braze joint tensile pull testing, and pre-dispatch inspection reports (PDIR) with full heat traceability.',
      items: ['Plating thickness test (Coulometric/Magnetic)', 'Braze joint shear & electrical resistance test', 'PDIR & Certificate of Analysis with dispatch']
    }
  ];

  const metrologyEquipment = [
    { name: 'Mitutoyo Digital Height Gauge', range: '0 – 600 mm (0.001 mm resolution)' },
    { name: 'Digital Vernier Calipers & Micrometers', range: '0 – 300 mm (Mitutoyo Japan)' },
    { name: 'Coating / Plating Thickness Gauge', range: 'Magnetic & Eddy Current Probe' },
    { name: 'High-Precision Micro-Ohmmeter', range: 'For brazed shunt contact resistance' },
    { name: 'Calibrated Torque Wrenches', range: 'For assembly fasteners to exact Nm' },
    { name: 'Precision Thread & Plug Gauges', range: 'Go / No-Go Class 6H & 2B standards' }
  ];

  return (
    <section id="quality" className="py-20 bg-[#faf7f2] relative border-b border-cyan-100/60">
      <div className="container mx-auto px-4">
        
        {/* Section Heading matching Slide 5 */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold bg-cyan-50 text-[#008ba3] border border-cyan-200 mb-4 shadow-sm">
            <Award className="w-3.5 h-3.5 text-[#008ba3]" />
            <span>TÜV NORD Accredited Quality Management</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0b1e36] font-heading leading-tight">
            Quality, Safety & <span className="text-gradient-cyan">Compliance</span>
          </h2>
          <p className="mt-5 text-slate-600 text-base sm:text-lg leading-relaxed">
            ISO 9001:2015 certified operations ensuring documented traceability, zero-defect production culture, and environmentally responsible finishing processes.
          </p>
        </div>

        {/* 3 Core Pillars matching Slide 5 */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          
          {/* Card 1: ISO 9001:2015 */}
          <div className="p-8 rounded-3xl bg-white border border-cyan-200 hover:border-[#008ba3] card-hover flex flex-col justify-between shadow-sm">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-cyan-50 border border-cyan-200 text-[#008ba3] flex items-center justify-center mb-5 shadow-sm">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-[#008ba3] font-heading mb-2">
                ISO 9001:2015 Certified
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Documented quality systems that ensure consistent output, process calibration, and end-to-end traceability across all manufacturing batches.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-100 text-xs text-[#008ba3] font-mono font-bold flex items-center justify-between">
              <span>Cert QM 02 00934</span>
              <span>Valid to 2027</span>
            </div>
          </div>

          {/* Card 2: Stringent QC */}
          <div className="p-8 rounded-3xl bg-white border border-cyan-200 hover:border-[#008ba3] card-hover flex flex-col justify-between shadow-sm">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-blue-50 border border-blue-200 text-blue-700 flex items-center justify-center mb-5 shadow-sm">
                <SearchCheck className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-[#008ba3] font-heading mb-2">
                Stringent QC
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Incoming raw material checks, in-process statistical dimension inspection, and final acceptance electrical and mechanical testing.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-100 text-xs text-[#008ba3] font-mono font-bold flex items-center justify-between">
              <span>Standard PDIR</span>
              <span>100% Inspection</span>
            </div>
          </div>

          {/* Card 3: Safety & Sustainability */}
          <div className="p-8 rounded-3xl bg-white border border-cyan-200 hover:border-[#008ba3] card-hover flex flex-col justify-between shadow-sm">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-700 flex items-center justify-center mb-5 shadow-sm">
                <Leaf className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-[#008ba3] font-heading mb-2">
                Safety & Sustainability
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Safe plant practices, protective PPE culture, and environmentally responsible finishing and chemical disposal processes compliant with GIDC norms.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-100 text-xs text-emerald-700 font-mono font-bold flex items-center justify-between">
              <span>RoHS / REACH</span>
              <span>Zero Incident Goal</span>
            </div>
          </div>

        </div>

        {/* Certificate Feature Showcase + Details */}
        <div className="rounded-3xl bg-white p-6 sm:p-10 border border-cyan-200/80 shadow-xl mb-16">
          <div className="grid lg:grid-cols-12 gap-10 items-center">
            
            {/* Left: Certificate Preview Card */}
            <div className="lg:col-span-5 flex flex-col items-center">
              <div 
                onClick={onOpenCertificate}
                className="group relative rounded-2xl bg-white p-3 shadow-xl border-2 border-slate-200 cursor-pointer overflow-hidden max-w-sm transition-all hover:scale-[1.02] hover:border-[#008ba3]"
              >
                <img
                  src="images/certificate_iso9001_full.png"
                  alt="TUV NORD ISO 9001:2015 Certificate for Reliable Industries"
                  className="w-full h-auto object-contain rounded-lg"
                />
                
                {/* Overlay hover prompt */}
                <div className="absolute inset-0 bg-[#0a1f38]/80 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center text-center p-4">
                  <Eye className="w-8 h-8 text-white mb-2" />
                  <span className="text-sm font-bold text-white">Click to View Full Certificate</span>
                  <span className="text-xs text-cyan-200 mt-1">Audit No. Q 7053/2015 • TÜV NORD</span>
                </div>
              </div>

              <div className="mt-4 flex items-center gap-3">
                <button
                  onClick={onOpenCertificate}
                  className="btn-primary text-xs py-2 px-4 shadow-md"
                >
                  <Eye className="w-3.5 h-3.5" />
                  <span>Enlarge ISO Certificate</span>
                </button>
              </div>
            </div>

            {/* Right: Certificate Details & Scope */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <span className="text-xs font-mono uppercase tracking-widest text-[#008ba3] font-bold">
                  Official Audit & Accreditation Record
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold text-[#0a1f38] font-heading mt-1">
                  Management System as per ISO 9001:2015
                </h3>
                <p className="text-sm text-slate-600 mt-2">
                  Certified by <strong className="text-[#0a1f38]">TUV INDIA PVT. LTD. (TÜV NORD GROUP)</strong> under accreditation by <strong className="text-[#0a1f38]">NABCB (QM 002)</strong> and the <strong className="text-[#0a1f38]">International Accreditation Forum (IAF)</strong>.
                </p>
              </div>

              {/* Data Table */}
              <div className="rounded-2xl bg-[#faf7f2] border border-slate-200 p-5 space-y-3 text-xs">
                <div className="flex justify-between border-b border-slate-200 pb-2">
                  <span className="text-slate-500 font-mono">Company Name:</span>
                  <span className="text-[#0a1f38] font-bold">RELIABLE INDUSTRIES</span>
                </div>
                <div className="flex justify-between border-b border-slate-200 pb-2">
                  <span className="text-slate-500 font-mono">Plant Address:</span>
                  <span className="text-slate-700 font-medium text-right">Plot No - 1430, Phase-2, Waghodia GIDC, Vadodara - 391 760, Gujarat, India</span>
                </div>
                <div className="flex justify-between border-b border-slate-200 pb-2">
                  <span className="text-slate-500 font-mono">Certified Scope:</span>
                  <span className="text-[#008ba3] font-bold text-right">Manufacture and Supply of Sheet Metal Pressed Components</span>
                </div>
                <div className="flex justify-between border-b border-slate-200 pb-2">
                  <span className="text-slate-500 font-mono">Registration No:</span>
                  <span className="text-emerald-700 font-mono font-bold">QM 02 00934</span>
                </div>
                <div className="flex justify-between pt-0.5">
                  <span className="text-slate-500 font-mono">Validity Period:</span>
                  <span className="text-amber-800 font-bold">Valid through 07.11.2027 (Initial Certification 08.11.2015)</span>
                </div>
              </div>

              <div className="flex items-center gap-2 text-xs text-slate-600 font-medium">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Global recognition across Tier-1 electrical switchgear and automotive OEM supply chains.</span>
              </div>
            </div>

          </div>
        </div>

        {/* 3-Stage QC Workflow */}
        <div className="mb-16">
          <div className="max-w-2xl mb-8">
            <span className="text-xs font-mono uppercase tracking-wider text-[#008ba3] font-bold">
              Quality Gate System
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold text-[#0a1f38] font-heading mt-1">
              End-to-End 3-Stage Inspection Pipeline
            </h3>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {qcStages.map((stg) => (
              <div 
                key={stg.step}
                className="p-6 rounded-2xl bg-white border border-slate-200/80 shadow-sm relative flex flex-col justify-between"
              >
                <div>
                  <div className="text-3xl font-black font-heading text-cyan-200 mb-3">
                    {stg.step}
                  </div>
                  <h4 className="text-lg font-bold text-[#0a1f38] font-heading mb-2">
                    {stg.title}
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed mb-4">
                    {stg.desc}
                  </p>
                </div>

                <div className="space-y-1.5 pt-4 border-t border-slate-100">
                  {stg.items.map((item, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-slate-700 font-medium">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#008ba3] shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Metrology & Testing Equipment Grid */}
        <div className="rounded-3xl bg-white p-6 sm:p-8 border border-slate-200 shadow-sm">
          <div className="flex items-center gap-2 mb-6">
            <Gauge className="w-5 h-5 text-amber-600" />
            <h4 className="text-lg font-bold text-[#0a1f38] font-heading">
              Plant Metrology & Calibrated Quality Instruments
            </h4>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {metrologyEquipment.map((eq) => (
              <div 
                key={eq.name}
                className="p-4 rounded-xl bg-[#faf7f2] border border-slate-200 flex items-center justify-between gap-3 text-xs"
              >
                <span className="text-slate-800 font-semibold">{eq.name}</span>
                <span className="text-[#008ba3] font-mono text-[11px] font-bold shrink-0">{eq.range}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
