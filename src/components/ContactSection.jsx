import React, { useState } from 'react';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Send, 
  CheckCircle2, 
  Building2, 
  MessageSquare,
  HelpCircle,
  ChevronDown,
  ChevronUp
} from 'lucide-react';
import { COMPANY_INFO } from '../data/productsData';

export default function ContactSection({ onOpenRfq }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    subject: 'General Manufacturing Inquiry',
    message: ''
  });

  const [messageSent, setMessageSent] = useState(false);
  const [activeFaq, setActiveFaq] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessageSent(true);
  };

  const faqs = [
    {
      q: 'Can you develop new tooling and dies from our 2D/3D CAD drawings?',
      a: 'Yes, absolutely. Our toolroom engineers specialize in designing progressive, compound, and deep drawing dies from your CAD models (STEP, IGES, DXF, PDF). We also offer rapid prototype stamping runs to validate dimensions before building production tooling.'
    },
    {
      q: 'How do you test and guarantee brazed flexible copper shunt integrity?',
      a: 'We perform 100% micro-ohm resistance testing across brazed joints to guarantee low contact resistance and high ampacity. In addition, destructive shear pull-tests and thermal cycling audits verify metallurgical bonding between copper braids and terminal lugs.'
    },
    {
      q: 'What surface finishes and plating specifications do you support?',
      a: 'We provide certified electroplating including Silver (for low contact resistance switchgear), Bright Tin, Zinc Blue Passivation (trivalent RoHS), Zinc Yellow Dichromate (480+ hours salt spray protection), Zinc-Cobalt, Bright Nickel, and Epoxy Powder Coating.'
    },
    {
      q: 'What is your typical production turnaround and lead time?',
      a: 'For existing active tooling, production batches are dispatched in 7 to 14 days. For new component development with dedicated tooling, prototype samples are delivered in 2 to 3 weeks, followed by full PPAP approval.'
    },
    {
      q: 'Do you provide inspection certificates and batch traceability?',
      a: 'Yes. Every dispatch is accompanied by a Pre-Dispatch Inspection Report (PDIR), raw material test certificates (MTC), and plating thickness reports under our TÜV NORD ISO 9001:2015 quality management system.'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-[#faf7f2] relative border-b border-cyan-100/60">
      <div className="container mx-auto px-4">
        
        {/* Section Heading */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold bg-cyan-50 text-[#008ba3] border border-cyan-200 mb-4 shadow-sm">
            <Building2 className="w-3.5 h-3.5" />
            <span>Plant Location & Inquiries</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0a1f38] font-heading leading-tight">
            Connect with <span className="text-gradient-cyan">Reliable Industries</span>
          </h2>
          <p className="mt-4 sm:mt-5 text-slate-600 text-base sm:text-lg leading-relaxed">
            Have an engineering requirement or looking for an ISO 9001:2015 certified manufacturing partner in Vadodara? Get in touch with our team today.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 items-start mb-20">
          
          {/* Left: Contact Info & Address */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Manufacturing Plant Location Card */}
            <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-4">
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-amber-50 border border-amber-200 text-amber-600 flex items-center justify-center shrink-0 shadow-sm">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-[#0a1f38] font-heading uppercase tracking-wider">
                    Manufacturing Facility Address:
                  </h4>
                  <p className="text-sm text-slate-700 mt-1 font-medium leading-relaxed">
                    Reliable Industries<br />
                    Plot No - 1430, Phase-2, Waghodia GIDC,<br />
                    Vadodara – 391 760, Gujarat, India.
                  </p>
                  <span className="inline-block mt-2 text-xs text-[#008ba3] font-mono font-bold">
                    GIDC Industrial Estate • Close to NH-48
                  </span>
                </div>
              </div>
            </div>

            {/* Direct Phone / WhatsApp Card */}
            <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-4">
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-600 flex items-center justify-center shrink-0 shadow-sm">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-[#0a1f38] font-heading uppercase tracking-wider">
                    Direct Plant Phone & WhatsApp:
                  </h4>
                  <p className="text-sm text-slate-800 mt-1 font-bold">
                    +91 98250 00000
                  </p>
                  <div className="mt-3">
                    <a
                      href="https://wa.me/919825000000?text=Hello%20Reliable%20Industries%2C%20I%20have%20an%20engineering%20inquiry%20for%20sheet%20metal%20components."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-xs font-bold px-3.5 py-2 rounded-xl bg-emerald-50 text-emerald-700 border border-emerald-200 hover:bg-emerald-100 transition-colors shadow-sm"
                    >
                      <MessageSquare className="w-3.5 h-3.5" />
                      <span>Chat on WhatsApp</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Email & Operating Hours */}
            <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-4">
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-cyan-50 border border-cyan-200 text-[#008ba3] flex items-center justify-center shrink-0 shadow-sm">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-[#0a1f38] font-heading uppercase tracking-wider">
                    Technical Sales Email:
                  </h4>
                  <a 
                    href="mailto:contact@reliableindustries.co.in"
                    className="text-sm text-[#008ba3] font-bold hover:underline mt-1 block"
                  >
                    contact@reliableindustries.co.in
                  </a>
                  <p className="text-xs text-slate-500 mt-2 flex items-center gap-1.5 font-medium">
                    <Clock className="w-3.5 h-3.5" />
                    <span>Mon – Sat: 8:30 AM – 6:30 PM IST</span>
                  </p>
                </div>
              </div>
            </div>

          </div>

          {/* Right: Quick Direct Contact Form */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl bg-white border border-cyan-200/80 p-8 shadow-xl">
              <h3 className="text-xl font-bold text-[#0a1f38] font-heading mb-2">
                Send Us a Message
              </h3>
              <p className="text-xs text-slate-500 mb-6 font-medium">
                Fill out the quick form below or use our interactive RFQ builder for detailed technical part specs.
              </p>

              {!messageSent ? (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono font-semibold text-slate-700 mb-1">
                        Your Full Name: *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="John Doe"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-900 focus:outline-none focus:border-[#008ba3] focus:bg-white"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-mono font-semibold text-slate-700 mb-1">
                        Company Name: *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        placeholder="Organization Name"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-900 focus:outline-none focus:border-[#008ba3] focus:bg-white"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono font-semibold text-slate-700 mb-1">
                        Email Address: *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="name@company.com"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-900 focus:outline-none focus:border-[#008ba3] focus:bg-white"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-mono font-semibold text-slate-700 mb-1">
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

                  <div>
                    <label className="block text-xs font-mono font-semibold text-slate-700 mb-1">
                      Inquiry Category:
                    </label>
                    <select
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-900 focus:outline-none focus:border-[#008ba3] focus:bg-white"
                    >
                      <option value="Precision Sheet Metal Pressed Parts">Precision Sheet Metal Pressed Parts</option>
                      <option value="Brazed Assemblies & Copper Shunts">Brazed Assemblies & Copper Shunts</option>
                      <option value="Electromechanical Sub-Assemblies">Electromechanical Sub-Assemblies</option>
                      <option value="Deep Drawing & Cylindrical Sleeves">Deep Drawing & Cylindrical Sleeves</option>
                      <option value="Surface Finishing & Plating Inquiries">Surface Finishing & Plating Inquiries</option>
                      <option value="Vendor Registration / Plant Audit Visit">Vendor Registration / Plant Audit Visit</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-mono font-semibold text-slate-700 mb-1">
                      Message / Project Details: *
                    </label>
                    <textarea
                      rows={4}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Please share component specifications, material grade, expected batch quantity, or drawing references..."
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-900 focus:outline-none focus:border-[#008ba3] focus:bg-white"
                    />
                  </div>

                  <div className="pt-2 flex items-center justify-between">
                    <button
                      type="submit"
                      className="btn-primary text-sm py-2.5 px-6 shadow-md"
                    >
                      <Send className="w-4 h-4" />
                      <span>Send Direct Message</span>
                    </button>

                    <button
                      type="button"
                      onClick={onOpenRfq}
                      className="text-xs text-[#008ba3] hover:text-[#006d80] font-bold cursor-pointer"
                    >
                      Open Full RFQ Wizard →
                    </button>
                  </div>
                </form>
              ) : (
                <div className="p-8 text-center bg-cyan-50/50 rounded-2xl border border-emerald-300 animate-fade-in space-y-3">
                  <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h4 className="text-lg font-bold text-[#0a1f38] font-heading">
                    Message Transmitted Successfully!
                  </h4>
                  <p className="text-xs text-slate-600 max-w-md mx-auto">
                    Thank you for reaching out to Reliable Industries. Our technical team in Vadodara will review your inquiry and follow up promptly.
                  </p>
                  <button
                    onClick={() => setMessageSent(false)}
                    className="mt-4 btn-secondary text-xs py-2 px-4"
                  >
                    Send Another Message
                  </button>
                </div>
              )}

            </div>
          </div>

        </div>

        {/* FAQ Accordion Section */}
        <div className="max-w-4xl mx-auto rounded-3xl bg-white p-8 sm:p-10 border border-slate-200 shadow-md">
          <div className="flex items-center gap-2 mb-6">
            <HelpCircle className="w-5 h-5 text-amber-600" />
            <h3 className="text-xl sm:text-2xl font-bold text-[#0a1f38] font-heading">
              Frequently Asked Questions for Industrial Buyers
            </h3>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, idx) => {
              const isOpen = activeFaq === idx;
              return (
                <div 
                  key={idx}
                  className="rounded-2xl bg-[#faf7f2] border border-slate-200 overflow-hidden transition-all"
                >
                  <button
                    onClick={() => setActiveFaq(isOpen ? null : idx)}
                    className="w-full p-4 text-left flex items-center justify-between gap-4 text-sm font-bold text-[#0a1f38] hover:text-[#008ba3] transition-colors cursor-pointer"
                  >
                    <span>{faq.q}</span>
                    {isOpen ? (
                      <ChevronUp className="w-4 h-4 text-[#008ba3] shrink-0" />
                    ) : (
                      <ChevronDown className="w-4 h-4 text-slate-400 shrink-0" />
                    )}
                  </button>
                  {isOpen && (
                    <div className="p-4 pt-0 text-xs text-slate-700 leading-relaxed border-t border-slate-200/60 bg-white font-medium">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
