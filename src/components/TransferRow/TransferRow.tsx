"use client";
import { useModal } from "@/contexts/ModalContext/ModalContext";

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
import ProfilePopup from "../ProfilePopup/ProfilePopup";

const TransferRow = () => {
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

  return (
    <tr
      className="data-row"
      onClick={handleRowClick}
      style={{ cursor: "pointer" }}
    >
      <td className="status-row">
        <Arriving />
      </td>
      <td className="traveler-row">
        <div className="traveler-data-wrapper">
          <IconWrapper>
            <IconProfile />
          </IconWrapper>
          <div className="traveler-profile-name">Sergey Shandarin</div>
        </div>
      </td>
      <td>Today, 1 June, 13:00</td>
      <td>Athens Airport</td>
      <td className="opportunities-row">
        <div className="opportunities-data-wrapper">
          <IconWrapper>
            <IconBaby />
          </IconWrapper>
          <IconWrapper>
            <IconTransfer />
          </IconWrapper>
          <IconWrapper>
            <IconEarlyCheckIn />
          </IconWrapper>
        </div>
      </td>
      <td></td>
    </tr>
  );
};

export default TransferRow;
