import "./Modal.scss";
import { Button } from "@us-gov-cdc/cdc-react";
import { Icons } from "@us-gov-cdc/cdc-react-icons";
import { useRef } from "react";
export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children?: React.ReactNode;
  isForcedAction?: boolean;
}
export interface ModalChildrenProps {
  children: React.ReactNode;
}

export const Modal = (props: ModalProps) => {
  const overlayRef = useRef<HTMLDivElement>(null);
  const modalRef = useRef<HTMLDivElement>(null);

  const handleOverlayClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (event.target === overlayRef.current && !props.isForcedAction) {
      props.onClose();
    }
  };

  if (!props.isOpen) return null;

  return (
    <div
      ref={overlayRef}
      onClick={handleOverlayClick}
      role="presentation"
      className="modal-overlay">
      <div
        ref={modalRef}
        className="modal usa-modal"
        role="dialog"
        aria-modal="true">
        <div className="modal-content usa-modal__content">
          <div className="modal-main">{props.children}</div>
          <Button
            ariaLabel="Close this window"
            size="tiny"
            iconOnly={true}
            icon={<Icons.Close />}
            variation="unstyled"
            className="usa-button usa-modal__close modal-close-btn"
            onClick={props.onClose}></Button>
        </div>
      </div>
    </div>
  );
};

// TODO: extract these components to their own files
export const ModalTitle = (props: ModalChildrenProps) => {
  return (
    <div className="modal-header">
      <h2 className="modal-title">{props.children}</h2>
    </div>
  );
};

export const ModalBody = (props: ModalChildrenProps) => {
  return (
    <div className="modal-body usa-prose">
      <p>{props.children}</p>
    </div>
  );
};

export const ModalFooter = (props: ModalChildrenProps) => {
  return <div className="modal-footer usa-modal__footer">{props.children}</div>;
};
