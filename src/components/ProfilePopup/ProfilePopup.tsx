import ProfileSection from "./ProfileSection/ProfileSection";
import TransfersSection from "./TransferSection/TransferSection";
import useFetchData from "@/hooks/useFetchData";
import { ITravel, IUser } from "@/types";

import TransferIcon from "@assets/icon-transfer.svg";
import EarlyCheckinIcon from "@assets/icon-earlycheckin.svg";
import LateCheckoutIcon from "@assets/icon-latecheckout.svg";
import BabyIcon from "@assets/icon-baby.svg";

import "./ProfilePopup.scss";

interface IProfilePopupProps {
  user: IUser;
}

/*
 * Dev note, usage of return_transfer is unclear.
 * Title in figma is 'No return transfer'
 * JSON data key is 'return_transfer'
 *
 * Correct usage is 'No return transfer' meaning !return_transfer ?
 * Correct usage is 'No return transfer' meaning return_transfer ?
 *
 * In a real case scenario, I would verify with PO / Team Lead on this one, due to
 * time constrains, 'No return transfer' will be assumed to be the normal return_transfer value
 *
 * Let's discuss in the debrief :)
 */
const getUserOpportunitiesArray = (user: IUser) => {
  const earlyCheckin = { text: "Early check-in", icon: EarlyCheckinIcon };
  const lateCheckout = { text: "Late check-out", icon: LateCheckoutIcon };
  const returnTransfer = { text: "No return transfer", icon: TransferIcon };
  const babies = { text: "Baby", icon: BabyIcon };

  let opportunitiesArray = [];
  if (user.early_checkin) opportunitiesArray.push(earlyCheckin);
  if (user.late_checkout) opportunitiesArray.push(lateCheckout);
  if (user.return_transfer) opportunitiesArray.push(returnTransfer);
  if (user.babies) opportunitiesArray.push(babies);

  return opportunitiesArray;
};

const getTravelByUserId = (userId: number, travelData: ITravel[]) => {
  return travelData.find((travel) => travel.id === userId) || null;
};

export const formatToMonthDay = (isoString: string): string => {
  const date = new Date(isoString);
  return date.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
  });
};

export const formatToHourMinute = (isoString: string): string => {
  const date = new Date(isoString);
  return date.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  });
};

const ProfilePopup = ({ user }: IProfilePopupProps) => {
  const {
    data: travels,
    loading: travelsLoading,
    error: travelsError,
  } = useFetchData<ITravel[]>("/data/transfers_details.json");

  const travel: ITravel | null = travels
    ? getTravelByUserId(user.id, travels)
    : null;

  return (
    <div className="profile-popup-container">
      {travel && (
        <>
          <ProfileSection
            name={`${user.traveler_first_name} ${user.traveler_last_name}`}
            phone={travel.traveler.phone_number}
            email={travel.traveler.email}
            origin={travel.traveler.country}
            opportunities={getUserOpportunitiesArray(user)}
          />
          <TransfersSection
            date={formatToMonthDay(user.datetime)}
            route={{
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
            }}
            details={[
              ["4", "2", "6", "4"],
              ["LAX 124", "10:00", "On time"],
            ]}
          />
        </>
      )}
    </div>
  );
};

export default ProfilePopup;
