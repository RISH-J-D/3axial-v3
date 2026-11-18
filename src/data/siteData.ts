import type { Project, SampleDrawing, TeamMember, JobOpening } from '../types';

export type { Project, SampleDrawing, TeamMember, JobOpening };

export interface ServiceItem {
  id: string;
  title: string;
  tagline: string;
  image: string;
  shortDesc: string;
  fullDesc: string;
  codeStandard: string;
  features: string[];
}

export const AXIAL_SERVICES: ServiceItem[] = [
  {
    id: 'structural-detailing',
    title: 'Structural Steel Detailing',
    tagline: 'HIGH-PRECISION 3D TEKLA MODELING',
    image: 'https://www.3axialsteeldetail.com/wp-content/uploads/2025/07/The-Cays-Buliding.jpg',
    shortDesc: 'Precise 3D modeling and shop drawings for complex structural steel, industrial frameworks, multi-story buildings, and canopies.',
    fullDesc: 'Using state-of-the-art Tekla Structures, our certified detailers produce shop fabrication drawings, erection plans, anchor bolt layouts, CNC data (DSTV/NC), and material bills with zero clash tolerance.',
    codeStandard: 'AISC 360-16 / NISD QPP Certified',
    features: [
      'Comprehensive 3D Tekla Structures modeling',
      'Fabrication shop drawings & erection assembly sheets',
      'DSTV/NC files for automated CNC machinery',
      'Anchor bolt plans & embed placement sheets'
    ]
  },
  {
    id: 'connection-design',
    title: 'Connection Design & PE/SE Stamping',
    tagline: 'CERTIFIED STRUCTURAL CALCULATIONS',
    image: 'https://www.3axialsteeldetail.com/wp-content/uploads/2025/07/Graymont.jpg',
    shortDesc: 'Certified stamped connection calculations and custom engineering for moment frames, truss nodes, and heavy industrial joints.',
    fullDesc: 'We provide licensed Professional Engineer (PE/SE) stamped connection design calculation packets across 50 US states and Canadian provinces, covering moment connections, braced frame gussets, and high-seismic configurations.',
    codeStandard: 'AISC 341-16 / AISC 358 Pre-Qualified',
    features: [
      'PE / SE licensed stamping across 50 US States & Canada',
      'High-seismic moment connections & vertical bracings',
      'Truss node & transfer girder connections',
      'Stringer and landing engineering for monumental stairs'
    ]
  },
  {
    id: 'pre-bid-estimation',
    title: 'Pre-Bid Estimation & ABM',
    tagline: 'ACCURATE MATERIAL TAKE-OFFS',
    image: 'https://www.3axialsteeldetail.com/wp-content/uploads/2025/07/Industrial-Process-Facility.jpg',
    shortDesc: 'Early involvement to de-risk bids, build preliminary 3D models, and extract precise Advanced Bill of Materials (ABM) before bidding.',
    fullDesc: 'Our pre-bid estimation services provide fabricators with an unbeatable competitive advantage. We construct 3D preliminary Tekla models to extract accurate steel tonnages, member counts, and preliminary mill order schedules.',
    codeStandard: 'AISC Code of Standard Practice (AISC 303)',
    features: [
      'Preliminary Advanced Bill of Materials (ABM)',
      'Constructability analysis & erection sequencing',
      'Competitive bid optimization & connection checks',
      'Early mill order preparation'
    ]
  },
  {
    id: 'erection-drawings',
    title: 'Erection Drawings & Framing Plans',
    tagline: 'SAFETY-FIRST ERECTION SEQUENCING',
    image: '/blueprint-bg.jpg',
    shortDesc: 'Comprehensive erection plans, anchor bolt layouts, field bolt lists, and phased site erection sequences for field crews.',
    fullDesc: 'Clear, readable field erection plans (E-sheets) showing grid lines, assembly marks, field bolt schedules, crane pick points, and critical safety clearances for steel erectors.',
    codeStandard: 'OSHA Subpart R / AISC Erection Guide',
    features: [
      'Phased erection sequence plans & mark layouts',
      'Anchor bolt & foundation embed placement plans',
      'Field bolt lists & summary schedules',
      'Crane capacity and rigging geometry analysis'
    ]
  },
  {
    id: 'misc-metals',
    title: 'Miscellaneous Metals & Stairs',
    tagline: 'MONUMENTAL EGRESS & HANDRAILS',
    image: 'https://www.3axialsteeldetail.com/wp-content/uploads/2025/07/The-Wynkoop-2.jpg',
    shortDesc: 'Detailing and engineering for architectural monumental stairs, industrial egress ladders, railings, and decorative canopies.',
    fullDesc: 'Specialized detailing for complex spiral stairs, architectural stringers, glass railings, industrial ships ladders, catwalks, and rooftop mechanical dunnage frames.',
    codeStandard: 'NAAMM / OSHA / IBC Egress Codes',
    features: [
      'Architectural monumental stair layouts & calculation checks',
      'Industrial guardrails, grab bars, and handrail schedules',
      'Rooftop equipment screens and mechanical dunnage',
      'Canopies, architectural sunshades, and bollards'
    ]
  },
  {
    id: 'bim-coordination',
    title: 'Structural BIM Coordination (LOD 400)',
    tagline: 'MULTI-TRADE CLASH RESOLUTION',
    image: '/vision-3d.png',
    shortDesc: 'Complete clash detection, federated model coordination, and multi-discipline data integration with MEP and architectural trades.',
    fullDesc: 'Navisworks and Revizto federated model management, automated clash reports, 4D schedule simulation, and direct coordination with MEP, curtain wall, and concrete trades.',
    codeStandard: 'LOD 400 Fabrication Level BIM',
    features: [
      'Multi-trade federated BIM coordination',
      'Clash detection matrices & resolution tracking',
      'IFC, DWG, and point-cloud model integration',
      '4D constructability and schedule sequencing'
    ]
  },
  {
    id: 'cnc-data',
    title: 'CNC Automated Data & KISS/FabTrol',
    tagline: 'DIRECT BEAM LINE COMPATIBILITY',
    image: '/steel-construction-bg.jpg',
    shortDesc: 'Automated extraction of NC1, DXF, and DSTV files formatted for Ficep, Peddinghaus, Voortman, and PythonX CNC beam lines.',
    fullDesc: 'Seamless integration with fabricator shop equipment. We generate zero-defect NC1 files, plate DXFs, KISS/KSS export files for FabTrol, StruMIS, and Steel Projects software.',
    codeStandard: 'DSTV Standard / FabTrol KSS Protocols',
    features: [
      'Zero-defect DSTV NC1 files for beam lines',
      'DXF files for laser, plasma, and waterjet burning',
      'KISS and FabTrol material tracking files',
      'Automated bolt and hardware lists'
    ]
  },
  {
    id: 'rebar-concrete',
    title: 'Concrete & Rebar Detailing',
    tagline: 'REBAR PLACEMENT & BBS',
    image: '/mission-fabrication.jpg',
    shortDesc: 'Comprehensive concrete outline drawings, 3D rebar placement models, and bar bending schedules for structural foundations.',
    fullDesc: 'Full 3D rebar detailing, placing plans, bar bending schedules, and clash coordination with embedded steel anchor rods and post-tensioning tendons.',
    codeStandard: 'ACI 318-19 / CRSI Detailing Standard',
    features: [
      'Complete 3D rebar modeling in Tekla',
      'Automated bar bending schedules (BBS)',
      'Clash detection with embedded anchor rods and sleeves',
      'Foundation, shear wall, and slab reinforcement sheets'
    ]
  }
];

export const PROJECTS_DATA: Project[] = [
  {
    id: 'proj-1',
    title: 'The Cays Commercial Building',
    category: 'ongoing',
    sector: 'commercial',
    image: '/projects/The-Cays-Buliding.jpg',
    location: 'North America',
    tonnage: '1,200 Tons',
    description: 'Complex multi-story commercial steel framing with high-spec entrance canopies and architectural parapets.'
  },
  {
    id: 'proj-2',
    title: 'Graymont Lime Processing Facility',
    category: 'ongoing',
    sector: 'industrial',
    image: '/projects/Graymont.jpg',
    location: 'Pennsylvania, USA',
    tonnage: '2,400 Tons',
    description: 'Heavy industrial lime processing plant steel detailing with pipe racks, inclined conveyor trestles, and hoppers.'
  },
  {
    id: 'proj-3',
    title: 'Bryn Mawr High-Voltage Substation',
    category: 'ongoing',
    sector: 'infrastructure',
    image: '/projects/Bryn-Mawr-Substation.jpg',
    location: 'Pennsylvania, USA',
    tonnage: '850 Tons',
    description: 'High-voltage utility substation support framing, transformer bays, and lightning arrestor towers.'
  },
  {
    id: 'proj-4',
    title: 'Lethbridge Housing & Mixed-Use Complex',
    category: 'ongoing',
    sector: 'commercial',
    image: '/projects/Lethbridge-Housing.jpg',
    location: 'Alberta, Canada',
    tonnage: '950 Tons',
    description: 'Multi-family residential steel structure with architectural balconies, stair towers, and canopy details.'
  },
  {
    id: 'proj-5',
    title: 'CSSPI École François-La-Bernarde',
    category: 'ongoing',
    sector: 'educational',
    image: '/projects/CSSPI-Ecole-Francois-La-Bernarde.jpg',
    location: 'Quebec, Canada',
    tonnage: '1,100 Tons',
    description: 'Educational facility featuring wide-span roof trusses and gymnasium framing detailed to CISC standards.'
  },
  {
    id: 'proj-6',
    title: 'Tokai Carbon Facility Phase 01',
    category: 'ongoing',
    sector: 'industrial',
    image: '/projects/Tokai-Carbon-Project-01.jpg',
    location: 'USA',
    tonnage: '2,800 Tons',
    description: 'Heavy carbon processing structure with specialized reactor vessel framing, pipe racks, and transfer towers.'
  },
  {
    id: 'proj-7',
    title: 'Tokai Carbon Facility Phase 02',
    category: 'ongoing',
    sector: 'industrial',
    image: '/projects/Tokai-Carbon-Project-02.jpg',
    location: 'USA',
    tonnage: '3,100 Tons',
    description: 'Furnace superstructure, baghouse support towers, and ductwork framing for advanced manufacturing.'
  },
  {
    id: 'proj-8',
    title: 'Oklahoma Children’s Hospital Expansion',
    category: 'ongoing',
    sector: 'infrastructure',
    image: '/projects/Oklahoma-Children-Hospital.jpg',
    location: 'Oklahoma, USA',
    tonnage: '1,800 Tons',
    description: 'Pediatric medical pavilion detailing seismic moment connections and MRI floor shielding according to AISC codes.'
  },
  {
    id: 'proj-9',
    title: 'Industrial Chemical Process Facility',
    category: 'ongoing',
    sector: 'industrial',
    image: '/projects/Industrial-Process-Facility.jpg',
    location: 'Louisiana, USA',
    tonnage: '4,200 Tons',
    description: 'Chemical process building with platform walkways, vessel supports, and heavy industrial tower frames.'
  },
  {
    id: 'proj-10',
    title: 'Industrial Process Facility Phase II',
    category: 'ongoing',
    sector: 'industrial',
    image: '/projects/Industrial-Process-Facility-Phase-II.jpg',
    location: 'Louisiana, USA',
    tonnage: '3,750 Tons',
    description: 'Continuous process expansion with high-grade galvanized piping racks and modular industrial skids.'
  },
  {
    id: 'proj-11',
    title: 'St. Clair College Welcome Centre',
    category: 'ongoing',
    sector: 'educational',
    image: '/projects/St.-Clair-College-Welcome-Centre.jpg',
    location: 'Ontario, Canada',
    tonnage: '780 Tons',
    description: 'Architectural entrance atrium framing with exposed structural steel and curtain-wall backing systems.'
  },
  {
    id: 'proj-12',
    title: 'Industrial Concrete Batching Facility',
    category: 'ongoing',
    sector: 'industrial',
    image: '/projects/Concrete-Factory.jpg',
    location: 'Texas, USA',
    tonnage: '2,100 Tons',
    description: 'Heavy aggregate handling conveyor gantries, hopper structures, and batching plant steel frames.'
  },
  {
    id: 'proj-13',
    title: 'The Wynkoop Plaza & Offices',
    category: 'ongoing',
    sector: 'commercial',
    image: '/projects/The-Wynkoop.jpg',
    location: 'Colorado, USA',
    tonnage: '1,650 Tons',
    description: 'Commercial office development with glass curtain wall structural backings and decorative entrance features.'
  },
  {
    id: 'proj-14',
    title: 'Redbud Elementary School',
    category: 'ongoing',
    sector: 'educational',
    image: '/projects/Redbud-Elementary.jpg',
    location: 'Oklahoma, USA',
    tonnage: '890 Tons',
    description: 'Primary school campus detailing joist and deck layouts, administrative wing, and gymnasium framing.'
  },
  {
    id: 'proj-15',
    title: 'Sulphur PS Gymnasium & Auditorium',
    category: 'ongoing',
    sector: 'educational',
    image: '/projects/Sulphur-PS-Gym-Auditorium.jpg',
    location: 'Oklahoma, USA',
    tonnage: '1,280 Tons',
    description: 'Multi-use gymnasium and performing arts auditorium with clear-span steel bowstring trusses.'
  },
  {
    id: 'proj-16',
    title: 'Virtua OLOL Heliport Facility',
    category: 'ongoing',
    sector: 'infrastructure',
    image: '/projects/Heliport-Virtua-OLOL1.jpg',
    location: 'New Jersey, USA',
    tonnage: '620 Tons',
    description: 'Elevated hospital helicopter landing pad framing with high-strength vibration-dampened steel connections.'
  },
  {
    id: 'proj-17',
    title: 'Jenks Freshman Academy Phase 03',
    category: 'ongoing',
    sector: 'educational',
    image: '/projects/Jenks-PS-Freshman-Academy-Phase-03.jpg',
    location: 'Oklahoma, USA',
    tonnage: '1,450 Tons',
    description: 'Multi-wing educational complex with long-span roof joists and integrated structural steel mezzanines.'
  },
  {
    id: 'proj-18',
    title: 'Rouyn-Noranda Heavy Industrial Plant',
    category: 'ongoing',
    sector: 'industrial',
    image: '/projects/Rouyn-Noranda.jpg',
    location: 'Quebec, Canada',
    tonnage: '3,400 Tons',
    description: 'Smelting and mineral processing plant structural steel, heavy duct supports, and maintenance platforms.'
  },
  {
    id: 'proj-19',
    title: 'U-Haul Spanish Springs Center',
    category: 'ongoing',
    sector: 'commercial',
    image: '/projects/U-Haul-Spanish-Springs.jpg',
    location: 'Nevada, USA',
    tonnage: '1,150 Tons',
    description: 'Multi-level commercial storage and vehicle service facility with reinforced mezzanine floors and parapets.'
  },
  {
    id: 'proj-20',
    title: 'Miller Industries Manufacturing Plant',
    category: 'ongoing',
    sector: 'industrial',
    image: '/projects/Miller_Industries1.jpg',
    location: 'Tennessee, USA',
    tonnage: '2,650 Tons',
    description: 'Heavy manufacturing plant detailed with continuous overhead bridge crane runways and wide-span bays.'
  },
  {
    id: 'proj-21',
    title: 'Sixth Street Mixed-Use Commercial Complex',
    category: 'ongoing',
    sector: 'commercial',
    image: '/projects/SIXTH-STREET02.jpg',
    location: 'Texas, USA',
    tonnage: '1,850 Tons',
    description: 'Urban commercial steel structure featuring decorative facade framing and multi-level retail bays.'
  },
  {
    id: 'proj-22',
    title: 'OSU Central Market Place',
    category: 'ongoing',
    sector: 'commercial',
    image: '/projects/OSU-Central-Market-Place.jpg',
    location: 'Oklahoma, USA',
    tonnage: '1,320 Tons',
    description: 'University retail hub featuring open-concept structural steel atriums and skylight supports.'
  },
  {
    id: 'proj-23',
    title: 'The Medley South Commercial Development',
    category: 'ongoing',
    sector: 'commercial',
    image: '/projects/THE-MEDLEY-SOUTH-PROJECT.jpg',
    location: 'Florida, USA',
    tonnage: '1,550 Tons',
    description: 'Large-scale commercial logistics and distribution center with high-clearance perimeter frames.'
  },
  {
    id: 'proj-24',
    title: 'Lake Charles Gateway Canopy & Signage',
    category: 'ongoing',
    sector: 'commercial',
    image: '/projects/Lake-Charles-Sign-Upgrade.jpg',
    location: 'Louisiana, USA',
    tonnage: '480 Tons',
    description: 'Architectural structural sign tower, marquee supports, and high-wind cantilever canopy framing.'
  },
  {
    id: 'proj-25',
    title: 'Albany Commercial & Distribution Center',
    category: 'ongoing',
    sector: 'commercial',
    image: '/projects/Albany01.jpg',
    location: 'New York, USA',
    tonnage: '1,920 Tons',
    description: 'Distribution logistics facility with insulated metal panel framing and loading dock cantilevers.'
  },
  {
    id: 'proj-26',
    title: 'UAJA Biosolids Environmental Facility',
    category: 'ongoing',
    sector: 'infrastructure',
    image: '/projects/UAJA-Biosolids01.jpg',
    location: 'Pennsylvania, USA',
    tonnage: '1,750 Tons',
    description: 'Municipal wastewater biosolids processing complex with corrosive-resistant structural connections.'
  },
  {
    id: 'proj-27',
    title: 'Northwest Elementary Campus',
    category: 'ongoing',
    sector: 'educational',
    image: '/projects/Northwest-Elementary-School.jpg',
    location: 'Kansas, USA',
    tonnage: '920 Tons',
    description: 'Contemporary school facility with modular classroom framing and seismic bracing systems.'
  },
  {
    id: 'proj-28',
    title: 'STEAM Innovation & Science Center',
    category: 'ongoing',
    sector: 'educational',
    image: '/projects/STEAM-Building.jpg',
    location: 'North America',
    tonnage: '1,400 Tons',
    description: 'Interdisciplinary science and technology facility with high-capacity lab mezzanine floor structures.'
  },
  {
    id: 'proj-29',
    title: 'Jackson Elementary School Expansion',
    category: 'ongoing',
    sector: 'educational',
    image: '/projects/Jackson-Elementary2.jpg',
    location: 'North America',
    tonnage: '860 Tons',
    description: 'Public school expansion with two-story classroom steel framing and connecting corridors.'
  },
  {
    id: 'proj-30',
    title: 'Gomex IMS New Manufacturing Plant',
    category: 'ongoing',
    sector: 'industrial',
    image: '/projects/New-Building-Gomex-Ims.jpg',
    location: 'North America',
    tonnage: '2,300 Tons',
    description: 'Industrial machinery fabrication plant with heavy equipment foundation anchorings and monorails.'
  }
];

export const AXIAL_PROJECTS: Project[] = PROJECTS_DATA;

export const SAMPLE_DRAWINGS: SampleDrawing[] = [
  {
    id: 'draw-1',
    title: 'Anchor Bolt & Foundation Embed Plan 01',
    category: 'ab',
    categoryLabel: 'AB Plans',
    image: '/drawings/ab-plan-and-embed-plan-drawings-1.jpg',
    sheetNo: 'AB-101',
    scale: '1/8" = 1\'-0"',
    standards: 'AISC 360-16 / ACI 318',
    description: 'Anchor bolt foundation placement plan showing exact column centerline coordinates, embed plate details, projection heights, and grout elevations.',
    format: 'PDF / DWG / NC1'
  },
  {
    id: 'draw-2',
    title: 'Anchor Bolt & Foundation Embed Plan 02',
    category: 'ab',
    categoryLabel: 'AB Plans',
    image: '/drawings/ab-plan-and-embed-plan-drawings-2.jpg',
    sheetNo: 'AB-102',
    scale: '1/8" = 1\'-0"',
    standards: 'AISC 360-16 / ACI 318',
    description: 'Foundation anchor bolt layout with heavy column base plate embedment locations, shear key pockets, and tie rod orientations.',
    format: 'PDF / DWG / NC1'
  },
  {
    id: 'draw-3',
    title: 'Beam Assembly Shop Drawing 01',
    category: 'shop',
    categoryLabel: 'Shop Drawings',
    image: '/drawings/shop-drawings-1.jpg',
    sheetNo: 'B-101',
    scale: '1/2" = 1\'-0"',
    standards: 'AISC 360-16 / AWS D1.1',
    description: 'Fabrication assembly detail sheet for wide flange composite beams showing end shear tabs, web penetrations, and coping geometry.',
    format: 'PDF / DXF / DSTV'
  },
  {
    id: 'draw-4',
    title: 'Column Assembly Shop Drawing 02',
    category: 'shop',
    categoryLabel: 'Shop Drawings',
    image: '/drawings/shop-drawings-2.jpg',
    sheetNo: 'C-201',
    scale: '1/2" = 1\'-0"',
    standards: 'AISC 360-16 / AWS D1.1',
    description: 'Heavy multi-tier structural column fabrication drawing complete with welded moment connection plates, stiffener details, and splice preparations.',
    format: 'PDF / DXF / DSTV'
  },
  {
    id: 'draw-5',
    title: 'Fabrication Detail Sheet 03',
    category: 'shop',
    categoryLabel: 'Shop Drawings',
    image: '/drawings/shop-drawings-3.jpg',
    sheetNo: 'S-301',
    scale: '3/4" = 1\'-0"',
    standards: 'AISC 360-16 / AWS D1.1',
    description: 'Shop piece mark details for beam clip angles, gusset plates, and connection fitting hardware with CNC hole centers and edge distances.',
    format: 'PDF / DXF / DSTV'
  },
  {
    id: 'draw-6',
    title: 'Assembly & Part Drawing 04',
    category: 'shop',
    categoryLabel: 'Shop Drawings',
    image: '/drawings/shop-drawings-4.jpg',
    sheetNo: 'A-401',
    scale: '1/2" = 1\'-0"',
    standards: 'AISC 360-16 / AWS D1.1',
    description: 'Complete structural assembly layout with bill of materials, weld schedules, shipping piece marks, and finish designations.',
    format: 'PDF / DXF / DSTV'
  },
  {
    id: 'draw-7',
    title: 'Structural Framing Erection Plan 01',
    category: 'structural',
    categoryLabel: 'Structural Steel',
    image: '/drawings/structural-steel-drawings-1.jpg',
    sheetNo: 'E-101',
    scale: '1/4" = 1\'-0"',
    standards: 'AISC 360-16',
    description: 'Full building structural steel erection diagram showing beam piece marks, column centerlines, moment connection symbols, and deck support angles.',
    format: 'PDF / DWG'
  },
  {
    id: 'draw-8',
    title: 'Structural Roof Framing & Truss E-Sheet 02',
    category: 'structural',
    categoryLabel: 'Structural Steel',
    image: '/drawings/structural-steel-drawings-2.jpg',
    sheetNo: 'E-201',
    scale: '1/4" = 1\'-0"',
    standards: 'AISC 360-16',
    description: 'Roof framing plan and long-span truss erection layout with temporary stability bracing guidelines and field bolt matrices.',
    format: 'PDF / DWG'
  },
  {
    id: 'draw-9',
    title: 'Commercial Stair Tower & Railing Detail 01',
    category: 'misc',
    categoryLabel: 'Misc Metals',
    image: '/drawings/miscellaneous-steel-drawings-1.jpg',
    sheetNo: 'M-101',
    scale: '3/8" = 1\'-0"',
    standards: 'NAAMM / OSHA / IBC',
    description: 'Egress stair assembly sheet showing stringer fabrication, pan treads, intermediate landings, and architectural handrail post attachments.',
    format: 'PDF / DWG / DXF'
  },
  {
    id: 'draw-10',
    title: 'Industrial Ladder & Guardrail Details 02',
    category: 'misc',
    categoryLabel: 'Misc Metals',
    image: '/drawings/miscellaneous-steel-drawings-2.jpg',
    sheetNo: 'M-201',
    scale: '1/2" = 1\'-0"',
    standards: 'OSHA / NAAMM',
    description: 'Miscellaneous metal drawings for roof access ladders with safety cages, industrial catwalks, grab bars, and mechanical equipment screens.',
    format: 'PDF / DWG / DXF'
  }
];

export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: 'tm-1',
    name: 'Jegatheesh R',
    role: 'President / Owner',
    image: '/team/jegatheesh-r.jpg'
  },
  {
    id: 'tm-2',
    name: 'Jamuna Kumar',
    role: 'Director',
    image: '/team/jamuna-kumar.jpg'
  },
  {
    id: 'tm-3',
    name: 'Manoj Kumar',
    role: 'Vice President',
    image: '/team/manoj-kumar.jpg'
  },
  {
    id: 'tm-4',
    name: 'Anand Kailash',
    role: 'Sr. Project Manager',
    image: '/team/anand-kailash.jpg'
  },
  {
    id: 'tm-5',
    name: 'Sathish Subramanian',
    role: 'Project Manager',
    image: '/team/sathish-subramanian.jpg'
  },
  {
    id: 'tm-6',
    name: 'Antony Arokiam Ulaganathan',
    role: 'Project Manager',
    image: '/team/antony-arokiam.jpg'
  },
  {
    id: 'tm-7',
    name: 'Selva Perumal',
    role: 'Head - Execution & Deliveries',
    image: '/team/selva-perumal.jpg'
  }
];

export const JOB_OPENINGS: JobOpening[] = [
  {
    id: 'job-1',
    title: 'Business Development Manager – BDM',
    department: 'Sales & Market Growth',
    location: 'Bangalore (HQ) / Remote',
    description: 'We’re seeking a Business Development Manager to drive growth by building client relationships and expanding our presence in global steel detailing markets. Strong communication, market insight, and experience in B2B sales within AISC or construction industry are essential.',
    requirements: [
      '5+ years in B2B construction / steel sales',
      'Knowledge of AISC / CISC steel detailing markets',
      'Track record in international client acquisition',
      'Strong negotiation & proposal writing skills'
    ]
  },
  {
    id: 'job-2',
    title: 'Connection Design Engineer',
    department: 'Structural Engineering',
    location: 'Bangalore (HQ) / Coimbatore Branch',
    description: 'We’re seeking a Connection Design Engineer to develop safe, efficient, and code-compliant steel connections for diverse structural projects. Strong understanding of AISC 360/341 standards and proficiency in RAM, STAAD.Pro, or IDEA StatiCa preferred.',
    requirements: [
      'B.Tech / M.Tech in Civil / Structural Engineering',
      'Proficiency in IDEA StatiCa & RAM Connection',
      'In-depth knowledge of AISC & CISC codes',
      'PE Stamping experience is a major plus'
    ]
  },
  {
    id: 'job-3',
    title: 'Research & Development (R & D) Specialist',
    department: 'Tekla Automation & BIM',
    location: 'Bangalore (HQ)',
    description: 'We are building an R&D team dedicated to innovation in steel detailing technology. Ideal candidates will create Tekla C# Open API plugins, custom components, and automated BIM workflows.',
    requirements: [
      'Experience in Tekla Open API development (C# / .NET)',
      'Background in BIM workflow optimization',
      'Strong algorithmic problem solving',
      'Passion for automation in structural drafting'
    ]
  },
  {
    id: 'job-4',
    title: 'Tekla Administrator',
    department: 'Systems & CAD Operations',
    location: 'Bangalore (HQ) / Coimbatore Branch',
    description: 'We are seeking skilled Tekla Admin professionals to support and stream our steel detailing operations. Manages Tekla Structures licenses, environment settings, firm folders, and project setups.',
    requirements: [
      'Advanced Tekla Structures administration',
      'Custom environment & template configuration',
      'License server setup & team troubleshooting',
      'Quality assurance setup for shop drawings'
    ]
  }
];
