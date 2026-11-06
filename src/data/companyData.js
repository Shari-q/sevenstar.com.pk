import logo from '../assets/seven-star-logo.png';

export const COMPANY_INFO = {
  name: "Seven Star Group of Companies",
  legalName: "7-Star & Co. (Private) Limited",
  tagline: "Building Futures. Engineering Progress.",
  establishedYear: 1999,
  yearsExperience: "25+",
  projectsCompleted: "400+",
  pecCategory: "Category C-A (No Limit)",
  pecDescription: "Highest Category Licensure with Pakistan Engineering Council for Mega Infrastructure & High-Rise Projects",
  
  logo,
  logoIcon: "https://sevenstar.com.pk/wp-content/uploads/2023/09/cropped-3-2-192x192.png",

  leadership: {
    ceo: {
      name: "Engr. Muhammad Rizwan",
      title: "Chief Executive Officer & Managing Director",
      image: "https://sevenstar.com.pk/wp-content/uploads/2023/12/With-Chairman-PEC.png",
      message: "At Seven Star Group, our journey is defined by trust, precision, and relentless engineering progress. Every road, bridge, hospital, and high-rise we deliver becomes a permanent cornerstone of society. That immense responsibility drives our uncompromising commitment to structural integrity, safety, and sustainable innovation across Pakistan and our international operations.",
      credentials: "B.Sc. Civil Engineering, Registered Professional Engineer (PEC), IEEE Member"
    },
    teamHighlights: [
      {
        title: "Chief Civil Engineering Directorate",
        description: "Over 80+ licensed structural engineers, project managers, and geotechnical surveyors."
      },
      {
        title: "Heavy Equipment Logistics Command",
        description: "Specialized operators and technicians managing our asphalt plants and 500+ unit machinery fleet."
      },
      {
        title: "Real Estate & Architecture Division",
        description: "Forward-thinking architects and urban master-planners driving high-rise luxury developments in DHA and Bahria Town."
      }
    ]
  },

  offices: [
    {
      type: "Corporate Headquarters",
      city: "Mirpur AJK",
      address: "32, Sector F/3, Part III, Main Kotli Road, Mirpur, Azad Jammu & Kashmir",
      phones: ["+92 582 7437 268", "+92 300 2748 007"],
      email: "info@sevenstar.com.pk",
      isPrimary: true
    },
    {
      type: "Capital City Office",
      city: "Islamabad",
      address: "Seven Star Corporate Suite, DHA Phase-II, Main GT Road, Islamabad",
      phones: ["+92 300 4376 007", "+92 300 2139 007"],
      email: "islamabad@sevenstar.com.pk",
      isPrimary: false
    },
    {
      type: "Regional Executive Office",
      city: "Rawalpindi",
      address: "Seven Star Executive Suites, Bahria Town, Rawalpindi",
      phones: ["+92 300 2748 007"],
      email: "rawalpindi@sevenstar.com.pk",
      isPrimary: false
    },
    {
      type: "Bhimber Regional Hub",
      city: "Bhimber AJK",
      address: "Main Road, Dhandar, Bhimber, Azad Jammu & Kashmir",
      phones: ["+92 582 7437 268"],
      email: "bhimber@sevenstar.com.pk",
      isPrimary: false
    },
    {
      type: "International Operations",
      city: "United Kingdom",
      address: "Seven Star UK Ltd, Residential Housing & Development Division, United Kingdom",
      phones: ["+44 774 6000 007"],
      email: "uk@sevenstar.com.pk",
      isPrimary: false
    }
  ],

  contact: {
    primaryPhone: "+92 582 7437 268",
    hotlines: [
      "+92 300 2748 007",
      "+92 300 4376 007",
      "+92 300 2139 007",
      "+44 774 6000 007"
    ],
    email: "info@sevenstar.com.pk",
    supportEmail: "support@sevenstar.com.pk",
    hours: "Monday to Saturday: 10:00 AM — 06:00 PM (PKT)",
    socials: {
      facebook: "https://www.facebook.com/sevenstar.com.pk",
      instagram: "https://www.instagram.com/sevenstar.com.pk/"
    }
  },

  stats: [
    { label: "Government & National Projects", value: "400+", sub: "Delivered on Schedule" },
    { label: "Years of Engineering Excellence", value: "25+", sub: "Established in 1999" },
    { label: "PEC Contractor Category", value: "C-A", sub: "No Limit Mega Projects" },
    { label: "Heavy Machinery & Fleet", value: "500+", sub: "Company Owned Assets" },
    { label: "International Presence", value: "UK & PK", sub: "Dual Market Operations" }
  ],

  divisions: [
    {
      id: "construction",
      name: "Construction Division",
      slug: "construction",
      tagline: "Commercial, Institutional & High-Capacity Facilities",
      image: "https://sevenstar.com.pk/wp-content/uploads/2025/12/1-43_48_11zon-scaled.webp",
      shortDesc: "Comprehensive turnkey construction services for high-rise buildings, educational complexes, and hospital infrastructure under strict quality and safety codes.",
      features: [
        "Multistory Educational & University Campuses",
        "500-Bed State-of-the-Art DHQ Hospitals",
        "High Court & Government Rest Houses",
        "Earthquake Resistant Engineering & Seismic Design"
      ]
    },
    {
      id: "infrastructure",
      name: "Infrastructure & Civil Works",
      slug: "infrastructure",
      tagline: "Highways, Dual Carriageways & Major RCC Bridges",
      image: "https://sevenstar.com.pk/wp-content/uploads/2025/12/1-44_36_11zon-scaled.webp",
      shortDesc: "Leading contractor for national highways, high-load dual carriageways, major river bridges, and regional water supply / sewerage networks.",
      features: [
        "National Highways & Dual Carriageways (over 200+ km built)",
        "Prestressed & RCC River Bridges up to 180m Span",
        "Comprehensive Municipal Water Treatment & Sewerage",
        "Retaining Walls & Riverbank Flood Protection"
      ]
    },
    {
      id: "real-estate",
      name: "Real Estate & High-Rise",
      slug: "real-estate",
      tagline: "Luxury High-Rises in Bahria Town & DHA Islamabad",
      image: "https://sevenstar.com.pk/wp-content/uploads/2025/12/PIC-1-1.webp",
      shortDesc: "Developing landmark residential towers and premier mixed-use commercial destinations designed for luxury living and maximum investment appreciation.",
      features: [
        "Seven Star Heights (Bahria Town Rawalpindi/Islamabad)",
        "Seven Star Mall & Residency (Main GT Road, DHA Phase II)",
        "Exclusive Penthouses & Smart Living Apartments",
        "World-Class Commercial Retail & Corporate Suites"
      ]
    },
    {
      id: "government-contractor",
      name: "Government Contracting",
      slug: "government-projects",
      tagline: "Trusted PEC Category C-A Partner for Federal & Provincial Departments",
      image: "https://sevenstar.com.pk/wp-content/uploads/2025/12/1-53_45_11zon-scaled.webp",
      shortDesc: "Enlisted with Pakistan Public Works (PP&H), Communication & Works (C&W), LG&RD, Health, and Education departments for critical national assets.",
      features: [
        "Pakistan Engineering Council (PEC) Category C-A No-Limit",
        "Enlisted with C&W, PP&H, LG&RD, and PWD",
        "Islamic Development Bank (IDB) Assisted Projects",
        "Prime Minister & President of AJK Commended Performance"
      ]
    },
    {
      id: "petroleum-lpg",
      name: "Petroleum & LPG Distribution",
      slug: "petroleum-lpg",
      tagline: "Energy Stations, Storage Terminals & Distribution Logistics",
      image: "https://sevenstar.com.pk/wp-content/uploads/2024/09/Blog-29-300x169.png",
      shortDesc: "Supplying energy solutions with modern retail petroleum stations and high-capacity LPG distribution plants across strategic transit corridors.",
      features: [
        "7-Star & M Zakaria Petrol Pump (Mirpur AJK)",
        "7-Star Petroleum (Bhimber AJK)",
        "Industrial Bulk LPG Supply Terminals",
        "Strict OGRA Safety Compliance & Environmental Standards"
      ]
    },
    {
      id: "machinery-equipment",
      name: "Machinery & Asphalt Plant",
      slug: "machinery-equipment",
      tagline: "Own Fleet of Heavy Construction Plants & Logistics",
      image: "https://sevenstar.com.pk/wp-content/uploads/2023/12/UKS05903-768x512.webp",
      shortDesc: "Operating modern high-capacity asphalt production facilities in Jatlan, Mirpur, alongside an extensive fleet of specialized heavy machinery.",
      features: [
        "7-Star Industrial Asphalt Plant (Jatlan, Mirpur AJK)",
        "Heavy Hydraulic Excavators, Graders, and Vibratory Rollers",
        "High-Precision Asphalt Pavers & Milling Equipment",
        "Fleet of Concrete Batching Plants & Transit Mixers"
      ]
    },
    {
      id: "seven-star-uk",
      name: "Seven Star UK",
      slug: "seven-star-uk",
      tagline: "International Housing Developments & Property Portfolio",
      image: "https://sevenstar.com.pk/wp-content/uploads/2025/12/1-25_58_11zon-scaled.webp",
      shortDesc: "Expanding Seven Star's trusted craftsmanship to the United Kingdom, delivering premium residential housing projects and real estate developments.",
      features: [
        "Large-Scale Residential Housing in the UK",
        "British Building Standards & Sustainability Practices",
        "Overseas Investment Opportunities for Expats",
        "Dedicated UK Support & Representation (+44 774 6000 007)"
      ]
    },
    {
      id: "residential-development",
      name: "Residential Development & Colony Planning",
      slug: "residential-development",
      tagline: "Master-Planned Communities & Turnkey Homes",
      image: "https://sevenstar.com.pk/wp-content/uploads/2025/12/1-29_62_11zon-scaled.webp",
      shortDesc: "Specializing in turning vision into thriving residential communities with end-to-end colony planning, zoning, utilities, and turnkey home construction.",
      features: [
        "Master Colony Urban Planning & Zoning",
        "Integrated Road Networks, Sewerage & Utilities",
        "Turnkey Custom Villa & Home Construction",
        "Parks, Community Centers & Green Enclaves"
      ]
    }
  ],

  awards: [
    {
      title: "Honored by Prime Minister for Exemplary Project Performance",
      authority: "Government of Azad Jammu & Kashmir",
      image: "https://sevenstar.com.pk/wp-content/uploads/2023/12/PM-of-AJK.png",
      description: "Recognized at the highest state level by the Prime Minister for outstanding timeliness and engineering quality on crucial public infrastructure."
    },
    {
      title: "PEC Chairman Commendation at IEEE International Conference",
      authority: "Pakistan Engineering Council (PEC) & IEEE",
      image: "https://sevenstar.com.pk/wp-content/uploads/2023/12/With-Chairman-PEC.png",
      description: "CEO Engr. Muhammad Rizwan receiving honor from PEC Chairman for contributions to power, energy, smart grid, and advanced civil infrastructure."
    },
    {
      title: "Strategic International Consortium with Chinese Construction Group",
      authority: "International Engineering Partnership",
      image: "https://sevenstar.com.pk/wp-content/uploads/2023/12/MOU-With-Chinese-Company-2.png",
      description: "Signing landmark bilateral cooperation memorandum for mega infrastructure, tunneling, and high-efficiency precast technology."
    },
    {
      title: "Presidential Certificate of Appreciation",
      authority: "Presidency of Azad Jammu & Kashmir",
      image: "https://sevenstar.com.pk/wp-content/uploads/2023/12/Certificate-of-Appreciation-President-of-AJK-768x719.png",
      description: "Conferred for monumental contributions to post-earthquake rehabilitation, regional healthcare facilities, and educational institutions."
    }
  ],

  testimonials: [
    {
      quote: "Seven Star Group's commitment to precision and timeline adherence has set a new benchmark for infrastructure in the region. Their delivery on the 500-bed DHQ Hospital and major road corridors has significantly enhanced regional life.",
      author: "Senior Engineering Directorate",
      role: "Public Works & Health Infrastructure Review",
      location: "Mirpur AJK"
    },
    {
      quote: "As an overseas Pakistani based in London, finding a developer with authentic credibility was essential. Seven Star Heights and Seven Star Mall & Residency provide both uncompromising structural quality and solid capital appreciation.",
      author: "Tariq Mahmood",
      role: "UK Investor & Resident",
      location: "London, United Kingdom"
    },
    {
      quote: "Seven Star & Co.'s Category C-A standing is well earned. Their equipment capability, including their own asphalt plants and heavy fleet, allows them to execute complex dual carriageways where other contractors struggle.",
      author: "Infrastructure Project Consultant",
      role: "Highways & Communication Directorate",
      location: "Punjab / AJK"
    }
  ]
};
