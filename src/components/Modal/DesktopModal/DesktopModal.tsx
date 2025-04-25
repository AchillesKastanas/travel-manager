import { ReactNode } from "react";

import IconWrapper from "@/components/IconWrapper/IconWrapper";
import { IconCancel, IconBack, IconForward } from "@/assets";

import "./DesktopModal.scss";

interface IDesktopModalProps {
  onClose: () => void;
  children: ReactNode;
}

const DesktopModal = ({ onClose, children }: IDesktopModalProps) => {
  return (
    <>
      <div className="back-button">
        <IconBack />
      </div>
      <div
        className="desktop-modal-content"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="modal-close" onClick={onClose}>
          <IconWrapper>
            <IconCancel />
          </IconWrapper>
        </div>
        {children}
      </div>
      <div className="next-button">
        <IconForward />
      </div>
    </>
  );
};

export default DesktopModal;
