import IconWrapper from "@/components/IconWrapper/IconWrapper";
import InfoItem from "../InfoItem/InfoItem";
import ProfileIcon from "@assets/icon-profile.svg";

import "./ProfileSection.scss";

interface IProfileSectionProps {
  name: string;
  phone: string;
  email: string;
  origin: string;
  opportunities: { text: string; icon: React.ComponentType }[];
}

const ProfileSection = ({
  name,
  phone,
  email,
  origin,
  opportunities,
}: IProfileSectionProps) => {
  return (
    <div className="profile-section-container">
      <div className="image">
        <IconWrapper style={{ width: "100%", height: "100%" }}>
          <ProfileIcon />
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
              <IconWrapper style={{ width: "34px", height: "34px" }}>
                <opportunity.icon />
              </IconWrapper>
              <div className="opportunity-text">{opportunity.text}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProfileSection;
