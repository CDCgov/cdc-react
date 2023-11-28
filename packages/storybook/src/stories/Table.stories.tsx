import "./assets/table.scss";

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
            <TableHeader className="table-header-checkbox">
              <input type="checkbox" />
            </TableHeader>
            <TableHeader className="table-header-filename">
              <>
                <Icons.SortArrow></Icons.SortArrow>
                <span>File Name</span>
              </>
            </TableHeader>
            <TableHeader className="table-header-event">
              <Icons.SortArrow></Icons.SortArrow>
              <span>Event</span>
            </TableHeader>
            <TableHeader className="table-header-upload-status">
              <Icons.SortArrow></Icons.SortArrow>
              <span>Upload Status</span>
            </TableHeader>
            <TableHeader className="table-header-submitted">
              <Icons.SortArrow></Icons.SortArrow>
              <span>Submitted</span>
            </TableHeader>
            <TableHeader className="table-header-details">
              <span className="details">Details</span>
            </TableHeader>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((info, index) => (
            <TableRow key={`table-row-${index}`}>
              <TableDataCell className="table-data-cell-checkbox">
                <input type="checkbox" checked={info.checked} />
              </TableDataCell>
              <TableDataCell className="table-data-cell-filename">
                {info.fileName}
              </TableDataCell>
              <TableDataCell className="table-data-cell-event">
                {info.event}
              </TableDataCell>
              <TableDataCell className="table-data-cell-upload-status">
                <Pill
                  label={info.uploadStatus.label}
                  shape="slot"
                  color={info.uploadStatus.color}
                  outline={false}
                  inverse={false}
                />
              </TableDataCell>
              <TableDataCell className="table-data-cell-submitted">
                {info.submitted.when}
              </TableDataCell>
              <TableDataCell className="table-data-cell-details">
                <Icons.Dots />
              </TableDataCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    );
  },
};
