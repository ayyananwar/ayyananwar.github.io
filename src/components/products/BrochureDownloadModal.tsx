"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { ContactForm } from "@/components/shared/ContactForm";

interface BrochureDownloadModalProps {
  isOpen: boolean;
  onClose: () => void;
  pdfUrl: string;
  pdfTitle: string;
}

export function BrochureDownloadModal({ isOpen, onClose, pdfUrl, pdfTitle }: BrochureDownloadModalProps) {
  const triggerDownloadAndClose = () => {
    // Trigger download
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.download = pdfUrl.split('/').pop() || 'brochure.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    setTimeout(() => {
      onClose();
    }, 1500);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
          />
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="relative w-full max-w-2xl bg-black border border-white/20 p-8 md:p-12 shadow-2xl"
          >
            <button 
              onClick={onClose}
              className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors"
            >
              <X size={24} />
            </button>

            <div className="mb-8 border-b border-white/10 pb-8">
              <span className="text-xs md:text-sm font-semibold tracking-[0.2em] text-white/50 uppercase mb-4 block">
                Technical Specifications
              </span>
              <h2 className="text-3xl font-bold tracking-tighter mb-4 leading-[1.1]">
                {pdfTitle}
              </h2>
              <p className="text-white/60 font-medium">
                Please provide your contact details to access the full technical brochure.
              </p>
            </div>

            <ContactForm 
              idPrefix={`download-${pdfUrl.replace(/[^a-zA-Z0-9]/g, '')}`} 
              buttonText="Download Brochure" 
              onSuccessCallback={triggerDownloadAndClose}
            />
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
