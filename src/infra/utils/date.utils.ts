export const currentDateToString = (): string => {
  const currentDate = new Date();
  const currentMonth: string =
    currentDate.getMonth() - 1 < 10
      ? `0${currentDate.getMonth() - 1}`
      : `${currentDate.getMonth() - 1}`;

  const currentDay: string =
    currentDate.getDate() - 1 < 10
      ? `0${currentDate.getDate() - 1}`
      : `${currentDate.getDate() - 1}`;

  return `${currentDate.getFullYear()}-${currentMonth}-${currentDay}`;
};
