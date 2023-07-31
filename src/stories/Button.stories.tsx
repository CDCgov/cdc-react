import type { Meta, StoryObj } from "@storybook/react";

import { Button } from "../components";

const meta = {
  title: "Components/Button",
  component: Button,
} satisfies Meta<typeof Button>;

export default meta;

export const defaultButton = (): React.ReactElement => (
  <Button>Click Me</Button>
);
