import React from 'react';
import { Layers, FileCheck, Users, CheckCircle2 } from 'lucide-react';
import { VALUE_PROPS } from '../../data/clinicData';
import { SectionHeading } from '../ui/SectionHeading';
import { useScrollReveal } from '../../hooks/useScrollReveal';

export const WhyChooseUs: React.FC = () => {
  const { ref, isVisible } = useScrollReveal<HTMLElement>({ threshold: 0.15 });

  const getIcon = (name: string) => {
    switch (name) {
      case 'Layers':
        return <Layers className="w-6 h-6 text-[#B08A4E]" strokeWidth={1.8} />;
      case 'FileCheck':
        return <FileCheck className="w-6 h-6 text-[#B08A4E]" strokeWidth={1.8} />;
      case 'Users':
        return <Users className="w-6 h-6 text-[#B08A4E]" strokeWidth={1.8} />;
      default:
        return <CheckCircle2 className="w-6 h-6 text-[#B08A4E]" strokeWidth={1.8} />;
    }
  };

  return (
    <section
      id="por-que-elegirnos"
      ref={ref}
      className="py-20 sm:py-28 bg-[#F7F5F0] text-[#26221B] border-b border-[#E8E2D6]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Criterio y confianza"
          title="Por qué elegirnos"
          subtitle="Una visión integral que combina rigor técnico, acompañamiento real y la tranquilidad de atenderte con un equipo multidisciplinario."
          centered
          className="mb-14 sm:mb-18"
        />

        {/* Tres tarjetas con animación stagger */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {VALUE_PROPS.map((item, index) => (
            <div
              key={item.id}
              id={`prop-${item.id}`}
              className={`bg-white rounded-2xl p-8 border border-[#E8E2D6] shadow-xs hover:shadow-md hover:border-[#B08A4E]/50 transition-all duration-500 ease-out flex flex-col justify-between ${
                isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-80 translate-y-4'
              }`}
              style={{
                transitionDelay: `${index * 150}ms`,
              }}
            >
              <div>
                {/* Icon wrapper */}
                <div className="w-14 h-14 rounded-xl bg-[#F7F5F0] border border-[#E8E2D6] flex items-center justify-center mb-6">
                  {getIcon(item.iconName)}
                </div>

                <h3
                  className="text-xl sm:text-2xl font-serif font-normal text-[#26221B] mb-3 leading-snug"
                  style={{ fontFamily: "'Fraunces', Georgia, serif" }}
                >
                  {item.title}
                </h3>

                <p className="text-[#645E53] text-base leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-[#F2ECE1] flex items-center gap-2 text-xs font-semibold tracking-wider text-[#B08A4E] uppercase">
                <span className="w-1.5 h-1.5 rounded-full bg-[#B08A4E]"></span>
                <span>Estándar Odonto Espinel</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
