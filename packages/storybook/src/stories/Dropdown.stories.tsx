import type { Meta, StoryObj } from "@storybook/react";
import { Dropdown } from "@us-gov-cdc/cdc-react";
import { Icons } from "@us-gov-cdc/cdc-react-icons";

const meta: Meta<typeof Dropdown> = {
  title: "Components/Dropdown",
  tags: ["autodocs"],
  component: Dropdown,
  argTypes: {},
  decorators: [(Story) => <Story />],
};

export default meta;

type Story = StoryObj<typeof Dropdown>;

export const Example: Story = {
  args: {
    srText: "Dropdown Screen Reader text",
    label: "Dropdown Label",
    items: ["Item One", "Item Two", "Item Three"],
    labelIcon: <Icons.Calendar />,
    onSelect: (item: string) => {
      console.log(item);
    },
    helperText: "",
    defaultValue: "",
  },
};

export const WithHelperText: Story = {
  args: {
    srText: "Dropdown Screen Reader text",
    label: "Dropdown Label",
    items: ["Item One", "Item Two", "Item Three"],
    onSelect: (item: string) => {
      console.log(item);
    },
    labelIcon: <Icons.Calendar />,
    helperText: "Helper text example",
  },
};

export const DefaultValue: Story = {
  args: {
    srText: "Dropdown Screen Reader text",
    label: "Dropdown Label",
    items: ["Item One", "Item Two", "Item Three"],
    onSelect: (item: string) => {
      console.log(item);
    },
    labelIcon: <Icons.Calendar />,
    defaultValue: "Item Two",
  },
};

export const NoIcon: Story = {
  args: {
    srText: "Dropdown Screen Reader text",
    label: "Dropdown Label",
    items: ["Item One", "Item Two", "Item Three"],
    onSelect: (item: string) => {
      console.log(item);
    },
  },
};
