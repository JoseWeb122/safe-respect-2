import React, { useState } from "react";
import * as Icons from "lucide-react";

export const HowItWorks: React.FC = () => {
  const [hoveredStep, setHoveredStep] = useState<number | null>(null);

  const steps = [
    {
      number: "01",
      title: "Tell Us Where You Need To Go",
      description: "Submit our premium online request form with patient information, pickup locations, preferred timings, and any specialized assistance needs.",
      icon: Icons.MapPin,
      badge: "Quick Submission",
      tip: "We support pick-ups from homes, outpatient clinics, and hospital discharge desks."
    },
    {
      number: "02",
      title: "Schedule Your Transportation",
      description: "Our NY dispatch coordinators review your request, optimize the route according to county weather, and contact you via phone or email to finalize details.",
      icon: Icons.CalendarCheck,
      badge: "Expert Coordination",
      tip: "Our team operates 6 AM to 6 PM daily to schedule the perfect pickup window."
    },
    {
      number: "03",
      title: "We Arrive Ready",
      description: "A professional, highly respectful driver arrives in a clean luxury vehicle. They assist with boarding, securing belongings, and premium comfort arrangements.",
      icon: Icons.Truck,
      badge: "Professional Arrival",
      tip: "Drivers are trained in patient care, ensuring extreme dignity at every step."
    },
    {
      number: "04",
      title: "Travel With Confidence",
      description: "Relax in absolute comfort. We navigate smoothly to your doctor's office, rehab facility, or hospital entry, remaining available for prompt return transit.",
      icon: Icons.Sparkles,
      badge: "Safe Arrival",
      tip: "Your family or clinical team can be notified upon successful delivery."
    }
  ];

  return (
    <section id="how-it-works" className="py-24 bg-slate-900 text-white relative overflow-hidden">
      
      {/* Background Graphic Lines representing high-end transit tracking */}
      <div className="absolute inset-0 bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:24px_24px] opacity-20" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <span className="text-xs font-bold text-teal-400 uppercase tracking-widest bg-teal-400/10 px-4 py-1.5 rounded-full inline-block mb-3 border border-teal-400/20">
            Dignified NEMT Workflow
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight font-serif-premium">
            Transportation Made Simple
          </h2>
          <div className="w-12 h-1 bg-teal-400 mx-auto my-4 rounded-full" />
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            From the initial coordination call to safe drop-offs at your living room door, we ensure a seamless, professional experience without regional complexities.
          </p>
        </div>

        {/* 4-Step Timeline Layout */}
        <div className="relative">
          
          {/* Desktop Connecting Line */}
          <div className="hidden lg:block absolute top-[120px] left-[10%] right-[10%] h-0.5 bg-gradient-to-r from-blue-600 via-teal-400 to-indigo-600 opacity-60" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {steps.map((step, index) => {
              const StepIcon = step.icon;
              const isHovered = hoveredStep === index;

              return (
                <div
                  key={step.number}
                  className="flex flex-col items-center text-center group transition-all duration-300"
                  onMouseEnter={() => setHoveredStep(index)}
                  onMouseLeave={() => setHoveredStep(null)}
                >
                  {/* Step Bubble & Icon */}
                  <div className="relative mb-6">
                    
                    {/* Ring animation */}
                    <div className={`absolute -inset-3 rounded-full bg-teal-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse-ring`} />

                    {/* Step Number Badge */}
                    <div className="absolute -top-3 -right-3 w-7 h-7 rounded-full bg-blue-600 text-white font-extrabold text-xs flex items-center justify-center border-2 border-slate-900 shadow-md">
                      {step.number}
                    </div>

                    {/* Main Icon Container */}
                    <div className={`w-20 h-20 rounded-2xl flex items-center justify-center border-2 transition-all duration-300 ${
                      isHovered 
                        ? 'bg-gradient-to-br from-blue-600 to-teal-500 text-white border-teal-300 shadow-lg shadow-teal-500/20 scale-110' 
                        : 'bg-slate-950 text-slate-300 border-slate-800'
                    }`}>
                      <StepIcon className="w-8 h-8" />
                    </div>
                  </div>

                  {/* Step Badge */}
                  <span className="text-[10px] font-mono font-bold text-teal-400 tracking-widest uppercase mb-1 bg-slate-800/80 px-2.5 py-1 rounded">
                    {step.badge}
                  </span>

                  {/* Title & Description */}
                  <h3 className="text-lg font-bold text-white mb-3 tracking-wide group-hover:text-teal-300 transition-colors">
                    {step.title}
                  </h3>
                  
                  <p className="text-slate-400 text-xs leading-relaxed max-w-xs mb-4">
                    {step.description}
                  </p>

                  {/* Contextual Driver Tip */}
                  <div className={`p-3 rounded-xl border transition-all duration-300 text-left w-full mt-auto ${
                    isHovered
                      ? 'bg-slate-950/80 border-teal-500/40 text-slate-300'
                      : 'bg-slate-950/20 border-transparent text-transparent select-none'
                  }`}>
                    <div className="flex items-start gap-2">
                      <Icons.Heart className="w-3.5 h-3.5 text-teal-400 shrink-0 mt-0.5" />
                      <span className="text-[10px] leading-tight font-medium">
                        {step.tip}
                      </span>
                    </div>
                  </div>

                </div>
              );
            })}
          </div>
        </div>

        {/* Quick Help Box */}
        <div className="mt-16 text-center">
          <p className="text-slate-400 text-xs">
            Unsure of what to prepare? Speak to our team at{" "}
            <strong className="text-teal-400">1-800-555-S3R9</strong> for customized assistance options.
          </p>
        </div>

      </div>
    </section>
  );
};
