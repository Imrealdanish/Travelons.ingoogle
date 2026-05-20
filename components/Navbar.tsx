/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Phone, Menu, X, Compass, Shield, Award } from 'lucide-react';
import { BRAND_NAME, BRAND_TAGLINE, HELPLINE_TEXT, HELPLINE_PHONE } from '../constants';

interface NavbarProps {
  onNavClick: (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => void;
  onBookYatraClick: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onNavClick, onBookYatraClick }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    setMobileMenuOpen(false);
    onNavClick(e, targetId);
  };

  return (
    <>
      <header
        id="navbar-header"
        className="fixed top-0 left-0 right-0 z-50 bg-white py-3.5 shadow-md shadow-brand-dark/5 border-b border-gray-100 transition-all duration-300"
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-8 flex items-center justify-between">
          
          {/* Brand Logo & Tagline */}
          <a
            href="#"
            id="brand-logo"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
              onNavClick(e, '');
            }}
            className="flex items-center select-none group"
            aria-label="Travelons home"
          >
            <div className="flex flex-col items-center text-center select-none relative">
              <div className="relative flex items-center justify-center">
                <span className="text-xl sm:text-2xl font-black tracking-tight text-brand-blue font-sans">
                  {BRAND_NAME}
                </span>
                <span className="hidden sm:inline-block absolute left-full ml-2 whitespace-nowrap bg-brand-lime text-brand-blue text-[9px] font-extrabold uppercase tracking-widest px-1.5 py-0.5 rounded-full border border-brand-blue/10 animate-bounce">
                  ACTIVE
                </span>
              </div>
              <span className="text-[10px] sm:text-xs font-bold text-gray-500 uppercase tracking-[0.25em] mt-0.5 group-hover:text-brand-blue transition-colors text-center w-full block">
                {BRAND_TAGLINE}
              </span>
            </div>
          </a>

          {/* Desktop Center Links */}
          <nav className="hidden md:flex items-center gap-8 text-[13px] font-bold uppercase tracking-wider text-brand-dark">
            <a
              href="#packages"
              onClick={(e) => handleLinkClick(e, 'packages')}
              className="hover:text-brand-blue transition-colors flex items-center gap-1"
            >
              Destinations
            </a>
            <a
              href="#about"
              onClick={(e) => handleLinkClick(e, 'about')}
              className="hover:text-brand-blue transition-colors"
            >
              Our Pillars
            </a>
            <a
              href="#policies"
              onClick={(e) => handleLinkClick(e, 'policies')}
              className="hover:text-brand-blue transition-colors"
            >
              Policies
            </a>
            <a
              href="#location"
              onClick={(e) => handleLinkClick(e, 'location')}
              className="hover:text-brand-blue transition-colors"
            >
              Find Us
            </a>
          </nav>

          {/* Right Actions */}
          <div className="flex items-center gap-4">
            {/* Click-to-call Helpline */}
            <a
              href={`tel:${HELPLINE_PHONE}`}
              id="header-call-button"
              className="hidden lg:flex items-center gap-2 text-sm text-brand-blue font-bold bg-brand-blue/5 border border-brand-blue/10 rounded-full px-4 py-2 hover:bg-brand-blue hover:text-white transition-all duration-300"
            >
              <Phone size={14} className="animate-pulse" />
              <span>{HELPLINE_TEXT}</span>
            </a>

            {/* Premium Solid CTA Button */}
            <button
              onClick={onBookYatraClick}
              id="nav-quick-booking"
              className="hidden sm:block text-[13px] uppercase font-extrabold tracking-widest text-brand-blue bg-brand-lime border border-brand-blue/15 px-6 py-2.5 rounded-none hover:bg-brand-blue hover:text-white hover:border-brand-blue transition-all duration-300 shadow-md shadow-brand-blue/10 active:scale-95"
            >
              Book Yatra Now
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-1 md:hidden text-brand-blue focus:outline-none focus:ring-2 focus:ring-brand-blue/15"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-white z-40 md:hidden flex flex-col pt-24 px-8 justify-between pb-10 transition-all duration-300 ease-in-out ${
          mobileMenuOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-10 pointer-events-none'
        }`}
      >
        <div className="flex flex-col space-y-6 text-lg font-bold uppercase tracking-wider text-brand-dark">
          <a
            href="#packages"
            onClick={(e) => handleLinkClick(e, 'packages')}
            className="border-b border-gray-100 pb-3 flex items-center justify-between hover:text-brand-blue"
          >
            <span>Destinations</span>
            <Compass size={18} className="text-brand-blue" />
          </a>
          <a
            href="#about"
            onClick={(e) => handleLinkClick(e, 'about')}
            className="border-b border-gray-100 pb-3 flex items-center justify-between hover:text-brand-blue"
          >
            <span>Our Pillars</span>
            <Award size={18} className="text-brand-blue" />
          </a>
          <a
            href="#policies"
            onClick={(e) => handleLinkClick(e, 'policies')}
            className="border-b border-gray-100 pb-3 flex items-center justify-between hover:text-brand-blue"
          >
            <span>Policies</span>
            <Shield size={18} className="text-brand-blue" />
          </a>
          <a
            href="#location"
            onClick={(e) => handleLinkClick(e, 'location')}
            className="border-b border-gray-100 pb-3 flex items-center justify-between hover:text-brand-blue"
          >
            <span>Find Us</span>
            <Compass size={18} className="text-brand-blue" />
          </a>

          <div className="pt-4 flex flex-col gap-4">
            <a
              href={`tel:${HELPLINE_PHONE}`}
              className="flex items-center justify-center gap-3 w-full bg-brand-blue/5 border border-brand-blue/10 py-3 text-brand-blue text-base font-bold rounded-none"
            >
              <Phone size={16} />
              <span>Call Helpline: {HELPLINE_TEXT}</span>
            </a>
            
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onBookYatraClick();
              }}
              className="w-full bg-brand-blue text-white py-4 font-black uppercase text-sm tracking-widest text-center shadow-lg shadow-brand-blue/15"
            >
              Book Yatra Now
            </button>
          </div>
        </div>

        <div className="text-center text-xs text-gray-400 font-bold tracking-wider">
          {BRAND_NAME} • {BRAND_TAGLINE}
        </div>
      </div>
    </>
  );
};

export default Navbar;
