import type { Meta, StoryObj } from "@storybook/react";

import {
  ButtonPrimaryColorTypes,
  ButtonTertiaryColorTypes,
  Button,
  ButtonPrimaryColors,
  ButtonTertiaryColors,
} from "@us-gov-cdc/cdc-react";
import { Icons } from "@us-gov-cdc/cdc-react-icons";

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  tags: ["autodocs"],
  component: Button,
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
type Story = StoryObj<typeof Button>;

export const buttonSizes: Story = {
  args: {
    size: "default",
    ariaLabel: "Default Button",
  },
  render: (args) => {
    const { ariaLabel, size } = args;

    return (
      <>
        <h5>Default Button:</h5>
        <Button ariaLabel={ariaLabel} size={size}>
          <span>Default</span>
        </Button>
        <h5>Tiny Button:</h5>
        <Button ariaLabel="Tiny Button" size="tiny">
          <span>Tiny</span>
        </Button>
        <h5>Big Button:</h5>
        <Button ariaLabel="Big Button" size="big">
          <span>Big</span>
        </Button>
      </>
    );
  },
};

export const buttonVariations: Story = {
  render: (args) => {
    return (
      <>
        <h5>Default Button:</h5>
        <Button ariaLabel="Default Button">
          <span>Button</span>
        </Button>
        <h5>Outline Button:</h5>
        <Button ariaLabel="Outline Button" variation="outline">
          <span>Button</span>
        </Button>
        <h5>Text Button:</h5>
        <Button ariaLabel="Text Button" variation="text">
          <span>Button</span>
        </Button>
        <h5>Unstyled Button:</h5>
        <Button ariaLabel="Unstyled Button" variation="unstyled">
          <span>Button</span>
        </Button>
      </>
    );
  },
};

export const iconButtons: Story = {
  args: {
    size: "default",
    ariaLabel: "Icon Button",
  },
  render: (args) => {
    const { ariaLabel, size } = args;

    return (
      <>
        <h5>Icon Only Button:</h5>
        <Button
          ariaLabel={ariaLabel}
          size={size}
          iconOnly={true}
          icon={<Icons.Person />}></Button>
        <h5>Icon Left Button:</h5>
        <Button
          ariaLabel={ariaLabel}
          size={size}
          icon={<Icons.Star />}
          iconPosition="left">
          <span>Quality</span>
        </Button>
        <h5>Icon Right Button:</h5>
        <Button
          ariaLabel={ariaLabel}
          size={size}
          icon={<Icons.ZigZag />}
          iconPosition="right">
          <span>Process</span>
        </Button>
        <h5>Icon Both Sides Button:</h5>
        <Button
          ariaLabel={ariaLabel}
          size={size}
          icon={<Icons.Menu />}
          iconPosition="both">
          <span>Menu</span>
        </Button>
      </>
    );
  },
};

export const disabledButtons: Story = {
  args: {
    size: "default",
    ariaLabel: "Disabled Button",
    state: "disabled",
  },
  render: (args) => {
    const { ariaLabel, size, state } = args;

    return (
      <>
        <h5>Default Disabled Button:</h5>
        <Button ariaLabel={ariaLabel} size={size} state={state}>
          <span>Disabled</span>
        </Button>
        <h5>Outline Disabled Button:</h5>
        <Button
          ariaLabel={ariaLabel}
          size={size}
          state={state}
          variation="outline">
          <span>Disabled</span>
        </Button>
        <h5>Text Disabled Button:</h5>
        <Button
          ariaLabel={ariaLabel}
          size={size}
          state={state}
          variation="text">
          <span>Disabled</span>
        </Button>
        <h5>Unstyled Disabled Button:</h5>
        <Button
          ariaLabel={ariaLabel}
          size={size}
          state={state}
          variation="unstyled">
          <span>Disabled</span>
        </Button>
      </>
    );
  },
};

export const inverseButtons: Story = {
  args: {
    size: "default",
    ariaLabel: "Inverse Button",
  },
  parameters: {
    backgrounds: {
      default: "inverse",
    },
  },
  render: (args) => {
    const { ariaLabel, size } = args;

    return (
      <>
        <h5 style={{ color: "#fff" }}>Default Inverse Button:</h5>
        <Button ariaLabel={ariaLabel} size={size} inverse={true}>
          <span>Inverse</span>
        </Button>
        <h5 style={{ color: "#fff" }}>Outline Inverse Button:</h5>
        <Button
          ariaLabel={ariaLabel}
          size={size}
          inverse={true}
          variation="outline">
          <span>Inverse</span>
        </Button>
        <h5 style={{ color: "#fff" }}>Text Inverse Button:</h5>
        <Button
          ariaLabel={ariaLabel}
          size={size}
          inverse={true}
          variation="text">
          <span>Inverse</span>
        </Button>
        <h5 style={{ color: "#fff" }}>Unstyled Inverse Button:</h5>
        <Button
          ariaLabel={ariaLabel}
          size={size}
          inverse={true}
          variation="unstyled">
          <span>Inverse</span>
        </Button>
      </>
    );
  },
};

export const inverseDisabledButtons: Story = {
  args: {
    size: "default",
    ariaLabel: "Inverse Disabled Button",
    state: "disabled",
  },
  parameters: {
    backgrounds: {
      default: "inverse",
    },
  },
  render: (args) => {
    const { ariaLabel, size, state } = args;

    return (
      <>
        <h5 style={{ color: "#fff" }}>Default Disabled Inverse Button:</h5>
        <Button ariaLabel={ariaLabel} size={size} inverse={true} state={state}>
          <span>Inverse</span>
        </Button>
        <h5 style={{ color: "#fff" }}>Outline Disabled Inverse Button:</h5>
        <Button
          ariaLabel={ariaLabel}
          size={size}
          inverse={true}
          variation="outline"
          state={state}>
          <span>Inverse</span>
        </Button>
        <h5 style={{ color: "#fff" }}>Text Disabled Inverse Button:</h5>
        <Button
          ariaLabel={ariaLabel}
          size={size}
          inverse={true}
          variation="text"
          state={state}>
          <span>Inverse</span>
        </Button>
        <h5 style={{ color: "#fff" }}>Unstyled Disabled Inverse Button:</h5>
        <Button
          ariaLabel={ariaLabel}
          size={size}
          inverse={true}
          variation="unstyled"
          state={state}>
          <span>Inverse</span>
        </Button>
      </>
    );
  },
};

export const buttonsPrimaryColorPalette: Story = {
  render: (args) => {
    return (
      <>
        {ButtonPrimaryColors.map((color: ButtonPrimaryColorTypes) => (
          <>
            <h5>
              {color.slice(0, 1).toUpperCase() + color.slice(1, color.length)}
            </h5>
            <Button
              ariaLabel="Default Button"
              color={color}
              variation={args.variation}>
              <span>Button</span>
            </Button>
          </>
        ))}
      </>
    );
  },
};
export const buttonsTertiaryColorPalette: Story = {
  args: {
    theme: "tertiary",
  },
  parameters: {
    backgrounds: {
      default: "inverse",
    },
  },
  render: (args) => {
    return (
      <>
        {ButtonTertiaryColors.map((color: ButtonTertiaryColorTypes) => (
          <>
            <h5 style={{ color: "#fff" }}>
              {color.slice(0, 1).toUpperCase() + color.slice(1, color.length)}
            </h5>
            <Button
              ariaLabel="Default Button"
              color={color}
              variation={args.variation}
              theme={args.theme}>
              <span>Button</span>
            </Button>
          </>
        ))}
      </>
    );
  },
};
