import { Meta, StoryObj } from "@storybook/react";
import { Icons } from "@us-gov-cdc/cdc-react-icons";

const meta: Meta = {
  title: "Components/Icon",
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

export const all: StoryObj = {
  render: () => (
    <div>
      <div>
        <Icons.Menu />
        <Icons.Dots />
        <Icons.Filter />
      </div>
      <div>
        <Icons.ArrowLeft />
        <Icons.ArrowRight />
        <Icons.ArrowUp />
        <Icons.ArrowDown />
      </div>
      <div>
        <Icons.ChevronDown />
        <Icons.ChevronUp />
      </div>
      <div>
        <Icons.ChevronDoubleLeft />
        <Icons.ChevronDoubleRight />
      </div>
      <div>
        <Icons.Search />
        <Icons.Check />
        <Icons.Close />
        <Icons.Plus />
        <Icons.Minus />
        <Icons.CheckSquare />
        <Icons.CloseSquare />
      </div>
      <div>
        <Icons.SquareArrowUpRight />
        <Icons.Logout />
      </div>
      <div>
        <Icons.User />
        <Icons.Eye />
        <Icons.Building />
        <Icons.Cube />
        <Icons.Heart />
        <Icons.Swatch />
        <Icons.Bolt />
        <Icons.Notifications />
      </div>
      <div>
        <Icons.Dashboard />
      </div>
      <div>
        <Icons.Settings />
        <Icons.Quality />
      </div>
      <div>
        <Icons.Support />
      </div>
      <div>
        <Icons.Process />
      </div>
    </div>
  ),
};
