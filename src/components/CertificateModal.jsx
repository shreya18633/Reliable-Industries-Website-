import React from 'react';
import { 
  X, 
  ShieldCheck, 
  Award, 
  Printer, 
  CheckCircle2, 
  ExternalLink,
  MapPin,
  Building
} from 'lucide-react';
import { COMPANY_INFO } from '../data/productsData';

export default function CertificateModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 modal-backdrop animate-fade-in">
      <div 
        className="relative w-full max-w-4xl bg-slate-950 border border-slate-700 rounded-3xl overflow-hidden shadow-2xl max-h-[95vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-4 sm:p-5 border-b border-slate-800 flex items-center justify-between bg-slate-900/90">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-blue-500/10 border border-blue-500/30 text-blue-400 flex items-center justify-center">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-base sm:text-lg font-bold text-white font-heading">
                  ISO 9001:2015 Quality Management Certificate
                </h3>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 font-bold">
                  ACTIVE • VALID TO 2027
                </span>
              </div>
              <p className="text-xs text-slate-400">
                Audited & Certified by TÜV NORD GROUP (TUV India Pvt. Ltd.)
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="p-2 rounded-xl text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 transition-colors cursor-pointer hidden sm:flex items-center gap-1.5 text-xs font-semibold"
              title="Print Certificate"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print</span>
            </button>
            <button
              onClick={onClose}
              className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-4 sm:p-6 overflow-y-auto flex-1 space-y-6">
          <div className="grid md:grid-cols-12 gap-6 items-start">
            
            {/* Left: Certificate Image */}
            <div className="md:col-span-7 rounded-2xl bg-white p-3 shadow-2xl border-2 border-slate-800 flex items-center justify-center">
              <img
                src="images/certificate_iso9001_full.png"
                alt="Reliable Industries ISO 9001:2015 Certificate"
                className="w-full h-auto object-contain rounded-lg"
              />
            </div>

            {/* Right: Verified Audit Credentials */}
            <div className="md:col-span-5 space-y-4">
              
              <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-3 text-xs">
                <div>
                  <span className="text-slate-500 font-mono block">Certified Enterprise:</span>
                  <span className="text-white font-bold text-sm">RELIABLE INDUSTRIES</span>
                </div>

                <div>
                  <span className="text-slate-500 font-mono block">Registered Manufacturing Plant:</span>
                  <span className="text-slate-300">
                    Plot No - 1430, Phase-2, Waghodia GIDC, Vadodara - 391 760, Gujarat, India
                  </span>
                </div>

                <div>
                  <span className="text-slate-500 font-mono block">Certified Scope:</span>
                  <span className="text-cyan-400 font-medium">
                    Manufacture and Supply of Sheet Metal Pressed Components
                  </span>
                </div>

                <div className="pt-2 border-t border-slate-850">
                  <span className="text-slate-500 font-mono block">Registration Certificate No:</span>
                  <span className="text-emerald-400 font-mono font-bold text-sm">QM 02 00934</span>
                </div>

                <div>
                  <span className="text-slate-500 font-mono block">Audit Report No:</span>
                  <span className="text-slate-200 font-mono">Q 7053/2015</span>
                </div>

                <div>
                  <span className="text-slate-500 font-mono block">Validity Timeline:</span>
                  <span className="text-amber-400 font-medium">
                    Valid from: 13.12.2024<br />
                    Valid until: 07.11.2027<br />
                    Initial certification: 08.11.2015
                  </span>
                </div>

                <div className="pt-2 border-t border-slate-850">
                  <span className="text-slate-500 font-mono block">Accreditation Bodies:</span>
                  <span className="text-slate-200 font-semibold">
                    NABCB (QM 002) & IAF (International Accreditation Forum)
                  </span>
                </div>
              </div>

              {/* Quality Commitment Notice */}
              <div className="p-4 rounded-xl bg-blue-950/40 border border-blue-900/50 text-xs space-y-2">
                <div className="text-blue-300 font-bold flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-blue-400" />
                  <span>Quality Assurance Commitment</span>
                </div>
                <p className="text-slate-300 leading-relaxed text-[11px]">
                  All sheet metal pressed parts and assemblies are supplied with certified Pre-Dispatch Inspection Reports (PDIR), raw material test certificates (MTC), and 100% heat traceability.
                </p>
              </div>

            </div>

          </div>
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-slate-800 bg-slate-900/90 flex items-center justify-between text-xs text-slate-400">
          <span>Verification Portal: www.iafcertsearch.org / www.tuv-nord.com/in</span>
          <button
            onClick={onClose}
            className="btn-secondary text-xs py-1.5 px-4"
          >
            Close
          </button>
        </div>

      </div>
    </div>
  );
}
