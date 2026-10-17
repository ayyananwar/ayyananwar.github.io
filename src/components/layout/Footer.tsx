import Link from "next/link";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="relative z-20 pt-14 sm:pt-20 pb-10 sm:pb-12 px-5 sm:px-8 md:px-12 lg:px-24 bg-black border-t border-white/10 text-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 mb-12 sm:mb-16">
        
        <div className="lg:col-span-2 flex flex-col items-start">
          <Link href="/" className="flex items-center gap-3 mb-3 text-2xl sm:text-3xl md:text-4xl font-black tracking-tighter text-white hover:text-white/80 transition-colors group">
            <div className="relative w-8 h-8 sm:w-9 sm:h-9 flex-shrink-0">
              <Image 
                src="/logo_site-icon.png" 
                alt="Globus Elevators Emblem" 
                fill 
                className="object-contain"
              />
            </div>
            <span>GLOBUS</span>
          </Link>
          <p className="text-white/70 max-w-sm text-xs sm:text-sm md:text-base leading-relaxed font-medium">
            High-tolerance vertical transportation engineering. Built for structural safety, architectural integration, and whisper-quiet operation.
          </p>
        </div>

        <div className="flex flex-col space-y-2.5">
          <h4 className="text-xs font-mono font-bold tracking-[0.2em] text-white/50 uppercase mb-2">Explore</h4>
          <Link href="/" className="text-white/80 hover:text-white transition-colors text-xs sm:text-sm">Home</Link>
          <Link href="/about" className="text-white/80 hover:text-white transition-colors text-xs sm:text-sm">About Us</Link>
          <Link href="/services" className="text-white/80 hover:text-white transition-colors text-xs sm:text-sm">Services</Link>
          <Link href="/products" className="text-white/80 hover:text-white transition-colors text-xs sm:text-sm">Our Elevators</Link>
          <Link href="/gallery" className="text-white/80 hover:text-white transition-colors text-xs sm:text-sm">Gallery</Link>
          <Link href="/contact" className="text-white/80 hover:text-white transition-colors text-xs sm:text-sm">Consultation</Link>
        </div>

        {/* Direct Contacts */}
        <div className="flex flex-col space-y-2.5">
          <h4 className="text-xs font-mono font-bold tracking-[0.2em] text-white/50 uppercase mb-2">Direct</h4>
          <a href="mailto:info@globuselevators.com" className="text-white/80 hover:text-white transition-colors text-xs sm:text-sm font-mono">info@globuselevators.com</a>
          <a href="tel:+919931334433" className="text-white/80 hover:text-white transition-colors text-xs sm:text-sm font-mono">+91 99313 34433</a>
          <a href="tel:+919031761990" className="text-white/80 hover:text-white transition-colors text-xs sm:text-sm font-mono">+91 90317 61990</a>
          <div className="pt-2 text-[11px] sm:text-xs text-white/50 font-mono">
            A/151, Sector 69, Noida, UP, India
          </div>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto pt-6 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-xs font-mono text-white/60 gap-4">
        <p>&copy; {new Date().getFullYear()} Globus Elevators. All rights reserved.</p>
        <div className="flex space-x-6">
          <a 
            href="https://wa.me/919931334433?text=Hi%20Globus%20Elevators%2C%20I%20would%20like%20to%20inquire%20about%20your%20elevators" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hover:text-white transition-colors"
          >
            WhatsApp
          </a>
          <a href="tel:+919931334433" className="hover:text-white transition-colors">Direct Call</a>
          <Link href="/contact" className="hover:text-white transition-colors">Consultation</Link>
        </div>
      </div>
    </footer>
  );
}
