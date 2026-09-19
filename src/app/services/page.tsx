import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Services | Globus Elevators",
  description: "From checking your site to keeping your lift running smoothly for years, we handle everything.",
};

export default function ServicesPage() {
  const steps = [
    {
      id: "01",
      title: "Free Site Check",
      description: "Our team comes to your home or building to check the space. We make sure a lift can be installed safely without any issues."
    },
    {
      id: "02",
      title: "Best Quality Parts",
      description: "We buy our materials and lift parts only from the best brands in the world. This means your lift will last a very long time."
    },
    {
      id: "03",
      title: "Safe Installation",
      description: "Our expert engineers install your lift carefully. We make sure it runs smoothly, quietly, and exactly as planned."
    },
    {
      id: "04",
      title: "Safety Tests",
      description: "Before you use the lift, we check every safety feature. We test the emergency brakes and alarms to make sure you are always safe."
    },
    {
      id: "05",
      title: "Final Check",
      description: "We do a heavy load test to make sure the lift can handle the weight easily. We don't leave until it is perfect."
    },
    {
      id: "06",
      title: "Handover & Training",
      description: "When the lift is ready, we hand over the keys. We teach you exactly how to use it and how to keep it in good condition."
    },
    {
      id: "07",
      title: "Fast Support",
      description: "If your lift ever stops or makes a noise, you can call us anytime. Our team will come fast and fix the problem."
    },
    {
      id: "08",
      title: "Yearly Maintenance (AMC)",
      description: "We offer a yearly plan where we come check your lift regularly. This keeps it running like new and stops big problems before they start."
    }
  ];

  return (
    <main className="bg-black text-white pt-32 pb-24 selection:bg-white selection:text-black min-h-screen">
      
      {/* Header */}
      <section className="container mx-auto px-6 md:px-12 max-w-7xl mb-32">
        <header className="border-b border-white/10 pb-12">
          <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold tracking-tighter mb-6 leading-[1.1]">
            How We <br />
            <span className="text-white/40">Work.</span>
          </h1>
          <p className="text-lg md:text-xl text-white/40 max-w-2xl font-medium leading-relaxed">
            From checking your site to keeping your lift running smoothly for years, we handle everything for you. Here is our simple step-by-step process.
          </p>
        </header>
      </section>

      {/* The Journey (Timeline) */}
      <section className="container mx-auto px-6 md:px-12 max-w-4xl">
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-[27px] md:left-1/2 top-0 bottom-0 w-[1px] bg-white/10 hidden md:block"></div>
          
          <div className="space-y-24">
            {steps.map((step, index) => (
              <div 
                key={step.id} 
                className={`relative flex flex-col md:flex-row items-center ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Center Node */}
                <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-14 h-14 bg-black border border-white/30 items-center justify-center text-xs font-bold text-white z-10">
                  {step.id}
                </div>

                {/* Content Box */}
                <div className="w-full md:w-1/2 p-0 md:px-16 text-left">
                  <div className="border border-white/10 p-8 md:p-12 hover:bg-white/5 transition-colors relative bg-black">
                    {/* Mobile Number Badge */}
                    <span className="md:hidden text-xs font-bold tracking-[0.2em] text-white/30 mb-4 block border-l-2 border-white pl-3">
                      Step {step.id}
                    </span>
                    <h3 className="text-2xl font-bold tracking-tight mb-4">
                      {step.title}
                    </h3>
                    <p className="text-white/60 font-medium leading-relaxed text-base md:text-lg">
                      {step.description}
                    </p>
                  </div>
                </div>

              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="container mx-auto px-6 md:px-12 max-w-7xl mt-48">
        <div className="border border-white/10 p-12 text-center bg-white/5">
          <h2 className="text-2xl md:text-4xl font-bold tracking-tight mb-6">
            Need a lift check?
          </h2>
          <p className="text-white/60 font-medium mb-8 max-w-lg mx-auto">
            Contact our team today to book a free site check or to talk about our Yearly Maintenance Plans.
          </p>
          <a 
            href="/contact"
            className="inline-block bg-white text-black px-12 py-5 text-sm font-bold tracking-[0.2em] uppercase hover:bg-neutral-200 transition-colors"
          >
            Contact Us
          </a>
        </div>
      </section>

    </main>
  );
}
