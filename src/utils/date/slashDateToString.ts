import parseDate from "./parseDate";

const slashDateToString = (date: Date) => {
  const { year, month, day } = parseDate(date);

  return `${year}/${month}/${day}`;
};

export default slashDateToString;
