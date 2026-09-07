import React from 'react';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline' | 'dark' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  target?: string;
  rel?: string;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  href,
  target,
  rel,
  icon,
  iconPosition = 'right',
  className = '',
  disabled,
  ...props
}) => {
  const baseStyles =
    'inline-flex items-center justify-center font-medium rounded-full transition-all duration-200 cursor-pointer select-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B08A4E] focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed';

  const sizeStyles = {
    sm: 'text-xs sm:text-sm px-4 py-2 gap-1.5 min-h-[40px]',
    md: 'text-sm sm:text-base px-6 py-3 gap-2 min-h-[46px]',
    lg: 'text-base sm:text-lg px-8 py-4 gap-2.5 min-h-[52px]',
  };

  const variantStyles = {
    primary:
      'bg-[#B08A4E] text-[#1E1C18] font-semibold hover:bg-[#9b773e] hover:text-[#FFFFFF] shadow-sm hover:shadow-md active:scale-[0.98]',
    outline:
      'border border-[#B08A4E] text-[#B08A4E] hover:bg-[#B08A4E] hover:text-[#1E1C18] active:scale-[0.98]',
    dark:
      'bg-[#24211B] text-[#F7F5F0] hover:bg-[#302B23] border border-[#3E382E] active:scale-[0.98]',
    ghost:
      'text-[#26221B] hover:text-[#B08A4E] hover:bg-[#B08A4E]/10 active:scale-[0.98]',
  };

  const combinedClass = `${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`;

  const content = (
    <>
      {icon && iconPosition === 'left' && <span className="shrink-0">{icon}</span>}
      <span>{children}</span>
      {icon && iconPosition === 'right' && <span className="shrink-0">{icon}</span>}
    </>
  );

  if (href) {
    return (
      <a
        href={href}
        target={target}
        rel={target === '_blank' ? 'noopener noreferrer' : rel}
        className={combinedClass}
      >
        {content}
      </a>
    );
  }

  return (
    <button disabled={disabled} className={combinedClass} {...props}>
      {content}
    </button>
  );
};
