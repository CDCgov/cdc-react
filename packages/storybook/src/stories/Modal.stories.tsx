import { Meta, StoryObj } from "@storybook/react";
import { useArgs } from "@storybook/preview-api";
// import { Modal } from "@us-gov-cdc/cdc-react";
import { Modal } from "../../../cdc-react/src/components/Modal/Modal";
import { ModalFooter } from "../../../cdc-react/src/components/Modal/ModalFooter/ModalFooter";
import { ModalBody } from "../../../cdc-react/src/components/Modal/ModalBody/ModalBody";
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
    modalTitle: "Are you sure you want to continue?",
  },
  render: function Render(args) {
    const [{ isOpen }, updateArgs] = useArgs();

    function toggleModal() {
      updateArgs({ isOpen: !isOpen });
    }

    return (
      <>
        <Button ariaLabel="open modal" onClick={toggleModal}>
          Open Modal
        </Button>
        <Modal {...args} isOpen={isOpen} onClose={toggleModal}>
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
    modalTitle: "Are you sure you want to continue?",
  },
  render: function Render(args) {
    const [{ isOpen }, updateArgs] = useArgs();

    function toggleModal() {
      updateArgs({ isOpen: !isOpen });
    }
    return (
      <>
        <Button ariaLabel="open modal" onClick={toggleModal}>
          Open Modal
        </Button>
        <Modal {...args} isOpen={isOpen} onClose={toggleModal}>
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

export const CDCExample: Story = {
  args: {
    isOpen: false,
    isForcedAction: true,
    modalTitle: "Are you sure you want to continue?",
  },
  render: function Render(args) {
    const [{ isOpen }, updateArgs] = useArgs();

    function toggleModal() {
      updateArgs({ isOpen: !isOpen });
    }
    return (
      <>
        <Button ariaLabel="open modal" onClick={toggleModal}>
          Open Modal
        </Button>
        <Modal {...args} isOpen={isOpen} onClose={toggleModal}>
          <ModalBody>
            <h6>
              Links with this icon indicate that you are about to leave the CDC
              website.
            </h6>
            <ul>
              <li>
                The Centers for Disease Control and Prevention (CDC) cannot
                attest to the accuracy of a non-federal website.
              </li>
              <li>
                Linking to a non-federal website does not constitute an
                endorsement by CDC or any of its employees of the sponsors or
                the information and products presented on the website.
              </li>
              <li>
                You will be subject to the destination website’s privacy policy
                when you follow the link.
              </li>
              <li>
                CDC is not responsible for Section 508 compliance
                (accessibility) on other federal or private websites.
              </li>
            </ul>
          </ModalBody>
          <ModalFooter>
            <Button ariaLabel="continue" onClick={toggleModal}>
              Action
            </Button>
            <Button ariaLabel="go back" variation="text" onClick={toggleModal}>
              Cancel
            </Button>
          </ModalFooter>
        </Modal>
      </>
    );
  },
};
