import React from 'react';
import { 
  ShieldCheck, 
  MapPin, 
  Phone, 
  Mail, 
  FileText, 
  ChevronRight
} from 'lucide-react';
import { COMPANY_INFO } from '../data/productsData';

export default function Footer({ onOpenSlides, onOpenCertificate, onOpenRfq }) {
  return (
    <footer className="bg-[#0a1f38] text-slate-300 text-xs border-t border-[#162c4a] pt-16 pb-12">
      <div className="container mx-auto px-4">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-[#162c4a]">
          
          {/* Brand & Vision (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#008ba3] to-cyan-400 p-0.5 flex items-center justify-center shadow-md">
                <div className="w-full h-full bg-[#0a1f38] rounded-[10px] flex items-center justify-center overflow-hidden">
                  <img 
                    src="images/reliable_industries_logo.png" 
                    alt="Reliable Industries Logo" 
                    className="w-8 h-8 object-contain filter brightness-125"
                    onError={(e) => {
                      e.target.style.display = 'none';
                    }}
                  />
                </div>
              </div>
              <div>
                <span className="text-lg font-bold text-white font-heading tracking-tight block">
                  RELIABLE INDUSTRIES
                </span>
                <span className="text-[10px] text-amber-300 font-mono font-bold">
                  Woman-Led Enterprise • Estd. 1999
                </span>
              </div>
            </div>

            <p className="text-slate-300 leading-relaxed text-xs">
              Specializing in high-tolerance sheet metal pressed components, brazed electrical shunts, and integrated mechanical assemblies for switchgear and heavy industrial applications. Built on 25 years of resilience, dedication, and precision.
            </p>

            <div className="flex items-center gap-2 pt-2">
              <button 
                onClick={onOpenCertificate}
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-cyan-900/60 text-cyan-200 border border-cyan-700/80 hover:bg-cyan-800/60 transition-all cursor-pointer"
              >
                <ShieldCheck className="w-3.5 h-3.5 text-cyan-400" />
                <span>ISO 9001:2015 TÜV NORD</span>
              </button>
              <button
                onClick={onOpenSlides}
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-amber-900/60 text-amber-200 border border-amber-700/80 hover:bg-amber-800/60 transition-all cursor-pointer"
              >
                <FileText className="w-3.5 h-3.5 text-amber-400" />
                <span>Presentation Deck</span>
              </button>
            </div>
          </div>

          {/* Quick Nav Links (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-sm font-bold text-white font-heading uppercase tracking-wider">
              Navigation
            </h4>
            <ul className="space-y-2">
              <li>
                <a href="#founder" className="hover:text-cyan-300 transition-colors flex items-center gap-1">
                  <ChevronRight className="w-3 h-3 text-cyan-400" />
                  <span>About Founder</span>
                </a>
              </li>
              <li>
                <a href="#capabilities" className="hover:text-cyan-300 transition-colors flex items-center gap-1">
                  <ChevronRight className="w-3 h-3 text-cyan-400" />
                  <span>Capabilities</span>
                </a>
              </li>
              <li>
                <a href="#products" className="hover:text-cyan-300 transition-colors flex items-center gap-1">
                  <ChevronRight className="w-3 h-3 text-cyan-400" />
                  <span>Product Catalog</span>
                </a>
              </li>
              <li>
                <a href="#materials" className="hover:text-cyan-300 transition-colors flex items-center gap-1">
                  <ChevronRight className="w-3 h-3 text-cyan-400" />
                  <span>Materials Handled</span>
                </a>
              </li>
              <li>
                <a href="#quality" className="hover:text-cyan-300 transition-colors flex items-center gap-1">
                  <ChevronRight className="w-3 h-3 text-cyan-400" />
                  <span>Quality & ISO</span>
                </a>
              </li>
              <li>
                <a href="#facility" className="hover:text-cyan-300 transition-colors flex items-center gap-1">
                  <ChevronRight className="w-3 h-3 text-cyan-400" />
                  <span>Plant Infrastructure</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Core Manufacturing (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-sm font-bold text-white font-heading uppercase tracking-wider">
              Core Specializations
            </h4>
            <ul className="space-y-2 text-slate-300">
              <li>• Precision Sheet Metal Pressed Parts</li>
              <li>• Brazed Copper Flexible Shunts</li>
              <li>• Electromechanical Carrier Sub-Assemblies</li>
              <li>• Deep-Drawn Sleeves & Cylindrical Parts</li>
              <li>• Perforated Airflow Chassis & Baffles</li>
              <li>• Silver, Tin & Zinc-Cobalt Plating</li>
              <li>• Custom Tooling & Prototyping Dies</li>
            </ul>
          </div>

          {/* Plant & Contact Info (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-sm font-bold text-white font-heading uppercase tracking-wider">
              Plant Location
            </h4>
            <div className="space-y-2 text-slate-300">
              <p className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span>
                  Plot No - 1430, Phase-2, Waghodia GIDC, Vadodara – 391 760, Gujarat, India.
                </span>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>+91 98250 00000</span>
              </p>
              <p className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-cyan-300 shrink-0" />
                <span>contact@reliableindustries.co.in</span>
              </p>
              <div className="pt-2">
                <button
                  onClick={onOpenRfq}
                  className="w-full btn-primary text-xs py-2 px-3 shadow-md"
                >
                  <span>Request Engineering Quote</span>
                </button>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom copyright & attribution */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-400 text-[11px]">
          <div>
            © 1999–2026 Reliable Industries. All rights reserved. Registered in Vadodara, Gujarat.
          </div>

          <div className="flex items-center gap-4">
            <button onClick={onOpenCertificate} className="hover:text-cyan-300 transition-colors">
              ISO 9001:2015 QM 02 00934
            </button>
            <span>•</span>
            <button onClick={onOpenSlides} className="hover:text-cyan-300 transition-colors">
              Presentation Slides
            </button>
            <span>•</span>
            <span>TÜV NORD Certified</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
