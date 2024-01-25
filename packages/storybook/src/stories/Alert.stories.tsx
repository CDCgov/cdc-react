import type { Meta, StoryObj } from "@storybook/react";

import { Alert } from "@us-gov-cdc/cdc-react";

const meta: Meta<typeof Alert> = {
  title: "Components/Alert",
  tags: ["autodocs"],
  component: Alert,
  parameters: {
    backgrounds: {
      default: "default",
      values: [
        {
          name: "default",
          value: "#fff",
        },
        {
          name: "inverse",
          value: "#333333",
        },
      ],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Alert>;

export const basicAlerts: Story = {
  render: () => {
    return (
      <>
        <h5>Info Alert:</h5>
        <Alert type="info" heading="Informative Status">
          <p>
            THIS IS THE BODY with a <a href="#anchorsaway">link</a>
          </p>
        </Alert>
        <h5>Warning Alert:</h5>
        <Alert type="warning" heading="Warning Status">
          This is the alert
        </Alert>
        <h5>Success Alert:</h5>
        <Alert type="success" heading="Success Status">
          This is the alert
        </Alert>
        <h5>Error Alert:</h5>
        <Alert type="error" heading="Error Status">
          This is the alert
        </Alert>
        <h5>Emergency Alert:</h5>
        <Alert type="emergency" heading="Emergency Status">
          This is the alert
        </Alert>
      </>
    );
  },
};
