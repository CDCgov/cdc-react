import { Meta, StoryObj } from "@storybook/react";
import { Card } from "../components/Card/Card";

const meta: Meta<typeof Card> = {
  title: "Components/Card",
  component: Card,
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof Card>;

export const Example: Story = {
  args: {
    cardLayout: "horizontal",
    showTitleTop: false,
    cardSectionText:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    cardAction: "Action",
    cardHeader: "Card Header",
    cardSectionTitle: "Section Title",
  },
};
