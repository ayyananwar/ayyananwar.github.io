import Link from "next/link";

export function Footer() {
  return (
    <footer className="relative z-20 pt-20 pb-12 px-6 md:px-12 lg:px-24 bg-black border-t border-white/10 text-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
        
        <div className="lg:col-span-2 flex flex-col items-start">
          <Link href="/" className="text-3xl md:text-4xl font-bold tracking-tighter mb-4">
            GLOBUS
          </Link>
          <p className="text-white/50 max-w-sm text-sm md:text-base leading-relaxed">
            High-quality elevators. Built for safety and strength.
          </p>
        </div>

        <div className="flex flex-col space-y-4">
          <h4 className="text-xs font-semibold tracking-[0.2em] text-white/40 uppercase mb-2">Explore</h4>
          <Link href="/" className="text-white/80 hover:text-white transition-colors">Home</Link>
          <Link href="/about" className="text-white/80 hover:text-white transition-colors">About Us</Link>
          <Link href="/services" className="text-white/80 hover:text-white transition-colors">Services</Link>
          <Link href="/products" className="text-white/80 hover:text-white transition-colors">Our Elevators</Link>
          <Link href="/blogs" className="text-white/80 hover:text-white transition-colors">Insights</Link>
          <Link href="/contact" className="text-white/80 hover:text-white transition-colors">Consultation</Link>
        </div>

        {/* Legal & Social */}
        <div className="flex flex-col space-y-4">
          <h4 className="text-xs font-semibold tracking-[0.2em] text-white/40 uppercase mb-2">Legal</h4>
          <Link href="#" className="text-white/80 hover:text-white transition-colors">Privacy Policy</Link>
          <Link href="#" className="text-white/80 hover:text-white transition-colors">Terms of Service</Link>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-xs md:text-sm text-white/40">
        <p>© {new Date().getFullYear()} Globus Elevators. All rights reserved.</p>
        <div className="flex space-x-6 mt-4 md:mt-0">
          <a href="#" className="hover:text-white transition-colors">Instagram</a>
          <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
          <a href="#" className="hover:text-white transition-colors">Twitter</a>
        </div>
      </div>
    </footer>
  );
}
