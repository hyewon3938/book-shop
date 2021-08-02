export const getCookie = (cookieName) => {
  var value = document.cookie.match("(^|;) ?" + cookieName + "=([^;]*)(;|$)");
  return value ? value[2] : null;
};

export const deleteCookie = (cookieName) => {
  document.cookie = cookieName + "=; expires=Thu, 01 Jan 1999 00:00:10 GMT;";
};
