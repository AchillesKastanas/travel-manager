import IconWrapper from "@/components/IconWrapper/IconWrapper";
import InfoItem from "../InfoItem/InfoItem";
import ProfileIcon from "@assets/icon-profile.svg";
import TransferIcon from "@assets/icon-transfer.svg";
import EarlyCheckinIcon from "@assets/icon-earlycheckin.svg";

import "./ProfileSection.scss";

interface ProfileSectionProps {
  name: string;
  phone: string;
  email: string;
  origin: string;
  opportunities: string[];
}

const ProfileSection = ({
  name,
  phone,
  email,
  origin,
  opportunities,
}: ProfileSectionProps) => {
  return (
    <div className="container">
      <div className="image">
        <IconWrapper>
          <ProfileIcon />
        </IconWrapper>
      </div>
      <div className="name">{name}</div>
      <hr className="divider" />
      <InfoItem title="Phone number" text={phone} />
      <InfoItem title="Email" text={email} />
      <InfoItem title="Coming from" text={origin} />
      <InfoItem
        title="Opportunities"
        text={opportunities[0]}
        icon={
          <IconWrapper>
            <TransferIcon />
          </IconWrapper>
        }
      />
      <InfoItem
        title="Opportunities"
        text={opportunities[1]}
        icon={
          <IconWrapper>
            <EarlyCheckinIcon />
          </IconWrapper>
        }
      />
    </div>
  );
};

export default ProfileSection;
