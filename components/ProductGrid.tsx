/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useMemo, useEffect } from 'react';
import { TOUR_PACKAGES } from '../constants';
import { TourPackage } from '../types';
import ProductCard from './ProductCard';
import { Compass, Filter, Sparkles, Smile } from 'lucide-react';

interface ProductGridProps {
  onPackageClick: (pkg: TourPackage) => void;
  onBookClick: (pkg: TourPackage) => void;
  searchParams: { query: string; category: string };
  clearSearchParams: () => void;
}

const ProductGrid: React.FC<ProductGridProps> = ({ 
  onPackageClick, 
  onBookClick, 
  searchParams,
  clearSearchParams
}) => {
  // Tabs Grouping: [ HIMACHAL PRADESH ] | [ UTTARAKHAND ] | [ KASHMIR & RAJASTHAN ]
  const tabs = [
    { id: 'himachal', label: 'Himachal Pradesh' },
    { id: 'uttarakhand', label: 'Uttarakhand' },
    { id: 'kashmir_rajasthan', label: 'Kashmir & Rajasthan' }
  ];

  const [activeTab, setActiveTab] = useState<'himachal' | 'uttarakhand' | 'kashmir_rajasthan'>('himachal');

  // Sync category from search bar
  useEffect(() => {
    if (searchParams.category && searchParams.category !== 'all') {
      setActiveTab(searchParams.category as 'himachal' | 'uttarakhand' | 'kashmir_rajasthan');
    }
  }, [searchParams.category]);

  const filteredPackages = useMemo(() => {
    let result = TOUR_PACKAGES;

    // Filter by search text query first (checking title, category and tags)
    if (searchParams.query) {
      const q = searchParams.query.toLowerCase();
      result = result.filter(p => 
        p.name.toLowerCase().includes(q) || 
        p.tagline.toLowerCase().includes(q) || 
        p.badge.toLowerCase().includes(q)
      );
    }

    // Filter by Tab (if not all, or based on query override)
    if (!searchParams.query) {
      result = result.filter(p => p.category === activeTab);
    } else if (searchParams.category && searchParams.category !== 'all') {
      result = result.filter(p => p.category === searchParams.category);
    }

    return result;
  }, [activeTab, searchParams]);

  const handleBookClick = (e: React.MouseEvent, pkg: TourPackage) => {
    e.stopPropagation();
    onBookClick(pkg);
  };

  return (
    <section id="packages" className="py-24 sm:py-32 bg-white scroll-mt-20">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        
        {/* Dynamic Header */}
        <div className="flex flex-col items-center text-center mb-16 space-y-6">
          <span className="text-brand-blue text-xs font-black tracking-widest uppercase flex items-center gap-1.5 bg-brand-blue/5 border border-brand-blue/10 px-4 py-2">
            <Sparkles size={12} className="text-brand-lime" />
            <span>EXPERT-CURATED DEPARTURES</span>
          </span>
          
          <h2 className="text-3xl sm:text-5xl font-black text-brand-dark tracking-tight leading-tight">
            Our Premium Group Expeditions
          </h2>
          
          <p className="max-w-2xl text-xs sm:text-sm text-gray-500 font-bold uppercase tracking-wider">
            Choose your majestic gateway. All transfers utilize sanitized high-clearance tourist coaches with certified experienced hill captains.
          </p>

          {/* Search Parameter active notice */}
          {searchParams.query && (
            <div className="bg-brand-blue/5 border border-brand-blue/15 px-5 py-2.5 flex items-center gap-3 text-sm text-brand-blue font-bold rounded-none">
              <span>Showing results for: &ldquo;<strong className="text-brand-dark">{searchParams.query}</strong>&rdquo;</span>
              <button 
                onClick={clearSearchParams}
                className="text-white bg-brand-blue hover:bg-brand-dark text-[10px] font-black uppercase px-2 py-1 transition-colors"
              >
                Clear Search
              </button>
            </div>
          )}

          {/* State-switching dynamic Tab Portal - Active Accent */}
          {!searchParams.query && (
            <div className="flex flex-col sm:flex-row justify-center items-center gap-2 sm:gap-4 pt-8 w-full max-w-3xl overflow-x-auto no-scrollbar">
              {tabs.map(tab => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as 'himachal' | 'uttarakhand' | 'kashmir_rajasthan')}
                  className={`px-6 sm:px-8 py-3.5 text-xs sm:text-sm font-black uppercase tracking-widest border transition-all duration-300 w-full sm:w-auto relative cursor-pointer ${
                    activeTab === tab.id 
                      ? 'border-brand-blue bg-brand-blue text-brand-lime shadow-lg shadow-brand-blue/20' 
                      : 'border-gray-200 text-gray-500 bg-brand-grey hover:border-brand-blue/40 hover:text-brand-blue'
                  }`}
                >
                  {tab.label}
                  {activeTab === tab.id && (
                    <span className="hidden sm:block absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-brand-blue rotate-45 border-r border-b border-brand-blue"></span>
                  )}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Dynamic Package Cards Grid */}
        {filteredPackages.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
            {filteredPackages.map(pkg => (
              <ProductCard 
                key={pkg.id} 
                packageItem={pkg} 
                onClick={onPackageClick} 
                onBookClick={handleBookClick}
              />
            ))}
          </div>
        ) : (
          <div className="py-20 border-2 border-dashed border-gray-200 text-center max-w-xl mx-auto p-8 bg-brand-grey">
            <Compass className="mx-auto text-brand-blue animate-spin mb-4" size={48} style={{ animationDuration: '4s' }} />
            <h3 className="text-lg font-black text-brand-dark mb-2">No Matching Expeditions Found</h3>
            <p className="text-sm text-gray-500 font-bold mb-6 uppercase tracking-wider leading-relaxed">
              We couldn't locate any packages matching &ldquo;{searchParams.query}&rdquo;. Check spelling or explore different portals.
            </p>
            <button 
              onClick={clearSearchParams}
              className="bg-brand-blue text-white hover:bg-brand-dark font-black tracking-widest text-xs uppercase px-6 py-3 transition-all"
            >
              Reset Search Filter
            </button>
          </div>
        )}

        {/* Community Trust Accent Badge */}
        <div className="mt-20 border-t border-gray-100 pt-12 flex flex-col md:flex-row items-center justify-between gap-6 bg-brand-grey p-8 border border-gray-200">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center border border-gray-100 shadow-sm shrink-0">
              <Smile className="text-brand-blue" size={24} />
            </div>
            <div className="text-left">
              <span className="text-[10px] uppercase font-bold text-gray-400 block tracking-widest">Co-Traveler Confidence</span>
              <span className="text-sm sm:text-base font-black text-brand-dark leading-tight block">
                Average Trip Rating: 4.9/5 from 3,450+ onboarded group yatris.
              </span>
            </div>
          </div>
          <button 
            onClick={() => {
              const element = document.getElementById('about');
              if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="text-xs font-black uppercase text-brand-blue tracking-widest bg-white border border-brand-blue/15 px-5 py-3 hover:bg-brand-blue hover:text-white transition-all duration-300"
          >
            Review Security Pillars
          </button>
        </div>

      </div>
    </section>
  );
};

export default ProductGrid;
