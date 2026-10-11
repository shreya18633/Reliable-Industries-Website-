import React from 'react';
import { 
  Building2, 
  MapPin, 
  Layers, 
  Flame, 
  Wrench, 
  Truck, 
  CheckCircle2, 
  ArrowRight,
  Factory
} from 'lucide-react';
import { COMPANY_INFO } from '../data/productsData';

export default function FacilitySpecs({ onOpenRfq }) {
  const facilityBays = [
    {
      title: 'Press & Stamping Bay',
      capacity: '10T to 200T Capacity',
      icon: Factory,
      desc: 'Line-up of mechanical and hydraulic presses equipped with decoilers, servo roll feeders, and progressive tooling setups for high-speed continuous blanking and forming.',
      specs: ['Pneumatic clutch mechanical presses', 'Deep drawing hydraulic presses', 'High-speed progressive feed lines']
    },
    {
      title: 'Brazing & High-Ampacity Bay',
      capacity: 'Induction & Torch Brazing',
      icon: Flame,
      desc: 'Dedicated brazing fixtures designed for joining stranded copper braided shunts and heavy copper busbar lugs with zero thermal distortion and complete silver flow.',
      specs: ['Multi-flame controlled gas torch setup', 'Induction brazing units', 'Controlled cooling & post-braze flux washing']
    },
    {
      title: 'In-House Tool Maintenance & Care',
      capacity: 'Die Care & Sharpening',
      icon: Wrench,
      desc: 'Precision toolroom setup equipped for continuous die maintenance, punch resharpening, clearance recalibration, and quick turnaround prototyping.',
      specs: ['Precision surface grinders', 'Toolroom lathes & drill setups', 'Die storage rack with preventive maintenance logs']
    },
    {
      title: 'Mechanical Sub-Assembly Bay',
      capacity: 'Turnkey Integration',
      icon: Layers,
      desc: 'Torque-monitored workstation benches for manual and semi-automated mechanical integration, staking, riveting, and dielectric assembly testing.',
      specs: ['Calibrated pneumatic torque screwdrivers', 'Staking & eyeletting presses', 'ESD-safe assembly benches']
    }
  ];

  return (
    <section id="facility" className="py-20 bg-[#faf7f2] relative border-b border-cyan-100/60">
      <div className="container mx-auto px-4">
        
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 sm:mb-20">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold bg-cyan-50 text-[#008ba3] border border-cyan-200 mb-4 shadow-sm">
              <Building2 className="w-3.5 h-3.5" />
              <span>Vadodara Plant Infrastructure</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0a1f38] font-heading leading-tight">
              Plant Infrastructure & <span className="text-gradient-cyan">Machinery</span>
            </h2>
            <p className="mt-4 text-slate-600 text-base sm:text-lg leading-relaxed">
              Strategically situated in Waghodia GIDC, Vadodara — Gujarat's premier engineering and electrical manufacturing corridor with seamless highway and port connectivity.
            </p>
          </div>

          <div className="flex items-center gap-3 self-start md:self-end">
            <div className="flex items-center gap-1.5 text-xs text-amber-800 font-mono font-bold px-3 py-1.5 rounded-lg bg-amber-50 border border-amber-200 shadow-sm">
              <MapPin className="w-3.5 h-3.5 text-amber-600" />
              <span>Phase-2, Waghodia GIDC</span>
            </div>
          </div>
        </div>

        {/* 4 Infrastructure Bays Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {facilityBays.map((bay) => {
            const Icon = bay.icon;
            return (
              <div 
                key={bay.title}
                className="p-6 rounded-3xl bg-white border border-slate-200/80 hover:border-[#008ba3] card-hover flex flex-col justify-between shadow-sm"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-cyan-50 border border-cyan-200 text-[#008ba3] flex items-center justify-center shadow-sm">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-mono font-bold px-2.5 py-1 rounded-full bg-slate-100 text-slate-700">
                      {bay.capacity}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-[#0a1f38] font-heading mb-2">
                    {bay.title}
                  </h3>
                  
                  <p className="text-xs text-slate-600 leading-relaxed mb-6">
                    {bay.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 space-y-1.5">
                  {bay.specs.map((spec, sIdx) => (
                    <div key={sIdx} className="flex items-center gap-2 text-xs text-slate-700 font-medium">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#008ba3] shrink-0" />
                      <span>{spec}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Strategic Location Banner */}
        <div className="rounded-3xl bg-white p-8 sm:p-10 border border-cyan-200/80 shadow-xl relative overflow-hidden">
          <div className="grid lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#008ba3] font-bold">
                <Truck className="w-4 h-4" />
                <span>Vadodara Engineering Corridor Logistics</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-[#0a1f38] font-heading">
                Why Waghodia GIDC, Vadodara Gives Us A Supply Advantage
              </h3>
              <p className="text-sm text-slate-700 leading-relaxed">
                Vadodara is known globally as India's electrical power capital, home to premier multinational switchgear, locomotive, and transformer manufacturers. Our location in Waghodia GIDC provides Reliable Industries immediate proximity to raw metal stockyards, certified heat-treatment plants, specialized chemical platers, and high-speed freight corridors to Hazira, Kandla, and Nhava Sheva ports.
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2 text-xs text-slate-700">
                <div className="p-3 rounded-xl bg-[#faf7f2] border border-slate-200">
                  <span className="text-slate-500 block font-mono text-[10px]">National Highway:</span>
                  <span className="text-[#0a1f38] font-bold">Direct NH-48 Connect</span>
                </div>
                <div className="p-3 rounded-xl bg-[#faf7f2] border border-slate-200">
                  <span className="text-slate-500 block font-mono text-[10px]">Prime Metal Sourcing:</span>
                  <span className="text-[#0a1f38] font-bold">Vadodara / Gujarat Mills</span>
                </div>
                <div className="p-3 rounded-xl bg-[#faf7f2] border border-slate-200">
                  <span className="text-slate-500 block font-mono text-[10px]">Export Ports:</span>
                  <span className="text-[#0a1f38] font-bold">Kandla & Mundra Ports</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col items-center justify-center p-6 rounded-2xl bg-[#faf7f2] border border-cyan-200 text-center">
              <Building2 className="w-12 h-12 text-[#008ba3] mb-3" />
              <h4 className="text-lg font-bold text-[#0a1f38] font-heading">
                Schedule a Plant Audit
              </h4>
              <p className="text-xs text-slate-600 mt-1 mb-4">
                We welcome OEM vendor evaluation teams and customer quality audit visits.
              </p>
              <button
                onClick={onOpenRfq}
                className="w-full btn-primary text-xs py-2.5 px-4 shadow-md"
              >
                <span>Request Plant Visit / Audit</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
