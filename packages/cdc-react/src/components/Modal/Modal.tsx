import "./Modal.scss";
import { Button } from "@us-gov-cdc/cdc-react";
import { Icons } from "@us-gov-cdc/cdc-react-icons";
import { useEffect, useRef } from "react";

type ModalSize = "default" | "large";
export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children?: React.ReactNode;
  isForcedAction?: boolean;
  size?: ModalSize;
}
export interface ModalChildrenProps {
  children: React.ReactNode;
}

// Mapping the optional modal size choice to the USWDS predefined CSS class
// The map declaration/definition exists outside of the component const to prevent the map from being rebuilt everytime the component is (re)built
const propSizeToUSWDSClassMap = {
  default: "usa-modal",
  large: "usa-modal--lg",
};

export const Modal = (props: ModalProps) => {
  const overlayRef = useRef<HTMLDivElement>(null);
  const modalRef = useRef<HTMLDivElement>(null);

  const uswdsSizeClass = props.size
    ? propSizeToUSWDSClassMap[props.size]
    : "usa-modal";

  // Hook: determine whether to close the modal once overlay is clicked. - Optional
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        !props.isForcedAction &&
        props.isOpen &&
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        props.onClose();
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [props.isOpen, props.isForcedAction, props.onClose]);

  // Event Handler: close the modal if overlay is clicked
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
        className={`modal ${props.size}`}
        role="dialog"
        aria-modal="true">
        <div
          ref={modalRef}
          className={`modal ${uswdsSizeClass}`}
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
