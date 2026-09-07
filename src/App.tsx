import React, { useState } from 'react';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { Hero } from './components/sections/Hero';
import { WhyChooseUs } from './components/sections/WhyChooseUs';
import { Treatments } from './components/sections/Treatments';
import { About } from './components/sections/About';
import { Testimonials } from './components/sections/Testimonials';
import { ContactLocation } from './components/sections/ContactLocation';
import { FloatingWhatsApp } from './components/ui/FloatingWhatsApp';

export default function App() {
  const [selectedService, setSelectedService] = useState<string>('Diseño de sonrisa');

  const handleSelectTreatmentForBooking = (treatmentTitle: string) => {
    setSelectedService(treatmentTitle);
    const contactElement = document.getElementById('contacto');
    if (contactElement) {
      contactElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#F7F4EE] text-[#201C15] flex flex-col selection:bg-[#B08A4E] selection:text-[#17140F]">
      {/* Sticky Header Navbar */}
      <Navbar />

      {/* Main Content Sections (Strict Architecture Order) */}
      <main id="main-content" className="flex-1">
        {/* 1. Hero */}
        <Hero />

        {/* 2. Por qué elegirnos */}
        <WhyChooseUs />

        {/* 3. Oferta / Tratamientos */}
        <Treatments onSelectTreatmentForForm={handleSelectTreatmentForBooking} />

        {/* 4. Sobre nosotros / La clínica */}
        <About />

        {/* 5. Testimonios */}
        <Testimonials />

        {/* 6. Ubicación y contacto */}
        <ContactLocation initialService={selectedService} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating WhatsApp CTA */}
      <FloatingWhatsApp />
    </div>
  );
}
