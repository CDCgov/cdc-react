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
    slim: undefined,
    noIcon: undefined,
    children: (
      <>
        Lorem ipsum dolor sit amet,{" "}
        <a href="#anchor">consectetur adipiscing elit</a>, sed do eiusmod.
      </>
    ),
  },
};

export const defaultOptions: Story = {
  render: () => {
    return (
      <>
        <Alert type="info" heading="Informative status">
          Lorem ipsum dolor sit amet,{" "}
          <a href="#anchor">consectetur adipiscing elit</a>, sed do eiusmod.
        </Alert>
        <br />
        <Alert type="warning" heading="Warning status">
          Lorem ipsum dolor sit amet,{" "}
          <a href="#anchor">consectetur adipiscing elit</a>, sed do eiusmod.
        </Alert>
        <br />
        <Alert type="success" heading="Success status">
          Lorem ipsum dolor sit amet,{" "}
          <a href="#anchor">consectetur adipiscing elit</a>, sed do eiusmod.
        </Alert>
        <br />
        <Alert type="error" heading="Error status">
          Lorem ipsum dolor sit amet,{" "}
          <a href="#anchor">consectetur adipiscing elit</a>, sed do eiusmod.
        </Alert>
        <br />
        <Alert type="emergency" heading="Emergency status">
          Lorem ipsum dolor sit amet,{" "}
          <a href="#anchor">consectetur adipiscing elit</a>, sed do eiusmod.
        </Alert>
      </>
    );
  },
};

export const slimAlerts: Story = {
  render: () => {
    return (
      <>
        <Alert type="info" slim>
          Lorem ipsum dolor sit amet,{" "}
          <a href="#anchor">consectetur adipiscing elit</a>, sed do eiusmod.
        </Alert>
        <br />
        <Alert type="warning" slim>
          Lorem ipsum dolor sit amet,{" "}
          <a href="#anchor">consectetur adipiscing elit</a>, sed do eiusmod.
        </Alert>
        <br />
        <Alert type="success" slim>
          Lorem ipsum dolor sit amet,{" "}
          <a href="#anchor">consectetur adipiscing elit</a>, sed do eiusmod.
        </Alert>
        <br />
        <Alert type="error" slim>
          Lorem ipsum dolor sit amet,{" "}
          <a href="#anchor">consectetur adipiscing elit</a>, sed do eiusmod.
        </Alert>
        <br />
        <Alert type="emergency" slim>
          Lorem ipsum dolor sit amet,{" "}
          <a href="#anchor">consectetur adipiscing elit</a>, sed do eiusmod.
        </Alert>
      </>
    );
  },
};

export const noIcons: Story = {
  render: () => {
    return (
      <>
        <Alert type="info" noIcon>
          Lorem ipsum dolor sit amet,{" "}
          <a href="#anchor">consectetur adipiscing elit</a>, sed do eiusmod.
        </Alert>
        <br />
        <Alert type="warning" noIcon>
          Lorem ipsum dolor sit amet,{" "}
          <a href="#anchor">consectetur adipiscing elit</a>, sed do eiusmod.
        </Alert>
        <br />
        <Alert type="success" noIcon>
          Lorem ipsum dolor sit amet,{" "}
          <a href="#anchor">consectetur adipiscing elit</a>, sed do eiusmod.
        </Alert>
        <br />
        <Alert type="error" noIcon>
          Lorem ipsum dolor sit amet,{" "}
          <a href="#anchor">consectetur adipiscing elit</a>, sed do eiusmod.
        </Alert>
        <br />
        <Alert type="emergency" noIcon>
          Lorem ipsum dolor sit amet,{" "}
          <a href="#anchor">consectetur adipiscing elit</a>, sed do eiusmod.
        </Alert>
      </>
    );
  },
};

export const otherExamples: Story = {
  render: () => {
    return (
      <>
        <Alert type="info" heading="Status header">
          This is a succinct, helpful message.
          <ul>
            <li>This is validation text</li>
            <li>This is validation text</li>
            <li>This is validation text</li>
            <li>This is validation text</li>
          </ul>
          <button>Primary Action</button>
          <button>Secondary Action</button>
        </Alert>
      </>
    );
  },
};
