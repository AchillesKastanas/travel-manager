import { ITravel, IUser } from "@/types";
import ProfileSection from "../ProfileSection/ProfileSection";
import TransfersSection from "../TransferSection/TransferSection";
import { getUserOpportunitiesArray } from "../utils/getUserOpportunitiesArray";
import { mapTravelToTransferProps } from "../utils/mapTravelToTransferProps";

import "./ProfilePopupMobile.scss";

interface IProfilePopupMobileProps {
  user: IUser;
  travel: ITravel;
}

const ProfilePopupMobile = ({ user, travel }: IProfilePopupMobileProps) => {
  return (
    <div className="mobile-profile-wrapper">
      <div className="profile-preview-panel">
        {`${user.traveler_first_name}'s trip`}
      </div>
      <TransfersSection {...mapTravelToTransferProps(user, travel)} />
      <ProfileSection
        name={`${user.traveler_first_name} ${user.traveler_last_name}`}
        travelerPhoto={`${user.traveler_photo}`}
        phone={travel.traveler.phone_number}
        email={travel.traveler.email}
        origin={travel.traveler.country}
        opportunities={getUserOpportunitiesArray(user)}
      />
    </div>
  );
};

export default ProfilePopupMobile;
