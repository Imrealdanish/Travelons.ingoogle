/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Landmark, ShieldAlert, Users, CloudRain, Star, Compass } from 'lucide-react';

const About: React.FC = () => {
  const pillars = [
    {
      id: 1,
      title: "Fixed & Upfront Pricing",
      sub: "No hidden costs",
      desc: "Transparent flat seat pricing grids. We eliminate haggling, late booking markups, and forced driver-tipping requests.",
      icon: <Landmark className="text-brand-blue" size={24} />
    },
    {
      id: 2,
      title: "Safety-First Logistics",
      sub: "Verified professional hill drivers",
      desc: "Travel exclusively with background-verified mountain pilots and highly experienced Trip Captains onboard every vehicle.",
      icon: <ShieldAlert className="text-brand-blue" size={24} />
    },
    {
      id: 3,
      title: "Curated Communities",
      sub: "Strict biometric & ID checks",
      desc: "Rigorous registration onboarding filters out miscreants to build balanced, 40:60 ratio, solo-female friendly cohorts.",
      icon: <Users className="text-brand-blue" size={24} />
    },
    {
      id: 4,
      title: "Weather Safeguard Policy",
      sub: "1-Year Credit Vouchers",
      desc: "If severe landslides, landslides, or official route closures hit, save 100% value into general credit tokens valid for 1 year.",
      icon: <CloudRain className="text-brand-blue" size={24} />
    }
  ];

  return (
    <section id="about" className="py-24 sm:py-32 bg-brand-grey border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        
        {/* Upper Segment Title */}
        <div className="flex flex-col items-start mb-16">
          <span className="text-brand-blue text-xs font-black tracking-widest uppercase mb-3 flex items-center gap-1">
            <Compass size={14} className="animate-spin" style={{ animationDuration: '8s' }} />
            COMPANY PROFILE & CORE PHILOSOPHY
          </span>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-brand-dark font-sans leading-tight">
            How Travelons.in Rethinks Group Travel
          </h2>
        </div>

        {/* Dynamic Two-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-stretch">
          
          {/* Left Column: High-end text explaining deep trust culture */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div className="space-y-6">
              <p className="text-lg text-brand-blue font-bold leading-relaxed">
                We believe travel should be about timeless moments—not negotiations, hidden fees, or safety anxieties.
              </p>
              
              <p className="text-sm sm:text-base text-gray-600 font-medium leading-relaxed">
                Founded by a dedicated circle of professional trek leaders, <strong>TRAVELONS.IN</strong> elimated the traditional vulnerabilities of mountain exploration. By combining strict upfront pricing systems, highly verified transportation systems, and secure travelers screening, we deliver unforgettable retreats across India's top wonders.
              </p>
              
              <p className="text-sm sm:text-base text-gray-600 font-medium leading-relaxed">
                From luxury AC Volvo coaches to wooden cabin stays in Kasol or cozy Swiss tents at the foot of Kedarnath, we guarantee standard accommodations with absolutely zero surprise costs.
              </p>
            </div>

            {/* High-end decorative visual testimonial block */}
            <div className="mt-10 p-6 bg-brand-blue text-white rounded-none border-l-4 border-brand-lime">
              <div className="flex items-center gap-1 mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={14} className="fill-brand-lime text-brand-lime" />
                ))}
              </div>
              <p className="italic text-xs font-bold text-gray-200">
                &ldquo;Travelons eliminated all the friction. The exact price we saw was what we paid, and our Trip Captain felt like family. Highly recommended!&rdquo;
              </p>
              <div className="mt-3 text-[10px] font-black uppercase tracking-widest text-brand-lime">
                — ANANNYA SHARMA, DU CHORAL SOCIETY
              </div>
            </div>
          </div>

          {/* Right Column: Balanced vertical bento-grid list of 4 Pillars */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {pillars.map((p) => (
              <div
                key={p.id}
                id={`about-pillar-${p.id}`}
                className="bg-white border border-gray-100 p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden group hover:border-brand-blue/30 transition-all duration-300"
              >
                {/* Visual grid subtle line decoration */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-brand-blue/5 rounded-bl-full pointer-events-none group-hover:bg-brand-lime/10 transition-colors"></div>
                
                <div>
                  <div className="w-12 h-12 bg-brand-grey border border-brand-blue/10 flex items-center justify-center mb-6">
                    {p.icon}
                  </div>
                  <span className="block text-[10px] uppercase font-extrabold tracking-widest text-brand-blue mb-1">
                    Pillar 0{p.id}
                  </span>
                  <span className="text-[10px] font-extrabold uppercase text-gray-400 block tracking-wide">
                    {p.sub}
                  </span>
                  <h3 className="text-lg font-black text-brand-dark mt-1 mb-3">
                    {p.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-500 font-bold leading-relaxed">
                    {p.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};

export default About;
