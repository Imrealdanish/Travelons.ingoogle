/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useMemo } from 'react';
import { TourPackage } from '../types';
import { 
  ArrowLeft, Check, Sparkles, AlertCircle, ShoppingBag, 
  MapPin, Calendar, Users, ShieldCheck, ExternalLink, HelpCircle 
} from 'lucide-react';
import { HELPLINE_PHONE, HELPLINE_TEXT } from '../constants';

interface CheckoutProps {
  packageData: TourPackage;
  onBack: () => void;
}

const Checkout: React.FC<CheckoutProps> = ({ packageData, onBack }) => {
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [departureDate, setDepartureDate] = useState('');
  const [passengerCount, setPassengerCount] = useState<number>(1);
  const [occupancyType, setOccupancyType] = useState<string>(
    packageData.detailedPrices ? Object.keys(packageData.detailedPrices)[0] : 'standard'
  );
  
  const [bookingConfirmed, setBookingConfirmed] = useState(false);

  // Extract price based on chosen occupancy
  const perPersonPrice = useMemo(() => {
    if (!packageData.detailedPrices) {
      return packageData.basePrice;
    }
    const selectedPriceStr = (packageData.detailedPrices as any)[occupancyType];
    if (selectedPriceStr) {
      // Extract numbers (e.g. "₹5,999" -> 5999)
      const parsed = parseInt(selectedPriceStr.replace(/[^0-9]/g, ''), 10);
      return isNaN(parsed) ? packageData.basePrice : parsed;
    }
    return packageData.basePrice;
  }, [occupancyType, packageData]);

  // Billing math
  const subtotal = perPersonPrice * passengerCount;
  const gstTax = packageData.gstNote ? Math.round(subtotal * 0.05) : 0;
  const grandTotal = subtotal + gstTax;

  // Token advance calculations
  const totalTokenPayment = packageData.tokenAmount * passengerCount;
  const remainingAtBoarding = grandTotal - totalTokenPayment;

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName || !phone || !departureDate) {
      alert("Please fill in all mandatory fields before sending booking request.");
      return;
    }
    
    setBookingConfirmed(true);

    // Formulate a professional pre-filled WhatsApp link
    const textMessage = encodeURIComponent(
      `Hello TRAVELONS.IN Team!\n\n` +
      `I would like to book seats for "${packageData.name}" (${packageData.duration}).\n\n` +
      `--- PASSENGER DETAILS ---\n` +
      `• Lead Name: ${fullName}\n` +
      `• Travelers: ${passengerCount} Person(s)\n` +
      `• Contact: ${phone}\n` +
      `• Target Departure Date: ${departureDate}\n` +
      `• Preferred Occupancy Rate: ${occupancyType.toUpperCase()}\n\n` +
      `--- BILLING SUMMARY ---\n` +
      `• Calculated Total Fares: ₹${grandTotal.toLocaleString('en-IN')}/-\n` +
      `• Seat Token Advance (Pay Now): ₹${totalTokenPayment.toLocaleString('en-IN')}/-\n` +
      `• Net Balance at Boarding Point: ₹${remainingAtBoarding.toLocaleString('en-IN')}/-\n\n` +
      `Please register my seat tokens and share QR details.`
    );

    const whatsappLink = `https://api.whatsapp.com/send?phone=${HELPLINE_PHONE.replace('+', '')}&text=${textMessage}`;
    
    // Smooth scroll page back top
    window.scrollTo({ top: 0, behavior: 'smooth' });
    
    // Open in new tab securely
    window.open(whatsappLink, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="min-h-screen pt-28 pb-32 bg-brand-grey animate-slide-up">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        
        {/* Back breadcrumb */}
        <button 
          onClick={onBack}
          className="group flex items-center gap-2.5 text-xs font-black uppercase tracking-widest text-brand-blue hover:text-brand-dark transition-all mb-10 border border-brand-blue/10 bg-white px-4 py-2.5 shadow-sm rounded-none"
        >
          <ArrowLeft size={14} className="group-hover:-translate-x-1.5 transition-transform" />
          <span>Back to Expedition Details</span>
        </button>

        {bookingConfirmed ? (
          /* SUCCESS SCREEN */
          <div className="bg-white border-2 border-brand-blue p-8 sm:p-12 text-center max-w-2xl mx-auto shadow-2xl relative">
            <div className="absolute top-0 right-0 bg-brand-lime text-brand-blue text-[10px] font-black uppercase tracking-widest px-4 py-1.5 shadow-sm">
              Yatra Request Triggered
            </div>
            
            <div className="w-16 h-16 bg-brand-lime/10 border border-brand-lime rounded-full flex items-center justify-center mx-auto mb-6">
              <ShieldCheck className="text-brand-blue animate-bounce" size={32} />
            </div>
            
            <h1 className="text-2xl sm:text-3xl font-black text-brand-dark tracking-tight mb-4 uppercase">
              Seat Registration Requested!
            </h1>
            
            <p className="text-sm text-gray-600 font-medium leading-relaxed mb-8">
              Hi <strong className="text-brand-dark">{fullName}</strong>, we have formulated your seat registration payload. An external tab has been launched to connect with our official on-ground reservation coordinators. 
              If the redirect didn't happen automatically, click the primary booking link below.
            </p>

            {/* Generated summaries */}
            <div className="bg-brand-grey p-6 border-l-4 border-brand-blue text-left space-y-3 mb-8">
              <span className="block text-[10px] font-black uppercase text-brand-blue tracking-widest">Calculated Voucher Summary:</span>
              <div className="flex justify-between font-bold text-xs uppercase text-gray-500">
                <span>Travelers Count</span>
                <span>{passengerCount} GUEST(S)</span>
              </div>
              <div className="flex justify-between font-bold text-xs uppercase text-gray-500">
                <span>Occupancy Category</span>
                <span className="capitalize">{occupancyType}</span>
              </div>
              <div className="flex justify-between font-black text-sm text-brand-dark border-t border-gray-200 pt-2">
                <span>Voucher Grand Total</span>
                <span>₹{grandTotal.toLocaleString('en-IN')}/-</span>
              </div>
              <div className="flex justify-between font-black text-xs text-[#004A80] bg-brand-lime/20 px-2.5 py-1">
                <span>Token Reservation Advance</span>
                <span>₹{totalTokenPayment.toLocaleString('en-IN')}/-</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={() => {
                  setBookingConfirmed(false);
                  // Manually re-trigger WhatsApp window in case block
                  const textMessage = encodeURIComponent(
                    `Hello TRAVELONS.IN Team! I wish to reserve active seats for ${packageData.name}...`
                  );
                  window.open(`https://api.whatsapp.com/send?phone=${HELPLINE_PHONE.replace('+', '')}&text=${textMessage}`, '_blank');
                }}
                className="flex-1 bg-brand-blue hover:bg-brand-dark text-white font-black uppercase tracking-widest text-xs py-4 flex items-center justify-center gap-2"
              >
                <span>Re-launch WhatsApp Gate</span>
                <ExternalLink size={14} />
              </button>
              
              <button 
                onClick={onBack}
                className="flex-1 bg-brand-grey border border-brand-blue/15 text-brand-blue font-black uppercase tracking-widest text-xs py-4"
              >
                Explore More Portals
              </button>
            </div>
          </div>
        ) : (
          /* BOOKING DISPATCHER FORM */
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* Form Section (Col-Span 7) */}
            <form onSubmit={handleBookingSubmit} className="lg:col-span-7 bg-white border border-gray-100 p-6 sm:p-10 space-y-8 shadow-sm">
              <div>
                <span className="text-brand-blue text-xs font-black tracking-widest uppercase block mb-1">REGISTRATION FORM</span>
                <h1 className="text-2xl sm:text-3xl font-black text-brand-dark tracking-tight leading-tight uppercase font-sans">
                  Register Passenger Token
                </h1>
                <p className="text-xs text-gray-400 font-extrabold uppercase mt-1 tracking-wider leading-relaxed">
                  Enter lead passenger parameters below. ID checking is required onboard.
                </p>
              </div>

              {/* Form Input fields */}
              <div className="space-y-6">
                
                {/* Full Name */}
                <div className="flex flex-col gap-1.5 text-left">
                  <label className="text-[11px] uppercase font-black tracking-wider text-brand-dark flex items-center gap-1.5">
                    <span>Full Legal Name</span>
                    <span className="text-[#004A80] font-black">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="Enter lead traveler name (e.g. Rajat Khanna)"
                    className="w-full bg-brand-grey border border-gray-200 focus:border-brand-blue px-4 py-3.5 text-sm font-bold focus:outline-none placeholder-gray-400"
                  />
                </div>

                {/* Grid phone & email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Phone */}
                  <div className="flex flex-col gap-1.5 text-left">
                    <label className="text-[11px] uppercase font-black tracking-wider text-brand-dark flex items-center gap-1.5">
                      <span>Phone / WhatsApp Mobile</span>
                      <span className="text-[#004A80] font-black">*</span>
                    </label>
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="+91 99999 88888"
                      className="w-full bg-brand-grey border border-gray-200 focus:border-brand-blue px-4 py-3.5 text-sm font-bold focus:outline-none placeholder-gray-400"
                    />
                  </div>

                  {/* Email */}
                  <div className="flex flex-col gap-1.5 text-left">
                    <label className="text-[11px] uppercase font-black tracking-wider text-brand-dark">
                      <span>Email (For Voucher Copy)</span>
                    </label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="e.g. rajat@domain.com"
                      className="w-full bg-brand-grey border border-gray-200 focus:border-brand-blue px-4 py-3.5 text-sm font-bold focus:outline-none placeholder-gray-400"
                    />
                  </div>
                </div>

                {/* Grid date & travelers */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Departure date */}
                  <div className="flex flex-col gap-1.5 text-left">
                    <label className="text-[11px] uppercase font-black tracking-wider text-brand-dark flex items-center gap-1.5">
                      <span>Target Departure Date</span>
                      <span className="text-[#004A80] font-black">*</span>
                    </label>
                    <input
                      type="date"
                      required
                      value={departureDate}
                      onChange={(e) => setDepartureDate(e.target.value)}
                      className="w-full bg-brand-grey border border-gray-200 focus:border-brand-blue px-4 py-3.5 text-sm font-bold focus:outline-none"
                    />
                  </div>

                  {/* Travelers counts */}
                  <div className="flex flex-col gap-1.5 text-left">
                    <label className="text-[11px] uppercase font-black tracking-wider text-brand-dark flex items-center gap-1.5">
                      <span>Number of Travelers</span>
                      <span className="text-[#004A80] font-black">*</span>
                    </label>
                    <div className="flex items-center border border-gray-200 bg-brand-grey">
                      <button
                        type="button"
                        onClick={() => setPassengerCount(Math.max(1, passengerCount - 1))}
                        className="px-4 py-3 font-extrabold text-[#004A80] hover:bg-gray-100 shrink-0"
                      >
                        -
                      </button>
                      <span className="flex-1 text-center font-extrabold text-sm text-brand-dark">
                        {passengerCount} Guest(s)
                      </span>
                      <button
                        type="button"
                        onClick={() => setPassengerCount(passengerCount + 1)}
                        className="px-4 py-3 font-extrabold text-[#004A80] hover:bg-gray-100 shrink-0"
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>

                {/* Occupancy selection options if detailedPrices exist */}
                {packageData.detailedPrices && (
                  <div className="flex flex-col gap-1.5 text-left pt-2">
                    <label className="text-[11px] uppercase font-black tracking-wider text-brand-dark">
                      <span>Prefered Occupancy Plan (Seat Rate adjusts dynamically)</span>
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                      {Object.entries(packageData.detailedPrices).map(([key, value]) => (
                        <button
                          key={key}
                          type="button"
                          onClick={() => setOccupancyType(key)}
                          className={`p-3 text-xs font-black uppercase tracking-wider border text-center transition-all ${
                            occupancyType === key 
                              ? 'bg-brand-blue text-brand-lime border-brand-blue shadow-md' 
                              : 'bg-brand-grey text-gray-500 border-gray-200 hover:border-brand-blue/30'
                          }`}
                        >
                          <span className="block capitalize font-black text-[10px] opacity-70 mb-0.5">{key === 'withoutRishikesh' ? 'without rishikesh' : key === 'withRishikesh' ? 'with rishikesh' : key.replace('with', 'with ')}</span>
                          <span className="block font-sans text-xs">{value}</span>
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Security checkpoint checks */}
              <div className="p-4 bg-brand-grey border-l-4 border-brand-blue text-xs text-gray-500 font-bold space-y-1.5 leading-tight">
                <span className="block font-black text-brand-blue uppercase">Mandatory Security Onboard Checkpoint:</span>
                <p>Smoking, littering, or misconduct is strictly banned under absolute onboard laws. Lead travelers must present government-issued ID checks before departure.</p>
              </div>

              {/* Submit triggers */}
              <button
                type="submit"
                className="w-full bg-brand-blue hover:bg-brand-dark bg-no-repeat text-white hover:text-brand-lime font-black uppercase text-xs tracking-widest py-4.5 text-center transition-all"
              >
                Submit & Secure Seats via WhatsApp
              </button>
            </form>

            {/* BILLING AND PACKAGE PORTRAIT SUMMARY (Col-Span 5) */}
            <div className="lg:col-span-5 space-y-8 lg:sticky lg:top-24">
              
              {/* Detailed Invoice Breakdown */}
              <div className="bg-white border border-gray-100 p-8 shadow-sm space-y-6">
                <h2 className="text-sm font-extrabold text-brand-blue uppercase tracking-widest border-b border-gray-100 pb-3 flex items-center gap-2">
                  <ShoppingBag size={16} className="text-brand-lime" />
                  <span>Fare Calculations Draft</span>
                </h2>

                <div className="space-y-4">
                  {/* Selected Package Info */}
                  <div className="flex gap-4 items-start border-b border-gray-50 pb-4">
                    <img 
                      src={packageData.imageUrl} 
                      alt={packageData.name} 
                      className="w-16 h-16 object-cover border border-gray-100 shrink-0" 
                    />
                    <div className="text-left">
                      <span className="text-[9px] bg-brand-blue/5 text-brand-blue font-black uppercase tracking-widest px-2 py-0.5 rounded-none">{packageData.duration}</span>
                      <h4 className="text-sm font-black text-brand-dark tracking-tight uppercase leading-tight mt-1 mb-1 truncate max-w-xs">{packageData.name}</h4>
                      <span className="text-xs text-gray-400 font-extrabold uppercase">Plan: {occupancyType} Occupancy</span>
                    </div>
                  </div>

                  {/* Calculations details */}
                  <div className="space-y-2.5 text-xs font-bold uppercase tracking-wider text-gray-500">
                    <div className="flex justify-between">
                      <span>Rate Per Traveler</span>
                      <span className="text-brand-dark">₹{perPersonPrice.toLocaleString('en-IN')}/-</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Total Travelers Group</span>
                      <span className="text-brand-dark">{passengerCount} member(s)</span>
                    </div>
                    {packageData.gstNote && (
                      <div className="flex justify-between">
                        <span>GST Tax (+5%)</span>
                        <span className="text-brand-dark">₹{gstTax.toLocaleString('en-IN')}/-</span>
                      </div>
                    )}
                  </div>

                  {/* Total pricing */}
                  <div className="border-t border-gray-100 pt-4 space-y-4">
                    <div className="flex justify-between items-baseline">
                      <span className="text-xs uppercase font-extrabold text-gray-400">Total Yatra Fare</span>
                      <span className="text-xl font-black text-[#004A80] tracking-tight">₹{grandTotal.toLocaleString('en-IN')}/-</span>
                    </div>

                    {/* Pre-payment Token and Boarding point breakdown */}
                    <div className="bg-brand-grey p-4 space-y-2 text-xs border border-gray-100">
                      <div className="flex justify-between items-center text-emerald-800 font-black">
                        <span>Seat Advance Token (Pay Now)</span>
                        <span className="text-sm">₹{totalTokenPayment.toLocaleString('en-IN')}/-</span>
                      </div>
                      <div className="flex justify-between items-center text-gray-600 font-bold border-t border-gray-200/50 pt-2 text-[11px]">
                        <span>Remaining at Boarding</span>
                        <span>₹{remainingAtBoarding.toLocaleString('en-IN')}/-</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Guarantee trust note */}
                <div className="flex gap-2.5 items-start text-[11px] text-gray-400 font-bold leading-relaxed border-t border-gray-100 pt-5">
                  <ShieldCheck size={16} className="text-brand-blue shrink-0 mt-0.5" />
                  <p>Secured via Travelons.in Upfront-Price Model. Booking tokens are safe under our landslides weather-safeguard system.</p>
                </div>
              </div>

              {/* Live help center hotline box */}
              <div className="bg-brand-dark text-white p-6 relative">
                <span className="text-[9px] uppercase font-black text-brand-lime tracking-widest block mb-1">Direct Coordination</span>
                <span className="text-sm font-bold block mb-3">Facing any registration questions? Speak directly to our travel experts.</span>
                <a 
                  href={`tel:${HELPLINE_PHONE}`} 
                  className="font-black text-lg text-brand-lime hover:underline block"
                >
                  ☏ {HELPLINE_TEXT}
                </a>
              </div>

            </div>

          </div>
        )}

      </div>
    </div>
  );
};

export default Checkout;
