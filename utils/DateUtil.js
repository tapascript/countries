// new Date(new Date(new Date().toUTCString().substring(0, new Date().toUTCString().lastIndexOf(' '))).getTime() + 330 * 60 * 1000)

const months = [
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

const getUTCDateTimeInMilliseconds = () => {
  return new Date(
    new Date()
      .toUTCString()
      .substring(0, new Date().toUTCString().lastIndexOf(" "))
  ).getTime();
};

const getDateTimeUsingTimezoneOffset = (offset) => {
  return new Date(getUTCDateTimeInMilliseconds() + offset * 60 * 1000);
};

const getFormattedDateTimeUsingTimezoneOffset = (offset, noYear) => {
  return noYear
    ? `${
        months[getDateTimeUsingTimezoneOffset(offset).getMonth()]
      } ${getDateTimeUsingTimezoneOffset(
        offset
      ).getDate()}, ${getDateTimeUsingTimezoneOffset(
        offset
      ).getHours()}:${getDateTimeUsingTimezoneOffset(
        offset
      ).getMinutes()}:${getDateTimeUsingTimezoneOffset(600).getSeconds()}`
    : `${
        months[getDateTimeUsingTimezoneOffset(offset).getMonth()]
      } ${getDateTimeUsingTimezoneOffset(
        offset
      ).getDate()}, ${getDateTimeUsingTimezoneOffset(
        offset
      ).getFullYear()} ${getDateTimeUsingTimezoneOffset(
        offset
      ).getHours()}:${getDateTimeUsingTimezoneOffset(
        offset
      ).getMinutes()}:${getDateTimeUsingTimezoneOffset(600).getSeconds()}`;
};

const getFormattedDateUsingTimezoneOffset = (offset, noYear) => {
  return noYear
    ? `${
        months[getDateTimeUsingTimezoneOffset(offset).getMonth()]
      } ${getDateTimeUsingTimezoneOffset(offset).getDate()}`
    : `${
        months[getDateTimeUsingTimezoneOffset(offset).getMonth()]
      } ${getDateTimeUsingTimezoneOffset(
        offset
      ).getDate()}, ${getDateTimeUsingTimezoneOffset(offset).getFullYear()}`;
};

const getFormattedTimeUsingTimezoneOffset = (offset) => {
  return `${getDateTimeUsingTimezoneOffset(
    offset
  ).getHours()}:${getDateTimeUsingTimezoneOffset(
    offset
  ).getMinutes()}:${getDateTimeUsingTimezoneOffset(600).getSeconds()}`;
};

const calculateOffsetFromTZ = (timeZome) => {
  let splits;
  if(timeZome.includes("+")) {
    splits = timeZome.split("+")[1].split(':');
  } else if(timeZome.includes("-")) {
    splits = timeZome.split("-")[1].split(':');
  }
  return (splits && Array.isArray(splits)) ?
    parseInt(splits[0],10) * 60 + parseInt(splits[1],10)
    : 0;
}

export {
  getFormattedDateTimeUsingTimezoneOffset,
  getUTCDateTimeInMilliseconds,
  getDateTimeUsingTimezoneOffset,
  getFormattedDateUsingTimezoneOffset,
  getFormattedTimeUsingTimezoneOffset,
  calculateOffsetFromTZ
};
