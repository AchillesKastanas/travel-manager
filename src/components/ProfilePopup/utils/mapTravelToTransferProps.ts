import { IUser, ITravel } from "@/types";
import { formatToHourMinute } from "./formatToHourMinute";
import { formatToMonthDay } from "./formatToMonthDay";

export const mapTravelToTransferProps = (user: IUser, travel: ITravel) => ({
  date: formatToMonthDay(user.datetime),
  route: {
    from: {
      name: travel.from_location_title,
      address: travel.from_location_address,
    },
    to: {
      name: travel.to_location_title,
      address: travel.to_location_address,
    },
    times: [
      formatToHourMinute(travel.from_datetime),
      formatToHourMinute(travel.to_datetime),
    ],
  },
  transferDetails: [
    travel.passengers.toString(),
    travel.babyseats.toString(),
    travel.luggage.toString(),
    travel.hand_luggage.toString(),
  ],
  flightDetails: travel.flight_status
    ? [
        travel.flight_status.flight_number ?? "",
        travel.flight_status.flight_time ?? "",
        travel.flight_status.flight_status ?? "",
      ]
    : [],
});
