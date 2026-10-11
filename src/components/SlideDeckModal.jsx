import React, { useState, useEffect } from 'react';
import { 
  X, 
  ChevronLeft, 
  ChevronRight, 
  Download, 
  ExternalLink, 
  FileText, 
  ShieldCheck,
  CheckCircle2,
  Sparkles
} from 'lucide-react';

export default function SlideDeckModal({ isOpen, onClose }) {
  const slides = [
    {
      id: 1,
      title: 'Slide 1: Capabilities & Raw Metal Feedstocks',
      subtitle: 'Precision sheet metal pressed parts, surface treatments & ferrous/non-ferrous materials',
      image: 'images/slide1_materials.png',
      highlights: [
        'Precision sheet-metal pressed parts',
        'Assemblies & sub-assemblies (mechanical and brazed)',
        'Surface treatments: Zinc, Zinc-cobalt, Zinc blue, Nickel, Silver, Powder coating',
        'Metals: Stainless Steel, CRCA/HR/Galvanized, Copper, Brass, Aluminium'
      ]
    },
    {
      id: 2,
      title: 'Slide 2: Components & Assemblies',
      subtitle: 'High-tolerance stamping, brazed shunts & integrated mechanical assemblies',
      image: 'images/slide2_assemblies.png',
      highlights: [
        'Stamping: High-tolerance stamping across varied gauges and alloys',
        'Brazed Assemblies: Robust joins for electrical and thermal conductivity',
        'Assemblies: End-to-end sub-assemblies configured to integration specs'
      ]
    },
    {
      id: 3,
      title: 'Slide 3: Precision Stampings Gallery A',
      subtitle: 'Sheet brackets, deep drawn sleeves, and copper switchgear contacts',
      image: 'images/slide3_stampings_a.png',
      highlights: [
        'Sheet steel clips, angle brackets and retainers',
        'Deep-drawn cylindrical collars and electrical box clamps',
        'High-conductivity copper stamped contacts, links and terminals'
      ]
    },
    {
      id: 4,
      title: 'Slide 4: Precision Stampings Gallery B',
      subtitle: 'Perforated chassis, heavy structural washers, and passivated enclosures',
      image: 'images/slide4_stampings_b.png',
      highlights: [
        'Perforated airflow chassis and guide rails',
        'Heavy-gauge washers, threaded plates and mounting bars',
        'Zinc-passivated perforated equipment cover with ventilation louvers'
      ]
    },
    {
      id: 5,
      title: 'Slide 5: Quality, Safety & Compliance',
      subtitle: 'ISO 9001:2015 TÜV NORD certification & Waghodia GIDC plant credentials',
      image: 'images/slide5_quality_iso.png',
      highlights: [
        'ISO 9001:2015 Certified by TUV INDIA PVT. LTD. (TÜV NORD GROUP)',
        'Accreditations: NABCB (QM 002) and IAF',
        'Plant: Plot No - 1430, Phase-2, Waghodia GIDC, Vadodara - 391 760, Gujarat',
        'Registration No. QM 02 00934 • Valid through 07.11.2027'
      ]
    }
  ];

  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!isOpen) return;
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') setCurrentSlideIndex((prev) => (prev + 1) % slides.length);
      if (e.key === 'ArrowLeft') setCurrentSlideIndex((prev) => (prev - 1 + slides.length) % slides.length);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, slides.length, onClose]);

  if (!isOpen) return null;

  const currentSlide = slides[currentSlideIndex];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 modal-backdrop animate-fade-in">
      <div 
        className="relative w-full max-w-5xl bg-slate-950 border border-slate-700 rounded-3xl overflow-hidden shadow-2xl max-h-[95vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-4 sm:p-5 border-b border-slate-800 flex items-center justify-between bg-slate-900/90">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-blue-500/10 border border-blue-500/30 text-blue-400 flex items-center justify-center">
              <FileText className="w-4 h-4" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-sm sm:text-base font-bold text-white font-heading">
                  Reliable Industries • Official Profile Deck
                </h3>
                <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-slate-800 text-slate-300 border border-slate-700">
                  {currentSlideIndex + 1} / {slides.length}
                </span>
              </div>
              <p className="text-xs text-slate-400 hidden sm:block">
                Original Presentation Slides from the Founder
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={onClose}
              className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Main Content Area */}
        <div className="p-4 sm:p-6 overflow-y-auto flex-1 space-y-4">
          
          {/* Main Slide Image Frame */}
          <div className="relative rounded-2xl bg-black border border-slate-800 overflow-hidden shadow-2xl flex items-center justify-center min-h-[300px] sm:min-h-[420px]">
            <img
              src={currentSlide.image}
              alt={currentSlide.title}
              className="w-full h-auto max-h-[65vh] object-contain"
            />

            {/* Navigation arrows */}
            <button
              onClick={() => setCurrentSlideIndex((prev) => (prev - 1 + slides.length) % slides.length)}
              className="absolute left-3 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-slate-900/80 hover:bg-blue-600 text-white transition-all backdrop-blur-md shadow-lg cursor-pointer"
              title="Previous Slide (Left Arrow)"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <button
              onClick={() => setCurrentSlideIndex((prev) => (prev + 1) % slides.length)}
              className="absolute right-3 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-slate-900/80 hover:bg-blue-600 text-white transition-all backdrop-blur-md shadow-lg cursor-pointer"
              title="Next Slide (Right Arrow)"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          {/* Slide Description & Key Points */}
          <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800">
            <h4 className="text-sm font-bold text-white font-heading">
              {currentSlide.title}
            </h4>
            <p className="text-xs text-slate-400 mt-0.5">
              {currentSlide.subtitle}
            </p>

            <div className="mt-3 grid sm:grid-cols-2 gap-2 text-xs">
              {currentSlide.highlights.map((h, i) => (
                <div key={i} className="flex items-center gap-2 text-slate-300">
                  <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                  <span>{h}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Thumbnail Strip */}
          <div className="grid grid-cols-5 gap-2 pt-2">
            {slides.map((s, idx) => (
              <button
                key={s.id}
                onClick={() => setCurrentSlideIndex(idx)}
                className={`p-1 rounded-xl border transition-all cursor-pointer overflow-hidden relative ${
                  currentSlideIndex === idx
                    ? 'border-blue-500 bg-slate-900 ring-2 ring-blue-500/30'
                    : 'border-slate-800 bg-slate-950/60 opacity-60 hover:opacity-100 hover:border-slate-700'
                }`}
              >
                <div className="h-12 sm:h-16 w-full rounded-lg overflow-hidden bg-black flex items-center justify-center">
                  <img src={s.image} alt={s.title} className="w-full h-full object-cover" />
                </div>
                <div className="text-[10px] text-center font-mono text-slate-300 mt-1 truncate">
                  Slide {s.id}
                </div>
              </button>
            ))}
          </div>

        </div>

        {/* Footer */}
        <div className="p-4 border-t border-slate-800 bg-slate-900/90 flex items-center justify-between text-xs text-slate-400">
          <div className="flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>Reliable Industries, Vadodara Gujarat (25 Years)</span>
          </div>

          <button
            onClick={onClose}
            className="btn-secondary text-xs py-1.5 px-4"
          >
            Close Viewer
          </button>
        </div>

      </div>
    </div>
  );
}
