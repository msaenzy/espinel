import React, { useState, useEffect } from 'react';
import { Menu, X, MessageCircle } from 'lucide-react';
import { CLINIC_INFO, NAV_LINKS } from '../../data/clinicData';
import { ToothLogo } from '../ui/ToothLogo';
import { Button } from '../ui/Button';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const whatsappUrl = `${CLINIC_INFO.whatsappBaseUrl}?text=${encodeURIComponent(
    CLINIC_INFO.defaultWhatsappMessage
  )}`;

  return (
    <header
      id="main-header"
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#1E1C18]/95 backdrop-blur-md py-3.5 border-b border-[#353026] shadow-sm'
          : 'bg-[#1E1C18] py-5 border-b border-[#2C2720]'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo Lockup */}
          <a href="#inicio" className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B08A4E] rounded">
            <ToothLogo variant="dark" size="md" />
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-8" aria-label="Navegación principal">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm uppercase tracking-[0.14em] font-medium text-[#C7BFB1] hover:text-[#B08A4E] transition-colors duration-150 focus-visible:outline-none focus-visible:text-[#B08A4E]"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop Right CTA */}
          <div className="hidden sm:flex items-center gap-4">
            <Button
              href={whatsappUrl}
              target="_blank"
              size="sm"
              variant="primary"
              icon={<MessageCircle className="w-4 h-4" strokeWidth={2} />}
              iconPosition="left"
              id="navbar-whatsapp-cta"
            >
              Agendar por WhatsApp
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Agendar por WhatsApp"
              className="sm:hidden p-2 rounded-full bg-[#B08A4E] text-[#17140F] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B08A4E]"
            >
              <MessageCircle className="w-4 h-4" strokeWidth={2} />
            </a>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#C7BFB1] hover:text-white rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B08A4E]"
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-menu"
              aria-label={mobileMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6 text-[#B08A4E]" strokeWidth={2} />
              ) : (
                <Menu className="w-6 h-6 text-[#C7BFB1]" strokeWidth={2} />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <nav
            id="mobile-menu"
            className="lg:hidden mt-4 pt-4 pb-6 border-t border-[#353026] space-y-3 animate-in fade-in slide-in-from-top-2"
            aria-label="Menú móvil"
          >
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block py-2.5 px-3 rounded text-sm uppercase tracking-wider font-medium text-[#E8E2D5] hover:text-[#B08A4E] hover:bg-[#28241E] transition-colors duration-150"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-3">
              <Button
                href={whatsappUrl}
                target="_blank"
                size="md"
                variant="primary"
                className="w-full justify-center"
                icon={<MessageCircle className="w-4 h-4" strokeWidth={2} />}
                iconPosition="left"
              >
                Agendar por WhatsApp
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};
