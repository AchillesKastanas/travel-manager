import ProfileSection from "./ProfileSection/ProfileSection";
import TransfersSection from "./TransferSection/TransferSection";

import "./ProfilePopup.scss";

interface ProfilePopupProps {
  profileData: {
    travelerName: string;
    dateTime: string;
    location: string;
    status: string;
    opportunities: string[];
  };
}

const ProfilePopup = ({ profileData }: ProfilePopupProps) => {
  return (
    <div className="popup">
      <ProfileSection
        name="Sergey Shandarin"
        phone="+1312441241"
        email="sergeyshandarin@gmail.com"
        origin="United States"
        opportunities={["No return transfer", "Early check-in"]}
      />
      <TransfersSection
        date="July 01"
        route={{
          from: {
            name: "Rafina Port",
            address: "45 Street, Athens 1155, Greece",
          },
          to: {
            name: "The Athens Gate Hotel",
            address: "10 Syngrou Av. Athens 11742, Greece",
          },
          times: ["13:30", "16:30"],
        }}
        details={[
          ["4", "2", "6", "4"],
          ["LAX 124", "10:00", "On time"],
        ]}
      />
    </div>
  );
};

export default ProfilePopup;
