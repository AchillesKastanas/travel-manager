import IconWrapper from "@/components/IconWrapper/IconWrapper";
import InfoItem from "../InfoItem/InfoItem";
import ProfileIcon from "@assets/icon-profile.svg";

import styles from "./ProfileSection.module.scss";

interface IProfileSectionProps {
  name: string;
  phone: string;
  email: string;
  origin: string;
  opportunities: { text: string; icon: React.ComponentType }[]; // Updated to include icon
}

const ProfileSection = ({
  name,
  phone,
  email,
  origin,
  opportunities,
}: IProfileSectionProps) => {
  return (
    <div className={styles.container}>
      <div className={styles.image}>
        <IconWrapper style={{ width: "100%", height: "100%" }}>
          <ProfileIcon />
        </IconWrapper>
      </div>
      <div className={styles.name}>{name}</div>
      <hr className={styles.divider} />
      <InfoItem title="Phone number" text={phone} />
      <InfoItem title="Email" text={email} />
      <InfoItem title="Coming from" text={origin} />
      <div className={styles.opportunities}>
        <div className={styles.opportunitiesTitle}>Opportunities</div>
        <div className={styles.opportunitiesList}>
          {opportunities.map((opportunity, index) => (
            <div key={index} className={styles.opportunityRow}>
              <IconWrapper style={{ width: "34px", height: "34px" }}>
                <opportunity.icon />
              </IconWrapper>
              <div className={styles.opportunityText}>{opportunity.text}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProfileSection;
