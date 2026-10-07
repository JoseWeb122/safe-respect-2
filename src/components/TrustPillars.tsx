import React from "react";
import * as Icons from "lucide-react";

export const TrustPillars: React.FC = () => {
  const pillars = [
    {
      title: "SAFE",
      description: "Your comfort and well-being come first.",
      tagline: "Comprehensive care standard",
      icon: Icons.ShieldCheck,
      color: "from-emerald-500/10 to-teal-500/10",
      textColor: "text-emerald-500",
      borderColor: "hover:border-emerald-500/40"
    },
    {
      title: "RESPECTABLE",
      description: "Professional service delivered with care and dignity.",
      tagline: "Empathetic passenger service",
      icon: Icons.HeartHandshake,
      color: "from-blue-500/10 to-indigo-500/10",
      textColor: "text-blue-500",
      borderColor: "hover:border-blue-500/40"
    },
    {
      title: "RELIABLE",
      description: "Dependable transportation when you need it.",
      tagline: "Punctual regional dispatch",
      icon: Icons.CheckSquare,
      color: "from-indigo-500/10 to-purple-500/10",
      textColor: "text-indigo-500",
      borderColor: "hover:border-indigo-500/40"
    },
    {
      title: "SPEEDY",
      description: "Prompt service designed around your schedule.",
      tagline: "Optimized arrival timeframes",
      icon: Icons.Zap,
      color: "from-teal-500/10 to-blue-500/10",
      textColor: "text-teal-500",
      borderColor: "hover:border-teal-500/40"
    }
  ];

  return (
    <div className="relative z-20 -mt-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        {pillars.map((pillar) => {
          const Icon = pillar.icon;
          return (
            <div
              key={pillar.title}
              className={`bg-slate-900 border border-slate-800 rounded-2xl p-6 transition-all duration-300 transform hover:-translate-y-1.5 hover:shadow-2xl hover:bg-slate-900/90 relative group overflow-hidden ${pillar.borderColor}`}
            >
              {/* Background Glow */}
              <div className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-br ${pillar.color} rounded-bl-full opacity-40 group-hover:scale-125 transition-transform duration-500`} />
              
              <div className="relative z-10 flex flex-col justify-between h-full">
                <div className="space-y-4">
                  
                  {/* Icon Area */}
                  <div className="flex items-center justify-between">
                    <div className={`p-3 rounded-xl bg-slate-800/80 ${pillar.textColor}`}>
                      <Icon className="w-6 h-6 group-hover:scale-110 transition-transform" />
                    </div>
                    <span className="text-[10px] text-slate-500 font-mono tracking-widest uppercase">
                      Core Pillar
                    </span>
                  </div>

                  {/* Text Details */}
                  <div>
                    <span className="text-[10px] font-bold text-teal-400 uppercase tracking-widest block mb-0.5">
                      {pillar.tagline}
                    </span>
                    <h3 className="text-xl font-bold text-white tracking-wide">
                      {pillar.title}
                    </h3>
                    <p className="text-slate-400 text-sm mt-2 leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>

                </div>

                {/* Micro-interaction Line */}
                <div className="w-10 h-0.5 bg-slate-800 group-hover:w-full transition-all duration-500 mt-5" />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
