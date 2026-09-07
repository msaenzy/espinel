import React, { useState, useEffect } from 'react';
import {
  MapPin,
  Clock,
  MessageCircle,
  ExternalLink,
  CalendarCheck,
  Phone,
  Send,
  AlertCircle,
} from 'lucide-react';
import { CLINIC_INFO, SERVICE_OPTIONS } from '../../data/clinicData';
import { SectionHeading } from '../ui/SectionHeading';
import { Button } from '../ui/Button';
import { useScrollReveal } from '../../hooks/useScrollReveal';

interface ContactLocationProps {
  initialService?: string;
}

export const ContactLocation: React.FC<ContactLocationProps> = ({ initialService }) => {
  const { ref, isVisible } = useScrollReveal<HTMLElement>({ threshold: 0.12 });

  const [nombre, setNombre] = useState('');
  const [servicio, setServicio] = useState<string>('Diseño de sonrisa');
  const [horario, setHorario] = useState('Mañana (9:00 a 13:00)');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    if (initialService) {
      setServicio(initialService);
    }
  }, [initialService]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!nombre.trim()) {
      setError('Por favor ingresa tu nombre para personalizar el mensaje de WhatsApp.');
      return;
    }

    if (!horario.trim()) {
      setError('Por favor indica tu horario preferente de atención.');
      return;
    }

    setError('');
    setSubmitted(true);

    // Copy exacto requerido:
    // "Hola, soy [Nombre]. Me interesa [Servicio] y mi horario preferente es [Horario]. ¿Podrían ayudarme a agendar?"
    const formattedMessage = `Hola, soy ${nombre.trim()}. Me interesa ${servicio} y mi horario preferente es ${horario.trim()}. ¿Podrían ayudarme a agendar?`;
    const targetUrl = `${CLINIC_INFO.whatsappBaseUrl}?text=${encodeURIComponent(formattedMessage)}`;

    window.open(targetUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <section
      id="contacto"
      ref={ref}
      className="py-20 sm:py-28 bg-[#F7F5F0] text-[#26221B] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Atención y Agendamiento"
          title="Ubicación y Contacto"
          subtitle="Agenda tu valoración médica directamente por WhatsApp o visítanos en nuestro consultorio en el norte de Quito."
          centered
          className="mb-14 sm:mb-20"
        />

        {/* Dos columnas con slide-in lateral opuesto */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Columna Izquierda: Información y Mapa Embebido (slide-in desde izquierda) */}
          <div
            className={`lg:col-span-6 space-y-6 transition-all duration-700 ease-out ${
              isVisible
                ? 'opacity-100 translate-x-0'
                : 'opacity-85 -translate-x-6'
            }`}
          >
            <div className="bg-white rounded-2xl p-7 sm:p-8 border border-[#E8E2D6] shadow-xs space-y-6">
              <h3
                className="text-2xl font-serif font-normal text-[#26221B]"
                style={{ fontFamily: "'Fraunces', Georgia, serif" }}
              >
                Visítanos en Quito
              </h3>

              {/* Dirección exacta */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#F7F5F0] border border-[#E8E2D6] flex items-center justify-center text-[#B08A4E] shrink-0 mt-0.5">
                  <MapPin className="w-5 h-5" strokeWidth={1.8} />
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-wider font-semibold text-[#8C8373] mb-1">
                    Dirección exacta
                  </h4>
                  <p className="text-sm sm:text-base font-medium text-[#26221B] leading-relaxed">
                    {CLINIC_INFO.address}
                  </p>
                </div>
              </div>

              {/* Horario con advertencia editorial */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#F7F5F0] border border-[#E8E2D6] flex items-center justify-center text-[#B08A4E] shrink-0 mt-0.5">
                  <Clock className="w-5 h-5" strokeWidth={1.8} />
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-wider font-semibold text-[#8C8373] mb-1">
                    Horario de atención
                  </h4>
                  <p className="text-sm sm:text-base text-[#26221B] leading-relaxed">
                    {CLINIC_INFO.schedule}
                  </p>
                </div>
              </div>

              {/* WhatsApp oficial */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#F7F5F0] border border-[#E8E2D6] flex items-center justify-center text-[#B08A4E] shrink-0 mt-0.5">
                  <Phone className="w-5 h-5" strokeWidth={1.8} />
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-wider font-semibold text-[#8C8373] mb-1">
                    WhatsApp directo
                  </h4>
                  <p className="text-base font-semibold text-[#26221B]">
                    {CLINIC_INFO.phone}
                  </p>
                </div>
              </div>

              {/* Botón Abrir en Mapa */}
              <div className="pt-2">
                <Button
                  href={CLINIC_INFO.mapsSearchUrl}
                  target="_blank"
                  variant="outline"
                  size="md"
                  className="w-full sm:w-auto"
                  icon={<ExternalLink className="w-4 h-4" strokeWidth={2} />}
                  iconPosition="right"
                  id="btn-abrir-en-mapa"
                >
                  Abrir en Mapa
                </Button>
              </div>
            </div>

            {/* Mapa embebido con pin en la ubicación exacta */}
            <div className="relative rounded-2xl overflow-hidden border border-[#E8E2D6] shadow-xs bg-[#EFE9DC] h-72 sm:h-80">
              <iframe
                title="Mapa de ubicación de Odonto Espinel en Quito"
                src="https://maps.google.com/maps?q=Juan%20Diguja%20OE2-66%2C%20Quito%2C%20Ecuador&t=&z=16&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full filter contrast-105"
              />
            </div>
          </div>

          {/* Columna Derecha: Formulario a WhatsApp (slide-in desde derecha) */}
          <div
            className={`lg:col-span-6 transition-all duration-700 ease-out ${
              isVisible
                ? 'opacity-100 translate-x-0'
                : 'opacity-85 translate-x-6'
            }`}
          >
            <div className="bg-white rounded-2xl p-7 sm:p-10 border border-[#E8E2D6] shadow-xs">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-[#27241E] flex items-center justify-center text-[#DFC596]">
                  <CalendarCheck className="w-5 h-5" strokeWidth={1.8} />
                </div>
                <div>
                  <h3
                    className="text-2xl font-serif font-normal text-[#26221B]"
                    style={{ fontFamily: "'Fraunces', Georgia, serif" }}
                  >
                    Agendar Valoración
                  </h3>
                  <p className="text-xs text-[#8C8373] mt-0.5">
                    Completa tus datos para enviar un mensaje directo a nuestro WhatsApp
                  </p>
                </div>
              </div>

              {error && (
                <div className="mb-6 p-4 rounded-xl bg-[#FDF2F2] border border-[#F8D7DA] text-[#9B1C1C] text-xs sm:text-sm flex items-start gap-2.5">
                  <AlertCircle className="w-4 h-4 shrink-0 mt-0.5 text-[#9B1C1C]" />
                  <span>{error}</span>
                </div>
              )}

              {submitted && (
                <div className="mb-6 p-4 rounded-xl bg-[#F0FDF4] border border-[#BBF7D0] text-[#166534] text-xs sm:text-sm flex items-start gap-2.5">
                  <CalendarCheck className="w-4 h-4 shrink-0 mt-0.5 text-[#166534]" />
                  <span>
                    ¡Ventana de WhatsApp abierta! Si tu navegador bloqueó el pop-up, haz clic abajo para abrir manualmente.
                  </span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                {/* Campo 1: Nombre */}
                <div>
                  <label
                    htmlFor="booking-name"
                    className="block text-xs font-semibold uppercase tracking-wider text-[#595347] mb-2"
                  >
                    Tu Nombre Completo <span className="text-[#B08A4E]">*</span>
                  </label>
                  <input
                    id="booking-name"
                    type="text"
                    required
                    value={nombre}
                    onChange={(e) => setNombre(e.target.value)}
                    placeholder="Ej. María Carrera"
                    className="w-full px-4 py-3 rounded-xl border border-[#E8E2D6] bg-[#F7F5F0]/60 text-[#26221B] placeholder-[#9E9789] text-sm sm:text-base focus:outline-none focus:border-[#B08A4E] focus:ring-2 focus:ring-[#B08A4E]/20 transition-all"
                  />
                </div>

                {/* Campo 2: Servicio de interés con opciones requeridas */}
                <div>
                  <label
                    htmlFor="booking-service"
                    className="block text-xs font-semibold uppercase tracking-wider text-[#645E53] mb-2"
                  >
                    Servicio de Interés <span className="text-[#B08A4E]">*</span>
                  </label>
                  <select
                    id="booking-service"
                    value={servicio}
                    onChange={(e) => setServicio(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-[#E8E2D6] bg-[#F7F5F0]/60 text-[#26221B] text-sm sm:text-base focus:outline-none focus:border-[#B08A4E] focus:ring-2 focus:ring-[#B08A4E]/20 transition-all cursor-pointer"
                  >
                    {SERVICE_OPTIONS.map((item) => (
                      <option key={item} value={item}>
                        {item}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Campo 3: Horario preferente */}
                <div>
                  <label
                    htmlFor="booking-time"
                    className="block text-xs font-semibold uppercase tracking-wider text-[#645E53] mb-2"
                  >
                    Horario Preferente <span className="text-[#B08A4E]">*</span>
                  </label>
                  <input
                    id="booking-time"
                    type="text"
                    required
                    value={horario}
                    onChange={(e) => setHorario(e.target.value)}
                    placeholder="Ej. Mañana (10:00 AM) o Tarde (16:00 PM)"
                    className="w-full px-4 py-3 rounded-xl border border-[#E8E2D6] bg-[#F7F5F0]/60 text-[#26221B] placeholder-[#9E9789] text-sm sm:text-base focus:outline-none focus:border-[#B08A4E] focus:ring-2 focus:ring-[#B08A4E]/20 transition-all"
                  />
                </div>

                {/* Preview del mensaje que se enviará */}
                <div className="p-4 rounded-xl bg-[#F7F5F0] border border-[#E8E2D6] text-xs text-[#645E53] space-y-1">
                  <span className="font-semibold text-[#B08A4E] block uppercase tracking-wider text-[10px]">
                    Mensaje generado para WhatsApp:
                  </span>
                  <p className="italic font-mono text-[11px] sm:text-xs text-[#3E382E] leading-relaxed">
                    "Hola, soy {nombre.trim() || '[Nombre]'}. Me interesa {servicio} y mi horario preferente es {horario.trim() || '[Horario]'}. ¿Podrían ayudarme a agendar?"
                  </p>
                </div>

                {/* Submit button */}
                <div className="pt-2">
                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    className="w-full justify-center"
                    icon={<Send className="w-4 h-4" strokeWidth={2} />}
                    iconPosition="right"
                    id="btn-enviar-formulario-whatsapp"
                  >
                    Enviar y Agendar por WhatsApp
                  </Button>
                </div>

                <p className="text-center text-xs text-[#8C8373] mt-3">
                  Sin formularios engorrosos: se abrirá tu WhatsApp listo con el mensaje estructurado.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
