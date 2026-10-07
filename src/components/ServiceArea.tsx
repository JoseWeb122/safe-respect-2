import React from "react";
import * as Icons from "lucide-react";
import { COUNTIES } from "../data/mockData";
import { InteractiveMap } from "./InteractiveMap";

interface ServiceAreaProps {
  onCountySelect: (countyName: string) => void;
  onRequestRide: () => void;
}

export const ServiceArea: React.FC<ServiceAreaProps> = ({
  onCountySelect,
  onRequestRide
}) => {
  return (
    <section id="service-area" className="py-24 bg-slate-950 text-white relative overflow-hidden">
      
      {/* Decorative premium digital grid overlays */}
      <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-slate-900 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-slate-900 to-transparent" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Block */}
        <div className="max-w-3xl mb-16 text-left">
          <span className="text-xs font-extrabold text-teal-400 uppercase tracking-widest bg-teal-400/10 px-3.5 py-1.5 rounded-full inline-block mb-3 border border-teal-400/20">
            Regional NY Dispatch Coverage
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white leading-tight font-serif-premium">
            Serving Communities Across <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-teal-300 to-indigo-400">
              7 New York Counties
            </span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-4 leading-relaxed max-w-2xl">
            S3R maintains continuous non-emergency medical transportation coverage across Western and Finger Lakes New York. Hover over or tap any county on the map below to discover local clinics, hospital discharge hubs, and regional services we regularly support.
          </p>
        </div>

        {/* Dynamic Interactive Area Container */}
        <div className="bg-slate-900/60 p-1 md:p-4 rounded-3xl border border-slate-800 backdrop-blur-md shadow-2xl">
          <InteractiveMap 
            onCountySelect={onCountySelect}
            onRequestRide={onRequestRide}
          />
        </div>

        {/* Cards Row - Detailed Summary of 7 counties for quick accessibility */}
        <div className="mt-16">
          <div className="flex items-center gap-2 mb-6">
            <Icons.ShieldAlert className="w-5 h-5 text-teal-400" />
            <h4 className="text-sm font-bold text-slate-300 uppercase tracking-widest">
              Direct County Dispatch Directory
            </h4>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-3">
            {COUNTIES.map((county) => (
              <div
                key={county.id}
                onClick={() => {
                  onCountySelect(county.name);
                  onRequestRide();
                }}
                className="bg-slate-900/80 border border-slate-800/80 p-4 rounded-xl hover:bg-slate-800/80 hover:border-teal-500/40 transition-all duration-300 cursor-pointer text-left group"
              >
                <div className="w-1.5 h-10 bg-teal-500 rounded-full absolute left-0 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity" />
                <h5 className="text-xs font-bold text-white mb-1 group-hover:text-teal-300 transition-colors">
                  {county.name}
                </h5>
                <span className="text-[10px] text-slate-400 font-mono block">
                  {county.highlights.length} Core Hubs
                </span>
                <span className="text-[9px] text-teal-400 font-semibold uppercase mt-2 inline-flex items-center gap-1 group-hover:underline">
                  Request NEMT
                  <Icons.ArrowRight className="w-2.5 h-2.5" />
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Footer info line */}
        <div className="mt-8 p-4 rounded-xl bg-slate-900/40 border border-slate-800/60 text-center text-xs text-slate-400 flex flex-col sm:flex-row items-center justify-center gap-2">
          <span>Are you traveling to a facility in an adjacent county?</span>
          <strong className="text-teal-400 font-semibold">
            We regularly coordinate border-county specialized trips. Contact us at 1-800-555-S3R9 to confirm.
          </strong>
        </div>

      </div>
    </section>
  );
};
