import { ReactNode } from "react";

import IconWrapper from "@/components/IconWrapper/IconWrapper";
import IconCancel from "@assets/icon-cancel.svg";

import "./MobileModal.scss";

interface IMobileModalProps {
  onClose: () => void;
  children: ReactNode;
}

const MobileModal = ({ onClose, children }: IMobileModalProps) => {
  return (
    <div className="mobile-modal-content" onClick={(e) => e.stopPropagation()}>
      <div className="modal-close" onClick={onClose}>
        <IconWrapper style={{ width: "3.8rem", height: "3.8rem" }}>
          <IconCancel />
        </IconWrapper>
      </div>
      {children}
    </div>
  );
};

export default MobileModal;
