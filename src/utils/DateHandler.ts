export const getYears = () => {
  const start = new Date().getFullYear() - 18;
  const stop = start - 100;
  const years: string[] = [];

  for (let i = start; i >= stop; i++) {
    years.push(`${i}`);
  }
  return years;
};
