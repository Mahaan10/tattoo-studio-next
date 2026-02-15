export interface ClientInfoProps {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  birthday: string;
}

export interface BookingRequestProps {
  description: string;
  budgetRange: string;
  studioChooses: boolean;
  source: string;
  file: string[]
}

export interface MedicalDeclarationProps {
  hasAllergies: boolean;
  hasSkinCondition: boolean;
  isPregnantOrNursing: boolean;
  hasHeartCondition: boolean;
  hasDiabetes: boolean;
  takesBloodThinners: boolean;
  takesMedication: boolean;
  otherNotes?: string;
}

export interface ConsentProps {
  isAdultConfirmed: boolean;
  termsAccepted: boolean;
  privacyAccepted: boolean;
}

export interface BookingAppointmentProps {
  client: ClientInfoProps;
  bookingRequest: BookingRequestProps;
  medicalDeclaration: MedicalDeclarationProps;
  consent: ConsentProps;
}
