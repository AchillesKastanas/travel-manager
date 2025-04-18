import { ReactNode } from "react";
import "./IconWrapper.scss";

interface IconWrapperProps {
  children: ReactNode;
}

const IconWrapper = ({ children }: IconWrapperProps) => {
  return <div className="row-icon-wrapper">{children}</div>;
};

export default IconWrapper;
