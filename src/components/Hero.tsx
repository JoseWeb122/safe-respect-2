import React, { useState, useEffect } from "react";
import * as Icons from "lucide-react";

interface HeroProps {
  onRequestRide: () => void;
  onExploreServices: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onRequestRide, onExploreServices }) => {
  const [animate, setAnimate] = useState(false);
  const [activeCountyIndex, setActiveCountyIndex] = useState(0);

  const countiesList = [
    "Monroe", "Genesee", "Orleans", "Wyoming", "Ontario", "Livingston", "Wayne"
  ];

  useEffect(() => {
    // Trigger entrance animation on mount
    setAnimate(true);

    // Subtle county rotation inside the floating card indicator
    const interval = setInterval(() => {
      setActiveCountyIndex((prev) => (prev + 1) % countiesList.length);
    }, 2800);

    return () => clearInterval(interval);
  }, []);

  return (
    <section 
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-950 pt-16"
    >
      {/* Background Image with Cinematic Crop & Dark Gradient Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.pexels.com/photos/21012245/pexels-photo-21012245.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1600"
          alt="Premium luxury medical transportation vehicle arrival"
          className="w-full h-full object-cover object-center opacity-45 scale-105 transition-transform duration-[10000ms] ease-out select-none"
          style={{ transform: animate ? 'scale(1)' : 'scale(1.08)' }}
        />
        {/* Dark radial and linear gradients for perfect readability and agency-grade aesthetic */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/70 to-slate-950/80" />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-transparent to-slate-950/40" />
      </div>

      {/* Floating Ambient Backlights */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-teal-500/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-blue-500/10 blur-3xl pointer-events-none" />

      {/* Main Content Grid */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Side: Editorial Typography & Actions */}
        <div className="lg:col-span-7 space-y-8 text-left">
          
          {/* Subtitle tag with slide-in animation */}
          <div 
            className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs text-teal-300 tracking-wider uppercase backdrop-blur-md transition-all duration-1000 transform ${
              animate ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
            }`}
          >
            <span className="w-2 h-2 rounded-full bg-teal-400 animate-ping" />
            <span className="font-semibold text-[11px]">Serving 7 Counties Across New York State</span>
          </div>

          {/* Core Premium Headline */}
          <div className="space-y-4">
            <h1 
              className={`text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-none tracking-tight transition-all duration-1000 delay-100 transform ${
                animate ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              <span className="block font-serif-premium font-light italic text-teal-200">Safe. Respectful. Reliable.</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-slate-300">
                Right When You Need Us.
              </span>
            </h1>
            
            <p 
              className={`max-w-xl text-slate-300 text-sm sm:text-base leading-relaxed transition-all duration-1000 delay-200 transform ${
                animate ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              Professional medical transportation for scheduled appointments, rehabilitation centers, healthcare facilities, and essential destinations. Experience New York's gold standard of care.
            </p>
          </div>

          {/* CTA Buttons in Sequence */}
          <div 
            className={`flex flex-col sm:flex-row items-stretch sm:items-center gap-4 transition-all duration-1000 delay-300 transform ${
              animate ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <button
              onClick={onRequestRide}
              className="bg-gradient-to-r from-blue-600 to-teal-500 hover:from-blue-700 hover:to-teal-600 text-white font-bold py-4 px-8 rounded-xl transition-all shadow-xl hover:shadow-teal-500/20 text-sm tracking-wide uppercase cursor-pointer flex items-center justify-center gap-2 group hover:scale-[1.02] active:scale-[0.98]"
            >
              <Icons.FileText className="w-4 h-4 text-teal-200 group-hover:scale-110 transition-transform" />
              <span>Request Transportation</span>
              <Icons.ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              onClick={onExploreServices}
              className="bg-white/10 hover:bg-white/15 text-white border border-white/15 font-bold py-4 px-8 rounded-xl transition-all text-sm tracking-wide uppercase cursor-pointer flex items-center justify-center gap-2 hover:border-white/30 hover:scale-[1.02] active:scale-[0.98]"
            >
              <Icons.Compass className="w-4 h-4 text-slate-300" />
              <span>Explore Our Services</span>
            </button>
          </div>

          {/* Trust strip indicators */}
          <div 
            className={`flex flex-wrap items-center gap-x-6 gap-y-3 text-xs text-slate-400 pt-4 transition-all duration-1000 delay-400 transform ${
              animate ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <div className="flex items-center gap-1.5">
              <Icons.ShieldCheck className="w-4.5 h-4.5 text-teal-400 shrink-0" />
              <span>Medicaid Friendly Layout</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Icons.Clock3 className="w-4.5 h-4.5 text-blue-400 shrink-0" />
              <span>6:00 AM – 6:00 PM Operating Hours</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Icons.Locate className="w-4.5 h-4.5 text-indigo-400 shrink-0" />
              <span>Winter Expansion Options Available</span>
            </div>
          </div>
        </div>

        {/* Right Side: Floating High-End Premium Information Card & Animated Location Indicator */}
        <div className="lg:col-span-5 relative w-full flex justify-center">
          
          <div 
            className={`w-full max-w-md bg-slate-900/80 border border-slate-800 rounded-2xl p-6 shadow-2xl backdrop-blur-md transition-all duration-1000 delay-500 transform ${
              animate ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-16 scale-95'
            }`}
          >
            {/* Header of Floating Card */}
            <div className="flex items-center justify-between mb-4 border-b border-slate-800 pb-3">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-widest flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-teal-500 animate-ping" />
                Currently Serving
              </span>
              <span className="text-[10px] font-semibold text-teal-400 bg-teal-400/10 px-2 py-0.5 rounded">
                Active NY Counties
              </span>
            </div>

            {/* List of Counties with highlight effects */}
            <div className="grid grid-cols-2 gap-2 mb-4">
              {countiesList.map((county, index) => {
                const isActive = activeCountyIndex === index;
                return (
                  <div
                    key={county}
                    className={`p-2.5 rounded-lg border transition-all duration-300 flex items-center justify-between ${
                      isActive 
                        ? 'bg-blue-600/20 border-blue-500 text-white shadow-md shadow-blue-500/5' 
                        : 'bg-slate-950/40 border-slate-800/80 text-slate-400'
                    }`}
                  >
                    <span className="text-xs font-semibold">{county}</span>
                    <Icons.CheckCircle2 className={`w-3.5 h-3.5 ${isActive ? 'text-teal-400 opacity-100' : 'opacity-0'}`} />
                  </div>
                );
              })}
            </div>

            {/* Subtle animated vehicle/location indicator */}
            <div className="bg-slate-950/60 p-3 rounded-xl border border-slate-800/80 flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-teal-950 text-teal-400 flex items-center justify-center shrink-0 border border-teal-800/40">
                <Icons.Sparkles className="w-5 h-5 animate-spin" style={{ animationDuration: '6s' }} />
              </div>
              <div className="text-left">
                <p className="text-[11px] text-slate-400 uppercase tracking-wider font-semibold">Live Fleet Priority Hub</p>
                <p className="text-xs text-white font-medium">
                  Dispatching in <span className="text-teal-300 font-bold">{countiesList[activeCountyIndex]} County</span>...
                </p>
              </div>
            </div>
            
            <p className="text-[10px] text-slate-500 text-center mt-3">
              * Winter hours evaluation currently active for mountain zones.
            </p>
          </div>

          {/* Decorative glowing background node */}
          <div className="absolute -bottom-6 -right-6 w-32 h-32 rounded-full bg-blue-600/10 blur-2xl pointer-events-none" />
        </div>

      </div>

      {/* Subtle Scroll Down Indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1 cursor-pointer group" onClick={onExploreServices}>
        <span className="text-[10px] text-slate-400 uppercase tracking-[0.2em] font-semibold group-hover:text-teal-400 transition-colors">
          Scroll to explore
        </span>
        <div className="w-6 h-10 rounded-full border-2 border-slate-600 flex justify-center p-1 group-hover:border-teal-400 transition-colors">
          <div className="w-1 h-2 bg-teal-400 rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
};
