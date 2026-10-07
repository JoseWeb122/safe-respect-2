import React, { useState } from "react";
import * as Icons from "lucide-react";
import { COUNTIES, County, OPERATING_HOURS, CONTACT_INFO } from "../data/mockData";

interface InteractiveMapProps {
  onCountySelect: (countyName: string) => void;
  onRequestRide: () => void;
}

export const InteractiveMap: React.FC<InteractiveMapProps> = ({
  onCountySelect,
  onRequestRide
}) => {
  const [hoveredCounty, setHoveredCounty] = useState<County | null>(null);
  const [selectedCounty, setSelectedCounty] = useState<County>(COUNTIES[0]); // default to Monroe

  // We design customized SVG coordinates/paths representing a stylized modern abstract map of our 7 counties
  // Designed layout:
  // Orleans (top-left), Monroe (top-middle), Wayne (top-right)
  // Genesee (mid-left), Livingston (mid-middle), Ontario (mid-right)
  // Wyoming (bottom-left)
  
  // Custom SVG paths that fit beautifully together in a 400x300 grid
  const countyPaths: Record<string, string> = {
    orleans: "M 40,30 L 140,30 L 140,100 L 40,100 Z",
    monroe: "M 140,30 L 260,30 L 260,110 L 180,110 L 140,100 Z",
    wayne: "M 260,30 L 380,30 L 380,100 L 260,100 Z",
    genesee: "M 40,100 L 140,100 L 140,170 L 40,170 Z",
    livingston: "M 140,100 L 180,110 L 220,110 L 220,200 L 140,200 Z",
    ontario: "M 220,110 L 260,110 L 380,100 L 380,200 L 220,200 Z",
    wyoming: "M 40,170 L 140,170 L 140,260 L 40,260 Z"
  };

  const handleCountyClick = (county: County) => {
    setSelectedCounty(county);
    onCountySelect(county.name);
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
      
      {/* Interactive Map Section */}
      <div className="lg:col-span-7 bg-slate-900/40 rounded-2xl p-6 border border-slate-800 flex flex-col justify-between relative overflow-hidden group">
        
        {/* Decorative Grid Lines to look like high-end navigation system */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:3rem_3rem] opacity-30 pointer-events-none" />
        
        <div className="relative z-10 flex items-center justify-between mb-4">
          <div>
            <span className="text-xs font-semibold text-teal-400 uppercase tracking-widest flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse-ring" />
              S3R Regional Service Grid
            </span>
            <h4 className="text-sm font-semibold text-white/90">
              Interactive 7-County Finger Lakes & Western NY Map
            </h4>
          </div>
          <div className="hidden sm:flex items-center gap-2 text-xs text-slate-400">
            <Icons.Compass className="w-4 h-4 text-slate-500 animate-spin" style={{ animationDuration: '20s' }} />
            <span>Interactive Map Portal</span>
          </div>
        </div>

        {/* The SVG Styled Map */}
        <div className="relative z-10 w-full h-[320px] sm:h-[380px] bg-slate-950/80 rounded-xl border border-slate-800/80 p-4 flex items-center justify-center">
          
          <svg
            viewBox="0 0 420 290"
            className="w-full h-full max-w-[480px] drop-shadow-[0_10px_25px_rgba(0,0,0,0.5)] transition-all duration-300"
          >
            {/* Lake Ontario Top Label */}
            <text x="210" y="20" fill="#38bdf8" fontSize="10" fontWeight="bold" letterSpacing="1.5" textAnchor="middle" opacity="0.6">
              LAKE ONTARIO OUTLINE (NORTH)
            </text>

            <g stroke="#0f172a" strokeWidth="2.5" strokeLinejoin="round">
              {COUNTIES.map((county) => {
                const path = countyPaths[county.id] || "";
                const isHovered = hoveredCounty?.id === county.id;
                const isSelected = selectedCounty.id === county.id;

                return (
                  <path
                    key={county.id}
                    d={path}
                    className="cursor-pointer transition-all duration-300"
                    fill={isSelected ? "#1e40af" : isHovered ? "#0d9488" : "#1e293b"}
                    opacity={isSelected ? "0.95" : isHovered ? "0.85" : "0.6"}
                    onMouseEnter={() => setHoveredCounty(county)}
                    onMouseLeave={() => setHoveredCounty(null)}
                    onClick={() => handleCountyClick(county)}
                  />
                );
              })}
            </g>

            {/* Display Text Labels on Map */}
            {COUNTIES.map((county) => {
              const isSelected = selectedCounty.id === county.id;
              const isHovered = hoveredCounty?.id === county.id;
              
              // Calculate center approximation for label
              let lx = 200;
              let ly = 150;
              if (county.id === "orleans") { lx = 90; ly = 65; }
              else if (county.id === "monroe") { lx = 200; ly = 70; }
              else if (county.id === "wayne") { lx = 320; ly = 65; }
              else if (county.id === "genesee") { lx = 90; ly = 135; }
              else if (county.id === "livingston") { lx = 180; ly = 155; }
              else if (county.id === "ontario") { lx = 300; ly = 155; }
              else if (county.id === "wyoming") { lx = 90; ly = 215; }

              return (
                <g 
                  key={`label-${county.id}`} 
                  className="pointer-events-none"
                >
                  <text
                    x={lx}
                    y={ly}
                    textAnchor="middle"
                    fill={isSelected ? "#38bdf8" : isHovered ? "#2dd4bf" : "#f1f5f9"}
                    fontSize={isSelected ? "11" : "10"}
                    fontWeight={isSelected ? "bold" : "normal"}
                    className="transition-all duration-200"
                  >
                    {county.name.replace(" County", "")}
                  </text>
                  <circle
                    cx={lx}
                    cy={ly + 10}
                    r={isSelected ? "4" : "2"}
                    fill={isSelected ? "#38bdf8" : "#94a3b8"}
                    className="transition-all duration-200"
                  />
                </g>
              );
            })}
          </svg>

          {/* Real-time Tooltip Indicator */}
          <div className="absolute bottom-3 left-3 right-3 bg-slate-900/95 border border-slate-700/60 p-2.5 rounded-lg text-xs text-slate-300 flex items-center justify-between backdrop-blur-sm">
            <span className="flex items-center gap-1.5">
              <Icons.Info className="w-3.5 h-3.5 text-blue-400 shrink-0" />
              {hoveredCounty ? (
                <span>
                  Hovering: <strong className="text-white">{hoveredCounty.name}</strong>
                </span>
              ) : (
                <span>Hover or click counties to preview regional coverage details.</span>
              )}
            </span>
            <span className="text-[10px] text-teal-400 uppercase tracking-widest font-mono">
              7/7 Active Counties
            </span>
          </div>
        </div>

        {/* Legend */}
        <div className="mt-4 flex flex-wrap justify-center gap-3 text-xs text-slate-400 z-10">
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 bg-blue-600 rounded-sm" />
            <span>Currently Selected</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 bg-teal-600 rounded-sm" />
            <span>Hovering Over</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 bg-slate-800 rounded-sm" />
            <span>Service Coverage Zone</span>
          </div>
        </div>
      </div>

      {/* Selected County Panel Information */}
      <div className="lg:col-span-5 flex flex-col justify-between bg-white rounded-2xl p-6 md:p-8 border border-slate-200 shadow-xl relative overflow-hidden">
        
        {/* Subtle decorative quote/background brand text */}
        <div className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-12 select-none opacity-[0.03] text-slate-900 font-bold text-9xl pointer-events-none">
          NY
        </div>

        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-semibold mb-4">
            <Icons.MapPin className="w-3.5 h-3.5" />
            <span>Serving {selectedCounty.name}</span>
          </div>

          <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-3 font-serif-premium">
            {selectedCounty.name}
          </h3>
          
          <p className="text-slate-600 text-sm leading-relaxed mb-6">
            {selectedCounty.description}
          </p>

          <div className="space-y-4 mb-6">
            <h5 className="text-xs font-bold text-slate-400 uppercase tracking-wider">
              Common Destinations & Facilities We Serve In This County:
            </h5>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {selectedCounty.highlights.map((facility, idx) => (
                <div 
                  key={idx}
                  className="flex items-center gap-2.5 bg-slate-50 px-3 py-2 rounded-lg border border-slate-100 text-xs text-slate-700 hover:bg-blue-50/40 hover:border-blue-100/60 transition-all duration-200"
                >
                  <Icons.Building2 className="w-3.5 h-3.5 text-teal-600 shrink-0" />
                  <span className="truncate font-medium">{facility}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="p-3 bg-teal-50/50 rounded-xl border border-teal-100 text-xs text-slate-600 leading-relaxed">
            <strong className="text-teal-800 font-semibold block mb-0.5">Prompt & Dignified Care Guaranteed</strong>
            Professional non-emergency medical transportation is fully operational throughout {selectedCounty.name} between {OPERATING_HOURS.current}.
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-slate-100 space-y-3">
          <button
            onClick={() => {
              onCountySelect(selectedCounty.name);
              onRequestRide();
            }}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-xl transition-all shadow-md hover:shadow-lg text-sm flex items-center justify-center gap-2 cursor-pointer group"
          >
            <span>Request Transportation in {selectedCounty.name.replace(" County", "")}</span>
            <Icons.ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>
          
          <div className="text-center">
            <span className="text-xs text-slate-400">
              Need immediate help? Call dispatch at{" "}
              <a href={`tel:${CONTACT_INFO.phone}`} className="text-blue-600 font-semibold hover:underline">
                {CONTACT_INFO.phoneDisplay}
              </a>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
