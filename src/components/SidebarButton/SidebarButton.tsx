import React from "react";

import { IconDown } from "@/assets";

import "./SidebarButton.scss";

interface ISidebarButtonProps {
  icon?: React.ReactNode;
  label?: string | React.ReactNode;
  isExpanded: boolean;
  className?: string;
  onClick?: () => void;
  showArrow?: boolean;
  isSubmenuOpen?: boolean;
}

const SidebarButton = ({
  icon,
  label,
  isExpanded,
  className = "",
  onClick,
  showArrow = false,
  isSubmenuOpen = false,
}: ISidebarButtonProps) => (
  <div className={`sidebar-button ${className}`} onClick={onClick}>
    {icon && (
      <div className={`icon-wrapper ${isExpanded ? "is-expanded" : ""}`}>
        {icon}
      </div>
    )}
    {label && (
      <>
        <div className={`label ${isExpanded ? "is-expanded" : ""}`}>
          {label}
        </div>
        {showArrow && isExpanded && (
          <span className={`arrow ${isSubmenuOpen ? "open" : ""}`}>
            <IconDown />
          </span>
        )}
      </>
    )}
  </div>
);

export default SidebarButton;
