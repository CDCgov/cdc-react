import type { Meta, StoryObj } from "@storybook/react";

import { Alert } from "@us-gov-cdc/cdc-react";

const meta: Meta<typeof Alert> = {
  title: "Components/Alert",
  tags: ["autodocs"],
  component: Alert,
};

export default meta;
type Story = StoryObj<typeof Alert>;

export const Example: Story = {
  argTypes: {
    type: {
      control: { type: "select" },
      options: ["info", "warning", "success", "error", "emergency"],
      description: `Alert types: "info", "warning", "success", "error", "emergency"`,
      table: {
        defaultValue: {
          detail: "type is required",
          summary: "null",
        },
      },
    },
    slim: {
      control: { type: "boolean" },
      description: `enable slim alert style/size`,
    },
    noIcon: {
      control: { type: "boolean" },
      description: `disable the display of the icon`,
    },
    heading: {
      description: "main heading of the alert",
    },
    children: {
      description:
        "body content of the alert, can be a `string` or `React Node`",
    },
  },
  args: {
    type: "info",
    heading: "Informational status",
    slim: null,
    noIcon: null,
    children: (
      <>
        Lorem ipsum dolor sit amet,{" "}
        <a href="#anchor">consectetur adipiscing elit</a>, sed do eiusmod.
      </>
    ),
  },
};

export const basicAlerts: Story = {
  render: () => {
    return (
      <>
        <h5>Standard alerts:</h5>
        <Alert type="info" heading="Informative status">
          Lorem ipsum dolor sit amet, <a href="#anchorsaway">link</a>
        </Alert>
        <Alert type="warning" heading="Warning status">
          This is the alert
        </Alert>
        <Alert type="success" heading="Success status">
          This is the alert
        </Alert>
        <Alert type="error" heading="Error status">
          This is the alert
        </Alert>
        <Alert type="emergency" heading="Emergency status">
          This is the alert
        </Alert>
      </>
    );
  },
};
