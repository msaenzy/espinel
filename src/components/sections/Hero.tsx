import React from 'react';
import { MessageCircle, ArrowDown, Sparkles } from 'lucide-react';
import { CLINIC_INFO } from '../../data/clinicData';
import { Button } from '../ui/Button';
import { useScrollReveal } from '../../hooks/useScrollReveal';

export const Hero: React.FC = () => {
  const { ref, isVisible } = useScrollReveal<HTMLElement>({ threshold: 0.1 });

  const headlineWords = [
    'Especialistas',
    'en',
    'diseño',
    'de',
    'sonrisa,',
    'ortodoncia',
    'y',
    'estética',
    'facial',
    'en',
    'Quito',
  ];

  const whatsappUrl = `${CLINIC_INFO.whatsappBaseUrl}?text=${encodeURIComponent(
    CLINIC_INFO.defaultWhatsappMessage
  )}`;

  return (
    <section
      id="inicio"
      ref={ref}
      className="relative min-h-screen flex items-center justify-center bg-[#1E1C18] text-[#F7F5F0] pt-24 pb-16 sm:pt-28 sm:pb-20 overflow-hidden"
    >
      {/* Background Image with soft luminous overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=2000&q=85"
          alt="Consultorio de especialidades odontológicas Odonto Espinel en Quito"
          className="w-full h-full object-cover object-center opacity-30 filter brightness-95 contrast-100 transform scale-105 transition-transform duration-1000 ease-out"
        />
        {/* Radial vignette and warm gold atmosphere gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#1E1C18] via-[#1E1C18]/80 to-[#1E1C18]/85" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-[#B08A4E]/20 via-transparent to-transparent" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        {/* Eyebrow badge */}
        <div
          className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#2A2620] border border-[#B08A4E]/40 text-[#DFC596] text-xs uppercase tracking-[0.2em] font-medium mb-6 transition-all duration-700 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-80 translate-y-2'
          }`}
          style={{ letterSpacing: '0.18em' }}
        >
          <Sparkles className="w-3.5 h-3.5 text-[#B08A4E]" strokeWidth={2} />
          <span>Clínica de Especialidades Odontológicas • Quito</span>
        </div>

        {/* H1 Headline with word-by-word stagger */}
        <h1
          className="text-3xl sm:text-5xl md:text-6xl font-serif font-normal tracking-tight leading-[1.18] text-[#F7F5F0] max-w-4xl"
          style={{ fontFamily: "'Fraunces', Georgia, serif" }}
        >
          {headlineWords.map((word, index) => {
            const isHighlight =
              word.includes('sonrisa') || word.includes('ortodoncia') || word.includes('facial');
            return (
              <span
                key={`${word}-${index}`}
                className={`inline-block mr-2 sm:mr-3 transition-all duration-500 ease-out ${
                  isHighlight ? 'text-[#DFC596] font-medium' : 'text-[#F7F5F0]'
                } ${
                  isVisible
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-80 translate-y-3'
                }`}
                style={{
                  transitionDelay: `${index * 45}ms`,
                }}
              >
                {word}
              </span>
            );
          })}
        </h1>

        {/* Subheadline */}
        <p
          className={`mt-6 sm:mt-8 text-base sm:text-lg md:text-xl text-[#D4CDBF] max-w-2xl leading-relaxed font-normal transition-all duration-700 ease-out delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-80 translate-y-3'
          }`}
        >
          Botox, implantología y odontopediatría con el mismo cuidado que ves en cada video:
          diagnóstico preciso, resultados documentados y seguimiento personalizado.
        </p>

        {/* Call to Actions with delayed fade */}
        <div
          className={`mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto transition-all duration-700 ease-out delay-500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-80 translate-y-4'
          }`}
        >
          <Button
            href={whatsappUrl}
            target="_blank"
            size="lg"
            variant="primary"
            className="w-full sm:w-auto min-w-[240px]"
            icon={<MessageCircle className="w-5 h-5" strokeWidth={2} />}
            iconPosition="left"
            id="hero-whatsapp-primary-cta"
          >
            Agendar valoración por WhatsApp
          </Button>

          <Button
            href="#tratamientos"
            size="lg"
            variant="outline"
            className="w-full sm:w-auto text-[#DFC596] border-[#B08A4E]/70 hover:bg-[#B08A4E] hover:text-[#1E1C18]"
            icon={<ArrowDown className="w-4 h-4" strokeWidth={2} />}
            iconPosition="right"
            id="hero-see-treatments-cta"
          >
            Ver tratamientos
          </Button>
        </div>

        {/* Value Micro-Pills */}
        <div
          className={`mt-12 sm:mt-16 pt-8 border-t border-[#332E25] flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs sm:text-sm text-[#B6ADA0] transition-all duration-700 delay-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-75 translate-y-2'
          }`}
        >
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#B08A4E]"></span>
            <span>Edificio Opal, Consultorio 308</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#B08A4E]"></span>
            <span>Sector Juan Diguja y Vozandes</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#B08A4E]"></span>
            <span>Casos y procedimientos documentados</span>
          </div>
        </div>
      </div>
    </section>
  );
};
