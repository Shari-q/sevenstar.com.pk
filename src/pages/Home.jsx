import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Building2, ShieldCheck, Award, ArrowRight, ArrowUpRight, 
  MapPin, CheckCircle2, ChevronRight, ChevronLeft, Phone, Sparkles, 
  HardHat, Flame, Truck, Globe, Calendar, Compass
} from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';
import { PROJECTS_DATA } from '../data/projectsData';
import MarqueeTicker from '../components/MarqueeTicker';
import ProjectCard from '../components/ProjectCard';
import PropertyCalculator from '../components/PropertyCalculator';

export default function Home({ onOpenInquiry }) {
  const [activeProjectTab, setActiveProjectTab] = useState('all');
  const [currentSlide, setCurrentSlide] = useState(0);

  // EXACT 7 OFFICIAL BANNERS FROM HTTPS://SEVENSTAR.COM.PK/
  const officialBanners = [
    {
      id: 1,
      image: "https://sevenstar.com.pk/wp-content/uploads/2025/02/construction-site-silhouette-sky-city-material-scaled.jpg",
      badge: "PEC CATEGORY C-A (NO LIMIT) CONTRACTOR",
      title: "Seven Star Group",
      subtitle: "Delivering public infrastructure and large-scale developments across Pakistan and Azad Jammu & Kashmir for over 25 years.",
      highlight: "400+ government projects delivered • Offices in AJK, Islamabad, Rawalpindi & UK",
      ctaText: "Explore High-Rise Projects",
      ctaLink: "/real-estate",
      secondaryText: "Mega Infrastructure",
      secondaryLink: "/services/infrastructure"
    },
    {
      id: 2,
      image: "https://sevenstar.com.pk/wp-content/uploads/2025/02/Untitled-design-4-2048x1364.png",
      badge: "CATEGORY C-A INFRASTRUCTURE LEADER",
      title: "Government Infrastructure Delivered At Scale",
      subtitle: "From roads and bridges to hospitals, courts, and public facilities, our projects support daily life and long-term national development.",
      highlight: "Executed by 7-Star & Co. (Pvt.) Ltd. registered with Pakistan Engineering Council",
      ctaText: "View Government Projects",
      ctaLink: "/services/government-projects",
      secondaryText: "Completed Portfolio",
      secondaryLink: "/projects/completed"
    },
    {
      id: 3,
      image: "https://sevenstar.com.pk/wp-content/uploads/2023/12/Add-a-heading-1-1536x1025.png",
      badge: "MAIN GT ROAD • GATE 04 DHA PHASE II",
      title: "Seven Star Mall & Residency",
      subtitle: "A modern mixed-use landmark on Main GT Road near Gate 04, DHA Phase II, Islamabad — combining luxury residences, retail mall, and lifestyle facilities under one roof.",
      highlight: "Developed by Seven Star Group, backed by 25+ years of execution experience",
      ctaText: "Explore Mall & Residency",
      ctaLink: "/projects/seven-star-mall-residency",
      secondaryText: "Booking & Payment Plan",
      secondaryLink: "/projects/seven-star-mall-residency"
    },
    {
      id: 4,
      image: "https://sevenstar.com.pk/wp-content/uploads/2025/02/Untitled-design-e1739806669268-2048x1110.png",
      badge: "EXECUTIVE RESIDENTIAL TOWER",
      title: "Seven Star Heights",
      subtitle: "A landmark development in Bahria Town, Rawalpindi, offering spacious apartments, modern offices, and retail spaces in a well-planned urban setting.",
      highlight: "Luxury living suites, earthquake-resistant design & easy quarterly installments",
      ctaText: "Explore Seven Star Heights",
      ctaLink: "/projects/seven-star-heights",
      secondaryText: "Apartment Layouts",
      secondaryLink: "/projects/seven-star-heights"
    },
    {
      id: 5,
      image: "https://sevenstar.com.pk/wp-content/uploads/2023/12/DSC_9557.jpg",
      badge: "COMPANY OWNED MACHINERY ARMADA",
      title: "Built With Discipline. Delivered With Standards.",
      subtitle: "Modern machinery, 160 T/H asphalt plants, and strict quality control ensure consistency, safety, and on-time delivery across all projects.",
      highlight: "500+ heavy fleet units & computerized batching plant in Jatlan, Mirpur AJK",
      ctaText: "Explore Machinery & Fleet",
      ctaLink: "/divisions/machinery-equipment",
      secondaryText: "Civil Engineering",
      secondaryLink: "/services/infrastructure"
    },
    {
      id: 6,
      image: "https://sevenstar.com.pk/wp-content/uploads/2025/01/Untitled-design-2-1536x1023.png",
      badge: "ENERGY & LOGISTICS INTEGRATION",
      title: "Integrated Energy. Stronger Execution.",
      subtitle: "Through petroleum and LPG plant operations, Seven Star Group strengthens delivery capability, operational control, and long-term project support across the region.",
      highlight: "Retail fuel stations in Mirpur & Bhimber with regional bulk LPG distribution",
      ctaText: "Petroleum & LPG Operations",
      ctaLink: "/divisions/petroleum-lpg",
      secondaryText: "Commercial Supply",
      secondaryLink: "/divisions/petroleum-lpg"
    },
    {
      id: 7,
      image: "https://sevenstar.com.pk/wp-content/uploads/2025/04/residential-house-under-construction-with-modern-building-process-and-architecture-scaled.jpg",
      badge: "INTERNATIONAL OPERATIONS • UNITED KINGDOM",
      title: "Beyond Borders. Consistent Standards.",
      subtitle: "With ongoing large-scale housing projects in the United Kingdom, Seven Star Group extends its execution discipline and quality-driven approach into international markets.",
      highlight: "Residential developments in the UK & transparent overseas investment services",
      ctaText: "Explore Seven Star UK",
      ctaLink: "/divisions/seven-star-uk",
      secondaryText: "Call UK Helpline",
      secondaryLink: "/contact"
    }
  ];

  // Auto-advance hero slides every 6 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % officialBanners.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [officialBanners.length]);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % officialBanners.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + officialBanners.length) % officialBanners.length);

  const categories = [
    { id: 'all', label: 'All Showcase' },
    { id: 'Real Estate & High-Rise', label: 'Real Estate & High-Rise' },
    { id: 'Roads & Highways', label: 'Roads & Highways' },
    { id: 'Public Facilities & Hospitals', label: 'Public Facilities & Hospitals' },
    { id: 'Bridges & Civil Infrastructure', label: 'Bridges & Structures' }
  ];

  const filteredProjects = activeProjectTab === 'all'
    ? PROJECTS_DATA.filter(p => p.featured)
    : PROJECTS_DATA.filter(p => p.category === activeProjectTab);

  return (
    <div className="min-h-screen bg-brand-surface pt-20">
      {/* 1. CINEMATIC HERO SLIDER WITH EXACT OFFICIAL SEVEN STAR BANNERS */}
      <section className="relative min-h-[85vh] sm:min-h-[90vh] flex items-center justify-center overflow-hidden bg-slate-900">
        {/* Banner Slides */}
        {officialBanners.map((slide, idx) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              idx === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
            }`}
          >
            <img 
              src={slide.image} 
              alt={slide.title} 
              className="w-full h-full object-cover object-center scale-105 transition-transform duration-[8000ms] ease-out"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = "https://sevenstar.com.pk/wp-content/uploads/2025/12/1-44_36_11zon-scaled.webp";
              }}
            />
            {/* Cinematic Gradient Overlays to guarantee high contrast */}
            <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-950/70 to-slate-950/40" />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-slate-950/40" />
          </div>
        ))}

        {/* Content Layer */}
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-8 py-20 lg:py-28 flex flex-col items-start justify-center w-full">
          {/* Top Badge */}
          <div className="inline-flex items-center space-x-2.5 px-4 py-1.5 rounded-full bg-white/10 border border-amber-300/40 text-amber-300 text-xs font-extrabold uppercase tracking-widest backdrop-blur-md mb-6 shadow-sm">
            <ShieldCheck className="w-4 h-4 text-amber-300" />
            <span>{officialBanners[currentSlide].badge}</span>
          </div>

          {/* Dynamic Banner Headline */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white max-w-4xl font-heading leading-[1.12] mb-6 drop-shadow-md">
            {officialBanners[currentSlide].title}
          </h1>

          {/* Subtitle */}
          <p className="text-sm sm:text-lg text-slate-200 max-w-2xl font-light leading-relaxed mb-6 drop-shadow">
            {officialBanners[currentSlide].subtitle}
          </p>

          {/* Verified Highlight */}
          <div className="text-xs text-amber-200/90 font-medium mb-8 bg-black/40 px-3.5 py-1.5 rounded-lg border border-white/10 backdrop-blur-sm">
            ✦ {officialBanners[currentSlide].highlight}
          </div>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto">
            <Link
              to={officialBanners[currentSlide].ctaLink}
              className="btn-gold px-8 py-4 rounded-full text-xs uppercase font-extrabold tracking-widest text-center shadow-xl flex items-center justify-center space-x-3 group"
            >
              <span>{officialBanners[currentSlide].ctaText}</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>

            <Link
              to={officialBanners[currentSlide].secondaryLink}
              className="px-8 py-4 rounded-full text-xs uppercase font-extrabold tracking-widest text-center text-white bg-white/10 hover:bg-white/20 border border-white/20 backdrop-blur-md transition-all flex items-center justify-center space-x-2"
            >
              <span>{officialBanners[currentSlide].secondaryText}</span>
            </Link>

            <button
              onClick={onOpenInquiry}
              className="px-6 py-4 rounded-full text-xs uppercase font-bold tracking-widest text-slate-200 hover:text-white transition-colors flex items-center justify-center space-x-2"
            >
              <Calendar className="w-4 h-4 text-amber-300" />
              <span>Schedule Site Visit</span>
            </button>
          </div>
        </div>

        {/* Carousel Prev/Next Arrow Buttons */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-30 w-12 h-12 rounded-full bg-black/40 hover:bg-black/70 text-white border border-white/20 flex items-center justify-center backdrop-blur-md transition-all"
          aria-label="Previous Slide"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-30 w-12 h-12 rounded-full bg-black/40 hover:bg-black/70 text-white border border-white/20 flex items-center justify-center backdrop-blur-md transition-all"
          aria-label="Next Slide"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Slide Indicators & Thumbnails */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 flex items-center space-x-2 bg-black/50 px-4 py-2 rounded-full border border-white/10 backdrop-blur-md">
          {officialBanners.map((s, i) => (
            <button
              key={s.id}
              onClick={() => setCurrentSlide(i)}
              className={`transition-all duration-300 rounded-full ${
                i === currentSlide 
                  ? 'w-8 h-2.5 bg-amber-400' 
                  : 'w-2.5 h-2.5 bg-white/40 hover:bg-white/70'
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </section>

      {/* 2. MARQUEE TICKER (Light Mode) */}
      <MarqueeTicker />

      {/* 3. VERIFIED STATS COUNTERS (Light Mode) */}
      <section className="py-16 bg-white border-b border-slate-200 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-5 gap-6 sm:gap-8">
            {COMPANY_INFO.stats.map((st, idx) => (
              <div 
                key={idx} 
                className="bg-slate-50 border border-slate-200/80 rounded-2xl p-6 text-center hover:border-brand-gold hover:shadow-lg transition-all duration-300 group"
              >
                <div className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 font-heading group-hover:text-brand-gold transition-colors">
                  {st.value}
                </div>
                <div className="text-xs sm:text-sm font-bold text-slate-800 mt-2">
                  {st.label}
                </div>
                <div className="text-[11px] text-brand-gold font-bold mt-1">
                  {st.sub}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. BUSINESS DIVISIONS SHOWCASE (Light Mode) */}
      <section className="py-24 bg-brand-surface relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <div className="inline-flex items-center space-x-2 text-xs font-extrabold uppercase tracking-widest text-brand-gold mb-3">
                <span className="w-2 h-2 rounded-full bg-brand-gold"></span>
                <span>Our Conglomerate Ecosystem</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 font-heading">
                Seven Star Business Divisions
              </h2>
            </div>
            <p className="text-sm text-slate-600 max-w-md">
              From heavy civil infrastructure and national highways to luxury high-rise towers, industrial asphalt production, and petroleum supply terminals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {COMPANY_INFO.divisions.map((div, idx) => (
              <div 
                key={idx} 
                className="glass-card rounded-2xl overflow-hidden group flex flex-col justify-between bg-white border border-slate-200 hover:border-brand-gold shadow-sm hover:shadow-xl transition-all"
              >
                <div className="relative aspect-[16/11] overflow-hidden bg-slate-100">
                  <img 
                    src={div.image} 
                    alt={div.name}
                    loading="lazy" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = "https://sevenstar.com.pk/wp-content/uploads/2025/12/1-44_36_11zon-scaled.webp";
                    }}
                  />
                  <div className="absolute top-3 left-3 px-2.5 py-1 rounded-md text-[10px] font-extrabold uppercase tracking-wider bg-slate-900/80 text-amber-300 backdrop-blur-sm">
                    Division 0{idx + 1}
                  </div>
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 group-hover:text-brand-gold transition-colors">
                      {div.name}
                    </h3>
                    <p className="text-xs text-brand-gold font-bold mt-1">
                      {div.tagline}
                    </p>
                    <p className="text-xs text-slate-600 mt-2.5 line-clamp-3 leading-relaxed">
                      {div.shortDesc}
                    </p>
                  </div>

                  <Link
                    to={div.id.includes('petroleum') || div.id.includes('machinery') || div.id.includes('seven-star') || div.id.includes('residential') ? `/divisions/${div.slug}` : div.id === 'real-estate' ? '/real-estate' : `/services/${div.slug}`}
                    className="pt-3 border-t border-slate-100 inline-flex items-center justify-between text-xs font-bold uppercase tracking-wider text-slate-800 group-hover:text-brand-gold transition-colors"
                  >
                    <span>Explore Division</span>
                    <ArrowRight className="w-4 h-4 text-brand-gold transform group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. FEATURED LANDMARK PROJECTS (Light Mode Filterable Portfolio) */}
      <section className="py-24 bg-white border-t border-slate-200 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div>
              <div className="inline-flex items-center space-x-2 text-xs font-extrabold uppercase tracking-widest text-brand-gold mb-3">
                <span className="w-2 h-2 rounded-full bg-brand-gold"></span>
                <span>Flagship Engineering Showcase</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 font-heading">
                Landmark Portfolio
              </h2>
            </div>
            
            <Link
              to="/projects"
              className="inline-flex items-center space-x-2 text-xs font-extrabold uppercase tracking-widest text-brand-gold hover:underline transition-colors"
            >
              <span>View All 400+ Delivered Projects</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap gap-2.5 mb-10 pb-2 border-b border-slate-100">
            {categories.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveProjectTab(tab.id)}
                className={`px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all ${
                  activeProjectTab === tab.id
                    ? 'bg-brand-navy text-white shadow-md font-extrabold'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200 border border-slate-200'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Project Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.slice(0, 6).map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              to="/projects"
              className="btn-navy px-8 py-3.5 rounded-full text-xs uppercase font-extrabold tracking-widest inline-flex items-center space-x-2 shadow-lg"
            >
              <span>Explore Full Portfolio Catalog</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 6. REAL ESTATE LUXURY SPOTLIGHT: DHA II & BAHRIA TOWN (Light Mode) */}
      <section className="py-24 bg-slate-50 border-t border-slate-200 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-amber-50 border border-amber-200 text-brand-gold text-xs font-bold uppercase tracking-widest mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Luxury High-Rise Real Estate</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-slate-900 font-heading">
              Twin Cities Premier Landmarks
            </h2>
            <p className="text-sm text-slate-600 mt-4 leading-relaxed">
              Designed for elevated living and solid capital appreciation. Seven Star Group presents architecturally distinguished high-rise addresses in DHA Phase-II and Bahria Town.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* Spotlight 1: Seven Star Mall & Residency */}
            <div className="glass-card rounded-3xl overflow-hidden border border-slate-200 hover:border-brand-gold flex flex-col justify-between group bg-white shadow-sm hover:shadow-xl">
              <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
                <img 
                  src="https://sevenstar.com.pk/wp-content/uploads/2023/12/Add-a-heading-1-1536x1025.png" 
                  alt="Seven Star Mall & Residency" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-extrabold uppercase tracking-wider bg-slate-900/90 text-white shadow-md backdrop-blur-md">
                  DHA Phase-II, Islamabad
                </div>
              </div>

              <div className="p-8 space-y-6">
                <div>
                  <h3 className="text-2xl font-black text-slate-900 group-hover:text-brand-gold transition-colors">
                    Seven Star Mall & Residency
                  </h3>
                  <div className="text-xs font-bold uppercase tracking-wider text-brand-gold mt-1">
                    Main GT Road Near Gate 04 • Commercial & Luxury Residences
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 mt-3 leading-relaxed">
                    A grand mixed-use landmark combining multi-level luxury shopping mall outlets, corporate executive suites, and panoramic residential apartments equipped with high-speed elevators and 24/7 security.
                  </p>
                </div>

                <div className="grid grid-cols-3 gap-3 text-center border-y border-slate-100 py-4 text-xs">
                  <div>
                    <div className="text-slate-900 font-black text-base sm:text-lg">DHA II</div>
                    <div className="text-[10px] text-slate-500 uppercase">Prime Location</div>
                  </div>
                  <div>
                    <div className="text-slate-900 font-black text-base sm:text-lg">Commercial</div>
                    <div className="text-[10px] text-slate-500 uppercase">Retail Mall</div>
                  </div>
                  <div>
                    <div className="text-emerald-600 font-black text-base sm:text-lg">1, 2, 3 Bed</div>
                    <div className="text-[10px] text-slate-500 uppercase">& Penthouses</div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row items-center gap-3">
                  <Link
                    to="/projects/seven-star-mall-residency"
                    className="btn-gold w-full sm:w-auto px-6 py-3 rounded-full text-xs uppercase font-extrabold tracking-wider text-center flex-1 shadow-md flex items-center justify-center space-x-2"
                  >
                    <span>View DHA II Project Details</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                  <button
                    onClick={onOpenInquiry}
                    className="w-full sm:w-auto px-5 py-3 rounded-full text-xs font-bold uppercase tracking-wider bg-slate-100 text-slate-800 hover:bg-slate-200 transition-colors"
                  >
                    Schedule Booking
                  </button>
                </div>
              </div>
            </div>

            {/* Spotlight 2: Seven Star Heights */}
            <div className="glass-card rounded-3xl overflow-hidden border border-slate-200 hover:border-brand-gold flex flex-col justify-between group bg-white shadow-sm hover:shadow-xl">
              <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
                <img 
                  src="https://sevenstar.com.pk/wp-content/uploads/2025/02/Untitled-design-e1739806669268-2048x1110.png" 
                  alt="Seven Star Heights Bahria Town" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-extrabold uppercase tracking-wider bg-slate-900/90 text-white shadow-md backdrop-blur-md">
                  Bahria Town Rawalpindi / Islamabad
                </div>
              </div>

              <div className="p-8 space-y-6">
                <div>
                  <h3 className="text-2xl font-black text-slate-900 group-hover:text-brand-gold transition-colors">
                    Seven Star Heights
                  </h3>
                  <div className="text-xs font-bold uppercase tracking-wider text-brand-gold mt-1">
                    Prestige Gated Community • Executive Living Towers
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 mt-3 leading-relaxed">
                    Seven Star Heights introduces a refined living experience in Bahria Town. Designed with spacious balconies, contemporary interiors, and superior seismic-resistant structural engineering for families and overseas buyers.
                  </p>
                </div>

                <div className="grid grid-cols-3 gap-3 text-center border-y border-slate-100 py-4 text-xs">
                  <div>
                    <div className="text-slate-900 font-black text-base sm:text-lg">Bahria</div>
                    <div className="text-[10px] text-slate-500 uppercase">Prestige Sector</div>
                  </div>
                  <div>
                    <div className="text-slate-900 font-black text-base sm:text-lg">Skyline</div>
                    <div className="text-[10px] text-slate-500 uppercase">Panoramic Balconies</div>
                  </div>
                  <div>
                    <div className="text-emerald-600 font-black text-base sm:text-lg">High ROI</div>
                    <div className="text-[10px] text-slate-500 uppercase">Capital Growth</div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row items-center gap-3">
                  <Link
                    to="/projects/seven-star-heights"
                    className="btn-gold w-full sm:w-auto px-6 py-3 rounded-full text-xs uppercase font-extrabold tracking-wider text-center flex-1 shadow-md flex items-center justify-center space-x-2"
                  >
                    <span>View Bahria Town Heights</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                  <button
                    onClick={onOpenInquiry}
                    className="w-full sm:w-auto px-5 py-3 rounded-full text-xs font-bold uppercase tracking-wider bg-slate-100 text-slate-800 hover:bg-slate-200 transition-colors"
                  >
                    Schedule Booking
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Interactive Property Calculator (Light Mode) */}
          <div className="mt-16">
            <PropertyCalculator onOpenInquiry={onOpenInquiry} />
          </div>
        </div>
      </section>

      {/* 7. ABOUT & LEADERSHIP SHOWCASE (Light Mode) */}
      <section className="py-24 bg-white border-t border-slate-200 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Leadership Image */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-3xl overflow-hidden border border-slate-200 shadow-xl bg-slate-100">
                <img 
                  src={COMPANY_INFO.leadership.ceo.image} 
                  alt={COMPANY_INFO.leadership.ceo.name}
                  className="w-full h-auto object-cover object-top"
                />
                <div className="p-5 bg-white border-t border-slate-200">
                  <div className="text-xs font-bold uppercase tracking-widest text-brand-gold">
                    Executive Leadership
                  </div>
                  <div className="text-lg font-black text-slate-900">
                    {COMPANY_INFO.leadership.ceo.name}
                  </div>
                  <div className="text-xs text-slate-500">
                    {COMPANY_INFO.leadership.ceo.title}
                  </div>
                </div>
              </div>
            </div>

            {/* Content & History */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center space-x-2 text-xs font-extrabold uppercase tracking-widest text-brand-gold">
                <span className="w-2 h-2 rounded-full bg-brand-gold"></span>
                <span>Engineering Heritage & Integrity</span>
              </div>
              
              <h2 className="text-3xl sm:text-5xl font-black text-slate-900 font-heading leading-tight">
                Over 25 Years of Building Critical National Assets
              </h2>

              <blockquote className="border-l-4 border-brand-gold pl-5 italic text-slate-700 text-sm sm:text-base leading-relaxed bg-slate-50 py-4 pr-4 rounded-r-xl">
                "{COMPANY_INFO.leadership.ceo.message}"
              </blockquote>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Seven Star Group of Companies has grown from regional civil undertakings into one of Pakistan’s premier contracting corporations. With over <strong className="text-slate-900">400 government projects delivered</strong>, our Category C-A standing with the Pakistan Engineering Council reflects technical perfection, substantial fleet mobilization, and strict adherence to schedules.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <div className="text-brand-gold font-bold text-sm">PEC Category C-A</div>
                  <div className="text-xs text-slate-600 mt-1">No-limit mega project licensing covering all engineering disciplines.</div>
                </div>
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <div className="text-brand-gold font-bold text-sm">In-House Production</div>
                  <div className="text-xs text-slate-600 mt-1">Operating own 160 T/H asphalt plants and heavy logistics fleet.</div>
                </div>
              </div>

              <div className="pt-4 flex flex-wrap gap-4">
                <Link
                  to="/leadership"
                  className="btn-gold px-7 py-3 rounded-full text-xs uppercase font-extrabold tracking-wider shadow-md flex items-center space-x-2"
                >
                  <span>Read CEO Message & Vision</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  to="/about"
                  className="px-6 py-3 rounded-full text-xs uppercase font-bold tracking-wider text-slate-800 bg-slate-100 hover:bg-slate-200 border border-slate-200 transition-colors"
                >
                  Full Corporate History
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. STATE HONORS & AWARDS (Light Mode) */}
      <section className="py-20 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center space-x-2 text-xs font-extrabold uppercase tracking-widest text-brand-gold mb-3">
              <Award className="w-4 h-4 text-brand-gold" />
              <span>Verified Accreditations</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 font-heading">
              Recognized at the Highest State Levels
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {COMPANY_INFO.awards.map((award, idx) => (
              <div 
                key={idx} 
                className="glass-card rounded-2xl overflow-hidden p-5 flex flex-col justify-between bg-white border border-slate-200 hover:border-brand-gold shadow-sm hover:shadow-xl group"
              >
                <div className="aspect-[4/3] rounded-xl overflow-hidden bg-slate-100 mb-4">
                  <img 
                    src={award.image} 
                    alt={award.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = "https://sevenstar.com.pk/wp-content/uploads/2023/12/PM-of-AJK.png";
                    }}
                  />
                </div>
                <div>
                  <div className="text-[10px] font-extrabold uppercase tracking-widest text-brand-gold mb-1">
                    {award.authority}
                  </div>
                  <h3 className="text-sm font-bold text-slate-900 group-hover:text-brand-gold transition-colors leading-snug">
                    {award.title}
                  </h3>
                  <p className="text-xs text-slate-500 mt-2 line-clamp-3">
                    {award.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. TESTIMONIALS (Light Mode) */}
      <section className="py-20 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="text-xs font-extrabold uppercase tracking-widest text-brand-gold mb-2">
              Stakeholder Confidence
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 font-heading">
              Trust Built Over 25 Years
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {COMPANY_INFO.testimonials.map((t, idx) => (
              <div key={idx} className="glass-card rounded-2xl p-7 flex flex-col justify-between bg-slate-50/70 border border-slate-200">
                <p className="text-sm text-slate-700 italic leading-relaxed mb-6">
                  "{t.quote}"
                </p>
                <div className="border-t border-slate-200 pt-4">
                  <div className="text-sm font-bold text-slate-900">{t.author}</div>
                  <div className="text-xs text-brand-gold font-bold">{t.role}</div>
                  <div className="text-[11px] text-slate-500 mt-0.5">{t.location}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 10. FINAL INQUIRY CTA BANNER */}
      <section className="py-20 bg-[#0B132B] text-white border-t border-slate-200 relative">
        <div className="max-w-5xl mx-auto px-4 sm:px-8 text-center space-y-6">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-white/10 border border-amber-300/30 text-amber-300 text-xs font-bold uppercase tracking-widest">
            <Building2 className="w-4 h-4" />
            <span>Connect Directly With Seven Star Corporate</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black text-white font-heading">
            Partner With Pakistan’s Leading Engineering & Real Estate Group
          </h2>

          <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Whether inquiring about high-rise apartments in DHA Phase II / Bahria Town, contracting tender partnerships, or machinery logistics, our executive team is at your disposal.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <button
              onClick={onOpenInquiry}
              className="btn-gold px-9 py-4 rounded-full text-xs uppercase font-extrabold tracking-widest shadow-2xl flex items-center space-x-2"
            >
              <span>Schedule Corporate Visit</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <a
              href="tel:+925827437268"
              className="px-8 py-4 rounded-full text-xs uppercase font-bold tracking-widest text-white bg-white/10 hover:bg-white/20 border border-white/20 transition-all flex items-center space-x-2"
            >
              <Phone className="w-4 h-4 text-amber-300" />
              <span>Call +92 582 7437 268</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
