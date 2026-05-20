/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Search, MapPin, Sparkles, ChevronDown } from 'lucide-react';

interface HeroProps {
  onSearch: (query: string, category: string) => void;
}

const Hero: React.FC<HeroProps> = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(searchQuery, selectedCategory);
    
    // Smooth scroll down to the packages section
    const targetElement = document.getElementById('packages');
    if (targetElement) {
      const headerOffset = 85;
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="relative w-full min-h-[90vh] md:min-h-screen flex items-center justify-center pt-24 pb-16 px-6 lg:px-8 overflow-hidden bg-gradient-to-b from-brand-blue/95 to-brand-blue bg-no-repeat bg-cover bg-center" style={{ backgroundImage: "linear-gradient(to bottom, rgba(0, 40, 77, 0.8), rgba(15, 23, 42, 0.9)), url('https://images.unsplash.com/photo-1501555088652-021faa106b9b?auto=format&fit=crop&q=80&w=2400')" }}>
      
      {/* Decorative backdrop blobs */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-brand-lime/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-10 right-10 w-[450px] h-[450px] bg-brand-blue/20 rounded-full blur-3xl pointer-events-none"></div>

      {/* Grid Pattern overlay for crisp modern design */}
      <div className="absolute inset-x-0 inset-y-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem]" />

      <div className="relative z-10 max-w-5xl mx-auto w-full text-center flex flex-col items-center">
        
        {/* Animated Badge */}
        <div className="inline-flex items-center gap-1.5 bg-brand-lime/10 border border-brand-lime/20 text-brand-lime px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest mb-8 animate-pulse">
          <Sparkles size={12} />
          <span>Curated Group Departures 2026/2027</span>
        </div>

        {/* Master Typographic Title */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black font-sans text-white tracking-tight leading-[0.95] mb-6">
          Explore the Unexplored <br className="hidden md:inline" />
          with <span className="text-brand-lime">Travelons.in</span>
        </h1>

        {/* Crisp Subheading */}
        <p className="max-w-2xl text-base sm:text-lg md:text-xl text-gray-200 font-bold leading-relaxed mb-12 uppercase tracking-wide">
          Tailor-made group departures crafted by travel professionals. <br className="hidden sm:inline"/>
          <span className="text-brand-lime">Zero hidden costs</span> • Fixed-price assurance.
        </p>

        {/* Search Bar Component */}
        <form 
          onSubmit={handleSearchSubmit}
          className="w-full max-w-4xl bg-white p-3 sm:p-4 rounded-none shadow-2xl flex flex-col md:flex-row gap-3 border border-brand-blue/10"
        >
          {/* Destination Text Input */}
          <div className="flex-1 flex items-center gap-3 px-4 py-3 bg-brand-grey border border-gray-100 rounded-none">
            <MapPin size={20} className="text-brand-blue shrink-0 animate-bounce" />
            <div className="flex-1 text-left">
              <label className="block text-[9px] uppercase font-bold tracking-widest text-gray-400">Search Destination</label>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Where to? (e.g. Manali, Kedarnath, Spiti...)"
                className="w-full bg-transparent border-none text-brand-dark p-0 text-sm focus:outline-none focus:ring-0 font-extrabold placeholder-gray-400"
              />
            </div>
          </div>

          {/* Region Tabs Dropdown Selector */}
          <div className="md:w-64 flex items-center gap-3 px-4 py-3 bg-brand-grey border border-gray-100 rounded-none">
            <Search size={18} className="text-brand-blue shrink-0" />
            <div className="flex-1 text-left">
              <label className="block text-[9px] uppercase font-bold tracking-widest text-gray-400">Filter Region</label>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full bg-transparent border-none text-brand-dark p-0 text-sm focus:outline-none focus:ring-0 font-extrabold cursor-pointer"
              >
                <option value="all">All Region Portals</option>
                <option value="himachal">Himachal Pradesh</option>
                <option value="uttarakhand">Uttarakhand</option>
                <option value="kashmir_rajasthan">Kashmir & Rajasthan</option>
              </select>
            </div>
          </div>

          {/* Lime Green Accent Search Button */}
          <button
            type="submit"
            className="bg-brand-lime hover:bg-brand-blue hover:text-white text-brand-dark font-black uppercase text-sm tracking-widest px-8 py-4 sm:py-0 transition-all duration-300 rounded-none shrink-0 border border-brand-blue/10 flex items-center justify-center gap-2 shadow-md shadow-brand-lime/10"
          >
            <Search size={16} />
            <span>Find Treks</span>
          </button>
        </form>

        {/* Feature quick details */}
        <div className="mt-12 flex flex-wrap justify-center gap-6 md:gap-12 text-xs md:text-sm text-gray-300 font-bold uppercase tracking-widest">
          <div className="flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-2">
            <span className="text-brand-lime font-black">✓</span> <span>No Hidden Overcharges</span>
          </div>
          <div className="flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-2">
            <span className="text-brand-lime font-black">✓</span> <span>Certified Local Captains</span>
          </div>
          <div className="flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-2">
            <span className="text-brand-lime font-black">✓</span> <span>Zero-Misconduct Onboarding</span>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="mt-16 animate-bounce transition-opacity duration-300">
          <ChevronDown size={32} className="text-brand-lime mx-auto" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
