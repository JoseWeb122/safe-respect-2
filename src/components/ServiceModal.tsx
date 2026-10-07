import React from "react";
import * as Icons from "lucide-react";
import { Service } from "../data/mockData";

interface ServiceModalProps {
  service: Service | null;
  onClose: () => void;
  onRequestRide: () => void;
}

export const ServiceModal: React.FC<ServiceModalProps> = ({
  service,
  onClose,
  onRequestRide
}) => {
  if (!service) return null;

  // Dynamically resolve icon from lucide-react
  const IconComponent = (Icons as any)[service.iconName] || Icons.HelpCircle;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-slate-900/80 backdrop-blur-md transition-opacity duration-300"
        onClick={onClose}
      />
      
      {/* Modal Container */}
      <div className="relative w-full max-w-2xl overflow-hidden rounded-2xl bg-white shadow-2xl transition-all duration-300 border border-slate-100 max-h-[90vh] flex flex-col z-10 animate-in fade-in zoom-in-95">
        
        {/* Header styling with brand blue/teal gradient accent */}
        <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-blue-600 via-teal-500 to-indigo-600" />
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-500 hover:text-slate-800 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
          aria-label="Close modal"
        >
          <Icons.X className="w-5 h-5" />
        </button>

        <div className="p-6 md:p-8 overflow-y-auto">
          <div className="flex items-center gap-4 mb-6">
            <div className="p-3.5 rounded-xl bg-blue-50 text-blue-600">
              <IconComponent className="w-8 h-8" />
            </div>
            <div>
              <span className="text-xs font-semibold text-teal-600 uppercase tracking-widest">
                Our Specialized Services
              </span>
              <h3 className="text-2xl md:text-3xl font-bold text-slate-900 font-serif-premium">
                {service.title}
              </h3>
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <h4 className="text-xs font-bold uppercase text-slate-400 tracking-wider mb-2">
                Service Overview
              </h4>
              <p className="text-slate-600 text-base leading-relaxed">
                {service.longDescription}
              </p>
            </div>

            <div>
              <h4 className="text-xs font-bold uppercase text-slate-400 tracking-wider mb-3">
                What Our Passengers Can Expect:
              </h4>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {service.expectations.map((item, index) => (
                  <li 
                    key={index} 
                    className="flex items-start gap-3 bg-slate-50 p-3 rounded-lg border border-slate-100/60 hover:border-blue-100 transition-colors"
                  >
                    <Icons.CheckCircle2 className="w-5 h-5 text-teal-600 shrink-0 mt-0.5" />
                    <span className="text-sm text-slate-700 font-medium leading-tight">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-blue-50/50 rounded-xl p-4 border border-blue-100/50 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-left">
                <span className="text-xs font-bold text-blue-700 uppercase tracking-wider block">
                  Need this service?
                </span>
                <span className="text-xs text-slate-500">
                  Submit a request in under 2 minutes for NY counties coverage.
                </span>
              </div>
              <button
                onClick={() => {
                  onClose();
                  onRequestRide();
                }}
                className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2.5 px-5 rounded-lg transition-all shadow-md hover:shadow-lg text-sm flex items-center justify-center gap-2 cursor-pointer group"
              >
                <span>Request This Service</span>
                <Icons.ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>

        {/* Footer info line */}
        <div className="px-6 py-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between text-xs text-slate-400">
          <span className="flex items-center gap-1.5">
            <Icons.ShieldAlert className="w-3.5 h-3.5 text-teal-600" />
            Safe • Respectable • Reliable • Speedy
          </span>
          <span>7 Counties NY</span>
        </div>
      </div>
    </div>
  );
};
