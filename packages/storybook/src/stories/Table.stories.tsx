import { StoryObj } from "@storybook/react";
import { Table, getColumnHelper } from "@us-gov-cdc/cdc-react";

const meta: Meta<typeof Table> = {
  title: "Components/Table",
  tags: ["autodocs"],
  component: Table,
};

export default meta;

type Story = StoryObj<typeof Table>;

type Car = {
  make: string;
  model: string;
  year: number;
};
const data: Car[] = [
  {
    make: "Ford",
    model: "F-150",
    year: 2023,
  },
];

const columnHelper = getColumnHelper<Car>();
const columns = [
  columnHelper.accessor("make", {
    cell: (info) => info.getValue(),
  }),
];

export const Example: Story = {
  args: {
    data,
    columnDefs: columns,
  },
};
