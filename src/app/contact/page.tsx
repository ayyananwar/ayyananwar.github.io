import { ContactSection } from "@/components/home/ContactSection";

export default function Contact() {
  return (
    <main className="bg-black text-white selection:bg-brand-500 selection:text-white">
      {/* We reuse the ContactSection component here, but it's now on its own dedicated page */}
      <div className="pt-24 pb-12">
        <ContactSection />
      </div>
    </main>
  );
}
