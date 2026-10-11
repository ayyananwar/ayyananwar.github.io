"use client";

import { useState } from "react";

interface ContactFormProps {
  buttonText?: string;
  onSuccessCallback?: () => void;
  idPrefix?: string; // To prevent ID collisions if multiple forms are on one page
  source?: string; // Identify source (e.g. "Brochure: Freight Elevators", "Main Consultation")
  compact?: boolean; // For modal / mobile viewports
  theme?: "dark" | "light"; // Theme-adaptive colors
}

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

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formElement = e.currentTarget;
    const formData = new FormData(formElement);
    const firstName = formData.get("firstName")?.toString().trim();
    const email = formData.get("email")?.toString().trim();
    const honeypot = formData.get("_gotcha")?.toString().trim();

    if (!firstName || !email) {
      setFormStatus("error");
      setErrorMessage("First name and email are required.");
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

      if (onSuccessCallback) {
        onSuccessCallback();
      }

      setTimeout(() => {
        setFormStatus("idle");
      }, 6000);
    } catch (error: any) {
      console.error("Form submission failed:", error);
      setFormStatus("error");
      setErrorMessage(error.message || "An unexpected error occurred. Please try again.");
    }
  };

  const isLight = theme === "light";
  const inputBorder = isLight ? "border-black/25 focus:border-black" : "border-white/30 focus:border-white";
  const inputTextColor = isLight ? "text-black placeholder:text-neutral-400" : "text-white placeholder:text-white/40";
  const labelColor = isLight ? "text-neutral-700" : "text-white/80";
  const buttonStyle = isLight 
    ? "bg-black text-white hover:bg-neutral-800" 
    : "bg-white text-black hover:bg-neutral-200";

  return (
    <form 
      className={`${compact ? "space-y-4 sm:space-y-5" : "space-y-8 md:space-y-12"} w-full`} 
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
        <div className="border border-red-500/60 bg-red-500/10 p-3 text-red-500 text-xs sm:text-sm font-bold tracking-[0.1em] uppercase">
          [ ERROR ] {errorMessage}
        </div>
      )}
      
      {formStatus === "success" && (
        <div className={`border ${isLight ? "border-black/40 bg-black/5 text-black" : "border-white/50 bg-white/10 text-white"} p-3 text-xs sm:text-sm font-bold tracking-[0.1em] uppercase`}>
          [ SUCCESS ] Inquiry received. Download commencing...
        </div>
      )}

      {/* Row 1: Name fields */}
      <div className={`grid grid-cols-1 sm:grid-cols-2 ${compact ? "gap-4 sm:gap-5" : "gap-6 md:gap-10"}`}>
        <div>
          <label 
            htmlFor={`${idPrefix}-firstName`} 
            className={`block text-[11px] font-bold tracking-[0.15em] uppercase ${labelColor} mb-1`}
          >
            First Name <span className="opacity-60">*</span>
          </label>
          <input 
            type="text" 
            name="firstName"
            id={`${idPrefix}-firstName`}
            className={`w-full bg-transparent border-b ${inputBorder} py-2 ${compact ? "text-base" : "text-lg"} ${inputTextColor} focus:outline-none transition-colors rounded-none`}
            placeholder="John"
            required
          />
        </div>

        <div>
          <label 
            htmlFor={`${idPrefix}-lastName`} 
            className={`block text-[11px] font-bold tracking-[0.15em] uppercase ${labelColor} mb-1`}
          >
            Last Name
          </label>
          <input 
            type="text" 
            name="lastName"
            id={`${idPrefix}-lastName`}
            className={`w-full bg-transparent border-b ${inputBorder} py-2 ${compact ? "text-base" : "text-lg"} ${inputTextColor} focus:outline-none transition-colors rounded-none`}
            placeholder="Doe"
          />
        </div>
      </div>

      {/* Row 2: Contact fields */}
      <div className={`grid grid-cols-1 sm:grid-cols-2 ${compact ? "gap-4 sm:gap-5" : "gap-6 md:gap-10"}`}>
        <div>
          <label 
            htmlFor={`${idPrefix}-email`} 
            className={`block text-[11px] font-bold tracking-[0.15em] uppercase ${labelColor} mb-1`}
          >
            Email Address <span className="opacity-60">*</span>
          </label>
          <input 
            type="email" 
            name="email"
            id={`${idPrefix}-email`}
            className={`w-full bg-transparent border-b ${inputBorder} py-2 ${compact ? "text-base" : "text-lg"} ${inputTextColor} focus:outline-none transition-colors rounded-none`}
            placeholder="john@example.com"
            required
          />
        </div>

        <div>
          <label 
            htmlFor={`${idPrefix}-phone`} 
            className={`block text-[11px] font-bold tracking-[0.15em] uppercase ${labelColor} mb-1`}
          >
            Phone Number
          </label>
          <input 
            type="tel" 
            name="phone"
            id={`${idPrefix}-phone`}
            className={`w-full bg-transparent border-b ${inputBorder} py-2 ${compact ? "text-base" : "text-lg"} ${inputTextColor} focus:outline-none transition-colors rounded-none`}
            placeholder="+91 98765 43210"
          />
        </div>
      </div>

      {/* Row 3: Project Details */}
      <div>
        <label 
          htmlFor={`${idPrefix}-details`} 
          className={`block text-[11px] font-bold tracking-[0.15em] uppercase ${labelColor} mb-1`}
        >
          Project Details / Requirements (Optional)
        </label>
        <textarea 
          name="details"
          id={`${idPrefix}-details`}
          rows={compact ? 2 : 2}
          className={`w-full bg-transparent border-b ${inputBorder} py-2 ${compact ? "text-base" : "text-lg"} ${inputTextColor} focus:outline-none transition-colors resize-none rounded-none`}
          placeholder="Villa, 3 stops, glass shaft..."
        />
      </div>

      {/* Submit Button */}
      <div className={compact ? "pt-2" : "pt-4"}>
        <button 
          type="submit"
          disabled={formStatus === "success" || formStatus === "loading"}
          className={`w-full ${compact ? "sm:w-auto sm:px-8 py-3.5" : "md:w-auto px-10 py-4.5"} ${buttonStyle} text-xs font-bold tracking-[0.2em] uppercase transition-colors disabled:opacity-50 disabled:cursor-not-allowed`}
        >
          {formStatus === "success" ? "✓ Verified & Downloading" : formStatus === "loading" ? "Processing..." : buttonText}
        </button>
      </div>
    </form>
  );
}
