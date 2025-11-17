import { format, isValid } from "date-fns";

export type DatePickerFormat = Date | string | number | null | undefined;

export const formatStr = {
  dateTime: "dd MMM yyyy h:mm:ss a",
  date: "dd MMM yyyy",
  time: "h:mm:ss a",
  split: {
    dateTime: "dd/MM/yyyy h:mm:ss a",
    date: "dd/MM/yyyy",
  },
  paramCase: {
    dateTime: "dd-MM-yyyy h:mm:ss a",
    date: "dd-MM-yyyy",
  },
  reverseParamCase: {
    dateTime: "yyyy-MM-dd h:mm:ss a",
    date: "yyyy-MM-dd",
  },
};

function toDate(input: DatePickerFormat): Date | null {
  if (input === null || input === undefined || input === "") return null;
  const date = typeof input === "string" || typeof input === "number" ? new Date(input) : input;
  return isValid(date) ? date : null;
}

// Format full date-time
// Example: fDateTime("2025-06-18T10:00") => "18 Jun 2025 10:00:00 AM"
export function fDateTime(date: DatePickerFormat, fmt?: string) {
  if (date === null || date === undefined || date === "") return undefined;

  const d = toDate(date);

  return d ? format(d, fmt ?? formatStr.dateTime) : "Invalid time value";
}
