export interface NavItem {
  readonly label: string;
  readonly href: string;
}

export interface ValueProp {
  readonly id: string;
  readonly title: string;
  readonly description: string;
  readonly iconName: 'Layers' | 'FileCheck' | 'Users';
}

export interface Treatment {
  readonly id: string;
  readonly title: string;
  readonly description: string;
  readonly tag: string;
  readonly image: string;
}

export interface ClinicValue {
  readonly title: string;
  readonly description: string;
}

export interface TestimonialSlot {
  readonly id: string;
  readonly slotNumber: number;
  readonly note: string;
}

export interface BookingFormData {
  name: string;
  service: string;
  timePreference: string;
}
