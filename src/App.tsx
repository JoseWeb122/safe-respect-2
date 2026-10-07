import { useState, useEffect } from "react";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { TrustPillars } from "./components/TrustPillars";
import { Services } from "./components/Services";
import { HowItWorks } from "./components/HowItWorks";
import { ServiceArea } from "./components/ServiceArea";
import { WhyChooseUs } from "./components/WhyChooseUs";
import { BrandPromise } from "./components/BrandPromise";
import { AboutSection } from "./components/AboutSection";
import { TransportationForm } from "./components/TransportationForm";
import { HoursSection } from "./components/HoursSection";
import { TestimonialsSection } from "./components/TestimonialsSection";
import { FaqSection } from "./components/FaqSection";
import { ContactSection } from "./components/ContactSection";
import { Footer } from "./components/Footer";
import { QuickRequestCTA } from "./components/QuickRequestCTA";
import { BackToTop } from "./components/BackToTop";
import { CONTACT_INFO } from "./data/mockData";
import * as Icons from "lucide-react";

export default function App() {
  const [selectedCounty, setSelectedCounty] = useState<string>("");
  const [activeSection, setActiveSection] = useState<string>("home");

  // Track active section on scroll to highlight in navbar
  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "home",
        "services",
        "service-area",
        "why-choose-us",
        "about",
        "faq",
        "contact"
      ];
      
      const scrollPosition = window.scrollY + 160;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavigate = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      setActiveSection(sectionId);
    }
  };

  const handleCountySelectionFromMap = (countyName: string) => {
    setSelectedCounty(countyName);
  };

  const handleTriggerRequestForm = () => {
    handleNavigate("request-transportation");
  };

  const handleTriggerServices = () => {
    handleNavigate("services");
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans selection:bg-blue-600 selection:text-white antialiased">
      
      {/* Top Announcement Bar */}
      <div className="bg-gradient-to-r from-blue-900 to-slate-950 text-white text-[11px] py-2 px-4 text-center border-b border-white/5 relative z-50">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-teal-400 animate-pulse" />
            <span className="font-semibold tracking-wider text-slate-300">
              S3R NEW YORK: Monroe • Genesee • Orleans • Wyoming • Ontario • Livingston • Wayne
            </span>
          </div>
          <div className="flex items-center gap-4 text-slate-300">
            <span className="hidden md:inline">Operating daily: <strong>6:00 AM – 6:00 PM</strong></span>
            <a 
              href={`tel:${CONTACT_INFO.phone}`} 
              className="text-teal-400 hover:underline font-bold flex items-center gap-1"
            >
              <Icons.PhoneCall className="w-3 h-3 shrink-0" />
              <span>Call Dispatch: {CONTACT_INFO.phoneDisplay}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Sticky Navigation Bar */}
      <Navbar 
        onNavigate={handleNavigate} 
        activeSection={activeSection} 
      />

      {/* Cinematic Hero Section */}
      <Hero 
        onRequestRide={handleTriggerRequestForm} 
        onExploreServices={handleTriggerServices} 
      />

      {/* Trust Pillars strip overlapping the hero bottom */}
      <div className="relative z-20 pb-12 bg-gradient-to-b from-transparent to-slate-50">
        <TrustPillars />
      </div>

      {/* Services Section with details modal triggers */}
      <Services 
        onRequestRide={handleTriggerRequestForm} 
      />

      {/* How It Works sequential timeline section */}
      <HowItWorks />

      {/* Service Area Section with Interactive Map */}
      <ServiceArea 
        onCountySelect={handleCountySelectionFromMap} 
        onRequestRide={handleTriggerRequestForm} 
      />

      {/* Why Choose Us Split layout section */}
      <WhyChooseUs />

      {/* Large Cinematic Brand Promise highlight scroll strip */}
      <BrandPromise />

      {/* Human-Centered Story / About Section */}
      <AboutSection />

      {/* Interactive Hours Card with Clock representation */}
      <section className="py-12 bg-white border-t border-slate-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-stretch">
            <div className="md:col-span-4 flex items-center">
              <div className="text-left space-y-2">
                <span className="text-xs font-bold text-blue-600 uppercase tracking-widest block">
                  Regional Reliability
                </span>
                <h3 className="text-2xl font-black text-slate-900 font-serif-premium">
                  Winter Operations Preparedness
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed">
                  We constantly monitor Upstate New York regional weather alerts to ensure our drivers are dispatched safely. We keep patients and family coordinators updated at every stage of the transit window.
                </p>
              </div>
            </div>
            
            <div className="md:col-span-8">
              <HoursSection />
            </div>
          </div>
        </div>
      </section>

      {/* Request Transportation Centerpiece Form */}
      <TransportationForm 
        preselectedCounty={selectedCounty} 
      />

      {/* Placeholder Testimonials Carousel */}
      <TestimonialsSection />

      {/* Interactive FAQ Accordion */}
      <FaqSection />

      {/* Premium Contact Section with Direct Buttons */}
      <ContactSection 
        onRequestRide={handleTriggerRequestForm} 
      />

      {/* Footer Navigation & Legal Info */}
      <Footer 
        onNavigate={handleNavigate} 
      />

      {/* Mobile Sticky Quick Book CTA bar */}
      <QuickRequestCTA 
        onRequestRide={handleTriggerRequestForm} 
      />

      {/* Back to top button */}
      <BackToTop />

    </div>
  );
}
