import { Meta, StoryObj } from "@storybook/react";
import { Icons } from "@us-gov-cdc/cdc-react-icons";

const meta: Meta = {
  title: "Components/Icon",
  tags: ["autodocs"],
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
        <span className="icon-story">
          <Icons.Menu />
          <pre>Menu</pre>
        </span>
        <span className="icon-story">
          <Icons.Dots />
          <pre>Dots</pre>
        </span>
        <span className="icon-story">
          <Icons.Filter />
          <pre>Filter</pre>
        </span>
      </div>
      <div>
        <span className="icon-story">
          <Icons.ArrowLeft />
          <pre>ArrowLeft</pre>
        </span>
        <span className="icon-story">
          <Icons.ArrowRight />
          <pre>ArrowRight</pre>
        </span>
        <span className="icon-story">
          <Icons.ArrowUp />
          <pre>ArrowUp</pre>
        </span>
        <span className="icon-story">
          <Icons.ArrowDown />
          <pre>ArrowDown</pre>
        </span>
      </div>
      <div>
        <span className="icon-story">
          <Icons.ChevronDown />
          <pre>ChevronDown</pre>
        </span>
        <span className="icon-story">
          <Icons.ChevronLeft />
          <pre>ChevronLeft</pre>
        </span>
        <span className="icon-story">
          <Icons.ChevronRight />
          <pre>ChevronRight</pre>
        </span>
        <span className="icon-story">
          <Icons.ChevronUp />
          <pre>ChevronUp</pre>
        </span>
      </div>
      <div>
        <span className="icon-story">
          <Icons.ChevronDoubleLeft />
          <pre>ChevronDoubleLeft</pre>
        </span>
        <span className="icon-story">
          <Icons.ChevronDoubleRight />
          <pre>ChevronDoubleRight</pre>
        </span>
        <span className="icon-story">
          <Icons.ChevronDoubleUp />
          <pre>ChevronDoubleUp</pre>
        </span>
        <span className="icon-story">
          <Icons.ChevronDoubleDown />
          <pre>ChevronDoubleDown</pre>
        </span>
      </div>
      <div>
        <span className="icon-story">
          <Icons.Search />
          <pre>Search</pre>
        </span>
        <span className="icon-story">
          <Icons.Check />
          <pre>Check</pre>
        </span>
        <span className="icon-story">
          <Icons.Close />
          <pre>Close</pre>
        </span>
        <span className="icon-story">
          <Icons.Plus />
          <pre>Plus</pre>
        </span>
        <span className="icon-story">
          <Icons.Minus />
          <pre>Minus</pre>
        </span>
        <span className="icon-story">
          <Icons.CheckSquare />
          <pre>CheckSquare</pre>
        </span>
        <span className="icon-story">
          <Icons.CloseSquare />
          <pre>CloseSquare</pre>
        </span>
      </div>
      <div>
        <span className="icon-story">
          <Icons.SquareArrowUpRight />
          <pre>SquareArrowUpRight</pre>
        </span>
        <span className="icon-story">
          <Icons.SquareHalfArrowRight />
          <pre>SquareHalfArrowRight</pre>
        </span>
      </div>
      <div>
        <span className="icon-story">
          <Icons.Person />
          <pre>Person</pre>
        </span>
        <span className="icon-story">
          <Icons.Eye />
          <pre>Eye</pre>
        </span>
        <span className="icon-story">
          <Icons.Building />
          <pre>Building</pre>
        </span>
        <span className="icon-story">
          <Icons.Cube />
          <pre>Cube</pre>
        </span>
        <span className="icon-story">
          <Icons.Heart />
          <pre>Heart</pre>
        </span>
        <span className="icon-story">
          <Icons.Swatch />
          <pre>Swatch</pre>
        </span>
        <span className="icon-story">
          <Icons.Bolt />
          <pre>Bolt</pre>
        </span>
        <span className="icon-story">
          <Icons.Bell />
          <pre>Bell</pre>
        </span>
      </div>
      <div>
        <span className="icon-story">
          <Icons.Settings />
          <pre>Settings</pre>
        </span>
        <span className="icon-story">
          <Icons.Calendar />
          <pre>Calendar</pre>
        </span>
        <span className="icon-story">
          <Icons.Star />
          <pre>Star</pre>
        </span>
        <span className="icon-story">
          <Icons.Meter />
          <pre>Meter</pre>
        </span>
        <span className="icon-story">
          <Icons.Target />
          <pre>Target</pre>
        </span>
        <span className="icon-story">
          <Icons.Cloud />
          <pre>Cloud</pre>
        </span>
        <span className="icon-story">
          <Icons.CloudArrowDown />
          <pre>CloudArrowDown</pre>
        </span>
        <span className="icon-story">
          <Icons.CloudArrowUp />
          <pre>CloudArrowUp</pre>
        </span>
      </div>
      <div>
        <span className="icon-story">
          <Icons.TrafficCone />
          <pre>TrafficCone</pre>
        </span>
        <span className="icon-story">
          <Icons.HandPointArcs />
          <pre>HandPointArcs</pre>
        </span>
        <span className="icon-story">
          <Icons.House />
          <pre>House</pre>
        </span>
        <span className="icon-story">
          <Icons.Lock />
          <pre>Lock</pre>
        </span>
        <span className="icon-story">
          <Icons.LockShield />
          <pre>LockShield</pre>
        </span>
        <span className="icon-story">
          <Icons.SpeechBubble />
          <pre>SpeechBubble</pre>
        </span>
        <span className="icon-story">
          <Icons.Support />
          <pre>Support</pre>
        </span>
      </div>
      <div>
        <span className="icon-story">
          <Icons.Dashboard />
          <pre>Dashboard</pre>
        </span>
        <span className="icon-story">
          <Icons.PageLayout />
          <pre>PageLayout</pre>
        </span>
      </div>
      <div>
        <span className="icon-story">
          <Icons.Folder />
          <pre>Folder</pre>
        </span>
        <span className="icon-story">
          <Icons.PaperLines />
          <pre>PaperLines</pre>
        </span>
      </div>
      <div>
        <span className="icon-story">
          <Icons.ZigZag />
          <pre>ZigZag</pre>
        </span>
        <span className="icon-story">
          <Icons.BarGraph />
          <pre>BarGraph</pre>
        </span>
      </div>
      <div>
        <span className="icon-story">
          <Icons.PillCircle />
          <pre>PillCircle</pre>
        </span>
        <span className="icon-story">
          <Icons.PillDiamond />
          <pre>PillDiamond</pre>
        </span>
        <span className="icon-story">
          <Icons.PillSquare />
          <pre>PillSquare</pre>
        </span>
        <span className="icon-story">
          <Icons.PillTriangle />
          <pre>PillTriangle</pre>
        </span>
      </div>
      <div>
        <span className="icon-story">
          <Icons.SortArrow />
          <pre>SortArrow</pre>
        </span>
        <span className="icon-story">
          <Icons.SortArrowUp />
          <pre>SortArrowUp</pre>
        </span>
        <span className="icon-story">
          <Icons.SortArrowDown />
          <pre>SortArrowDown</pre>
        </span>
      </div>
    </div>
  ),
};
