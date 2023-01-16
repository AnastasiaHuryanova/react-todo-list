const getMonthNumber = (date) => {
  const month = date.getMonth() + 1;
  return month.toString().length < 2 ? `0${month}`: month;
};
const getShortYear = (date) => {
    return String(date.getFullYear()).slice(-2)
}

export const getDateAsString = (date) => {
    return `${date.getDate()}/${getMonthNumber(
        date
      )}/${getShortYear(date)}`
}