"use client";

import { motion } from "framer-motion";
import { ContactForm } from "@/components/shared/ContactForm";

export function ContactSection() {

  return (
    <section id="contact" className="relative z-20 py-32 px-6 md:px-12 lg:px-24 bg-black border-t border-white/10 text-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
        
        {/* Left: Contact Info & Typography */}
        <div className="flex flex-col justify-between">
          <div>
            <span className="text-xs md:text-sm font-semibold tracking-[0.3em] text-amber-400 uppercase mb-4 block">
              Direct Engineering Consultation
            </span>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tighter mb-8 leading-[1.05]">
              Start Your <br />
              <span className="text-white/40">
                Project.
              </span>
            </h2>
            <p className="text-lg md:text-xl text-white/70 max-w-md font-medium mb-12">
              Talk to our engineering team today to review structural blueprints and select the optimal elevator system.
            </p>
          </div>

          <div className="space-y-10 mt-12 lg:mt-0">
            <div>
              <h4 className="text-xs font-mono font-bold tracking-widest text-white/60 uppercase mb-2">Headquarters</h4>
              <p className="text-lg md:text-xl font-medium tracking-wide text-white">
                Globus Elevators<br />
                A/151, Sector 69, Noida<br />
                Uttar Pradesh, India
              </p>
            </div>
            
            <div>
              <h4 className="text-xs font-mono font-bold tracking-widest text-white/60 uppercase mb-4">Pan-India Coverage</h4>
              <div className="space-y-4">
                <div>
                  <span className="text-xs font-mono font-bold tracking-[0.1em] text-amber-400 uppercase block mb-1">North &amp; NCR</span>
                  <p className="text-base font-medium text-white/90">Delhi NCR, UP, Punjab, Haryana</p>
                </div>
                <div>
                  <span className="text-xs font-mono font-bold tracking-[0.1em] text-amber-400 uppercase block mb-1">Central &amp; East</span>
                  <p className="text-base font-medium text-white/90">MP (Bhopal), Chhattisgarh, WB (Kolkata), Bihar, Jharkhand (Ranchi), Odisha, Assam</p>
                </div>
                <div>
                  <span className="text-xs font-mono font-bold tracking-[0.1em] text-amber-400 uppercase block mb-1">South &amp; West</span>
                  <p className="text-base font-medium text-white/90">Karnataka, Kerala, Maharashtra (Pusad)</p>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-white/10 space-y-2">
              <h4 className="text-xs font-mono font-bold tracking-widest text-white/60 uppercase mb-2">Direct Inquiries</h4>
              <p className="text-lg md:text-xl font-medium tracking-wide">
                <a href="mailto:info@globuselevators.com" className="hover:text-amber-400 transition-colors">info@globuselevators.com</a>
              </p>
              <p className="text-sm text-white/60 font-mono">
                Direct: <a href="mailto:globuselevators.ge@gmail.com" className="hover:underline">globuselevators.ge@gmail.com</a>
              </p>
              <p className="text-lg md:text-xl font-medium tracking-wide pt-1">
                <a href="tel:+919931334433" className="hover:text-amber-400 transition-colors">+91 99313 34433</a> / +91 90317 61990
              </p>
            </div>
          </div>
        </div>

        {/* Right: Consultation Form */}
        <div className="flex flex-col justify-center mt-12 lg:mt-0">
          <ContactForm idPrefix="consult" buttonText="Submit Inquiry" source="Architectural Consultation (Home)" theme="dark" />
        </div>

      </div>

      {/* Full-width Map Section */}
      <div className="max-w-7xl mx-6 md:mx-12 lg:mx-auto mt-24 md:mt-32 border border-white/10 rounded-none overflow-hidden relative h-[300px] md:h-[400px]">
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
        ></iframe>
        <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/80 via-transparent to-transparent z-10" />
      </div>
    </section>
  );
}
