"use client";

import { fDateTime, type DatePickerFormat } from "~/utils/format-time";

interface FormattedDateProps {
  value: unknown;
  placeholder?: string;
  format?: string;
  className?: string;
}

export function FormattedDate({ value, placeholder = "—", format, className }: FormattedDateProps) {
  if (value === null || value === undefined || value === "") {
    return <span className={className}>{placeholder}</span>;
  }

  let safeValue: DatePickerFormat = undefined;

  if (value instanceof Date) {
    safeValue = value;
  } else if (typeof value === "string" || typeof value === "number") {
    safeValue = value;
  } else {
    return <span className={className}>{placeholder}</span>;
  }

  const formatted = fDateTime(safeValue, format);

  return <span className={className}>{formatted ?? placeholder}</span>;
}
