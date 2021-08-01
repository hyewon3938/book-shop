export const getCookie = (cookieName) => {
  var value = document.cookie.match("(^|;) ?" + cookieName + "=([^;]*)(;|$)");
  return value ? value[2] : null;
};
