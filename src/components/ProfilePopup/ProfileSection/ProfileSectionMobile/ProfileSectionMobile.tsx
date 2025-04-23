import IconWrapper from "@/components/IconWrapper/IconWrapper";
import ProfileIcon from "@assets/icon-profile.svg";
import TransferIcon from "@assets/icon-transfer.svg";
import EarlyCheckinIcon from "@assets/icon-earlycheckin.svg";
import LateCheckoutIcon from "@assets/icon-latecheckout.svg";
import BabyIcon from "@assets/icon-baby.svg";
import InfoItem from "../../InfoItem/InfoItem";

import "../ProfileSection.scss";

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
      {"Your guest"}
      <div className="profile-main-section-container">
        <div className="image">
          <IconWrapper style={{ width: "100%", height: "100%" }}>
            {travelerPhoto ? <img src={travelerPhoto} /> : <ProfileIcon />}
          </IconWrapper>
        </div>
        <div className="main-info">
          <div className="name">{name}</div>
          <InfoItem text={phone} />
          <InfoItem text={email} />
          <InfoItem text={`From ${origin}`} />
        </div>
      </div>
      <div className="opportunities">
        <div className="opportunities-title">Opportunities</div>
        <div className="opportunities-list">
          {opportunities.map((opportunity, index) => (
            <div key={index} className="opportunity-row">
              <IconWrapper style={{ width: "34px", height: "34px" }}>
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

export default ProfileSectionMobile;
