import React from 'react';
import { 
  Quote, 
  Award, 
  Sparkles, 
  Compass, 
  Users, 
  ShieldCheck, 
  Factory,
  Trophy,
  CheckCircle2,
  Heart,
  Star
} from 'lucide-react';
import { COMPANY_INFO } from '../data/productsData';

export default function FounderStory({ onOpenCertificate, onOpenSlides }) {
  const leadershipPillars = [
    {
      title: 'Operational Resilience',
      desc: 'Pioneering heavy metal stamping and precision presswork as a woman founder for over 25 years. Navigating operational and market challenges with grit and a solutions-driven mindset.',
      icon: Award,
      color: 'text-amber-700',
      bgColor: 'bg-amber-50',
      borderColor: 'border-amber-200'
    },
    {
      title: 'Quality & Reliability First',
      desc: 'Delivering repeatable micron-level tolerance on every progressive stamping, brazed copper shunt, and assembly. Quality is our baseline metric for sustaining multi-decade OEM contracts.',
      icon: ShieldCheck,
      color: 'text-[#008ba3]',
      bgColor: 'bg-cyan-50',
      borderColor: 'border-cyan-200'
    },
    {
      title: 'Continuous Engineering',
      desc: 'Systematically upgrading press line technologies, adopting ISO 9001:2015 frameworks, progressive tooling dies, and silver brazing setups to meet evolving Tier-1 specifications.',
      icon: Compass,
      color: 'text-blue-700',
      bgColor: 'bg-blue-50',
      borderColor: 'border-blue-200'
    },
    {
      title: 'Sustainable Systems & Teams',
      desc: 'Nurturing skilled toolmakers, artisans, and metrology engineers, while maintaining safe shop-floor practices and environmentally compliant finishing processes.',
      icon: Users,
      color: 'text-emerald-700',
      bgColor: 'bg-emerald-50',
      borderColor: 'border-emerald-200'
    }
  ];

  return (
    <section id="founder" className="py-20 bg-white relative border-b border-slate-200">
      <div className="container mx-auto px-4 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold bg-amber-50 text-amber-800 border border-amber-200 mb-4 font-mono shadow-sm">
            <Trophy className="w-3.5 h-3.5 text-amber-600" />
            <span>EXECUTIVE LEADERSHIP & HONORS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0b1e36] font-heading leading-tight">
            25 Years of Engineering <span className="text-gradient-cyan">Resilience & Growth</span>
          </h2>
          <p className="mt-5 text-slate-600 text-base sm:text-lg leading-relaxed">
            A pioneering woman-founded enterprise in Vadodara, Gujarat — led by Founder Sarita Khandelwal and Partner Shreya Khandelwal.
          </p>
        </div>

        {/* ======================================================== */}
        {/* NEW: TOP 10 GROWING MSME AWARD BANNER                    */}
        {/* ======================================================== */}
        <div className="max-w-5xl mx-auto rounded-3xl bg-gradient-to-br from-[#0b1e36] to-[#162c48] text-white p-8 sm:p-12 lg:p-14 shadow-xl relative overflow-hidden mb-16 sm:mb-20 border border-[#1e3a5f]">
          
          {/* Subtle background glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="grid lg:grid-cols-12 gap-8 items-center relative z-10">
            
            {/* Left Column: Ceremony Photo */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative group">
                <div className="w-64 h-64 sm:w-72 sm:h-72 rounded-full overflow-hidden border-4 border-amber-400/80 shadow-2xl p-1 bg-gradient-to-tr from-amber-400 via-cyan-400 to-amber-200">
                  <img
                    src="images/award_ceremony_msme.jpg"
                    alt="Sarita Khandelwal receiving Top 10 Growing MSME Award"
                    className="w-full h-full object-cover rounded-full group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-amber-500 text-slate-950 font-mono font-bold text-[11px] px-3.5 py-1 rounded-full shadow-lg whitespace-nowrap uppercase tracking-wider flex items-center gap-1.5">
                  <Trophy className="w-3.5 h-3.5 fill-current" />
                  <span>Top 10 MSME Awardee</span>
                </div>
              </div>
            </div>

            {/* Right Column: Award Details & Tribute */}
            <div className="lg:col-span-7 space-y-4 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-bold bg-amber-400/20 text-amber-300 border border-amber-400/30">
                <Sparkles className="w-3.5 h-3.5 text-amber-300" />
                <span>RECENT NATIONAL HONORS • PROFICON</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold font-heading text-white leading-tight">
                Recognized Among India's <br />
                <span className="text-amber-300">"Top 10 Growing MSME Companies"</span>
              </h3>

              <p className="text-slate-300 text-sm leading-relaxed">
                Presented to Founder <strong className="text-white">Sarita Khandelwal</strong> on stage by <strong className="text-white">Rajiv Talreja</strong>, <strong className="text-white">Karan Hasija</strong>, and <strong className="text-white">Quantum Leap Learning Solutions Pvt Ltd</strong> at Proficon, recognizing the relentless hard work, sleepless nights, and grit poured into building Reliable Industries into a premier precision manufacturing company from the ground up.
              </p>

              <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-4 text-xs">
                <div className="px-3 py-2 rounded-xl bg-white/10 border border-white/10 flex items-center gap-2">
                  <Trophy className="w-4 h-4 text-amber-300" />
                  <span className="text-slate-200">MSME Manufacturing Excellence</span>
                </div>
                <div className="px-3 py-2 rounded-xl bg-white/10 border border-white/10 flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-cyan-300" />
                  <span className="text-slate-200">25 Years of Proven Track Record</span>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* ======================================================== */}
        {/* THREE GENERATIONS OF MANUFACTURING LEGACY SHOWCASE       */}
        {/* ======================================================== */}
        <div className="max-w-5xl mx-auto rounded-3xl bg-[#faf8f5] p-8 sm:p-12 border border-slate-200 shadow-sm mb-16 sm:mb-20">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left: Mother & Daughter Portrait */}
            <div className="lg:col-span-5 flex flex-col items-center">
              <div className="relative group max-w-xs sm:max-w-sm rounded-3xl overflow-hidden border-4 border-white shadow-xl bg-white p-1">
                <img
                  src="images/mother_daughter_duo.jpg"
                  alt="Partner Shreya Khandelwal and Founder Sarita Khandelwal"
                  className="w-full h-auto rounded-2xl object-cover group-hover:scale-[1.02] transition-transform duration-300"
                />
                <div className="absolute bottom-3 left-3 right-3 bg-[#0b1e36]/90 backdrop-blur-sm text-white px-3.5 py-2.5 rounded-xl text-center shadow-lg">
                  <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-amber-300 block">
                    Three Generations of Craftsmanship
                  </span>
                  <p className="text-[11px] text-slate-200 mt-0.5 font-medium">
                    Shreya Khandelwal (Partner) & Sarita Khandelwal (Founder)
                  </p>
                </div>
              </div>
            </div>

            {/* Right: The 3-Generation Story */}
            <div className="lg:col-span-7 space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-bold bg-[#008ba3]/10 text-[#008ba3] border border-[#008ba3]/20">
                <Sparkles className="w-3.5 h-3.5 text-[#008ba3]" />
                <span>A PROUD MULTI-GENERATIONAL HERITAGE</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0b1e36] font-heading leading-tight">
                From Grandfather to Mother to Daughter: <br />
                <span className="text-gradient-cyan">A Living Legacy in Precision Metal</span>
              </h3>

              <p className="text-sm text-slate-600 leading-relaxed font-normal">
                Manufacturing isn’t just a business for Reliable Industries — it is a generational calling passed down with discipline, pride, and unwavering values of hard work and integrity.
              </p>

              {/* 3 Chronological Generation Steps */}
              <div className="space-y-3.5 pt-1">
                
                {/* Gen 1 */}
                <div className="flex items-start gap-3.5 p-3.5 rounded-2xl bg-white border border-slate-200 shadow-xs">
                  <div className="w-9 h-9 rounded-xl bg-amber-50 border border-amber-200 text-amber-800 font-bold font-mono text-xs flex items-center justify-center shrink-0">
                    1st
                  </div>
                  <div className="text-xs">
                    <h5 className="font-bold text-[#0b1e36] text-sm font-heading">
                      The Grandfather • The Mentor & Foundation
                    </h5>
                    <p className="text-slate-600 mt-1 leading-relaxed">
                      Where it all began. Sarita's father mentored and trained her on the fundamentals of toolmaking, die design, metallurgy, and uncompromising shop-floor discipline.
                    </p>
                  </div>
                </div>

                {/* Gen 2 */}
                <div className="flex items-start gap-3.5 p-3.5 rounded-2xl bg-white border border-slate-200 shadow-xs">
                  <div className="w-9 h-9 rounded-xl bg-cyan-50 border border-cyan-200 text-[#008ba3] font-bold font-mono text-xs flex items-center justify-center shrink-0">
                    2nd
                  </div>
                  <div className="text-xs">
                    <h5 className="font-bold text-[#0b1e36] text-sm font-heading">
                      Sarita Khandelwal • Stepped In at Age 21 (Founder)
                    </h5>
                    <p className="text-slate-600 mt-1 leading-relaxed">
                      Began working at just 21 years old. In 1999, she founded Reliable Industries, steering it through 25+ years of relentless grit into an ISO 9001 certified plant and winning the Top 10 Growing MSMEs Award.
                    </p>
                  </div>
                </div>

                {/* Gen 3 */}
                <div className="flex items-start gap-3.5 p-3.5 rounded-2xl bg-white border border-emerald-200 bg-emerald-50/30 shadow-xs">
                  <div className="w-9 h-9 rounded-xl bg-emerald-100 border border-emerald-300 text-emerald-800 font-bold font-mono text-xs flex items-center justify-center shrink-0">
                    3rd
                  </div>
                  <div className="text-xs">
                    <h5 className="font-bold text-[#0b1e36] text-sm font-heading flex items-center gap-2">
                      <span>Shreya Khandelwal • Stepping In at Age 21 (Partner)</span>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 font-bold">
                        Next Generation
                      </span>
                    </h5>
                    <p className="text-slate-600 mt-1 leading-relaxed">
                      Carrying the torch forward at the exact same age of 21. Partnering with her mother to combine 25 years of seasoned craftsmanship with modern engineering, digital systems, and global OEM expansion.
                    </p>
                  </div>
                </div>

              </div>

            </div>

          </div>
        </div>

        {/* ======================================================== */}
        {/* LEADERSHIP DUO: SARITA KHANDELWAL & SHREYA KHANDELWAL    */}
        {/* ======================================================== */}
        <div className="max-w-5xl mx-auto mb-16 sm:mb-20">
          <div className="text-center mb-10">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#008ba3]">
              The Leadership Team
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold text-[#0b1e36] font-heading mt-2">
              Mother & Daughter Leadership Partnership
            </h3>
            <p className="text-sm text-slate-600 mt-2.5 max-w-xl mx-auto leading-relaxed">
              Combining 25 years of seasoned shop-floor craftsmanship with modern engineering and strategic expansion.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            
            {/* Card 1: Sarita Khandelwal */}
            <div className="rounded-3xl bg-[#faf8f5] p-6 sm:p-8 border border-slate-200 shadow-sm flex flex-col justify-between hover:border-[#008ba3] transition-all">
              <div>
                <div className="flex items-center gap-4 mb-5">
                  <div className="w-20 h-20 rounded-2xl overflow-hidden border-2 border-amber-300 shadow-md shrink-0 bg-white">
                    <img 
                      src="images/sarita_khandelwal.jpg" 
                      alt="Sarita Khandelwal, Founder" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono font-bold text-amber-700 uppercase tracking-wider block">
                      Founder & Managing Director
                    </span>
                    <h4 className="text-xl font-bold text-[#0b1e36] font-heading">
                      Sarita Khandelwal
                    </h4>
                    <p className="text-xs text-slate-500 font-medium mt-0.5">
                      Started at Age 21 • 25+ Years in Metal Manufacturing
                    </p>
                  </div>
                </div>

                <p className="text-xs text-slate-700 leading-relaxed font-normal">
                  Pioneered Reliable Industries in 1999 as a woman entrepreneur after learning the trade from her father starting at age 21. Steered the company through tooling innovations, high-tonnage stamping, and silver brazing assemblies to win the national Top 10 MSME Award.
                </p>
              </div>

              <div className="mt-5 pt-4 border-t border-slate-200 flex items-center justify-between text-xs">
                <span className="text-slate-500 font-mono">Core Focus:</span>
                <span className="text-[#008ba3] font-bold">Plant Operations, Tooling & Quality</span>
              </div>
            </div>

            {/* Card 2: Shreya Khandelwal */}
            <div className="rounded-3xl bg-[#faf8f5] p-6 sm:p-8 border border-slate-200 shadow-sm flex flex-col justify-between hover:border-[#008ba3] transition-all">
              <div>
                <div className="flex items-center gap-4 mb-5">
                  <div className="w-20 h-20 rounded-2xl overflow-hidden border-2 border-cyan-300 shadow-md shrink-0 bg-white flex items-center justify-center">
                    <img 
                      src="images/shreya_khandelwal.jpg" 
                      alt="Shreya Khandelwal, Partner" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono font-bold text-[#008ba3] uppercase tracking-wider block">
                      Partner & Executive Director
                    </span>
                    <h4 className="text-xl font-bold text-[#0b1e36] font-heading">
                      Shreya Khandelwal
                    </h4>
                    <p className="text-xs text-slate-500 font-medium mt-0.5">
                      Partner at Age 21 • Modern Engineering & Scale
                    </p>
                  </div>
                </div>

                <p className="text-xs text-slate-700 leading-relaxed font-normal">
                  Daughter to Founder Sarita Khandelwal and Partner in Reliable Industries, stepping into leadership at age 21 to continue the 3-generation manufacturing legacy. Driving engineering modernization, digital transformation, customer empanelment, and strategic partnerships.
                </p>
              </div>

              <div className="mt-5 pt-4 border-t border-slate-200 flex items-center justify-between text-xs">
                <span className="text-slate-500 font-mono">Core Focus:</span>
                <span className="text-blue-700 font-bold">Engineering Strategy & Scale</span>
              </div>
            </div>

          </div>
        </div>

        {/* ======================================================== */}
        {/* FOUNDER'S OFFICIAL PHILOSOPHY & STATEMENT CARD           */}
        {/* ======================================================== */}
        <div className="max-w-4xl mx-auto rounded-3xl bg-[#faf8f5] p-8 sm:p-12 lg:p-14 border border-slate-200 shadow-sm relative mb-16 sm:mb-20">
          
          {/* Decorative quotation mark */}
          <div className="absolute -top-5 left-10 w-12 h-12 rounded-xl bg-[#008ba3] flex items-center justify-center shadow-sm text-white">
            <Quote className="w-6 h-6 fill-current" />
          </div>

          <div className="pt-3 space-y-6">
            <div className="text-xs uppercase tracking-widest font-bold text-[#008ba3] font-mono">
              Founder's Vision • Sarita Khandelwal
            </div>

            {/* Direct Words from Prompt */}
            <blockquote className="text-lg sm:text-xl text-slate-800 font-normal leading-relaxed italic border-l-4 border-[#008ba3] pl-6 my-6 bg-white py-4 rounded-r-xl border-y border-r border-slate-200">
              "I am a woman entrepreneur and Founder of Reliable Industries, with 25 years of experience in metal component manufacturing.
              <br /><br />
              We specialize in precision sheet metal parts and assemblies for industrial and electrical applications, with a strong focus on quality, reliability and long-term customer relationships.
              <br /><br />
              My journey as an entrepreneur has shaped me into a leader who believes in resilience, hard work, dedication and determination. I believe in facing challenges with a positive attitude, continuously learning and finding opportunities to grow.
              <br /><br />
              I am deeply grateful for the people, experiences and lessons that have been part of my journey, and today my focus is on building strong teams, sustainable systems and a business that continues to grow and create value."
            </blockquote>

            {/* Founder Signoff Card */}
            <div className="pt-6 border-t border-slate-200 flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-3.5">
                <div className="w-12 h-12 rounded-xl bg-[#0b1e36] text-white flex items-center justify-center font-bold font-heading text-lg shadow-sm">
                  RI
                </div>
                <div>
                  <h4 className="text-base font-bold text-[#0b1e36] font-heading">
                    Sarita Khandelwal & Shreya Khandelwal
                  </h4>
                  <p className="text-xs text-slate-500 font-medium">
                    Founder & Partner • Reliable Industries • Waghodia GIDC, Vadodara
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <button
                  onClick={onOpenCertificate}
                  className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-semibold bg-white text-slate-700 border border-slate-300 hover:bg-slate-50 transition-colors cursor-pointer shadow-sm"
                >
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                  <span>ISO 9001:2015 Verified</span>
                </button>
                <button
                  onClick={onOpenSlides}
                  className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-semibold bg-cyan-50 text-[#008ba3] border border-cyan-200 hover:bg-cyan-100 transition-colors cursor-pointer"
                >
                  <Factory className="w-3.5 h-3.5" />
                  <span>Company Profile Deck</span>
                </button>
              </div>
            </div>

          </div>
        </div>

        {/* 4 Strategic Pillars Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {leadershipPillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div 
                key={pillar.title}
                className="p-6 rounded-2xl bg-white border border-slate-200 hover:border-[#008ba3] card-hover flex flex-col justify-between shadow-sm"
              >
                <div>
                  <div className={`w-11 h-11 rounded-lg ${pillar.bgColor} ${pillar.borderColor} border flex items-center justify-center mb-4`}>
                    <Icon className={`w-5 h-5 ${pillar.color}`} />
                  </div>
                  <h3 className="text-base font-bold text-[#0b1e36] font-heading mb-2">
                    {pillar.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed font-normal">
                    {pillar.desc}
                  </p>
                </div>
                <div className="mt-5 pt-3 border-t border-slate-100 flex items-center gap-1.5 text-[11px] text-slate-500 font-mono font-semibold">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#008ba3]" />
                  <span>Core Operational Standard</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
