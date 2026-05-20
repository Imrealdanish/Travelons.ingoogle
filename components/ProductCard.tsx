/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Calendar, Tag, ShieldCheck, MapPin } from 'lucide-react';
import { TourPackage } from '../types';

interface ProductCardProps {
  packageItem: TourPackage;
  onClick: (pkg: TourPackage) => void;
  onBookClick: (e: React.MouseEvent, pkg: TourPackage) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ packageItem, onClick, onBookClick }) => {
  return (
    <div 
      className="bg-white border border-gray-100 group flex flex-col justify-between relative hover:border-brand-blue/20 hover:shadow-xl hover:shadow-brand-blue/5 transition-all duration-300 transform hover:-translate-y-1"
    >
      
      {/* Visual Image Block */}
      <div className="relative w-full aspect-[4/3] overflow-hidden bg-brand-grey border-b border-gray-50">
        <img 
          src={packageItem.imageUrl} 
          alt={packageItem.name} 
          className="w-full h-full object-cover transition-transform duration-1000 ease-in-out group-hover:scale-105"
          referrerPolicy="no-referrer"
        />

        {/* Float Duration Badge */}
        <div className="absolute top-4 left-4 z-10 bg-brand-dark/95 backdrop-blur-sm border border-white/10 text-white font-black text-[10px] uppercase tracking-widest px-3 py-1 flex items-center gap-1.5 shadow-md">
          <Calendar size={10} className="text-brand-lime animate-pulse" />
          <span>{packageItem.duration}</span>
        </div>

        {/* Active Badge tag from category spec */}
        <div className="absolute top-4 right-4 z-10 bg-brand-blue text-brand-lime font-black text-[9px] uppercase tracking-wider px-2.5 py-1 shadow-sm">
          {packageItem.badge}
        </div>

        {/* Hover quick card backdrop */}
        <div className="absolute inset-0 bg-brand-blue/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>

      {/* Package Metadata */}
      <div className="p-6 md:p-8 flex-1 flex flex-col justify-between">
        <div className="space-y-3">
          
          {/* Subtitle tag */}
          <div className="flex items-center gap-1.5 text-[10px] uppercase font-extrabold tracking-widest text-[#004A80]/70">
            <MapPin size={10} className="text-brand-blue shrink-0" />
            <span>Group Departure</span>
          </div>

          {/* Title block - Strict Single Line Requirement */}
          <h3 
            className="text-lg font-black text-brand-dark tracking-tight truncate group-hover:text-brand-blue transition-colors uppercase font-sans"
            title={packageItem.name}
          >
            {packageItem.name}
          </h3>

          {/* Description summary */}
          <p className="text-xs text-gray-500 font-bold line-clamp-2 leading-relaxed">
            {packageItem.tagline}
          </p>
        </div>

        {/* Pricing & Call-to-actions */}
        <div className="mt-6 pt-6 border-t border-gray-50 space-y-5">
          
          {/* Custom Pricing Layout */}
          <div className="flex items-baseline justify-between gap-1 flex-wrap">
            <div className="flex flex-col">
              <span className="text-[10px] uppercase font-bold tracking-widest text-gray-400">Total Fares</span>
              <span className="text-[#004A80] text-lg font-black tracking-tight flex items-center gap-1">
                {packageItem.priceText.includes('|') ? (
                  <span className="text-xs font-extrabold text-brand-blue bg-brand-blue/5 border border-brand-blue/10 px-2 py-0.5 rounded-none">{packageItem.priceText}</span>
                ) : (
                  <span>{packageItem.priceText}</span>
                )}
                {packageItem.gstNote && (
                  <span className="text-[9px] font-black text-brand-lime bg-brand-blue uppercase px-1 py-0.5 shrink-0 ml-1">+ GST</span>
                )}
              </span>
            </div>

            {/* Token advance indicator */}
            <div className="text-right flex flex-col">
              <span className="text-[9px] uppercase font-extrabold tracking-wider text-gray-400">Seat Token</span>
              <span className="text-xs font-black text-gray-700">₹{packageItem.tokenAmount.toLocaleString('en-IN')}/-</span>
            </div>
          </div>

          {/* Action buttons */}
          <div className="grid grid-cols-2 gap-3 pt-1">
            <button
              onClick={() => onClick(packageItem)}
              className="text-[11px] font-extrabold text-center uppercase tracking-widest text-brand-blue bg-brand-grey border border-brand-blue/15 py-3 hover:bg-brand-blue hover:text-white hover:border-brand-blue transition-all duration-300 rounded-none cursor-pointer"
            >
              Itinerary
            </button>
            <button
              onClick={(e) => onBookClick(e, packageItem)}
              className="text-[11px] font-extrabold text-center uppercase tracking-widest text-brand-blue bg-brand-lime border border-brand-lime/10 py-3 hover:bg-brand-dark hover:text-brand-lime hover:border-brand-dark transition-all duration-300 rounded-none shadow-md shadow-brand-lime/5 cursor-pointer active:scale-95"
            >
              Book Seat
            </button>
          </div>

        </div>
      </div>

    </div>
  );
};

export default ProductCard;
