import { render, screen } from "@testing-library/react";

import {
  Table,
  TableHead,
  TableRow,
  TableHeader,
  TableBody,
  TableDataCell,
  Pill,
} from "../";

import { Icons } from "@us-gov-cdc/cdc-react-icons";

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

describe("Table component", () => {
  it("should render a table with data", () => {
    render(
      <Table>
        <TableHead>
          <TableRow>
            <TableHeader size="sm" className="flex-justify-center">
              <input type="checkbox" />
            </TableHeader>
            <TableHeader>
              <>
                <Icons.SortArrow></Icons.SortArrow>
                <span className="text-left">File Name</span>
              </>
            </TableHeader>
            <TableHeader>
              <Icons.SortArrow></Icons.SortArrow>
              <span className="text-left">Event</span>
            </TableHeader>
            <TableHeader>
              <Icons.SortArrow></Icons.SortArrow>
              <span className="text-left">Upload Status</span>
            </TableHeader>
            <TableHeader size="md">
              <Icons.SortArrow></Icons.SortArrow>
              <span className="text-left">Submitted</span>
            </TableHeader>
            <TableHeader size="sm">
              <span className="text-center">Details</span>
            </TableHeader>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((info, index) => (
            <TableRow key={`table-row-${index}`}>
              <TableDataCell size="sm" className="flex-justify-center">
                <input type="checkbox" />
              </TableDataCell>
              <TableDataCell className="text-left">
                {info.fileName}
              </TableDataCell>
              <TableDataCell className="text-left">{info.event}</TableDataCell>
              <TableDataCell>
                <Pill
                  label={info.uploadStatus.label}
                  shape="slot"
                  color={info.uploadStatus.color}
                  outline={false}
                  inverse={false}
                />
              </TableDataCell>
              <TableDataCell size="md" className="flex-justify-center">
                {info.submitted.when}
              </TableDataCell>
              <TableDataCell size="sm">
                <Icons.Dots />
              </TableDataCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    );

    expect(screen.getByText("Test File Name 1")).toBeInTheDocument();
    expect(screen.getByText("Test Event Name 1")).toBeInTheDocument();
  });
});
