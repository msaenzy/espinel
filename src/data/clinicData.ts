import { NavItem, ValueProp, Treatment, ClinicValue, TestimonialSlot } from '../types';

export const CLINIC_INFO = {
  name: 'Odonto Espinel',
  fullName: 'Odonto Espinel — Clínica de Especialidades Odontológicas',
  phone: '+593 99 467 3158',
  phoneRaw: '593994673158',
  address: 'Juan Diguja OE2-66, Edificio Opal, Consultorio 308 (Juan Diguja y Vozandes), Quito 170508, Ecuador',
  addressShort: 'Juan Diguja OE2-66, Edif. Opal, Consultorio 308, Quito',
  schedule: 'Lunes a viernes, 9:00–18:00 (horario estimado; no está publicado en el perfil de Instagram del cliente — confirmar horario real antes de publicar)',
  whatsappBaseUrl: 'https://wa.me/593994673158',
  defaultWhatsappMessage: 'Hola, quiero agendar una valoración en Odonto Espinel.',
  mapsSearchUrl: 'https://www.google.com/maps/search/?api=1&query=Juan%20Diguja%20OE2-66%2C%20Quito%2C%20Ecuador',
  instagramUrl: 'https://www.instagram.com/odontoespinel/',
  facebookUrl: 'https://www.facebook.com/dra.karenespinel/',
  city: 'Quito, Ecuador',
} as const;

export const NAV_LINKS: readonly NavItem[] = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Por qué elegirnos', href: '#por-que-elegirnos' },
  { label: 'Tratamientos', href: '#tratamientos' },
  { label: 'Nosotros', href: '#nosotros' },
  { label: 'Contacto', href: '#contacto' },
];

export const VALUE_PROPS: readonly ValueProp[] = [
  {
    id: 'especialidades',
    title: 'Especialidades bajo un mismo techo',
    description:
      'Diseño de sonrisa, ortodoncia, botox, implantología y odontopediatría, coordinados por un mismo equipo clínico — sin derivarte a consultorios distintos en cada etapa de tu tratamiento.',
    iconName: 'Layers',
  },
  {
    id: 'casos-documentados',
    title: 'Casos documentados, no promesas',
    description:
      'Cada procedimiento que compartimos muestra el antes y el después real, para que sepas exactamente qué esperar antes de sentarte en el sillón.',
    iconName: 'FileCheck',
  },
  {
    id: 'atencion-familiar',
    title: 'Atención para toda la familia',
    description:
      'De la ortodoncia adulta a la odontopediatría, un mismo consultorio de confianza en el sector de Juan Diguja y Vozandes.',
    iconName: 'Users',
  },
];

export const TREATMENTS: readonly Treatment[] = [
  {
    id: 'diseno-de-sonrisa',
    title: 'Diseño de sonrisa',
    description:
      'Planificación digital de tu sonrisa antes de iniciar el tratamiento, para que apruebes el resultado desde el primer día.',
    tag: 'Estética de alta precisión',
    image:
      'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 'ortodoncia',
    title: 'Ortodoncia',
    description:
      'Brackets y alineadores para corregir la mordida y alinear tu sonrisa, con seguimiento fotográfico de cada avance.',
    tag: 'Alineación y oclusión',
    image:
      'https://plus.unsplash.com/premium_photo-1677174625625-fb6f183af447?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTE3fHxvcnRvZG9uY2lhfGVufDB8fDB8fHww',
  },
  {
    id: 'botox',
    title: 'Botox',
    description:
      'Tratamiento estético facial aplicado por especialistas odontológicos, pensado para armonizar tu sonrisa con el resto del rostro.',
    tag: 'Armonización orofacial',
    image:
      'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 'implantologia',
    title: 'Implantología',
    description:
      'Reemplazo de piezas dentales con implantes de calidad, para recuperar función y estética a largo plazo.',
    tag: 'Rehabilitación integral',
    image:
      'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 'odontopediatria',
    title: 'Odontopediatría',
    description:
      'Atención odontológica especializada para los más pequeños de la casa, en un ambiente pensado para que pierdan el miedo al dentista.',
    tag: 'Cuidado infantil especializado',
    image:
      'https://images.unsplash.com/photo-1631051104176-4fb841f41c9f?q=80&w=765&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
];

export const ABOUT_INFO = {
  whoWeAre:
    'Somos Odonto Espinel, una clínica de especialidades odontológicas en el norte de Quito. Combinamos diseño de sonrisa, ortodoncia, implantología, estética facial y odontopediatría bajo un mismo equipo, para que tu tratamiento tenga continuidad de principio a fin.',
  values: [
    {
      title: 'Precisión clínica',
      description: 'Tecnología diagnóstica y rigor en cada detalle del plan de tratamiento.',
    },
    {
      title: 'Seguimiento cercano de cada caso',
      description: 'Acompañamiento fotográfico y personal de principio a fin.',
    },
    {
      title: 'Especialidades integradas en un solo lugar',
      description: 'Sin traslados ni incoherencias entre distintas fases de tu salud dental.',
    },
    {
      title: 'Ambiente cómodo para toda la familia, incluidos los niños',
      description: 'Espacios serenos, empáticos y pensados para erradicar el miedo al odontólogo.',
    },
  ] as readonly ClinicValue[],
};

export const TESTIMONIAL_SLOTS: readonly TestimonialSlot[] = [
  {
    id: 'slot-1',
    slotNumber: 1,
    note: 'Espacio reservado para testimonio real — el cliente debe proporcionar nombre/inicial, tratamiento recibido y comentario',
  },
  {
    id: 'slot-2',
    slotNumber: 2,
    note: 'Espacio reservado para testimonio real — el cliente debe proporcionar nombre/inicial, tratamiento recibido y comentario',
  },
  {
    id: 'slot-3',
    slotNumber: 3,
    note: 'Espacio reservado para testimonio real — el cliente debe proporcionar nombre/inicial, tratamiento recibido y comentario',
  },
  {
    id: 'slot-4',
    slotNumber: 4,
    note: 'Espacio reservado para testimonio real — el cliente debe proporcionar nombre/inicial, tratamiento recibido y comentario',
  },
];

export const SERVICE_OPTIONS = [
  'Diseño de sonrisa',
  'Ortodoncia',
  'Botox',
  'Implantología',
  'Odontopediatría',
  'Otro',
] as const;
