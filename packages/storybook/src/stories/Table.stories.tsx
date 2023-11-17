import type { Meta, StoryObj } from "@storybook/react";

import { TableProps, Table, TableModel } from "@us-gov-cdc/cdc-react";

const meta: Meta<typeof Table> = {
  title: "Components/Table",
  tags: ["autodocs"],
  component: Table,
};

const mockIndexes = [];

for (let index = 0; index < 100; index++) {
  mockIndexes.push(index);
}

const data = mockIndexes.map((item: number) => {
  return {
    index: item,
    fileName: "Test file Name " + (item + 1),
    event: "Test Event Name",
    uploadStatus: "",
    submitted: {
      when: "Just Now",
      timestamp: "3:45pm 11/17/2023",
    },
    details: "",
  };
});

export default meta;
type Story = StoryObj<typeof Table>;

export const table: Story = {
  args: {
    data: data,
  },
  render: (args: TableProps) => {
    const { data } = args;

    return (
      <Table
        data={data}
        pageSize={10}
        pageIndex={0}
        detailSelect={(data: TableModel[]) => {
          console.log(data);
        }}></Table>
    );
  },
};
