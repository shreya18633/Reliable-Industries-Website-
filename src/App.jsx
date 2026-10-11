import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import FounderStory from './components/FounderStory';
import Capabilities from './components/Capabilities';
import ProductCatalog from './components/ProductCatalog';
import MaterialsSection from './components/MaterialsSection';
import QualityCompliance from './components/QualityCompliance';
import FacilitySpecs from './components/FacilitySpecs';
import InteractiveRFQ from './components/InteractiveRFQ';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import SlideDeckModal from './components/SlideDeckModal';
import CertificateModal from './components/CertificateModal';
import { MessageSquare, ArrowUp, Sparkles } from 'lucide-react';

export default function App() {
  const [isSlidesOpen, setIsSlidesOpen] = useState(false);
  const [isCertOpen, setIsCertOpen] = useState(false);
  const [prefilledProduct, setPrefilledProduct] = useState(null);
  const [toastMessage, setToastMessage] = useState(null);

  const handleSelectProductForRfq = (product) => {
    setPrefilledProduct(product);
    showToast(`Added "${product.title}" to your RFQ form!`);
    
    // Smooth scroll to RFQ section
    const rfqEl = document.getElementById('rfq-section');
    if (rfqEl) {
      rfqEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOpenRfq = () => {
    const rfqEl = document.getElementById('rfq-section');
    if (rfqEl) {
      rfqEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 4000);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#faf7f2] text-slate-800 flex flex-col font-sans selection:bg-[#008ba3] selection:text-white">
      
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-24 left-1/2 -translate-x-1/2 z-50 animate-fade-in">
          <div className="px-5 py-3 rounded-2xl bg-[#008ba3] text-white shadow-2xl border border-cyan-300 text-xs sm:text-sm font-bold flex items-center gap-2.5">
            <Sparkles className="w-4 h-4 text-amber-300" />
            <span>{toastMessage}</span>
          </div>
        </div>
      )}

      {/* Main Header */}
      <Header
        onOpenSlides={() => setIsSlidesOpen(true)}
        onOpenCertificate={() => setIsCertOpen(true)}
        onOpenRfq={handleOpenRfq}
      />

      {/* Hero Section */}
      <Hero
        onOpenRfq={handleOpenRfq}
        onOpenSlides={() => setIsSlidesOpen(true)}
        onOpenCertificate={() => setIsCertOpen(true)}
      />

      {/* Founder Tribute & Leadership */}
      <FounderStory
        onOpenCertificate={() => setIsCertOpen(true)}
        onOpenSlides={() => setIsSlidesOpen(true)}
      />

      {/* Capabilities & Surface Finishing */}
      <Capabilities
        onOpenRfq={handleOpenRfq}
      />

      {/* Filterable Products & Assemblies Catalog */}
      <ProductCatalog
        onSelectProductForRfq={handleSelectProductForRfq}
        onOpenRfq={handleOpenRfq}
      />

      {/* Ferrous & Non-Ferrous Materials */}
      <MaterialsSection
        onOpenRfq={handleOpenRfq}
      />

      {/* Quality, ISO 9001:2015 & Metrology */}
      <QualityCompliance
        onOpenCertificate={() => setIsCertOpen(true)}
      />

      {/* Plant Infrastructure & Waghodia GIDC Specs */}
      <FacilitySpecs
        onOpenRfq={handleOpenRfq}
      />

      {/* Interactive 4-Step RFQ Builder */}
      <InteractiveRFQ
        prefilledProduct={prefilledProduct}
      />

      {/* Plant Contact & FAQs */}
      <ContactSection
        onOpenRfq={handleOpenRfq}
      />

      {/* Industrial Footer */}
      <Footer
        onOpenSlides={() => setIsSlidesOpen(true)}
        onOpenCertificate={() => setIsCertOpen(true)}
        onOpenRfq={handleOpenRfq}
      />

      {/* Floating Action Buttons (WhatsApp & Scroll to Top) */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-3">
        {/* WhatsApp Quick Action */}
        <a
          href="https://wa.me/919825000000?text=Hello%20Reliable%20Industries%2C%20I%20would%20like%20to%20inquire%20about%20precision%20sheet%20metal%20parts."
          target="_blank"
          rel="noopener noreferrer"
          className="w-12 h-12 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white flex items-center justify-center shadow-xl shadow-emerald-950/20 transition-all hover:scale-110 group relative cursor-pointer"
          aria-label="Direct WhatsApp Chat"
        >
          <MessageSquare className="w-6 h-6" />
          <span className="absolute right-14 bg-[#0a1f38] text-white text-[11px] font-semibold py-1 px-2.5 rounded-lg border border-[#162c4a] whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity shadow-lg pointer-events-none">
            Chat on WhatsApp
          </span>
        </a>

        {/* Scroll to top */}
        <button
          onClick={scrollToTop}
          className="w-12 h-12 rounded-full bg-white hover:bg-slate-100 text-[#0a1f38] hover:text-[#008ba3] flex items-center justify-center shadow-lg border border-slate-200 transition-all hover:scale-105 cursor-pointer"
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      </div>

      {/* Modals */}
      <SlideDeckModal
        isOpen={isSlidesOpen}
        onClose={() => setIsSlidesOpen(false)}
      />

      <CertificateModal
        isOpen={isCertOpen}
        onClose={() => setIsCertOpen(false)}
      />

    </div>
  );
}
