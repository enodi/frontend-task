import { format } from "date-fns";

export const formatAmount = (amount) => {
  return new Intl.NumberFormat("en-GB", {
    style: "currency",
    currency: "GBP",
  }).format(amount)
};

export const formatDate = (date, dateOrder) => format(date, dateOrder);
