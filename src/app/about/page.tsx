import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Globus Elevators",
  description: "15 Years of Building Trust. Learn about our simple, safe, and strong elevators.",
};

export default function AboutPage() {
  return (
    <main className="bg-black text-white selection:bg-white selection:text-black min-h-screen">
      
      {/* Hero Section */}
      <section className="relative pt-40 pb-24 px-6 md:px-12 border-b border-white/10">
        <div className="container mx-auto max-w-7xl">
          <span className="text-xs font-bold tracking-[0.2em] text-white/50 uppercase mb-8 block">
            Who We Are
          </span>
          <h1 className="text-5xl md:text-7xl lg:text-9xl font-bold tracking-tighter mb-12 leading-[1]">
            15 Years of <br />
            <span className="text-white/40">Building Trust.</span>
          </h1>
          <p className="text-xl md:text-3xl text-white/80 max-w-3xl font-medium leading-relaxed">
            We build safe, quiet, and strong elevators for your home and business. No cutting corners. Just pure engineering.
          </p>
        </div>
      </section>

      {/* Story Section - Large Stacking Blocks */}
      <section className="container mx-auto max-w-7xl px-6 md:px-12 py-32">
        <div className="space-y-32">
          
          {/* Block 1: Why we build */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-xs font-bold tracking-[0.2em] text-white/40 uppercase mb-6 block border-l-2 border-white pl-4">
                01 // Why We Build
              </span>
              <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-8">
                Elevators for <br/> Everyone.
              </h2>
              <p className="text-lg md:text-xl text-white/70 font-medium leading-relaxed">
                Our goal is simple. We want to make moving between floors easy and safe for everyone. Whether it is an old person in a home or a busy worker in an office, our lifts just work.
              </p>
            </div>
            <div className="h-[400px] md:h-[600px] w-full bg-white/5 border border-white/10 flex items-center justify-center p-12">
               <h3 className="text-3xl md:text-5xl font-bold tracking-tighter text-white/20 text-center uppercase">Safety First</h3>
            </div>
          </div>

          {/* Block 2: What we do */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 h-[400px] md:h-[600px] w-full bg-white/5 border border-white/10 flex items-center justify-center p-12">
               <h3 className="text-3xl md:text-5xl font-bold tracking-tighter text-white/20 text-center uppercase">Smart Design</h3>
            </div>
            <div className="order-1 lg:order-2">
              <span className="text-xs font-bold tracking-[0.2em] text-white/40 uppercase mb-6 block border-l-2 border-white pl-4">
                02 // What We Do
              </span>
              <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-8">
                Smart & <br/> Simple.
              </h2>
              <p className="text-lg md:text-xl text-white/70 font-medium leading-relaxed mb-6">
                We make home lifts that don't need a machine room. They fit in tight spaces. They use less power. And they look beautiful in your house.
              </p>
              <p className="text-lg md:text-xl text-white/70 font-medium leading-relaxed">
                For businesses, we build heavy-duty lifts that run fast and never break down.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* The Promise - Stark Grid */}
      <section className="border-t border-white/10 bg-black">
        <div className="container mx-auto px-6 md:px-12 max-w-7xl py-32">
          <div className="mb-24 text-center md:text-left">
            <span className="text-xs font-bold tracking-[0.2em] text-white/40 uppercase mb-4 block">
              03 // Our Promise
            </span>
            <h2 className="text-5xl md:text-7xl font-bold tracking-tighter">
              We Never Cut Corners.
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="border border-white/10 p-12 hover:bg-white/5 transition-colors">
              <h3 className="text-2xl font-bold tracking-tight mb-4">Best Quality Parts.</h3>
              <p className="text-white/60 font-medium leading-relaxed">
                We only use top imported materials. Every part is tested to make sure it lasts for years without issues.
              </p>
            </div>
            <div className="border border-white/10 p-12 hover:bg-white/5 transition-colors">
              <h3 className="text-2xl font-bold tracking-tight mb-4">Expert Engineers.</h3>
              <p className="text-white/60 font-medium leading-relaxed">
                Our team has over 15 years of experience. They know exactly how to install lifts safely and quickly.
              </p>
            </div>
            <div className="border border-white/10 p-12 hover:bg-white/5 transition-colors">
              <h3 className="text-2xl font-bold tracking-tight mb-4">Always Here.</h3>
              <p className="text-white/60 font-medium leading-relaxed">
                If you ever have a problem, we fix it fast. Our support team makes sure your lift is always running.
              </p>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}
