import "./Table.scss";

import { ColorVariationTypes, TableModel } from "../../@types";

import React from "react";

import {
  useReactTable,
  Table as ReactTable,
  getCoreRowModel,
  getPaginationRowModel,
  getFilteredRowModel,
  ColumnDef,
  flexRender,
  createColumnHelper,
} from "@tanstack/react-table";

import { Pill } from "..";
import { Icons } from "@us-gov-cdc/cdc-react-icons";

export interface TableProps {
  detailSelect: (data: TableModel[]) => void;
  data: TableModel[];
  columns: ColumnDef<TableModel>[];
}

export interface submittedType {
  when: string;
  timestamp: string;
}

export const Table = ({
  data,
  detailSelect,
}: TableProps & JSX.IntrinsicElements["table"]) => {
  const columnHelper = createColumnHelper<TableModel>();

  const toggle: React.ChangeEventHandler<HTMLInputElement> | undefined = (
    event: React.ChangeEvent
  ) => {
    console.log(event);
  };

  const columns = React.useMemo<ColumnDef<TableModel>[]>(
    () => [
      {
        accessorKey: "index",
        header: () => <input type="checkbox" />,
        cell: () => <input type="checkbox" />,
        footer: (props) => props.column.id,
      },
      {
        accessorKey: "fileName",
        header: () => (
          <>
            <Icons.SortArrow></Icons.SortArrow>
            File Name
          </>
        ),
        footer: (props) => props.column.id,
      },
      {
        accessorKey: "event",
        header: () => (
          <>
            <Icons.SortArrow></Icons.SortArrow>
            Event
          </>
        ),
        footer: (props) => props.column.id,
      },
      {
        accessorKey: "uploadStatus",
        header: () => (
          <>
            <Icons.SortArrow></Icons.SortArrow>
            Upload Status
          </>
        ),
        cell: (info) => {
          const status = info.getValue();

          return (
            <>
              <Pill
                label={status.label}
                shape="slot"
                color={status.color}
                outline={false}
                inverse={false}
              />
            </>
          );
        },
        footer: (props) => props.column.id,
      },
      {
        accessorKey: "submitted",
        header: () => (
          <>
            <Icons.SortArrow></Icons.SortArrow>
            Submitted
          </>
        ),
        cell: (info) => {
          const cell = info.getValue();

          return (
            <>
              {cell.when}
              {cell.timestamp}
            </>
          );
        },
        footer: (props) => props.column.id,
      },
      {
        accessorKey: "details",
        header: () => (
          <>
            <Icons.SortArrow></Icons.SortArrow>
            Details
          </>
        ),
        footer: (props) => props.column.id,
      },
    ],
    []
  );

  const [defaultData, setData] = React.useState(() => [...data]);

  const table = useReactTable({
    data: defaultData,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
  });

  return (
    <div className="cdc-react">
      <table className="table">
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => {
                return (
                  <th key={header.id} colSpan={header.colSpan}>
                    {header.isPlaceholder ? null : (
                      <div>
                        {flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                      </div>
                    )}
                  </th>
                );
              })}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row) => {
            return (
              <tr key={row.id}>
                {row.getVisibleCells().map((cell) => {
                  return (
                    <td key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
      <div className="pagination">
        <button
          className="previousState"
          onClick={() => table.setPageIndex(0)}
          disabled={!table.getCanPreviousPage()}>
          {"<<"}
        </button>
        <button
          className="previous"
          onClick={() => table.previousPage()}
          disabled={!table.getCanPreviousPage()}>
          {"<"}
        </button>
        <button
          className="next"
          onClick={() => table.nextPage()}
          disabled={!table.getCanNextPage()}>
          {">"}
        </button>
        <button
          className="nextEnd"
          onClick={() => table.setPageIndex(table.getPageCount() - 1)}
          disabled={!table.getCanNextPage()}>
          {">>"}
        </button>
        <span className="page">
          <div>Page</div>
          <strong>
            {table.getState().pagination.pageIndex + 1} of{" "}
            {table.getPageCount()}
          </strong>
        </span>
        <span className="pageByInput">
          | Go to page:
          <input
            type="number"
            defaultValue={table.getState().pagination.pageIndex + 1}
            onChange={(e) => {
              const page = e.target.value ? Number(e.target.value) - 1 : 0;
              table.setPageIndex(page);
            }}
          />
        </span>
        <select
          className="pageSize"
          value={table.getState().pagination.pageSize}
          onChange={(e) => {
            table.setPageSize(Number(e.target.value));
          }}>
          {[10, 20, 30, 40, 50].map((pageSize) => (
            <option key={pageSize} value={pageSize}>
              Show {pageSize}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};
