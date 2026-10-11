"use client";

import { useState } from "react";

interface ContactFormProps {
  buttonText?: string;
  onSuccessCallback?: () => void;
  idPrefix?: string; // To prevent ID collisions if multiple forms are on one page
  source?: string; // Identify source (e.g. "Brochure: Freight Elevators", "Main Consultation")
}

export function ContactForm({
  buttonText = "Submit Inquiry",
  onSuccessCallback,
  idPrefix = "contact",
  source = "Consultation Form",
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

  return (
    <form className="space-y-16 w-full" onSubmit={handleSubmit} noValidate>
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
        <div className="border border-red-500/50 bg-red-500/10 p-4 text-red-500 text-sm font-bold tracking-[0.1em] uppercase">
          [ ERROR ] {errorMessage}
        </div>
      )}
      
      {formStatus === "success" && (
        <div className="border border-white/50 bg-white/10 p-4 text-white text-sm font-bold tracking-[0.1em] uppercase">
          [ SUCCESS ] Inquiry received. Our team will contact you shortly.
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
        <div className="relative group">
          <input 
            type="text" 
            name="firstName"
            id={`${idPrefix}-firstName`}
            className="w-full bg-transparent border-b border-white/20 py-4 text-xl md:text-2xl text-white placeholder-transparent focus:outline-none focus:border-white transition-colors peer rounded-none"
            placeholder="First Name"
            required
          />
          <label htmlFor={`${idPrefix}-firstName`} className="absolute left-0 -top-8 text-xs font-semibold tracking-[0.2em] uppercase text-white/80 transition-all peer-placeholder-shown:text-xl peer-placeholder-shown:md:text-2xl peer-placeholder-shown:top-4 peer-placeholder-shown:text-white/30 peer-placeholder-shown:tracking-normal peer-placeholder-shown:capitalize peer-focus:-top-8 peer-focus:text-xs peer-focus:text-white peer-focus:tracking-[0.2em] peer-focus:uppercase cursor-text">
            First Name *
          </label>
        </div>

        <div className="relative group">
          <input 
            type="text" 
            name="lastName"
            id={`${idPrefix}-lastName`}
            className="w-full bg-transparent border-b border-white/20 py-4 text-xl md:text-2xl text-white placeholder-transparent focus:outline-none focus:border-white transition-colors peer rounded-none"
            placeholder="Last Name"
          />
          <label htmlFor={`${idPrefix}-lastName`} className="absolute left-0 -top-8 text-xs font-semibold tracking-[0.2em] uppercase text-white/80 transition-all peer-placeholder-shown:text-xl peer-placeholder-shown:md:text-2xl peer-placeholder-shown:top-4 peer-placeholder-shown:text-white/30 peer-placeholder-shown:tracking-normal peer-placeholder-shown:capitalize peer-focus:-top-8 peer-focus:text-xs peer-focus:text-white peer-focus:tracking-[0.2em] peer-focus:uppercase cursor-text">
            Last Name
          </label>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
        <div className="relative group">
          <input 
            type="email" 
            name="email"
            id={`${idPrefix}-email`}
            className="w-full bg-transparent border-b border-white/20 py-4 text-xl md:text-2xl text-white placeholder-transparent focus:outline-none focus:border-white transition-colors peer rounded-none"
            placeholder="Email Address"
            required
          />
          <label htmlFor={`${idPrefix}-email`} className="absolute left-0 -top-8 text-xs font-semibold tracking-[0.2em] uppercase text-white/80 transition-all peer-placeholder-shown:text-xl peer-placeholder-shown:md:text-2xl peer-placeholder-shown:top-4 peer-placeholder-shown:text-white/30 peer-placeholder-shown:tracking-normal peer-placeholder-shown:capitalize peer-focus:-top-8 peer-focus:text-xs peer-focus:text-white peer-focus:tracking-[0.2em] peer-focus:uppercase cursor-text">
            Email Address *
          </label>
        </div>

        <div className="relative group">
          <input 
            type="tel" 
            name="phone"
            id={`${idPrefix}-phone`}
            className="w-full bg-transparent border-b border-white/20 py-4 text-xl md:text-2xl text-white placeholder-transparent focus:outline-none focus:border-white transition-colors peer rounded-none"
            placeholder="Phone Number"
          />
          <label htmlFor={`${idPrefix}-phone`} className="absolute left-0 -top-8 text-xs font-semibold tracking-[0.2em] uppercase text-white/80 transition-all peer-placeholder-shown:text-xl peer-placeholder-shown:md:text-2xl peer-placeholder-shown:top-4 peer-placeholder-shown:text-white/30 peer-placeholder-shown:tracking-normal peer-placeholder-shown:capitalize peer-focus:-top-8 peer-focus:text-xs peer-focus:text-white peer-focus:tracking-[0.2em] peer-focus:uppercase cursor-text">
            Phone Number
          </label>
        </div>
      </div>

      <div className="relative group">
        <textarea 
          name="details"
          id={`${idPrefix}-details`}
          rows={1}
          className="w-full bg-transparent border-b border-white/20 py-4 text-xl md:text-2xl text-white placeholder-transparent focus:outline-none focus:border-white transition-colors peer resize-none rounded-none"
          placeholder="Project Details (Optional)"
        />
        <label htmlFor={`${idPrefix}-details`} className="absolute left-0 -top-8 text-xs font-semibold tracking-[0.2em] uppercase text-white/80 transition-all peer-placeholder-shown:text-xl peer-placeholder-shown:md:text-2xl peer-placeholder-shown:top-4 peer-placeholder-shown:text-white/30 peer-placeholder-shown:tracking-normal peer-placeholder-shown:capitalize peer-focus:-top-8 peer-focus:text-xs peer-focus:text-white peer-focus:tracking-[0.2em] peer-focus:uppercase cursor-text">
          Project Details (Optional)
        </label>
      </div>

      <div className="pt-8">
        <button 
          type="submit"
          disabled={formStatus === "success" || formStatus === "loading"}
          className="w-full md:w-auto px-12 bg-white text-black py-5 text-sm font-bold tracking-[0.2em] uppercase hover:bg-neutral-200 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {formStatus === "success" ? "Submitted" : formStatus === "loading" ? "Sending..." : buttonText}
        </button>
      </div>
    </form>
  );
}
