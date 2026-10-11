export const CATEGORIES = [
  { id: 'all', name: 'All Products' },
  { id: 'electrical', name: 'Electrical & Switchgear' },
  { id: 'brazed', name: 'Brazed Assemblies' },
  { id: 'mechanical', name: 'Mechanical Assemblies' },
  { id: 'stampings', name: 'Precision Stampings' },
  { id: 'deep-drawn', name: 'Deep-Drawn Sleeves' },
  { id: 'enclosures', name: 'Perforated & Enclosures' },
  { id: 'heavy', name: 'Heavy Structural Parts' }
];

export const PRODUCTS = [
  {
    id: 'stamped-copper-contacts',
    title: 'Precision Copper Stamped Contacts & Busbars',
    category: 'electrical',
    categoryName: 'Electrical & Switchgear',
    image: 'images/product_stamping_copper.png',
    badge: 'High Conductivity',
    material: 'Electrolytic Copper (EC Grade 99.9% Cu), Brass',
    thickness: '0.8 mm – 6.0 mm',
    finish: 'Silver, Nickel, Bright Tin Plating',
    tolerances: '±0.03 mm on critical hole centers',
    description: 'Precision progressive-die stamped copper contacts engineered for minimal contact resistance and high ampacity in critical switchgear and circuit breaker applications.',
    keyFeatures: [
      'High thermal & electrical conductivity',
      'Burr-free edge finish via precision punch clearance',
      'Formed multi-angle bends with repeatable radius',
      'Silver flash or heavy electroplating for oxidation prevention'
    ],
    applications: 'Switchgear, contactors, MCBs, MCCBs, electrical control panels'
  },
  {
    id: 'brazed-flexible-shunts',
    title: 'Brazed Flexible Copper Shunts & Terminal Links',
    category: 'brazed',
    categoryName: 'Brazed Assemblies',
    image: 'images/product_brazed_assemblies.png',
    badge: 'Specialized Joinery',
    material: 'Flexible High-Strand Copper Braid + Stamped Terminal Lugs',
    thickness: 'Custom cross-sections up to 120 sq mm',
    finish: 'Tin Plating / Silver Plating',
    tolerances: 'Full joint penetration tested for mechanical shear',
    description: 'Specialized brazed flexible shunts delivering ultra-low electrical resistance and mechanical flexibility under heavy cyclic thermal and vibrational stress.',
    keyFeatures: [
      'Induction & torch brazed using silver-bearing alloys',
      'Absorbs mechanical vibration in moving switchgear contacts',
      'Superior thermal dissipation and zero hot-spot risk',
      '100% micro-ohm joint resistance verified'
    ],
    applications: 'Air Circuit Breakers (ACBs), Molded Case Breakers, EV battery disconnects, bus duct links'
  },
  {
    id: 'electromechanical-subassembly',
    title: 'Precision Electromechanical Carrier Sub-Assembly',
    category: 'mechanical',
    categoryName: 'Mechanical Assemblies',
    image: 'images/product_mechanical_assembly.png',
    badge: 'End-to-End Built',
    material: 'Stainless Steel Arms, Insulating Blocks, High-Tensile Fasteners',
    thickness: 'Multi-part mechanical stack',
    finish: 'Clear Zinc Plated + Passivated Hardware',
    tolerances: 'Torque-monitored fastener assembly to ±0.2 Nm',
    description: 'End-to-end electro-mechanical sub-assembly configured to customer integration specs, mechanical pull tests, and dielectric clearance requirements.',
    keyFeatures: [
      'Hardware integration with high-precision pivot pins',
      'Spring-loaded actuation clearance calibration',
      'Torque-calibrated lock-nut and washer fastening',
      'Full batch traceability and functional movement testing'
    ],
    applications: 'High-voltage switchgear mechanisms, disconnector switches, industrial actuators'
  },
  {
    id: 'stamped-sheet-brackets',
    title: 'Precision Sheet Metal Brackets, Guides & Clips',
    category: 'stampings',
    categoryName: 'Precision Stampings',
    image: 'images/product_stamped_brackets.png',
    badge: 'High Repeatability',
    material: 'Stainless Steel (SS304/SS316), CRCA Steel, Galvanized',
    thickness: '1.0 mm – 4.0 mm',
    finish: 'Zinc Blue Passivation, Nickel, Powder Coating',
    tolerances: '±0.05 mm across multi-bend profiles',
    description: 'Robust stamped mounting brackets and retention clips designed for high mechanical fatigue resistance in demanding industrial enclosures and automotive frames.',
    keyFeatures: [
      'Multi-stage progressive tooling output',
      'High strength-to-weight structural ribbing',
      'Accurate slotted and countersunk mounting holes',
      'Deburred and tumbled smooth finish'
    ],
    applications: 'Industrial machinery, electrical switchboards, automotive chassis, renewable inverter brackets'
  },
  {
    id: 'deep-drawn-sleeves',
    title: 'Deep-Drawn Cylindrical Sleeves & Cage Clamps',
    category: 'deep-drawn',
    categoryName: 'Deep-Drawn Sleeves',
    image: 'images/product_deep_drawn_sleeves.png',
    badge: 'Complex Forming',
    material: 'Extra Deep Draw Steel (EDD/IF), Brass, CRCA',
    thickness: '0.8 mm – 2.5 mm',
    finish: 'Zinc Cobalt, Bright Nickel, Trivalent Passivation',
    tolerances: 'Concentricity within 0.04 mm',
    description: 'Multi-draw cylindrical sleeves, terminal cage clamps, and housings manufactured with high circularity and surface integrity for solenoid and motor assemblies.',
    keyFeatures: [
      'Multi-stage drawing with controlled wall thinning',
      'Precision pierced side apertures and cable ports',
      'No micro-cracking; uniform metallurgical grain flow',
      'Corrosion resistant electroplating options'
    ],
    applications: 'Solenoids, motor end-caps, terminal blocks, electrical wire cage clamps'
  },
  {
    id: 'copper-terminal-links',
    title: 'Heavy Copper Terminal Links & Stepped Connectors',
    category: 'electrical',
    categoryName: 'Electrical & Switchgear',
    image: 'images/product_copper_terminals.png',
    badge: 'Power Distribution',
    material: 'High-Purity Electrolytic Copper & High-Tensile Brass',
    thickness: '1.5 mm – 8.0 mm',
    finish: 'Bright Tin, Silver Flash Plating',
    tolerances: '±0.05 mm pitch accuracy',
    description: 'Heavy duty stamped terminal jumpers, stepped bridge connectors, and tap links engineered for low loss power transmission in switchgear and transformers.',
    keyFeatures: [
      'High ampacity cross-section geometry',
      'Stepped offset forming without material thinning',
      'Smooth contact landing pads for tight bolt torques',
      'Mill certificate verification on electrical conductivity'
    ],
    applications: 'Transformer taps, busbar offsets, motor drive power links, solar array combiners'
  },
  {
    id: 'perforated-chassis-baffles',
    title: 'Perforated Air-Flow Chassis & Retainer Strips',
    category: 'enclosures',
    categoryName: 'Perforated & Enclosures',
    image: 'images/product_perforated_chassis.png',
    badge: 'Ventilation Tech',
    material: 'CRCA Steel, Stainless Steel, Galvanized Sheet',
    thickness: '0.8 mm – 2.0 mm',
    finish: 'Trivalent Zinc, Epoxy Powder Coating',
    tolerances: 'Uniform hole pitch within ±0.1 mm',
    description: 'Precision stamped perforated ventilation panels, circular retainers, and guide rails engineered for optimal airflow and EMI shielding in electronic power cabinets.',
    keyFeatures: [
      'Precision punch perforated matrix with high open-area ratio',
      'Flanged edges for rigid distortion-free chassis mounting',
      'Circular stamped discs and formed guide tracks included',
      'Anti-corrosive environmental passivating'
    ],
    applications: 'Power supply enclosures, server rack baffles, drive cooling vents, telecom housings'
  },
  {
    id: 'heavy-gauge-washers-plates',
    title: 'Heavy Structural Washers & Nut-Welded Link Plates',
    category: 'heavy',
    categoryName: 'Heavy Structural Parts',
    image: 'images/product_heavy_washers_plates.png',
    badge: 'Heavy Gauge',
    material: 'Hot-Rolled Steel (HR), High-Tensile Carbon Steel, CRCA',
    thickness: '3.0 mm – 10.0 mm',
    finish: 'Black Oxide, Zinc Galvanized, Phosphated',
    tolerances: 'Thickness consistency to ±0.08 mm',
    description: 'Heavy-tonnage blanked washers, spacer plates, and projection nut-welded mounting straps built to endure extreme clamping and structural tension.',
    keyFeatures: [
      'High-tonnage blanking up to 10 mm plate thickness',
      'Projection resistance welded nuts with torque-out testing',
      'Heavy chamfering and surface flattening',
      'Raw material ultrasonic & metallurgical test certification'
    ],
    applications: 'Heavy switchgear foundations, transformer clamping, industrial machinery frames'
  },
  {
    id: 'passivated-chassis-enclosure',
    title: 'Zinc-Passivated Perforated Equipment Enclosure Cover',
    category: 'enclosures',
    categoryName: 'Perforated & Enclosures',
    image: 'images/product_passivated_enclosure.png',
    badge: 'Yellow Passivated',
    material: 'Deep Draw Cold-Rolled Sheet Metal',
    thickness: '1.2 mm – 2.0 mm',
    finish: 'Zinc Yellow Dichromate Passivation (480+ hrs salt spray)',
    tolerances: 'Box squareness within 0.15 degrees',
    description: 'Fully formed and folded industrial equipment cover featuring ventilation perforations, precision side cutouts, folded latch tabs, and heavy-duty passivation.',
    keyFeatures: [
      'Multi-bend enclosure box with seamless interlocking notches',
      'Dense ventilation hole pattern for passive convective cooling',
      'Superior corrosion resistance against industrial sulfur and humidity',
      'Integrated earth grounding and mounting lug slots'
    ],
    applications: 'Inverter cabinets, power distribution housings, battery charger units'
  }
];

export const RAW_MATERIALS = [
  {
    id: 'copper',
    name: 'Electrolytic Copper',
    grade: 'EC Grade / Cu-ETP (CW004A) / Cu-OF',
    image: 'images/mat_copper_bars.png',
    color: '#d97706',
    conductivity: '100% IACS (Min 58 MS/m)',
    thicknessRange: '0.5 mm to 12.0 mm',
    highlights: 'Supreme electrical & thermal conductivity, ideal for brazing and cold forming.',
    typicalUses: 'Switchgear contacts, busbars, flexible braided shunts, grounding connectors'
  },
  {
    id: 'brass',
    name: 'Industrial Brass Alloys',
    grade: 'CuZn37 (Cartridge Brass) / CuZn39Pb3',
    image: 'images/mat_brass_sheets.png',
    color: '#ca8a04',
    conductivity: '28% – 44% IACS',
    thicknessRange: '0.6 mm to 8.0 mm',
    highlights: 'Excellent blanking & drawing characteristics, superior corrosion and wear resistance.',
    typicalUses: 'Terminal blocks, electrical pins, spring contacts, instrument components'
  },
  {
    id: 'stainless-steel',
    name: 'Stainless Steel',
    grade: 'AISI 304, 304L, 316, 316L, 430',
    image: 'images/mat_steel_coils.png',
    color: '#94a3b8',
    conductivity: 'Non-magnetic / Low',
    thicknessRange: '0.4 mm to 6.0 mm',
    highlights: 'Extreme corrosion resistance, high tensile strength, excellent for harsh chemical/marine settings.',
    typicalUses: 'Contact carrier arms, spring retainers, outdoor enclosures, food/pharma hardware'
  },
  {
    id: 'crca-hr',
    name: 'CRCA & HR Carbon Steel',
    grade: 'CRCA (IS 513 D/DD/EDD), HR (IS 2062 / E250)',
    image: 'images/mat_heavy_rolls.png',
    color: '#64748b',
    conductivity: 'Standard Ferrous',
    thicknessRange: '0.8 mm to 10.0 mm',
    highlights: 'High dimensional uniformity, superb deep drawability, and uniform plating reception.',
    typicalUses: 'Deep drawn sleeves, heavy structural brackets, motor housings, welded link plates'
  },
  {
    id: 'aluminium',
    name: 'Aluminium & Alloys',
    grade: 'AA 1050, 5052, 6061-T6, 6082',
    image: 'images/mat_aluminium_plates.png',
    color: '#cbd5e1',
    conductivity: '60% IACS (High Thermal Dissipation)',
    thicknessRange: '0.8 mm to 6.0 mm',
    highlights: 'Lightweight, rapid heat dispersion, natural oxide corrosion barrier, non-magnetic.',
    typicalUses: 'Heat sink shields, lightweight enclosures, EV battery enclosures, busbar clamps'
  }
];

export const CAPABILITIES = [
  {
    id: 'stamping',
    title: 'High-Tolerance Stamping & Presswork',
    subtitle: 'From single-die blanks to complex progressive multi-station dies',
    icon: 'Hammer',
    bullet: '10T to 200T Capacity',
    desc: 'Precision blanking, piercing, bending, coining, and deep drawing across varied alloys. We maintain in-house tooling care to guarantee zero burrs and repeatability across runs exceeding 1,000,000 components.',
    metrics: ['Tolerances down to ±0.02 mm', 'Progressive tooling support', 'High-speed automated feeds']
  },
  {
    id: 'brazed',
    title: 'Brazed Assemblies & Shunts',
    subtitle: 'Specialized low-resistance joins for electrical and power systems',
    icon: 'Flame',
    bullet: 'Silver Alloy Joins',
    desc: 'Precision torch and induction brazing of flexible braided copper jumpers to cold-forged and stamped terminal lugs. Designed specifically to carry peak short-circuit currents without joint degradation.',
    metrics: ['100% shear and conductivity verified', 'Vibration fatigue endurance', 'Switchgear OEM validated']
  },
  {
    id: 'mechanical',
    title: 'Integrated Mechanical Sub-Assemblies',
    subtitle: 'Turnkey electromechanical builds configured to customer testing',
    icon: 'Cpu',
    bullet: 'Turnkey Integration',
    desc: 'Complete assembly of stamped components with fasteners, insulating plastic blocks, springs, rivets, and silver contacts. Delivered ready-to-mount directly onto Tier-1 customer assembly lines.',
    metrics: ['Torque-controlled assembly', 'Functional movement verification', 'Packaging in ESD/VCI protection']
  },
  {
    id: 'tooling',
    title: 'Custom Tool Design & Prototyping',
    subtitle: 'Rapid development from concept 3D CAD to production tooling',
    icon: 'Compass',
    bullet: 'CAD/CAM Prototyping',
    desc: 'Experienced tool engineers develop custom progressive, compound, and draw dies. We offer rapid prototype stamping runs to validate parts before full hard-tooling commitment.',
    metrics: ['Rapid prototype turnarounds', 'DFM engineering consultation', 'Tool life tracking & maintenance']
  },
  {
    id: 'finishing',
    title: 'Advanced Surface Finishing',
    subtitle: 'Multi-layer electroplating and protective conversion coatings',
    icon: 'ShieldCheck',
    bullet: '7 Coating Technologies',
    desc: 'Certified finishing including Zinc (Blue / Yellow / Black passivation), Zinc-Cobalt, Bright Nickel, Silver Electroplating (critical for low contact resistance in switchgear), and Epoxy Powder Coating.',
    metrics: ['Up to 480+ hrs salt spray resistance', 'Plating thickness micrometer checks', 'RoHS / REACH compliant']
  },
  {
    id: 'quality',
    title: 'Comprehensive Quality Assurance',
    subtitle: 'ISO 9001:2015 accredited inspection and 100% batch traceability',
    icon: 'CheckCircle2',
    bullet: 'TÜV NORD Certified',
    desc: 'Strict 3-stage quality gate: Incoming spectroscopic/mill verification, in-process statistical dimension monitoring, and 100% final pre-dispatch audit with inspection test certificates (PDIR/PPAP).',
    metrics: ['Mitutoyo digital metrology', 'Full heat/batch traceability', 'Zero-defect manufacturing ethos']
  }
];

export const COMPANY_INFO = {
  name: 'Reliable Industries',
  tagline: 'Precision Sheet Metal Components & Assemblies',
  experienceYears: 25,
  founderName: 'Sarita Khandelwal',
  founderRole: 'Founder & Managing Director',
  founderPhilosophy: 'My journey as an entrepreneur has shaped me into a leader who believes in resilience, hard work, dedication and determination. I believe in facing challenges with a positive attitude, continuously learning and finding opportunities to grow. I am deeply grateful for the people, experiences and lessons that have been part of my journey, and today my focus is on building strong teams, sustainable systems and a business that continues to grow and create value.',
  partnerName: 'Shreya Khandelwal',
  partnerRole: 'Partner & Executive Director',
  partnerAgeStarted: 21,
  founderAgeStarted: 21,
  partnerImage: 'images/shreya_khandelwal.jpg',
  duoImage: 'images/mother_daughter_duo.jpg',
  legacyStory: {
    generation1: 'Grandfather: Engineering pioneer who taught and mentored Sarita Khandelwal in the art and discipline of metal manufacturing.',
    generation2: 'Sarita Khandelwal: Began her journey on the shop floor at age 21, founded Reliable Industries in 1999, and built a 25-year award-winning enterprise.',
    generation3: 'Shreya Khandelwal: Stepping in as Partner at age 21, honoring three generations of precision manufacturing to lead Reliable Industries into modern engineering scale.'
  },
  award: {
    title: 'Top 10 Growing MSME Companies',
    event: 'Proficon',
    presentedBy: 'Rajiv Talreja, Karan Hasija & Quantum Leap Learning Solutions Pvt Ltd',
    ceremonyImage: 'images/award_ceremony_msme.jpg',
    founderImage: 'images/sarita_khandelwal.jpg',
    partnerImage: 'images/shreya_khandelwal.jpg',
    duoImage: 'images/mother_daughter_duo.jpg',
    summary: 'Recognized among India\'s Top 10 Growing MSME Companies for exceptional resilience, vision, and manufacturing excellence built from the ground up.'
  },
  isoCert: 'ISO 9001:2015',
  certBody: 'TUV INDIA PVT. LTD. (TÜV NORD GROUP)',
  accreditations: 'NABCB, IAF',
  certNo: 'QM 02 00934',
  validUntil: '07.11.2027',
  address: {
    line1: 'Plot No - 1430, Phase-2, Waghodia GIDC',
    city: 'Vadodara',
    pin: '391760',
    state: 'Gujarat',
    country: 'India'
  },
  phone: '+91 98250 00000',
  email: 'contact@reliableindustries.co.in',
  plantHours: 'Mon – Sat: 8:30 AM – 6:30 PM IST',
  scope: 'Manufacture and Supply of Sheet Metal Pressed Components and Assemblies'
};

