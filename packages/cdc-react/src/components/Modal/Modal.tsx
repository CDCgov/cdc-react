import "./Modal.scss";
import { Button } from "@us-gov-cdc/cdc-react";
import { Icons } from "@us-gov-cdc/cdc-react-icons";
import { useEffect, useRef, useState } from "react";
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

  // Close modal when clicking outside (optional based on prop)
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        !props.isForcedAction &&
        props.isOpen &&
        modalRef.current &&
        !modalRef.current.contains(event.target)
      ) {
        props.onClose();
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [props.isOpen, props.isForcedAction, props.onClose]);

  // Focus the modal when it opens
  useEffect(() => {
    if (props.isOpen) {
      modalRef.current?.focus();
    }
  }, [props.isOpen]);

  const handleOverlayClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (event.target === overlayRef.current && !props.isForcedAction) {
      props.onClose();
    }
  };

  useEffect(() => {
    if (props.isOpen) {
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [props.isOpen]);

  const [backgroundColor, setBackgroundColor] = useState("rgba(0,0,0,0.5)");

  useEffect(() => {
    if (!props.isOpen) {
      setBackgroundColor("rgba(255,0,0,0.5)");
    } else {
      setBackgroundColor("rgba(0,0,0,0.5)");
    }
  }, [props.isOpen]);

  if (!props.isOpen) return null;

  return (
    <div
      ref={overlayRef}
      onClick={handleOverlayClick}
      role="presentation"
      className="modal-overlay"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: "rgba(255, 105, 180, 0.8)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backdropFilter: "blur(5px)",
        backgroundColor,
      }}>
      <div
        ref={modalRef}
        className="modal usa-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modalTitle"
        style={{
          maxWidth: "600px",
          margin: "100px auto",
          background: "white",
          padding: "20px",
          borderRadius: "5px",
        }}>
        <div className="usa-modal__content">
          <div className="usa-modal__main">{props.children}</div>
          <Button
            ariaLabel="Close this window"
            size="tiny"
            iconOnly={true}
            icon={<Icons.Close />}
            variation="unstyled"
            className="usa-button usa-modal__close"
            onClick={props.onClose}></Button>
        </div>
      </div>
    </div>
  );
};

export const ModalTitle = (props: ModalChildrenProps) => {
  return <h2 className="modal-title usa-modal__heading">{props.children}</h2>;
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
