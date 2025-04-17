import { useState } from "react";
import Logo from "@assets/logo.svg";
import LogoDesc from "@assets/logo-desc.svg";
import LiveView from "@assets/live-view.svg";
import Scheduled from "@assets/scheduled.svg";
import Statistics from "@assets/statistics.svg";
import Revenue from "@assets/revenue.svg";
import Settings from "@assets/settings.svg";
import Collapse from "@assets/collapse.svg";

import SidebarButton from "../SidebarButton/SidebarButton";

import "./Sidebar.scss";

const navItems = [
  { icon: <LiveView />, label: "Live view" },
  { icon: <Scheduled />, label: "Scheduled" },
  { icon: <Statistics />, label: "Statistics" },
  { icon: <Revenue />, label: "Revenue" },
  { icon: <Settings />, label: "Settings" },
];

const Sidebar = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [activeIndex, setActiveIndex] = useState<number | null>(1);

  const toggleSidebar = () => setIsExpanded((prev) => !prev);

  return (
    <div className={`sidebar ${isExpanded ? "is-expanded" : ""}`}>
      <SidebarButton
        icon={<Logo />}
        label={<LogoDesc />}
        isExpanded={isExpanded}
        className="logo"
      />

      <div className="sidebar-actions-container">
        {navItems.map(({ icon, label }, idx) => (
          <SidebarButton
            key={idx}
            icon={icon}
            label={label}
            isExpanded={isExpanded}
            className={`action ${activeIndex === idx ? "active" : ""}`}
            onClick={() => setActiveIndex(idx)}
          />
        ))}
      </div>

      <SidebarButton
        icon={<Collapse />}
        label="Collapse menu"
        isExpanded={isExpanded}
        className="collapse"
        onClick={toggleSidebar}
      />
    </div>
  );
};

export default Sidebar;
