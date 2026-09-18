export interface RegistrationFormState {
  fullName: string;
  birthPlace: string;
  birthDate: string;
  parentName: string;
  parentPhone: string;
  address: string;
  programLevel: 'Wustha' | 'Ulya';
  hasActiveSibling: boolean;
  notes: string;
}

export interface BankAccount {
  bank: string;
  number: string;
  holder: string;
  color: string;
}

export interface ActivityPhoto {
  id: string;
  title: string;
  category: string;
  caption: string;
  tag: string;
  suggestedDimensions: string;
  aspectRatio: string;
  defaultSrc?: string;
}
