import { Meta, StoryObj } from "@storybook/react";
import { Checkbox } from "../../../cdc-react/src/components/Checkbox/Checkbox";

const meta: Meta<typeof Checkbox> = {
  title: "Components/Checkbox",
  tags: ["autodocs"],
  component: Checkbox,
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof Checkbox>;

export const Example: Story = {
  args: {},
};

export const NestedCheckboxes: Story = {
  args: {},
  render: function Render(args) {
    return (
      <>
        <Checkbox {...args} />
        <Checkbox {...args} />
        <Checkbox {...args} />
      </>
    );
  },
};
