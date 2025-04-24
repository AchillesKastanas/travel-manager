import Logout from "@assets/logout.svg";
import Profile from "@assets/profile.svg";
import Menu from "@assets/menu.svg";
import Search from "@assets/search.svg";

import "./Topbar.scss";
import { useResize } from "@/hooks/useResize";

const Topbar = () => {
  const { isMobile } = useResize();

  return (
    <div className="topbar">
      <div className="topbar-actions">
        <div className="icon-button">{isMobile ? <Menu /> : <Profile />}</div>
        {isMobile && <div className="transfer-list-title">Transfer list</div>}
        <div className="icon-button">{isMobile ? <Search /> : <Logout />}</div>
      </div>
    </div>
  );
};

export default Topbar;
