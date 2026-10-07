import React from "react";
import * as Icons from "lucide-react";

export const WhyChooseUs: React.FC = () => {
  const benefits = [
    {
      title: "Safety First",
      description: "Your safety and comfort are always a priority. Our vehicles undergo strict daily maintenance and rigorous sanitation, operated by drivers certified in safety transit standards.",
      icon: Icons.ShieldCheck,
      color: "text-emerald-500",
      bg: "bg-emerald-500/10"
    },
    {
      title: "Professional Service",
      description: "Respectful, dependable transportation from people who understand the importance of your appointment. Dignity and warm-hearted customer care define our entire driver culture.",
      icon: Icons.HeartHandshake,
      color: "text-teal-500",
      bg: "bg-teal-500/10"
    },
    {
      title: "Reliable Scheduling",
      description: "Transportation designed around your schedule and destination. We calculate route patterns and NY Upstate weather trends ahead of time to make sure you never miss your check-in.",
      icon: Icons.Clock,
      color: "text-blue-500",
      bg: "bg-blue-500/10"
    },
    {
      title: "Local Coverage",
      description: "Serving communities across seven counties throughout New York. Our deep regional roots mean we know local medical plazas, clinics, and hospital drop-off loops inside out.",
      icon: Icons.MapPin,
      color: "text-indigo-500",
      bg: "bg-indigo-500/10"
    }
  ];

  return (
    <section id="why-choose-us" className="py-24 bg-white relative overflow-hidden">
      
      {/* Background radial gradient decoration */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-72 h-72 bg-blue-50 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Large Cinematic Image with overlay & custom statistics badge */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-100 group">
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-slate-950/20 z-10 pointer-events-none" />
              
              <img
                src="https://images.pexels.com/photos/35831391/pexels-photo-35831391.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=650"
                alt="Compassionate driver assisting passenger into medical transport vehicle"
                className="w-full h-[450px] sm:h-[550px] object-cover object-center group-hover:scale-105 transition-transform duration-700 select-none"
              />

              {/* Float Premium Badge inside Image */}
              <div className="absolute bottom-6 left-6 right-6 bg-slate-950/90 backdrop-blur-md p-5 rounded-2xl border border-white/10 z-20">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-teal-500/20 text-teal-400 rounded-xl border border-teal-500/30">
                    <Icons.Award className="w-6 h-6 animate-pulse" />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold text-teal-400 uppercase tracking-widest block">
                      Certified Dignified NEMT
                    </span>
                    <h4 className="text-sm font-bold text-white">
                      Top-Tier Agency Design Standards
                    </h4>
                    <p className="text-xs text-slate-400 mt-1">
                      Professional patient-centric fleet optimized for safety.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Glowing background circles */}
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-teal-200/20 rounded-full blur-xl pointer-events-none" />
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-blue-200/20 rounded-full blur-xl pointer-events-none" />
          </div>

          {/* Right Column: Key details */}
          <div className="lg:col-span-6 text-left space-y-8">
            <div>
              <span className="text-xs font-extrabold text-blue-600 uppercase tracking-widest bg-blue-50 px-3.5 py-1.5 rounded-full inline-block mb-3">
                The Gold Standard
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-serif-premium">
                Why Families & Care Teams Choose S3R
              </h2>
              <p className="text-slate-600 text-sm sm:text-base mt-4 leading-relaxed">
                We believe medical transport is more than getting from A to B. It represents a vital connection to health, dignity, and peace of mind for you or your loved ones.
              </p>
            </div>

            {/* Benefits Blocks */}
            <div className="grid grid-cols-1 gap-6">
              {benefits.map((benefit, idx) => {
                const BenefitIcon = benefit.icon;
                return (
                  <div 
                    key={idx}
                    className="flex gap-4 p-4 rounded-2xl border border-slate-100 hover:border-slate-200/60 hover:bg-slate-50/50 transition-all duration-300 group"
                  >
                    <div className={`p-3 h-12 w-12 rounded-xl ${benefit.bg} ${benefit.color} flex items-center justify-center shrink-0 transition-transform group-hover:scale-110`}>
                      <BenefitIcon className="w-6 h-6" />
                    </div>

                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <h4 className="text-base font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                          {benefit.title}
                        </h4>
                        {/* Animated Checkmark */}
                        <Icons.CheckCircle2 className="w-4 h-4 text-emerald-500 opacity-60 shrink-0" />
                      </div>
                      <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Micro Trust Prompt */}
            <div className="p-4 bg-slate-50 rounded-xl border border-slate-200/60 flex items-center gap-3">
              <Icons.ShieldCheck className="w-5 h-5 text-teal-600 shrink-0" />
              <span className="text-xs text-slate-500">
                Authorized provider for self-pay, family-coordinated, and Medicaid-aligned non-emergency medical transportation across New York.
              </span>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
