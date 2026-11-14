import { useRef, useState } from 'react';
import { MotionConfig } from 'motion/react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { Portfolio } from './components/Portfolio';
import { Testimonials } from './components/Testimonials';
import { Pricing } from './components/Pricing';
import { ContactForm } from './components/ContactForm';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { Footer } from './components/Footer';
import { PRICING_PLANS } from './data/portfolioData';

export default function App() {
  const [selectedPlan, setSelectedPlan] = useState<string>(
    PRICING_PLANS[1].name
  );
  const [contextNote, setContextNote] = useState<string>('');
  const nameInputRef = useRef<HTMLInputElement | null>(null);

  const navigateToConversion = (options?: {
    planName?: string;
    note?: string;
  }) => {
    if (options?.planName) {
      setSelectedPlan(options.planName);
    }
    if (options?.note !== undefined) {
      setContextNote(options.note);
    }

    const contactElement = document.getElementById('contato');
    if (contactElement) {
      contactElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

    window.setTimeout(() => {
      nameInputRef.current?.focus({ preventScroll: true });
    }, 350);
  };

  return (
    <MotionConfig reducedMotion="user">
      <div className="min-h-screen bg-[#070709] text-[#FAF8F5] flex flex-col">
        <Navbar onPrimaryAction={() => navigateToConversion()} />

        <main className="flex-1">
          <Hero onPrimaryAction={() => navigateToConversion()} />
          <About onPrimaryAction={() => navigateToConversion()} />
          <Services onPrimaryAction={() => navigateToConversion()} />
          <Portfolio
            onPrimaryAction={(note) => navigateToConversion({ note })}
          />
          <Testimonials />
          <Pricing
            onSelectPlan={(planName) => navigateToConversion({ planName })}
          />
          <ContactForm
            selectedPlan={selectedPlan}
            contextNote={contextNote}
            nameInputRef={nameInputRef}
          />
        </main>

        <Footer />
        <FloatingWhatsApp />
      </div>
    </MotionConfig>
  );
}
