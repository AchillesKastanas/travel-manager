import { useResize } from "@/hooks/useResize";
import ProfileSectionDesktop from "./ProfileSectionDesktop/ProfileSectionDesktop";
import ProfileSectionMobile from "./ProfileSectionMobile/ProfileSectionMobile";

import "./ProfileSection.scss";

interface IProfileSectionProps {
  name: string;
  travelerPhoto: string;
  phone: string;
  email: string;
  origin: string;
  opportunities: string[];
}

const ProfileSection = (props: IProfileSectionProps) => {
  const { isMobile } = useResize();

  return isMobile ? (
    <ProfileSectionMobile {...props} />
  ) : (
    <ProfileSectionDesktop {...props} />
  );
};

export default ProfileSection;
