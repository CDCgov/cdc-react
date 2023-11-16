import type { Meta, StoryObj } from "@storybook/react";
import { useArgs } from "@storybook/preview-api";
import {
  Button,
  Pill,
  pillShapes,
  pillVariations,
} from "@us-gov-cdc/cdc-react";
import { FormEvent, useState, useRef } from "react";
import { Icons } from "@us-gov-cdc/cdc-react-icons";

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
    outline: false,
  },
};

export const togglable: Story = {
  args: {
    label: "Click Me!",
    shape: "slot",
    variation: "toggle",
    onToggle: () => {},
  },
};

export const input: Story = {
  args: {
    shape: "slot",
    variation: "input",
    outline: true,
  },
  render: function Render(args) {
    const [{ shape, outline }] = useArgs();
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
                outline={outline}
                onDelete={() => removeItem(index)}
              />
            </span>
          ))}
        </div>
      </>
    );
  },
};

export const infoIcon: Story = {
  args: {
    label: "Anonymous User 1234",
    shape: "slot",
    icon: <Icons.Person />,
    variation: "info",
    outline: false,
  },
};

export const infoImage: Story = {
  args: {
    label: "CDC Scientist 1234",
    shape: "slot",
    variation: "info",
    outline: false,
    avatar:
      "https://cdn.pixabay.com/photo/2020/05/25/03/37/doctor-5216835_1280.png",
  },
};