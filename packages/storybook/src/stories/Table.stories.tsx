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
    fileName: "Test file Name " + (item + 1),
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

export const table: Story = {
  render: (args: TableProps) => {
    return (
      <Table>
        <TableHead>
          <TableRow>
            <TableHeader>
              <input type="checkbox" />
            </TableHeader>
            <TableHeader>
              <>
                <Icons.SortArrow></Icons.SortArrow>
                <span>File Name</span>
              </>
            </TableHeader>
            <TableHeader>
              <Icons.SortArrow></Icons.SortArrow>
              <span>Event</span>
            </TableHeader>
            <TableHeader>
              <Icons.SortArrow></Icons.SortArrow>
              <span>Upload Status</span>
            </TableHeader>
            <TableHeader>
              <Icons.SortArrow></Icons.SortArrow>
              <span>Submitted</span>
            </TableHeader>
            <TableHeader>
              <span className="details">Details</span>
            </TableHeader>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((info) => (
            <TableRow>
              <TableDataCell>
                <input type="checkbox" checked={info.checked} />
              </TableDataCell>
              <TableDataCell>{info.fileName}</TableDataCell>
              <TableDataCell>{info.event}</TableDataCell>
              <TableDataCell>
                <Pill
                  label={info.uploadStatus.label}
                  shape="slot"
                  color={info.uploadStatus.color}
                  outline={false}
                  inverse={false}
                />
              </TableDataCell>
              <TableDataCell>{info.submitted.when}</TableDataCell>
              <TableDataCell>
                <Icons.Dots />
              </TableDataCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    );
  },
};
