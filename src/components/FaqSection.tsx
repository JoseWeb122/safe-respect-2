import React, { useState } from "react";
import * as Icons from "lucide-react";
import { FAQS } from "../data/mockData";

export const FaqSection: React.FC = () => {
  const [openFaqId, setOpenFaqId] = useState<string | null>("faq-1");

  const toggleFaq = (id: string) => {
    setOpenFaqId(openFaqId === id ? null : id);
  };

  return (
    <section id="faq" className="py-24 bg-slate-50 relative overflow-hidden">
      
      {/* Visual background lights */}
      <div className="absolute top-1/4 right-0 w-80 h-80 bg-blue-100/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-teal-100/30 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-bold text-blue-700 uppercase tracking-widest bg-blue-100 px-3.5 py-1.5 rounded-full inline-block mb-3">
            Inquiry Center
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-serif-premium">
            Frequently Asked Questions
          </h2>
          <div className="w-12 h-1 bg-teal-600 mx-auto my-3 rounded-full" />
          <p className="text-slate-600 text-sm leading-relaxed">
            Have questions about regional coverage, scheduling, and specialized mobility requirements? We have compiled the answers to our most common client questions below.
          </p>
        </div>

        {/* Accordions List */}
        <div className="space-y-4">
          {FAQS.map((faq) => {
            const isOpen = openFaqId === faq.id;

            return (
              <div
                key={faq.id}
                className="bg-white rounded-2xl border border-slate-200/80 shadow-sm overflow-hidden transition-all duration-300"
              >
                {/* Accordion Trigger */}
                <button
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 cursor-pointer hover:bg-slate-50/50 transition-colors"
                >
                  <span className="text-sm sm:text-base font-bold text-slate-900 pr-4">
                    {faq.question}
                  </span>
                  
                  {/* Plus/Minus Indicator */}
                  <div className={`p-1.5 rounded-lg transition-colors ${isOpen ? 'bg-blue-50 text-blue-600' : 'bg-slate-100 text-slate-500'}`}>
                    {isOpen ? (
                      <Icons.Minus className="w-4 h-4" />
                    ) : (
                      <Icons.Plus className="w-4 h-4" />
                    )}
                  </div>
                </button>

                {/* Accordion Body with smooth height toggle */}
                <div
                  className={`transition-all duration-300 ease-in-out ${
                    isOpen ? "max-h-[300px] border-t border-slate-100" : "max-h-0 pointer-events-none"
                  } overflow-hidden`}
                >
                  <div className="p-6 bg-slate-50/50 text-slate-600 text-xs sm:text-sm leading-relaxed space-y-3">
                    <p>{faq.answer}</p>
                    
                    {/* fallback warning block */}
                    <div className="p-3 bg-white rounded-lg border border-slate-200/60 text-xs text-slate-500 flex items-center gap-2">
                      <Icons.HelpCircle className="w-3.5 h-3.5 text-teal-600" />
                      <span>
                        Unsure of specific parameters? Please contact our team to confirm availability and specific transportation requirements.
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Contact fallback block */}
        <div className="mt-12 bg-white rounded-2xl p-6 border border-slate-200 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4 text-left">
          <div>
            <h4 className="text-sm font-bold text-slate-900">Have a highly specialized transportation request?</h4>
            <p className="text-xs text-slate-500">Our dispatch team is happy to answer complex, recurring appointments questions.</p>
          </div>
          
          <a
            href="#contact"
            className="text-xs font-bold text-blue-600 hover:text-blue-800 uppercase tracking-widest flex items-center gap-1.5 shrink-0"
          >
            <span>Go to Contact Info</span>
            <Icons.ArrowRight className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
};
