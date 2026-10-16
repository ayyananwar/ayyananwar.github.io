"use client";

import { useState } from "react";

interface ContactFormProps {
  buttonText?: string;
  onSuccessCallback?: () => void;
  idPrefix?: string;
  source?: string;
  compact?: boolean;
  theme?: "dark" | "light";
}

const CATEGORIES = [
  "Residential Lift",
  "Commercial Lift",
  "Industrial / Hydraulic",
  "Maintenance & AMC",
];

const STOPS_OPTIONS = [
  "2 Floors",
  "3 Floors",
  "4-5 Floors",
  "6+ Floors",
];

export function ContactForm({
  buttonText = "Submit Inquiry",
  onSuccessCallback,
  idPrefix = "contact",
  source = "Consultation Form",
  compact = false,
  theme = "dark",
}: ContactFormProps) {
  const [formStatus, setFormStatus] = useState<"idle" | "loading" | "error" | "success">("idle");
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [selectedCategory, setSelectedCategory] = useState<string>("Residential Lift");
  const [selectedStops, setSelectedStops] = useState<string>("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formElement = e.currentTarget;
    const formData = new FormData(formElement);
    const firstName = formData.get("firstName")?.toString().trim();
    const email = formData.get("email")?.toString().trim();
    const honeypot = formData.get("_gotcha")?.toString().trim();

    if (!firstName || !email) {
      setFormStatus("error");
      setErrorMessage("Please provide your name and email address.");
      return;
    }

    setFormStatus("loading");
    setErrorMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          firstName,
          lastName: formData.get("lastName")?.toString().trim() || "",
          email,
          phone: formData.get("phone")?.toString().trim() || "",
          details: formData.get("details")?.toString().trim() || "",
          category: selectedCategory,
          floors: selectedStops,
          source,
          honeypot: honeypot || "",
        }),
      });

      const data = await response.json().catch(() => null);

      if (!response.ok || !data?.success) {
        throw new Error(data?.error || "Unable to send inquiry. Please try again.");
      }

      setFormStatus("success");
      formElement.reset();
      setSelectedStops("");

      if (onSuccessCallback) {
        onSuccessCallback();
      }

      setTimeout(() => {
        setFormStatus("idle");
      }, 6000);
    } catch (error: unknown) {
      console.error("Form submission failed:", error);
      setFormStatus("error");
      const message = error instanceof Error ? error.message : "An unexpected error occurred. Please try again.";
      setErrorMessage(message);
    }
  };

  const isLight = theme === "light";
  const inputBorder = isLight ? "border-black/30 focus:border-black" : "border-white/30 focus:border-white";
  const inputTextColor = isLight ? "text-black placeholder:text-neutral-400" : "text-white placeholder:text-white/40";
  const labelColor = isLight ? "text-neutral-700" : "text-white/70";
  const buttonStyle = isLight 
    ? "bg-black text-white hover:bg-neutral-800" 
    : "bg-white text-black hover:bg-neutral-200";

  return (
    <form 
      className={`${compact ? "space-y-4" : "space-y-6 sm:space-y-8"} w-full`} 
      onSubmit={handleSubmit} 
      noValidate
    >
      {/* Bot spam honeypot field */}
      <input
        type="text"
        name="_gotcha"
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
        aria-hidden="true"
      />
      
      {formStatus === "error" && (
        <div className="border border-red-500/50 bg-red-500/10 p-3 text-red-400 text-xs font-medium">
          {errorMessage}
        </div>
      )}
      
      {formStatus === "success" && (
        <div className={`border ${isLight ? "border-black/40 bg-neutral-100 text-black" : "border-white/40 bg-white/10 text-white"} p-4 text-xs font-medium`}>
          Thank you. Your message has been received by our engineering team. We will get back to you shortly.
        </div>
      )}

      {/* Contact Details */}
      <div className="space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label 
              htmlFor={`${idPrefix}-firstName`} 
              className={`block text-xs font-semibold ${labelColor} mb-1`}
            >
              First Name *
            </label>
            <input 
              type="text" 
              name="firstName"
              id={`${idPrefix}-firstName`}
              className={`w-full bg-transparent border-b ${inputBorder} py-2 text-sm sm:text-base ${inputTextColor} focus:outline-none transition-colors rounded-none`}
              placeholder="Rahul"
              required
            />
          </div>

          <div>
            <label 
              htmlFor={`${idPrefix}-lastName`} 
              className={`block text-xs font-semibold ${labelColor} mb-1`}
            >
              Last Name
            </label>
            <input 
              type="text" 
              name="lastName"
              id={`${idPrefix}-lastName`}
              className={`w-full bg-transparent border-b ${inputBorder} py-2 text-sm sm:text-base ${inputTextColor} focus:outline-none transition-colors rounded-none`}
              placeholder="Verma"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label 
              htmlFor={`${idPrefix}-email`} 
              className={`block text-xs font-semibold ${labelColor} mb-1`}
            >
              Email Address *
            </label>
            <input 
              type="email" 
              name="email"
              id={`${idPrefix}-email`}
              className={`w-full bg-transparent border-b ${inputBorder} py-2 text-sm sm:text-base ${inputTextColor} focus:outline-none transition-colors rounded-none`}
              placeholder="name@example.com"
              required
            />
          </div>

          <div>
            <label 
              htmlFor={`${idPrefix}-phone`} 
              className={`block text-xs font-semibold ${labelColor} mb-1`}
            >
              Phone Number
            </label>
            <input 
              type="tel" 
              name="phone"
              id={`${idPrefix}-phone`}
              className={`w-full bg-transparent border-b ${inputBorder} py-2 text-sm sm:text-base ${inputTextColor} focus:outline-none transition-colors rounded-none`}
              placeholder="+91 98765 43210"
            />
          </div>
        </div>
      </div>

      {/* Elevator Type Selection */}
      {!compact && (
        <div>
          <label className={`block text-xs font-semibold ${labelColor} mb-2.5`}>
            Elevator Type
          </label>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
            {CATEGORIES.map((cat) => {
              const isSelected = selectedCategory === cat;
              return (
                <button
                  type="button"
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`text-center py-2.5 px-3 text-xs font-medium transition-colors border ${
                    isSelected
                      ? isLight
                        ? "bg-black text-white border-black font-semibold"
                        : "bg-white text-black border-white font-semibold"
                      : isLight
                        ? "bg-transparent text-neutral-700 border-black/20 hover:border-black"
                        : "bg-transparent text-white/70 border-white/20 hover:border-white"
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>
      )}

      {/* Floors Selection */}
      {!compact && (
        <div>
          <label className={`block text-xs font-semibold ${labelColor} mb-2.5`}>
            Number of Floors
          </label>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
            {STOPS_OPTIONS.map((opt) => {
              const isSelected = selectedStops === opt;
              return (
                <button
                  type="button"
                  key={opt}
                  onClick={() => setSelectedStops(isSelected ? "" : opt)}
                  className={`text-center py-2.5 px-3 text-xs font-mono transition-colors border ${
                    isSelected
                      ? isLight
                        ? "bg-black text-white border-black font-semibold"
                        : "bg-white text-black border-white font-semibold"
                      : isLight
                        ? "border-black/20 text-neutral-700 hover:border-black"
                        : "border-white/20 text-white/70 hover:border-white"
                  }`}
                >
                  {opt}
                </button>
              );
            })}
          </div>
        </div>
      )}

      {/* Details / Notes */}
      {!compact && (
        <div>
          <label 
            htmlFor={`${idPrefix}-details`} 
            className={`block text-xs font-semibold ${labelColor} mb-1`}
          >
            Project Location &amp; Requirements (Optional)
          </label>
          <textarea 
            name="details"
            id={`${idPrefix}-details`}
            rows={2}
            className={`w-full bg-transparent border-b ${inputBorder} py-2 text-sm sm:text-base ${inputTextColor} focus:outline-none transition-colors resize-none rounded-none`}
            placeholder="e.g. Villa in Noida, 3 floors, open atrium..."
          />
        </div>
      )}

      {/* Submit Button */}
      <div className="pt-2">
        <button 
          type="submit"
          disabled={formStatus === "success" || formStatus === "loading"}
          className={`w-full sm:w-auto px-8 py-3.5 ${buttonStyle} text-xs font-bold tracking-widest uppercase transition-colors disabled:opacity-50 disabled:cursor-not-allowed`}
        >
          {formStatus === "success" ? "Message Sent" : formStatus === "loading" ? "Sending..." : buttonText}
        </button>
      </div>
    </form>
  );
}
