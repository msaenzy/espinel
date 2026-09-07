import React from 'react';
import { Instagram, Facebook, MessageCircle, MapPin, Phone, Clock } from 'lucide-react';
import { CLINIC_INFO, NAV_LINKS } from '../../data/clinicData';
import { ToothLogo } from '../ui/ToothLogo';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contacto-footer" className="bg-[#1E1C18] text-[#CFC8BC] border-t border-[#332E25]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 mb-12">
          {/* Col 1: Brand & Promise */}
          <div className="space-y-4">
            <ToothLogo variant="dark" size="md" />
            <p className="text-sm leading-relaxed text-[#B3ACA0] mt-3">
              Clínica de Especialidades Odontológicas en el norte de Quito. Precisión clínica,
              diagnóstico transparente y seguimiento personalizado para toda la familia.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href={CLINIC_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram de Odonto Espinel (@odontoespinel)"
                className="w-10 h-10 rounded-full border border-[#3E382D] flex items-center justify-center text-[#DFC596] hover:bg-[#B08A4E] hover:text-[#1E1C18] hover:border-[#B08A4E] transition-all duration-200"
              >
                <Instagram className="w-4 h-4" strokeWidth={2} />
              </a>
              <a
                href={CLINIC_INFO.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook de Odonto Espinel (dra.karenespinel - página sujeta a confirmación oficial)"
                className="w-10 h-10 rounded-full border border-[#3E382D] flex items-center justify-center text-[#DFC596] hover:bg-[#B08A4E] hover:text-[#1E1C18] hover:border-[#B08A4E] transition-all duration-200"
                title="Página de Facebook identificada en investigación (confirmar con clínica)"
              >
                <Facebook className="w-4 h-4" strokeWidth={2} />
              </a>
              <a
                href={`${CLINIC_INFO.whatsappBaseUrl}?text=${encodeURIComponent(CLINIC_INFO.defaultWhatsappMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp oficial de Odonto Espinel"
                className="w-10 h-10 rounded-full border border-[#3E382D] flex items-center justify-center text-[#DFC596] hover:bg-[#B08A4E] hover:text-[#1E1C18] hover:border-[#B08A4E] transition-all duration-200"
              >
                <MessageCircle className="w-4 h-4" strokeWidth={2} />
              </a>
            </div>
          </div>

          {/* Col 2: Navegación Rápida */}
          <div>
            <h3
              className="text-sm font-semibold tracking-widest uppercase text-[#B08A4E] mb-4"
              style={{ letterSpacing: '0.16em' }}
            >
              Navegación
            </h3>
            <ul className="space-y-2.5 text-sm">
              {NAV_LINKS.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="hover:text-[#B08A4E] transition-colors duration-150 inline-block py-0.5"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Especialidades */}
          <div>
            <h3
              className="text-sm font-semibold tracking-widest uppercase text-[#B08A4E] mb-4"
              style={{ letterSpacing: '0.16em' }}
            >
              Especialidades
            </h3>
            <ul className="space-y-2.5 text-sm text-[#A9A193]">
              <li>Diseño de sonrisa digital</li>
              <li>Ortodoncia & alineadores</li>
              <li>Botox & armonización orofacial</li>
              <li>Implantología dental</li>
              <li>Odontopediatría especializada</li>
            </ul>
          </div>

          {/* Col 4: Datos Clave */}
          <div>
            <h3
              className="text-sm font-semibold tracking-widest uppercase text-[#B08A4E] mb-4"
              style={{ letterSpacing: '0.16em' }}
            >
              Consultorio
            </h3>
            <ul className="space-y-3 text-sm text-[#A9A193]">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#B08A4E] shrink-0 mt-0.5" strokeWidth={2} />
                <span>Juan Diguja OE2-66, Edif. Opal, Cons. 308, Quito</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#B08A4E] shrink-0" strokeWidth={2} />
                <span>+593 99 467 3158</span>
              </li>
              <li className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-[#B08A4E] shrink-0 mt-0.5" strokeWidth={2} />
                <span>Lunes a viernes 9:00 – 18:00 (estimado)</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Line */}
        <div className="pt-8 border-t border-[#272118] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#827a6d]">
          <p>© {currentYear} Odonto Espinel. Todos los derechos reservados.</p>
          <p className="text-center sm:text-right">
            Clínica de Especialidades Odontológicas • Quito, Ecuador
          </p>
        </div>
      </div>
    </footer>
  );
};
