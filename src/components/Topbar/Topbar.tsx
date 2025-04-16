import Logout from "@assets/logout.svg";
import Profile from "@assets/profile.svg";

import "./Topbar.scss";

const Topbar = () => {
  return (
    <div className="topbar">
      <div className="topbar-actions">
        <div className="icon-button">
          <Profile />
        </div>
        <div className="icon-button">
          <Logout />
        </div>
      </div>
    </div>
  );
};

export default Topbar;
