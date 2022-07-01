const regexpCheck = /^\d{4}-?\d{0,2}-?\d{0,2} ?(?:\d{2}:\d{2})?$/;

export const checkDate = (date: string) => {
  const dateParam = date.match(regexpCheck);

  return {
    error:
      dateParam === null ? "date is wrongly formated 'aaaa-mm-dd hh:mm'" : null,
    data: date,
  };
};
