import React, { useState, useEffect } from 'react';
import { 
  Send, 
  CheckCircle2, 
  Printer, 
  ShieldCheck, 
  Layers, 
  RotateCcw,
  MessageSquare,
  User
} from 'lucide-react';
import { COMPANY_INFO } from '../data/productsData';

export default function InteractiveRFQ({ prefilledProduct }) {
  const [formData, setFormData] = useState({
    partType: prefilledProduct ? prefilledProduct.title : 'Precision Stamped Component',
    material: prefilledProduct ? prefilledProduct.material : 'Electrolytic Copper (EC Grade)',
    thickness: prefilledProduct ? prefilledProduct.thickness : '1.5 mm',
    finish: prefilledProduct ? prefilledProduct.finish : 'Silver Plating',
    processType: 'Stamping & Presswork',
    quantityTier: '5,000 – 25,000 pcs (Production Batch)',
    hasDrawing: 'Yes, 2D/3D CAD Drawing Available',
    targetTimeline: 'Within 2–4 Weeks',
    companyName: '',
    contactPerson: '',
    email: '',
    phone: '',
    city: '',
    notes: ''
  });

  const [rfqSubmitted, setRfqSubmitted] = useState(false);
  const [rfqNumber, setRfqNumber] = useState('');

  // If a prefilled product was passed in
  useEffect(() => {
    if (prefilledProduct) {
      setFormData(prev => ({
        ...prev,
        partType: prefilledProduct.title,
        material: prefilledProduct.material,
        thickness: prefilledProduct.thickness,
        finish: prefilledProduct.finish
      }));
    }
  }, [prefilledProduct]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const generatedId = `RFQ-RI-${new Date().getFullYear()}-${Math.floor(1000 + Math.random() * 9000)}`;
    setRfqNumber(generatedId);
    setRfqSubmitted(true);
  };

  const handlePrint = () => {
    window.print();
  };

  // WhatsApp quick connect URL generator
  const getWhatsAppUrl = () => {
    const text = encodeURIComponent(
      `Hello Reliable Industries!\n\nI would like to request an engineering quote for precision components.\n\n` +
      `*Part Type:* ${formData.partType}\n` +
      `*Material:* ${formData.material}\n` +
      `*Thickness:* ${formData.thickness}\n` +
      `*Surface Treatment:* ${formData.finish}\n` +
      `*Quantity:* ${formData.quantityTier}\n` +
      `*Company:* ${formData.companyName || 'Not specified'}\n` +
      `*Contact:* ${formData.contactPerson} (${formData.phone})\n` +
      `*City:* ${formData.city || 'India'}\n` +
      `*RFQ Ref:* ${rfqNumber || 'New Inquiry'}\n\n` +
      `Please let us know the quotation and feasibility.`
    );
    return `https://wa.me/919825000000?text=${text}`;
  };

  return (
    <div id="rfq-section" className="py-20 bg-[#faf7f2] relative border-b border-cyan-100/60">
      <div className="container mx-auto px-4">
        
        {/* Section Heading */}
        <div className="max-w-3xl mb-14 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold bg-cyan-50 text-[#008ba3] border border-cyan-200 mb-4 shadow-sm">
            <Send className="w-3.5 h-3.5" />
            <span>Direct Technical Quotation Desk</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0a1f38] font-heading leading-tight">
            Request an <span className="text-gradient-cyan">Engineering Quote (RFQ)</span>
          </h2>
          <p className="mt-4 sm:mt-5 text-slate-600 text-base sm:text-lg leading-relaxed">
            Configure your component parameters, material specifications, and volume requirements. Our technical estimation desk in Vadodara responds within 24 hours.
          </p>
        </div>

        {!rfqSubmitted ? (
          <div className="rounded-3xl bg-white border border-cyan-200/80 p-6 sm:p-10 shadow-xl">
            
            {prefilledProduct && (
              <div className="mb-8 p-4 rounded-2xl bg-cyan-50 border border-cyan-200 flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-white p-1 overflow-hidden shrink-0 shadow-sm border border-slate-100">
                    <img src={prefilledProduct.image} alt={prefilledProduct.title} className="w-full h-full object-contain" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-[#008ba3] uppercase font-bold">Selected from Catalog:</span>
                    <h4 className="text-sm font-bold text-[#0a1f38]">{prefilledProduct.title}</h4>
                  </div>
                </div>
                <span className="text-xs text-[#008ba3] font-semibold hidden sm:inline">Specifications pre-filled below</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-8">
              
              {/* Fieldset 1: Part & Engineering Specs */}
              <div>
                <h3 className="text-sm font-bold text-[#008ba3] font-heading uppercase tracking-wider flex items-center gap-2 mb-4">
                  <Layers className="w-4 h-4" />
                  <span>1. Component & Material Parameters</span>
                </h3>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  
                  {/* Part Title / Type */}
                  <div>
                    <label className="block text-xs font-mono font-semibold text-slate-700 mb-1.5">
                      Component / Assembly Name:
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.partType}
                      onChange={(e) => setFormData({ ...formData, partType: e.target.value })}
                      placeholder="e.g. Copper Stamped Contact, Brazed Shunt"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-900 focus:outline-none focus:border-[#008ba3] focus:bg-white"
                    />
                  </div>

                  {/* Material Selection */}
                  <div>
                    <label className="block text-xs font-mono font-semibold text-slate-700 mb-1.5">
                      Raw Material:
                    </label>
                    <select
                      value={formData.material}
                      onChange={(e) => setFormData({ ...formData, material: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-900 focus:outline-none focus:border-[#008ba3] focus:bg-white"
                    >
                      <option value="Electrolytic Copper (EC Grade)">Electrolytic Copper (EC Grade 99.9%)</option>
                      <option value="Industrial Brass (CuZn37 / CuZn39Pb3)">Industrial Brass (CuZn37 / CuZn39Pb3)</option>
                      <option value="Stainless Steel (SS 304 / 316)">Stainless Steel (SS 304 / 316)</option>
                      <option value="CRCA Steel (IS 513 D/DD/EDD)">CRCA Steel (IS 513 D/DD/EDD)</option>
                      <option value="Hot-Rolled (HR) Steel (IS 2062)">Hot-Rolled (HR) Steel (IS 2062)</option>
                      <option value="Galvanized Sheet (GI)">Galvanized Sheet (GI)</option>
                      <option value="Aluminium (1050 / 6061 / 5052)">Aluminium (1050 / 6061 / 5052)</option>
                      <option value="Other / Client Specified Alloy">Other / Client Specified Alloy</option>
                    </select>
                  </div>

                  {/* Material Thickness */}
                  <div>
                    <label className="block text-xs font-mono font-semibold text-slate-700 mb-1.5">
                      Thickness / Gauge:
                    </label>
                    <input
                      type="text"
                      value={formData.thickness}
                      onChange={(e) => setFormData({ ...formData, thickness: e.target.value })}
                      placeholder="e.g. 1.2 mm, 2.5 mm, 5.0 mm"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-900 focus:outline-none focus:border-[#008ba3] focus:bg-white"
                    />
                  </div>

                  {/* Process Type */}
                  <div>
                    <label className="block text-xs font-mono font-semibold text-slate-700 mb-1.5">
                      Primary Process:
                    </label>
                    <select
                      value={formData.processType}
                      onChange={(e) => setFormData({ ...formData, processType: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-900 focus:outline-none focus:border-[#008ba3] focus:bg-white"
                    >
                      <option value="Stamping & Presswork">Stamping & Presswork (Progressive / Single Die)</option>
                      <option value="Brazed Assembly (Copper Braid/Lug)">Brazed Assembly (Copper Braid / Lug)</option>
                      <option value="Integrated Mechanical Sub-Assembly">Integrated Mechanical Sub-Assembly</option>
                      <option value="Deep Drawing (Sleeves / Housings)">Deep Drawing (Sleeves / Housings)</option>
                      <option value="Perforated Chassis / Enclosure">Perforated Chassis / Enclosure</option>
                      <option value="Tooling & Prototype Development">Tooling & Prototype Development</option>
                    </select>
                  </div>

                  {/* Surface Finish */}
                  <div>
                    <label className="block text-xs font-mono font-semibold text-slate-700 mb-1.5">
                      Surface Finish:
                    </label>
                    <select
                      value={formData.finish}
                      onChange={(e) => setFormData({ ...formData, finish: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-900 focus:outline-none focus:border-[#008ba3] focus:bg-white"
                    >
                      <option value="Silver Electroplating">Silver Electroplating (Electrical Contacts)</option>
                      <option value="Bright Tin Plating">Bright Tin Plating (Busbars & Terminals)</option>
                      <option value="Zinc Blue Trivalent Passivation">Zinc Blue Trivalent Passivation (RoHS)</option>
                      <option value="Zinc Yellow Dichromate">Zinc Yellow Dichromate (480+ Hrs Salt Spray)</option>
                      <option value="Zinc-Cobalt High Corrosion Barrier">Zinc-Cobalt High Corrosion Barrier</option>
                      <option value="Bright Nickel Plating">Bright Nickel Plating</option>
                      <option value="Epoxy Powder Coating">Epoxy Powder Coating</option>
                      <option value="Raw / Natural Deburred Finish">Raw / Natural Deburred Finish</option>
                    </select>
                  </div>

                  {/* Volume Tier */}
                  <div>
                    <label className="block text-xs font-mono font-semibold text-slate-700 mb-1.5">
                      Estimated Production Quantity:
                    </label>
                    <select
                      value={formData.quantityTier}
                      onChange={(e) => setFormData({ ...formData, quantityTier: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-900 focus:outline-none focus:border-[#008ba3] focus:bg-white"
                    >
                      <option value="Prototype / Pilot Batch (100 – 1,000 pcs)">Prototype / Pilot Batch (100 – 1,000 pcs)</option>
                      <option value="Medium Batch (1,000 – 10,000 pcs)">Medium Batch (1,000 – 10,000 pcs)</option>
                      <option value="High Volume Regular (10,000 – 100,000+ pcs/mo)">High Volume Regular (10,000 – 100,000+ pcs/mo)</option>
                      <option value="Annual Rate Contract (ARC)">Annual Rate Contract (ARC)</option>
                    </select>
                  </div>

                </div>
              </div>

              {/* Fieldset 2: Drawing & Buyer Info */}
              <div className="pt-4 border-t border-slate-100">
                <h3 className="text-sm font-bold text-[#0a1f38] font-heading uppercase tracking-wider flex items-center gap-2 mb-4">
                  <User className="w-4 h-4 text-[#008ba3]" />
                  <span>2. Buyer Details & Drawings</span>
                </h3>

                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  
                  <div>
                    <label className="block text-xs font-mono font-semibold text-slate-700 mb-1.5">
                      Contact Person: *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.contactPerson}
                      onChange={(e) => setFormData({ ...formData, contactPerson: e.target.value })}
                      placeholder="Your Name"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-900 focus:outline-none focus:border-[#008ba3] focus:bg-white"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono font-semibold text-slate-700 mb-1.5">
                      Company / Organization: *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.companyName}
                      onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                      placeholder="e.g. Switchgear OEM"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-900 focus:outline-none focus:border-[#008ba3] focus:bg-white"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono font-semibold text-slate-700 mb-1.5">
                      Email Address: *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="buyer@company.com"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-900 focus:outline-none focus:border-[#008ba3] focus:bg-white"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono font-semibold text-slate-700 mb-1.5">
                      Phone / WhatsApp: *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+91 98765 43210"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-900 focus:outline-none focus:border-[#008ba3] focus:bg-white"
                    />
                  </div>

                </div>

                {/* Additional Notes */}
                <div className="mt-4">
                  <label className="block text-xs font-mono font-semibold text-slate-700 mb-1.5">
                    Engineering Notes / Tolerances / Drawing Link:
                  </label>
                  <textarea
                    rows={3}
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    placeholder="Specify critical hole tolerances, annual volume projections, sample requirements, or paste a link to CAD drawing files (PDF, STEP, DXF)..."
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-900 focus:outline-none focus:border-[#008ba3] focus:bg-white"
                  />
                </div>
              </div>

              {/* Form Actions */}
              <div className="pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-2 text-xs text-slate-600 font-medium">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  <span>NDAs signed on request. All customer CAD designs kept strictly confidential.</span>
                </div>

                <button
                  type="submit"
                  className="btn-primary text-sm py-3 px-8 shadow-lg font-bold"
                >
                  <Send className="w-4 h-4" />
                  <span>Generate & Submit RFQ</span>
                </button>
              </div>

            </form>
          </div>
        ) : (
          /* RFQ Submission Success / Confirmation Slip */
          <div className="max-w-3xl mx-auto rounded-3xl bg-white border border-emerald-300 p-8 sm:p-12 shadow-2xl animate-fade-in relative">
            
            {/* Top Success Badge */}
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-700 border border-emerald-200 flex items-center justify-center shadow-sm">
                <CheckCircle2 className="w-7 h-7" />
              </div>
              <div>
                <span className="text-xs font-mono text-emerald-700 uppercase font-bold">
                  Request For Quote Logged Successfully
                </span>
                <h3 className="text-2xl font-bold text-[#0a1f38] font-heading">
                  Reference: <span className="text-[#008ba3]">{rfqNumber}</span>
                </h3>
              </div>
            </div>

            <p className="text-sm text-slate-700 leading-relaxed mb-6 font-normal">
              Thank you, <strong className="text-[#0a1f38]">{formData.contactPerson}</strong>! Your technical quotation request for <strong className="text-[#0a1f38]">{formData.companyName}</strong> has been received by Reliable Industries in Waghodia GIDC, Vadodara. Our engineering team will review your specifications and contact you shortly.
            </p>

            {/* Printable Specification Slip */}
            <div className="p-6 rounded-2xl bg-[#faf7f2] border border-slate-200 space-y-3 text-xs mb-8">
              <div className="flex justify-between border-b border-slate-200 pb-2">
                <span className="text-slate-500 font-mono">RFQ ID:</span>
                <span className="text-[#008ba3] font-mono font-bold">{rfqNumber}</span>
              </div>
              <div className="flex justify-between border-b border-slate-200 pb-2">
                <span className="text-slate-500 font-mono">Component:</span>
                <span className="text-[#0a1f38] font-bold">{formData.partType}</span>
              </div>
              <div className="flex justify-between border-b border-slate-200 pb-2">
                <span className="text-slate-500 font-mono">Material:</span>
                <span className="text-slate-800 font-medium">{formData.material}</span>
              </div>
              <div className="flex justify-between border-b border-slate-200 pb-2">
                <span className="text-slate-500 font-mono">Thickness / Gauge:</span>
                <span className="text-slate-800 font-medium">{formData.thickness}</span>
              </div>
              <div className="flex justify-between border-b border-slate-200 pb-2">
                <span className="text-slate-500 font-mono">Surface Finish:</span>
                <span className="text-amber-800 font-bold">{formData.finish}</span>
              </div>
              <div className="flex justify-between border-b border-slate-200 pb-2">
                <span className="text-slate-500 font-mono">Volume Tier:</span>
                <span className="text-emerald-700 font-bold">{formData.quantityTier}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500 font-mono">Plant:</span>
                <span className="text-slate-700 font-medium">Reliable Industries, Waghodia GIDC, Vadodara</span>
              </div>
            </div>

            {/* Actions for the Buyer */}
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <a
                  href={getWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-amber text-xs py-2.5 px-5 font-bold flex items-center gap-2 shadow-md"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Send Directly on WhatsApp</span>
                </a>

                <button
                  onClick={handlePrint}
                  className="btn-secondary text-xs py-2.5 px-4 flex items-center gap-2"
                >
                  <Printer className="w-4 h-4 text-slate-500" />
                  <span>Print RFQ Slip</span>
                </button>
              </div>

              <button
                onClick={() => setRfqSubmitted(false)}
                className="text-xs text-slate-600 hover:text-[#008ba3] flex items-center gap-1.5 transition-colors cursor-pointer font-bold"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Submit Another Request</span>
              </button>
            </div>

          </div>
        )}

      </div>
    </div>
  );
}
