/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProductGrid from './components/ProductGrid';
import About from './components/About';
import Features from './components/Features';
import Assistant from './components/Assistant';
import Footer from './components/Footer';
import ProductDetail from './components/ProductDetail';
import Checkout from './components/Checkout';
import { ViewState, TourPackage } from './types';

function App() {
  const [view, setView] = useState<ViewState>({ type: 'home' });
  const [searchParams, setSearchParams] = useState<{ query: string; category: string }>({
    query: '',
    category: 'all'
  });

  // Handle scrolling directly to sections
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    
    // Clear search query on manual menu clicks
    setSearchParams({ query: '', category: 'all' });

    // Return home and scroll
    if (view.type !== 'home') {
      setView({ type: 'home' });
      setTimeout(() => scrollToSection(targetId), 100);
    } else {
      scrollToSection(targetId);
    }
  };

  const scrollToSection = (targetId: string) => {
    if (!targetId) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    
    const element = document.getElementById(targetId);
    if (element) {
      const headerOffset = 85;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });

      try {
        window.history.pushState(null, '', `#${targetId}`);
      } catch (err) {
        // Safe check for sandboxed environments
      }
    }
  };

  const handleHeroSearch = (query: string, category: string) => {
    setSearchParams({ query, category });
  };

  const clearHeroSearch = () => {
    setSearchParams({ query: '', category: 'all' });
  };

  const selectPackageForItinerary = (pkg: TourPackage) => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setView({ type: 'itinerary', package: pkg });
  };

  const selectPackageForBooking = (pkg: TourPackage) => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setView({ type: 'booking', package: pkg });
  };

  // Nav Action "Book Yatra Now" jumps directly to packages catalog
  const handleBookYatraClick = () => {
    if (view.type !== 'home') {
      setView({ type: 'home' });
      setTimeout(() => scrollToSection('packages'), 100);
    } else {
      scrollToSection('packages');
    }
  };

  return (
    <div className="min-h-screen bg-brand-grey font-sans text-brand-dark selection:bg-brand-lime/30 selection:text-brand-blue">
      
      {/* Premium Glass Sticky Header */}
      <Navbar 
        onNavClick={handleNavClick} 
        onBookYatraClick={handleBookYatraClick}
      />
      
      <main>
        {view.type === 'home' && (
          <>
            {/* Hero Banner with custom search triggers */}
            <Hero onSearch={handleHeroSearch} />
            
            {/* Interactive Package Display Cards System */}
            <ProductGrid 
              onPackageClick={selectPackageForItinerary}
              onBookClick={selectPackageForBooking}
              searchParams={searchParams}
              clearSearchParams={clearHeroSearch}
            />
            
            {/* Compelling Company Profile & Core Pillars */}
            <About />
            
            {/* Core Transactional Refund, Booking, and Community Guideline Accordion */}
            <Features />
          </>
        )}

        {view.type === 'itinerary' && (
          <ProductDetail 
            packageData={view.package}
            onBack={() => {
              setView({ type: 'home' });
              setTimeout(() => scrollToSection('packages'), 50);
            }}
            onBookYatra={selectPackageForBooking}
          />
        )}

        {view.type === 'booking' && (
          <Checkout 
            packageData={view.package}
            onBack={() => {
              setView({ type: 'itinerary', package: view.package });
            }}
          />
        )}
      </main>

      {/* Trust Mapping Footer - Google Maps Embed and links */}
      <Footer onLinkClick={handleNavClick} />
      
      {/* GenAI Expert Support Assistant */}
      <Assistant />

    </div>
  );
}

export default App;
