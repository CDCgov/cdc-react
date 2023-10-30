export interface ModalChildrenProps {
  children: React.ReactNode;
}
export const ModalFooter = (props: ModalChildrenProps) => {
  return <div className="modal-footer usa-modal__footer">{props.children}</div>;
};
