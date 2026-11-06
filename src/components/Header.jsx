import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Phone, Mail, MapPin, ChevronDown, Menu, X, 
  Building2, HardHat, Compass, Landmark, Flame, Truck, Globe, Award
} from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';

export default function Header({ onOpenInquiry }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setActiveDropdown(null);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    {
      name: 'About',
      dropdown: [
        { name: 'About Seven Star', path: '/about', desc: 'Over 25 years of engineering heritage' },
        { name: 'Leadership & Vision', path: '/leadership', desc: 'CEO Engr. Muhammad Rizwan & executive board' },
        { name: 'Awards & Accreditations', path: '/about#awards', desc: 'PEC C-A license & government honors' }
      ]
    },
    {
      name: 'Services',
      dropdown: [
        { name: 'All Services Overview', path: '/services', desc: 'Full engineering & construction capabilities' },
        { name: 'Construction Division', path: '/services/construction', desc: 'Commercial high-rises, hospitals & campuses' },
        { name: 'Infrastructure & Civil', path: '/services/infrastructure', desc: 'Highways, dual carriageways & RCC bridges' },
        { name: 'Government Contracting', path: '/services/government-projects', desc: 'PEC Category C-A federal & state contracts' }
      ]
    },
    {
      name: 'Real Estate',
      dropdown: [
        { name: 'Real Estate Portfolio', path: '/real-estate', desc: 'Luxury commercial & residential properties' },
        { name: 'Seven Star Mall & Residency', path: '/projects/seven-star-mall-residency', desc: 'Main GT Road, DHA Phase-II, Islamabad' },
        { name: 'Seven Star Heights', path: '/projects/seven-star-heights', desc: 'Luxury living suites in Bahria Town' }
      ]
    },
    {
      name: 'Projects',
      dropdown: [
        { name: 'All Project Portfolio', path: '/projects', desc: 'Explore all 400+ national undertakings' },
        { name: 'Completed Projects', path: '/projects/completed', desc: 'Verified delivered highways, hospitals & bridges' },
        { name: 'Ongoing Projects', path: '/projects/ongoing', desc: 'Active construction & road dualization sites' }
      ]
    },
    {
      name: 'Divisions',
      dropdown: [
        { name: 'Petroleum & LPG Operations', path: '/divisions/petroleum-lpg', desc: 'Terminals, fueling stations & LPG supply' },
        { name: 'Machinery & Asphalt Plant', path: '/divisions/machinery-equipment', desc: '160 T/H asphalt plant & heavy machinery fleet' },
        { name: 'Seven Star UK', path: '/divisions/seven-star-uk', desc: 'International residential housing developments' },
        { name: 'Residential & Colony Planning', path: '/divisions/residential-development', desc: 'Master community planning & turnkey homes' }
      ]
    },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      {/* Top Utility Bar (Navy Contrast Bar) */}
      <div className={`bg-[#0A1120] text-slate-300 text-xs py-2 px-4 sm:px-8 border-b border-white/10 transition-all duration-300 ${isScrolled ? 'hidden md:block md:py-1' : 'block'}`}>
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-2">
          <div className="flex items-center space-x-6 text-[11px] tracking-wide">
            <span className="flex items-center space-x-1.5 text-amber-300 font-bold">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
              <span>PEC CATEGORY C-A (NO LIMIT) CONTRACTOR</span>
            </span>
            <span className="hidden lg:flex items-center space-x-1.5 text-slate-300">
              <MapPin className="w-3.5 h-3.5 text-amber-300" />
              <span>Mirpur AJK • Islamabad DHA II • Bahria Town • United Kingdom</span>
            </span>
          </div>

          <div className="flex items-center space-x-4 text-[11px]">
            <a href="tel:+925827437268" className="flex items-center space-x-1.5 text-slate-200 hover:text-amber-300 transition-colors">
              <Phone className="w-3 h-3 text-amber-300" />
              <span>PK: +92 582 7437 268</span>
            </a>
            <span className="text-white/20">|</span>
            <a href="tel:+447746000007" className="flex items-center space-x-1.5 text-amber-300 hover:underline transition-colors">
              <Globe className="w-3 h-3 text-amber-300" />
              <span>UK: +44 774 6000 007</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Light Glass Navbar */}
      <nav className={`transition-all duration-300 ${isScrolled ? 'glass-nav py-3' : 'bg-white/95 backdrop-blur-md py-4 sm:py-5 border-b border-slate-200 shadow-sm'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-8 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <img 
              src={COMPANY_INFO.logo} 
              alt={COMPANY_INFO.name} 
              className="h-14 sm:h-16 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
            />
          </Link>

          {/* Desktop Nav Items */}
          <div className="hidden lg:flex items-center space-x-1 xl:space-x-2">
            {navLinks.map((item, idx) => {
              if (item.dropdown) {
                return (
                  <div 
                    key={idx} 
                    className="relative group"
                    onMouseEnter={() => setActiveDropdown(item.name)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <button className="flex items-center space-x-1 px-3 py-2 text-sm font-bold tracking-wide text-slate-700 hover:text-brand-gold transition-colors rounded-lg">
                      <span>{item.name}</span>
                      <ChevronDown className="w-3.5 h-3.5 text-slate-400 group-hover:text-brand-gold transition-transform duration-200 group-hover:rotate-180" />
                    </button>

                    {/* Dropdown Menu (Clean Light Card) */}
                    <div className="absolute top-full left-0 w-72 pt-2 opacity-0 translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-200">
                      <div className="bg-white rounded-xl shadow-2xl p-2 border border-slate-200">
                        {item.dropdown.map((sub, sIdx) => (
                          <Link
                            key={sIdx}
                            to={sub.path}
                            className="block p-2.5 rounded-lg hover:bg-slate-50 transition-colors group/item"
                          >
                            <div className="text-sm font-bold text-slate-900 group-hover/item:text-brand-gold transition-colors">
                              {sub.name}
                            </div>
                            <div className="text-xs text-slate-500 mt-0.5 line-clamp-1">
                              {sub.desc}
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              }

              const isActive = location.pathname === item.path;
              return (
                <Link
                  key={idx}
                  to={item.path}
                  className={`px-3 py-2 text-sm font-bold tracking-wide rounded-lg transition-colors ${
                    isActive 
                      ? 'text-brand-gold bg-amber-50' 
                      : 'text-slate-700 hover:text-brand-gold hover:bg-slate-50'
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}
          </div>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center space-x-3">
            <button
              onClick={onOpenInquiry}
              className="btn-gold px-5 py-2.5 rounded-full text-xs uppercase font-extrabold tracking-wider shadow-md hover:shadow-lg transition-all"
            >
              <span>Schedule Visit</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-slate-700 hover:text-slate-900 focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 top-[110px] bg-white z-40 p-6 overflow-y-auto border-t border-slate-200 shadow-2xl">
          <div className="flex flex-col space-y-4">
            {navLinks.map((item, idx) => {
              if (item.dropdown) {
                const isOpen = activeDropdown === item.name;
                return (
                  <div key={idx} className="border-b border-slate-100 pb-3">
                    <button
                      onClick={() => setActiveDropdown(isOpen ? null : item.name)}
                      className="w-full flex items-center justify-between text-base font-bold text-slate-900 py-2"
                    >
                      <span>{item.name}</span>
                      <ChevronDown className={`w-4 h-4 text-brand-gold transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
                    </button>
                    {isOpen && (
                      <div className="pl-4 mt-2 space-y-2.5 bg-slate-50 p-3 rounded-xl">
                        {item.dropdown.map((sub, sIdx) => (
                          <Link
                            key={sIdx}
                            to={sub.path}
                            className="block text-sm text-slate-700 hover:text-brand-gold py-1"
                          >
                            <span className="font-bold block">{sub.name}</span>
                            <span className="text-xs text-slate-500">{sub.desc}</span>
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <Link
                  key={idx}
                  to={item.path}
                  className="text-base font-bold text-slate-900 py-2.5 border-b border-slate-100 hover:text-brand-gold"
                >
                  {item.name}
                </Link>
              );
            })}

            <div className="pt-4 flex flex-col space-y-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  if (onOpenInquiry) onOpenInquiry();
                }}
                className="btn-gold w-full py-3 rounded-full text-center text-xs uppercase font-extrabold tracking-wider"
              >
                Schedule A Visit / Inquire
              </button>
              <a
                href="tel:+925827437268"
                className="w-full py-3 rounded-full text-center text-xs font-bold uppercase tracking-wider bg-slate-100 text-slate-800 flex items-center justify-center space-x-2"
              >
                <Phone className="w-3.5 h-3.5 text-brand-gold" />
                <span>Call +92 582 7437 268</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
