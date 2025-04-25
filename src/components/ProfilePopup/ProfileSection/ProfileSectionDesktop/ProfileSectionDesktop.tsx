import IconWrapper from "@/components/IconWrapper/IconWrapper";
import InfoItem from "../../InfoItem/InfoItem";

import "./ProfileSectionDesktop.scss";
import {
  IconBaby,
  IconEarlyCheckin,
  IconLateCheckout,
  IconProfile,
  IconTransfer,
} from "@/assets";

interface IProfileSectionDesktopProps {
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

const ProfileSectionDesktop = ({
  name,
  travelerPhoto,
  phone,
  email,
  origin,
  opportunities,
}: IProfileSectionDesktopProps) => {
  return (
    <div className="profile-section-container">
      <div className="image">
        <IconWrapper style={{ width: "100%", height: "100%" }}>
          {travelerPhoto ? <img src={travelerPhoto} /> : <IconProfile />}
        </IconWrapper>
      </div>
      <div className="name">{name}</div>
      <hr className="divider" />
      <InfoItem title="Phone number" text={phone} />
      <InfoItem title="Email" text={email} />
      <InfoItem title="Coming from" text={origin} />
      <div className="opportunities">
        <div className="opportunities-title">Opportunities</div>
        <div className="opportunities-list">
          {opportunities.map((opportunity, index) => (
            <div key={index} className="opportunity-row">
              <IconWrapper style={{ width: "2.1rem", height: "2.1rem" }}>
                {getOpportunityIcon(opportunity)}
              </IconWrapper>
              <div className="opportunity-text">{opportunity}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProfileSectionDesktop;
