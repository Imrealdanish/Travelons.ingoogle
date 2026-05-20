/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { TourPackage } from '../types';
import { ArrowLeft, CheckCircle2, ShieldAlert, Sparkles, MapPin, Calendar, Compass, UserCheck, XCircle, Backpack, Award, FileText, HelpCircle } from 'lucide-react';

interface ProductDetailProps {
  packageData: TourPackage;
  onBack: () => void;
  onBookYatra: (pkg: TourPackage) => void;
}

const ProductDetail: React.FC<ProductDetailProps> = ({ packageData, onBack, onBookYatra }) => {
  const [activeDay, setActiveDay] = useState<number>(1);
  const [activeImage, setActiveImage] = useState<string>(packageData.imageUrl);

  React.useEffect(() => {
    setActiveImage(packageData.imageUrl);
  }, [packageData]);

  return (
    <div className="pt-28 min-h-screen bg-brand-grey animate-slide-up">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 pb-32">
        
        {/* Navigation Breadcrumb back */}
        <button 
          onClick={onBack}
          className="group flex items-center gap-2.5 text-xs font-black uppercase tracking-widest text-brand-blue hover:text-brand-dark transition-all mb-8 border border-brand-blue/10 bg-white px-4 py-2.5 shadow-sm rounded-none"
        >
          <ArrowLeft size={14} className="group-hover:-translate-x-1.5 transition-transform" />
          <span>Back to Expeditions Catalog</span>
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          
          {/* LEFT: Curated imagery container and day-by-day timeline (Col-Span 7) */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-3">
              <div className="relative w-full aspect-[16/10] overflow-hidden bg-brand-blue/5 border border-gray-100 shadow-sm">
                <img 
                  src={activeImage} 
                  alt={packageData.name} 
                  className="w-full h-full object-cover transition-all duration-300"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/40 to-transparent"></div>
                
                {/* Float Metadata overlay on top of photo */}
                <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between text-white flex-wrap gap-4 select-none">
                  <div className="flex items-center gap-2">
                    <MapPin size={16} className="text-brand-lime animate-bounce" />
                    <span className="text-sm font-black uppercase tracking-wider">{packageData.duration} Departure</span>
                  </div>
                  <div className="bg-brand-lime text-brand-blue text-[10px] font-black uppercase tracking-widest px-3 py-1 shadow-md">
                    {packageData.badge}
                  </div>
                </div>
              </div>

              {/* Multiple Images Selector Row */}
              {packageData.images && packageData.images.length > 0 && (
                <div className="flex gap-2.5 overflow-x-auto py-1 no-scrollbar">
                  {packageData.images.map((img, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveImage(img)}
                      className={`relative w-24 aspect-[16/10] overflow-hidden border-2 transition-all ${
                        activeImage === img
                          ? 'border-brand-blue scale-102 shadow-md'
                          : 'border-transparent opacity-75 hover:opacity-100'
                      }`}
                    >
                      <img 
                        src={img} 
                        alt={`${packageData.name} thumb ${idx + 1}`} 
                        className="w-full h-full object-cover"
                        referrerPolicy="no-referrer"
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* The day-by-day curated Itinerary Segment */}
            <div className="bg-white border border-gray-100 p-6 sm:p-8 space-y-6">
              <div className="flex items-center justify-between border-b border-gray-100 pb-5">
                <div>
                  <h2 className="text-xl sm:text-2xl font-black text-brand-dark flex items-center gap-2">
                    <Compass size={20} className="text-brand-blue" />
                    <span>Curated Day Timeline</span>
                  </h2>
                  <p className="text-[10px] uppercase font-bold text-gray-400 mt-1">Select each day node below to reveal routes</p>
                </div>
                <span className="text-xs bg-brand-blue/5 text-brand-blue border border-brand-blue/10 px-3 py-1.5 font-bold uppercase">
                  Explore Mode
                </span>
              </div>

              {/* Responsive Clickable Horizontal Day Nav */}
              <div className="flex gap-2.5 overflow-x-auto pb-4 no-scrollbar border-b border-gray-50">
                {packageData.itinerary.map(item => (
                  <button
                    key={item.day}
                    onClick={() => setActiveDay(item.day)}
                    className={`px-5 py-3 text-xs font-black uppercase tracking-widest shrink-0 transition-all border ${
                      activeDay === item.day 
                        ? 'bg-brand-blue text-brand-lime border-brand-blue shadow-md' 
                        : 'bg-brand-grey text-gray-500 border-gray-200 hover:border-brand-blue/30'
                    }`}
                  >
                    Day 0{item.day}
                  </button>
                ))}
              </div>

              {/* Day Description details layout */}
              <div className="bg-brand-grey p-6 border-l-4 border-brand-blue animate-fade-in">
                {packageData.itinerary.map(item => {
                  if (item.day !== activeDay) return null;
                  return (
                    <div key={item.day} className="space-y-3">
                      <span className="text-[10px] uppercase font-black text-brand-blue tracking-[0.2em]">DAY {item.day} TARGET SCHEDULE</span>
                      <h3 className="text-lg font-black text-brand-dark leading-snug">
                        {item.title}
                      </h3>
                      <p className="text-sm text-gray-600 font-medium leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  );
                })}
              </div>

              {/* Brief Exclusions notification */}
              <div className="p-4 bg-yellow-50 text-[11px] font-bold text-yellow-800 uppercase tracking-wide flex items-center gap-2">
                <span>⚠ NOTE:</span>
                <span>Any lunch/dinner on traveling days & monument entrance charges during trekking climbs are paid by passenger.</span>
              </div>
            </div>

            {/* Safety parameters specifics */}
            <div className="bg-brand-dark text-gray-300 p-6 sm:p-8 border-l-4 border-brand-lime space-y-4 shadow-sm">
              <h3 className="text-lg font-black text-white flex items-center gap-2">
                <ShieldAlert className="text-brand-lime animate-pulse" size={18} />
                <span>Logistical Guardrails & Mountain Pilots</span>
              </h3>
              <p className="text-xs sm:text-sm leading-relaxed text-gray-300 font-medium">
                {packageData.safetyLogistics}
              </p>
              <div className="text-[10px] uppercase tracking-widest font-black text-brand-lime">
                SAFETY LEVEL: ADVANCED VERIFICATION SYSTEM ACTIVE
              </div>
            </div>
          </div>

          {/* RIGHT: Price overview, booking detail, inclusions panel (Col-Span 5) */}
          <div className="lg:col-span-5 space-y-8 lg:sticky lg:top-24">
            
            {/* Direct Booking Drawer CTA block */}
            <div className="bg-white border-2 border-brand-blue p-8 shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-brand-blue text-brand-lime text-[10px] uppercase tracking-widest font-black px-4 py-1.5">
                Yatra Active
              </div>

              <span className="text-xs uppercase font-extrabold text-brand-blue block tracking-wide">CONFIRM SEATS TODAY</span>
              <h2 className="text-2xl font-black text-brand-dark tracking-tight mt-1 mb-6 truncate uppercase">{packageData.name}</h2>
              
              {/* Flexible occupancy rates options list */}
              <div className="bg-brand-grey border border-gray-100 p-4 space-y-3.5 mb-6">
                <span className="text-[10px] uppercase font-black text-gray-400 block tracking-widest">Pricing Structure</span>
                
                {packageData.detailedPrices ? (
                  <div className="space-y-2 mt-2">
                    {Object.entries(packageData.detailedPrices).map(([key, val]) => (
                      <div key={key} className="flex justify-between items-center text-sm font-bold capitalize border-b border-gray-50 pb-2">
                        <span className="text-gray-500 font-bold">{key === 'withoutRishikesh' ? 'Without Rishikesh' : key === 'withRishikesh' ? 'With Rishikesh' : key.replace('with', 'With ').replace('without', 'Without ')}</span>
                        <span className="text-brand-blue font-black">{val}</span>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="flex justify-between items-center py-2 border-b border-gray-100 uppercase">
                    <span className="text-xs text-gray-500 font-bold">Standard Seat</span>
                    <span className="text-lg font-black text-brand-blue">{packageData.priceText}</span>
                  </div>
                )}
                
                {packageData.gstNote && (
                  <span className="block text-[10px] font-black text-brand-blue bg-brand-lime/30 uppercase px-2.5 py-1 text-center border border-brand-lime/20">
                    * Final Bill values will attract +5% GST as per Indian Travel Laws.
                  </span>
                )}
              </div>

              {/* Token Reservation Warning */}
              <div className="flex border border-gray-200 p-4 gap-3 bg-brand-grey items-center mb-6">
                <div className="w-10 h-10 rounded-full bg-brand-blue/5 border border-brand-blue/10 flex items-center justify-center shrink-0">
                  <UserCheck className="text-brand-blue" size={20} />
                </div>
                <div className="text-left text-xs text-gray-500 font-bold leading-tight">
                  <span className="block text-brand-blue font-black uppercase">Token: ₹{packageData.tokenAmount} /-</span>
                  <span>Boarding point Cash/UPI settlement after token check on tour departure.</span>
                </div>
              </div>

              {/* Main Booking trigger action */}
              <button
                onClick={() => onBookYatra(packageData)}
                className="w-full bg-brand-lime hover:bg-brand-blue text-brand-blue hover:text-white font-black uppercase text-sm tracking-widest py-4.5 text-center transition-all duration-300 border border-brand-blue/15 active:scale-95 shadow-lg shadow-brand-lime/10"
              >
                Launch Booking Portal
              </button>
            </div>

            {/* Comprehensive Inclusions Board */}
            <div className="bg-white border border-gray-100 p-8 space-y-6">
              <h3 className="text-sm font-extrabold text-brand-blue uppercase tracking-widest border-b border-gray-100 pb-3 flex items-center gap-1.5">
                <Sparkles size={14} className="text-brand-lime shrink-0" />
                <span>Standard Inclusions Onboard</span>
              </h3>
              
              <ul className="space-y-4">
                {packageData.inclusions.map((inc, i) => (
                  <li key={i} className="flex gap-3 text-xs sm:text-sm text-gray-600 font-medium leading-relaxed">
                    <CheckCircle2 size={16} className="text-brand-blue shrink-0 mt-0.5" />
                    <span>{inc}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>

        </div>

        {/* Extended Package Details (Things to Carry, Exclusions, Terms, etc.) */}
        {(packageData.exclusions || packageData.thingsToCarry || packageData.whyChoose || packageData.termsAndConditions) && (
          <div className="mt-16 pt-16 border-t border-gray-200 space-y-16">
            
            {/* 1. Inclusions & Exclusions comparison board (if exclusions available) */}
            {packageData.exclusions && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12">
                {/* Inclusions Board */}
                <div className="bg-white border border-gray-100 p-6 sm:p-8 space-y-6 shadow-sm">
                  <h3 className="text-base sm:text-lg font-black text-brand-dark flex items-center gap-2 uppercase tracking-wide border-b border-gray-100 pb-4">
                    <CheckCircle2 className="text-emerald-600 shrink-0" size={20} />
                    <span>Detailed Inclusions</span>
                  </h3>
                  <ul className="space-y-3.5">
                    {packageData.inclusions.map((item, index) => (
                      <li key={index} className="flex gap-3 text-xs sm:text-sm text-gray-600 font-semibold leading-relaxed items-start">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0 mt-2"></span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Exclusions Board */}
                <div className="bg-white border border-gray-100 p-6 sm:p-8 space-y-6 shadow-sm">
                  <h3 className="text-base sm:text-lg font-black text-brand-dark flex items-center gap-2 uppercase tracking-wide border-b border-gray-100 pb-4">
                    <XCircle className="text-rose-600 shrink-0" size={20} />
                    <span>Exclusions</span>
                  </h3>
                  <ul className="space-y-3.5">
                    {packageData.exclusions.map((item, index) => (
                      <li key={index} className="flex gap-3 text-xs sm:text-sm text-gray-600 font-semibold leading-relaxed items-start">
                        <span className="w-1.5 h-1.5 rounded-full bg-rose-500 shrink-0 mt-2"></span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}

            {/* 2. Things to Carry (grouped category grids) */}
            {packageData.thingsToCarry && (
              <div className="bg-white border border-gray-100 p-6 sm:p-10 space-y-8 shadow-sm">
                <div className="space-y-2">
                  <h3 className="text-xl font-black text-brand-blue flex items-center gap-2.5 uppercase tracking-wide">
                    <Backpack className="text-brand-lime" size={24} />
                    <span>Essentials & Things to Carry</span>
                  </h3>
                  <p className="text-xs text-gray-400 font-bold uppercase tracking-wider">Pack smart and stay comfortable during your high-altitude expedition</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {packageData.thingsToCarry.map((cat, index) => (
                    <div key={index} className="bg-brand-grey p-6 border-l-2 border-brand-blue space-y-2">
                      <span className="text-xs font-black text-brand-blue uppercase tracking-widest block border-b border-gray-200/60 pb-1.5">
                        {cat.category}
                      </span>
                      <p className="text-xs sm:text-sm text-gray-600 font-bold leading-relaxed">
                        {cat.items}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* 3. Why Choose Travelons & Terms side-by-side */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
              {/* Why Choose Travelons.in? */}
              {packageData.whyChoose && (
                <div className="space-y-6">
                  <div className="space-y-1">
                    <h3 className="text-base sm:text-lg font-black text-brand-dark flex items-center gap-2 uppercase tracking-wide">
                      <Award className="text-brand-blue" size={20} />
                      <span>Why Choose Travelons.in?</span>
                    </h3>
                    <p className="text-xs text-gray-400 font-black uppercase tracking-widest">We deliver exactly what we promise with absolute transparency</p>
                  </div>

                  <div className="grid grid-cols-1 gap-4">
                    {packageData.whyChoose.map((item, index) => (
                      <div key={index} className="bg-white p-5 border border-gray-100 shadow-sm space-y-1 hover:border-brand-blue/10 transition-colors">
                        <h4 className="text-xs sm:text-sm font-black text-brand-blue uppercase tracking-wider flex items-center gap-1.5">
                          <span className="w-2 h-2 bg-brand-lime rounded-full"></span>
                          <span>{item.title}</span>
                        </h4>
                        <p className="text-xs sm:text-sm text-gray-600 font-medium leading-relaxed">
                          {item.desc}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Terms and Conditions */}
              {packageData.termsAndConditions && (
                <div className="space-y-6">
                  <div className="space-y-1">
                    <h3 className="text-base sm:text-lg font-black text-brand-dark flex items-center gap-2 uppercase tracking-wide">
                      <FileText className="text-brand-blue" size={20} />
                      <span>Terms & Conditions</span>
                    </h3>
                    <p className="text-xs text-gray-400 font-black uppercase tracking-widest">Crucial travel directives & community guidelines</p>
                  </div>

                  <div className="bg-white p-6 border border-gray-100 rounded-none shadow-sm space-y-4 max-h-[380px] overflow-y-auto custom-scrollbar">
                    {packageData.termsAndConditions.map((term, index) => (
                      <div key={index} className="text-xs text-gray-600 font-bold leading-relaxed border-b border-gray-50 pb-3 last:border-0 last:pb-0">
                        {term}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* 4. Frequently Asked Questions */}
            {packageData.faqs && packageData.faqs.length > 0 && (
              <div className="bg-white border border-gray-100 p-6 sm:p-10 space-y-8 shadow-sm">
                <div className="space-y-2">
                  <h3 className="text-xl font-black text-brand-blue flex items-center gap-2.5 uppercase tracking-wide">
                    <HelpCircle className="text-brand-lime" size={24} />
                    <span>Frequently Asked Questions</span>
                  </h3>
                  <p className="text-xs text-gray-400 font-bold uppercase tracking-wider">Answers to your common queries about this expedition</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {packageData.faqs.map((faq, index) => (
                    <div key={index} className="bg-brand-grey p-6 border-l-2 border-brand-blue space-y-3">
                      <span className="text-xs font-black text-brand-blue uppercase tracking-widest block border-b border-gray-200/60 pb-1.5 leading-snug">
                        Q: {faq.question}
                      </span>
                      <p className="text-xs sm:text-sm text-gray-600 font-medium leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}

          </div>
        )}

      </div>
    </div>
  );
};

export default ProductDetail;
