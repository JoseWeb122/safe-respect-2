import React, { useState } from "react";
import * as Icons from "lucide-react";
import { SERVICES, Service } from "../data/mockData";
import { ServiceModal } from "./ServiceModal";

interface ServicesProps {
  onRequestRide: () => void;
}

export const Services: React.FC<ServicesProps> = ({ onRequestRide }) => {
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  return (
    <section id="services" className="py-24 bg-slate-50 relative overflow-hidden">
      
      {/* Background decoration elements to look premium and medical-professional */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-teal-100/30 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-extrabold text-blue-600 uppercase tracking-widest bg-blue-100/50 px-3.5 py-1.5 rounded-full inline-block mb-3">
            Our Elite Capabilities
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight font-serif-premium">
            Transportation That Puts People First
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-600 to-teal-500 mx-auto my-5 rounded-full" />
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            Getting to the care you need should be simple, comfortable, and dependable. We orchestrate non-emergency transit designed around the highest standard of passenger dignity.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service) => {
            // Dynamically resolve icon from lucide-react
            const IconComponent = (Icons as any)[service.iconName] || Icons.HelpCircle;

            return (
              <div
                key={service.id}
                className="bg-white rounded-2xl p-6 md:p-8 border border-slate-200/80 shadow-sm hover:shadow-xl hover:border-blue-300/40 transition-all duration-300 flex flex-col justify-between group shimmer-hover"
              >
                <div>
                  {/* Icon block */}
                  <div className="p-3 w-12 h-12 rounded-xl bg-blue-50 text-blue-600 mb-6 flex items-center justify-center transition-transform group-hover:scale-110 duration-300">
                    <IconComponent className="w-6 h-6" />
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-slate-600 text-sm leading-relaxed mb-6">
                    {service.shortDescription}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <button
                    onClick={() => setSelectedService(service)}
                    className="text-xs font-bold text-blue-600 hover:text-blue-800 transition-colors flex items-center gap-1.5 cursor-pointer group/btn uppercase tracking-wider"
                  >
                    <span>Learn More Details</span>
                    <Icons.ChevronRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                  </button>

                  <span className="text-[10px] text-slate-400 font-semibold tracking-wide uppercase bg-slate-100 px-2 py-1 rounded">
                    NY Area
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom trust statement block */}
        <div className="mt-16 bg-gradient-to-br from-slate-900 to-slate-950 text-white rounded-3xl p-8 md:p-12 shadow-2xl border border-slate-800 flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="space-y-3 max-w-xl text-left">
            <span className="text-[10px] text-teal-400 font-extrabold tracking-[0.25em] uppercase block">
              For Healthcare Professionals & Families
            </span>
            <h3 className="text-2xl font-bold font-serif-premium text-white">
              Need to coordinate recurring schedules?
            </h3>
            <p className="text-slate-300 text-sm leading-relaxed">
              We work closely with clinical managers, case managers, social workers, and families to support continuous outpatient care, physical therapy, and dialysis transportation schedules.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 shrink-0 w-full lg:w-auto">
            <button
              onClick={onRequestRide}
              className="bg-teal-500 hover:bg-teal-400 text-slate-950 font-bold py-3.5 px-6 rounded-xl transition-all text-xs tracking-wider uppercase shadow-md flex items-center justify-center gap-2 cursor-pointer"
            >
              <Icons.Sparkles className="w-4 h-4" />
              <span>Book Priority Ride</span>
            </button>
            <a
              href="tel:1-800-555-7379"
              className="bg-slate-800/80 hover:bg-slate-800 text-white border border-slate-700 font-semibold py-3.5 px-6 rounded-xl transition-all text-xs tracking-wider uppercase flex items-center justify-center gap-2"
            >
              <Icons.PhoneCall className="w-4 h-4 text-teal-400" />
              <span>Call Dispatch Desk</span>
            </a>
          </div>
        </div>

      </div>

      {/* Service details modal */}
      {selectedService && (
        <ServiceModal
          service={selectedService}
          onClose={() => setSelectedService(null)}
          onRequestRide={onRequestRide}
        />
      )}
    </section>
  );
};
