import { IUser } from "@/types";
import { useModal } from "@/contexts/ModalContext/ModalContext";
import ProfilePopup from "../ProfilePopup/ProfilePopup";
import IconWrapper from "../IconWrapper/IconWrapper";

import {
  IconArriving,
  IconBaby,
  IconDeparting,
  IconEarlyCheckin,
  IconEmpty,
  IconInCity,
  IconLateCheckout,
  IconProfile,
  IconTransfer,
} from "@/assets";

import "./TransferRow.scss";

interface ITransferRowProps {
  user: IUser;
  formattedUserDate: string;
}

const TransferRow = ({ user, formattedUserDate }: ITransferRowProps) => {
  const { openModal } = useModal();

  const handleRowClick = () => {
    openModal(<ProfilePopup user={user} />);
  };

  const loadStatusIcon = (category: string) => {
    switch (category) {
      case "Arrival":
        return <IconArriving />;
      case "Departure":
        return <IconDeparting />;
      case "In City":
        return <IconInCity />;
    }
  };

  return (
    <tr
      className="data-row"
      onClick={handleRowClick}
      style={{ cursor: "pointer" }}
    >
      <td className="status-row">{loadStatusIcon(user.category)}</td>
      <td className="traveler-row">
        <div className="traveler-data-wrapper">
          <IconWrapper>
            {user.traveler_photo ? (
              <img src={user.traveler_photo} />
            ) : (
              <IconProfile />
            )}
          </IconWrapper>
          <div className="traveler-profile-name">{`${user.traveler_first_name} ${user.traveler_last_name}`}</div>
        </div>
      </td>
      <td>{formattedUserDate}</td>
      <td>{user.location_title}</td>
      <td className="opportunities-row">
        <div className="opportunities-data-wrapper">
          {user.babies && (
            <IconWrapper>
              <IconBaby />
            </IconWrapper>
          )}
          {user.return_transfer && (
            <IconWrapper>
              <IconTransfer />
            </IconWrapper>
          )}
          {user.early_checkin && (
            <IconWrapper>
              <IconEarlyCheckin />
            </IconWrapper>
          )}
          {user.late_checkout && (
            <IconWrapper>
              <IconLateCheckout />
            </IconWrapper>
          )}
          {!user.babies &&
            !user.return_transfer &&
            !user.early_checkin &&
            !user.late_checkout && (
              <IconWrapper>
                <IconEmpty />
              </IconWrapper>
            )}
        </div>
      </td>
      <td></td>
    </tr>
  );
};

export default TransferRow;
