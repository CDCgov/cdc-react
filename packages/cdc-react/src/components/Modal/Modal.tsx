import "./Modal.scss";
import { Button } from "@us-gov-cdc/cdc-react";
import { Icons } from "@us-gov-cdc/cdc-react-icons";
export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  modalTitle?: string;
  modalBody?: string;
  modalFooter?: string;
  isForcedAction?: boolean;
}

export const Modal = (props: ModalProps) => {
  return (
    <div className="modal usa-modal">
      <div className="usa-modal__content">
        <div className="usa-modal__main">
          <h2 className="usa-modal__heading">{props.modalTitle}</h2>
          <div className="usa-prose">
            <p>{props.modalBody}</p>
          </div>
          <div className="usa-modal__footer">
            <ul className="usa-button-group">
              <li className="usa-button-group__item">
                <Button ariaLabel="continue">Continue without saving</Button>
              </li>
              <li className="usa-button-group__item">
                <Button ariaLabel="go back" variation="text">
                  Go back
                </Button>
              </li>
            </ul>
          </div>
        </div>
        <Button
          ariaLabel="Close this window"
          size="tiny"
          iconOnly={true}
          icon={<Icons.Close />}
          variation="unstyled"
          className="usa-button usa-modal__close"></Button>
      </div>
    </div>
  );
};
