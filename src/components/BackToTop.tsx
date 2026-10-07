import React, { useState, useEffect } from "react";
import * as Icons from "lucide-react";

export const BackToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-20 lg:bottom-8 right-4 lg:right-8 z-30 p-3 rounded-full bg-slate-900/90 text-teal-400 hover:text-white hover:bg-slate-800 border border-slate-800 shadow-xl backdrop-blur-sm transition-all duration-300 cursor-pointer ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
      }`}
      aria-label="Back to top"
    >
      <Icons.ArrowUp className="w-5 h-5" />
    </button>
  );
};
