import moment from "moment";

export const getPersistedItem = (key) => {
  const value = localStorage.getItem(key);

  if (value === undefined || value === "undefined") {
    return undefined;
  }

  return JSON.parse(localStorage.getItem(key));
};

export const setPersistedItem = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};

const getMomentDate = (date) => {
  const [aDD, aMM, aYY] = date.split("/");
  return moment(`${aMM}/${aDD}/${aYY}`);
};

export const sortByDate = (array) => {
  return array.sort((a, b) => {
    return getMomentDate(a.date) > getMomentDate(b.date);
  });
};

export const getDates = (startDate, stopDate, availableDates = []) => {
  const dateArray = [];
  const dates = availableDates.map(({ date }) => date);
  let currentDate = getMomentDate(startDate);
  const endDate = getMomentDate(stopDate);
  do {
    const today = currentDate.format("DD/MM/YYYY");

    dateArray.push(
      dates.includes(currentDate)
        ? {
            date: today,
          }
        : {
            date: today,
            weight: parseInt(
              availableDates.find((dates) => dates.date === today)?.weight
            ),
          }
    );
    currentDate = currentDate.add(1, "days");
  } while (currentDate <= endDate);
  console.log(dateArray);
  return dateArray;
};
