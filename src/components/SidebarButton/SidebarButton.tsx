import React from "react";

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
      <div className={`label ${isExpanded ? "is-expanded" : ""}`}>
        {label}
        {showArrow && isExpanded && (
          <span className={`arrow ${isSubmenuOpen ? "open" : ""}`}>▼</span>
        )}
      </div>
    )}
  </div>
);

export default SidebarButton;
