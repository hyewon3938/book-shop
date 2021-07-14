export const numberWithCommas = (numberValue) => {
  const number = numberValue.toString().replace(/,/gi, "");
  return Number(number).toLocaleString();
};
