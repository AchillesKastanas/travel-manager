import React from "react";
import "./SidebarButton.scss";

interface ISidebarButtonProps {
  icon: React.ReactNode;
  label?: string | React.ReactNode;
  isExpanded: boolean;
  className?: string;
  onClick?: () => void;
}

const SidebarButton = ({
  icon,
  label,
  isExpanded,
  className = "",
  onClick,
}: ISidebarButtonProps) => (
  <div className={`sidebar-button ${className}`} onClick={onClick}>
    <div className="icon-wrapper">{icon}</div>
    {label && (
      <div className={`label ${isExpanded ? "is-expanded" : ""}`}>{label}</div>
    )}
  </div>
);

export default SidebarButton;
