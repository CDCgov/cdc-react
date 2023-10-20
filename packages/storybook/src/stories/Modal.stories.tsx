import { Meta, StoryObj } from "@storybook/react";
import { Modal } from "@us-gov-cdc/cdc-react";

const meta: Meta<typeof Modal> = {
  title: "Components/Modal",
  tags: ["autodocs"],
  component: Modal,
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof Modal>;

export const Example: Story = {};
