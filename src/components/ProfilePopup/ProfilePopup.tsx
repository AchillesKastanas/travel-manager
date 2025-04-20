import ProfileSection from "./ProfileSection/ProfileSection";
import TransfersSection from "./TransferSection/TransferSection";
import TransferIcon from "@assets/icon-transfer.svg";
import EarlyCheckinIcon from "@assets/icon-earlycheckin.svg";

import "./ProfilePopup.scss";

interface IProfilePopupProps {
  profileData: {
    travelerName: string;
    dateTime: string;
    location: string;
    status: string;
    opportunities: string[];
  };
}

// TEMP UNTIL API
const POPUP_DATA = {
  profile: {
    name: "Sergey Shandarin",
    phone: "+1312441241",
    email: "sergeyshandarin@gmail.com",
    origin: "United States",
    opportunities: [
      { text: "No return transfer", icon: TransferIcon },
      { text: "Early check-in", icon: EarlyCheckinIcon },
    ],
  },
  transfers: {
    date: "July 01",
    route: {
      from: {
        name: "Rafina Port",
        address: "45 Street, Athens 1155, Greece",
      },
      to: {
        name: "The Athens Gate Hotel",
        address: "10 Syngrou Av. Athens 11742, Greece",
      },
      times: ["13:30", "16:30"],
    },
    details: [
      ["4", "2", "6", "4"],
      ["LAX 124", "10:00", "On time"],
    ],
  },
};

const ProfilePopup = ({ profileData }: IProfilePopupProps) => {
  return (
    <div className="profile-popup-container">
      <ProfileSection
        name={POPUP_DATA.profile.name}
        phone={POPUP_DATA.profile.phone}
        email={POPUP_DATA.profile.email}
        origin={POPUP_DATA.profile.origin}
        opportunities={POPUP_DATA.profile.opportunities}
      />
      <TransfersSection
        date={POPUP_DATA.transfers.date}
        route={POPUP_DATA.transfers.route}
        details={POPUP_DATA.transfers.details}
      />
    </div>
  );
};

export default ProfilePopup;
