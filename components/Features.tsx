/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { 
  ChevronDown, ChevronUp, Landmark, ShieldCheck, 
  Users, AlertCircle, HelpCircle, FileText 
} from 'lucide-react';
import { CORE_POLICIES } from '../constants';

const Features: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  const getPillarIcon = (index: number) => {
    switch (index) {
      case 0:
        return <Landmark className="text-brand-blue" size={20} />;
      case 1:
        return <HelpCircle className="text-brand-blue" size={20} />;
      case 2:
        return <Users className="text-brand-blue" size={20} />;
      default:
        return <FileText className="text-brand-blue" size={20} />;
    }
  };

  return (
    <section id="policies" className="py-24 sm:py-32 bg-white border-b border-gray-100">
      <div className="max-w-4xl mx-auto px-5 sm:px-8">
        
        {/* Header Block */}
        <div className="flex flex-col items-center text-center mb-16 space-y-4">
          <span className="text-brand-blue text-xs font-black tracking-widest uppercase flex items-center gap-1.5 bg-brand-blue/5 border border-brand-blue/10 px-4 py-2">
            <ShieldCheck size={14} className="text-brand-lime animate-pulse" />
            <span>TRANSACTIONAL LAWS</span>
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-brand-dark tracking-tight leading-tight uppercase font-sans">
            Core Charter & Policies
          </h2>
          <p className="max-w-lg text-xs sm:text-sm text-gray-500 font-bold uppercase tracking-wider">
            Clear guidelines ensure security, budget predictability, and healthy community cohorts.
          </p>
        </div>

        {/* Accordion List Grid */}
        <div className="space-y-4">
          {CORE_POLICIES.map((policy, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                id={`policy-accordion-${idx}`}
                className="border border-gray-200 bg-brand-grey transition-all duration-300"
              >
                {/* Accordion Clickable Title Toggle */}
                <button
                  type="button"
                  onClick={() => toggleAccordion(idx)}
                  className="w-full px-6 py-5 sm:py-6 flex items-center justify-between gap-4 text-left focus:outline-none hover:bg-gray-100/50 transition-colors cursor-pointer select-none"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-white border border-gray-200 flex items-center justify-center shrink-0 shadow-sm">
                      {getPillarIcon(idx)}
                    </div>
                    <span className="text-sm sm:text-base font-black text-brand-dark uppercase tracking-tight font-sans">
                      {policy.title}
                    </span>
                  </div>
                  <div className="text-brand-blue shrink-0">
                    {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                  </div>
                </button>

                {/* Collapsible Content Area */}
                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    isOpen ? 'max-h-[500px] border-t border-gray-200' : 'max-h-0'
                  }`}
                >
                  <div className="p-6 sm:p-8 bg-white space-y-4 text-left">
                    <p className="text-xs sm:text-sm text-gray-600 font-medium leading-relaxed">
                      {policy.desc}
                    </p>

                    {idx === 0 && (
                      <div className="p-4 bg-blue-50/50 border border-blue-100 flex items-start gap-2.5 text-xs text-blue-800 font-medium">
                        <AlertCircle className="shrink-0 mt-0.5 text-brand-blue" size={16} />
                        <span>Seat allocations are finalized strictly as per token order stamp. Early bird rates vanish close to Volvo dispatch date.</span>
                      </div>
                    )}
                    
                    {idx === 1 && (
                      <div className="p-4 bg-emerald-50/50 border border-emerald-100 flex items-start gap-2.5 text-xs text-emerald-800 font-medium">
                        <AlertCircle className="shrink-0 mt-0.5 text-emerald-600" size={16} />
                        <span>Environmental voucher credits remain valid across all portals including Kashmir Expeditions.</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Features;
