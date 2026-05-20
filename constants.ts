/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { TourPackage } from './types';

export const BRAND_NAME = 'TRAVELONS.IN';
export const BRAND_TAGLINE = 'Travel With Us';
export const SUPPORT_EMAIL = 'thetravelon.in@gmail.com';
export const HELPLINE_PHONE = '+919990789015';
export const HELPLINE_TEXT = '+91 9990789015';
export const INSTAGRAM_LINK = 'https://www.instagram.com/travelons.in?igsh=MXBnMGFqOXk3NW41ZA==';
export const MAPS_LOCATION_LINK = 'https://maps.app.goo.gl/8T6g4dBihCeJ8cgr8';

export const TOUR_PACKAGES: TourPackage[] = [
  // Himachal Pradesh
  {
    id: 'p1',
    name: 'Manali Kasol Group Expedition',
    duration: '5 Nights / 6 Days',
    badge: 'Popular Choice',
    priceText: 'Starting from ₹5,999/- PP',
    basePrice: 5999,
    detailedPrices: {
      quad: '₹5,999/- PP',
      triple: '₹6,499/- PP',
      double: '₹6,999/- PP'
    },
    imageUrl: 'https://i.imgur.com/A5dashu.jpeg',
    category: 'himachal',
    tagline: 'Experience high-end leisure amid Solang Valley snow peaks & Parvati cafe vibes.',
    description: 'A premium, relaxing escape into the crown jewels of Himachal. Spend luxurious nights in handpicked hotels & riverside camps, enjoy guided high-altitude explorations, DJ night, and cozy bonfires by the Parvati River.',
    tokenAmount: 3000,
    itinerary: [
      { 
        day: 1, 
        title: 'Delhi to Manali (Overnight Journey)', 
        desc: 'Group assembly at the designated pickup point in Delhi at 07:00 PM. Meet your Trip Leader and co-travelers for a short briefing. Midnight (12:00 AM - 02:00 AM): Pickup available from Chandigarh. Note: En route halt for dinner (at own expense).' 
      },
      { 
        day: 2, 
        title: 'Arrival in Manali & Local Sightseeing', 
        desc: 'Morning arrival in Manali; check-in to the hotel, freshen up, and relax. Afternoon visit to Hadimba Devi Temple, Van Vihar, Buddhist Monastery, and Mall Road. Evening return to the hotel for a briefing session, dinner, and overnight stay.' 
      },
      { 
        day: 3, 
        title: 'Solang Valley, Atal Tunnel & Sissu Excursion', 
        desc: 'Morning breakfast at the hotel. Drive through the iconic Atal Tunnel to explore Solang Valley and Sissu. Evening return to the hotel for a lively DJ Night & Bonfire Party followed by dinner.' 
      },
      { 
        day: 4, 
        title: 'Manali to Kasol via Kullu (Riverside Camping)', 
        desc: 'Post breakfast, check out from the Manali hotel. Drive to Kullu for thrilling adventure activities like River Rafting and Paragliding (optional). Continue to Kasol, check into a premium Riverside Camp, and enjoy a Soulful Music Night & Bonfire with dinner.' 
      },
      { 
        day: 5, 
        title: 'Kasol Local Sightseeing & Departure', 
        desc: 'Morning breakfast and check-out from the Kasol camp. Explore Gurudwara Manikaran Sahib, natural hot springs, and the vibrant local Kasol Market. Evening departure back towards Delhi.' 
      },
      { 
        day: 6, 
        title: 'Arrival in Delhi', 
        desc: 'Arrive in Delhi between 06:00 AM and 08:00 AM with timeless and precious memories.' 
      }
    ],
    inclusions: [
      'Transport: Both Side Transportation (Delhi - Manali - Delhi)',
      'Stays: 3N/4D Stay (2 Nights in Manali Hotel + 1 Night in Kasol Camp)',
      'Meals: 3 Breakfasts & 3 Dinners (Starting from Manali dinner to Kasol breakfast)',
      'Support: Experienced Trip Coordinator Assistance',
      'Perks: Bonfire sessions & DJ Night'
    ],
    exclusions: [
      'On-the-way meals & Lunch',
      'Snow / Water Activities Charges',
      'Travel Insurance',
      'Personal expenses (Tips, entry tickets, laundry, beverages)',
      'Expenses arising from natural calamities (landslides, roadblocks)'
    ],
    thingsToCarry: [
      { category: 'Clothing', items: 'Heavy Jacket, Jeans, Trousers, Shawl, Scarf, Beanie Cap, Extra Socks.' },
      { category: 'Footwear', items: 'Trekking Shoes & Comfortable Slippers.' },
      { category: 'Gear & Safety', items: 'Valid ID Proof, Personal Medicines, Mask, Phone Charger, Power Bank, Headphones.' }
    ],
    whyChoose: [
      { title: 'Fixed & Fair Pricing', desc: 'No hidden charges, saving you from complex negotiations.' },
      { title: 'Guaranteed Promises', desc: 'We deliver exactly what we promise with absolute transparency.' },
      { title: 'Premium Network', desc: 'Experienced guides, reliable coordinators, and professional drivers.' }
    ],
    termsAndConditions: [
      'Payment Policy: Advance amount is strictly non-refundable. Balance payment must be cleared 24 hours prior to trip departure.',
      'Boarding Rules: Valid Government ID verification is mandatory before boarding. Bookings are non-transferable.',
      'On-Road Safety: AC will be switched off in hilly terrains at the driver’s discretion for passenger safety.',
      'Community Decorum: Drinking and smoking are strictly prohibited during transport. Misconduct will lead to immediate cancellation without refunds.',
      'Unforeseen Events: Travelons.in is not liable for itinerary changes or extra costs due to weather, landslides, breakdowns, or political closures.'
    ],
    safetyLogistics: 'Transport operated by certified premium drivers with extensive high-mountain experience. Comprehensive oxygen cylinders & first-aid support included onboard.'
  },
  {
    id: 'p2',
    name: 'Manali Kasol Budget Tour',
    duration: '4 Nights / 5 Days',
    badge: 'Atal Tunnel & Sissu Special',
    priceText: 'Starting from ₹4,999/- PP',
    basePrice: 4999,
    detailedPrices: {
      quad: '₹4,999/- PP',
      triple: '₹5,499/- PP',
      double: '₹5,999/- PP'
    },
    imageUrl: 'https://i.imgur.com/fgo1p8x.jpeg',
    category: 'himachal',
    tagline: 'High-altitude Atal Tunnel, Sissu waterfalls, snow adventures, and Parvati valley exploration.',
    description: 'The absolute bestseller pocket-friendly Himalayan quest. Venture through the world’s longest highway tunnel above 10,000 feet, admire spectacular Sissu waterfalls, and experience river-side activities, bonfires, and café-hopping in Kasol.',
    tokenAmount: 2000,
    itinerary: [
      {
        day: 1,
        title: 'Departure from Delhi',
        desc: 'Evening assembly at the designated pickup point in Delhi. Board your comfortable AC Bus/Traveller, meet your Trip Captain, and begin the overnight journey to the Himalayas.'
      },
      {
        day: 2,
        title: 'Arrival in Manali & Local Sightseeing',
        desc: '10:00 AM – 11:00 AM: Arrive in Manali and check-in at the hotel. Freshen up and take some rest. Afternoon Sightseeing: Visit Hadimba Devi Temple, Van Vihar, and the Buddhist Monastery. Evening: Leisure time for shopping and walking around Mall Road. Return to the hotel for dinner and an overnight stay.'
      },
      {
        day: 3,
        title: 'Snowpoints, Atal Tunnel & Sissu Excursion',
        desc: 'Morning breakfast at the hotel. Head out for a full-day excursion covering Solang Valley (adventure activities & snow points). Drive through the world-famous high-altitude Atal Tunnel to enter Sissu for breathtaking valley views and photography. Return to the hotel in the evening for a Fun-filled Music Night & Bonfire session, followed by dinner and an overnight stay.'
      },
      {
        day: 4,
        title: 'Kasol Sightseeing, Kullu Activities & Departure',
        desc: 'Morning breakfast at the hotel and check-out. Drive towards Kasol, stopping en route at Kullu for thrilling adventure activities like river rafting and paragliding. Explore Kasol highlights: Gurudwara Manikaran Sahib (Darshan & hot springs) and Kasol Market for local café hopping. Evening assembly and start the overnight return drive to Delhi.'
      },
      {
        day: 5,
        title: 'Arrival at Delhi',
        desc: 'Reach Delhi in the morning/noon (depending on traffic conditions). Group picture session, warm goodbyes to the crew, and dispersal with happy memories.'
      }
    ],
    inclusions: [
      'Transport: Comfortable AC Bus / Traveller transfers',
      'Stays: 2-Night premium hotel stay in Manali',
      'Meals: 2 Breakfasts & 2 Dinners',
      'Perks: Fun-filled Music Night & Bonfire session',
      'Staff: Dedicated Trip Coordinator throughout the tour',
      'Taxes: All toll taxes, parking, and state charges covered'
    ],
    exclusions: [
      'Personal expenses of any kind',
      'Meals during travel (en route) and lunches',
      'Entry tickets, monument fees, or activity charges',
      'Adventure activity fees (Rafting, Paragliding, etc.)',
      'Anything not explicitly specified in the inclusions',
      'Insurance coverage for accidents or sickness'
    ],
    termsAndConditions: [
      'Cancellation Rule | More than 10 Days from Travel Date: 50% refund of the advance amount.',
      'Cancellation Rule | 5 to 10 Days from Travel Date: 25% refund of the advance amount.',
      'Cancellation Rule | Less than 5 Days from Travel Date: Strictly No Refund.',
      'Cancellation Rule | No-Shows & Early Checkouts: No refunds or adjustments will be made.',
      'Weather & Force Majeure Guidelines: For cancellations due to political unrest, state guidelines, extreme weather, or unsafe road/river conditions, no cash refunds will be processed. Instead, a Full Credit Note (equal to your booking amount) will be issued, valid for any future travel with Travelons.in.',
      'Payment Term: Advance is non-refundable. Full remaining payment must be cleared 24 hours prior to departure to avoid automatic cancellation.',
      'Boarding Rule: Valid Government ID verification is mandatory before boarding. Bookings are strictly non-transferable.',
      'Hill Driving AC Policy: Air conditioning will be switched off in hilly terrains. The driver reserves the discretion to keep the AC off on dangerous or uneven routes for vehicle safety.',
      'Decorum & Safety: Drinking and smoking are strictly prohibited during transport. Misconduct or indiscipline will not be tolerated.',
      'Luggage Liability: Travelers are responsible for their own luggage and belongings. Management is not liable for any missing items.'
    ],
    safetyLogistics: 'Strict compliance with tourist standards. Safe driving practices across high mountain climbs, with first-aid kits and emergency trip coordination.'
  },
  {
    id: 'p3',
    name: 'Jibhi Tirthan Exotic Tour',
    duration: '4 Nights / 5 Days',
    badge: 'Jalori Pass & Mini Thailand',
    priceText: 'Starting from ₹5,999/- PP',
    basePrice: 5999,
    detailedPrices: {
      quad: '₹5,999/- PP',
      triple: '₹6,499/- PP',
      double: '₹6,999/- PP'
    },
    gstNote: true,
    imageUrl: 'https://i.imgur.com/ThP4Xea.jpeg',
    category: 'himachal',
    tagline: 'Step away from commercial crowds into treehouses, cold pool waterfalls, and lush alpine lakes.',
    description: 'Journey to the pristine, untouched Jibhi-Tirthan Valley. Discover incredible local wooden chalets, deep green pine-clint gorges, crystal-clear trout-rich rivers, and the historic Jalori Pass trek.',
    tokenAmount: 1000,
    itinerary: [
      {
        day: 1,
        title: 'Departure from Delhi (Ex-Chandigarh)',
        desc: '07:00 PM: Board your comfortable AC vehicle from Delhi for an overnight journey to the mountains. 12:00 AM - 02:00 AM: Scheduled pickup available from Chandigarh. Tip: Carry a light blanket to stay cozy during the overnight ride. Dinner and breakfast will be served en route (at own expense).'
      },
      {
        day: 2,
        title: 'Arrival in Jibhi & Local Exploration',
        desc: 'Arrive in Jibhi by morning, check-in to your hotel/stay, freshen up, and relax. Head out to explore the hidden gems: Jibhi Waterfall and the enchanting Mini Thailand pool. Spend peaceful leisure time amidst luxury greenery and riverside charm. Return for a beautiful evening featuring Dinner, Music, and a cozy Bonfire. Overnight stay in Jibhi/Tirthan.'
      },
      {
        day: 3,
        title: 'Jalori Pass & Serolsar Lake Trek',
        desc: 'Enjoy a fresh breakfast at the hotel, then drive up to the scenic Jalori Pass to visit the temple. Embark on a stunning trek through pristine forests to Serolsar Lake or Raghupur Fort for panoramic Himalayan views. Return to the hotel in the evening for a lively DJ Music Night, Dinner, and interactive Group Games. Overnight stay in Jibhi/Tirthan.'
      },
      {
        day: 4,
        title: 'Choie Waterfall Trek & Departure',
        desc: 'Begin the day with a refreshing morning walk followed by breakfast. Check out from the hotel. Enjoy a short, rewarding 1.5 km trek to Choie Waterfall and unwind by the serene Tirthan River. In the evening, board your vehicle and depart for the return overnight journey to Delhi.'
      },
      {
        day: 5,
        title: 'Arrival back at Delhi',
        desc: 'Arrive back in Delhi by morning or noon (depending on traffic). Capture final moments with group pictures and selfies, bid farewell to your Trip Captain and driver, and head home.'
      }
    ],
    inclusions: [
      'Transport: Comfortable AC Bus / Traveller transportation',
      'Stays: 2-Night premium hotel/stay in Jibhi/Tirthan',
      'Meals: 2 Breakfasts and 2 Dinners included',
      'Treks: Serolsar Lake/Raghupur Fort, Choie Waterfall & Snow Point',
      'Perks: Fun-filled Music Night, DJ setup, and Bonfire',
      'Support: Dedicated Trip Coordinator throughout the journey'
    ],
    exclusions: [
      'Personal expenses of any kind',
      '5% GST applicable on the package cost',
      'Meals during travel time (en route) and lunches',
      'Entry tickets, monument fees, or adventure activity charges',
      'Anything not explicitly specified in the inclusions',
      'Travel insurance coverage for accidents, illness, or theft'
    ],
    thingsToCarry: [
      { category: 'Clothing & Footwear', items: 'Proper Trekking Shoes, Warm Clothes/Layers, Backpack.' },
      { category: 'Essentials', items: 'Water Bottle, Sunscreen, Personal Medication, Power Bank.' }
    ],
    termsAndConditions: [
      'Booking Process | Advance Deposit: Secure your slot by paying an advance amount of ₹1,000 per person.',
      'Booking Process | Balance Payment: The remaining balance must be cleared at the boarding point on the departure date.',
      'Booking Process | Trip Updates: Upon payment confirmation, you will be added to the official trip WhatsApp group. Boarding details are shared 1–2 days prior to departure.',
      'Cancellation Policy | More than 8 Days before Departure: 50% of the advance amount will be refunded.',
      'Cancellation Policy | 2 to 8 Days before Departure: 25% of the advance amount will be refunded.',
      'Cancellation Policy | Less than 2 Days before Departure: Strictly No Refund.',
      'Cancellation Policy | No-Shows / Early Check-outs: No refunds or cost adjustments for unavailed services.',
      'Cancellation Policy | Severe Weather / Force Majeure: If the trip is cancelled by us due to severe weather, environmental hazards, or political blockades, a Full Refund will be issued to the traveler.',
      'Advisory | Outstation Travelers: If you are coming from outside Delhi, we highly recommend scheduling your arrival before 5:00 PM on Day 1, and booking your return flights/trains after 2:00 PM on Day 5.',
      'Advisory | Age Limit: Our curated group trips are primarily designed for enthusiastic travelers aged 16 to 38 years.',
      'Advisory | Decorum & Safety: Smoking, drug use, or any form of intolerance/misbehavior is strictly prohibited on board. Management reserves the right to discontinue a traveler\'s journey immediately without refunds in case of misconduct.',
      'Advisory | Vehicle AC Policy: For passenger safety along sharp hill routes, the driver reserves the discretion to turn off vehicle systems (like music or air conditioning) at their discretion.'
    ],
    safetyLogistics: 'Highly skilled hill drivers strictly mapped to 12-seater high-clearance Force Travellers. Weather safeguards, oxygen cylinders, first-aid support, and backup vehicles are kept active.'
  },
  {
    id: 'p4',
    name: 'Kasol Kheerganga Trekking Package',
    duration: '4 Nights / 5 Days',
    badge: 'Hot Springs & Camping',
    priceText: 'Starting from ₹5,999/- PP',
    basePrice: 5999,
    detailedPrices: {
      quad: '₹5,999/- PP',
      triple: '₹6,499/- PP',
      double: '₹6,999/- PP'
    },
    imageUrl: 'https://i.imgur.com/XKF82ed.jpeg',
    category: 'himachal',
    tagline: 'Parvati river trails, cafes of Kasol, and high alpine hot sulfur springs under the stars.',
    description: 'A magical trek up the Parvati Valley. Unwind by the gushing river, hike through pristine pine forests, bathe in open natural hot sulfur water springs, and camp out on the majestic celestial meadows of Kheerganga.',
    tokenAmount: 1500,
    itinerary: [
      {
        day: 1,
        title: 'Departure from Delhi (Overnight Journey)',
        desc: 'Gather at the designated pickup point in Delhi in the evening. Board the comfortable AC Traveller/Bus and start your overnight journey toward the pristine Parvati Valley.'
      },
      {
        day: 2,
        title: 'Kasol Arrival, Parvati River & Chalal Café Hopping',
        desc: 'Reach Kasol by late morning. Check-in at the campsite, freshen up, and rest for a while. Head out for a scenic walk across the Chalal Bridge along the gushing Parvati River. Explore the vibrant Kasol Market and enjoy unique cuisines at the famous local Israeli cafés. By evening, return to the campsite to enjoy a lively Music & Bonfire session. Enjoy a delicious dinner followed by an overnight stay in premium camps.'
      },
      {
        day: 3,
        title: 'Drive to Barshaini & Trek to Kheerganga (Hot Springs & Camping)',
        desc: 'Wake up early to witness a stunning mountain morning. Enjoy your breakfast and gear up. Drive from Kasol to Barshaini (approx. 15 km), the starting point of the iconic Kheerganga Trek. Begin the trek through lush forests and waterfalls, reaching Kheerganga by around 04:00 PM. Explore the meadow, take a relaxing dip in the world-famous Natural Hot Water Springs, and soak in the Himalayan views. Gather at the campsite in the evening for a cozy Bonfire with fellow travelers, followed by dinner and stargazing. Overnight stay in camps.'
      },
      {
        day: 4,
        title: 'Trek Down to Barshaini, Manikaran Sahib Visit & Departure',
        desc: 'Wake up early to catch the first rays of the sun hitting the mighty peaks. Enjoy breakfast at the camp. Trek your way back down to Barshaini, then drive to visit the holy Gurudwara Manikaran Sahib and its hot springs. Spend some leisure time exploring any remaining cafés or tasting traditional local food in Kasol. In the evening, board your vehicle from Kasol for the overnight return journey to Delhi.'
      },
      {
        day: 5,
        title: 'Return Arrival at Delhi',
        desc: 'Reach Delhi in the morning with a bucketload of memories and endless pictures. Bid a warm goodbye to your fellow travelers and trip crew as the journey comes to an end.'
      }
    ],
    inclusions: [
      'Transport: End-to-End Transportation (Ex-Delhi to Delhi)',
      'Meals: 3 Breakfasts & 3 Dinners included',
      'Support: Dedicated Tour Coordinator throughout the trip',
      'Sightseeing: Complete local sightseeing as per itinerary',
      'Perks: Cozy Bonfire & Music sessions at the camps',
      'Transparency: Zero hidden charges'
    ],
    exclusions: [
      'Personal expenses of any kind',
      'Any Lunches or en route meals',
      'Any adventure activity fees or entry tickets',
      'Travel Insurance coverage',
      'Anything not explicitly mentioned in the inclusions'
    ],
    termsAndConditions: [
      'Cancellation Rule | More than 10 Days from Travel Date: 50% refund of the advance amount.',
      'Cancellation Rule | 5 to 10 Days from Travel Date: 25% refund of the advance amount.',
      'Cancellation Rule | Less than 5 Days from Travel Date: Strictly No Refund.',
      'Cancellation Rule | No-Shows & Early Checkouts: No refunds or adjustments will be made.',
      'Weather & Force Majeure Guidelines: For cancellations due to political unrest, extreme weather, unsafe road conditions, landslide blockades, or local guidelines, no cash refunds will be processed. A Full Credit Note valid for any future travel with Travelons.in will be issued.',
      'Payment Term: Advance token is non-refundable. Full remaining payment must be cleared at the boarding point on departure date.',
      'Boarding Rule: Valid Government ID verification is mandatory before boarding.',
      'Hill Driving AC Policy: Air conditioning will be switched off in hilly terrains. Cruising with the windows down keeps the mountain breeze crisp and ensures ultimate vehicle traction safety.',
      'Decorum & Safety: Drinking and smoking are strictly prohibited during transport. Misconduct or rowdy behavior will not be tolerated.'
    ],
    safetyLogistics: 'Coordinated with local guides and certified mountain coordinators. Equipped with first-aid travel kits, temperature controls, and emergency support.'
  },
  {
    id: 'p5',
    name: 'Mcleodganj Triund Trekking Package',
    duration: '4 Nights / 5 Days',
    badge: 'Solo-Female Safe (40:60 Ratio)',
    priceText: 'Starting from ₹6,499/- PP',
    basePrice: 6499,
    detailedPrices: {
      quad: '₹6,499/- PP',
      triple: '₹6,999/- PP',
      double: '₹7,499/- PP'
    },
    imageUrl: 'https://i.imgur.com/aZCoKsU.jpeg',
    category: 'himachal',
    tagline: 'Panoramic views of the snow-sheathed Dhauladhar ridge with verified safe gender ratios.',
    description: 'A beautiful, culturally rich adventure tailored for inclusive groups. Walk through colorful Tibetan prayer flags, ancient monasteries, spiritual pine ridges, and a secure camp-out on the Triund ridge.',
    tokenAmount: 2000,
    itinerary: [
      {
        day: 1,
        title: 'Day 0: Departure to Mcleodganj',
        desc: 'Evening: Group assembles at the designated pickup point. Meet your Trip Leader(s) for a quick briefing session, board the vehicle, and head out for the overnight journey. Note: En route halt for dinner (at own expense).'
      },
      {
        day: 2,
        title: 'Day 1: Mcleodganj Local Sightseeing',
        desc: 'Morning arrival in Mcleodganj. Check-in to the hotel, freshen up, and relax. Sightseeing: Visit Bhagsunag Waterfall, Namgyal Monastery, and the famous Shiva Café. Return to the hotel for an evening briefing session, delicious dinner, and overnight stay.'
      },
      {
        day: 3,
        title: 'Day 2: The Iconic Triund Trek (9 KM)',
        desc: 'Wake up, freshen up, and enjoy breakfast at the hotel. Drive to Dharamkot and begin your exciting 9 km trek to Triund Top. Reach the summit and experience a peaceful evening away from the city\'s hustle, witnessing the majestic Dhauladhar ranges. Dinner and overnight stay in Raw Alpine Camps under the stars.'
      },
      {
        day: 4,
        title: 'Day 3: Trek Down, Dharamshala Exploration & Departure',
        desc: 'Wake up early to catch the breathtaking first rays of the sun hitting the Triund Peak. Check out from the camps and trek back down to Dharamkot. Continue to explore Dharamshala (local markets/stadium), and later in the evening, board your vehicle for the return journey to Delhi.'
      },
      {
        day: 5,
        title: 'Day 4: Arrival at Delhi',
        desc: 'Arrive back in Delhi in the morning with wonderful memories and fresh friendships.'
      }
    ],
    inclusions: [
      'Transport: Complete end-to-end transportation',
      'Stays: 1 Night in Mcleodganj Hotel + 1 Night in Raw Alpine Camps (Triund Top)',
      'Meals: Total 4 Meals (Day 1: Dinner | Day 2: Breakfast & Dinner | Day 3: Breakfast)',
      'Support: Dedicated Tour Guide & Trip Leader throughout the journey',
      'Taxes: Driver night charges, toll taxes, and all parking fees covered'
    ],
    exclusions: [
      'Personal expenses of any kind',
      'Return expenses if you cancel your trip midway',
      'Adventure activities (Rafting, Paragliding, Skiing)',
      'En route travel meals & lunches'
    ],
    thingsToCarry: [
      { category: 'Clothing', items: 'Heavy Jacket, Jeans, Trousers, Shawl, Scarf, Beanie Cap, Extra Socks.' },
      { category: 'Footwear', items: 'Sturdy Trekking Shoes & Comfortable Slippers.' },
      { category: 'Documents & Gear', items: 'Original Government ID Proof, Passport Photo, Personal Medicines, Mask, Phone Charger, Power Bank, Headphones.' }
    ],
    faqs: [
      {
        question: 'What is Triund famous for?',
        answer: 'Triund is famous for the spectacular panoramic views of the Dhauladhar ranges of the Himalayas and the picturesque Kangra Valley. It is also known as the \'22 Curves\' due to the 22 sharp turns in the last few kilometers of the trek.'
      },
      {
        question: 'What is the difficulty level of the Triund trek?',
        answer: 'The trek is moderate and perfectly suited for everyone, ranging from enthusiastic beginners to seasoned hikers.'
      },
      {
        question: 'Is it safe for solo female travelers?',
        answer: 'Absolutely. Ensuring the safety of every single traveler is our utmost responsibility. Our average group batch maintaining a healthy 40:60 Girl-to-Boy ratio. If there are no female co-travelers on a specific batch, we notify you beforehand.'
      },
      {
        question: 'Do you provide toilet tents at the top?',
        answer: 'Yes, we provide dedicated toilet tents at the Triund campsite. (Please note there is no provision for bathing/baths on the trek top).'
      },
      {
        question: 'Is accommodation for men and women separate?',
        answer: 'Yes, men and women do not share tents unless they explicitly request to stay together (couples/friends).'
      },
      {
        question: 'How is the mobile network connectivity on the trek?',
        answer: 'Mcleodganj and Dharamshala have strong connectivity. Beyond that, the network and internet on the Triund trail become highly unreliable.'
      }
    ],
    termsAndConditions: [
      'Payment Terms | Full remaining payment must be cleared at the time of boarding. Pending payments may lead to immediate cancellation without a refund of the booking amount.',
      'Seating Policy | Seating arrangements in the traveller are handled entirely by our management to ensure couples and groups get adjacent seats. Complying with this setup is mandatory.',
      'Cancellation Fees Schedule | 15 Days or more prior to start date: 50% of the total trip cost will be charged.',
      'Cancellation Fees Schedule | 7 to 15 Days prior to start date: 75% of the total trip cost will be charged.',
      'Cancellation Fees Schedule | 0 to 7 Days prior to start date: 100% of the total trip cost will be charged (Strictly No Refund).',
      'Logistics Notice | Travelons.in is not liable for program delays or alterations caused by road construction, traffic, or sudden bad weather.'
    ],
    safetyLogistics: 'Dedicated female-onboard facilitators and active check point logging. Zero-tolerance policy strictly audited for solo travelers.'
  },
  {
    id: 'p6',
    name: 'Extreme Winter Spiti Expedition',
    duration: '6 Nights / 7 Days',
    badge: 'Harshest High Alpine Adventure',
    priceText: 'Starting from ₹15,999/- PP + 5% GST',
    basePrice: 15999,
    detailedPrices: {
      quad: '₹16,000/- PP + 5% GST',
      triple: '₹17,000/- PP + 5% GST',
      double: '₹19,000/- PP + 5% GST'
    },
    gstNote: true,
    imageUrl: 'https://i.imgur.com/98avYXQ.jpeg',
    category: 'himachal',
    tagline: 'White-out landscapes, frozen rivers, high passes, and ancient monasteries at -15°C.',
    description: 'An ultimate winter adrenaline crossing. Journey deep into the frozen Spiti Valley, cross high frozen suspension bridges, admire towering icy rivers, and witness standard old Buddhist temples. Assembly details: Delhi ISBT Kashmiri Gate between 08:00 PM to 09:00 PM, or Chandigarh Sector 43 HP Petrol Pump between 01:00 AM to 02:00 AM.',
    tokenAmount: 6000,
    itinerary: [
      {
        day: 1,
        title: 'Reach Shimla | Transfer to Sangla',
        desc: 'Arrive in Shimla via Volvo morning transfer. Board the local Spiti-optimized vehicle and drive through stunning landscapes to Sangla. Check into your stay at Sangla, freshen up, and unwind. Dinner and a night briefing session followed by an overnight stay.'
      },
      {
        day: 2,
        title: 'Chitkul Exploration, Khab Sangam & Drive to Tabo',
        desc: 'Wake up early, enjoy breakfast, and head out to explore Chitkul (the last Indian village). Continue the journey toward Tabo, crossing the magnificent Khab Sangam (confluence of Spiti and Satluj rivers). Arrive in Tabo, check into your hotel/homestay, followed by dinner and a night briefing.'
      },
      {
        day: 3,
        title: 'Tabo Monasteries & Caves to Kaza via Dhankar',
        desc: 'Morning breakfast, followed by a visit to the 1,000-year-old Tabo Monastery and the ancient meditation caves. Enjoy a peaceful meditation session. Drive to Dhankar Monastery, the historic ancient capital of Spiti valley. Reach Kaza by evening, check into your homestay, and enjoy dinner. Overnight stay in Kaza.'
      },
      {
        day: 4,
        title: 'World\'s Highest Points (Hikkim, Komic & Langza)',
        desc: 'Post breakfast, head toward Hikkim to visit the highest post office in the world (send a postcard to your loved ones!). Next, visit Komic (the highest village in the world connected by a motorable road) and Langza, famous as the fossil village of India. Return to Kaza for dinner and an overnight stay.'
      },
      {
        day: 5,
        title: 'Key Monastery & Iconic Chicham Bridge',
        desc: 'Breakfast at the homestay, then head out to witness the grand Key Monastery, a primary center of Buddhist learning. Drive across the spectacular Chicham Bridge, the highest suspension bridge in Asia. Return to Kaza for self-exploration of the local Kaza market. Dinner and overnight stay in Kaza.'
      },
      {
        day: 6,
        title: 'Kaza to Kalpa via Gue & Nako',
        desc: 'Pack your bags after breakfast and begin the scenic drive toward Kalpa. En route, visit the unique Gue Monastery (mummy village) and the freezing Nako Lake. Arrive in Kalpa, check into your hotel, and relax. Dinner and overnight stay.'
      },
      {
        day: 7,
        title: 'Suicide Point Exploration & Shimla to Delhi Transfer',
        desc: 'Morning exploration of the thrilling Suicide Point in Kalpa. Post breakfast, catch your transfer back to Shimla. Board the evening Volvo from Shimla for your return overnight journey to Delhi.'
      }
    ],
    inclusions: [
      'Stays: 1N Sangla, 1N Tabo, 3N Kaza, 1N Kalpa (Premium homestays & hotels)',
      'Meals: 6 Breakfasts & 6 Dinners included',
      'Volvo: Delhi - Shimla - Delhi Both Side Volvo transfers',
      'Local Trans: Complete sightseeing via optimized Traveller',
      'Support: Professional Trip Coordinator & 24/7 Helpline',
      'Taxes: Fuel, driver night allowances, tolls, and parking'
    ],
    exclusions: [
      '5% GST applicable over package cost',
      'Expenses of 4x4 vehicles if required due to heavy snow',
      'Extra drinks, food, tea, snacks, or laundry',
      'Entry tickets for any monuments or sightseeing spots',
      'Medical expenses (beyond basic first aid) & Travel Insurance',
      'Costs due to landslides, road blocks, or calamities'
    ],
    thingsToCarry: [
      { category: 'Luggage & Power', items: 'Rucksack/Trolley bag (50-60L), Power banks (essential due to cold battery drain), Torch, Water Bottle.' },
      { category: 'Footwear', items: 'Snow boots/Waterproof trekking boots, comfortable slippers, thick woolen socks.' },
      { category: 'Clothing', items: 'Heavy winter jacket (rated for -15°C), thermal innerwear, woolen fleece, winter trek pants, neck warmer, woolen cap/beanie, waterproof gloves.' },
      { category: 'Medical Kit', items: 'Personal medicines, cold/fever tablets, ORS/Glucose, instant pain relief spray, petroleum jelly, and cold creams.' }
    ],
    termsAndConditions: [
      'Harshest Terrain Warning | Winter in Spiti is an extreme adventure with temperatures dropping below -10°C to -15°C. Travelers must prepare to leave city luxuries behind and embrace local homestay simplicity.',
      'Deposit Policy | Secure your booking by depositing an advance amount of ₹6,000 per person.',
      'Refund Policy | The booking advance of ₹6,000 per person is completely non-refundable and non-transferable under any circumstances.',
      'Balance Payment | The remaining balance must be cleared strictly before boarding the vehicle on Day 1.',
      'Pickup Coordinates | Delhi Assembly: ISBT Kashmiri Gate between 08:00 PM to 09:00 PM. Chandigarh Pickup: Sector 43, HP Petrol Pump between 01:00 AM to 02:00 AM.',
      'Boarding Rule | Valid Government ID verification is compulsory before boarding. Use of narcotics, banned substances, or rowdy behavior will result in immediate eviction from the trip without any refunds.',
      'Hill Driving AC Policy | Air conditioning will remain switched off throughout the hilly terrain for vehicle safety and seamless power performance.',
      'Vehicle Discretion | In the event of an unpredictable transport breakdown on remote terrain, travelers are expected to cooperate while repairs are handled.'
    ],
    safetyLogistics: 'Oxygen cylinders, heavy tandoor heating, local winter-grade travel coordinates, first-aid medical kits, and certified extreme-weather drivers.'
  },
  {
    id: 'p7',
    name: 'Summer Spiti Road Trip Expedition',
    duration: '6 Nights / 7 Days',
    badge: 'Atal Tunnel & Chandratal',
    priceText: 'Starting from ₹15,999/- PP',
    basePrice: 15999,
    detailedPrices: {
      quad: '₹15,999/- PP',
      triple: '₹16,999/- PP',
      double: '₹17,999/- PP'
    },
    imageUrl: 'https://i.imgur.com/pYHc7qi.jpeg',
    category: 'himachal',
    tagline: 'High-altitude Kunzum Pass, scenic Kaza wonders, and raw camping by the glass-calm Chandra Taal.',
    description: 'An iconic high-altitude mountain road-trip. Cross the engineering marvel—Atal Tunnel, scale the dizzying heights of Kunzum La (14,931 ft), send a postcard from Hikkim, stand before the giant Langza Buddha, and camp inside premium Swiss tents by the sacred crescent Moon Lake.',
    tokenAmount: 5000,
    itinerary: [
      {
        day: 1,
        title: 'Departure to Manali (Overnight Journey)',
        desc: 'Group assembles at the designated pickup point. Meet your Team Captains for a quick tour briefing session. Board the vehicle and commence your scenic overnight journey to Manali.'
      },
      {
        day: 2,
        title: 'Manali Arrival & Self Exploration',
        desc: 'Reach Manali by morning and check in to the hotel. Take some rest, then spend your leisure day exploring what interests you: Visit Mall Road, Hadimba Temple, and the rustic cafes of Old Manali, or take a hot water dip at Vashisht Temple. Return to the hotel by evening. Dinner will be served followed by a next-day briefing.'
      },
      {
        day: 3,
        title: 'Manali to Kaza via Atal Tunnel & Kunzum La',
        desc: 'Early morning breakfast. Start the breathtaking drive to the Valley of the Gods - Lahaul & Spiti. Cross the engineering marvel—Atal Tunnel—and watch the lush green terrain instantly shift into brown arid mountains. Traverse the mighty Kunzum La Pass at 14,931 ft, the grand gateway to Spiti Valley. Reach Kaza by evening. Enjoy dinner and an overnight stay at your Kaza property.'
      },
      {
        day: 4,
        title: 'Spiti Wonders (Key Monastery, Chicham Bridge & Highest Villages)',
        desc: 'Post breakfast, head out for a full day of Spiti Valley sightseeing: Key Monastery (the most scenic monastery in the valley), Chicham Bridge (the highest suspension bridge in Asia), Hikkim (World\'s Highest Post Office), Komic (highest village connected by motorable road), and Langza (famous for the Buddha Statue). Return to Kaza by evening for dinner and overnight stay.'
      },
      {
        day: 5,
        title: 'Kaza to Chandratal Lake Camping',
        desc: 'After breakfast, trace your steps back to witness a true Spitian wonder—Chandra Taal Lake (The Moon Lake). Experience a perfect combination of raw adventure and untouched mountain scenery at the lake. Later, check into the Swiss Campsite near Chandratal. Enjoy dinner and an overnight stay in tents under a brilliant sky of a million stars.'
      },
      {
        day: 6,
        title: 'Chandratal to Manali | Departure to Delhi',
        desc: 'Commence the return drive along the rugged Manali-Kaza road, soaking in final mountain landscapes. Reach Manali by afternoon. Relax at a local cafe during leisure hours. In the evening, board your vehicle for the return overnight journey to Delhi/Chandigarh.'
      },
      {
        day: 7,
        title: 'Arrival at Delhi',
        desc: 'Arrive back in Delhi/Chandigarh in the morning with lifelong memories and amazing pictures.'
      }
    ],
    inclusions: [
      'Transport: Entire travel and transfers as per the itinerary',
      'Stays: 4 Nights Stay (1N Manali, 2N Kaza, 1N Chandratal Swiss Tents)',
      'Meals: Complete Meal Plan consisting of 4 Breakfasts + 4 Dinners',
      'Safety: 24/7 Oxygen Cylinder on-board for emergency altitude use',
      'Support: Dedicated Team Captain guiding you throughout the trip',
      'Permits: All inner-line permits required for the circuit'
    ],
    exclusions: [
      'Any food, beverages, or lunches not listed in the plan',
      'Cost escalation due to natural calamities or forced roadblocks',
      'Entry tickets for monuments, photography fees, or personal tips',
      'Personal expenses like laundry, mineral water, or room service',
      'Anything not explicitly mentioned in the inclusion column'
    ],
    termsAndConditions: [
      'Cancellation Policy | More than 10 Days from Travel Date: 50% refund of the advance amount.',
      'Cancellation Policy | 5 to 10 Days from Travel Date: 25% refund of the advance amount.',
      'Cancellation Policy | Less than 5 Days from Travel Date: Strictly No Refund.',
      'Weather & Force Majeure Guidelines | In the case of extreme weather, landslide blockades, or political unrest, a full transfer credit note will be issued valid for future tours.',
      'Payment Rules | Advance token is non-refundable. The final remaining balance must be cleared strictly at the time of boarding.',
      'Hill Driving AC Policy | Air conditioning will be switched off in hilly terrains for safety and maximum vehicle power.',
      'Safety Check | 24/7 Oxygen Cylinders are maintained inside our vehicles for AMS/high-altitude emergencies.'
    ],
    safetyLogistics: 'Onboard medical first aid, heavy oxygen supply units, experienced Himalayan drivers, and continuous track logging for extreme altitude safety.'
  },

  // Uttarakhand
  {
    id: 'p8',
    name: 'Chopta Tungnath Chandrashila Trek',
    duration: '4 Nights / 5 Days',
    badge: 'World\'s Highest Shiva Temple',
    priceText: 'Starting from ₹5,999/- PP',
    basePrice: 5999,
    detailedPrices: {
      quad: '₹5,999/- PP',
      triple: '₹6,499/- PP',
      double: '₹6,999/- PP'
    },
    imageUrl: 'https://i.imgur.com/pgZS16p.jpeg',
    category: 'uttarakhand',
    tagline: 'Scale Tungnath, the world\'s highest Shiva temple, and capture a 360° theater of the snowy Himalayas.',
    description: 'Breathe the pure spiritual force of the raw Garhwal Himalayas. Settle into scenic alpine campsites in Chopta (the "Mini Switzerland of India"), trek up to the ancient thousand-year-old temple, stand atop the dramatic Chandrashila Summit (13,100 ft), and camp next to the legendary emerald Deoria Tal Lake.',
    tokenAmount: 2000,
    itinerary: [
      {
        day: 1,
        title: 'Departure from Delhi to Chopta',
        desc: '07:00 PM: Assemble at the designated pickup point in Delhi. Meet your Trip Leader(s) and fellow travelers for a short briefing. 12:00 AM - 02:00 AM: Scheduled pickup available from Chandigarh. Note: En route halt for dinner (at own expense).'
      },
      {
        day: 2,
        title: 'Devprayag, Reach Chopta & Nature Trail',
        desc: 'Morning arrival at Devprayag to witness the sacred holy confluence of the Alaknanda & Bhagirathi Rivers. Breakfast stop at Srinagar (Uttarakhand). Visit Dhari Devi Temple (if time permits). Continue the drive to Chopta, arriving by afternoon. Check in to a scenic alpine campsite with stunning mountain views. Enjoy a fresh lunch followed by an acclimating forest trek with your Trip Captain. Evening snacks, cozy Bonfire session, and dinner under a sky full of stars.'
      },
      {
        day: 3,
        title: 'World\'s Highest Shiva Temple & Chandrashila Peak',
        desc: 'Wake up early to catch a stunning mountain sunrise, followed by breakfast. Drive to the trek starting point and begin your ascent to Tungnath Temple (the world\'s highest Shiva temple). Continue the trek to the magnificent Chandrashila Peak for a breathtaking 360° panoramic view of the snow-clad Himalayas. Return to Chopta by evening for hot snacks, an interactive Bonfire session, and a delicious dinner.'
      },
      {
        day: 4,
        title: 'Deoria Tal Emerald Lake Trek & Rishikesh Cafe Hopping',
        desc: 'Post breakfast, check out from the campsite and drive to Sari Village (30-minute drive). Begin the beautiful trek to the crystal-clear Deoria Tal Lake. Trek back down to Sari Village for lunch. Start the return journey toward Delhi, making an evening halt at Rishikesh to explore the local markets, go café hopping, and visit the serene Ganga Ghats (if time permits). Board the vehicle for the overnight return road journey.'
      },
      {
        day: 5,
        title: 'Arrival back at Delhi',
        desc: 'Arrive in Delhi by morning or noon (depending on highway traffic). Capture final moments with group pictures and selfies, bid warm farewells to the crew, and head home.'
      }
    ],
    inclusions: [
      'Transport: Complete Both-Side Transfers (Delhi-Chopta-Delhi)',
      'Stays: 2 Nights accommodation in scenic Chopta Campsites',
      'Meals: 2 Breakfasts and 2 Dinners (Starts from Chopta Day 2 Dinner)',
      'Support: Professional Coordinator assistance throughout the trip',
      'Taxes: All applicable state taxes, tolls, and driver allowances covered'
    ],
    exclusions: [
      'Meals during the highway travel (on the way)',
      'Personal lunches, snow/water activity charges',
      'Travel Insurance coverage',
      'Costs due to natural calamities like landslides or roadblocks',
      'Personal expenses (Tips, entry tickets, camera charges, laundry)'
    ],
    thingsToCarry: [
      { category: 'Bags & wear', items: 'Rucksack (50-60L), Sturdy Trekking Shoes, Trek Pants & Trousers.' },
      { category: 'Warm Layers', items: 'Fleece/Woolen clothes, Thermal innerwear, Gloves, Woolen Cap, Neck Cover.' },
      { category: 'Gear & Care', items: 'Sunglasses, Raincoat, Water bottle, Sunscreen, Power Bank, Personal Medical Kit, Valid ID Proof.' }
    ],
    termsAndConditions: [
      'Booking Confirmation | Upon successful payment, a formal booking confirmation receipt is generated and instantly shared with the customer via Email and WhatsApp.',
      'Payment | Balance payments are accepted strictly via Cash, UPI, or Direct Bank Transfer at boarding.',
      'Cancellation Policy | More than 20 Days before Departure: Refund processed with a 10% structural cancellation charge.',
      'Cancellation Policy | 10 to 20 Days before Departure: Refund processed with a 50% structural cancellation charge.',
      'Cancellation Policy | Less than 10 Days before Departure: Strictly No Refund.',
      'Easy Transfer Clause | If you cannot attend, Travelons.in allows you to transfer your booked seat (same batch & date) to a friend or family member at no extra charge.',
      'Refund Delivery | Approved refunds are issued in the form of an official Travelons Trip Voucher valid for 1 Year. The voucher setup is sent via email within 7 working days.',
      'Key Guideline | Pure Vegetarian Food: To respect the local pilgrimage routes, only nutritious vegetarian meals are served throughout the trip.',
      'Key Guideline | Mid-Trip Departures: If a traveler skips any part of the itinerary or leaves the group mid-trip, the package is officially marked as complete; further stays/travel will be at their own expense.',
      'Key Guideline | Strict Decorum: The consumption of alcohol or any intoxicating substances is strictly prohibited. Violation leads to immediate eviction from the trip without refunds.'
    ],
    safetyLogistics: 'Pure vegetarian meal planning, certified mountain trip coordinators, first-aid medical gear, emergency transit routes, and active wildlife permits.'
  },
  {
    id: 'p9',
    name: 'Kedarnath Dham Spiritual Yatra',
    duration: '4 Nights / 5 Days',
    badge: 'Sacred Himalayan Yatra',
    priceText: 'Starting from ₹7,499/- PP',
    basePrice: 7499,
    detailedPrices: {
      quad: '₹7,499/- PP',
      triple: '₹7,999/- PP',
      double: '₹8,499/- PP'
    },
    imageUrl: 'https://i.imgur.com/7TGb9OU.jpeg',
    category: 'uttarakhand',
    tagline: 'Connect deeper with divinity on this epic pilgrimage through rocky valleys & snowy peaks.',
    description: 'The ultimate sacred journey of Uttarakhand. Rest easy as we take care of biometric registrations, premium local transports, mountain guides, and verified wooden stay cabins right next to the holy temple. Assembly Point: Akshardham Metro Station / Mayur Vihar Phase-1 Metro Station, Delhi. Departure Time: 10:00 PM.',
    tokenAmount: 3000,
    itinerary: [
      {
        day: 1,
        title: 'Departure from Delhi',
        desc: 'Board your designated Cab / Tempo Traveller from Delhi late in the evening. Meet your Team Captain, complete a quick passenger verification, and begin the overnight journey to Guptkashi.'
      },
      {
        day: 2,
        title: 'Scenic Confluences & Arrival at Guptkashi',
        desc: 'En route to Guptkashi, cross the picturesque towns of Devprayag and Rudraprayag. Witness the magnificent holy confluences: first, the Alaknanda & Bhagirathi river confluence, followed by the Alaknanda & Mandakini river confluence. Arrive in Guptkashi by afternoon. Check into your hotel, relax, and enjoy a delicious dinner. Overnight stay in Guptkashi.'
      },
      {
        day: 3,
        title: 'Gaurikund Transfer & Trek to Kedarnath Shrine',
        desc: 'Post breakfast, proceed towards Gaurikund via local transport to start your sacred trek. Begin the uphill foot trek to Kedarnath Dham. En route, witness numerous beautiful waterfalls and misty valley views. Rest stops are available along the trail where you can try local Buransh (Rhododendron) juice. Reach the Kedarnath top by evening. Check into your allotted accommodation (Camp/Dormitory/Hotel). Dinner and overnight stay at Kedarnath Top.'
      },
      {
        day: 4,
        title: 'Morning Darshan, Trek Down & Return to Guptkashi',
        desc: 'Wake up early morning and head to the Kedarnath Shrine for holy Darshan and morning rituals. After seeking blessings, have breakfast and begin your descent back down to Gaurikund. Board the vehicle and depart back to Guptkashi. Check into your hotel for dinner and an overnight stay. Note: If you reach the Sitapur parking area early, please cooperate and wait for fellow travelers to assemble.'
      },
      {
        day: 5,
        title: 'Return Journey to Delhi / Haridwar',
        desc: 'Wake up, freshen up, and enjoy breakfast at the hotel. Checkout and commence the return drive. En-route stops at Devprayag or the serene Rishikesh Ganga Aarti (subject to timing and traffic flow). Arrive back at Haridwar / Delhi by late evening or midnight with a soul-stirring spiritual experience.'
      }
    ],
    inclusions: [
      'Transport: End-to-end pickup and drops from Delhi / Haridwar',
      'Vehicles: Dedicated Bus, Tempo Traveller, or Cab transfers',
      'Stays: 3 Nights accommodation (2N Guptkashi + 1N Kedarnath Top)',
      'Meals: Total of 6 nutritious meals (3 Breakfasts + 3 Dinners)',
      'Yatra Perks: Official Yatra Registration & Team Captain assistance',
      'Support: 24/7 central customer helpline support'
    ],
    exclusions: [
      '5% GST extra over the package cost',
      'Personal lunches and en-route travel meals',
      'Personal travel, health, or accidental insurance policies',
      'Entry tickets, camera fees, or local monument charges',
      'Pony, Palki, or Helicopter tickets for the trek trail',
      'Costs arising due to landslides, roadblocks, or strikes'
    ],
    termsAndConditions: [
      'Important Room Note | Double and Triple sharing room options are strictly applicable for hotel stays in Guptkashi/Phata only. Accommodations at the Kedarnath Top are managed on a group/sharing basis (Camps/Dormitories/Hotels) depending on local availability.',
      'Seat Reservation | Secure your booking by paying a token advance of ₹3,000 per person.',
      'Balance Clearance | The remaining balance must be cleared strictly via Cash or UPI at the time of pickup before boarding.',
      'Booking Terms | Any flight or train bookings handled through us require 100% upfront advance clearance.',
      'Mandatory Onboarding Verification | post-booking please provide: Valid Government Issued ID (Aadhaar / Driver\'s License), Personal & Guardian Emergency Contact Numbers, Active Personal Email ID.',
      'Cancellation Policy | The token deposit of ₹3,000 is strictly non-refundable under any circumstances. If canceled, it can be adjusted as credit toward your next trip with us.',
      'Cancellation Policy | Cancellations before 15 Days of Travel: Subject to a 50% structural cancellation charge.',
      'Cancellation Policy | Rescheduling Requests before 15 Days: Subject to a 25% structural rescheduling fee.',
      'Cancellation Policy | No-Shows or Mid-Trip Departures: No partial or full cash refunds are applicable for unused inclusions or skipped parts of the itinerary.',
      'Community Decorum | Drinking alcohol and smoking are strictly prohibited during transport and on pilgrimage routes for the safety and comfort of fellow passengers.',
      'Disruptive Behavior | Any acts of misconduct, indiscipline, or disruption will lead to immediate eviction from the tour group without any refunds.',
      'Force Majeure | Travelons is not liable for program modifications, route delays, or extra costs directly or indirectly caused by natural hazards, accidents, machine breakdowns, sudden weather turns, landslides, or political closures.'
    ],
    safetyLogistics: 'Mandatory medical clearances monitored by trek leaders. Emergency mules/helicopter assistance contacts ready with professional local guides.'
  },
  {
    id: 'p10',
    name: 'Kedarkantha Winter Summit Trek',
    duration: '4 Nights / 5 Days',
    badge: 'High-Altitude Alpine Adventure',
    priceText: 'Starting from ₹5,999/- PP',
    basePrice: 5999,
    detailedPrices: {
      quad: '₹5,999/- PP'
    },
    imageUrl: 'https://i.imgur.com/KAmWDxm.jpeg',
    images: [
      'https://i.imgur.com/KAmWDxm.jpeg',
      'https://i.imgur.com/0t6OcTp.jpeg',
      'https://i.imgur.com/pybfncH.jpeg'
    ],
    category: 'uttarakhand',
    tagline: 'Scale the majestic snow-laden peak at 12,500 ft for a legendary Himalayan sunrise.',
    description: 'The absolute benchmark for snow trekking in India. Settle in base camps at Sankri and climb towering snow ridges to Juda Ka Talab and base camp, with microspikes and gaiters for a secure night summit push to 12,500 ft. Pickup Point: Dehradun Railway Station at 07:00 AM on Day 1. Drop Point: Dehradun Railway Station by 11:00 PM on Day 5.',
    tokenAmount: 3000,
    itinerary: [
      {
        day: 1,
        title: 'Dehradun to Sankri Base Village',
        desc: 'Altitude: 6,300 ft / 1,920 m | Drive: 198 km (~8-9 Hours). Board your transfer from Dehradun and drive along the scenic Yamuna river curves, surrounded by massive pine and deodar forests. Reach the beautiful base village of Sankri by 05:00 PM. Check into your hotel/homestay, freshen up, and explore local culture. Dinner and overnight stay in Sankri.'
      },
      {
        day: 2,
        title: 'Sankri to Juda Ka Talab (Frozen Lake Camp)',
        desc: 'Altitude: 9,100 ft | Trek: 3.5 km (~4-5 Hours). Post breakfast, begin your mesmerizing trek through dense forests covered in a carpet of maple leaves, oak, and birch trees. Arrive at the iconic Juda-Ka-Talab, a high-altitude lake known for its pristine beauty. Set up camp near the lake. Enjoy hot nutritious meals and sleep in alpine tents in nature’s lap.'
      },
      {
        day: 3,
        title: 'Juda Ka Talab to Kedarkantha Base Camp',
        desc: 'Altitude: 11,250 ft | Trek: 3 km (~4-5 Hours). Trek upwards from Juda-Ka-Talab through crisp pine forests that open up into massive snow-covered Himalayan meadows. Witness the jaw-dropping panoramic views of legendary peaks including Swargarohini, Kala Nag, and Bandarpoonch. Reach the Base Camp. Enjoy a spectacular alpine sunset followed by dinner and a night briefing. Stay in tents.'
      },
      {
        day: 4,
        title: 'Kedarkantha Base to Summit Climb & Descend',
        desc: 'Altitude Peak: 12,500 ft | Night Trek: 3.5 km (~3-4 Hours to Summit). Wake up past midnight for the thrilling summit push. Microspikes and gaiters will be provided for a secure night climb on the snow track. Reach the Kedarkantha Summit at sunrise for a magical 360° view of the roaring Himalayas. After celebrating at the peak, descend back to Base Camp for a healthy breakfast, and continue trekking down to the Juda-Ka-Talab campsite for dinner and stargazing under the open sky.'
      },
      {
        day: 5,
        title: 'Juda Ka Talab to Sankri | Drive back to Dehradun',
        desc: 'Trek back from Juda-Ka-Talab to Sankri via the scenic Hargaon trail (~3 hours trek). Upon reaching Sankri, board your return transport for an 8-9 hour scenic drive back to Dehradun. Arrive at Dehradun Railway Station by 11:00 PM to catch your return trains/buses with lifelong memories.'
      }
    ],
    inclusions: [
      'Transport: Complete Dehradun to Sankri and return transfers',
      'Meals: All nutritious veg meals (Day 1 Dinner to Day 5 Breakfast)',
      'Gear: High-quality triple-sharing living tents, sleeping bags, mats',
      'Safety: Microspikes, gaiters, medical kits, oxygen cylinders, ropes',
      'Crew: Certified Trek Leader, professional guides, cook, support staff',
      'Permits: All mandatory camping and forest permit fees'
    ],
    exclusions: [
      'Food during the road journey (Dehradun to Sankri & vice versa)',
      'Personal clothing (Jackets, waterproof shoes, gloves, etc.)',
      'Personal trek gears (Trek poles, ponchos, headlights)',
      'Backpack offloading charges & personal porter/mule expenses',
      'Government taxes, trek and travel insurance policies',
      'Anything not explicitly mentioned in the inclusion block'
    ],
    thingsToCarry: [
      { category: 'Bags & Wear', items: 'Rucksack (50-60L), Trekking/Hiking Shoes, Trek Pants, Trousers, Raincoat.' },
      { category: 'Warm Layers', items: 'Fleece sweaters, Thermal innerwear, Heavy Winter Jacket, thick gloves, Beanie, Neck cover.' },
      { category: 'Hygiene & Tech', items: 'Personal toiletries kit, toilet paper, wet wipes, sunglasses, sunscreen, power banks, water bottle, valid ID Proof.' }
    ],
    termsAndConditions: [
      'Backpack Offloading Guidelines | Trekkers wishing to offload their rucksacks to a mule/porter can do so at the base. Fee: Ranges between ₹300 to ₹500 per day, per bag (paid directly on the spot). Bags must weigh under 11 kg and must have a waterproof rain cover. Strictly no suitcases, trolleys, or duffel bags allowed.',
      'Booking Confirmation | Successful booking generates an immediate confirmation receipt delivered promptly via Email and WhatsApp.',
      'Payment Mode | Remaining balances must be cleared strictly via Cash, UPI, or Direct Bank Transfer at pickup—no website or card payments accepted.',
      'Cancellation & Refund Fees | More than 20 Days before Trek Start: Refund processed with a 10% cancellation charge.',
      'Cancellation & Refund Fees | 10 to 20 Days before Trek Start: Refund processed with a 50% cancellation charge.',
      'Cancellation & Refund Fees | Less than 10 Days before Trek Start / No-Show: Strictly No Refund.',
      'Friend Transfer | If you must cancel within the 10-day window, Travelons allows you to transfer your exact slot (same batch and date) to a friend at no extra penalty.',
      'Refund Delivery | Approved refunds are instantly converted into a Travelons Trip Voucher valid for 1 Year, emailed within 7 working days.',
      'Mandatory Guidelines | Pure Vegetarian Regime: To maintain high fitness and digestive standards on high-altitude terrains, only vegetarian food is served from Sankri to Sankri.',
      'Itinerary Discipline | Skipping any part of the route or leaving mid-trip marks your package complete. Any further arrangements will be handled at the guest’s own expense.',
      'Zero Substance Tolerance | Consumption of alcohol, narcotics, or any harmful substances is strictly banned on the mountain trails. Violations will cause immediate trip cancellation without refunds.'
    ],
    safetyLogistics: 'Each trekker is equipped with professional microspikes and gaiters. Ropes, oxygen cylinders, medical first-aid kits, and certified mountaineering search team stay on alert.'
  },
  {
    id: 'p11',
    name: 'Do Dham Majestic Yatra (Kedarnath & Badrinath)',
    duration: '5 Nights / 6 Days',
    badge: 'Spiritual Himalayan Circuit',
    priceText: 'Starting from ₹16,499/- PP',
    basePrice: 16499,
    detailedPrices: {
      withRishikesh: '₹17,999/- PP',
      withoutRishikesh: '₹16,499/- PP'
    },
    gstNote: true,
    imageUrl: 'https://i.imgur.com/fSVT3bL.jpeg',
    category: 'uttarakhand',
    tagline: 'Seek double divine alignment at Kedarnath and the magnificent Badrinath shrine.',
    description: 'A deeply comfortable spiritual odyssey. Pay your respects at two of the holiest Char Dham ancient shrines. We eliminate all local logistics bottlenecks to offer a comfortable and seamless group tour.',
    tokenAmount: 4000,
    itinerary: [
      {
        day: 1,
        title: 'Reach Guptkashi / Sersi & Acclimatization',
        desc: 'En route to Guptkashi, witness the sacred holy confluences of Devprayag and Rudraprayag amidst stunning mountain views. Arrival by afternoon; check into your hotel at Guptkashi/Sersi, relax, and acclimatize to the weather. Evening visit for a short self-exploration of the ancient Vishwanath Temple. Attend the evening trip briefing session, followed by a delicious dinner and overnight stay.'
      },
      {
        day: 2,
        title: 'Gaurikund Transfer & Trek to Kedarnath Dham',
        desc: 'Start your day early and drive to Gaurikund, the official base point for the foot track. Begin your sacred uphill trek towards Kedarnath Temple, surrounded by breathtaking snow peaks and divine spiritual energy. Reach the Kedarnath top by evening and attend the soul-stirring divine Evening Aarti at the shrine. Check into your stay and rest with an overnight stay at Kedarnath Top.'
      },
      {
        day: 3,
        title: 'Kedarnath Darshan, Bhairon Mandir & Return Descent',
        desc: 'Wake up early to attend the sacred Morning Aarti and Darshan inside the Kedarnath Shrine. Visit Bhairon Temple (the protector of the valley) and witness the historic Bhim Shila located right behind the temple structure. Begin your trek down to Gaurikund and drive back to your hotel at Guptkashi/Sersi. Check-in, unwind from the trek, and enjoy a warm dinner and overnight stay.'
      },
      {
        day: 4,
        title: 'Cross Scenic Routes & Transfer to Badrinath Dham',
        desc: 'Enjoy a peaceful breakfast amidst the mountain surroundings before checking out. Depart for the sacred Badrinath Dham driving through highly scenic high-altitude Himalayan routes. Reach Badrinath by evening, check into your hotel/camps, and enjoy a hot dinner. Overnight stay in Badrinath.'
      },
      {
        day: 5,
        title: 'Badrinath Darshan, Mana Last Village & Drive to Rishikesh',
        desc: 'Start early with the sacred morning Darshan at the majestic Badrinath Temple. Later, explore Mana Village (The Last Village of India) and visit key legendary sites like Bhim Pul, Vyas Gufa, and Ganesh Gufa. Commencing post-sightseeing, drive down through scenic mountain roads toward Rishikesh. Arrive late night for a hotel check-in.'
      },
      {
        day: 6,
        title: 'Rishikesh Exploration, Ganga Aarti & Return Journey',
        desc: 'Post breakfast, enjoy self-exploration across Rishikesh at your own pace. Optional Adventure: Go for thrilling river rafting, bungee jumping, or flying fox (at own expense; rafting remains strictly closed during monsoon). In the evening, experience the highly soulful Ganga Aarti at Triveni Ghat or Parmarth Niketan. Board your designated vehicle in the evening to begin your overnight road journey back to Delhi.'
      },
      {
        day: 7,
        title: 'Early Morning Arrival at Delhi',
        desc: 'Arrive back in Delhi early in the morning, marking the completion of your spiritual Do Dham Yatra with Travelons.in.'
      }
    ],
    inclusions: [
      'Transport: Delhi-to-Delhi round-trip via Semi-Sleeper Bus, Sedan, or SUV',
      'Sightseeing: All local internal transfers as per the itinerary',
      'Stays: 5 Nights clean accommodation on standard sharing basis',
      'Meals: Complete nutritious plan of 5 Breakfasts & 5 Dinners',
      'Staff: Highly experienced Team Captain leading the group',
      'Permits: All mandatory Inner Line Permits and vehicle taxes covered'
    ],
    exclusions: [
      'Anything not explicitly mentioned in the inclusions block',
      'Personal lunches, refreshments, and highway meals',
      'Costs due to natural calamities like landslides or forced roadblocks',
      'Charges for mules, porters, local trail taxis, or heavy luggage yaks',
      'Adventure activity charges in Rishikesh (Rafting, Bungee, etc.)',
      'Local monument entry fees, camera passes, or personal tips'
    ],
    termsAndConditions: [
      'Payment & Reservation Structure | Seat Reservation: Secure your booking slot by depositing a non-refundable advance of ₹4,000/- per person.',
      'Payment & Reservation Structure | Mid-Term Milestone: 50% of the remaining trip cost must be cleared 15 days prior to the scheduled travel date.',
      'Payment & Reservation Structure | Balance Clearance: The final remaining balance is collected directly at boarding. A formal invoice receipt will be promptly generated for every transaction.',
      'Pricing Notes | Government Taxes: +5% GST applicable over the package cost.',
      'Pricing Notes | Double Sharing Upgrade: Additional ₹2,000/- extra per person for dedicated double sharing rooms.',
      'Important Room Note | Double and Triple sharing room options are strictly applicable for hotel stays in Guptkashi/Sersi only. Accommodations at the Kedarnath Top are managed on a group/sharing basis (Camps/Dormitories/Hotels) depending on local availability.',
      'Yatra Decorum | Community Decorum: Drinking alcohol and smoking are strictly prohibited during transport and on pilgrimage routes for the safety and comfort of fellow passengers.',
      'Booking Guidelines | Disruptive Behavior: Travelons maintains a cordial travel environment. Any acts of misconduct, indiscipline, or disruption will lead to immediate eviction from the tour group without any refunds.',
      'Booking Guidelines | Force Majeure: Travelons is not liable for program modifications, route delays, or extra costs directly or indirectly caused by natural hazards, accidents, machine breakdowns, sudden weather turns, landslides, or political closures.'
    ],
    safetyLogistics: 'End-to-end pilgrim security with professional team captains, biometric registration support, 24/7 central support, and first-aid kits.'
  },
  {
    id: 'p12',
    name: 'Rishikesh & Beatles Ashram Retreat',
    duration: '2 Nights / 3 Days',
    badge: 'Spirituality, Nature, Culture & Adventure',
    priceText: 'Starting from ₹5,999/- PP',
    basePrice: 5999,
    detailedPrices: {
      standard: '₹5,999/- PP',
      deluxe: '₹8,999/- PP',
      luxury: '₹14,999/- PP'
    },
    imageUrl: 'https://i.imgur.com/068sk5C.jpeg',
    category: 'uttarakhand',
    tagline: 'Spirituality, nature trail through Beatles history, and optional active Ganga rafting.',
    description: 'A perfect weekend escape blending serene Ganga Aarti confluences, historical meditation ashrams, and active white-sand beach vibes. Complete custom private transport from Delhi and back.',
    tokenAmount: 2000,
    itinerary: [
      {
        day: 1,
        title: 'Delhi to Rishikesh | Arrival & Spiritual Sightseeing',
        desc: 'Morning: Pickup from Delhi (Home / Airport / Railway Station) and a scenic road journey via Haridwar into the Himalayan foothills. Arrive in Rishikesh and complete your hassle-free hotel check-in. Sightseeing Highlights: Walk across the iconic suspension bridge—Ram Jhula. Explore the peaceful lawns of Parmarth Niketan Ashram. Experience the world-famous, soulful Ganga Aarti at Triveni Ghat. Enjoy an evening walk along the pristine river banks and local spiritual markets. Dinner included | Overnight stay in Rishikesh.'
      },
      {
        day: 2,
        title: 'Beatles Ashram Exploration, Cafe Hopping & Adventure',
        desc: 'Enjoy a fresh morning breakfast at your stay. The Beatles Ashram Experience: Spend your morning exploring the historic Beatles Ashram (Chaurasi Kutiya) nestled inside the peaceful forest area of Rajaji National Park. Discover the meditation caves & stone domes. Photograph the iconic colorful graffiti & stunning murals. Walk the nature trails and historic structures from the Beatles’ famous 1968 visit. Post-Ashram Local Exploration: Visit the Laxman Jhula / Tapovan area. Unwind at white sand river beaches and local yoga spots. Go café hopping and explore the vibrant local flea markets. Optional Adventure Sports (At Own Expense): River Rafting, Bungee Jumping, Ziplining, or Cliff Jumping. Breakfast & Dinner included | Overnight stay in Rishikesh.'
      },
      {
        day: 3,
        title: 'Checkout & Return Road Journey to Delhi',
        desc: 'Wake up early to catch beautiful sunrise views over the Ganges, followed by breakfast. Complete your hotel checkout process. Board your private vehicle for the return drive back to Delhi. Drop-off Point: Delhi (Home / Airport / Railway Station) marking the completion of your refreshing weekend getaway.'
      }
    ],
    inclusions: [
      'Stays: 2 Nights comfortable accommodation in Rishikesh',
      'Transport: Private customized transport from Delhi and back',
      'Meals: Complete plan of 2 Breakfasts and 2 Dinners',
      'Sightseeing: Comprehensive local sightseeing including Beatles Ashram',
      'Taxes: Driver night allowances, state highway tolls, and all parking fees covered'
    ],
    exclusions: [
      'Personal lunches, refreshments, or mid-day highway meals',
      'Adventure activity charges (Rafting, Bungee, Zipline, etc.)',
      'Entry tickets for monuments or specific ashram inner passes',
      'Personal expenses (Tips, laundry, shopping, or phone bills)',
      'Anything not explicitly mentioned in the inclusion block'
    ],
    termsAndConditions: [
      'Accommodation Category | Standard: ₹5,999/- Per Person. Best Suited For Students, backpackers, and budget-conscious travelers.',
      'Accommodation Category | Deluxe: ₹8,999/- Per Person. Best Suited For Couples, families, and comfort-oriented travelers.',
      'Accommodation Category | Luxury: ₹14,999/- Per Person. Best Suited For Premium boutique hotels and premium riverside stays.',
      'Booking Confirmation | Successful bookings generate an immediate confirmation receipt delivered promptly via Email and WhatsApp.',
      'Payment Mode | Remaining balances must be cleared strictly via Cash, UPI, or Direct Bank Transfer at pickup—no website or card payments accepted.',
      'Adventure & Safety | Optional Adventure Sports (At Own Expense): River Rafting, Bungee Jumping, Ziplining, or Cliff Jumping.'
    ],
    safetyLogistics: 'Driver night allowances and professional trip coordination are covered fully. Local emergency assistance and route safety plans maintained.'
  },

  // Kashmir & Rajasthan
  {
    id: 'p13',
    name: 'Kashmir Valley Paradise Tour',
    duration: '4 Nights / 5 Days',
    badge: 'Floating Houseboat Stay',
    priceText: 'Starting from ₹14,999/- PP',
    basePrice: 14999,
    detailedPrices: {
      quad: '₹14,999/- PP',
      triple: '₹15,999/- PP',
      double: '₹16,999/- PP'
    },
    imageUrl: 'https://i.imgur.com/oCFpPDE.jpeg',
    category: 'kashmir_rajasthan',
    tagline: 'Live like royalty on a hand-carved heritage houseboat on Dal Lake.',
    description: 'Explore the Swiss-like valleys of Gulmarg and Pahalgam. Stroll through majestic Mughal gardens, ride the high Gulmarg Gondola over dense pine snows, and traditional houseboats. Arrive at Jammu to proceed on this scenic mountain loop.',
    tokenAmount: 5000,
    itinerary: [
      {
        day: 1,
        title: 'Jammu Arrival & Transfer to Pahalgam',
        desc: 'Arrive in Jammu in the morning, where you will board your designated vehicle and proceed on a scenic drive to Pahalgam (The Valley of Shepherds). Upon arrival, check into your hotel, freshen up, and unwind. Spend a peaceful evening at leisure soaking in the tranquil riverside surroundings. Enjoy a delicious dinner and an overnight stay at the Pahalgam hotel.'
      },
      {
        day: 2,
        title: 'Pahalgam Valley Exploration & Srinagar Transfer',
        desc: 'Enjoy an early morning breakfast at the hotel, followed by a checkout. Head out for a full-day sightseeing tour of Pahalgam\'s most famous alpine points: Betaab Valley, Aru Valley, and Chandanwari (via local union vehicles at own expense). In the evening, commence your scenic drive towards the summer capital—Srinagar. Upon arrival, check into your Srinagar hotel, followed by a warm dinner and an overnight stay.'
      },
      {
        day: 3,
        title: 'Srinagar Heritage & Local Mughal Gardens Sightseeing',
        desc: 'After breakfast, head out for a comprehensive full-day sightseeing tour of Srinagar. Visit the world-renowned historic Mughal Gardens: Shalimar Bagh, Nishat Bagh, and the royal spring of Chashme Shahi. Pay a spiritual visit to the highly revered Hazratbal Shrine on the banks of Dal Lake. Later, explore the famous Lal Chowk Market for traditional Kashmiri handicraft and saffron shopping. Return to the hotel by evening for a hot dinner and an overnight stay in Srinagar.'
      },
      {
        day: 4,
        title: 'Day Excursion (Gulmarg or Sonmarg) & Premium Houseboat Stay',
        desc: 'Post breakfast, choose your preferred spectacular day excursion track: Gulmarg Option: Explore the Meadow of Flowers and experience the iconic Gondola Ride (Asia’s highest cable car circuit). Sonmarg Option: Head to the Meadow of Gold and trek/ride a pony up to the magnificent Thajiwas Glacier. After a thrilling day excursion, drive back to Srinagar and check into a traditional Premium Houseboat on Dal Lake. Savor a traditional dinner and experience a unique night stay floating under the stars.'
      },
      {
        day: 5,
        title: 'Dal Lake Shikara Ride & Jammu Departure',
        desc: 'Wake up to a beautiful misty morning on the lake and enjoy a wholesome breakfast. Complete your houseboat checkout and experience a serene Shikara Ride across the shimmering waters of Dal Lake, taking in the iconic floating markets. Bid farewell to the valley as you commence your return road journey back to Jammu. Drop-off at Jammu by evening with unforgettable memories of your Kashmir expedition.'
      }
    ],
    inclusions: [
      'Transport: Comfortable end-to-end circuit vehicle transfers (Jammu-Pahalgam-Srinagar-Excursions-Jammu)',
      'Stays: 4 Nights Stay (1N Pahalgam, 2N Srinagar, 1N Dal Lake Houseboat)',
      'Meals: Complete nutritious plan of 4 Breakfasts and 4 Dinners',
      'Perks: 01 Hour serene Shikara Ride on Dal Lake included',
      'Taxes: All state tolls, parking fees, fuel, and driver night allowances'
    ],
    exclusions: [
      'Personal meals on the highways during transits',
      'Local Pahalgam Union taxi charges for Aru/Betaab valley',
      'Gondola ride tickets, pony charges, or glacier activity fees',
      'Travel insurance coverage & personal shopping expenses',
      'Costs arising due to natural hazards like landslides or roadblocks'
    ],
    thingsToCarry: [
      { category: 'Bags & Shoes', items: 'Rucksack/Trolley bag (50-60L), comfortable walking/trekking shoes.' },
      { category: 'Clothing Layers', items: 'Fleece jacket, thermal innerwear, heavy winter coat (depending on season), gloves, beanie cap, and neck warmer.' },
      { category: 'Care & Tech', items: 'Sunglasses, sunscreen, personal water bottle, power bank, personal medical kit, and a valid Government ID Proof.' }
    ],
    termsAndConditions: [
      'Accommodation Schedule | Night 1: Pahalgam Deluxe Mountain Hotel (Dinner Included). Night 2 & 3: Srinagar Premium City Hotel (Breakfast & Dinner Included). Night 4: Dal Lake Srinagar Traditional Kashmiri Houseboat (Breakfast & Dinner Included). Day 5: Return Transit (Moving Breakfast Included).',
      'Booking Confirmation | Post successful token advance clearance, an official booking confirmation receipt will be instantly generated and delivered via Email and WhatsApp.',
      'Payment Mode | Remaining balances must be cleared strictly via Cash, UPI, or Direct Bank Transfer at boarding.',
      'Cancellation & Friend-Transfer Policy | Cancellations more than 20 Days before Travel: Refund processed with a 10% structural cancellation fee.',
      'Cancellation & Friend-Transfer Policy | Cancellations 10 to 20 Days before Travel: Refund processed with a 50% structural cancellation fee.',
      'Cancellation & Friend-Transfer Policy | Cancellations Less than 10 Days before Travel / No-Show: Strictly Non-Refundable.',
      'Emergency Slot-Transfer | If you cannot join the batch due to extreme emergencies, Travelons allows you to transfer your booked seat (same batch & date) to a friend or family member at no extra penalty.',
      'Refund Execution | Approved cancellations are issued as a Travelons Trip Voucher valid for 1 Year, delivered via email within 7 working days.',
      'Mandatory Guidelines | Pure Vegetarian Regime: To maintain standard operations across our central group departures, only vegetarian meals are served throughout the tour (starting from Day 1 Dinner to Day 5 Breakfast).',
      'Mandatory Guidelines | Itinerary Discipline: Skipping any part of the pre-scheduled sightseeing means the package is marked complete; any further stay or local travel will be at the guest’s own expense.',
      'Mandatory Guidelines | Zero Substance Tolerance: Consumption of alcohol or any harmful substances is strictly prohibited on the tour. Violations lead to immediate removal from the group without any refund.'
    ],
    safetyLogistics: 'Strict routing via tourist-safe corridors, 24/7 on-ground supervisor support, and comprehensive local medical backup with traditional houseboat hospitality.'
  },
  {
    id: 'p14',
    name: 'Majestic Jaisalmer Desert Safari',
    duration: '4 Nights / 5 Days (2N Desert Stay)',
    badge: 'Luxury Desert Stay',
    priceText: 'Starting from ₹7,999/- PP',
    basePrice: 7999,
    detailedPrices: {
      quad: '₹7,999/- PP',
      triple: '₹8,499/- PP',
      double: '₹8,999/- PP'
    },
    imageUrl: 'https://i.imgur.com/6yig1G5.jpeg',
    category: 'kashmir_rajasthan',
    tagline: 'Glinting golden dunes, legendary Indo-Pak Longewala battlefields, and royal Swiss desert camps.',
    description: 'An absolute immersion in the royal culture of the Jaisalmer Thar desert. Explore living Golden Jaisalmer Fort, seek blessings at Tanot Mata near the border, walk the historic 1971 battleground of Longewala, and sleep in premium Swiss camps under a star-strewn desert canopy. Pickup Point: Delhi Assembly at Akshardham Metro Station (06:00 PM) or Gurugram Pickup at Ambience Mall Complex (07:00 PM).',
    tokenAmount: 3000,
    itinerary: [
      {
        day: 1,
        title: 'Royal Welcome, Camel Safari & Desert Camping',
        desc: 'Reach Jaisalmer by late morning. Check-in at the luxury Swiss Camps nestled near Sam Sand Dunes. Experience a traditional warm welcome in classic Rajasthani style with Dhol, Tilak, and Aarti, followed by refreshing welcome drinks. In the afternoon, gear up for an authentic Camel Safari through the sand dunes to explore the Thar deeply and witness a magical golden sunset. Return to the campsite for hot evening tea and delicious snacks. Spend late evening around a cozy Bonfire, enjoying vibrant local Rajasthani folk dances, cultural programs, and a lively DJ track. Enjoy a lavish traditional buffet dinner at night.'
      },
      {
        day: 2,
        title: 'Indo-Pak Battlefront (Longewala), Tanot Temple & Kuldhara',
        desc: 'Wake up to a beautiful desert sunrise and enjoy a wholesome breakfast together. Head out to visit the legendary Tanot Mata Temple near the border to seek blessings. Drive to the historic Longewala Post (the actual battlefront of the 1971 Indo-Pak war). Witness captured Pakistani tanks, military vehicles, and the real war ground. En route back, stop for lunch and explore Bada Bagh, followed by a visit to the mysterious, abandoned, and haunted Kuldhara Village. Return to the campsite by evening for high tea, another energetic night of cultural folk performances with a DJ, and a delicious buffet dinner.'
      },
      {
        day: 3,
        title: 'Living Golden Fort, Haveli Exploration & Gadisar Lake',
        desc: 'Refresh and enjoy breakfast at the camp, followed by checking out from the dunes. Drive into Jaisalmer city to explore the mighty Jaisalmer Living Fort (Sonan Kella) and the intricate architecture of Patwon Ki Haveli. Spend the afternoon exploring local markets for authentic handicraft shopping and trying local cuisines for lunch. Relax by the serene waters of Gadisar Lake. Assemble at the lake parking area by 04:00 PM. Board your comfortable AC transport and commence the return overnight journey back to Gurugram/Delhi.'
      },
      {
        day: 4,
        title: 'Morning Arrival at Delhi/NCR',
        desc: 'Reach Gurugram (IFFCO Chowk) / Delhi in the morning. Disperse and head home with a bucketload of golden memories and endless pictures from the Land of Kings.'
      }
    ],
    inclusions: [
      'Transport: Complete round-trip travel in a highly comfortable AC vehicle',
      'Stays: 2 Nights accommodation in Luxury Swiss Tents at Sam Sand Dunes',
      'Meals: 2 Fresh Breakfasts and 2 Royal Buffet Dinners at the camp',
      'Safari: Thrilling Camel Safari experience across the dunes',
      'Perks: Rajasthani Cultural folk programs, Bonfire, and DJ nights',
      'Sightseeing: Longewala Post, Tanot Temple, Kuldhara, Jaisalmer Fort, Bada Bagh, & Gadisar Lake'
    ],
    exclusions: [
      '5% GST extra over the total package price',
      'All mid-day lunches, personal drinks, and extra snacks',
      'Entry tickets or camera passes for any monuments/forts',
      'Personal expenses (Laundry, tips, mineral water, shopping)',
      'Travel, medical, or accidental insurance policies of any kind',
      'Additional expenses due to unforeseen road blocks or emergency overstays'
    ],
    termsAndConditions: [
      'Pickup & Assembly | Delhi Assembly: Akshardham Metro Station at 06:00 PM.',
      'Pickup & Assembly | Gurugram Pickup: Ambience Mall Complex at 07:00 PM. (Overnight journey from Delhi/NCR to Jaisalmer | Connect and network with fellow co-travelers).',
      'Booking Confirmation | Successful bookings generate an immediate confirmation receipt delivered promptly via Email and WhatsApp.',
      'Payment Mode | Remaining balances must be cleared strictly via Cash, UPI, or Direct Bank Transfer at pickup—no website or card payments accepted.'
    ],
    safetyLogistics: 'Double desert guard patrol, professional vehicle tracking, emergency assistance, and verified local desert coordinators.'
  },
  {
    id: 'p15',
    name: 'Udaipur & Mount Abu Royal Retreat',
    duration: '4 Nights / 5 Days',
    badge: 'Lakes, Palaces & Aravali Hills',
    priceText: 'Starting from ₹6,499/- PP',
    basePrice: 6499,
    detailedPrices: {
      quad: '₹6,499/- PP',
      triple: '₹6,999/- PP',
      double: '₹7,499/- PP'
    },
    imageUrl: 'https://i.imgur.com/1N2PFLt.jpeg',
    category: 'kashmir_rajasthan',
    tagline: 'Scenic lakes, grand marble palaces, and cool mountain-lake adventures under the stars.',
    description: 'A perfect royal twin-destination getaway. Walk the heritage Old City streets of Udaipur, scale up the cool heights of Mount Abu, explore extraordinary Dilwara temple carvings, and hike beautiful Bahubali Hills. Boarding Point: Gurugram (IFFCO Chowk Metro Station or as officially informed).',
    tokenAmount: 3000,
    itinerary: [
      {
        day: 1,
        title: 'Gurugram to Udaipur (Overnight Journey)',
        desc: 'Board your comfortable AC vehicle from Gurugram. Begin the overnight road journey towards the White City of Rajasthan. Connect, network, and socialize with your fellow co-travelers during the drive.'
      },
      {
        day: 2,
        title: 'Udaipur Arrival & Heritage Old City Exploration',
        desc: 'Reach Udaipur by morning. Check into your hotel, freshen up, and take some leisure rest. City Palace: Head out to explore the grand City Palace complex, experiencing the rich history of the Mewar region alongside panoramic views of Lake Pichola. Jagdish Temple: Visit this magnificent 17th-century architectural marvel dedicated to Lord Vishnu to witness its intricate stone carvings. Evening at Gangaur Ghat: Stroll through the heritage streets of Udaipur, shop for local handicrafts and colorful fabrics, or chill at lake-view cafes. Optional: Witness the vibrant cultural folk-art performances at Bagore Ki Haveli along the lake (at own expense). Dinner included | Overnight stay in Udaipur hotel.'
      },
      {
        day: 3,
        title: 'Day Excursion to Mount Abu (Hill Station & Activities)',
        desc: 'Post a delightful breakfast, commence your scenic drive up the Aravali range to Mount Abu—Rajasthan\'s premier hill station. Explore the world-famous Dilwara Jain Temples, known for their extraordinary marble carvings. Enjoy peaceful boating on the serene waters of Nakki Lake and take a relaxing stroll down Mount Abu\'s vibrant Mall Road. Adventure Zone: Take part in thrilling pre-arranged hill activities like Rock Climbing, Ziplining, and the Loop Bridge block. Drive back to your central base in Udaipur. Dinner included | Overnight stay in Udaipur hotel.'
      },
      {
        day: 4,
        title: 'Lakes, High Hills View & Return Departure',
        desc: 'Wake up, enjoy breakfast, and complete your hotel checkout process. Bahubali Hills: Hike up the mesmerizing Bahubali Hills to witness jaw-dropping, panoramic views of the vast Badi Lake. Saheliyon Ki Bari: Visit the historic Courtyard of the Maidens to explore its fountains, marble elephants, and lotus pools. Fatehsagar Lake: Spend a golden sunset evening boating and exploring the vibrant local street food market by the lakeside. Assemble in the evening, say goodbye to the Lake City, and board the vehicle for your return overnight journey.'
      },
      {
        day: 5,
        title: 'Early Morning Arrival at Gurugram',
        desc: 'Arrive back at Gurugram (IFFCO Chowk) early in the morning. Disperse and head home with a bag full of royal memories and unforgettable mountain-lake experiences.'
      }
    ],
    inclusions: [
      'Transport: Delhi/Gurugram round-trip transfers via AC Volvo, Deluxe Bus, or Force Traveller',
      'Stays: 2 Nights comfortable hotel accommodation on standard sharing basis',
      'Meals: Complete nutritious plan consisting of 3 Breakfasts and 3 Dinners',
      'Activities: Mount Abu hill adventure activities (Rock climbing, zipline, etc.)',
      'Taxes: All state road permits, highway tolls, parking fees, and driver allowances',
      'Support: Experienced, cool, and professional Team Captain tracking the group'
    ],
    exclusions: [
      'Personal lunches, refreshments, or extra highway snacks',
      'Entry ticket fees for palaces, temples, monuments, or boat rides',
      'Travel insurance, laundry, tips, porterage, or personal shopping',
      'Costs arising due to weather, roadblocks, landslides, or calamities',
      'Anything not explicitly listed in the inclusions block'
    ],
    termsAndConditions: [
      'Boarding Coordination | Boarding Point: Gurugram (IFFCO Chowk Metro Station or as officially informed).',
      'Accommodation Schedule | Day 1: En Route Transit - Moving AC Vehicle. Day 2 & 3: Udaipur City - Premium Deluxe Hotel (Dinner Included). Day 4: Lakes & Sightseeing Return Transit (Breakfast & Dinner Included). Day 5: Gurugram/Delhi Arrival (Breakfast Included).',
      'Booking Confirmation | Successful bookings generate an immediate confirmation receipt delivered promptly via Email and WhatsApp.',
      'Payment Mode | Remaining balances must be cleared strictly via Cash, UPI, or Direct Bank Transfer at pickup—no website or card payments accepted.'
    ],
    safetyLogistics: 'Professional mountain and plains group drivers, GPS group fleet tracking, 24/7 central customer assistance desk, and standard medical kit equipped coordinators.'
  }
];

export const CORE_POLICIES = [
  {
    title: 'Booking Process',
    desc: 'Securing your adventure is highly structured and professional. Reserve your desired seat by paying a trivial token advance payment (₹3,000/- for standard Uttarakhand & Himachal tours; ₹5,000/- for Summer Spiti & Kashmir; and ₹6,000/- for Extreme Winter Spiti). The remaining balance is strictly collected right at the boarding point in Cash or UPI before departure. Instant digital receipt and booking vouchers are triggered to your email immediately.'
  },
  {
    title: 'Structural Cancellation Policy',
    desc: 'Cancellation requests lodged more than 15-20 days prior to departure will be processed immediately with a full refund of the token amount minus a minor ₹500 service and processing fee. Cancellation requests within 10-5 days of departure or general no-shows are strictly non-refundable due to early non-refundable partner bookings (hotels & Volvos). However, during sudden severe environmental roadblocks, extreme landslides, or official force majeure closures, 100% of your paid amount is instantly converted to a 1-Year Credit Trip Voucher transferable to any co-traveler on any route.'
  },
  {
    title: 'Community Guidelines',
    desc: 'We are committed to curating safe, healthy, and respectful co-travelling environments. Consumption of alcohol and smoking inside transport coaches or during common trek walking hours is strictly prohibited and carries legal penalties in eco-zones. Verified biometric and government-issued ID checks are mandatory for all participants at registration. Any misconduct, harassments, or non-cooperation with the Trip Captain will result in immediate onboard expulsion without any refund.'
  }
];
