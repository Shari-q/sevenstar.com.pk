import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Award, Mail, Phone, ArrowRight, CheckCircle2, Building2 } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';

export default function Leadership({ onOpenInquiry }) {
  const { ceo } = COMPANY_INFO.leadership;

  return (
    <div className="min-h-screen bg-brand-navy pt-28">
      {/* Banner */}
      <section className="relative py-20 bg-gradient-to-b from-[#060912] to-brand-navy border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-brand-gold/10 border border-brand-gold/30 text-brand-gold text-xs font-bold uppercase tracking-widest mb-4">
            <Award className="w-4 h-4" />
            <span>Executive Governance & Vision</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-black text-white font-heading leading-tight max-w-3xl">
            Leadership That Shapes the Industry
          </h1>
          <p className="text-base sm:text-xl text-slate-300 max-w-2xl mt-4 font-light leading-relaxed">
            Guided by technical precision, transparent stewardship, and a generational commitment to national development.
          </p>
        </div>
      </section>

      {/* CEO Detailed Profile & Message */}
      <section className="py-20 bg-[#090D16]">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* CEO Portrait Card */}
            <div className="lg:col-span-5 space-y-6">
              <div className="rounded-3xl overflow-hidden border border-brand-gold/40 shadow-2xl bg-brand-card">
                <img 
                  src={ceo.image} 
                  alt={ceo.name}
                  className="w-full h-auto object-cover object-top"
                />
                <div className="p-6 bg-gradient-to-b from-brand-card to-[#090D16] space-y-3">
                  <div className="text-xs uppercase font-extrabold tracking-widest text-brand-gold">
                    Chief Executive Officer
                  </div>
                  <h2 className="text-2xl font-black text-white">
                    {ceo.name}
                  </h2>
                  <p className="text-xs text-slate-300">
                    {ceo.credentials}
                  </p>
                  <div className="pt-3 border-t border-white/10 flex items-center justify-between text-xs text-slate-400">
                    <span>Registered Professional Engineer</span>
                    <span className="text-brand-gold font-bold">PEC Certified</span>
                  </div>
                </div>
              </div>

              {/* State Awards Badges */}
              <div className="glass-card rounded-2xl p-6 border border-white/10 space-y-4">
                <h4 className="text-xs font-extrabold uppercase tracking-widest text-brand-gold">
                  Direct Accreditations
                </h4>
                <div className="space-y-3 text-xs text-slate-300">
                  <div className="flex items-start space-x-2.5">
                    <CheckCircle2 className="w-4 h-4 text-brand-gold flex-shrink-0 mt-0.5" />
                    <span>Honored by Chairman PEC at IEEE International Conference</span>
                  </div>
                  <div className="flex items-start space-x-2.5">
                    <CheckCircle2 className="w-4 h-4 text-brand-gold flex-shrink-0 mt-0.5" />
                    <span>Prime Minister of AJK Commendation for Timely Civil Works</span>
                  </div>
                  <div className="flex items-start space-x-2.5">
                    <CheckCircle2 className="w-4 h-4 text-brand-gold flex-shrink-0 mt-0.5" />
                    <span>Signing Leader for Bilateral Chinese Engineering Consortium</span>
                  </div>
                </div>
              </div>
            </div>

            {/* In-depth CEO Statement */}
            <div className="lg:col-span-7 space-y-6">
              <div className="text-xs font-extrabold uppercase tracking-widest text-brand-gold">
                Official Statement of the CEO
              </div>
              <h2 className="text-3xl sm:text-4xl font-black text-white font-heading">
                "Our Journey Has Been One of Dedication, Innovation, and Progress"
              </h2>

              <div className="space-y-4 text-sm text-slate-300 leading-relaxed">
                <p className="text-base text-white font-medium italic border-l-2 border-brand-gold pl-4 py-2 bg-white/5 rounded-r-lg">
                  "I am honored and humbled to address you as the CEO of Seven Star Group of Companies—a conglomerate forged through decades of unyielding dedication to infrastructure development, energy distribution, and luxury high-rise real estate."
                </p>

                <p>
                  In the construction industry, adaptability, resilience, and uncompromised structural integrity are paramount. Over the past 25 years, our teams have navigated challenging terrains, economic fluctuations, and tough deadlines with a spirit of perseverance that defines us.
                </p>

                <p>
                  Every road, bridge, hospital, and high-rise we deliver becomes an integral part of daily life for generations to come. That profound civic responsibility drives our daily focus on engineering quality, occupational safety, and sustainable innovation. Whether constructing the 500-bed DHQ Hospital in Mirpur, 180-meter continuous RCC bridges, or high-traffic dual carriageways, our priority is work that stands the test of time.
                </p>

                <p>
                  As we expand further into modern energy networks and iconic high-rise ventures—including <strong className="text-white">Seven Star Mall & Residency in DHA Phase II, Islamabad</strong> and our growing portfolio of residential developments in the <strong className="text-white">United Kingdom</strong>—our mission remains crystal clear: to deliver lasting value and engineering pride to our clients and nations.
                </p>
              </div>

              {/* Leadership Pillars */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                <div className="p-5 rounded-2xl bg-white/5 border border-white/10 space-y-2">
                  <div className="text-brand-gold font-extrabold text-sm uppercase">Technical Precision</div>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Zero shortcuts on concrete mix design, structural steel testing, or compaction standards.
                  </p>
                </div>
                <div className="p-5 rounded-2xl bg-white/5 border border-white/10 space-y-2">
                  <div className="text-brand-gold font-extrabold text-sm uppercase">Schedule Accountability</div>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Over 400 government projects delivered on schedule through company-owned plants and machinery.
                  </p>
                </div>
              </div>

              <div className="pt-6">
                <button
                  onClick={onOpenInquiry}
                  className="btn-gold px-8 py-3.5 rounded-full text-xs uppercase font-extrabold tracking-widest shadow-xl flex items-center space-x-2"
                >
                  <span>Request Meeting with Executive Directorate</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
