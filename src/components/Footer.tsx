import React from "react";
import * as Icons from "lucide-react";
import { CONTACT_INFO, OPERATING_HOURS } from "../data/mockData";

interface FooterProps {
  onNavigate: (sectionId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const countiesList = [
    "Monroe", "Genesee", "Orleans", "Wyoming", "Ontario", "Livingston", "Wayne"
  ];

  const handleLinkClick = (id: string, e: React.MouseEvent) => {
    e.preventDefault();
    onNavigate(id);
  };

  return (
    <footer className="bg-slate-950 text-slate-400 pt-16 pb-8 border-t border-slate-900 relative overflow-hidden">
      
      {/* Subtle digital background light grid */}
      <div className="absolute inset-0 bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:32px_32px] opacity-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Grid content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 pb-12 border-b border-slate-900 text-left">
          
          {/* Col 1: Logo & Company Description (span 4) */}
          <div className="lg:col-span-4 space-y-4">
            
            {/* Logo */}
            <div 
              className="flex flex-col cursor-pointer"
              onClick={(e) => handleLinkClick("home", e as any)}
            >
              <div className="flex items-center gap-2">
                <div className="p-1.5 rounded-lg bg-teal-500/20 text-teal-400 border border-teal-500/30">
                  <Icons.ShieldPlus className="w-5 h-5" />
                </div>
                <span className="text-white font-black text-lg tracking-wider">
                  S3R<span className="text-teal-400">SPEEDY</span>
                </span>
              </div>
              <div className="mt-1 text-[8px] text-slate-450 tracking-[0.25em] uppercase font-bold">
                SAFE • RESPECTABLE • RELIABLE • SPEEDY
              </div>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              S3R provides non-emergency medical transportation (NEMT) services across Western and Finger Lakes New York. Our entire driver standard revolves around safety, respect, reliability, and speedy dispatch.
            </p>

            <div className="text-xs text-slate-300">
              <strong className="text-white font-semibold block">Operating Hours:</strong>
              {OPERATING_HOURS.current} (Mon - Sun)
            </div>

            <div className="text-[10px] text-slate-500">
              * Active winter hours extension evaluations in effect for mountain zones.
            </div>
          </div>

          {/* Col 2: Navigation (span 2) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs font-bold text-white uppercase tracking-widest pb-2 border-b border-slate-900">
              Quick Shortcuts
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a 
                  href="#home" 
                  onClick={(e) => handleLinkClick("home", e)} 
                  className="hover:text-teal-400 transition-colors block"
                >
                  Home Portal
                </a>
              </li>
              <li>
                <a 
                  href="#services" 
                  onClick={(e) => handleLinkClick("services", e)} 
                  className="hover:text-teal-400 transition-colors block"
                >
                  Specialized Services
                </a>
              </li>
              <li>
                <a 
                  href="#service-area" 
                  onClick={(e) => handleLinkClick("service-area", e)} 
                  className="hover:text-teal-400 transition-colors block"
                >
                  7-County Coverage Map
                </a>
              </li>
              <li>
                <a 
                  href="#why-choose-us" 
                  onClick={(e) => handleLinkClick("why-choose-us", e)} 
                  className="hover:text-teal-400 transition-colors block"
                >
                  Why Families Choose Us
                </a>
              </li>
              <li>
                <a 
                  href="#about" 
                  onClick={(e) => handleLinkClick("about", e)} 
                  className="hover:text-teal-400 transition-colors block"
                >
                  About Our Team
                </a>
              </li>
              <li>
                <a 
                  href="#faq" 
                  onClick={(e) => handleLinkClick("faq", e)} 
                  className="hover:text-teal-400 transition-colors block"
                >
                  FAQ Help Desk
                </a>
              </li>
              <li>
                <a 
                  href="#contact" 
                  onClick={(e) => handleLinkClick("contact", e)} 
                  className="hover:text-teal-400 transition-colors block"
                >
                  Contact Coordination
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Service Areas (span 3) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-bold text-white uppercase tracking-widest pb-2 border-b border-slate-900">
              NY Counties Served
            </h4>
            
            <div className="grid grid-cols-2 gap-x-2 gap-y-1.5 text-xs">
              {countiesList.map((county) => (
                <a
                  key={county}
                  href="#service-area"
                  onClick={(e) => handleLinkClick("service-area", e)}
                  className="hover:text-teal-300 transition-colors flex items-center gap-1.5"
                >
                  <Icons.MapPin className="w-3 h-3 text-teal-400" />
                  <span>{county} Co.</span>
                </a>
              ))}
            </div>

            <div className="pt-2">
              <span className="text-[10px] text-slate-500 uppercase block tracking-wider font-semibold">Primary NY Dispatch Hub</span>
              <strong className="text-white text-xs block font-medium mt-0.5">{CONTACT_INFO.mainOffice}</strong>
            </div>
          </div>

          {/* Col 4: Request CTA (span 3) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-bold text-white uppercase tracking-widest pb-2 border-b border-slate-900">
              Ready to Coordinate?
            </h4>
            
            <p className="text-xs text-slate-400 leading-relaxed">
              Submit your trip coordinates directly online. Our non-emergency intake staff will review and follow up with you.
            </p>

            <button
              onClick={(e) => handleLinkClick("request-transportation", e as any)}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2.5 px-4 rounded-xl text-xs uppercase tracking-widest transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer"
            >
              <Icons.FileText className="w-3.5 h-3.5" />
              <span>Request a Ride</span>
            </button>

            <a
              href={`tel:${CONTACT_INFO.phone}`}
              className="w-full bg-slate-900 hover:bg-slate-850 text-slate-200 border border-slate-800 font-semibold py-2.5 px-4 rounded-xl text-xs uppercase tracking-widest transition-all flex items-center justify-center gap-2"
            >
              <Icons.PhoneCall className="w-3.5 h-3.5 text-teal-400" />
              <span>Call Dispatch Desk</span>
            </a>
          </div>

        </div>

        {/* Bottom section: Legal, design agency trademark, and copyright */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs">
          
          <div className="text-slate-500 text-center md:text-left">
            <p>© 2026 S3R SPEEDY Medical Transportation NY. All rights reserved.</p>
            <p className="text-[10px] text-slate-600 mt-1">
              Disclaimer: This is a high-fidelity front-end design prototype for presentation purposes only. All requests simulated on frontend state.
            </p>
          </div>

          <div className="flex items-center gap-4 text-slate-500">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <span>•</span>
            <a href="#" className="hover:text-white transition-colors">Terms & Conditions</a>
            <span>•</span>
            <span className="text-[10px] text-slate-600 font-mono">AGENCY GRADE V1</span>
          </div>

        </div>

      </div>
    </footer>
  );
};
