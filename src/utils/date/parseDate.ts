const parseDate = (date: Date | string) => {
  if (typeof date === "string") {
    const dates = new Date(date);
    const year = dates.getFullYear();
    const month = dates.getMonth() + 1;
    const day = dates.getDate();

    return { year, month, day };
  }
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();

  return { year, month, day };
};

export default parseDate;
