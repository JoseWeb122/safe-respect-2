import React, { useState, useEffect } from "react";
import * as Icons from "lucide-react";

export const BrandPromise: React.FC = () => {
  const [activePromise, setActivePromise] = useState(0);

  const promises = [
    {
      word: "SAFE",
      tagline: "Your peace of mind is non-negotiable.",
      longText: "We feature rigorous multi-point inspection schedules on our modern vehicles. Every driver is vetted, background-checked, and deeply certified to assist passengers with sensory, motor, or cognitive needs safely.",
      icon: Icons.ShieldCheck,
      background: "https://images.pexels.com/photos/17455631/pexels-photo-17455631.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1600"
    },
    {
      word: "RESPECTABLE",
      tagline: "Dignity is at the heart of our mission.",
      longText: "We treat our passengers like family, not numbers on a ledger. We arrive in high-end, clean, unbranded luxury vehicles so patients feel respectable and comfortable arriving at their specialized care clinics.",
      icon: Icons.Heart,
      background: "https://images.pexels.com/photos/35831412/pexels-photo-35831412.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1600"
    },
    {
      word: "RELIABLE",
      tagline: "Unmatched punctuality in any upstate weather.",
      longText: "When your specialist appointment is scheduled, every minute matters. We pre-plan routes across the 7 New York counties to bypass traffic bottle-necks, ensuring the vehicle is outside your door early.",
      icon: Icons.CalendarCheck,
      background: "https://images.pexels.com/photos/17455629/pexels-photo-17455629.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1600"
    },
    {
      word: "SPEEDY",
      tagline: "Prompt dispatch with seamless communication.",
      longText: "No endless waiting on hold or stranded at the discharge lounge. Our prompt communications systems notify you immediately when your vehicle is inbound and ready to safely expedite your return home.",
      icon: Icons.Zap,
      background: "https://images.pexels.com/photos/21012245/pexels-photo-21012245.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1600"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setActivePromise((prev) => (prev + 1) % promises.length);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative py-28 bg-slate-950 text-white overflow-hidden">
      
      {/* Background Image corresponding to active brand promise with beautiful fade transition */}
      <div className="absolute inset-0 z-0">
        {promises.map((p, idx) => (
          <div
            key={p.word}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              activePromise === idx ? "opacity-35" : "opacity-0"
            }`}
          >
            <img
              src={p.background}
              alt={`${p.word} background preview`}
              className="w-full h-full object-cover object-center scale-105"
            />
          </div>
        ))}
        {/* Deep elegant dark overlay layer */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-slate-950/95" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold text-teal-400 uppercase tracking-widest bg-teal-400/10 px-3.5 py-1.5 rounded-full border border-teal-400/20">
            Our Brand Covenant
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-4 font-serif-premium">
            The S3R Experience Standard
          </h2>
          <p className="text-slate-400 text-sm mt-2">
            More than a ride. It's dependable transportation you can count on.
          </p>
        </div>

        {/* Brand Promises Highlight Core Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Huge interactive text selectors */}
          <div className="lg:col-span-6 space-y-4">
            {promises.map((p, idx) => {
              const isActive = activePromise === idx;
              const PromiseIcon = p.icon;

              return (
                <div
                  key={p.word}
                  onClick={() => setActivePromise(idx)}
                  className={`p-6 rounded-2xl border transition-all duration-300 cursor-pointer relative overflow-hidden text-left ${
                    isActive
                      ? "bg-slate-900 border-teal-500/80 shadow-xl shadow-teal-500/5 translate-x-2"
                      : "bg-slate-950/40 border-slate-900/60 hover:bg-slate-900/40 hover:border-slate-800"
                  }`}
                >
                  {/* Progress bar overlay indicator for active word */}
                  {isActive && (
                    <div className="absolute left-0 bottom-0 top-0 w-1.5 bg-gradient-to-b from-blue-500 to-teal-400 animate-pulse" />
                  )}

                  <div className="flex items-center gap-4">
                    <div className={`p-3 rounded-xl ${isActive ? 'bg-teal-500 text-slate-950' : 'bg-slate-900 text-slate-400'}`}>
                      <PromiseIcon className="w-6 h-6" />
                    </div>

                    <div>
                      <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider block">
                        Promise 0{idx + 1}
                      </span>
                      <h3 className={`text-2xl font-black tracking-widest ${isActive ? 'text-white' : 'text-slate-500'}`}>
                        {p.word}
                      </h3>
                    </div>

                    {isActive && (
                      <span className="ml-auto text-xs text-teal-400 font-bold bg-teal-400/10 px-2.5 py-1 rounded-full uppercase tracking-wider animate-pulse">
                        Active Focus
                      </span>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Column: Narrative focus detailing why this brand promise represents a top-tier digital agency focus */}
          <div className="lg:col-span-6">
            <div className="bg-slate-900/80 border border-slate-800 p-8 md:p-10 rounded-3xl backdrop-blur-md relative overflow-hidden text-left min-h-[340px] flex flex-col justify-between">
              
              {/* Giant quote background text */}
              <div className="absolute -top-10 -right-6 select-none opacity-5 text-teal-400 font-extrabold text-9xl">
                ”
              </div>

              <div className="space-y-4">
                <span className="text-[10px] font-bold text-teal-400 uppercase tracking-widest block">
                  Core Commitment Focus
                </span>
                
                <h3 className="text-3xl font-extrabold text-white font-serif-premium leading-tight">
                  {promises[activePromise].tagline}
                </h3>
                
                <p className="text-slate-300 text-sm leading-relaxed">
                  {promises[activePromise].longText}
                </p>
              </div>

              <div className="pt-8 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400">
                <span className="flex items-center gap-1.5">
                  <Icons.UserCheck className="w-4 h-4 text-teal-400" />
                  Compassion & Punctuality Standard
                </span>
                <span className="font-mono text-teal-400">
                  0{activePromise + 1} / 04
                </span>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
