export interface GuestsArtistDateProps {
  startDate: string;
  endDate: string;
}

// Available Days and Tables

export interface GuestArtistDaysAvailability {
  date: string;
  totalTables: number;
  bookedTables: number;
  availableTables: number;
}

export interface GuestArtistTableAvailability {
  startDate: string;
  endDate: string;
  days: GuestArtistDaysAvailability[];
}

// Guest Artist Booking

export interface GuestArtistBooking {
  name: string;
  phone: string;
  email: string;
  startDate: string;
  endDate: string;
  numberOfTables: number;
  acknowledgment: boolean;
}
