import React from 'react';

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
  theme?: 'light' | 'dark';
  className?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  eyebrow,
  title,
  subtitle,
  centered = false,
  theme = 'light',
  className = '',
}) => {
  const isDark = theme === 'dark';

  return (
    <div className={`max-w-3xl ${centered ? 'mx-auto text-center' : ''} ${className}`}>
      {eyebrow && (
        <span
          className="inline-block text-xs uppercase tracking-[0.2em] font-semibold text-[#B08A4E] mb-3"
          style={{ letterSpacing: '0.18em' }}
        >
          {eyebrow}
        </span>
      )}
      <h2
        className={`text-2xl sm:text-3xl lg:text-4xl font-serif font-normal leading-[1.25] tracking-tight ${
          isDark ? 'text-[#F7F5F0]' : 'text-[#26221B]'
        }`}
        style={{ fontFamily: "'Fraunces', Georgia, serif" }}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-4 text-base sm:text-lg leading-relaxed ${
            isDark ? 'text-[#D0C9BD]' : 'text-[#645E53]'
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
};
