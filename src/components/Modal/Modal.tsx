import React from "react";

import IconWrapper from "@components/IconWrapper/IconWrapper";
import IconCancel from "@assets/icon-cancel.svg";
import BackButton from "@assets/back.svg";
import ForwardButton from "@assets/forward.svg";

import "./Modal.scss";

interface ΙModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const Modal = ({ isOpen, onClose, children }: ΙModalProps) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="back-button">
        <BackButton />
      </div>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
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
    </div>
  );
};

export default Modal;
