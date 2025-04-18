import { CSSProperties, ReactNode } from "react";
import "./IconWrapper.scss";

interface IIconWrapperProps {
  children: ReactNode;
  style?: CSSProperties; // Add style prop to accept custom styles
}

const IconWrapper = ({ children, style }: IIconWrapperProps) => {
  return (
    <div className="row-icon-wrapper" style={style}>
      {children}
    </div>
  );
};

export default IconWrapper;
