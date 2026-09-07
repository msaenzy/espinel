import React from 'react';

interface ToothLogoProps {
  variant?: 'dark' | 'light';
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

/**
 * Lockup tipográfico de Odonto Espinel con isotipo de diente estilizado en dorado envejecido (#B08A4E).
 * Espacio preparado para reemplazar por el archivo vectorial SVG / PNG oficial cuando el cliente lo suministre.
 */
export const ToothLogo: React.FC<ToothLogoProps> = ({
  variant = 'dark',
  className = '',
  size = 'md',
}) => {
  const isDark = variant === 'dark';

  const iconSizes = {
    sm: 'w-6 h-6',
    md: 'w-8 h-8',
    lg: 'w-10 h-10',
  };

  const textSizes = {
    sm: 'text-base sm:text-lg',
    md: 'text-lg sm:text-xl',
    lg: 'text-xl sm:text-2xl',
  };

  return (
    <div
      id="brand-logo-lockup"
      className={`inline-flex items-center gap-2.5 select-none transition-opacity duration-200 hover:opacity-95 ${className}`}
      aria-label="Odonto Espinel - Inicio"
    >
      {/* 
        SLOT RESERVADO PARA REEMPLAZAR POR EL SVG/PNG OFICIAL DEL CLIENTE CUANDO LO PROVEA:
        <img src="/logo-odonto-espinel.svg" alt="Odonto Espinel Logo" className="h-8 w-auto" />
      */}
      <div className="relative flex items-center justify-center">
        {/* Isotipo de diente estilizado en trazo fino dorado envejecido */}
        <svg
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={`${iconSizes[size]} text-[#B08A4E] shrink-0 transition-transform duration-300 group-hover:scale-105`}
          aria-hidden="true"
        >
          {/* Corona y raíces del diente estilizado */}
          <path
            d="M8 9C8 5.68629 10.6863 3 14 3H18C21.3137 3 24 5.68629 24 9C24 13.5 22.5 17 21 21.5C19.8 25.1 18.5 29 17.5 29C16.8 29 16.5 26.5 16 23C15.5 26.5 15.2 29 14.5 29C13.5 29 12.2 25.1 11 21.5C9.5 17 8 13.5 8 9Z"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          {/* Cúspide central sutil */}
          <path
            d="M16 7V13"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
          />
          {/* Puntos de esmalte dorado */}
          <circle cx="16" cy="18" r="1" fill="currentColor" />
        </svg>
      </div>

      <div className="flex flex-col leading-none">
        <span
          className={`font-serif tracking-[0.14em] font-semibold text-[#B08A4E] ${textSizes[size]}`}
          style={{ fontFamily: "'Fraunces', Georgia, serif" }}
        >
          ODONTO
        </span>
        <span
          className={`text-[10px] sm:text-xs tracking-[0.32em] font-normal uppercase ${
            isDark ? 'text-[#F7F4EE]' : 'text-[#201C15]'
          }`}
          style={{ letterSpacing: '0.28em' }}
        >
          ESPINEL
        </span>
      </div>
    </div>
  );
};
