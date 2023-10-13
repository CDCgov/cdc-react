import { Meta, StoryObj } from "@storybook/react";
import { Card } from "../../../cdc-react/src/components/Card/Card";
import { Icons } from "@us-gov-cdc/cdc-react-icons";
import { action } from "@storybook/addon-actions";

const meta: Meta<typeof Card> = {
  title: "Components/Card",
  tags: ['autodocs'],
  component: Card,
  argTypes: { actionButtonOnClick: { action: "clicked" } },
};

export default meta;
type Story = StoryObj<typeof Card>;

export const Example: Story = {
  args: {
    layout: "horizontal",
    mediaSource:
      "https://images.unsplash.com/photo-1517135071804-3d5fb6c45486?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8c25vdyUyMGJyaWRnZSUyMHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D",
    header: "Card Header",
    headerTheme: "lighter",
    sectionTitle: "Section Title",
    setMediaBanner: true,
    actionButtonVariation: "text",
    actionButtonText: "Click to filter",
    actionButtonIcon: <Icons.Filter />,
    actionButtonIconPosition: "left",
    actionButtonOnClick: action("button-click"),
    children: (
      <>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <p>
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
          nisi ut aliquip ex ea commodo consequat.
        </p>
      </>
    ),
  },
};
