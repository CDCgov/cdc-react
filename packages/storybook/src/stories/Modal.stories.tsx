import { Meta, StoryObj } from "@storybook/react";
import { useArgs } from "@storybook/preview-api";
// import { Modal } from "@us-gov-cdc/cdc-react";
import {
  Modal,
  ModalBody,
  ModalFooter,
  ModalTitle,
} from "../../../cdc-react/src/components/Modal/Modal";
import { Button } from "@us-gov-cdc/cdc-react";

const meta: Meta<typeof Modal> = {
  title: "Components/Modal",
  tags: ["autodocs"],
  component: Modal,
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof Modal>;

export const Example: Story = {
  args: {
    isOpen: false,
    isForcedAction: false,
  },
  render: function Render(args) {
    const [{ isOpen }, updateArgs] = useArgs();

    function toggleModal() {
      updateArgs({ isOpen: !isOpen });
    }

    // const handleCloseModal = () => {
    //   updateArgs({ isOpen: !isOpen });
    //   alert("Modal closed!");
    // };

    return (
      <>
        <button onClick={toggleModal}>Open Modal</button>
        <Modal {...args} isOpen={isOpen} onClose={toggleModal}>
          <ModalTitle>Are you sure you want to continue?</ModalTitle>
          <ModalBody>You have unsaved changes that will be lost.</ModalBody>
          <ModalFooter>
            <Button ariaLabel="continue" onClick={toggleModal}>
              Continue without saving
            </Button>
            <Button ariaLabel="go back" variation="text" onClick={toggleModal}>
              Go back
            </Button>
          </ModalFooter>
        </Modal>
      </>
    );
  },
};

export const LockedBackground: Story = {
  args: {
    isOpen: false,
    isForcedAction: true,
  },
  render: function Render(args) {
    const [{ isOpen }, updateArgs] = useArgs();

    function toggleModal() {
      updateArgs({ isOpen: !isOpen });
    }
    return (
      <>
        <button onClick={toggleModal}>Open Modal</button>
        <Modal {...args} isOpen={isOpen} onClose={toggleModal}>
          <ModalTitle>Are you sure you want to continue?</ModalTitle>
          <ModalBody>You have unsaved changes that will be lost.</ModalBody>
          <ModalFooter>
            <Button ariaLabel="continue" onClick={toggleModal}>
              Continue without saving
            </Button>
            <Button ariaLabel="go back" variation="text" onClick={toggleModal}>
              Go back
            </Button>
          </ModalFooter>
        </Modal>
      </>
    );
  },
};
