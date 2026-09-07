import React from 'react';
import { Sparkles, MessageCircle, ArrowUpRight } from 'lucide-react';
import { TREATMENTS, CLINIC_INFO } from '../../data/clinicData';
import { SectionHeading } from '../ui/SectionHeading';
import { useScrollReveal } from '../../hooks/useScrollReveal';

interface TreatmentsProps {
  onSelectTreatmentForForm?: (treatmentTitle: string) => void;
}

export const Treatments: React.FC<TreatmentsProps> = ({ onSelectTreatmentForForm }) => {
  const { ref, isVisible } = useScrollReveal<HTMLElement>({ threshold: 0.12 });

  const getWhatsappTreatmentUrl = (title: string) => {
    const text = `Hola, quiero agendar una valoración para ${title} en Odonto Espinel.`;
    return `${CLINIC_INFO.whatsappBaseUrl}?text=${encodeURIComponent(text)}`;
  };

  return (
    <section
      id="tratamientos"
      ref={ref}
      className="py-20 sm:py-28 bg-[#F7F4EE] text-[#201C15] border-b border-[#E5DFD1]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 sm:mb-18 gap-6">
          <SectionHeading
            eyebrow="Especialidades Clínicas"
            title="Nuestros Tratamientos"
            subtitle="Planificación guiada por especialistas, respaldo tecnológico y resultados pensados para durar."
          />
          <div className="shrink-0">
            <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#B08A4E] bg-[#F2ECE1] px-4 py-2 rounded-full border border-[#E5DFD1]">
              <Sparkles className="w-3.5 h-3.5" />
              5 Especialidades Integradas
            </span>
          </div>
        </div>

        {/* Staggered Grid: 5 treatments (2 columns or 3 columns responsive) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {TREATMENTS.map((treatment, index) => (
            <div
              key={treatment.id}
              id={`treatment-${treatment.id}`}
              className={`group bg-white rounded-2xl overflow-hidden border border-[#E5DFD1] shadow-sm hover:shadow-md hover:border-[#B08A4E]/60 transition-all duration-500 ease-out flex flex-col justify-between ${
                isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-80 translate-y-4'
              }`}
              style={{
                transitionDelay: `${index * 120}ms`,
              }}
            >
              <div>
                {/* Photo container */}
                <div className="relative h-56 sm:h-60 overflow-hidden bg-[#1E1C18]">
                  <img
                    src={treatment.image}
                    alt={`${treatment.title} en Odonto Espinel Quito`}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                    loading="lazy"
                    onError={(e) => {
                      // Fallback image in case of network issue
                      (e.target as HTMLImageElement).src =
                        'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=900&q=80';
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1E1C18]/80 via-transparent to-transparent" />
                  
                  {/* Category tag */}
                  <span className="absolute top-4 left-4 inline-block text-[11px] font-semibold uppercase tracking-wider bg-[#1E1C18]/90 text-[#DFC596] px-3 py-1 rounded-full border border-[#B08A4E]/40 backdrop-blur-sm">
                    {treatment.tag}
                  </span>
                </div>

                {/* Body Content */}
                <div className="p-7">
                  <h3
                    className="text-2xl font-serif font-normal text-[#26221B] group-hover:text-[#B08A4E] transition-colors duration-200 mb-3"
                    style={{ fontFamily: "'Fraunces', Georgia, serif" }}
                  >
                    {treatment.title}
                  </h3>
                  <p className="text-[#645E53] text-sm sm:text-base leading-relaxed">
                    {treatment.description}
                  </p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="p-7 pt-0 border-t border-[#F2ECE1]/80 mt-4 flex items-center justify-between gap-3">
                <a
                  href={`#contacto`}
                  onClick={() => onSelectTreatmentForForm?.(treatment.title)}
                  className="text-xs uppercase tracking-wider font-semibold text-[#645E53] hover:text-[#26221B] transition-colors inline-flex items-center gap-1"
                >
                  Consultar detalles
                </a>

                <a
                  href={getWhatsappTreatmentUrl(treatment.title)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold tracking-wider text-[#B08A4E] hover:text-[#9b773e] group/btn transition-colors"
                  aria-label={`Agendar valoración para ${treatment.title} por WhatsApp`}
                >
                  <MessageCircle className="w-4 h-4" strokeWidth={2} />
                  <span>Agendar por WhatsApp</span>
                  <ArrowUpRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                </a>
              </div>
            </div>
          ))}

          {/* Quick info card filling the 6th slot for aesthetic symmetry */}
          <div
            className={`bg-gradient-to-br from-[#27241E] to-[#1E1C18] text-[#F7F5F0] rounded-2xl p-8 border border-[#3E382E] shadow-md flex flex-col justify-between transition-all duration-500 ease-out ${
              isVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-80 translate-y-4'
            }`}
            style={{
              transitionDelay: `${5 * 120}ms`,
            }}
          >
            <div>
              <span className="inline-block text-xs uppercase tracking-[0.18em] font-semibold text-[#DFC596] mb-3">
                Evaluación integral
              </span>
              <h3
                className="text-2xl font-serif font-normal text-[#F7F5F0] mb-4"
                style={{ fontFamily: "'Fraunces', Georgia, serif" }}
              >
                ¿No estás seguro de qué tratamiento necesitas?
              </h3>
              <p className="text-[#D0C9BD] text-sm sm:text-base leading-relaxed mb-6">
                En tu primera valoración analizamos tu sonrisa, función oclusal y estética facial para
                proponerte un plan paso a paso y sin compromisos.
              </p>
            </div>

            <div>
              <a
                href={CLINIC_INFO.whatsappBaseUrl + `?text=${encodeURIComponent('Hola, deseo una valoración general para saber qué tratamiento necesito.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-full py-3.5 px-5 rounded-full bg-[#B08A4E] hover:bg-[#9b773e] text-[#1E1C18] hover:text-white font-semibold text-sm transition-all duration-200 gap-2 shadow-sm"
              >
                <MessageCircle className="w-4 h-4" strokeWidth={2} />
                <span>Pedir valoración diagnóstica</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
