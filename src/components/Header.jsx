import React, { useState } from 'react';
import { 
  ShieldCheck, 
  MapPin, 
  Trophy, 
  Menu, 
  X, 
  FileText, 
  Send,
  Phone,
  Sparkles
} from 'lucide-react';
import { COMPANY_INFO } from '../data/productsData';

export default function Header({ onOpenSlides, onOpenCertificate, onOpenRfq }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Clean, neatly spaced navigation items
  const navLinks = [
    { label: 'Leadership & Award', href: '#founder' },
    { label: 'Capabilities', href: '#capabilities' },
    { label: 'Products', href: '#products' },
    { label: 'Materials', href: '#materials' },
    { label: 'Quality & ISO', href: '#quality' },
    { label: 'Facility', href: '#facility' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header className="sticky top-0 z-40 w-full bg-white shadow-sm border-b border-slate-200">
      
      {/* Top Corporate Registry Strip (Deep Royal Navy Blue) */}
      <div className="bg-[#0b1e36] text-slate-300 text-xs px-6 py-2.5 border-b border-[#162c48]">
        <div className="container mx-auto flex flex-wrap items-center justify-between gap-4">
          
          {/* Left: Top 10 MSME Award & ISO Cert */}
          <div className="flex items-center gap-5 flex-wrap text-xs">
            
            {/* Top 10 MSME Award Tag */}
            <a 
              href="#founder" 
              className="inline-flex items-center gap-1.5 text-amber-300 hover:text-amber-200 transition-colors font-bold font-mono tracking-wide"
            >
              <Trophy className="w-3.5 h-3.5 text-amber-400" />
              <span>Top 10 Growing MSMEs Awardee</span>
            </a>

            <span className="hidden sm:inline text-slate-600">•</span>

            {/* ISO 9001:2015 Cert */}
            <button 
              onClick={onOpenCertificate}
              className="inline-flex items-center gap-1.5 text-cyan-300 hover:text-white transition-colors font-medium cursor-pointer"
            >
              <ShieldCheck className="w-3.5 h-3.5 text-cyan-400" />
              <span>ISO 9001:2015 TÜV NORD Certified (QM 02 00934)</span>
            </button>

            <span className="hidden md:inline text-slate-600">•</span>

            {/* Plant Location */}
            <div className="hidden lg:flex items-center gap-1.5 text-slate-300">
              <MapPin className="w-3.5 h-3.5 text-cyan-400" />
              <span>Waghodia GIDC, Vadodara, Gujarat</span>
            </div>

          </div>

          {/* Right: Profile Deck & Quick Direct Action */}
          <div className="flex items-center gap-4 ml-auto text-xs">
            <button
              onClick={onOpenSlides}
              className="inline-flex items-center gap-1.5 text-white bg-[#008ba3] hover:bg-[#00778c] px-3 py-1 rounded text-xs font-semibold transition-all cursor-pointer shadow-sm"
              title="View original 5-slide company deck"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Company Deck</span>
            </button>
            <a 
              href="tel:+919825000000"
              className="hidden sm:flex items-center gap-1.5 text-slate-300 hover:text-cyan-300 transition-colors font-medium font-mono"
            >
              <Phone className="w-3 h-3 text-slate-400" />
              <span>+91 98250 00000</span>
            </a>
          </div>

        </div>
      </div>

      {/* Main Spacious Navigation Bar */}
      <nav className="px-6 py-4.5 bg-white">
        <div className="container mx-auto flex items-center justify-between gap-6 xl:gap-10">
          
          {/* Brand Logo & Name with Generous Breathing Room */}
          <a href="#" className="flex items-center gap-3.5 group shrink-0 text-decoration-none">
            <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[#008ba3] to-[#0b1e36] p-0.5 shadow-sm flex items-center justify-center">
              <div className="w-full h-full bg-white rounded-[10px] flex items-center justify-center overflow-hidden p-1">
                <img 
                  src="images/reliable_industries_logo.png" 
                  alt="Reliable Industries Logo" 
                  className="w-8 h-8 object-contain"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                <span className="hidden text-[#0b1e36] font-bold text-xl font-heading">RI</span>
              </div>
            </div>
            
            <div className="flex flex-col">
              <div className="flex items-center gap-2.5">
                <span className="text-xl font-bold tracking-normal text-[#0b1e36] font-heading group-hover:text-[#008ba3] transition-colors leading-none">
                  RELIABLE INDUSTRIES
                </span>
                <span className="text-[10px] px-2 py-0.5 rounded bg-slate-100 text-slate-600 font-mono font-bold">
                  ESTD. 1999
                </span>
              </div>
              <p className="text-xs text-slate-500 font-medium tracking-normal mt-1">
                Precision Sheet Metal Pressed Parts & Assemblies
              </p>
            </div>
          </a>

          {/* Desktop Nav Links: Neatly Spaced and Airy */}
          <div className="hidden lg:flex items-center gap-5 xl:gap-8 text-sm font-semibold text-slate-700">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="hover:text-[#008ba3] transition-colors py-1.5 px-1 relative whitespace-nowrap hover:border-b-2 hover:border-[#008ba3]"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Right Action: Clean, Prominent RFQ Button */}
          <div className="hidden sm:flex items-center gap-3 shrink-0">
            <button
              onClick={onOpenRfq}
              className="btn-primary text-xs py-2.5 px-5 shadow-sm font-bold whitespace-nowrap"
            >
              <Send className="w-3.5 h-3.5" />
              <span>Request Quote</span>
            </button>
          </div>

          {/* Mobile Menu Button for screens below LG */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2.5 rounded-lg text-slate-700 hover:text-[#008ba3] hover:bg-slate-100 transition-colors cursor-pointer border border-slate-200"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Dropdown Menu with Clean Spacing */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-4 pt-4 border-t border-slate-200 px-2 pb-4 animate-fade-in space-y-3 bg-white rounded-2xl shadow-lg">
            <div className="grid grid-cols-2 gap-3 pb-3 border-b border-slate-100">
              <button
                onClick={() => {
                  onOpenCertificate();
                  setMobileMenuOpen(false);
                }}
                className="flex items-center justify-center gap-2 p-2.5 rounded-xl bg-emerald-50 text-xs font-semibold text-emerald-800 border border-emerald-200"
              >
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>ISO 9001 Cert</span>
              </button>
              <button
                onClick={() => {
                  onOpenSlides();
                  setMobileMenuOpen(false);
                }}
                className="flex items-center justify-center gap-2 p-2.5 rounded-xl bg-cyan-50 text-xs font-semibold text-[#008ba3] border border-cyan-200"
              >
                <FileText className="w-4 h-4" />
                <span>Company Slides</span>
              </button>
            </div>

            <div className="space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block px-4 py-2.5 rounded-lg text-sm font-semibold text-slate-700 hover:bg-cyan-50 hover:text-[#008ba3] transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>

            <div className="pt-2">
              <button
                onClick={() => {
                  onOpenRfq();
                  setMobileMenuOpen(false);
                }}
                className="w-full btn-primary text-sm py-3 justify-center shadow-md font-bold"
              >
                <Send className="w-4 h-4" />
                <span>Request Engineering Quote</span>
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
