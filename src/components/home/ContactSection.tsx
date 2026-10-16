"use client";

import { ContactForm } from "@/components/shared/ContactForm";
import { Phone, MessageSquare, MapPin } from "lucide-react";

export function ContactSection() {
  return (
    <section id="contact" className="relative z-20 py-16 sm:py-24 md:py-32 px-5 sm:px-8 md:px-12 lg:px-24 bg-black border-t border-white/10 text-white">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="border-b border-white/10 pb-8 sm:pb-12 mb-10 sm:mb-14">
          <span className="text-xs font-mono uppercase tracking-widest text-white/50 mb-2 block">
            Direct Consultation
          </span>
          <h2 className="text-3xl sm:text-5xl md:text-7xl font-black tracking-tight mb-3">
            Start Your Project
          </h2>
          <p className="text-xs sm:text-sm md:text-base text-white/70 max-w-xl font-medium leading-relaxed mb-6">
            Review site dimensions and select the right elevator system with our senior engineering team in Noida.
          </p>

          {/* Quick Direct Mobile Action Strip */}
          <div className="grid grid-cols-2 sm:flex sm:flex-wrap gap-3">
            <a 
              href="tel:+919931334433" 
              className="flex items-center justify-center gap-2 px-5 py-3 bg-white text-black text-xs font-bold tracking-wider uppercase hover:bg-neutral-200 transition-colors"
            >
              <Phone size={14} />
              <span>Call Us</span>
            </a>
            <a 
              href="https://wa.me/919931334433?text=Hi%20Globus%20Elevators%2C%20I%20would%20like%20to%20request%20an%20engineering%20consultation" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center justify-center gap-2 px-5 py-3 bg-[#25D366] text-black text-xs font-bold tracking-wider uppercase hover:opacity-90 transition-opacity"
            >
              <MessageSquare size={14} />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>

        {/* 2-Column Responsive Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          
          {/* Form */}
          <div className="lg:col-span-7 order-1 lg:order-2 bg-neutral-950 p-6 sm:p-8 md:p-10 border border-white/10">
            <div className="border-b border-white/10 pb-4 mb-6">
              <h3 className="text-base sm:text-lg font-bold text-white">
                Send An Inquiry
              </h3>
            </div>
            <ContactForm idPrefix="home-consult" buttonText="Submit Inquiry &rarr;" source="Homepage Consultation Form" theme="dark" />
          </div>

          {/* Details */}
          <div className="lg:col-span-5 order-2 lg:order-1 space-y-6">
            
            {/* Headquarters Card */}
            <div className="border border-white/10 p-6 bg-neutral-950">
              <div className="flex items-center gap-2 mb-2 text-white/50 text-xs font-mono uppercase">
                <MapPin size={14} />
                <span>Headquarters</span>
              </div>
              <h4 className="text-base font-bold text-white mb-1">Globus Elevators</h4>
              <p className="text-xs sm:text-sm text-white/80 leading-relaxed mb-4">
                A/151, Sector 69, Noida<br />
                Uttar Pradesh, India
              </p>
              
              <div className="border-t border-white/10 pt-3 space-y-1.5 text-xs font-mono text-white/70">
                <p>
                  Direct: <a href="tel:+919931334433" className="text-white hover:underline">+91 99313 34433</a>
                </p>
                <p>
                  Alternate: <a href="tel:+919031761990" className="text-white hover:underline">+91 90317 61990</a>
                </p>
                <p>
                  Email: <a href="mailto:info@globuselevators.com" className="text-white hover:underline">info@globuselevators.com</a>
                </p>
              </div>
            </div>

            {/* Pan-India Coverage */}
            <div className="border border-white/10 p-6 bg-neutral-950">
              <span className="text-xs font-mono uppercase text-white/50 block mb-3">
                Pan-India Service Coverage
              </span>
              <div className="space-y-3 text-xs">
                <div className="border-b border-white/10 pb-2">
                  <span className="font-bold text-white block">North &amp; NCR</span>
                  <span className="text-white/60">Delhi NCR, Noida, UP, Punjab, Haryana</span>
                </div>
                <div className="border-b border-white/10 pb-2">
                  <span className="font-bold text-white block">Central &amp; East</span>
                  <span className="text-white/60">Bhopal (MP), Chhattisgarh, Kolkata (WB), Bihar, Ranchi (Jharkhand), Odisha, Assam</span>
                </div>
                <div>
                  <span className="font-bold text-white block">South &amp; West</span>
                  <span className="text-white/60">Karnataka, Kerala, Pusad (Maharashtra)</span>
                </div>
              </div>
            </div>

          </div>

        </div>

        {/* Map */}
        <div className="mt-12 sm:mt-16 border border-white/10 rounded-none overflow-hidden relative h-[220px] sm:h-[300px]">
          <iframe
            src="https://maps.google.com/maps?q=Globus%20Elevators%2C%20Ranchi&t=&z=17&ie=UTF8&iwloc=&output=embed"
            width="100%"
            height="100%"
            style={{ border: 0, filter: "grayscale(1) invert(1) contrast(1.2) brightness(0.8)" }}
            allowFullScreen={false}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Globus Elevators Location"
            className="absolute inset-0 z-0"
          />
          <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/80 via-transparent to-transparent z-10" />
        </div>

      </div>
    </section>
  );
}
