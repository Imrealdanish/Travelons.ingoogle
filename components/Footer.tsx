/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { 
  Phone, Mail, Instagram, MapPin, ExternalLink, Compass, ShieldCheck 
} from 'lucide-react';
import { 
  BRAND_NAME, BRAND_TAGLINE, HELPLINE_TEXT, HELPLINE_PHONE, 
  SUPPORT_EMAIL, INSTAGRAM_LINK, MAPS_LOCATION_LINK 
} from '../constants';

interface FooterProps {
  onLinkClick: (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => void;
}

const Footer: React.FC<FooterProps> = ({ onLinkClick }) => {
  return (
    <footer id="location" className="bg-brand-dark pt-20 pb-12 text-gray-400 font-sans border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-16 items-start pb-16 border-b border-gray-800">
          
          {/* Column 1: Brand Logo, Tagline, and Interactive Map Frame */}
          <div className="md:col-span-5 space-y-6">
            <div className="flex flex-col items-center md:items-start text-center md:text-left select-none">
              <div className="flex items-center justify-center md:justify-start gap-1.5">
                <span className="text-2xl font-black tracking-tight text-white uppercase font-sans">
                  {BRAND_NAME}
                </span>
                <span className="bg-brand-lime text-brand-blue text-[10px] font-bold uppercase tracking-widest px-2 py-0.5 rounded-full border border-brand-lime/10">
                  ACTIVE
                </span>
              </div>
              <span className="text-xs font-bold text-brand-lime uppercase tracking-[0.25em] mt-1 text-center md:text-left w-full">
                {BRAND_TAGLINE}
              </span>
            </div>
            
            <p className="text-xs sm:text-sm font-medium leading-relaxed max-w-sm">
              We curate verified, secure, and upfront-priced group retreats throughout India's pristine mountain sanctuaries. Zero negotiations, 100% professional logistics.
            </p>

            {/* Embedded maps iframe */}
            <div className="relative w-full h-[180px] bg-gray-900 border border-gray-800 filter grayscale contrast-125 opacity-70 hover:opacity-100 transition-opacity duration-300">
              <iframe
                title="Travelons Location Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d110051.35334647317!2d78.21200388905398!3d30.0876602334005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39093e67cf93f119%3A0xa366578077b77fc!2sRishikesh%2C%20Uttarakhand!5e0!3m2!1sen!2sin!4v1700000000000"
                className="w-full h-full border-none"
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer"
              ></iframe>
              <a 
                href={MAPS_LOCATION_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute bottom-2.5 right-2.5 bg-brand-lime hover:bg-brand-blue text-brand-blue hover:text-white px-3 py-1.5 text-[10px] font-black uppercase tracking-wider transition-colors flex items-center gap-1.5 shadow-md"
              >
                <span>Navigate</span>
                <ExternalLink size={10} />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Navigational Links */}
          <div className="md:col-span-3 space-y-6">
            <h4 className="font-extrabold text-[#F8FAFC] tracking-widest text-xs uppercase border-l-2 border-brand-lime pl-3">
              Core Navigation
            </h4>
            <ul className="space-y-3.5 text-xs sm:text-sm font-bold uppercase tracking-wider">
              <li>
                <a 
                  href="#packages" 
                  onClick={(e) => onLinkClick(e, 'packages')} 
                  className="hover:text-white transition-colors"
                >
                  Departures Catalog
                </a>
              </li>
              <li>
                <a 
                  href="#about" 
                  onClick={(e) => onLinkClick(e, 'about')} 
                  className="hover:text-white transition-colors"
                >
                  Our Safety Pillars
                </a>
              </li>
              <li>
                <a 
                  href="#policies" 
                  onClick={(e) => onLinkClick(e, 'policies')} 
                  className="hover:text-white transition-colors"
                >
                  Core Policies
                </a>
              </li>
              <li>
                <a 
                  href="#location" 
                  onClick={(e) => onLinkClick(e, 'location')} 
                  className="hover:text-white transition-colors"
                >
                  Operational Base Map
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Active Hyperlinks for Helpline, Support Email, and Live Instagram */}
          <div className="md:col-span-4 space-y-6 text-left">
            <h4 className="font-extrabold text-[#F8FAFC] tracking-widest text-xs uppercase border-l-2 border-brand-lime pl-3">
              Official Channels
            </h4>
            
            <div className="space-y-4">
              {/* Telephone */}
              <a 
                href={`tel:${HELPLINE_PHONE}`}
                className="flex items-center gap-3.5 group hover:text-white transition-colors"
              >
                <div className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center shrink-0 border border-gray-700 group-hover:border-brand-lime transition-all">
                  <Phone size={16} className="text-brand-lime" />
                </div>
                <div className="text-left">
                  <span className="block text-[10px] text-gray-500 font-extrabold uppercase tracking-widest">Helpline Desk</span>
                  <span className="font-black text-sm text-[#F8FAFC]">{HELPLINE_TEXT}</span>
                </div>
              </a>

              {/* Email */}
              <a 
                href={`mailto:${SUPPORT_EMAIL}`}
                className="flex items-center gap-3.5 group hover:text-white transition-colors break-all"
              >
                <div className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center shrink-0 border border-gray-700 group-hover:border-brand-lime transition-all">
                  <Mail size={16} className="text-brand-lime" />
                </div>
                <div className="text-left">
                  <span className="block text-[10px] text-gray-500 font-extrabold uppercase tracking-widest">Office Support</span>
                  <span className="font-black text-xs sm:text-sm text-[#F8FAFC]">{SUPPORT_EMAIL}</span>
                </div>
              </a>

              {/* Instagram Profile */}
              <a 
                href={INSTAGRAM_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3.5 group hover:text-white transition-colors"
              >
                <div className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center shrink-0 border border-gray-700 group-hover:border-brand-lime transition-all">
                  <Instagram size={16} className="text-brand-lime" />
                </div>
                <div className="text-left">
                  <span className="block text-[10px] text-gray-500 font-extrabold uppercase tracking-widest">Live Experience feeds</span>
                  <span className="font-black text-sm text-[#F8FAFC] flex items-center gap-1.5 hover:underline">
                    <span>@travelons.in</span>
                    <ExternalLink size={12} className="opacity-50" />
                  </span>
                </div>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Section copyrights */}
        <div className="mt-12 flex flex-col sm:flex-row justify-between items-center gap-4 text-center sm:text-left text-xs uppercase tracking-widest font-bold">
          <p className="text-gray-500">
            &copy; 2026 {BRAND_NAME}. {BRAND_TAGLINE}. All Rights Reserved.
          </p>
          <div className="flex items-center gap-1 text-emerald-600 border border-emerald-900/10 bg-emerald-500/5 px-3 py-1 text-[10px] uppercase font-black">
            <ShieldCheck size={12} />
            <span>Govt of India Registrations Active</span>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
