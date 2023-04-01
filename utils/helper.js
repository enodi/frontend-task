import { format } from "date-fns";

export const formatAmount = (amount) => {
  return new Intl.NumberFormat("en-GB", {
    style: "currency",
    currency: "GBP",
    maximumFractionDigits: 0,
  }).format(amount)
};

export const formatDate = (date, dateOrder) => format(date, dateOrder);
