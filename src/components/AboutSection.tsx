import React from "react";
import * as Icons from "lucide-react";

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-slate-50 relative overflow-hidden">
      
      {/* Subtle decorations */}
      <div className="absolute top-0 left-0 w-80 h-80 bg-blue-100/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-teal-100/40 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Human Centered Story */}
          <div className="lg:col-span-7 text-left space-y-6">
            <span className="text-xs font-extrabold text-blue-600 uppercase tracking-widest bg-blue-100/50 px-3.5 py-1.5 rounded-full inline-block">
              Our Identity & Purpose
            </span>
            
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight font-serif-premium leading-tight">
              Transportation With Care <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-blue-800 to-indigo-900">
                Behind Every Single Mile
              </span>
            </h2>

            <div className="w-12 h-1 bg-blue-600 rounded-full my-4" />

            <div className="space-y-4 text-slate-600 text-sm sm:text-base leading-relaxed">
              <p>
                At our core, we believe that getting to essential medical care, physical rehabilitation, or specialized healthcare facilities should never be a source of stress or discomfort. We built this non-emergency medical transportation business to bridge the gap between regional New York patients and their wellness teams.
              </p>
              
              <p>
                We do not make exaggerated medical claims, nor do we act as emergency responders. Instead, our focus is squarely on providing the absolute pinnacle of **reliability, respect, safety, and convenience** for individuals who need specialized scheduling support.
              </p>

              <p>
                Whether it is a senior needing assistance negotiating passenger steps, a family coordinating transportation for a patient's recurring outpatient physical therapy, or a Medicaid coordinator arranging safe discharge travel, we treat every passenger with the deepest degree of personal care and human dignity.
              </p>
            </div>

            {/* Core Values Bullets */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4">
              <div className="flex items-center gap-2.5">
                <div className="p-1 rounded bg-teal-100 text-teal-800">
                  <Icons.Check className="w-4 h-4" />
                </div>
                <span className="text-xs font-bold text-slate-700">Community-Focused Support</span>
              </div>
              <div className="flex items-center gap-2.5">
                <div className="p-1 rounded bg-teal-100 text-teal-800">
                  <Icons.Check className="w-4 h-4" />
                </div>
                <span className="text-xs font-bold text-slate-700">Dignified Driver Culture</span>
              </div>
              <div className="flex items-center gap-2.5">
                <div className="p-1 rounded bg-teal-100 text-teal-800">
                  <Icons.Check className="w-4 h-4" />
                </div>
                <span className="text-xs font-bold text-slate-700">Clean, Pristine Vehicles</span>
              </div>
              <div className="flex items-center gap-2.5">
                <div className="p-1 rounded bg-teal-100 text-teal-800">
                  <Icons.Check className="w-4 h-4" />
                </div>
                <span className="text-xs font-bold text-slate-700">Punctual Dispatch Standards</span>
              </div>
            </div>
          </div>

          {/* Right Column: Statistics Grid & Cinematic Image Card */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="relative rounded-3xl overflow-hidden shadow-xl border border-slate-200">
              <img
                src="https://images.pexels.com/photos/17455631/pexels-photo-17455631.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=500&w=600"
                alt="Pristine interior seating inside our upscale medical transport vehicle"
                className="w-full h-[280px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent" />
            </div>

            {/* Stats Area */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              
              <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-sm text-center">
                <span className="text-3xl font-black text-blue-600 block">7</span>
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mt-1">
                  Counties Served
                </span>
                <span className="text-[9px] text-teal-600 font-semibold block mt-1">
                  New York Region
                </span>
              </div>

              <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-sm text-center">
                <span className="text-xl sm:text-2xl font-black text-slate-900 block leading-tight">6AM – 6PM</span>
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mt-2">
                  Operating Hours
                </span>
                <span className="text-[9px] text-teal-600 font-semibold block mt-1">
                  Monday – Sunday
                </span>
              </div>

              <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-sm text-center">
                <span className="text-2xl font-black text-teal-600 block">100%</span>
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mt-2">
                  Patient-Focused
                </span>
                <span className="text-[9px] text-teal-600 font-semibold block mt-1">
                  Every Single Trip
                </span>
              </div>

            </div>

            {/* Note block */}
            <div className="bg-slate-900 text-slate-300 p-4 rounded-2xl text-xs flex items-start gap-3 border border-slate-800">
              <Icons.HelpCircle className="w-5 h-5 text-teal-400 shrink-0 mt-0.5" />
              <div>
                <strong className="text-white block font-semibold mb-0.5">Winter Expansion evaluation:</strong>
                We understand Upstate New York winter travel poses significant challenges. We are preparing to introduce extended scheduling slots based on community weather feedback.
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
