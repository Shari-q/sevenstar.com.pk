import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Building2, ShieldCheck, Award, Target, Compass, 
  CheckCircle2, ArrowRight, MapPin, Users, Globe, Flame
} from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';

export default function About({ onOpenInquiry }) {
  return (
    <div className="min-h-screen bg-brand-navy pt-28">
      {/* Banner */}
      <section className="relative py-20 bg-gradient-to-b from-[#060912] to-brand-navy border-b border-white/10 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <img 
            src="https://sevenstar.com.pk/wp-content/uploads/2025/12/1-43_48_11zon-scaled.webp" 
            alt="Seven Star Group Heritage"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-brand-gold/10 border border-brand-gold/30 text-brand-gold text-xs font-bold uppercase tracking-widest mb-4">
            <ShieldCheck className="w-4 h-4" />
            <span>Established 1999 • Over 25 Years of Proven Integrity</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-black text-white font-heading leading-tight max-w-3xl">
            About Seven Star Group of Companies
          </h1>
          <p className="text-base sm:text-xl text-slate-300 max-w-2xl mt-4 leading-relaxed font-light">
            Shaping the architectural and infrastructural landscape of Azad Jammu & Kashmir, Punjab, and beyond through unyielding engineering excellence.
          </p>
        </div>
      </section>

      {/* Main Corporate Story */}
      <section className="py-20 bg-[#090D16]">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="text-xs font-extrabold uppercase tracking-widest text-brand-gold">
                The Heritage of 7-Star & Co. (Pvt) Ltd.
              </div>
              <h2 className="text-3xl sm:text-4xl font-black text-white font-heading">
                From Regional Beginnings to a Multi-Disciplinary Conglomerate
              </h2>
              <div className="space-y-4 text-sm text-slate-300 leading-relaxed">
                <p>
                  Established over 25 years ago, <strong className="text-white">Seven Star Group of Companies</strong> has grown into one of Pakistan's most trusted conglomerates in construction, heavy infrastructure, real estate development, and energy logistics.
                </p>
                <p>
                  Our flagship entity, <strong className="text-white">7-Star & Co. (Private) Limited</strong>, is registered with the <strong className="text-brand-gold">Pakistan Engineering Council (PEC) as a Category C-A (No-Limit) Contractor</strong>. This highest possible tier entitles the group to undertake mega projects without financial or technical ceilings, enlisted across major government departments including Communication & Works (C&W), Physical Planning & Housing (PP&H), LG&RD, Health, and Education.
                </p>
                <p>
                  Under the stewardship of <strong className="text-white">Engineer Muhammad Rizwan (CEO)</strong>, Seven Star Group has completed more than <strong className="text-white">400 government infrastructure undertakings</strong>—spanning critical hospitals, major river bridges, dual carriageways, university campuses, and municipal networks.
                </p>
                <p>
                  Simultaneously, our private real estate division is delivering landmark architectural high-rises such as <strong className="text-white">Seven Star Heights in Bahria Town</strong> and the premier <strong className="text-white">Seven Star Mall & Residency on Main GT Road, DHA Phase II, Islamabad</strong>. Internationally, our operations extend to large-scale residential developments in the <strong className="text-white">United Kingdom</strong>.
                </p>
              </div>

              {/* Verified Checklist */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4">
                {[
                  "PEC Category C-A (No Limit) Contractor",
                  "400+ Delivered Government Projects",
                  "Own 160 T/H Industrial Asphalt Plant",
                  "500+ Owned Fleet of Heavy Machinery",
                  "International Operations in the UK",
                  "Enlisted with C&W, PP&H, LG&RD, PWD"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center space-x-2 text-xs font-bold text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-brand-gold flex-shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-5 space-y-6">
              <div className="glass-card rounded-3xl p-8 border border-brand-gold/30 space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 rounded-2xl bg-brand-gold/10 border border-brand-gold/30 flex items-center justify-center">
                    <Building2 className="w-8 h-8 text-brand-gold" />
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-wider text-brand-gold font-bold">Registration & Status</div>
                    <div className="text-xl font-black text-white">PEC Category C-A</div>
                    <div className="text-xs text-slate-400">Unlimited Contract Value</div>
                  </div>
                </div>

                <div className="border-t border-white/10 pt-4 space-y-3 text-xs text-slate-300">
                  <div className="flex justify-between py-1 border-b border-white/5">
                    <span className="text-slate-400">Founded:</span>
                    <span className="font-bold text-white">1999 (25+ Years)</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-white/5">
                    <span className="text-slate-400">Corporate Head Office:</span>
                    <span className="font-bold text-white">Mirpur AJK</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-white/5">
                    <span className="text-slate-400">Capital Offices:</span>
                    <span className="font-bold text-white">DHA II Islamabad & Bahria Town</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-white/5">
                    <span className="text-slate-400">Overseas Division:</span>
                    <span className="font-bold text-white">Seven Star UK Ltd</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-white/5">
                    <span className="text-slate-400">Major Verticals:</span>
                    <span className="font-bold text-white">Civil, High-Rise, Roads, Energy</span>
                  </div>
                </div>

                <button
                  onClick={onOpenInquiry}
                  className="btn-gold w-full py-3 rounded-full text-xs uppercase font-extrabold tracking-wider shadow-lg"
                >
                  Request Corporate Dossier
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, and Values */}
      <section className="py-20 bg-brand-navy border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="glass-card rounded-2xl p-8 border border-white/10 space-y-4">
              <div className="w-12 h-12 rounded-xl bg-brand-gold/10 border border-brand-gold/30 flex items-center justify-center text-brand-gold">
                <Target className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-extrabold text-white">Our Mission</h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                To build resilient, sustainable infrastructure and high-rise developments that empower communities, drive economic prosperity, and withstand the test of time through uncompromising adherence to engineering standards.
              </p>
            </div>

            <div className="glass-card rounded-2xl p-8 border border-white/10 space-y-4">
              <div className="w-12 h-12 rounded-xl bg-brand-gold/10 border border-brand-gold/30 flex items-center justify-center text-brand-gold">
                <Compass className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-extrabold text-white">Our Vision</h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                To stand as the international benchmark for Pakistani engineering and real estate development—recognized globally for technical precision, ethical governance, and timely turnkey execution across borders.
              </p>
            </div>

            <div className="glass-card rounded-2xl p-8 border border-white/10 space-y-4">
              <div className="w-12 h-12 rounded-xl bg-brand-gold/10 border border-brand-gold/30 flex items-center justify-center text-brand-gold">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-extrabold text-white">Core Values</h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Structural Integrity, Zero Compromise on Material Quality, Safety First, Transparency with Stakeholders, and Lasting Stewardship for every community we touch.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Awards & Certifications Section (Targeted via #awards) */}
      <section id="awards" className="py-24 bg-[#060912] border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center space-x-2 text-xs font-extrabold uppercase tracking-widest text-brand-gold mb-3">
              <Award className="w-4 h-4 text-brand-gold" />
              <span>State & Engineering Accreditations</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-white font-heading">
              Awards, Honors & State Commendations
            </h2>
            <p className="text-sm text-slate-400 mt-3">
              Every distinction awarded to Seven Star Group is backed by authentic public records and state ceremonies.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {COMPANY_INFO.awards.map((award, idx) => (
              <div key={idx} className="glass-card rounded-3xl p-6 sm:p-8 border border-white/10 hover:border-brand-gold/40 transition-all flex flex-col sm:flex-row gap-6 items-center">
                <div className="w-full sm:w-48 aspect-[4/3] rounded-2xl overflow-hidden bg-slate-900 flex-shrink-0">
                  <img 
                    src={award.image} 
                    alt={award.title} 
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = "https://sevenstar.com.pk/wp-content/uploads/2023/12/PM-of-AJK.png";
                    }}
                  />
                </div>
                <div className="space-y-2">
                  <div className="text-xs font-bold uppercase tracking-wider text-brand-gold">
                    {award.authority}
                  </div>
                  <h3 className="text-lg font-bold text-white leading-snug">
                    {award.title}
                  </h3>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {award.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
