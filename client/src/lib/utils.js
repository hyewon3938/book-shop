export const numberWithCommas = (numberValue) => {
  const number = numberValue.toString().replace(/,/gi, "");
  return Number(number).toLocaleString();
};

export const scrollToTop = () => {
  window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
};
