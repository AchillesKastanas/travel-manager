import ProfileSection from "./ProfileSection/ProfileSection";
import TransfersSection from "./TransferSection/TransferSection";
import useFetchData from "@/hooks/useFetchData";
import { ITravel, IUser } from "@/types";

import { getUserOpportunitiesArray } from "./utils/getUserOpportunitiesArray";
import { getTravelByUserId } from "./utils/getTravelByUserId";
import { mapTravelToTransferProps } from "./utils/mapTravelToTransferProps";

import "./ProfilePopup.scss";

interface IProfilePopupProps {
  user: IUser;
}

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
            travelerPhoto={`${user.traveler_photo}`}
            phone={travel.traveler.phone_number}
            email={travel.traveler.email}
            origin={travel.traveler.country}
            opportunities={getUserOpportunitiesArray(user)}
          />
          <TransfersSection {...mapTravelToTransferProps(user, travel)} />
        </>
      )}
    </div>
  );
};

export default ProfilePopup;
