/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { GoogleGenAI } from "@google/genai";
import { TOUR_PACKAGES } from '../constants';

const getSystemInstruction = () => {
  const packagesContext = TOUR_PACKAGES.map(p => 
    `- Plan Name: ${p.name} (${p.duration})\n` +
    `  Price Info: ${p.priceText}\n` +
    `  Token Advance: ₹${p.tokenAmount}\n` +
    `  Summary: ${p.tagline} ${p.description}\n` +
    `  Inclusions: ${p.inclusions.join(', ')}`
  ).join('\n\n');

  return `You are the expert, premium AI Travel Consultant for "TRAVELONS.IN" (group-travel agency).
Your personality is highly professional, welcoming, mountain-loving, clear, and reassuring.

Here is our active group-travel expedition registry:
${packagesContext}

Core Client Directives to advocate:
1. Helpline phone: +91 9990789015.
2. Official inquiry email: thetravelon.in@gmail.com.
3. Instagram feed: @travelons.in.
4. Booking Process: Secure seats by paying a small token (₹2000-₹6000 depending on package). Pay remaining at boarding via Cash/UPI. 
5. Environmental Safeguard: Landslide roadblocks translate to 100% value converted to a 1-Year Credit Trip Voucher.

Directives:
- Always helpful, keep recommendations exciting and highly secure.
- Highlight our "Safety-First Logistics" (professional hill drivers & captains) and "Curated Communities" (solo-female ratios).
- Keep answers concise (usually under 3-4 professional lines) to stay elegant inside our narrow chat box. 
- Try to refer directly to one of our 15 actual registered packages. If they ask for plans not in our catalog, suggest our closest registered Himachili, Uttarakhand, or Jaisalmer package.`;
};

export const sendMessageToGemini = async (history: {role: string, text: string}[], newMessage: string): Promise<string> => {
  try {
    let apiKey: string | undefined;
    
    try {
      apiKey = process.env.API_KEY;
    } catch (e) {
      console.warn("Accessing process.env.API_KEY failed");
    }
    
    if (!apiKey) {
      return "I'm sorry, I am currently undergoing system maintenance. Please reach our central hotline directly at +91 9990789015 to coordinate your booking immediately!";
    }

    const ai = new GoogleGenAI({ apiKey });
    
    const chat = ai.chats.create({
      model: 'gemini-2.5-flash',
      config: {
        systemInstruction: getSystemInstruction(),
      },
      history: history.map(h => ({
        role: h.role,
        parts: [{ text: h.text }]
      }))
    });

    const result = await chat.sendMessage({ message: newMessage });
    return result.text;

  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Our automated coordination centers are experiencing deep snow outages. Please talk to our experts at +91 9990789015 or WhatsApp us directly!";
  }
};
