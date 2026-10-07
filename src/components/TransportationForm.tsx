import React, { useState, useEffect } from "react";
import * as Icons from "lucide-react";
import { COUNTIES, CONTACT_INFO } from "../data/mockData";

interface TransportationFormProps {
  preselectedCounty: string;
}

export const TransportationForm: React.FC<TransportationFormProps> = ({
  preselectedCounty
}) => {
  // Form fields state
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    pickupLocation: "",
    destination: "",
    appointmentDate: "",
    preferredPickupTime: "",
    returnTrip: "No",
    county: "",
    transportationNeeds: "Regular Seating Assistance",
    additionalNotes: "",
    agreeToTerms: false
  });

  // Automatically update the county if selected on the interactive map
  useEffect(() => {
    if (preselectedCounty) {
      setFormData((prev) => ({ ...prev, county: preselectedCounty }));
    }
  }, [preselectedCounty]);

  // Validation errors state
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  // Quick helper to validate form fields
  const validateForm = () => {
    const tempErrors: Record<string, string> = {};
    
    if (!formData.fullName.trim()) tempErrors.fullName = "Full Name is required.";
    
    // Simple phone regex
    if (!formData.phone.trim()) {
      tempErrors.phone = "Phone Number is required.";
    } else {
      const phoneCleaned = formData.phone.replace(/[^0-9]/g, "");
      if (phoneCleaned.length < 10) {
        tempErrors.phone = "Please enter a valid 10-digit phone number.";
      }
    }

    // Simple email regex
    if (!formData.email.trim()) {
      tempErrors.email = "Email Address is required.";
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email)) {
        tempErrors.email = "Please enter a valid email address.";
      }
    }

    if (!formData.pickupLocation.trim()) tempErrors.pickupLocation = "Pickup address is required.";
    if (!formData.destination.trim()) tempErrors.destination = "Destination address is required.";
    if (!formData.appointmentDate) {
      tempErrors.appointmentDate = "Appointment Date is required.";
    } else {
      const selectedDate = new Date(formData.appointmentDate);
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      if (selectedDate < today) {
        tempErrors.appointmentDate = "Appointment Date cannot be in the past.";
      }
    }

    if (!formData.preferredPickupTime.trim()) tempErrors.preferredPickupTime = "Preferred pickup time is required.";
    if (!formData.county) tempErrors.county = "Please select a county.";
    if (!formData.agreeToTerms) tempErrors.agreeToTerms = "You must agree to the data usage terms.";

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;
    const val = type === "checkbox" ? (e.target as HTMLInputElement).checked : value;
    
    setFormData((prev) => ({
      ...prev,
      [name]: val
    }));

    // Clear specific error on change
    if (errors[name]) {
      setErrors((prev) => {
        const copy = { ...prev };
        delete copy[name];
        return copy;
      });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      // Find the first error and scroll to it or let the user see details
      const firstError = Object.keys(errors)[0];
      const element = document.getElementsByName(firstError)[0];
      if (element) {
        element.focus();
      }
      return;
    }

    setIsSubmitting(true);

    // Simulate high-end digital agency api response delay
    setTimeout(() => {
      setIsSubmitting(false);
      setShowSuccessModal(true);
    }, 1800);
  };

  const handleResetForm = () => {
    setFormData({
      fullName: "",
      phone: "",
      email: "",
      pickupLocation: "",
      destination: "",
      appointmentDate: "",
      preferredPickupTime: "",
      returnTrip: "No",
      county: preselectedCounty || "",
      transportationNeeds: "Regular Seating Assistance",
      additionalNotes: "",
      agreeToTerms: false
    });
    setErrors({});
    setShowSuccessModal(false);
  };

  return (
    <section id="request-transportation" className="py-24 bg-slate-100 relative overflow-hidden">
      
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-blue-200/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-teal-200/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Block */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold text-blue-700 uppercase tracking-widest bg-blue-100 px-3.5 py-1.5 rounded-full inline-block mb-3">
            Digital Booking Intake Desk
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-serif-premium">
            Request Transportation
          </h2>
          <div className="w-12 h-1 bg-teal-600 mx-auto my-3 rounded-full" />
          <p className="text-slate-600 text-sm leading-relaxed">
            Tell us a little about your trip and our coordination team can review your transportation request. A specialist will follow up with you to confirm availability.
          </p>
        </div>

        {/* Form Container */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 md:p-12 border border-slate-200/80 shadow-2xl relative overflow-hidden">
          
          {/* Subtle branding stripe */}
          <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-blue-600 via-teal-500 to-indigo-600" />
          
          <form onSubmit={handleSubmit} className="space-y-6 text-left">
            
            {/* Section 1: Passenger Contacts */}
            <div>
              <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4 flex items-center gap-2 pb-2 border-b border-slate-100">
                <Icons.User className="w-3.5 h-3.5 text-blue-600" />
                Passenger & Contact Information
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                
                {/* Full Name */}
                <div className="md:col-span-1">
                  <label htmlFor="fullName" className="block text-xs font-bold text-slate-700 mb-1.5 uppercase tracking-wide">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    placeholder="e.g. Eleanor Vance"
                    className={`w-full px-4 py-2.5 bg-slate-50 border rounded-xl text-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all ${
                      errors.fullName ? "border-red-400 bg-red-50/20" : "border-slate-200"
                    }`}
                  />
                  {errors.fullName && (
                    <span className="text-xs text-red-500 mt-1 flex items-center gap-1">
                      <Icons.AlertCircle className="w-3 h-3" />
                      {errors.fullName}
                    </span>
                  )}
                </div>

                {/* Phone Number */}
                <div>
                  <label htmlFor="phone" className="block text-xs font-bold text-slate-700 mb-1.5 uppercase tracking-wide">
                    Phone Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="e.g. (585) 555-0199"
                    className={`w-full px-4 py-2.5 bg-slate-50 border rounded-xl text-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all ${
                      errors.phone ? "border-red-400 bg-red-50/20" : "border-slate-200"
                    }`}
                  />
                  {errors.phone && (
                    <span className="text-xs text-red-500 mt-1 flex items-center gap-1">
                      <Icons.AlertCircle className="w-3 h-3" />
                      {errors.phone}
                    </span>
                  )}
                </div>

                {/* Email Address */}
                <div>
                  <label htmlFor="email" className="block text-xs font-bold text-slate-700 mb-1.5 uppercase tracking-wide">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="e.g. patient@example.com"
                    className={`w-full px-4 py-2.5 bg-slate-50 border rounded-xl text-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all ${
                      errors.email ? "border-red-400 bg-red-50/20" : "border-slate-200"
                    }`}
                  />
                  {errors.email && (
                    <span className="text-xs text-red-500 mt-1 flex items-center gap-1">
                      <Icons.AlertCircle className="w-3 h-3" />
                      {errors.email}
                    </span>
                  )}
                </div>

              </div>
            </div>

            {/* Section 2: Trip Logistics */}
            <div className="pt-2">
              <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4 flex items-center gap-2 pb-2 border-b border-slate-100">
                <Icons.Compass className="w-3.5 h-3.5 text-blue-600" />
                Trip Addresses & Destinations
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                
                {/* Pickup Location */}
                <div>
                  <label htmlFor="pickupLocation" className="block text-xs font-bold text-slate-700 mb-1.5 uppercase tracking-wide">
                    Pickup Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="pickupLocation"
                    name="pickupLocation"
                    value={formData.pickupLocation}
                    onChange={handleInputChange}
                    placeholder="Street, City, State, ZIP"
                    className={`w-full px-4 py-2.5 bg-slate-50 border rounded-xl text-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all ${
                      errors.pickupLocation ? "border-red-400 bg-red-50/20" : "border-slate-200"
                    }`}
                  />
                  {errors.pickupLocation && (
                    <span className="text-xs text-red-500 mt-1 flex items-center gap-1">
                      <Icons.AlertCircle className="w-3 h-3" />
                      {errors.pickupLocation}
                    </span>
                  )}
                </div>

                {/* Destination Location */}
                <div>
                  <label htmlFor="destination" className="block text-xs font-bold text-slate-700 mb-1.5 uppercase tracking-wide">
                    Medical Destination Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="destination"
                    name="destination"
                    value={formData.destination}
                    onChange={handleInputChange}
                    placeholder="Clinic/Hospital name or specific street address"
                    className={`w-full px-4 py-2.5 bg-slate-50 border rounded-xl text-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all ${
                      errors.destination ? "border-red-400 bg-red-50/20" : "border-slate-200"
                    }`}
                  />
                  {errors.destination && (
                    <span className="text-xs text-red-500 mt-1 flex items-center gap-1">
                      <Icons.AlertCircle className="w-3 h-3" />
                      {errors.destination}
                    </span>
                  )}
                </div>

              </div>
            </div>

            {/* Section 3: Appointment Date, Time & County */}
            <div className="pt-2">
              <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4 flex items-center gap-2 pb-2 border-b border-slate-100">
                <Icons.Calendar className="w-3.5 h-3.5 text-blue-600" />
                Scheduling & County Specifics
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                
                {/* Appointment Date */}
                <div className="md:col-span-1">
                  <label htmlFor="appointmentDate" className="block text-xs font-bold text-slate-700 mb-1.5 uppercase tracking-wide">
                    Appointment Date <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="date"
                    id="appointmentDate"
                    name="appointmentDate"
                    value={formData.appointmentDate}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-2.5 bg-slate-50 border rounded-xl text-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all ${
                      errors.appointmentDate ? "border-red-400 bg-red-50/20" : "border-slate-200"
                    }`}
                  />
                  {errors.appointmentDate && (
                    <span className="text-xs text-red-500 mt-1 flex items-center gap-1">
                      <Icons.AlertCircle className="w-3 h-3" />
                      {errors.appointmentDate}
                    </span>
                  )}
                </div>

                {/* Preferred Pickup Time */}
                <div>
                  <label htmlFor="preferredPickupTime" className="block text-xs font-bold text-slate-700 mb-1.5 uppercase tracking-wide">
                    Preferred Time <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="preferredPickupTime"
                    name="preferredPickupTime"
                    value={formData.preferredPickupTime}
                    onChange={handleInputChange}
                    placeholder="e.g. 8:30 AM"
                    className={`w-full px-4 py-2.5 bg-slate-50 border rounded-xl text-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all ${
                      errors.preferredPickupTime ? "border-red-400 bg-red-50/20" : "border-slate-200"
                    }`}
                  />
                  {errors.preferredPickupTime && (
                    <span className="text-xs text-red-500 mt-1 flex items-center gap-1">
                      <Icons.AlertCircle className="w-3 h-3" />
                      {errors.preferredPickupTime}
                    </span>
                  )}
                </div>

                {/* County Selection Dropdown */}
                <div>
                  <label htmlFor="county" className="block text-xs font-bold text-slate-700 mb-1.5 uppercase tracking-wide">
                    NY County <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="county"
                    name="county"
                    value={formData.county}
                    onChange={handleInputChange}
                    className={`w-full px-3 py-2.5 bg-slate-50 border rounded-xl text-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all ${
                      errors.county ? "border-red-400 bg-red-50/20" : "border-slate-200"
                    }`}
                  >
                    <option value="">-- Choose County --</option>
                    {COUNTIES.map((c) => (
                      <option key={c.id} value={c.name}>
                        {c.name}
                      </option>
                    ))}
                  </select>
                  {errors.county && (
                    <span className="text-xs text-red-500 mt-1 flex items-center gap-1">
                      <Icons.AlertCircle className="w-3 h-3" />
                      {errors.county}
                    </span>
                  )}
                </div>

                {/* Return Trip Dropdown */}
                <div>
                  <label htmlFor="returnTrip" className="block text-xs font-bold text-slate-700 mb-1.5 uppercase tracking-wide">
                    Return Trip Need?
                  </label>
                  <select
                    id="returnTrip"
                    name="returnTrip"
                    value={formData.returnTrip}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                  >
                    <option value="No">No, One-Way Trip Only</option>
                    <option value="Yes - Immediate Return">Yes, Immediate Return</option>
                    <option value="Yes - Will Call Dispatch">Yes, Will Call Dispatch</option>
                    <option value="Yes - Pre-planned Return Time">Yes, Pre-scheduled return time</option>
                  </select>
                </div>

              </div>
            </div>

            {/* Section 4: Specialized Needs & Notes */}
            <div className="pt-2">
              <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4 flex items-center gap-2 pb-2 border-b border-slate-100">
                <Icons.Activity className="w-3.5 h-3.5 text-blue-600" />
                Patient Mobility Needs & Specialized Care Details
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                
                {/* Mobility support */}
                <div className="md:col-span-1">
                  <label htmlFor="transportationNeeds" className="block text-xs font-bold text-slate-700 mb-1.5 uppercase tracking-wide">
                    Primary Mobility Standard
                  </label>
                  <select
                    id="transportationNeeds"
                    name="transportationNeeds"
                    value={formData.transportationNeeds}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                  >
                    <option value="Regular Seating Assistance">Regular Seating Assistance</option>
                    <option value="Door-to-door Escort Need">Door-to-door Escort Need</option>
                    <option value="Wheelchair Support Required">Wheelchair Support Required</option>
                    <option value="Companion / Caregiver Riding Along">Companion / Caregiver Riding Along</option>
                    <option value="Sensory / Special Cognitive Support">Sensory / Special Cognitive Support</option>
                  </select>
                </div>

                {/* Additional Notes */}
                <div className="md:col-span-2">
                  <label htmlFor="additionalNotes" className="block text-xs font-bold text-slate-700 mb-1.5 uppercase tracking-wide">
                    Additional Instructions or Notes (Optional)
                  </label>
                  <textarea
                    id="additionalNotes"
                    name="additionalNotes"
                    value={formData.additionalNotes}
                    onChange={handleInputChange}
                    placeholder="Tell us about specific gate codes, apartment numbers, discharge room, family phone, etc..."
                    rows={2}
                    className="w-full px-4 py-2 bg-slate-50 border border-slate-200 rounded-xl text-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all resize-none"
                  />
                </div>

              </div>
            </div>

            {/* Consent Agreement Box */}
            <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100 mt-4">
              <div className="flex items-start gap-3">
                <input
                  type="checkbox"
                  id="agreeToTerms"
                  name="agreeToTerms"
                  checked={formData.agreeToTerms}
                  onChange={handleInputChange}
                  className="mt-1 w-4.5 h-4.5 text-blue-600 border-slate-300 rounded focus:ring-blue-500 cursor-pointer"
                />
                <label htmlFor="agreeToTerms" className="text-xs text-slate-500 cursor-pointer select-none">
                  <strong className="text-slate-800 font-bold block mb-0.5">Consent & Data Policy Agreement <span className="text-red-500">*</span></strong>
                  I agree that the information provided may be used by the S3R dispatch team to respond to my transportation request. I understand that this form is a request for booking review, not an instantaneous automated confirmation of a ride.
                </label>
              </div>
              {errors.agreeToTerms && (
                <span className="text-xs text-red-500 mt-1.5 flex items-center gap-1 pl-7">
                  <Icons.AlertCircle className="w-3 h-3" />
                  {errors.agreeToTerms}
                </span>
              )}
            </div>

            {/* Form CTA Button */}
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4">
              <button
                type="button"
                onClick={handleResetForm}
                className="text-xs font-semibold text-slate-400 hover:text-slate-600 transition-colors uppercase tracking-wider py-2 px-4"
              >
                Clear / Reset Form
              </button>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full sm:w-auto bg-gradient-to-r from-blue-600 to-teal-500 hover:from-blue-700 hover:to-teal-600 text-white font-bold py-4 px-10 rounded-xl text-xs uppercase tracking-widest transition-all shadow-md hover:shadow-lg disabled:opacity-50 cursor-pointer flex items-center justify-center gap-3 group"
              >
                {isSubmitting ? (
                  <>
                    <Icons.Loader2 className="w-4 h-4 animate-spin text-white" />
                    <span>Verifying and Reviewing...</span>
                  </>
                ) : (
                  <>
                    <Icons.CheckCircle className="w-4 h-4 text-teal-200 group-hover:scale-110 transition-all" />
                    <span>Submit Transportation Request</span>
                  </>
                )}
              </button>
            </div>

          </form>
        </div>

        {/* Important NEMT Disclaimer card */}
        <div className="mt-8 bg-blue-50 border border-blue-100 p-5 rounded-2xl text-left text-xs text-slate-600 flex items-start gap-3">
          <Icons.ShieldAlert className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
          <div>
            <strong className="text-blue-900 block font-bold mb-1">State Licensing and Intake Protocol Information:</strong>
            We perform specialized Western NY region scheduling. If you are a Medicaid-related transportation client, you can submit this request for our team to verify with your Medicaid broker or regional agent. All rides are manually reviewed and confirmed via phone by S3R dispatch specialists prior to actual dispatch.
          </div>
        </div>

      </div>

      {/* SUCCESS MODAL */}
      {showSuccessModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <div 
            className="fixed inset-0 bg-slate-900/80 backdrop-blur-md"
            onClick={() => setShowSuccessModal(false)}
          />
          
          <div className="relative w-full max-w-lg overflow-hidden rounded-3xl bg-white p-8 shadow-2xl transition-all border border-slate-100 z-10 text-center animate-in fade-in zoom-in-95">
            {/* Gradient highlight line */}
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-emerald-500 to-teal-400" />
            
            <div className="mx-auto w-16 h-16 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mb-6 border border-emerald-100">
              <Icons.ShieldCheck className="w-8 h-8" />
            </div>

            <h3 className="text-2xl font-extrabold text-slate-900 mb-2 font-serif-premium">
              Request Received Successfully
            </h3>
            
            <span className="text-xs font-mono font-bold text-teal-600 uppercase tracking-widest block mb-4">
              INTAKE ID: NEMT-{Math.floor(100000 + Math.random() * 900000)}
            </span>

            <div className="bg-slate-50 p-4 rounded-xl text-xs text-slate-600 leading-relaxed space-y-3 text-left border border-slate-100 mb-6">
              <p>
                <strong className="text-slate-800">What happens next?</strong>
              </p>
              <ul className="list-disc list-inside space-y-1 text-slate-500">
                <li>Our dispatch team will review your requested times and county coverage parameters.</li>
                <li>We will contact you via phone (<span className="text-slate-800 font-semibold">{formData.phone}</span>) or email (<span className="text-slate-800 font-semibold">{formData.email}</span>) within 2-4 hours.</li>
                <li>Your safety, mobility support, and return parameters will be finalized over the phone.</li>
              </ul>
              <div className="p-2 bg-emerald-50 text-emerald-800 text-[10px] font-semibold rounded border border-emerald-100">
                ⚠️ IMPORTANT: Your ride is pending review and is NOT yet fully booked or confirmed. Please wait for our dispatch call.
              </div>
            </div>

            <div className="flex gap-3">
              <button
                onClick={() => setShowSuccessModal(false)}
                className="flex-1 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold py-3 rounded-xl text-xs uppercase tracking-wider transition-all"
              >
                Dismiss Window
              </button>
              
              <button
                onClick={handleResetForm}
                className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-xl text-xs uppercase tracking-wider transition-all"
              >
                Reset / New Request
              </button>
            </div>
            
            <div className="mt-4 pt-4 border-t border-slate-100 text-[10px] text-slate-400">
              Need immediate assistance? Dispatch Desk: <span className="text-slate-700 font-bold">{CONTACT_INFO.phoneDisplay}</span>
            </div>
          </div>
        </div>
      )}

    </section>
  );
};
