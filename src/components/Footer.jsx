import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Building2, Phone, Mail, MapPin, ShieldCheck, 
  ChevronRight, ArrowUpRight, Globe, Award
} from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';

export default function Footer() {
  return (
    <footer className="bg-[#050811] text-slate-400 border-t border-white/10 pt-16 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Top Highlight Banner: PEC & Credentials */}
        <div className="bg-gradient-to-r from-brand-card to-brand-navy border border-brand-gold/30 rounded-2xl p-6 sm:p-8 mb-16 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center space-x-5">
            <div className="w-14 h-14 rounded-xl bg-brand-gold/10 border border-brand-gold/40 flex items-center justify-center flex-shrink-0">
              <ShieldCheck className="w-8 h-8 text-brand-gold" />
            </div>
            <div>
              <div className="text-xs font-bold uppercase tracking-widest text-brand-gold">Pakistan Engineering Council</div>
              <h3 className="text-lg sm:text-xl font-extrabold text-white">Registered Category C-A (No Limit) Contractor</h3>
              <p className="text-xs sm:text-sm text-slate-300 mt-1">
                Authorized for unrestricted mega infrastructure, bridges, national highways, and high-rise commercial structures.
              </p>
            </div>
          </div>
          <Link
            to="/about"
            className="btn-gold px-6 py-3 rounded-full text-xs uppercase font-extrabold tracking-wider whitespace-nowrap shadow-lg flex items-center space-x-2"
          >
            <span>Verify Credentials</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>

        {/* 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-16">
          {/* Col 1: Company Profile */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-3">
              <img 
                src={COMPANY_INFO.logo} 
                alt={COMPANY_INFO.name} 
                className="h-16 w-auto object-contain"
              />
            </Link>
            <p className="text-sm text-slate-300 leading-relaxed">
              Established over 25 years ago, Seven Star Group is one of Pakistan’s most venerable names in mega infrastructure, government contracting, petroleum distribution, and luxury real estate.
            </p>
            <div className="pt-2">
              <div className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">Connect With Us:</div>
              <div className="flex items-center space-x-3">
                <a 
                  href={COMPANY_INFO.contact.socials.facebook} 
                  target="_blank" 
                  rel="noreferrer"
                  className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-300 hover:text-brand-gold hover:border-brand-gold transition-colors"
                  aria-label="Facebook"
                >
                  <span className="font-bold text-sm">f</span>
                </a>
                <a 
                  href={COMPANY_INFO.contact.socials.instagram} 
                  target="_blank" 
                  rel="noreferrer"
                  className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-300 hover:text-brand-gold hover:border-brand-gold transition-colors"
                  aria-label="Instagram"
                >
                  <span className="font-bold text-sm">ig</span>
                </a>
                <div className="text-xs text-slate-400 pl-2">
                  <span>@sevenstar.com.pk</span>
                </div>
              </div>
            </div>
          </div>

          {/* Col 2: Core Business Divisions */}
          <div>
            <h4 className="text-sm font-extrabold uppercase tracking-wider text-white mb-5 flex items-center space-x-2">
              <span className="w-1.5 h-3.5 bg-brand-gold rounded-full"></span>
              <span>Divisions & Services</span>
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/services/construction" className="hover:text-brand-gold transition-colors flex items-center space-x-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-brand-gold/60" />
                  <span>Turnkey Commercial Construction</span>
                </Link>
              </li>
              <li>
                <Link to="/services/infrastructure" className="hover:text-brand-gold transition-colors flex items-center space-x-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-brand-gold/60" />
                  <span>Highways, Roads & RCC Bridges</span>
                </Link>
              </li>
              <li>
                <Link to="/services/government-projects" className="hover:text-brand-gold transition-colors flex items-center space-x-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-brand-gold/60" />
                  <span>Category C-A Government Contracting</span>
                </Link>
              </li>
              <li>
                <Link to="/real-estate" className="hover:text-brand-gold transition-colors flex items-center space-x-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-brand-gold/60" />
                  <span>High-Rise Real Estate (DHA & Bahria)</span>
                </Link>
              </li>
              <li>
                <Link to="/divisions/petroleum-lpg" className="hover:text-brand-gold transition-colors flex items-center space-x-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-brand-gold/60" />
                  <span>Petroleum, LPG & Fuel Logistics</span>
                </Link>
              </li>
              <li>
                <Link to="/divisions/machinery-equipment" className="hover:text-brand-gold transition-colors flex items-center space-x-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-brand-gold/60" />
                  <span>Asphalt Plant & Heavy Equipment</span>
                </Link>
              </li>
              <li>
                <Link to="/divisions/seven-star-uk" className="hover:text-brand-gold transition-colors flex items-center space-x-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-brand-gold/60" />
                  <span>Seven Star UK Residential Developments</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Landmark Projects */}
          <div>
            <h4 className="text-sm font-extrabold uppercase tracking-wider text-white mb-5 flex items-center space-x-2">
              <span className="w-1.5 h-3.5 bg-brand-gold rounded-full"></span>
              <span>Featured Portfolios</span>
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/projects/seven-star-mall-residency" className="hover:text-brand-gold transition-colors flex items-center space-x-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-brand-gold/60" />
                  <span>Seven Star Mall & Residency (DHA II)</span>
                </Link>
              </li>
              <li>
                <Link to="/projects/seven-star-heights" className="hover:text-brand-gold transition-colors flex items-center space-x-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-brand-gold/60" />
                  <span>Seven Star Heights (Bahria Town)</span>
                </Link>
              </li>
              <li>
                <Link to="/projects/dhq-hospital-mirpur-500-beds" className="hover:text-brand-gold transition-colors flex items-center space-x-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-brand-gold/60" />
                  <span>500-Bed DHQ Hospital Mirpur</span>
                </Link>
              </li>
              <li>
                <Link to="/projects/wazirabad-sialkot-kashmir-highway" className="hover:text-brand-gold transition-colors flex items-center space-x-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-brand-gold/60" />
                  <span>Wazirabad–Sialkot Highway (16 KM)</span>
                </Link>
              </li>
              <li>
                <Link to="/projects/khokhran-dhal-mahmood-raypur-bridge" className="hover:text-brand-gold transition-colors flex items-center space-x-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-brand-gold/60" />
                  <span>Khokhran Raypur RCC Bridge (180m)</span>
                </Link>
              </li>
              <li>
                <Link to="/projects/completed" className="text-brand-gold font-bold hover:underline transition-colors flex items-center space-x-1.5 pt-1">
                  <span>Browse All 400+ Delivered Projects →</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Regional & International Offices */}
          <div className="space-y-4">
            <h4 className="text-sm font-extrabold uppercase tracking-wider text-white mb-5 flex items-center space-x-2">
              <span className="w-1.5 h-3.5 bg-brand-gold rounded-full"></span>
              <span>Contact & Headquarters</span>
            </h4>
            
            <div className="space-y-3 text-xs leading-relaxed">
              <div>
                <span className="font-bold text-white block">Corporate Head Office (Mirpur AJK):</span>
                <p className="text-slate-400">32, Sector F/3, Part III, Main Kotli Road, Mirpur, Azad Jammu & Kashmir</p>
                <a href="tel:+925827437268" className="text-brand-gold hover:underline block mt-0.5">
                  +92 582 7437 268 / +92 300 2748 007
                </a>
              </div>

              <div className="border-t border-white/5 pt-2">
                <span className="font-bold text-white block">Islamabad Corporate Hub:</span>
                <p className="text-slate-400">DHA Phase-II, Main GT Road, Islamabad</p>
                <a href="tel:+923004376007" className="text-brand-gold hover:underline block mt-0.5">
                  +92 300 4376 007 / +92 300 2139 007
                </a>
              </div>

              <div className="border-t border-white/5 pt-2">
                <span className="font-bold text-white block">United Kingdom Division:</span>
                <p className="text-slate-400">Seven Star UK Ltd, Residential Housing</p>
                <a href="tel:+447746000007" className="text-amber-300 hover:underline block mt-0.5">
                  +44 774 6000 007
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-4">
          <div>
            © {new Date().getFullYear()} <span className="text-white font-semibold">Seven Star Group of Companies</span>. All Rights Reserved. Legal Entity: 7-Star & Co. (Pvt) Ltd.
          </div>
          <div className="flex items-center space-x-6 text-slate-300">
            <Link to="/about" className="hover:text-brand-gold transition-colors">Corporate Profile</Link>
            <span>•</span>
            <Link to="/services/government-projects" className="hover:text-brand-gold transition-colors">PEC Registration</Link>
            <span>•</span>
            <Link to="/contact" className="hover:text-brand-gold transition-colors">Privacy & Legal</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
