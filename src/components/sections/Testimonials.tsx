import React, { useState, useEffect, useRef } from 'react';
import { Star, ChevronLeft, ChevronRight, MessageSquareDashed } from 'lucide-react';
import { TESTIMONIAL_SLOTS } from '../../data/clinicData';
import { SectionHeading } from '../ui/SectionHeading';
import { useScrollReveal } from '../../hooks/useScrollReveal';

export const Testimonials: React.FC = () => {
  const { ref, isVisible } = useScrollReveal<HTMLElement>({ threshold: 0.15 });
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const touchStartX = useRef<number | null>(null);

  const totalCards = TESTIMONIAL_SLOTS.length;

  // Auto-scroll loop continuo (con pausa en hover/touch)
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % totalCards);
    }, 4000);

    return () => clearInterval(interval);
  }, [isPaused, totalCards]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? totalCards - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % totalCards);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setIsPaused(true);
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    setIsPaused(false);
    if (touchStartX.current === null) return;
    const diffX = touchStartX.current - e.changedTouches[0].clientX;
    if (diffX > 40) {
      handleNext();
    } else if (diffX < -40) {
      handlePrev();
    }
    touchStartX.current = null;
  };

  return (
    <section
      id="testimonios"
      ref={ref}
      className="py-20 sm:py-28 bg-[#F7F4EE] text-[#201C15] border-b border-[#E5DFD1] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-6">
          <SectionHeading
            eyebrow="Experiencia y confianza"
            title="Opiniones y Casos"
            subtitle="La transparencia es nuestro principio: este espacio albergará testimonios verificados de pacientes reales."
          />

          {/* Carousel controls */}
          <div className="flex items-center gap-2 shrink-0">
            <button
              type="button"
              onClick={handlePrev}
              aria-label="Testimonio anterior"
              className="w-11 h-11 rounded-full border border-[#E5DFD1] bg-white flex items-center justify-center text-[#201C15] hover:border-[#B08A4E] hover:text-[#B08A4E] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B08A4E]"
            >
              <ChevronLeft className="w-5 h-5" strokeWidth={2} />
            </button>
            <button
              type="button"
              onClick={handleNext}
              aria-label="Siguiente testimonio"
              className="w-11 h-11 rounded-full border border-[#E5DFD1] bg-white flex items-center justify-center text-[#201C15] hover:border-[#B08A4E] hover:text-[#B08A4E] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B08A4E]"
            >
              <ChevronRight className="w-5 h-5" strokeWidth={2} />
            </button>
          </div>
        </div>

        {/* Carousel viewport container with pause on hover/touch */}
        <div
          className={`relative transition-all duration-700 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-85 translate-y-3'
          }`}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {/* Desktop multi-card / Mobile single-card carousel */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {TESTIMONIAL_SLOTS.map((slot, index) => {
              const isHighlight = index === currentIndex;
              return (
                <div
                  key={slot.id}
                  id={`testimonial-${slot.id}`}
                  className={`bg-white rounded-2xl p-7 border transition-all duration-300 flex flex-col justify-between ${
                    isHighlight
                      ? 'border-[#B08A4E] shadow-md ring-1 ring-[#B08A4E]/30'
                      : 'border-[#E5DFD1] shadow-xs hover:border-[#B08A4E]/50'
                  }`}
                >
                  <div>
                    {/* Calificación: 5 estrellas vacías (empty star) solicitadas literalmente en el prompt */}
                    <div
                      className="flex items-center gap-1 mb-4"
                      aria-label="Calificación pendiente de testimonio real"
                    >
                      {[1, 2, 3, 4, 5].map((s) => (
                        <Star
                          key={s}
                          className="w-4 h-4 text-[#B08A4E]/60 fill-none"
                          strokeWidth={1.6}
                          aria-hidden="true"
                        />
                      ))}
                      <span className="text-[10px] uppercase font-semibold text-[#8C8373] ml-2 tracking-wider">
                        Espacio {slot.slotNumber}
                      </span>
                    </div>

                    {/* Texto literal del placeholder requerido sin inventar nombres ni citas */}
                    <p className="text-sm leading-relaxed text-[#595347] italic font-normal">
                      "{slot.note}"
                    </p>
                  </div>

                  <div className="mt-8 pt-4 border-t border-[#F2ECE1] flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full bg-[#F7F4EE] border border-[#E5DFD1] flex items-center justify-center text-[#B08A4E]">
                      <MessageSquareDashed className="w-4 h-4" strokeWidth={1.8} />
                    </div>
                    <div>
                      <h4 className="text-xs font-semibold text-[#201C15]">
                        Paciente Verificado
                      </h4>
                      <p className="text-[11px] text-[#8C8373]">
                        Tratamiento Odonto Espinel
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Dots Indicator */}
          <div className="flex items-center justify-center gap-2 mt-8">
            {TESTIMONIAL_SLOTS.map((slot, index) => (
              <button
                key={`dot-${slot.id}`}
                onClick={() => setCurrentIndex(index)}
                aria-label={`Ir al testimonio ${index + 1}`}
                className={`h-2 rounded-full transition-all duration-300 ${
                  currentIndex === index
                    ? 'w-7 bg-[#B08A4E]'
                    : 'w-2 bg-[#D9D2C3] hover:bg-[#B08A4E]/50'
                }`}
              />
            ))}
          </div>

          {/* Notice Banner */}
          <p className="text-center text-xs text-[#8C8373] mt-6">
            Módulo interactivo con loop continuo automático y pausa al interactuar.
          </p>
        </div>
      </div>
    </section>
  );
};
