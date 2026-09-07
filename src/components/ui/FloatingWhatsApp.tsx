import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import { CLINIC_INFO } from '../../data/clinicData';

export const FloatingWhatsApp: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(true);

  // Keep tooltip visible for 8 seconds, then let it auto-collapse
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowTooltip(false);
    }, 8000);

    return () => clearTimeout(timer);
  }, []);

  const whatsappUrl = `${CLINIC_INFO.whatsappBaseUrl}?text=${encodeURIComponent(
    CLINIC_INFO.defaultWhatsappMessage
  )}`;

  return (
    <div
      id="floating-whatsapp-container"
      className="fixed bottom-5 right-5 sm:bottom-7 sm:right-7 z-50 flex items-center gap-3 select-none pointer-events-auto"
    >
      {/* Tooltip emergente de conversión a la izquierda del botón redondo */}
      {showTooltip && (
        <div
          id="floating-whatsapp-tooltip"
          className="hidden sm:flex items-center gap-2.5 bg-white text-[#2C2720] text-xs py-2.5 px-4 rounded-2xl shadow-xl border border-[#E5DFD1] animate-in fade-in slide-in-from-right-3 duration-300"
        >
          <span className="w-2.5 h-2.5 rounded-full bg-[#25D366] shrink-0 animate-pulse"></span>
          <span className="font-medium text-[#2C2720]">¿Deseas agendar tu valoración?</span>
          <button
            type="button"
            onClick={() => setShowTooltip(false)}
            className="text-[#8C8373] hover:text-[#2C2720] ml-1 p-0.5 rounded transition-colors focus-visible:outline-none"
            aria-label="Cerrar sugerencia"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Botón flotante redondo verdecito de WhatsApp */}
      <a
        id="btn-whatsapp-flotante"
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contactar a Odonto Espinel por WhatsApp para agendar valoración"
        className="group relative flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 bg-[#25D366] hover:bg-[#20ba5a] text-white rounded-full shadow-[0_8px_30px_rgb(37,211,102,0.4)] transition-all duration-300 hover:scale-110 active:scale-95 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#25D366]/40"
      >
        {/* Anillo de pulso sutil verde */}
        <span className="absolute -inset-1 rounded-full bg-[#25D366]/40 animate-ping opacity-70 pointer-events-none"></span>

        {/* Ícono oficial vectorial de WhatsApp */}
        <svg
          viewBox="0 0 32 32"
          fill="currentColor"
          className="w-8 h-8 sm:w-9 sm:h-9 text-white transition-transform group-hover:scale-105"
          aria-hidden="true"
        >
          <path d="M16.02 3C8.83 3 3 8.83 3 16.02c0 2.54.73 4.91 2 6.92L3 29l6.23-1.95a12.92 12.92 0 0 0 6.79 1.9c7.19 0 13.02-5.83 13.02-13.02C29.04 8.83 23.21 3 16.02 3zm7.6 18.42c-.32.9-1.58 1.65-2.58 1.87-.69.15-1.58.27-4.6-0.98-3.87-1.6-6.37-5.54-6.57-5.8-.19-.27-1.57-2.09-1.57-3.99s.99-2.83 1.34-3.21c.35-.39.77-.48 1.03-.48.26 0 .52 0 .74.01.24.02.55-.09.86.66.32.77 1.09 2.66 1.19 2.85.09.19.16.42.03.67-.13.26-.19.42-.39.65-.19.23-.41.51-.59.69-.19.19-.39.4-.17.78.22.38.99 1.63 2.12 2.64 1.45 1.29 2.68 1.69 3.06 1.88.38.19.61.16.83-.09.23-.26.97-1.13 1.23-1.51.26-.39.52-.32.86-.19.35.13 2.22 1.05 2.6 1.24.39.19.64.29.74.45.09.16.09.93-.23 1.83z" />
        </svg>

        {/* Indicador de online */}
        <span className="absolute top-1 right-1 w-3.5 h-3.5 bg-emerald-300 border-2 border-white rounded-full"></span>
      </a>
    </div>
  );
};

