import { useState } from "react";
import Logo from "@assets/logo.svg";
import LogoDesc from "@assets/logo-desc.svg";
import LiveView from "@assets/live-view.svg";
import Scheduled from "@assets/scheduled.svg";
import Statistics from "@assets/statistics.svg";
import Revenue from "@assets/revenue.svg";
import Settings from "@assets/settings.svg";
import Collapse from "@assets/collapse.svg";

import SidebarButton from "@components/SidebarButton/SidebarButton";

import "./Sidebar.scss";

interface ISidebarProps {
  isExpanded: boolean;
  toggleSidebar: () => void;
}

const navItems = [
  { id: "live-view", icon: <LiveView />, label: "Live view" },
  {
    id: "scheduled",
    icon: <Scheduled />,
    label: "Scheduled",
    subItems: [
      { id: "opportunities", label: "Opportunities" },
      { id: "early-check-in", label: "Early check in" },
      { id: "other-sub-item", label: "Other sub item" },
    ],
  },
  { id: "statistics", icon: <Statistics />, label: "Statistics" },
  { id: "revenue", icon: <Revenue />, label: "Revenue" },
  { id: "settings", icon: <Settings />, label: "Settings" },
];

const Sidebar = ({ isExpanded, toggleSidebar }: ISidebarProps) => {
  const [activeId, setActiveId] = useState<string | null>("scheduled");
  const [openSubmenuId, setOpenSubmenuId] = useState<string | null>(null);

  const handleMainItemClick = (id: string, hasSubItems: boolean) => {
    setActiveId(id);
    if (hasSubItems) {
      setOpenSubmenuId(openSubmenuId === id ? null : id);
    } else {
      setOpenSubmenuId(null);
    }
  };

  const handleSubItemClick = (subItemId: string) => {
    setActiveId(subItemId);
  };

  const isItemActive = (itemId: string, subItemIds: string[] = []) =>
    activeId === itemId || subItemIds.includes(activeId || "");

  return (
    <div className={`sidebar ${isExpanded ? "is-expanded" : ""}`}>
      <SidebarButton
        icon={<Logo />}
        label={<LogoDesc />}
        isExpanded={isExpanded}
        className="logo"
      />

      <div className="sidebar-actions-container">
        {navItems.map(({ id, icon, label, subItems }) => {
          const subItemIds = subItems ? subItems.map((sub) => sub.id) : [];
          return (
            <div key={id}>
              <SidebarButton
                icon={icon}
                label={label}
                isExpanded={isExpanded}
                className={`action ${
                  isItemActive(id, subItemIds) ? "active" : ""
                }`}
                onClick={() => handleMainItemClick(id, !!subItems)}
                showArrow={!!subItems}
                isSubmenuOpen={openSubmenuId === id}
              />
              {subItems && isExpanded && openSubmenuId === id && (
                <div className="submenu">
                  {subItems.map((subItem) => (
                    <SidebarButton
                      key={subItem.id}
                      label={subItem.label}
                      isExpanded={isExpanded}
                      className={`submenu-item ${
                        activeId === subItem.id ? "active" : ""
                      }`}
                      onClick={() => handleSubItemClick(subItem.id)}
                    />
                  ))}
                </div>
              )}
            </div>
          );
        })}
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
