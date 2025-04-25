import IconWrapper from "@/components/IconWrapper/IconWrapper";
import InfoItem from "../../InfoItem/InfoItem";

import {
  IconBaby,
  IconCall,
  IconChat,
  IconEarlyCheckin,
  IconLateCheckout,
  IconProfile,
  IconTransfer,
} from "@/assets";

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
      return <IconEarlyCheckin />;
    case "Late check-out":
      return <IconLateCheckout />;
    case "No return transfer":
      return <IconTransfer />;
    case "Baby":
      return <IconBaby />;
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
    <div className="mobile-profile-section-container">
      <hr className="divider" />
      <div className="profile-guest-text">{"Your guest"}</div>
      <div className="profile-main-section-container">
        <div className="image">
          <IconWrapper style={{ width: "100%", height: "100%" }}>
            {travelerPhoto ? <img src={travelerPhoto} /> : <IconProfile />}
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
              <IconWrapper style={{ width: "2.2rem", height: "2.2rem" }}>
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
            style={{ width: "1rem", height: "1rem", borderRadius: 0 }}
          >
            <IconCall />
          </IconWrapper>
          Call
        </div>
        <div className="profile-button">
          <IconWrapper
            style={{ width: "1rem", height: "1rem", borderRadius: 0 }}
          >
            <IconChat />
          </IconWrapper>
          Message
        </div>
      </div>
    </div>
  );
};

export default ProfileSectionMobile;
