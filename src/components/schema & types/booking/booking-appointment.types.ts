export interface ClientInfoProps {
  id?: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
}

export interface BookingRequestProps {
  bookingType: string;
  consultDate: string;
  description: string;
  budgetRange: string;
  placement?: string;
  file: string[];
}

// export interface MedicalDeclarationProps {
//   hasAllergies: boolean;
//   hasSkinCondition: boolean;
//   isPregnantOrNursing: boolean;
//   hasHeartCondition: boolean;
//   hasDiabetes: boolean;
//   takesBloodThinners: boolean;
//   takesMedication: boolean;
//   otherNotes?: string;
// }

// export interface ConsentProps {
//   isAdultConfirmed: boolean;
//   termsAccepted: boolean;
//   privacyAccepted: boolean;
// }

export interface BookingAppointmentProps {
  client: ClientInfoProps;
  bookingRequest: BookingRequestProps;
  // medicalDeclaration: MedicalDeclarationProps;
  // consent: ConsentProps;
}

export interface BookingInfo {
  id: string;
  status: string;
  clientId: string;
  placement: string;
  description: string;
  budgetRange: string;
  referrer: string;
  bookingType: string;
  consultDate: Date;
  consultSlotId: string;
  client: ClientInfoProps;
}

export interface BookingResponse {
  total: number;
  page: number;
  limit: number;
  items: BookingInfo[];
}

export interface SingleBookingResponse extends BookingInfo {
  medicalDeclaration: null;
  consent: null;
  uploads: string[];
  assignments: [];
  reviewedByAdmin: null;
}
