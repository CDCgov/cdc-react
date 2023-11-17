import "./Table.scss";

import { TableModel } from "../../@types";

import React from "react";

import {
  PaginationState,
  useReactTable,
  getCoreRowModel,
  createColumnHelper,
  flexRender,
} from "@tanstack/react-table";

export interface TableProps {
  pageSize: number;
  pageIndex: number;
  detailSelect: (data: TableModel[]) => void;
  data: TableModel[];
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

  const columns = [
    columnHelper.accessor("index", {
      header: () => <span></span>,
      cell: (info) => (
        <input type="checkbox" onChange={toggle} value={info.getValue()} />
      ),
      footer: (info) => info.column.id,
    }),
    columnHelper.accessor((row) => row.fileName, {
      id: "fileName",
      cell: (info) => <i>{info.getValue()}</i>,
      header: () => <span>File Name</span>,
      footer: (info) => info.column.id,
    }),
    columnHelper.accessor("event", {
      header: () => "Event",
      cell: (info) => info.renderValue(),
      footer: (info) => info.column.id,
    }),
    columnHelper.accessor("uploadStatus", {
      header: () => <span>Upload Status</span>,
      footer: (info) => info.column.id,
    }),
    columnHelper.accessor("submitted", {
      header: "Submitted",
      cell: (info) => {
        const obj = info.getValue();
        return (
          <>
            <span className="when">{obj.when}</span>
            <span className="timestamp">{obj.timestamp}</span>
          </>
        );
      },
      footer: (info) => info.column.id,
    }),
    columnHelper.accessor("details", {
      header: "Details",
      footer: (info) => info.column.id,
    }),
  ];

  const [{ pageIndex, pageSize }, setPagination] =
    React.useState<PaginationState>({
      pageIndex: 0,
      pageSize: 10,
    });

  const defaultData = React.useMemo(() => data || [], data || []);

  const pagination = React.useMemo(
    () => ({
      pageIndex,
      pageSize,
    }),
    [pageIndex, pageSize]
  );

  const table = useReactTable({
    data: defaultData,
    columns,
    pageCount: 1,
    state: {
      pagination,
    },
    onPaginationChange: setPagination,
    getCoreRowModel: getCoreRowModel(),
    manualPagination: true,
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
            className="border p-1 rounded w-16"
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
