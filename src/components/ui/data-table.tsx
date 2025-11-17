"use client";

import { ChevronDown, ChevronUp } from "lucide-react";
import { useMemo, useState } from "react";

import { Input } from "~/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "~/components/ui/table";

export interface ColumnConfig<T> {
  key: string;
  label: string;
  width?: string;
  sortable?: boolean;
  filterable?: boolean;
  render?: (value: unknown, row: T, key: string) => React.ReactNode;
  className?: string;
}

export interface DataTableProps<T extends Record<string, unknown>> {
  data: T[];
  columns: ColumnConfig<T>[];
  loading?: boolean;
  emptyMessage?: string;
  onRowClick?: (row: T) => void;
  rowClassName?: (row: T) => string;
  rowActionsColumn?: (row: T) => React.ReactNode;
}

type SortDirection = "asc" | "desc" | null;

export function DataTable<T extends Record<string, unknown>>({
  data,
  columns,
  loading = false,
  emptyMessage = "No data available",
  onRowClick,
  rowClassName,
  rowActionsColumn,
}: DataTableProps<T>) {
  const [sortKey, setSortKey] = useState<string | null>(null);
  const [sortDirection, setSortDirection] = useState<SortDirection>(null);
  const [filterValues, setFilterValues] = useState<Record<string, string>>({});

  const handleSort = (key: string) => {
    if (!columns.find((col) => col.key === key)?.sortable) return;

    if (sortKey === key) {
      if (sortDirection === "asc") {
        setSortDirection("desc");
      } else if (sortDirection === "desc") {
        setSortDirection(null);
        setSortKey(null);
      }
    } else {
      setSortKey(key);
      setSortDirection("asc");
    }
  };

  const handleFilterChange = (key: string, value: string) => {
    setFilterValues((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const filteredData = useMemo(() => {
    return data.filter((row) => {
      return Object.entries(filterValues).every(([key, filterValue]) => {
        if (!filterValue) return true;
        const cellValue = row[key];
        let stringValue = "";
        if (typeof cellValue === "string") {
          stringValue = cellValue;
        } else if (typeof cellValue === "number") {
          stringValue = cellValue.toString();
        } else if (cellValue instanceof Date) {
          stringValue = cellValue.toLocaleDateString();
        } else if (typeof cellValue === "boolean") {
          stringValue = cellValue.toString();
        }
        return stringValue.toLowerCase().includes(filterValue.toLowerCase());
      });
    });
  }, [data, filterValues]);

  const sortedData = useMemo(() => {
    if (!sortKey || !sortDirection) return filteredData;

    const sorted = [...filteredData].sort((a, b) => {
      const aVal = a[sortKey];
      const bVal = b[sortKey];

      if (aVal === null || aVal === undefined) return 1;
      if (bVal === null || bVal === undefined) return -1;

      if (typeof aVal === "string" && typeof bVal === "string") {
        return sortDirection === "asc"
          ? aVal.localeCompare(bVal)
          : bVal.localeCompare(aVal);
      }

      if (typeof aVal === "number" && typeof bVal === "number") {
        return sortDirection === "asc" ? aVal - bVal : bVal - aVal;
      }

      return 0;
    });

    return sorted;
  }, [filteredData, sortKey, sortDirection]);

  if (loading) {
    return (
      <div className="flex items-center justify-center p-8">
        <p className="text-muted-foreground">Loading...</p>
      </div>
    );
  }

  if (sortedData.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center p-12 text-center">
        <p className="text-muted-foreground">{emptyMessage}</p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap gap-3">
        {columns
          .filter((col) => col.filterable)
          .map((col) => (
            <Input
              key={col.key}
              placeholder={`Filter ${col.label}...`}
              value={filterValues[col.key] ?? ""}
              onChange={(e) => handleFilterChange(col.key, e.target.value)}
              className="max-w-xs"
            />
          ))}
      </div>

      <div className="rounded-md overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow>
              {columns.map((col) => (
                <TableHead
                  key={col.key}
                  className={`${col.width ?? ""} ${col.className ?? ""}`}
                  onClick={() => col.sortable && handleSort(col.key)}
                  style={{
                    cursor: col.sortable ? "pointer" : "default",
                  }}
                >
                  <div className="flex items-center gap-2">
                    <span>{col.label}</span>
                    {col.sortable && sortKey === col.key && (
                      <>
                        {sortDirection === "asc" && (
                          <ChevronUp className="h-4 w-4" />
                        )}
                        {sortDirection === "desc" && (
                          <ChevronDown className="h-4 w-4" />
                        )}
                      </>
                    )}
                  </div>
                </TableHead>
              ))}
              {rowActionsColumn && <TableHead className="text-right">Actions</TableHead>}
            </TableRow>
          </TableHeader>
          <TableBody>
            {sortedData.map((row, idx) => (
              <TableRow
                key={idx}
                className={rowClassName?.(row)}
                onClick={() => onRowClick?.(row)}
                style={{
                  cursor: onRowClick ? "pointer" : "default",
                }}
              >
                {columns.map((col) => {
                  const cellValue = row[col.key];
                  const displayValue =
                    typeof cellValue === "string"
                      ? cellValue
                      : typeof cellValue === "number"
                        ? cellValue
                        : cellValue instanceof Date
                          ? cellValue.toLocaleDateString()
                          : cellValue === null || cellValue === undefined
                            ? ""
                            : typeof cellValue === "boolean"
                              ? cellValue.toString()
                              : "";

                  return (
                    <TableCell key={col.key} className={col.className}>
                      {col.render
                        ? col.render(cellValue, row, col.key)
                        : (displayValue as React.ReactNode)}
                    </TableCell>
                  );
                })}
                {rowActionsColumn && (
                  <TableCell className="text-right">
                    {rowActionsColumn(row)}
                  </TableCell>
                )}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
