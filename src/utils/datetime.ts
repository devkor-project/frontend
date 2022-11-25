export const translateDatetime = (datetime: string) => {
  const date = new Date(datetime);
  console.log(date);

  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  return `${year}-${month}-${day}`;
};
