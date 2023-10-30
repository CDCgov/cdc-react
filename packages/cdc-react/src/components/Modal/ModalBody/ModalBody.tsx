export interface ModalChildrenProps {
  children: React.ReactNode;
}

export const ModalBody = (props: ModalChildrenProps) => {
  return <div className="modal-body">{props.children}</div>;
};
