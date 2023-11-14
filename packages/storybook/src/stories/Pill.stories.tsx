import type { Meta, StoryObj } from "@storybook/react";
import { useArgs } from "@storybook/preview-api";
import {
  Button,
  Pill,
  pillShapes,
  pillVariations,
} from "@us-gov-cdc/cdc-react";
import { FormEvent, useState, useRef } from "react";

const meta: Meta<typeof Pill> = {
  title: "Components/Pill",
  tags: ["autodocs"],
  component: Pill,
  argTypes: {
    shape: {
      control: { type: "radio" },
      options: [...pillShapes],
    },
    variation: {
      control: { type: "radio" },
      options: [...pillVariations],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Pill>;

export const example: Story = {
  args: {
    label: "This is a pill",
    shape: "slot",
    variation: "default",
  },
};

export const togglable: Story = {
  args: {
    label: "Click Me!",
    shape: "slot",
    variation: "toggle",
    onClick: () => {},
  },
};

export const input: Story = {
  args: {
    shape: "slot",
    variation: "input",
  },
  render: function Render(args) {
    const [{ shape }] = useArgs();
    const [items, setItems] = useState(["apple", "orange"]);
    const inputRef = useRef<HTMLInputElement | null>(null);

    function addItem(event: FormEvent<HTMLFormElement>) {
      event.preventDefault();
      const target = event.target as typeof event.target & {
        item: { value: string };
      };
      setItems([...items, target.item.value]);

      if (inputRef.current) {
        inputRef.current.value = "";
      }
    }

    function removeItem(index: number) {
      items.splice(index, 1);
      setItems([...items]);
    }

    return (
      <>
        <form onSubmit={addItem} style={{ display: "flex" }}>
          <input
            ref={inputRef}
            type="text"
            name="item"
            style={{ marginRight: "8px" }}
          />
          <Button ariaLabel="Submit" type="submit">
            Submit
          </Button>
        </form>
        <div style={{ paddingTop: "4px" }}>
          {items.map((item, index) => (
            <span key={`${item}-${index}`} style={{ paddingRight: "4px" }}>
              <Pill
                label={item}
                shape={shape}
                variation="input"
                onClose={() => removeItem(index)}
              />
            </span>
          ))}
        </div>
      </>
    );
  },
};
