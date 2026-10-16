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
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-4 md:p-6 overflow-y-auto">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/85"
          />
          
          <motion.div
            initial={{ opacity: 0, scale: 0.98, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.98, y: 15 }}
            className="relative w-full max-w-xl bg-black border border-white/20 p-5 sm:p-8 md:p-10 shadow-2xl my-auto max-h-[92dvh] overflow-y-auto z-10"
          >
            <button 
              onClick={onClose}
              className="absolute top-3 right-3 sm:top-5 sm:right-5 p-2 text-white/60 hover:text-white transition-colors"
              aria-label="Close modal"
            >
              <X size={22} />
            </button>

            <div className="mb-6 border-b border-white/10 pb-4 pr-8">
              <span className="text-xs font-mono uppercase tracking-widest text-white/50 mb-1 block">
                Technical Brochure
              </span>
              <h2 className="text-lg sm:text-2xl font-bold tracking-tight mb-2 text-white">
                {pdfTitle}
              </h2>
              <p className="text-xs sm:text-sm text-white/70">
                Enter your details to initiate immediate PDF download.
              </p>
            </div>

            <ContactForm 
              idPrefix={`download-${pdfUrl.replace(/[^a-zA-Z0-9]/g, '')}`} 
              buttonText="Download Brochure (PDF)" 
              source={`Brochure Download: ${pdfTitle}`}
              compact={true}
              theme="dark"
              onSuccessCallback={triggerDownloadAndClose}
            />
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
