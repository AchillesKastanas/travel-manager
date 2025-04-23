import { ITravel, IUser } from "@/types";
import ProfileSection from "../ProfileSection/ProfileSection";
import TransfersSection from "../TransferSection/TransferSection";
import { getUserOpportunitiesArray } from "../utils/getUserOpportunitiesArray";
import { mapTravelToTransferProps } from "../utils/mapTravelToTransferProps";

interface IProfilePopupDesktopProps {
  user: IUser;
  travel: ITravel;
}

const ProfilePopupDesktop = ({ user, travel }: IProfilePopupDesktopProps) => {
  return (
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
  );
};

export default ProfilePopupDesktop;
