import { ReactNode } from "react";

import IconWrapper from "@/components/IconWrapper/IconWrapper";
import IconCancel from "@assets/icon-cancel.svg";
import BackButton from "@assets/back.svg";
import ForwardButton from "@assets/forward.svg";

import "./DesktopModal.scss";

interface IDesktopModalProps {
  onClose: () => void;
  children: ReactNode;
}

const DesktopModal = ({ onClose, children }: IDesktopModalProps) => {
  return (
    <>
      <div className="back-button">
        <BackButton />
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
        <ForwardButton />
      </div>
    </>
  );
};

export default DesktopModal;
