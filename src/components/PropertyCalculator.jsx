import React, { useState } from 'react';
import { Calculator, Sparkles, Building, CheckCircle2, ShieldCheck, ArrowRight } from 'lucide-react';

export default function PropertyCalculator({ onOpenInquiry }) {
  const [project, setProject] = useState('dha2'); // dha2 or bahria
  const [unitType, setUnitType] = useState('2bed');
  const [downPaymentPercent, setDownPaymentPercent] = useState(25);
  const [tenureYears, setTenureYears] = useState(3);

  const basePrices = {
    dha2: {
      name: "Seven Star Mall & Residency (DHA Phase-II, Islamabad)",
      units: {
        '1bed': { title: "1-Bed Executive Suite (650 SFT)", price: 14500000 },
        '2bed': { title: "2-Bed Luxury Apartment (1,150 SFT)", price: 23500000 },
        '3bed': { title: "3-Bed Premium Apartment (1,850 SFT)", price: 36000000 },
        'penthouse': { title: "Executive Duplex Penthouse (3,400 SFT)", price: 68000000 },
        'commercial': { title: "Prime Commercial Retail Shop (Ground Floor)", price: 29000000 },
        'corporate': { title: "Corporate Executive Office Suite (800 SFT)", price: 19500000 }
      }
    },
    bahria: {
      name: "Seven Star Heights (Bahria Town)",
      units: {
        '1bed': { title: "1-Bed Modern Suite (600 SFT)", price: 11500000 },
        '2bed': { title: "2-Bed Luxury Residence (1,050 SFT)", price: 18500000 },
        '3bed': { title: "3-Bed Royal Suite (1,650 SFT)", price: 28000000 },
        'penthouse': { title: "Skyline Royal Penthouse (3,000 SFT)", price: 54000000 },
        'commercial': { title: "Retail Boutique Unit (Mezzanine / 1st Floor)", price: 22000000 },
        'corporate': { title: "Executive Business Office (650 SFT)", price: 15500000 }
      }
    }
  };

  const currentProject = basePrices[project];
  const currentUnit = currentProject.units[unitType] || currentProject.units['2bed'];
  const totalPrice = currentUnit.price;

  const downPaymentAmount = Math.round(totalPrice * (downPaymentPercent / 100));
  const possessionAmount = Math.round(totalPrice * 0.15);
  const remainingForInstallments = totalPrice - downPaymentAmount - possessionAmount;
  
  const totalQuarterlyInstallments = tenureYears * 4;
  const quarterlyInstallment = Math.round(remainingForInstallments / totalQuarterlyInstallments);
  const monthlyEquivalent = Math.round(quarterlyInstallment / 3);

  const formatPKR = (val) => 'PKR ' + val.toLocaleString('en-PK');
  const formatGBP = (val) => '£ ' + Math.round(val / 360).toLocaleString('en-GB');

  return (
    <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-10 shadow-xl relative overflow-hidden">
      {/* Decorative Glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-amber-100/40 rounded-full blur-3xl pointer-events-none" />

      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-100 pb-6 mb-8">
        <div>
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-amber-50 border border-amber-200 text-brand-gold text-xs font-bold uppercase tracking-widest mb-2">
            <Calculator className="w-3.5 h-3.5" />
            <span>Official Seven Star Investment Calculator</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 font-heading">
            Plan Your High-Rise Property Investment
          </h2>
          <p className="text-sm text-slate-500 mt-1">
            Simulate flexible quarterly installment plans for DHA Phase-II and Bahria Town developments.
          </p>
        </div>

        <div className="flex items-center space-x-2 bg-slate-100 p-1.5 rounded-xl border border-slate-200">
          <button
            onClick={() => setProject('dha2')}
            className={`px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wider transition-all ${
              project === 'dha2'
                ? 'bg-brand-navy text-white shadow-md'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            DHA II Islamabad
          </button>
          <button
            onClick={() => setProject('bahria')}
            className={`px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wider transition-all ${
              project === 'bahria'
                ? 'bg-brand-navy text-white shadow-md'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Bahria Town
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Controls Column */}
        <div className="lg:col-span-7 space-y-6">
          {/* Unit Type Selection */}
          <div>
            <label className="text-xs font-bold uppercase tracking-wider text-slate-700 block mb-2">
              Select Property or Commercial Unit:
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
              {Object.entries(currentProject.units).map(([key, item]) => (
                <button
                  key={key}
                  onClick={() => setUnitType(key)}
                  className={`p-3 rounded-xl border text-left transition-all ${
                    unitType === key
                      ? 'border-brand-gold bg-amber-50/50 text-slate-900 shadow-sm'
                      : 'border-slate-200 bg-slate-50/60 text-slate-600 hover:border-slate-300 hover:text-slate-900'
                  }`}
                >
                  <div className="text-xs font-bold text-slate-900 truncate">{item.title.split('(')[0]}</div>
                  <div className="text-[10px] text-brand-gold font-bold mt-0.5">{formatPKR(item.price)}</div>
                </button>
              ))}
            </div>
          </div>

          {/* Down Payment Slider */}
          <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200">
            <div className="flex justify-between items-center mb-2">
              <label className="text-xs font-bold uppercase tracking-wider text-slate-700">
                Down Payment Booking Ratio:
              </label>
              <span className="text-sm font-extrabold text-brand-gold">{downPaymentPercent}% ({formatPKR(downPaymentAmount)})</span>
            </div>
            <input 
              type="range"
              min="20"
              max="50"
              step="5"
              value={downPaymentPercent}
              onChange={(e) => setDownPaymentPercent(Number(e.target.value))}
              className="w-full accent-brand-gold h-2 bg-slate-200 rounded-lg cursor-pointer"
            />
            <div className="flex justify-between text-[10px] text-slate-500 mt-1.5 font-medium">
              <span>20% (Min)</span>
              <span>25%</span>
              <span>30%</span>
              <span>40%</span>
              <span>50% (Priority Floor)</span>
            </div>
          </div>

          {/* Payment Duration */}
          <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200">
            <div className="flex justify-between items-center mb-2">
              <label className="text-xs font-bold uppercase tracking-wider text-slate-700">
                Installment Schedule:
              </label>
              <span className="text-sm font-extrabold text-slate-900">{tenureYears} Years ({totalQuarterlyInstallments} Installments)</span>
            </div>
            <div className="grid grid-cols-3 gap-3">
              {[1, 2, 3].map((yr) => (
                <button
                  key={yr}
                  onClick={() => setTenureYears(yr)}
                  className={`py-2 rounded-xl text-xs font-bold transition-all border ${
                    tenureYears === yr
                      ? 'border-brand-navy bg-brand-navy text-white shadow-sm'
                      : 'border-slate-200 text-slate-600 hover:text-slate-900 bg-white'
                  }`}
                >
                  {yr} Year Plan
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Results Summary Card */}
        <div className="lg:col-span-5 bg-gradient-to-b from-[#0F172A] to-[#0A1120] text-white border border-brand-gold/40 rounded-2xl p-6 sm:p-7 shadow-2xl relative">
          <div className="text-xs uppercase font-extrabold tracking-widest text-amber-300 mb-1">
            ESTIMATED INVESTMENT BREAKDOWN
          </div>
          <div className="text-lg font-bold text-white mb-4 line-clamp-1">
            {currentUnit.title}
          </div>

          <div className="space-y-3.5 border-t border-b border-white/10 py-4 mb-5 text-xs">
            <div className="flex justify-between items-center">
              <span className="text-slate-300">Total Property Value:</span>
              <span className="font-extrabold text-white text-sm">{formatPKR(totalPrice)}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-slate-300">UK Expat Approx Equivalent:</span>
              <span className="font-bold text-amber-300">{formatGBP(totalPrice)}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-slate-300">Booking / Down Payment ({downPaymentPercent}%):</span>
              <span className="font-extrabold text-amber-300 text-sm">{formatPKR(downPaymentAmount)}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-slate-300">Quarterly Installment (x{totalQuarterlyInstallments}):</span>
              <span className="font-extrabold text-emerald-400 text-sm">{formatPKR(quarterlyInstallment)}</span>
            </div>
            <div className="flex justify-between items-center text-[11px]">
              <span className="text-slate-400">Monthly Budget Equivalent:</span>
              <span className="text-slate-300">{formatPKR(monthlyEquivalent)}/mo</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-slate-300">On Possession (15% Handover):</span>
              <span className="font-bold text-white">{formatPKR(possessionAmount)}</span>
            </div>
          </div>

          <div className="space-y-3">
            <button
              onClick={onOpenInquiry}
              className="btn-gold w-full py-3 rounded-full text-xs uppercase font-extrabold tracking-wider shadow-lg flex items-center justify-center space-x-2"
            >
              <span>Reserve Unit / Get Payment Schedule</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <div className="text-[10px] text-center text-slate-400 flex items-center justify-center space-x-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-amber-300" />
              <span>Direct Developer Rate • Zero Commission Markup</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
