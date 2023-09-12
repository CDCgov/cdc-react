import { Meta, StoryObj } from "@storybook/react";
import { Divider } from "@us-gov-cdc/cdc-react";

const meta: Meta<typeof Divider> = {
  title: "Components/Divider",
  component: Divider,
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof Divider>;

export const Example: Story = {
  args: {
    width: 100,
    height: 2,
    stroke: "#000",
  },
};
