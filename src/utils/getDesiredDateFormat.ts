export const getDesiredDateFormat = (dateString: string) => {
  const dateDetails = new Date(dateString);

  const month = dateDetails.toLocaleString('default', { month: 'short' });
  const date = dateDetails.getDate();
  let hours = dateDetails.getUTCHours();
  let minutes = dateDetails.getUTCMinutes().toString();
  if (minutes.length === 1) {
    minutes = `0${minutes}`;
  }
  let ampm = 'AM';
  if (hours > 12) {
    hours %= 12;
    ampm = 'PM';
  }
  const time = `${hours}:${minutes} ${ampm}`;
  return `${month} ${date} at ${time}`;
};
