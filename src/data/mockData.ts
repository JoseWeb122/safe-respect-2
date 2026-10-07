// Premium mock data for the New York non-emergency medical transportation business

export interface Service {
  id: string;
  title: string;
  shortDescription: string;
  longDescription: string;
  iconName: string;
  expectations: string[];
}

export interface County {
  id: string;
  name: string;
  description: string;
  highlights: string[];
  approximateX: number; // For interactive SVG styling
  approximateY: number; // For interactive SVG styling
  color: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  county: string;
  isPlaceholder: boolean;
  rating: number;
}

export interface FAQ {
  id: string;
  question: string;
  answer: string;
}

export const OPERATING_HOURS = {
  current: "6:00 AM – 6:00 PM",
  days: "Monday – Sunday",
  note: "Expanded operating hours may be introduced during the winter season.",
  status: "Operating Hours (Currently Winter Expansion Evaluated)"
};

export const CONTACT_INFO = {
  phone: "1-800-555-S3R9 (7379)", // S3R9 representing Safe, Respectable, Reliable, Speedy
  phoneDisplay: "(800) 555-S3R9",
  email: "dispatch@s3rspeedy.com",
  dispatchEmail: "requests@s3rspeedy.com",
  mainOffice: "Rochester, New York",
  coverageArea: "7 NY Counties (Monroe, Genesee, Orleans, Wyoming, Ontario, Livingston, Wayne)"
};

export const SERVICES: Service[] = [
  {
    id: "medical-appointments",
    title: "Medical Appointments",
    shortDescription: "Reliable transportation to and from scheduled doctor appointments.",
    longDescription: "Our premium service ensures you arrive at your scheduled doctor's visits calmly and on time. We coordinate directly with you or your care team to make sure pickup schedules align perfectly with your doctor's availability.",
    iconName: "CalendarDays",
    expectations: [
      "Door-to-door escort assistance if needed",
      "Punctual arrival 10-15 minutes prior to scheduled departure",
      "Comfortable climate-controlled, professional environment",
      "Full assistance with getting in and out of the vehicle"
    ]
  },
  {
    id: "rehabilitation-facilities",
    title: "Rehabilitation Facilities",
    shortDescription: "Comfortable transportation for rehabilitation visits and ongoing care.",
    longDescription: "Physical, occupational, or speech therapy require consistent, comfortable transit. We understand that passengers may experience muscle fatigue or soreness post-session, and we optimize comfort for the journey home.",
    iconName: "Activity",
    expectations: [
      "Smooth, cinematic ride quality designed for post-therapy comfort",
      "Flexible return windows in case sessions run longer",
      "Gentle assistance from compassionate drivers trained in delicate transfers",
      "Spacious vehicle layouts to accommodate physical therapy gear"
    ]
  },
  {
    id: "healthcare-facilities",
    title: "Healthcare Facilities",
    shortDescription: "Dependable rides to healthcare facilities and other essential destinations.",
    longDescription: "We provide professional transit services to hospitals, dialysis centers, laboratories, diagnostic clinics, and other major medical environments across our seven core counties.",
    iconName: "Building2",
    expectations: [
      "Clear direct routes to major regional clinics and facilities",
      "Seamless drop-off at patient reception or main entrances",
      "Coordination with healthcare coordinators for streamlined pickup",
      "Safe storage for paperwork or personal belongings"
    ]
  },
  {
    id: "scheduled-medical-transport",
    title: "Scheduled Medical Transportation",
    shortDescription: "Professional transportation planned around your appointment schedule.",
    longDescription: "Avoid the stress of waiting. This service is tailored for recurring treatments, specialized outpatient procedures, or multi-phase consultations requiring a reliable scheduled window.",
    iconName: "Clock",
    expectations: [
      "Assigned driver options for recurring weekly schedules",
      "Advanced route planning considering regional traffic",
      "Direct line to dispatch for instant scheduling updates",
      "Accommodating to family members or caregivers riding along"
    ]
  },
  {
    id: "return-transportation",
    title: "Return Transportation",
    shortDescription: "Convenient transportation back home or to your next destination.",
    longDescription: "Our service does not leave you stranded. We track your discharge time and coordinate immediate or pre-scheduled return trips with high-level efficiency and warm care.",
    iconName: "Undo2",
    expectations: [
      "Prompt notifications when your vehicle is waiting",
      "Warm assistance back into your home or safe drop-off zone",
      "Checking that you have your keys, documents, and prescriptions",
      "Consistent care standard from hospital door to living room"
    ]
  },
  {
    id: "specialized-patient-support",
    title: "Specialized Patient Support",
    shortDescription: "Respectful service designed around the needs of every passenger.",
    longDescription: "We understand that every individual is unique. Whether you require physical guidance, sensory sensitivity support, or a friendly understanding professional, we build the ride around your dignity.",
    iconName: "Heart",
    expectations: [
      "Dignity-first approach with gentle, friendly drivers",
      "Patient and attentive care - never rushed or abrasive",
      "Highly accessible step-ins and clean interiors",
      "Clear communication through text or phone updates"
    ]
  }
];

export const COUNTIES: County[] = [
  {
    id: "monroe",
    name: "Monroe County",
    description: "Centering around Rochester, Monroe County is our primary hub, ensuring rapid access to regional healthcare networks and medical centers.",
    highlights: ["Rochester Medical Center", "Strong Memorial Hospital", "Highland Hospital", "Unity Hospital"],
    approximateX: 52,
    approximateY: 28,
    color: "#2563eb"
  },
  {
    id: "genesee",
    name: "Genesee County",
    description: "Serving Batavia and surrounding rural communities with high-reliability scheduling for appointments in both Buffalo and Rochester corridors.",
    highlights: ["United Memorial Medical Center", "Batavia Family Practice", "Veterans Affairs Medical Center"],
    approximateX: 25,
    approximateY: 42,
    color: "#0d9488"
  },
  {
    id: "orleans",
    name: "Orleans County",
    description: "Providing vital rural healthcare connections to the northern region, assisting patients to reach regional specialists safely.",
    highlights: ["Medina Memorial Hospital", "Orleans Community Health", "Albion Family Medicine"],
    approximateX: 26,
    approximateY: 18,
    color: "#3b82f6"
  },
  {
    id: "wyoming",
    name: "Wyoming County",
    description: "Dependable non-emergency transport for Warsaw and neighboring towns, making healthcare accessible despite rugged winter conditions.",
    highlights: ["Wyoming County Community Health System", "Warsaw Urgent Care", "Perry Medical Clinic"],
    approximateX: 24,
    approximateY: 72,
    color: "#0f766e"
  },
  {
    id: "ontario",
    name: "Ontario County",
    description: "Connecting Canandaigua, Geneva, and surrounding Finger Lakes communities with premium, high-end medical travel.",
    highlights: ["Thompson Health", "Geneva General Hospital", "Clifton Springs Hospital"],
    approximateX: 75,
    approximateY: 55,
    color: "#1d4ed8"
  },
  {
    id: "livingston",
    name: "Livingston County",
    description: "Servicing Geneseo, Dansville, and Mount Morris with reliable medical transportation prioritizing senior and rehabilitation travel.",
    highlights: ["Noyes Memorial Hospital", "Geneseo Health Center", "Livingston Health Services"],
    approximateX: 48,
    approximateY: 65,
    color: "#14b8a6"
  },
  {
    id: "wayne",
    name: "Wayne County",
    description: "Bridging Sodus, Newark, and Lyons with top-tier specialized transit, bringing quality peace of mind to lakeside and rural patients.",
    highlights: ["Newark-Wayne Community Hospital", "Wayne County Health Complex", "Sodus Health Center"],
    approximateX: 80,
    approximateY: 25,
    color: "#1e3a8a"
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "test-1",
    quote: "Finding high-quality transportation for my father's daily physical rehabilitation appointments was a struggle until we found S3R. The drivers are professional, exceptionally respectful, and arrive early every time. A truly premium service that values dignity.",
    author: "Eleanor Vance",
    role: "Family Caregiver / Daughter",
    county: "Monroe County",
    isPlaceholder: true,
    rating: 5
  },
  {
    id: "test-2",
    quote: "As a discharge coordinator, my reputation depends on the vendors I recommend. S3R has proved to be the absolute gold standard for non-emergency medical transportation in Genesee. They make our scheduling completely stress-free.",
    author: "Marcus Brodie, LMSW",
    role: "Senior Discharge Coordinator",
    county: "Genesee County",
    isPlaceholder: true,
    rating: 5
  },
  {
    id: "test-3",
    quote: "I am extremely thankful for S3R's promptness and care. Traveling from Orleans County to see my specialist in Rochester used to cause me immense anxiety. Now, I feel completely safe, and the drive is incredibly comfortable.",
    author: "Agnes Vance-Kemp",
    role: "Patient",
    county: "Orleans County",
    isPlaceholder: true,
    rating: 5
  },
  {
    id: "test-4",
    quote: "Excellent communication, clean upscale vehicles, and unmatched reliability. They truly treat my grandparents with the highest degree of respect. The winter readiness discussion also shows they prepare meticulously for Upstate NY weather.",
    author: "Julian Chen",
    role: "Family Representative",
    county: "Ontario County",
    isPlaceholder: true,
    rating: 5
  }
];

export const FAQS: FAQ[] = [
  {
    id: "faq-1",
    question: "What areas do you serve?",
    answer: "We proudly serve 7 counties across Western and Finger Lakes regions of New York: Monroe, Genesee, Orleans, Wyoming, Ontario, Livingston, and Wayne Counties. We coordinate trips both locally within these counties and to major medical centers in adjacent areas."
  },
  {
    id: "faq-2",
    question: "What types of transportation do you provide?",
    answer: "We provide non-emergency medical transportation (NEMT) for individuals traveling to doctor appointments, rehabilitation facilities, outpatient procedures, and healthcare destinations. Our vehicles are clean, quiet, and designed to prioritize passenger dignity, safety, and modern comfort."
  },
  {
    id: "faq-3",
    question: "What are your current operating hours?",
    answer: "Our current operating hours are 6:00 AM – 6:00 PM, Monday through Sunday. This allows us to serve early-morning appointments and late afternoon discharges with high reliability and punctuality."
  },
  {
    id: "faq-4",
    question: "Can operating hours change during the winter?",
    answer: "Yes, we are actively considering expanding our operating hours during the winter months to better accommodate weather-related shifts, seasonal appointment delays, and dusk-travel challenges. Please contact our dispatch team to confirm any updated seasonal availability."
  },
  {
    id: "faq-5",
    question: "How do I request transportation?",
    answer: "You can easily request a ride by using our digital 'Request Transportation' form on this website, or by calling our direct dispatch office. After you submit your request, a booking specialist will review your trip details and contact you via phone or email to confirm scheduling and answer any specialized needs questions. Note that requests are pending until reviewed and confirmed by our staff."
  },
  {
    id: "faq-6",
    question: "Can I request transportation for a medical appointment?",
    answer: "Absolutely! Scheduled doctor visits and diagnostic procedures are our primary services. We aim to have you arrive 15 minutes before your check-in time so that you feel calm and unhurried."
  },
  {
    id: "faq-7",
    question: "Do you provide transportation to rehabilitation facilities?",
    answer: "Yes. We offer comfortable, smooth-ride transport to and from physical therapy, occupational therapy, and specialized rehabilitation clinics. We coordinate with facility schedules to ensure your return vehicle is ready when your session concludes."
  },
  {
    id: "faq-8",
    question: "How far in advance should I request transportation?",
    answer: "To guarantee availability within your preferred time window, we recommend requesting transportation at least 48 to 72 hours in advance. For recurring or urgent requests, please contact our dispatch team directly to confirm availability and specific transportation requirements."
  }
];
