const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export const getDate = (date: Date) => {
  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const day = date.getDate();

  return `${year}-${month}-${day}`;
};

// get date 30 days ago in format YYYY-MM-DD
export const getDate30DaysAgo = (date: Date = new Date()) => {
  date.setDate(date.getDate() - 30);

  return date;
};

export const checkIsDateIsToday = (date: Date) => {
  const today = new Date();
  date = new Date(date);
  return date.getDate() === today.getDate() && date.getMonth() === today.getMonth();
};

export const getMonth = (date: Date) => {
  const month = date.getMonth();
  return monthNames[month] + " " + date.getDate();
};
