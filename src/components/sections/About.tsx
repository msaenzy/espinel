import React from 'react';
import { Check, ShieldCheck, HeartHandshake, Sparkles, Building2 } from 'lucide-react';
import { ABOUT_INFO } from '../../data/clinicData';
import { SectionHeading } from '../ui/SectionHeading';
import { useScrollReveal } from '../../hooks/useScrollReveal';

export const About: React.FC = () => {
  const { ref, isVisible } = useScrollReveal<HTMLElement>({ threshold: 0.15 });

  const valueIcons = [
    <ShieldCheck key="1" className="w-5 h-5 text-[#B08A4E]" strokeWidth={2} />,
    <Sparkles key="2" className="w-5 h-5 text-[#B08A4E]" strokeWidth={2} />,
    <Building2 key="3" className="w-5 h-5 text-[#B08A4E]" strokeWidth={2} />,
    <HeartHandshake key="4" className="w-5 h-5 text-[#B08A4E]" strokeWidth={2} />,
  ];

  return (
    <section
      id="nosotros"
      ref={ref}
      className="py-20 sm:py-28 bg-[#F7F5F0] text-[#26221B] border-b border-[#E8E2D6] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center transition-all duration-700 ease-out ${
            isVisible
              ? 'opacity-100 scale-100'
              : 'opacity-85 scale-[0.98]'
          }`}
        >
          {/* Left Column: Visual Composition with authentic clinical photography */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden border border-[#E8E2D6] shadow-md bg-[#1E1C18]">
              <img
                src="https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&w=1200&q=80"
                alt="Instalaciones y equipo clínico de Odonto Espinel en Quito"
                className="w-full h-[460px] sm:h-[520px] object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1E1C18]/85 via-[#1E1C18]/20 to-transparent" />

              {/* Floating Pill on image */}
              <div className="absolute bottom-6 left-6 right-6 p-5 rounded-xl bg-[#1E1C18]/90 backdrop-blur-md border border-[#B08A4E]/30 text-[#F7F5F0]">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#B08A4E]/20 flex items-center justify-center text-[#DFC596] shrink-0">
                    <Building2 className="w-5 h-5" strokeWidth={1.8} />
                  </div>
                  <div>
                    <h4 className="text-sm font-serif font-medium text-[#F7F5F0]">
                      Edificio Opal • Consultorio 308
                    </h4>
                    <p className="text-xs text-[#CFC8BC]">
                      Juan Diguja OE2-66 y Vozandes, Quito
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative Gold Frame element */}
            <div className="hidden sm:block absolute -top-4 -left-4 w-28 h-28 border-t-2 border-l-2 border-[#B08A4E]/40 rounded-tl-2xl pointer-events-none" />
          </div>

          {/* Right Column: Copy & Values */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <SectionHeading
              eyebrow="Sobre nosotros"
              title="La clínica"
              className="mb-6"
            />

            {/* Copy exacto quiénes somos */}
            <p className="text-base sm:text-lg text-[#453F35] leading-relaxed mb-8">
              {ABOUT_INFO.whoWeAre}
            </p>

            {/* Lista de Valores */}
            <div className="space-y-4">
              <h3
                className="text-xs uppercase tracking-[0.2em] font-semibold text-[#B08A4E]"
                style={{ letterSpacing: '0.18em' }}
              >
                Nuestros Valores Clínicos
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                {ABOUT_INFO.values.map((val, idx) => (
                  <div
                    key={val.title}
                    className="p-4 rounded-xl bg-white border border-[#E8E2D6] flex items-start gap-3 shadow-xs"
                  >
                    <div className="mt-0.5 shrink-0">
                      {valueIcons[idx] || (
                        <Check className="w-4 h-4 text-[#B08A4E]" strokeWidth={2.5} />
                      )}
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm text-[#26221B]">
                        {val.title}
                      </h4>
                      <p className="text-xs text-[#6E685C] mt-1 leading-normal">
                        {val.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Trust Quote / Central Promise */}
            <div className="mt-8 p-5 rounded-xl bg-[#F3EDE3] border-l-4 border-[#B08A4E]">
              <p className="text-xs sm:text-sm italic text-[#4F493E] leading-relaxed">
                "Cada procedimiento que Odonto Espinel comparte en redes ya demuestra su nivel técnico
                — esta web existe para que esa misma confianza se traduzca en una cita agendada, no solo
                en un 'me gusta'."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
