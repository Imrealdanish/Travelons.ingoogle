/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useRef, useEffect } from 'react';
import { ChatMessage } from '../types';
import { sendMessageToGemini } from '../services/geminiService';
import { Compass, Sparkles, Send, X, MessageSquare, Phone } from 'lucide-react';

const Assistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { 
      role: 'model', 
      text: 'Namaste! Welcome to TRAVELONS.IN. I am your automated AI Travel Guide. Ask me anything about our 15 group departures, itinerary timelines, token advances, solo female safety ratios, or severe weather policies!', 
      timestamp: Date.now() 
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isThinking, setIsThinking] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isOpen]);

  const handleSend = async () => {
    if (!inputValue.trim()) return;

    const userMsg: ChatMessage = { role: 'user', text: inputValue, timestamp: Date.now() };
    setMessages(prev => [...prev, userMsg]);
    setInputValue('');
    setIsThinking(true);

    try {
      const history = messages.map(m => ({ role: m.role, text: m.text }));
      const responseText = await sendMessageToGemini(history, userMsg.text);
      
      const aiMsg: ChatMessage = { role: 'model', text: responseText, timestamp: Date.now() };
      setMessages(prev => [...prev, aiMsg]);
    } catch (error) {
       console.error("Assistant chat error:", error);
    } finally {
      setIsThinking(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="fixed bottom-8 right-6 z-50 flex flex-col items-end font-sans">
      
      {isOpen && (
        <div className="bg-white rounded-none shadow-2xl w-[90vw] sm:w-[380px] h-[520px] mb-4 flex flex-col overflow-hidden border border-gray-200 animate-slide-up">
          
          {/* Header */}
          <div className="bg-brand-blue text-white p-4 flex justify-between items-center border-b border-brand-blue/10 shrink-0">
            <div className="flex items-center gap-2">
              <div className="w-2.5 h-2.5 bg-brand-lime rounded-full animate-pulse"></div>
              <Compass size={18} className="text-brand-lime animate-spin" style={{ animationDuration: '6s' }} />
              <span className="font-sans font-black uppercase text-xs tracking-wider">Travelons AI Guide</span>
            </div>
            <button 
              onClick={() => setIsOpen(false)} 
              className="text-white hover:text-brand-lime transition-colors focus:outline-none p-1"
            >
              <X size={18} />
            </button>
          </div>

          {/* Chat Messages Log Area */}
          <div className="flex-1 overflow-y-auto p-5 space-y-6 bg-brand-grey" ref={scrollRef}>
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div 
                  className={`max-w-[85%] px-4 py-3 text-xs sm:text-xs leading-relaxed font-semibold relative ${
                    msg.role === 'user' 
                      ? 'bg-brand-blue text-white rounded-none' 
                      : 'bg-white text-gray-700 border border-gray-100 shadow-sm rounded-none'
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            {isThinking && (
               <div className="flex justify-start">
                 <div className="bg-white border border-gray-100 px-4 py-3 flex gap-1 items-center shadow-sm rounded-none">
                   <div className="w-1.5 h-1.5 bg-brand-blue rounded-full animate-bounce"></div>
                   <div className="w-1.5 h-1.5 bg-brand-blue rounded-full animate-bounce delay-75"></div>
                   <div className="w-1.5 h-1.5 bg-brand-blue rounded-full animate-bounce delay-150"></div>
                 </div>
               </div>
            )}
          </div>

          {/* Live Phone Link Trigger inside widget */}
          <div className="px-4 py-2 bg-brand-lime/10 border-t border-brand-lime/10 flex items-center justify-between text-[10px] font-black uppercase tracking-wider text-brand-blue shrink-0">
            <span>Direct Desk Helper</span>
            <a href="tel:+919990789015" className="flex items-center gap-1 hover:underline text-brand-blue">
              <Phone size={10} />
              <span>+91 9990789015</span>
            </a>
          </div>

          {/* Input Area */}
          <div className="p-4 bg-white border-t border-gray-100 shrink-0">
            <div className="flex gap-2">
              <input 
                type="text" 
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={handleKeyPress}
                placeholder="Ask about itineraries, prices..." 
                className="flex-1 bg-brand-grey border border-gray-200 focus:border-brand-blue px-3.5 py-2.5 text-xs font-bold outline-none placeholder-gray-400 text-brand-dark"
              />
              <button 
                onClick={handleSend}
                disabled={!inputValue.trim() || isThinking}
                className="bg-brand-blue text-white px-3.5 hover:bg-brand-dark transition-colors disabled:opacity-50 flex items-center justify-center shrink-0"
              >
                <Send size={14} className={isThinking ? 'animate-ping' : ''} />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Floating Circle Button */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="bg-brand-blue hover:bg-brand-dark hover-glow text-brand-lime w-14 h-14 flex items-center justify-center rounded-full shadow-2xl transition-all duration-300 transform active:scale-90"
        aria-label="Contact AI travel concierge"
      >
        {isOpen ? (
          <X size={22} className="text-brand-lime" />
        ) : (
          <MessageSquare size={22} className="text-brand-lime" />
        )}
      </button>
    </div>
  );
};

export default Assistant;
