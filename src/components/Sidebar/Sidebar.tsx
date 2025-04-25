import { useEffect, useRef, useState } from "react";
import { useResize } from "@/hooks/useResize";

import SidebarButton from "@components/SidebarButton/SidebarButton";
import IconWrapper from "../IconWrapper/IconWrapper";

import "./Sidebar.scss";
import {
  IconCancel,
  IconCollapse,
  IconLiveView,
  IconLogo,
  IconLogoDesc,
  IconRevenue,
  IconScheduled,
  IconSettings,
  IconStatistics,
  IconSupport,
} from "@/assets";

interface ISidebarProps {
  isExpanded: boolean;
  toggleSidebar: () => void;
}

const navItems = [
  { id: "live-view", icon: <IconLiveView />, label: "Live view" },
  {
    id: "scheduled",
    icon: <IconScheduled />,
    label: "Scheduled",
    subItems: [
      { id: "opportunities", label: "Opportunities" },
      { id: "early-check-in", label: "Early check in" },
      { id: "other-sub-item", label: "Other sub item" },
    ],
  },
  { id: "statistics", icon: <IconStatistics />, label: "Statistics" },
  { id: "revenue", icon: <IconRevenue />, label: "Revenue" },
  { id: "settings", icon: <IconSettings />, label: "Settings" },
];

const Sidebar = ({ isExpanded, toggleSidebar }: ISidebarProps) => {
  const sidebarRef = useRef<HTMLDivElement>(null);
  const [activeId, setActiveId] = useState<string | null>("scheduled");
  const [openSubmenuId, setOpenSubmenuId] = useState<string | null>(null);
  const { isMobile } = useResize();

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        isExpanded &&
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target as Node)
      ) {
        toggleSidebar();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isExpanded, toggleSidebar]);

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
    <div
      className={`sidebar ${isExpanded ? "is-expanded" : ""}`}
      ref={sidebarRef}
    >
      {isMobile ? (
        <div className="sidebar-header">
          <SidebarButton
            icon={<IconLogo />}
            label={<IconLogoDesc />}
            isExpanded={isExpanded}
            className="logo"
          />
          <div className="modal-close" onClick={toggleSidebar}>
            <IconWrapper
              style={{
                width: "2.2rem",
                height: "2.2rem",
                backgroundColor: "#2D3B4E1A",
                fill: "red",
              }}
            >
              <IconCancel />
            </IconWrapper>
          </div>
        </div>
      ) : (
        <SidebarButton
          icon={<IconLogo />}
          label={<IconLogoDesc />}
          isExpanded={isExpanded}
          className="logo"
        />
      )}

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

      {isMobile ? (
        <SidebarButton
          label="Log out"
          isExpanded={isExpanded}
          className="logout"
        />
      ) : (
        <>
          <SidebarButton
            icon={<IconSupport />}
            label="Support"
            isExpanded={isExpanded}
            className="support"
            onClick={toggleSidebar}
          />
          <SidebarButton
            icon={<IconCollapse />}
            label="Collapse menu"
            isExpanded={isExpanded}
            className="collapse"
            onClick={toggleSidebar}
          />
        </>
      )}
    </div>
  );
};

export default Sidebar;
