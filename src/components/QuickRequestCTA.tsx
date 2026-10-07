import React from "react";
import * as Icons from "lucide-react";
import { CONTACT_INFO } from "../data/mockData";

interface QuickRequestCTAProps {
  onRequestRide: () => void;
}

export const QuickRequestCTA: React.FC<QuickRequestCTAProps> = ({ onRequestRide }) => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-30 lg:hidden bg-slate-900/95 backdrop-blur-md border-t border-slate-800 shadow-[0_-10px_20px_rgba(0,0,0,0.3)] p-3">
      <div className="max-w-md mx-auto grid grid-cols-2 gap-3">
        
        {/* Call Now button */}
        <a
          href={`tel:${CONTACT_INFO.phone}`}
          className="flex items-center justify-center gap-2 bg-slate-800 hover:bg-slate-750 text-white font-bold py-3 px-4 rounded-xl text-xs uppercase tracking-wider transition-all active:scale-95 border border-slate-750"
        >
          <Icons.PhoneCall className="w-4 h-4 text-teal-400 animate-bounce" />
          <span className="truncate">Call Dispatch</span>
        </a>

        {/* Request ride trigger */}
        <button
          onClick={onRequestRide}
          className="flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-teal-500 hover:from-blue-700 hover:to-teal-600 text-white font-bold py-3 px-4 rounded-xl text-xs uppercase tracking-wider transition-all active:scale-95 shadow-md shadow-teal-500/10 cursor-pointer"
        >
          <Icons.CalendarDays className="w-4 h-4 text-teal-100" />
          <span className="truncate">Request Ride</span>
        </button>

      </div>
    </div>
  );
};
