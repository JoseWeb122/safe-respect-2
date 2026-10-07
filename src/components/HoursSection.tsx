import React, { useState, useEffect } from "react";
import * as Icons from "lucide-react";
import { OPERATING_HOURS } from "../data/mockData";

export const HoursSection: React.FC = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  // Determine if we are currently inside 6:00 AM - 6:00 PM (Eastern Time region approximation)
  const currentHour = time.getHours();
  const isOpen = currentHour >= 6 && currentHour < 18;

  return (
    <div className="bg-slate-900 text-white rounded-3xl p-6 sm:p-8 border border-slate-800 shadow-xl relative overflow-hidden text-left h-full flex flex-col justify-between">
      
      {/* Decorative vector background */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 rounded-full blur-2xl pointer-events-none" />
      
      <div>
        <div className="flex items-center justify-between mb-6">
          <span className="text-xs font-bold text-teal-400 uppercase tracking-widest flex items-center gap-2">
            <span className={`w-2.5 h-2.5 rounded-full ${isOpen ? 'bg-emerald-500 animate-pulse' : 'bg-amber-500'}`} />
            {isOpen ? "Currently Operating Now" : "Currently Closed for Intake"}
          </span>
          <span className="text-[10px] font-semibold text-slate-400 font-mono">
            New York Time
          </span>
        </div>

        <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-2 font-serif-premium">
          We're Here When You Need Us
        </h3>
        
        <p className="text-slate-400 text-xs leading-relaxed mb-6">
          Punctuality and meticulous scheduling mean our service operates seven days a week to support dialyses, post-rehab discharges, and general family doctor visits.
        </p>

        {/* Big Visual Clock representation */}
        <div className="bg-slate-950 p-4 rounded-2xl border border-slate-800 flex items-center gap-4 mb-6">
          
          {/* Animated clock circle */}
          <div className="w-12 h-12 rounded-full border-2 border-teal-400 flex items-center justify-center shrink-0 relative">
            <div className="w-1 h-3.5 bg-teal-400 absolute top-2 left-1/2 -translate-x-1/2 origin-bottom animate-spin" style={{ animationDuration: '60s' }} />
            <div className="w-3 h-0.5 bg-blue-400 absolute top-1/2 left-1/2 origin-left animate-spin" style={{ animationDuration: '360s' }} />
            <div className="w-1.5 h-1.5 bg-white rounded-full z-10" />
          </div>

          <div>
            <span className="text-xs text-slate-400 block uppercase font-bold tracking-wider">
              {OPERATING_HOURS.days}
            </span>
            <span className="text-xl font-bold text-white block">
              {OPERATING_HOURS.current}
            </span>
          </div>

        </div>

        <div className="space-y-3 mb-6">
          <div className="flex items-start gap-3 bg-slate-950/40 p-3 rounded-lg border border-slate-800 text-xs">
            <Icons.CalendarCheck className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
            <div>
              <strong className="text-white block font-semibold">Pre-booking availability:</strong>
              Rides can be pre-scheduled days in advance. Our digital intake accepts requests 24/7.
            </div>
          </div>
        </div>

      </div>

      <div className="pt-4 border-t border-slate-800 text-slate-400 text-xs space-y-2">
        <div className="flex items-start gap-2 text-teal-300">
          <Icons.Snowflake className="w-4 h-4 shrink-0 mt-0.5 animate-spin" style={{ animationDuration: '10s' }} />
          <span>
            {OPERATING_HOURS.note}
          </span>
        </div>
        <p className="text-[10px] text-slate-500">
          * Extreme upstate snow warnings may trigger emergency routing protocols.
        </p>
      </div>

    </div>
  );
};
