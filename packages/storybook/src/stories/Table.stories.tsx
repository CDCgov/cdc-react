import type { Meta, StoryObj } from "@storybook/react";

import {
  TableProps,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableHeader,
  TableDataCell,
  Pill,
} from "@us-gov-cdc/cdc-react";

import { Icons } from "@us-gov-cdc/cdc-react-icons";

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
    checked: false,
    fileName: "Test File Name " + (item + 1),
    event: "Test Event Name " + (item + 1),
    uploadStatus: {
      color: "busy",
      label: "Uploading",
    },
    submitted: {
      when: "Just Now",
      timestamp: "3:45pm 11/17/2023",
    },
    details: "detailed info",
  };
});

export default meta;
type Story = StoryObj<typeof Table>;

export const Example: Story = {
  render: (args: TableProps) => {
    return (
      <Table>
        <TableHead>
          <TableRow>
            <TableHeader className="width-05 flex-justify-center">
              <input type="checkbox" />
            </TableHeader>
            <TableHeader className="width-15">
              <>
                <Icons.SortArrow></Icons.SortArrow>
                <span className="text-bold text-left">File Name</span>
              </>
            </TableHeader>
            <TableHeader className="width-15">
              <Icons.SortArrow></Icons.SortArrow>
              <span className="text-bold text-left">Event</span>
            </TableHeader>
            <TableHeader className="width-15">
              <Icons.SortArrow></Icons.SortArrow>
              <span className="text-bold text-left">Upload Status</span>
            </TableHeader>
            <TableHeader className="width-10">
              <Icons.SortArrow></Icons.SortArrow>
              <span className="text-bold text-left">Submitted</span>
            </TableHeader>
            <TableHeader className="width-8">
              <span className="text-bold text-center">Details</span>
            </TableHeader>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((info, index) => (
            <TableRow key={`table-row-${index}`}>
              <TableDataCell className="width-05 flex-justify-center">
                <input type="checkbox" />
              </TableDataCell>
              <TableDataCell className="width-15 text-left padding-left-105">
                {info.fileName}
              </TableDataCell>
              <TableDataCell className="width-15 text-left padding-left-105">
                {info.event}
              </TableDataCell>
              <TableDataCell className="width-15 padding-left-1 padding-right-1">
                <Pill
                  label={info.uploadStatus.label}
                  shape="slot"
                  color={info.uploadStatus.color}
                  outline={false}
                  inverse={false}
                />
              </TableDataCell>
              <TableDataCell className="width-10 flex-justify-center">
                {info.submitted.when}
              </TableDataCell>
              <TableDataCell className="width-8">
                <Icons.Dots />
              </TableDataCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    );
  },
};
