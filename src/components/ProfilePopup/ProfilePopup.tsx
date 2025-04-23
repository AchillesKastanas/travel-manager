import { useResize } from "@/hooks/useResize";
import useFetchData from "@/hooks/useFetchData";
import { ITravel, IUser } from "@/types";

import { getTravelByUserId } from "./utils/getTravelByUserId";
import ProfilePopupDesktop from "./ProfilePopupDesktop/ProfilePopupDesktop";
import ProfilePopupMobile from "./ProfilePopupMobile/ProfilePopupMobile";

import "./ProfilePopup.scss";

interface IProfilePopupProps {
  user: IUser;
}

const ProfilePopup = ({ user }: IProfilePopupProps) => {
  const { isMobile } = useResize();
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
      {travel &&
        (isMobile ? (
          <ProfilePopupMobile user={user} travel={travel} />
        ) : (
          <ProfilePopupDesktop user={user} travel={travel} />
        ))}
    </div>
  );
};

export default ProfilePopup;
