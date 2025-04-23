import React from "react";

import { useResize } from "@/hooks/useResize";

import "./Modal.scss";
import DesktopModal from "./DesktopModal/DesktopModal";
import MobileModal from "./MobileModal/MobileModal";

interface ΙModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const Modal = ({ isOpen, onClose, children }: ΙModalProps) => {
  const { isMobile } = useResize();

  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      {isMobile ? (
        <MobileModal onClose={onClose}>{children}</MobileModal>
      ) : (
        <DesktopModal onClose={onClose}>{children}</DesktopModal>
      )}
    </div>
  );
};

export default Modal;
