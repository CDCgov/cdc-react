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
  TablePagination,
  Checkbox,
} from "@us-gov-cdc/cdc-react";

import { Icons } from "@us-gov-cdc/cdc-react-icons";
import { useState } from "react";

const meta: Meta<typeof Table> = {
  title: "Components/Table",
  tags: ["autodocs"],
  component: Table,
};

const mockIndexes = [];

for (let index = 0; index < 95; index++) {
  mockIndexes.push(index);
}

type UploadStatusType = {
  color: string;
  label: string;
};

type ISubmissionType = {
  when: string;
  timestamp: string;
};

interface IData {
  id: string;
  checked: boolean;
  fileName: string;
  event: string;
  uploadStatus: UploadStatusType;
  submitted: ISubmissionType;
  details: string;
}

const data = mockIndexes.map((item: number) => {
  const transformedData: IData = {
    id: item + "-id",
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

  return transformedData;
});

export default meta;
type Story = StoryObj<typeof Table>;

export const Example: Story = {
  render: (args: TableProps) => {
    const [pageData, setPageData] = useState<IData[]>([]);
    const [transformedData, setData] = useState<IData[]>(data);

    const allChecked = transformedData
      .map((e: IData) => e?.checked)
      .every(Boolean);
    const isIndeterminate =
      transformedData.map((e: IData) => e?.checked).some(Boolean) &&
      !allChecked;

    return (
      <>
        <Table>
          <TableHead>
            <TableRow>
              <TableHeader size="md">
                <Checkbox
                  label="Select all"
                  isChecked={allChecked}
                  indeterminate={isIndeterminate}
                  onChange={(e: { target: { checked: boolean } }) => {
                    const data: IData[] = [];

                    for (
                      let index = 0;
                      index < transformedData.length;
                      index++
                    ) {
                      let item = transformedData[index];

                      item.checked = !allChecked;

                      data.push(item);
                    }

                    setData(data);
                  }}></Checkbox>
              </TableHeader>
              <TableHeader>
                <>
                  <Icons.SortArrow className="sort-icon"></Icons.SortArrow>
                  <span className="text-left">File Name</span>
                </>
              </TableHeader>
              <TableHeader>
                <Icons.SortArrow className="sort-icon"></Icons.SortArrow>
                <span className="text-left">Event</span>
              </TableHeader>
              <TableHeader>
                <Icons.SortArrow className="sort-icon"></Icons.SortArrow>
                <span className="text-left">Upload Status</span>
              </TableHeader>
              <TableHeader size="md">
                <Icons.SortArrow className="sort-icon"></Icons.SortArrow>
                <span className="text-left">Submitted</span>
              </TableHeader>
              <TableHeader size="sm">
                <span className="text-center">Details</span>
              </TableHeader>
            </TableRow>
          </TableHead>
          <TableBody>
            {pageData.map((info, index) => (
              <TableRow key={`table-row-${index}`}>
                <TableDataCell size="md" className="flex-justify-center">
                  <Checkbox
                    isChecked={info.checked}
                    onChange={(e: { target: { checked: boolean } }) => {
                      const arr: IData[] = [];

                      for (let i = 0; i < transformedData.length; i++) {
                        let element = transformedData[i];
                        if (element.id === info.id) {
                          element.checked = !element.checked;
                        }
                        arr.push(element);
                      }

                      setData(arr);
                    }}></Checkbox>
                </TableDataCell>
                <TableDataCell className="text-left">
                  {info.fileName}
                </TableDataCell>
                <TableDataCell className="text-left">
                  {info.event}
                </TableDataCell>
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
        <TablePagination
          pageLimit={10}
          data={transformedData}
          setPageData={setPageData}
        />
      </>
    );
  },
};
