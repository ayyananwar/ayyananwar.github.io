import Link from "next/link";

export function Footer() {
  return (
    <footer className="relative z-20 pt-20 pb-12 px-6 md:px-12 lg:px-24 bg-black border-t border-white/10 text-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
        
        <div className="lg:col-span-2 flex flex-col items-start">
          <Link href="/" className="text-3xl md:text-4xl font-black tracking-tighter mb-4 text-white">
            GLOBUS
          </Link>
          <p className="text-white/70 max-w-sm text-sm md:text-base leading-relaxed font-medium">
            High-quality vertical transportation engineering. Built for structural safety and whisper-quiet operation.
          </p>
        </div>

        <div className="flex flex-col space-y-3">
          <h4 className="text-xs font-mono font-bold tracking-[0.2em] text-white/60 uppercase mb-2">Explore</h4>
          <Link href="/" className="text-white/80 hover:text-white transition-colors text-sm">Home</Link>
          <Link href="/about" className="text-white/80 hover:text-white transition-colors text-sm">About Us</Link>
          <Link href="/services" className="text-white/80 hover:text-white transition-colors text-sm">Services</Link>
          <Link href="/products" className="text-white/80 hover:text-white transition-colors text-sm">Our Elevators</Link>
          <Link href="/blogs" className="text-white/80 hover:text-white transition-colors text-sm">Journal</Link>
          <Link href="/contact" className="text-white/80 hover:text-white transition-colors text-sm">Consultation</Link>
        </div>

        {/* Legal & Social */}
        <div className="flex flex-col space-y-3">
          <h4 className="text-xs font-mono font-bold tracking-[0.2em] text-white/60 uppercase mb-2">Direct</h4>
          <a href="mailto:info@globuselevators.com" className="text-white/80 hover:text-white transition-colors text-sm font-mono">info@globuselevators.com</a>
          <a href="tel:+919931334433" className="text-white/80 hover:text-white transition-colors text-sm font-mono">+91 99313 34433</a>
          <div className="pt-2 text-xs text-white/60">
            A/151, Sector 69, Noida, UP
          </div>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-xs font-mono text-white/60">
        <p>&copy; {new Date().getFullYear()} Globus Elevators. All rights reserved.</p>
        <div className="flex space-x-6 mt-4 md:mt-0">
          <a href="#" className="hover:text-white transition-colors">Instagram</a>
          <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
          <a href="#" className="hover:text-white transition-colors">WhatsApp</a>
        </div>
      </div>
    </footer>
  );
}
