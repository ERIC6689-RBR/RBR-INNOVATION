import { motion } from 'motion/react';
import { MessageCircle } from 'lucide-react';
import { buildWhatsAppUrl } from '../data/portfolioData';

export function FloatingWhatsApp() {
  const href = buildWhatsAppUrl(
    'Olá, RBR Innovation! Quero um site profissional com entrega no mesmo dia para aumentar o faturamento da minha empresa.'
  );

  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar com RBR Innovation no WhatsApp"
      animate={{ y: [0, -7, 0] }}
      transition={{
        duration: 2.8,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="fixed right-4 bottom-4 sm:right-6 sm:bottom-6 z-40 inline-flex h-12 items-center gap-2.5 rounded-full bg-[#D4AF37] px-4 sm:px-5 text-sm font-semibold text-[#09090B] border border-[#F3DF9A]/50 shadow-[0_14px_32px_-6px_rgba(212,175,55,0.45)] transition-colors duration-150 hover:bg-[#E5C158] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E5C158] focus-visible:ring-offset-2 focus-visible:ring-offset-[#070709]"
    >
      <motion.span
        animate={{ y: [0, -2, 0] }}
        transition={{
          duration: 2.8,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 0.15,
        }}
        className="inline-flex items-center justify-center shrink-0"
      >
        <MessageCircle className="h-5 w-5 shrink-0" aria-hidden="true" />
      </motion.span>
      <span className="hidden sm:inline whitespace-nowrap">WhatsApp</span>
    </motion.a>
  );
}
