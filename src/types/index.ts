export interface ITraveler {
  phone_number: string;
  email: string;
  country: string;
}

export interface IFlightStatus {
  flight_number: string;
  flight_time: string;
  flight_status: string;
}

export interface ITravel {
  id: number;
  from_location_title: string;
  from_location_address: string;
  from_datetime: string;
  to_location_title: string;
  to_location_address: string;
  to_datetime: string;
  passengers: number;
  babyseats: number;
  luggage: number;
  hand_luggage: number;
  flight_status: IFlightStatus | null;
  traveler: ITraveler;
}

export interface IUser {
  id: number;
  datetime: string;
  category: "Arrival" | "Departure" | "In City";
  traveler_photo: string;
  traveler_first_name: string;
  traveler_last_name: string;
  location_title: string;
  early_checkin: boolean;
  late_checkout: boolean;
  return_transfer: boolean;
  babies: boolean;
  property_title: string;
}
