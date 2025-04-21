"use client";
import { useModal } from "@/contexts/ModalContext/ModalContext";
import { IUser } from "@/types";
import ProfilePopup from "../ProfilePopup/ProfilePopup";

import IconWrapper from "../IconWrapper/IconWrapper";
import Arriving from "@assets/Arriving.svg";
import Departing from "@assets/Departing.svg";
import Transfer from "@assets/Transfer.svg";
import IconBaby from "@assets/icon-baby.svg";
import IconEarlyCheckIn from "@assets/icon-earlycheckin.svg";
import IconEmpty from "@assets/icon-empty.svg";
import IconLateCheckOut from "@assets/icon-latecheckout.svg";
import IconProfile from "@assets/icon-profile.svg";
import IconTransfer from "@assets/icon-transfer.svg";

import "./TransferRow.scss";

interface ITransferRowProps {
  user: IUser;
  formattedUserDate: string;
}

const TransferRow = ({ user, formattedUserDate }: ITransferRowProps) => {
  const { openModal } = useModal();

  const handleRowClick = () => {
    const profileData = {
      travelerName: "Sergey Shandarin",
      dateTime: "Today, 1 June, 13:00",
      location: "Athens Airport",
      status: "Arriving",
      opportunities: ["Baby", "Transfer", "Early Check-In"],
    };

    openModal(<ProfilePopup profileData={profileData} />);
  };

  const loadStatusIcon = (category: string) => {
    switch (category) {
      case "Arrival":
        return <Arriving />;
      case "Departure":
        return <Departing />;
      case "In City":
        return <Transfer />;
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
            <img src={user.traveler_photo} />
            {}
            {/* <IconProfile /> */}
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
              <IconEarlyCheckIn />
            </IconWrapper>
          )}
          {!user.babies && !user.return_transfer && !user.early_checkin && (
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
