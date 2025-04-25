import { useResize } from "@/hooks/useResize";

import { IconLogout, IconMenu, IconProfile, IconSearch } from "@/assets";

import "./Topbar.scss";

interface ITopbarProps {
  toggleSidebar: () => void;
}

const Topbar = ({ toggleSidebar }: ITopbarProps) => {
  const { isMobile } = useResize();

  return (
    <div className="topbar">
      <div className="topbar-actions">
        <div className="icon-button">
          {isMobile ? <IconMenu onClick={toggleSidebar} /> : <IconProfile />}
        </div>
        {isMobile && <div className="transfer-list-title">Transfer list</div>}
        <div className="icon-button">
          {isMobile ? <IconSearch /> : <IconLogout />}
        </div>
      </div>
    </div>
  );
};

export default Topbar;
