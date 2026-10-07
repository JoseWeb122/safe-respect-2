import React, { useState, useEffect } from "react";
import * as Icons from "lucide-react";
import { TESTIMONIALS } from "../data/mockData";

export const TestimonialsSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [isAutoPlaying]);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  return (
    <section id="testimonials" className="py-24 bg-white relative overflow-hidden">
      
      {/* Background aesthetics */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-blue-50 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-teal-50 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-extrabold text-blue-600 uppercase tracking-widest bg-blue-50 px-3 py-1.5 rounded-full inline-block mb-3">
            Service Endorsements
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-serif-premium">
            Feedback From Our Community
          </h2>
          <div className="w-12 h-1 bg-teal-500 mx-auto my-4 rounded-full" />
          
          <div className="p-2.5 bg-amber-50 rounded-lg inline-flex items-center gap-2 text-xs text-amber-800 border border-amber-100 font-medium">
            <Icons.Info className="w-4 h-4 text-amber-600 shrink-0" />
            <span>Demonstration Notice: These are curated placeholder profiles illustrating typical user experiences.</span>
          </div>
        </div>

        {/* Carousel Container */}
        <div 
          className="relative bg-slate-900 text-white rounded-3xl p-8 md:p-14 border border-slate-800 shadow-2xl overflow-hidden"
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
        >
          
          {/* Subtle watermark background logo */}
          <div className="absolute -bottom-10 -right-10 select-none opacity-5 text-teal-400 font-extrabold text-9xl">
            S3R
          </div>

          <div className="absolute top-6 left-6 text-xs text-slate-500 font-mono tracking-widest uppercase">
            Curated Demo Testimonial Placeholder
          </div>

          <div className="relative z-10">
            {/* Quote Icon */}
            <Icons.Quote className="w-12 h-12 text-teal-400/20 mb-6" />

            {/* Testimonial Active Slide with transition effect */}
            <div className="min-h-[160px] flex flex-col justify-between">
              <div>
                <p className="text-base sm:text-lg md:text-xl font-medium leading-relaxed italic text-slate-100 mb-6">
                  "{TESTIMONIALS[activeIndex].quote}"
                </p>
              </div>

              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-6 border-t border-slate-800">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-teal-400 flex items-center justify-center font-bold text-white uppercase text-sm">
                    {TESTIMONIALS[activeIndex].author.charAt(0)}
                  </div>
                  <div className="text-left">
                    <h4 className="text-sm font-bold text-white">
                      {TESTIMONIALS[activeIndex].author}
                    </h4>
                    <span className="text-[11px] text-teal-400 font-medium">
                      {TESTIMONIALS[activeIndex].role}
                    </span>
                  </div>
                </div>

                <div className="flex flex-col items-start sm:items-end gap-1">
                  <div className="flex items-center gap-1">
                    {[...Array(TESTIMONIALS[activeIndex].rating)].map((_, i) => (
                      <Icons.Star key={i} className="w-3.5 h-3.5 fill-teal-400 text-teal-400" />
                    ))}
                  </div>
                  <span className="text-[10px] text-slate-400 bg-slate-950 px-2.5 py-1 rounded-full uppercase tracking-wider">
                    Location: {TESTIMONIALS[activeIndex].county}
                  </span>
                </div>
              </div>
            </div>

          </div>

          {/* Navigation Controls */}
          <div className="absolute bottom-6 right-6 flex items-center gap-2">
            <button
              onClick={handlePrev}
              className="p-2 rounded-lg bg-slate-800 text-slate-300 hover:text-white hover:bg-slate-700 transition-colors cursor-pointer"
              aria-label="Previous Testimonial"
            >
              <Icons.ArrowLeft className="w-4 h-4" />
            </button>
            <button
              onClick={handleNext}
              className="p-2 rounded-lg bg-slate-800 text-slate-300 hover:text-white hover:bg-slate-700 transition-colors cursor-pointer"
              aria-label="Next Testimonial"
            >
              <Icons.ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>

        {/* Carousel Dots Indicators */}
        <div className="flex justify-center gap-2 mt-6">
          {TESTIMONIALS.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                activeIndex === index ? "bg-blue-600 w-8" : "bg-slate-300 hover:bg-slate-400"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
};
