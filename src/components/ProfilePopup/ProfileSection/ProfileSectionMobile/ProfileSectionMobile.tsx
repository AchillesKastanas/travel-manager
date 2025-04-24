import IconWrapper from "@/components/IconWrapper/IconWrapper";
import ProfileIcon from "@assets/icon-profile.svg";
import ChatIcon from "@assets/chat.svg";
import CallIcon from "@assets/call.svg";
import TransferIcon from "@assets/icon-transfer.svg";
import EarlyCheckinIcon from "@assets/icon-earlycheckin.svg";
import LateCheckoutIcon from "@assets/icon-latecheckout.svg";
import BabyIcon from "@assets/icon-baby.svg";
import InfoItem from "../../InfoItem/InfoItem";

import "./ProfileSectionMobile.scss";

interface IProfileSectionMobileProps {
  name: string;
  travelerPhoto: string;
  phone: string;
  email: string;
  origin: string;
  opportunities: string[];
}

const getOpportunityIcon = (text: string): React.ReactNode => {
  switch (text) {
    case "Early check-in":
      return <EarlyCheckinIcon />;
    case "Late check-out":
      return <LateCheckoutIcon />;
    case "No return transfer":
      return <TransferIcon />;
    case "Baby":
      return <BabyIcon />;
    default:
      return null;
  }
};

const ProfileSectionMobile = ({
  name,
  travelerPhoto,
  phone,
  email,
  origin,
  opportunities,
}: IProfileSectionMobileProps) => {
  return (
    <div className="profile-section-container">
      <hr className="divider" />
      <div className="profile-guest-text">{"Your guest"}</div>
      <div className="profile-main-section-container">
        <div className="image">
          <IconWrapper style={{ width: "100%", height: "100%" }}>
            {travelerPhoto ? <img src={travelerPhoto} /> : <ProfileIcon />}
          </IconWrapper>
        </div>
        <div className="main-info">
          <div className="name">{name}</div>
          <InfoItem text={phone} />
          <InfoItem text={`From ${origin}`} />
          <hr className="main-info-divider" />
        </div>
      </div>
      <div className="opportunities">
        <div className="opportunities-title">Opportunities</div>
        <div className="opportunities-list">
          {opportunities.map((opportunity, index) => (
            <div key={index} className="opportunity-row">
              <IconWrapper style={{ width: "4rem", height: "4rem" }}>
                {getOpportunityIcon(opportunity)}
              </IconWrapper>
              <div className="opportunity-text">{opportunity}</div>
            </div>
          ))}
        </div>
      </div>
      <div className="profile-buttons-row">
        <div className="profile-button">
          <IconWrapper
            style={{ width: "2rem", height: "2rem", borderRadius: 0 }}
          >
            <CallIcon />
          </IconWrapper>
          Call
        </div>
        <div className="profile-button">
          <IconWrapper
            style={{ width: "2rem", height: "2rem", borderRadius: 0 }}
          >
            <ChatIcon />
          </IconWrapper>
          Message
        </div>
      </div>
    </div>
  );
};

export default ProfileSectionMobile;
