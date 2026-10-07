import React from "react";
import * as Icons from "lucide-react";
import { CONTACT_INFO, OPERATING_HOURS } from "../data/mockData";

interface ContactSectionProps {
  onRequestRide: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onRequestRide }) => {
  return (
    <section id="contact" className="py-24 bg-slate-900 text-white relative overflow-hidden">
      
      {/* Background radial gradient decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Content Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Premium Contact parameters */}
          <div className="lg:col-span-7 space-y-8 text-left">
            <div>
              <span className="text-xs font-bold text-teal-400 uppercase tracking-widest bg-teal-400/10 px-3.5 py-1.5 rounded-full inline-block mb-3 border border-teal-400/20">
                Contact Coordination Desk
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight font-serif-premium leading-tight">
                Let's Get You Where <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-300">
                  You Need To Go
                </span>
              </h2>
              <p className="text-slate-400 text-sm sm:text-base mt-4 leading-relaxed max-w-xl">
                Ready to coordinate your next doctor appointment, rehab visit, or healthcare facility travel? Reach out to our New York non-emergency dispatch hub. We prioritize safe, punctual, and highly respectable transit.
              </p>
            </div>

            {/* Parameter Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              
              {/* Phone Card */}
              <div className="bg-slate-950 p-5 rounded-2xl border border-slate-850 flex items-start gap-4">
                <div className="p-3 bg-teal-500/10 text-teal-400 rounded-xl">
                  <Icons.PhoneCall className="w-5 h-5 animate-bounce" />
                </div>
                <div>
                  <span className="text-[10px] text-slate-500 font-bold uppercase block tracking-wider">
                    Direct Phone Line
                  </span>
                  <a 
                    href={`tel:${CONTACT_INFO.phone}`} 
                    className="text-base font-bold text-white hover:text-teal-400 transition-colors block mt-0.5"
                  >
                    {CONTACT_INFO.phoneDisplay}
                  </a>
                  <span className="text-[10px] text-slate-400 block mt-1">
                    Direct dispatch desk
                  </span>
                </div>
              </div>

              {/* Email Card */}
              <div className="bg-slate-950 p-5 rounded-2xl border border-slate-850 flex items-start gap-4">
                <div className="p-3 bg-blue-500/10 text-blue-400 rounded-xl">
                  <Icons.Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] text-slate-500 font-bold uppercase block tracking-wider">
                    Email Correspondence
                  </span>
                  <a 
                    href={`mailto:${CONTACT_INFO.email}`} 
                    className="text-sm font-bold text-white hover:text-blue-400 transition-colors block mt-1 break-all"
                  >
                    {CONTACT_INFO.email}
                  </a>
                  <span className="text-[10px] text-slate-400 block mt-1">
                    Typical response: under 2 hours
                  </span>
                </div>
              </div>

              {/* Service Area Card */}
              <div className="bg-slate-950 p-5 rounded-2xl border border-slate-850 flex items-start gap-4">
                <div className="p-3 bg-indigo-500/10 text-indigo-400 rounded-xl">
                  <Icons.MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] text-slate-500 font-bold uppercase block tracking-wider">
                    Service Area Coverage
                  </span>
                  <span className="text-xs font-bold text-white block mt-1">
                    7 Counties in New York State
                  </span>
                  <span className="text-[10px] text-slate-400 block mt-1 leading-normal">
                    Monroe, Genesee, Orleans, Wyoming, Ontario, Livingston, Wayne
                  </span>
                </div>
              </div>

              {/* Hours Card */}
              <div className="bg-slate-950 p-5 rounded-2xl border border-slate-850 flex items-start gap-4">
                <div className="p-3 bg-purple-500/10 text-purple-400 rounded-xl">
                  <Icons.Clock className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] text-slate-500 font-bold uppercase block tracking-wider">
                    Operating Hours
                  </span>
                  <span className="text-xs font-bold text-white block mt-1">
                    {OPERATING_HOURS.current}
                  </span>
                  <span className="text-[10px] text-slate-400 block mt-1">
                    {OPERATING_HOURS.days}
                  </span>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Dynamic Illustrated Interactive Desk */}
          <div className="lg:col-span-5 bg-gradient-to-br from-slate-950 to-slate-900 border border-slate-800 p-8 rounded-3xl relative overflow-hidden text-left shadow-2xl">
            
            {/* Ambient indicator lights */}
            <div className="absolute top-4 right-4 flex items-center gap-1 bg-teal-500/10 px-2.5 py-1 rounded-full text-[10px] text-teal-400 font-mono">
              <span className="w-2 h-2 rounded-full bg-teal-400 animate-pulse" />
              <span>NY DISPATCH ACTIVE</span>
            </div>

            <div className="space-y-6">
              <div className="p-3.5 w-12 h-12 bg-teal-500/10 text-teal-400 rounded-2xl flex items-center justify-center border border-teal-500/20">
                <Icons.Sparkles className="w-6 h-6 animate-spin" style={{ animationDuration: '8s' }} />
              </div>

              <div>
                <h3 className="text-lg font-bold text-white">Need to secure scheduling now?</h3>
                <p className="text-slate-400 text-xs mt-1.5 leading-relaxed">
                  Avoid long phone-queues. Fill out our digital transportation form and we will review your exact pick-up address and travel goals immediately.
                </p>
              </div>

              <div className="space-y-3 pt-2">
                
                {/* Submit button */}
                <button
                  onClick={onRequestRide}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3.5 px-6 rounded-xl text-xs uppercase tracking-widest transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer group"
                >
                  <Icons.FileText className="w-4 h-4 text-teal-200 group-hover:scale-110 transition-transform" />
                  <span>Request Transportation</span>
                </button>

                {/* Call button */}
                <a
                  href={`tel:${CONTACT_INFO.phone}`}
                  className="w-full bg-slate-800 hover:bg-slate-700 text-white border border-slate-700 font-semibold py-3.5 px-6 rounded-xl text-xs uppercase tracking-widest transition-all flex items-center justify-center gap-2"
                >
                  <Icons.PhoneCall className="w-4 h-4 text-teal-400" />
                  <span>Call {CONTACT_INFO.phoneDisplay}</span>
                </a>

              </div>

              <div className="text-center pt-2">
                <span className="text-[10px] text-slate-500">
                  Non-Emergency Medical Transportation NY Prototype
                </span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
