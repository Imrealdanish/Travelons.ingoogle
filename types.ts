/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';

export interface DetailedPricing {
  quad?: string;
  triple?: string;
  double?: string;
  standard?: string;
  deluxe?: string;
  luxury?: string;
  withRishikesh?: string;
  withoutRishikesh?: string;
}

export interface TourPackage {
  id: string;
  name: string;
  duration: string;
  badge: string;
  priceText: string; // Starting price text e.g. "Starting from ₹5,999/- PP"
  basePrice: number; // For calculations in booking system
  detailedPrices?: DetailedPricing;
  gstNote?: boolean; // Is "+5% GST" applicable
  imageUrl: string;
  images?: string[];
  category: 'himachal' | 'uttarakhand' | 'kashmir_rajasthan';
  tagline: string;
  description: string;
  itinerary: { day: number; title: string; desc: string }[];
  inclusions: string[];
  exclusions?: string[];
  thingsToCarry?: { category: string; items: string }[];
  whyChoose?: { title: string; desc: string }[];
  termsAndConditions?: string[];
  faqs?: { question: string; answer: string }[];
  safetyLogistics: string;
  tokenAmount: number; // Booking token advance (e.g. 3000 or 6000)
}

export interface BookingDetails {
  packageId: string;
  packageName: string;
  fullName: string;
  phone: string;
  email: string;
  departureDate: string;
  passengerCount: number;
  occupancyType: string;
  basePrice: number;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  timestamp: number;
}

export type ViewState = 
  | { type: 'home' }
  | { type: 'itinerary'; package: TourPackage }
  | { type: 'booking'; package: TourPackage };
