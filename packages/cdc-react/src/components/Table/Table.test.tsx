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
                <input type="checkbox" />
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

    expect(screen.getByText("Test File Name 1")).toBeInTheDocument();
    expect(screen.getByText("Test Event Name 1")).toBeInTheDocument();
  });
});
