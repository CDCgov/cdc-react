import type { Meta, StoryObj } from "@storybook/react";
import {
  Accordion,
  AccordionItem,
  AccordionItemProps,
} from "@us-gov-cdc/cdc-react";

const meta: Meta<typeof Accordion> = {
  title: "Components/Accordion",
  tags: ["autodocs"],
  component: Accordion,
};

export default meta;

type Story = StoryObj<typeof Accordion>;

const items: AccordionItemProps = [
  {
    id: "1",
    expanded: false,
    title: "First Amendment",
    content:
      "Congress shall make no law respecting an establishment of religion, or prohibiting the free exercise thereof; or abridging the freedom of speech, or of the press; or the right of the people peaceably to assemble, and to petition the Government for a redress of grievances.",
  },
  {
    id: "2",
    expanded: false,
    title: "Second Amendment",
    content:
      "A well regulated Militia, being necessary to the security of a free State, the right of the people to keep and bear Arms, shall not be infringed.",
  },
  {
    id: "3",
    expanded: false,
    title: "Third Amendment",
    content:
      "No Soldier shall, in time of peace be quartered in any house, without the consent of the Owner, nor in time of war, but in a manner to be prescribed by law.",
  },
];

export const Example: Story = {
  args: {
    bordered: false,
    items: items,
    multiselectable: false,
  },
};

export const bordered: Story = {
  args: {
    items: items,
    bordered: true,
    multiselectable: false,
  },
};

export const multiselectable: Story = {
  args: {
    items: items,
    bordered: false,
    multiselectable: true,
  },
};

export const singleItem: Story = {
  args: {
    items: items.slice(0, 1),
    bordered: false,
    multiselectable: false,
  },
};
