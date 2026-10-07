import React, { useState, useEffect } from "react";
import * as Icons from "lucide-react";
import { CONTACT_INFO } from "../data/mockData";

interface NavbarProps {
  onNavigate: (sectionId: string) => void;
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({ onNavigate, activeSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Home", id: "home" },
    { label: "Services", id: "services" },
    { label: "Service Area", id: "service-area" },
    { label: "Why Choose Us", id: "why-choose-us" },
    { label: "About", id: "about" },
    { label: "FAQ", id: "faq" },
    { label: "Contact", id: "contact" }
  ];

  const handleItemClick = (id: string) => {
    setIsMobileMenuOpen(false);
    onNavigate(id);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? "bg-slate-900/90 backdrop-blur-md shadow-lg py-3 border-b border-slate-800/80"
            : "bg-gradient-to-b from-slate-950/80 to-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-4">
            
            {/* Logo area */}
            <div 
              className="flex flex-col cursor-pointer shrink-0"
              onClick={() => handleItemClick("home")}
            >
              <div className="flex items-center gap-2">
                <div className="p-1.5 rounded-lg bg-teal-500/20 text-teal-400 border border-teal-500/30">
                  <Icons.ShieldPlus className="w-5 h-5 animate-pulse" />
                </div>
                <span className="text-white font-extrabold text-lg tracking-wider font-sans">
                  S3R<span className="text-teal-400">SPEEDY</span>
                </span>
              </div>
              <div className="hidden sm:block mt-0.5 text-[9px] text-slate-400 tracking-[0.22em] uppercase font-bold">
                SAFE • RESPECTABLE • RELIABLE • SPEEDY
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1.5 bg-slate-950/30 p-1.5 rounded-full border border-slate-800/50">
              {navItems.map((item) => {
                const isActive = activeSection === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => handleItemClick(item.id)}
                    className={`px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide transition-all uppercase duration-200 cursor-pointer ${
                      isActive
                        ? "bg-teal-500 text-slate-950 shadow-md"
                        : "text-slate-300 hover:text-white hover:bg-white/5"
                    }`}
                  >
                    {item.label}
                  </button>
                );
              })}
            </nav>

            {/* Right Side Button */}
            <div className="hidden md:flex items-center gap-3">
              <a 
                href={`tel:${CONTACT_INFO.phone}`} 
                className="text-xs text-slate-300 hover:text-teal-300 font-medium flex items-center gap-1.5 transition-colors"
              >
                <Icons.PhoneCall className="w-3.5 h-3.5 text-teal-400 animate-bounce" />
                <span className="hidden xl:inline">{CONTACT_INFO.phoneDisplay}</span>
              </a>
              <button
                onClick={() => handleItemClick("request-transportation")}
                className="bg-gradient-to-r from-blue-600 to-teal-500 hover:from-blue-700 hover:to-teal-600 text-white font-semibold text-xs py-2 px-4 rounded-full transition-all tracking-wide uppercase shadow-md cursor-pointer flex items-center gap-1.5 hover:scale-105 active:scale-95"
              >
                <Icons.CalendarCheck className="w-3.5 h-3.5" />
                <span>Request a Ride</span>
              </button>
            </div>

            {/* Mobile Menu Trigger */}
            <div className="flex items-center gap-3 lg:hidden">
              <a 
                href={`tel:${CONTACT_INFO.phone}`} 
                className="p-2.5 rounded-full bg-slate-800/80 text-teal-400 hover:bg-slate-700 transition-colors"
                aria-label="Call Dispatch"
              >
                <Icons.Phone className="w-4 h-4" />
              </a>
              
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2.5 rounded-lg bg-slate-800/80 text-slate-200 hover:text-white transition-colors cursor-pointer"
                aria-label="Toggle Menu"
              >
                {isMobileMenuOpen ? (
                  <Icons.X className="w-5 h-5" />
                ) : (
                  <Icons.Menu className="w-5 h-5" />
                )}
              </button>
            </div>

          </div>
        </div>
      </header>

      {/* Mobile Drawer Overlay */}
      <div
        className={`fixed inset-0 z-35 bg-slate-950/95 backdrop-blur-lg lg:hidden transition-all duration-300 flex flex-col justify-between p-6 pt-24 ${
          isMobileMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-full pointer-events-none"
        }`}
      >
        <div className="space-y-4">
          <span className="text-[10px] font-bold tracking-[0.3em] text-teal-400 uppercase block mb-2 border-b border-slate-800 pb-2">
            Non-Emergency Medical Transportation
          </span>
          <div className="grid grid-cols-1 gap-2">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleItemClick(item.id)}
                  className={`w-full text-left py-3 px-4 rounded-xl text-sm font-semibold tracking-wide transition-all uppercase flex items-center justify-between ${
                    isActive
                      ? "bg-gradient-to-r from-blue-600 to-teal-600 text-white shadow-md"
                      : "text-slate-300 hover:bg-slate-900 hover:text-white"
                  }`}
                >
                  <span>{item.label}</span>
                  <Icons.ChevronRight className="w-4 h-4 opacity-60" />
                </button>
              );
            })}
          </div>
        </div>

        {/* Mobile menu bottom contact details */}
        <div className="bg-slate-900 p-4 rounded-2xl border border-slate-800 space-y-4">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-lg bg-teal-500/10 text-teal-400">
              <Icons.Clock className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[10px] text-slate-400 uppercase tracking-wider block">Service Hours</span>
              <strong className="text-white text-xs">6:00 AM – 6:00 PM (Mon-Sun)</strong>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-lg bg-blue-500/10 text-blue-400">
              <Icons.ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[10px] text-slate-400 uppercase tracking-wider block">NY Coverage Hub</span>
              <strong className="text-white text-xs">7 Counties Active</strong>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-2 pt-2">
            <a
              href={`tel:${CONTACT_INFO.phone}`}
              className="flex items-center justify-center gap-2 bg-slate-800 hover:bg-slate-700 text-white font-bold py-2.5 px-3 rounded-lg text-xs tracking-wider uppercase transition-all"
            >
              <Icons.PhoneCall className="w-3.5 h-3.5 text-teal-400" />
              <span>Call Now</span>
            </a>
            
            <button
              onClick={() => handleItemClick("request-transportation")}
              className="flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-teal-500 text-white font-bold py-2.5 px-3 rounded-lg text-xs tracking-wider uppercase transition-all"
            >
              <Icons.CalendarCheck className="w-3.5 h-3.5" />
              <span>Book Ride</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
