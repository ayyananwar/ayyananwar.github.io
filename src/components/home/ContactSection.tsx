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
            <span className="text-xs md:text-sm font-semibold tracking-[0.2em] text-white/50 uppercase mb-6 block">
              Consultation
            </span>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter mb-8 leading-[1.1]">
              Start Your <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-neutral-500">
                Project.
              </span>
            </h2>
            <p className="text-lg md:text-xl text-white/60 max-w-md font-medium mb-12">
              Talk to our team today to find the perfect elevator for your building.
            </p>
          </div>

          <div className="space-y-12 mt-12 lg:mt-0">
            <div>
              <h4 className="text-sm font-semibold tracking-[0.1em] text-white/40 uppercase mb-2">Headquarters</h4>
              <p className="text-lg md:text-xl font-medium tracking-wide text-white/80">
                Globus Elevators<br />
                Noida, Uttar Pradesh, India
              </p>
            </div>
            
            <div>
              <h4 className="text-sm font-semibold tracking-[0.1em] text-white/40 uppercase mb-4">Pan-India Coverage</h4>
              <div className="space-y-4">
                <div>
                  <span className="text-xs font-bold tracking-[0.1em] text-white/30 uppercase block mb-1">North & NCR</span>
                  <p className="text-base font-medium text-white/80">Delhi NCR, UP, Punjab, Haryana</p>
                </div>
                <div>
                  <span className="text-xs font-bold tracking-[0.1em] text-white/30 uppercase block mb-1">Central & East</span>
                  <p className="text-base font-medium text-white/80">MP (Bhopal), Chhattisgarh, WB (Kolkata), Bihar, Jharkhand (Ranchi), Odisha, Assam</p>
                </div>
                <div>
                  <span className="text-xs font-bold tracking-[0.1em] text-white/30 uppercase block mb-1">South & West</span>
                  <p className="text-base font-medium text-white/80">Karnataka, Kerala, Maharashtra (Pusad)</p>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-white/10">
              <h4 className="text-sm font-semibold tracking-[0.1em] text-white/40 uppercase mb-2">Direct Inquiry</h4>
              <p className="text-lg md:text-xl font-medium tracking-wide mb-1">consult@globuselevators.com</p>
              <p className="text-lg md:text-xl font-medium tracking-wide">+91 90317 61990</p>
            </div>
          </div>
        </div>

        {/* Right: Consultation Form */}
        <div className="flex flex-col justify-center mt-16 lg:mt-0">
          <ContactForm idPrefix="consult" buttonText="Submit Inquiry" />
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
